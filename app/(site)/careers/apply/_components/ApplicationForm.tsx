"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Job } from "../../../../lib/careers-data";

interface FormState {
  name: string;
  email: string;
  phone: string;
  experience: string;
  currentRole: string;
  portfolioUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  whyArzen: string;
  coverLetter: string;
}

// Updated to match your Figma design options
const EXPERIENCE_OPTIONS = [
  "0-1 Year",
  "2-3 Year",
  "4-5 Year",
  "6-7 Year",
];

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  experience: "",
  currentRole: "",
  portfolioUrl: "",
  linkedinUrl: "",
  githubUrl: "",
  whyArzen: "",
  coverLetter: "",
};

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors focus:border-green-500/60";

export default function ApplicationForm({ job }: { job: Job }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [cv, setCv] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError("File is too large. Max size is 5MB.");
      return;
    }
    setError(null);
    setCv(file);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("Please fill in your name and email.");
      return;
    }
    setError(null);
    setStatus("submitting");

    try {
      const payload = new FormData();
      payload.append("role", job.title);
      payload.append("slug", job.slug);
      Object.entries(form).forEach(([key, value]) => payload.append(key, value));
      if (cv) payload.append("cv", cv);

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: payload,
      });
      if (!res.ok) throw new Error("Submission failed");

      setStatus("submitted");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again in a moment.");
    }
  }

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
        <h3 className="text-lg font-bold text-white">Application sent.</h3>
        <p className="mt-2 text-sm text-gray-400">
          Thanks for applying to {job.title} — we typically respond within
          3–5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <p className="text-sm text-gray-500">
        Fill out the form below — we typically respond within 3–5 business
        days.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Your Name">
          <input
            className={inputClasses}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            required
          />
        </Field>
        <Field label="Your Email">
          <input
            type="email"
            className={inputClasses}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            required
          />
        </Field>

        <Field label="Phone">
          <input
            className={inputClasses}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+92 300 1234567"
          />
        </Field>
        <Field label="Years of Experience">
          {/* Replaced native select with CustomSelect */}
          <CustomSelect
            value={form.experience}
            onChange={(val) => update("experience", val)}
            options={EXPERIENCE_OPTIONS}
          />
        </Field>

        <Field label="Current Role">
          <input
            className={inputClasses}
            value={form.currentRole}
            onChange={(e) => update("currentRole", e.target.value)}
            placeholder="e.g Frontend Developer at Acme"
          />
        </Field>
        <Field label="Portfolio URL">
          <input
            className={inputClasses}
            value={form.portfolioUrl}
            onChange={(e) => update("portfolioUrl", e.target.value)}
            placeholder="https://yourportfolio.com"
          />
        </Field>

        <Field label="LinkedIn URL">
          <input
            className={inputClasses}
            value={form.linkedinUrl}
            onChange={(e) => update("linkedinUrl", e.target.value)}
            placeholder="https://linkedin.com/in/you"
          />
        </Field>
        <Field label="GitHub URL">
          <input
            className={inputClasses}
            value={form.githubUrl}
            onChange={(e) => update("githubUrl", e.target.value)}
            placeholder="https://github.com/you"
          />
        </Field>
      </div>

      <Field label="Why Arzen?">
        <textarea
          className={`${inputClasses} min-h-[110px] resize-none`}
          value={form.whyArzen}
          onChange={(e) => update("whyArzen", e.target.value)}
          placeholder="Tell us what draws you to Arzen"
        />
      </Field>

      <Field label="Cover Letter">
        <textarea
          className={`${inputClasses} min-h-[140px] resize-none`}
          value={form.coverLetter}
          onChange={(e) => update("coverLetter", e.target.value)}
          placeholder="Anything else you'd like us to know..."
        />
      </Field>

      <Field label="Upload CV">
  <label
    htmlFor="cv-upload"
    className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-white/15 bg-[#1A1A1A] px-4 py-10 text-center transition-all duration-300 hover:border-[#4ADE80] hover:bg-[#4ADE80]/10"
  >
    <span aria-hidden className="text-xl transition-transform duration-300 group-hover:scale-110">📄</span>
    <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-white">
      {cv ? cv.name : "Drag & drop your CV here, or click to browse"}
    </span>
    <span className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-400">PDF or DOCX, max 5MB</span>
    <input
      id="cv-upload"
      type="file"
      accept=".pdf,.doc,.docx"
      className="hidden"
      onChange={handleFile}
    />
  </label>
</Field>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group/btn relative overflow-hidden block w-full rounded-full bg-[#4ADE80] px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:pointer-events-none"
      >
        <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {status === "submitting" ? "Submitting…" : "Apply for this Position"}
          {status !== "submitting" && <span aria-hidden>→</span>}
        </span>
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-gray-500">{label}</label>
      {children}
    </div>
  );
}

// Custom Select Component to perfectly match Figma Design
function CustomSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (val: string) => void;
  options: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Invisible overlay that closes the dropdown if you click outside of it */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Select Trigger */}
      <div
        className={`flex cursor-pointer items-center justify-between rounded-xl border bg-[#1A1A1A] px-4 py-3 text-sm transition-colors ${
          isOpen ? "border-green-500/60" : "border-white/10"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? "text-white" : "text-gray-600"}>
          {value || "Select"}
        </span>
        <svg
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-full overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] py-2 shadow-2xl">
          <div
            className="cursor-pointer px-4 py-2.5 text-sm text-gray-500 transition-colors hover:bg-[#1E3A29] hover:text-white"
            onClick={() => {
              onChange("");
              setIsOpen(false);
            }}
          >
            Select
          </div>
          {options.map((opt) => (
            <div
              key={opt}
              className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                value === opt
                  ? "bg-[#1E3A29] text-white" // Custom Dark Green for selected
                  : "text-gray-300 hover:bg-[#1E3A29] hover:text-white"
              }`}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}