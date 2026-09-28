"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

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

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const isSubmittingRef = useRef(false);

  function updateField(field: keyof FormState) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((previous) => ({ ...previous, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmittingRef.current) return;
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
        throw new Error("Request failed");
      }

      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      isSubmittingRef.current = false;
    }
  }

  const isSubmitting = status === "submitting";

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
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-200">Full Name</label>
          <input id="fullName" type="text" required maxLength={200} value={form.fullName} onChange={updateField("fullName")} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">Company / Organization</label>
          <input id="company" type="text" maxLength={200} value={form.company} onChange={updateField("company")} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Company or organization" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">Phone Number</label>
          <input id="phone" type="tel" maxLength={50} value={form.phone} onChange={updateField("phone")} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="(239) 204-8938" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Email Address</label>
          <input id="email" type="email" required maxLength={200} value={form.email} onChange={updateField("email")} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="name@email.com" />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-200">Service Needed</label>
          <input id="service" type="text" maxLength={200} value={form.service} onChange={updateField("service")} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Armed Security" />
        </div>
        <div>
          <label htmlFor="siteType" className="mb-2 block text-sm font-medium text-slate-200">Property / Site Type</label>
          <input id="siteType" type="text" maxLength={200} value={form.siteType} onChange={updateField("siteType")} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Commercial property" />
        </div>
        <div>
          <label htmlFor="city" className="mb-2 block text-sm font-medium text-slate-200">City</label>
          <input id="city" type="text" maxLength={100} value={form.city} onChange={updateField("city")} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Naples" />
        </div>
        <div>
          <label htmlFor="startDate" className="mb-2 block text-sm font-medium text-slate-200">Desired Start Date</label>
          <input id="startDate" type="date" value={form.startDate} onChange={updateField("startDate")} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="coverage" className="mb-2 block text-sm font-medium text-slate-200">Estimated Coverage / Hours</label>
          <input id="coverage" type="text" maxLength={200} value={form.coverage} onChange={updateField("coverage")} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="e.g. 12 hours / 7 days a week" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Message / Security Needs</label>
          <textarea id="message" required rows={5} maxLength={5000} value={form.message} onChange={updateField("message")} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Tell us about the property, your security concerns, and services needed." />
        </div>
      </div>

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
