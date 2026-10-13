import { services } from "./site-data";

export const quoteFields = [
  "fullName",
  "company",
  "phone",
  "email",
  "service",
  "siteType",
  "city",
  "startDate",
  "coverage",
  "message",
] as const;

export type QuoteField = (typeof quoteFields)[number];
export type QuoteValues = Record<QuoteField, string>;
export type QuoteFieldErrors = Partial<Record<QuoteField, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_CHARACTERS_REGEX = /^\+?[0-9().\-\s]+$/;

export function validateQuote(values: QuoteValues): QuoteFieldErrors {
  const errors: QuoteFieldErrors = {};

  for (const field of quoteFields) {
    if (!values[field].trim()) errors[field] = "This field is required";
  }

  if (values.email.trim() && !EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  const phone = values.phone.trim();
  const phoneDigits = phone.replace(/\D/g, "");
  if (phone && (!PHONE_CHARACTERS_REGEX.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15)) {
    errors.phone = "Enter a valid phone number";
  }

  if (values.service.trim() && !services.some((service) => service.name === values.service.trim())) {
    errors.service = "Select a valid service";
  }

  if (values.startDate.trim()) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(values.startDate.trim());
    if (!match) {
      errors.startDate = "Enter a valid date";
    } else {
      const [, year, month, day] = match;
      const numericYear = Number(year);
      const numericMonth = Number(month);
      const numericDay = Number(day);
      const isLeapYear = numericYear % 4 === 0 && (numericYear % 100 !== 0 || numericYear % 400 === 0);
      const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (
        numericYear === 0 ||
        numericMonth < 1 ||
        numericMonth > 12 ||
        numericDay < 1 ||
        numericDay > daysInMonth[numericMonth - 1]
      ) {
        errors.startDate = "Enter a valid date";
      }
    }
  }

  return errors;
}