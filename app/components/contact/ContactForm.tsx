"use client";

import { useState } from "react";
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

/**
 * Right column: the project enquiry form.
 * Holds all field state locally; onSubmit is stubbed (logs payload) so it's
 * drop-in usable — wire it to your API / email handler where indicated.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleFeature = (feature: string) =>
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));

  const handleSubmit = () => {
    // TODO: replace with your submission logic (fetch to an API route, etc.)
    console.log("Contact form submitted:", form);
  };

  return (
    <div className="rounded-card-lg bg-surface p-6 sm:p-8 md:p-10">
      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={(v) => setField("name", v)}
        />
        <TextField
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(v) => setField("email", v)}
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
        />
      </div>

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-8 w-full rounded-pill bg-brand-gradient py-5 text-lg font-semibold text-black transition-opacity hover:opacity-90 active:scale-[0.99]"
      >
        Send Message
      </button>
    </div>
  );
}