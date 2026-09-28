import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Destination is server-controlled only — never accepted from the client payload.
const RECIPIENT_EMAIL = "blackhornquotes@gmail.com";
const DEFAULT_FROM = "Blackhorn Security Quotes <onboarding@resend.dev>";

const MAX_LENGTHS = {
  fullName: 200,
  company: 200,
  phone: 50,
  email: 200,
  service: 200,
  siteType: 200,
  city: 100,
  startDate: 50,
  coverage: 200,
  message: 5000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Minimal in-memory limiter: resets on cold start and isn't shared across serverless instances.
const rateLimitBuckets = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip);
  if (!bucket || now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitBuckets.set(ip, { count: 1, windowStart: now });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function displayOrFallback(value: string): string {
  return value.length > 0 ? value : "Not provided";
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  // Honeypot field: real users never fill it in. Bots that do get a fake success.
  if (clean(data.website, 200).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const fullName = clean(data.fullName, MAX_LENGTHS.fullName);
  const company = clean(data.company, MAX_LENGTHS.company);
  const phone = clean(data.phone, MAX_LENGTHS.phone);
  const email = clean(data.email, MAX_LENGTHS.email);
  const service = clean(data.service, MAX_LENGTHS.service);
  const siteType = clean(data.siteType, MAX_LENGTHS.siteType);
  const city = clean(data.city, MAX_LENGTHS.city);
  const startDate = clean(data.startDate, MAX_LENGTHS.startDate);
  const coverage = clean(data.coverage, MAX_LENGTHS.coverage);
  const message = clean(data.message, MAX_LENGTHS.message);

  if (!fullName || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json({ ok: false, error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "short",
  });

  const textBody = [
    "NEW BLACKHORN SECURITY QUOTE REQUEST",
    "",
    "Customer Information",
    `Name: ${fullName}`,
    `Company: ${displayOrFallback(company)}`,
    `Phone: ${displayOrFallback(phone)}`,
    `Email: ${email}`,
    "",
    "Security Request",
    `Service Needed: ${displayOrFallback(service)}`,
    `Property / Site Type: ${displayOrFallback(siteType)}`,
    `City: ${displayOrFallback(city)}`,
    `Desired Start Date: ${displayOrFallback(startDate)}`,
    `Estimated Coverage / Hours: ${displayOrFallback(coverage)}`,
    "",
    "Customer Message:",
    message,
    "",
    `Submitted: ${submittedAt} (ET)`,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Security Quote Request — ${fullName}`,
      text: textBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending quote email:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 500 });
  }
}
