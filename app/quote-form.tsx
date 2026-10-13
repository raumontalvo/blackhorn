"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { services } from "./site-data";
import { validateQuote, type QuoteField, type QuoteFieldErrors } from "./quote-validation";

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  siteType: string;
  city: string;
  startDate: string;
  coverage: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  siteType: "",
  city: "",
  startDate: "",
  coverage: "",
  message: "",
  website: "",
};

type Status = "idle" | "invalid" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<QuoteFieldErrors>({});
  const isSubmittingRef = useRef(false);

  function updateField(field: keyof FormState) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = event.target.value;
      const next = { ...form, [field]: value };
      setForm(next);
      if (Object.keys(errors).length > 0) {
        const nextErrors = validateQuote(next);
        setErrors(nextErrors);
        if (status === "invalid") {
          setStatus(Object.keys(nextErrors).length > 0 ? "invalid" : "idle");
        }
      }
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmittingRef.current) return;
    const validationErrors = validateQuote(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus("invalid");
      const firstInvalidField = Object.keys(validationErrors)[0] as QuoteField;
      const firstInvalidElement = document.getElementById(firstInvalidField);
      firstInvalidElement?.scrollIntoView({ behavior: "smooth", block: "center" });
      firstInvalidElement?.focus({ preventScroll: true });
      return;
    }

    isSubmittingRef.current = true;

    setStatus("submitting");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        if (response.status === 400 && data?.fields) {
          setErrors(data.fields as QuoteFieldErrors);
          setStatus("invalid");
          const firstInvalidField = Object.keys(data.fields)[0] as QuoteField | undefined;
          const firstInvalidElement = firstInvalidField ? document.getElementById(firstInvalidField) : null;
          firstInvalidElement?.scrollIntoView({ behavior: "smooth", block: "center" });
          firstInvalidElement?.focus({ preventScroll: true });
          return;
        }
        throw new Error("Request failed");
      }

      setForm(initialState);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      isSubmittingRef.current = false;
    }
  }

  const isSubmitting = status === "submitting";
  const fieldClass = (field: QuoteField) =>
    `w-full rounded-xl border ${errors[field] ? "border-red-500" : "border-white/10"} bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none`;
  const label = (text: string, field: QuoteField) => (
    <label htmlFor={field} className="mb-2 block text-sm font-medium text-slate-200">
      {text} <span className="text-red-400" aria-hidden="true">*</span>
    </label>
  );
  const fieldError = (field: QuoteField) => errors[field] && (
    <p id={`${field}-error`} className="mt-1 text-sm text-red-400">{errors[field]}</p>
  );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[28px] border border-white/10 bg-[#0A1628] p-6 sm:p-8"
    >
      {/* Honeypot: hidden from real visitors, only bots fill this in. */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={updateField("website")}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          {label("Full Name", "fullName")}
          <input id="fullName" type="text" required aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} maxLength={200} value={form.fullName} onChange={updateField("fullName")} className={fieldClass("fullName")} placeholder="Your full name" />
          {fieldError("fullName")}
        </div>
        <div>
          {label("Company / Organization", "company")}
          <input id="company" type="text" required aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined} maxLength={200} value={form.company} onChange={updateField("company")} className={fieldClass("company")} placeholder="Company or organization" />
          {fieldError("company")}
        </div>
        <div>
          {label("Phone Number", "phone")}
          <input id="phone" type="tel" required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} maxLength={50} value={form.phone} onChange={updateField("phone")} className={fieldClass("phone")} placeholder="(239) 204-8938" />
          {fieldError("phone")}
        </div>
        <div>
          {label("Email Address", "email")}
          <input id="email" type="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} maxLength={200} value={form.email} onChange={updateField("email")} className={fieldClass("email")} placeholder="name@email.com" />
          {fieldError("email")}
        </div>
        <div>
          {label("Service Needed", "service")}
          <select id="service" required aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined} value={form.service} onChange={updateField("service")} className={fieldClass("service")}>
            <option value="">Select a service</option>
            {services.map((service) => <option key={service.slug} value={service.name}>{service.name}</option>)}
          </select>
          {fieldError("service")}
        </div>
        <div>
          {label("Property / Site Type", "siteType")}
          <input id="siteType" type="text" required aria-invalid={!!errors.siteType} aria-describedby={errors.siteType ? "siteType-error" : undefined} maxLength={200} value={form.siteType} onChange={updateField("siteType")} className={fieldClass("siteType")} placeholder="Commercial property" />
          {fieldError("siteType")}
        </div>
        <div>
          {label("City / Location", "city")}
          <input id="city" type="text" required aria-invalid={!!errors.city} aria-describedby={errors.city ? "city-error" : undefined} maxLength={100} value={form.city} onChange={updateField("city")} className={fieldClass("city")} placeholder="Naples" />
          {fieldError("city")}
        </div>
        <div>
          {label("Desired Start Date", "startDate")}
          <input id="startDate" type="date" required aria-invalid={!!errors.startDate} aria-describedby={errors.startDate ? "startDate-error" : undefined} value={form.startDate} onChange={updateField("startDate")} className={fieldClass("startDate")} />
          {fieldError("startDate")}
        </div>
        <div className="md:col-span-2">
          {label("Estimated Coverage / Hours", "coverage")}
          <input id="coverage" type="text" required aria-invalid={!!errors.coverage} aria-describedby={errors.coverage ? "coverage-error" : undefined} maxLength={200} value={form.coverage} onChange={updateField("coverage")} className={fieldClass("coverage")} placeholder="e.g. 12 hours / 7 days a week" />
          {fieldError("coverage")}
        </div>
        <div className="md:col-span-2">
          {label("Message / Security Needs", "message")}
          <textarea id="message" required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} rows={5} maxLength={5000} value={form.message} onChange={updateField("message")} className={fieldClass("message")} placeholder="Tell us about the property, your security concerns, and services needed." />
          {fieldError("message")}
        </div>
      </div>

      {status === "invalid" && (
        <p role="alert" className="mt-6 text-sm text-red-300">
          Please complete all required fields before submitting your request.
        </p>
      )}

      {status === "success" && (
        <p className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
          Thank you. Your quote request has been sent to Blackhorn Security. We&rsquo;ll be in touch soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          We couldn&apos;t send your request right now. Please try again or call (239) 204-8938.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1473E6] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_35px_rgba(20,115,230,0.35)] transition hover:bg-[#2589FF] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}
