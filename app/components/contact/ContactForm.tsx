"use client";

import { useState } from "react";
import { z } from "zod";
import { serviceOptions, featureOptions } from "@/app/data/contact";
import {
  TextField,
  TextAreaField,
  ServiceSelect,
  FeatureCheckbox,
} from "./FormFields";

interface FormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  service: string;
  features: string[];
  details: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  budget: "",
  service: serviceOptions[0],
  features: [],
  details: "",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Name rules (enforced via Zod):
 * - required, min 2 chars
 * - only letters, numbers, spaces, apostrophes, and hyphens allowed
 * - must contain at least one letter (rejects numeric-only input like "12345")
 */
const nameSchema = z
  .string()
  .trim()
  .min(1, "Please enter your name.")
  .min(2, "That name looks too short.")
  .regex(
    /^[a-zA-Z0-9\s'-]+$/,
    "Name can only contain letters, numbers, spaces, apostrophes, and hyphens."
  )
  .refine((val) => /[a-zA-Z]/.test(val), {
    message: "Name cannot be numbers only.",
  });

/** Pure validation: returns a map of field -> message for invalid fields. */
function validate(data: FormState): FieldErrors {
  const errors: FieldErrors = {};

  const nameResult = nameSchema.safeParse(data.name);
  if (!nameResult.success) {
    errors.name = nameResult.error.issues[0]?.message ?? "Invalid name.";
  }

  if (!data.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (!data.details.trim())
    errors.details = "Tell us a little about your project.";
  else if (data.details.trim().length < 10)
    errors.details = "Please add a bit more detail (at least 10 characters).";

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  // Re-validate a field once it has been touched or after a submit attempt.
  const revalidate = (next: FormState, key: keyof FormState) => {
    if (!touched[key]) return;
    setErrors((prev) => {
      const fresh = validate(next);
      return { ...prev, [key]: fresh[key] };
    });
  };

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      revalidate(next, key);
      return next;
    });

  const handleBlur = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validate(form)[key] }));
  };

  const toggleFeature = (feature: string) =>
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));

  const handleSubmit = () => {
    const found = validate(form);
    setErrors(found);
    setTouched({ name: true, email: true, details: true });

    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    // TODO: replace with your submission logic (fetch to an API route, etc.)
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm(INITIAL);
    setErrors({});
    setTouched({});
  };

  if (submitted) {
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center gap-4 rounded-[12px] bg-[#1A1A1A] p-8 text-center sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-text/15 text-green-text">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12l5 5L20 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="font-display text-2xl text-white">Message sent!</h3>
        <p className="max-w-sm text-sm text-white/50">
          Thanks for reaching out — we&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-card-lg bg-[#1A1A1A] rounded-[12px] p-6 sm:p-8 md:p-10">
      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={(v) => setField("name", v)}
          onBlur={() => handleBlur("name")}
          error={errors.name}
        />
        <TextField
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(v) => setField("email", v)}
          onBlur={() => handleBlur("email")}
          error={errors.email}
        />
      </div>

      {/* Company + Budget */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          name="company"
          placeholder="Company / Startup"
          value={form.company}
          onChange={(v) => setField("company", v)}
        />
        <TextField
          name="budget"
          placeholder="Budget (e.g. $5k – $10K)"
          value={form.budget}
          onChange={(v) => setField("budget", v)}
        />
      </div>

      {/* Service dropdown */}
      <div className="mt-5">
        <ServiceSelect
          options={serviceOptions}
          value={form.service}
          onChange={(v) => setField("service", v)}
        />
      </div>

      {/* Feature checkboxes */}
      <div className="mt-8">
        <p className="mb-5 text-base text-muted">Which features do you need?</p>
        <div className="flex flex-col gap-4">
          {featureOptions.map((feature) => (
            <FeatureCheckbox
              key={feature}
              label={feature}
              checked={form.features.includes(feature)}
              onToggle={() => toggleFeature(feature)}
            />
          ))}
        </div>
      </div>

      {/* Project details */}
      <div className="mt-8">
        <TextAreaField
          name="details"
          placeholder="Describe your project – what are you building, what's the timeline, any details that help us understand your vision…"
          value={form.details}
          onChange={(v) => setField("details", v)}
          onBlur={() => handleBlur("details")}
          error={errors.details}
        />
      </div>

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-8 w-full rounded-pill bg-btn-gradient rounded-full py-5 text-lg font-medium text-sm text-black transition-opacity hover:opacity-90 active:scale-[0.99]"
      >
        Send Message
      </button>
    </div>
  );
}