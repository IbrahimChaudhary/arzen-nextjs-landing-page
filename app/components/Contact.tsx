"use client";

import { useState, type ChangeEvent } from "react";
import { z } from "zod";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import SDG from "./ui/SDG";
import FadeIn from "@/app/components/animations/FadeIn";

const CONTACT_INFO = [
  { label: "Email",    value: "contactus@arzeninc.com",    icon: <MdEmail size={15} />     },
  { label: "Phone",    value: "+92 319 8401751",  icon: <FaPhoneAlt size={14} />  },
  { label: "Location", value: "239 st 20 , Township Sector A1 Lahore , Pakistan", icon: <CiLocationOn size={16} /> },
];

const inputClass =
  "bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-150 focus:border-[#6abf3f] focus:ring-2 focus:ring-[#6abf3f]/25 w-full";

interface HomeFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: HomeFormState = { name: "", email: "", subject: "", message: "" };

type FieldErrors = Partial<Record<keyof HomeFormState, string>>;

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateHomeForm(data: HomeFormState): FieldErrors {
  const errors: FieldErrors = {};

  const nameResult = nameSchema.safeParse(data.name);
  if (!nameResult.success) {
    errors.name = nameResult.error.issues[0]?.message ?? "Invalid name.";
  }

  if (!data.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(data.email.trim()))
    errors.email = "Please enter a valid email address."

  if (!data.message.trim())
    errors.message = "Please enter your message.";
  else if (data.message.trim().length < 10)
    errors.message = "Please add a bit more detail (at least 10 characters).";

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<HomeFormState>(INITIAL);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof HomeFormState, boolean>>>({});

  const revalidate = (next: HomeFormState, key: keyof HomeFormState) => {
    if (!touched[key]) return;
    setErrors((prev) => ({ ...prev, [key]: validateHomeForm(next)[key] }));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = e.target.name as keyof HomeFormState;
    setForm((prev) => {
      const next = { ...prev, [key]: e.target.value };
      revalidate(next, key);
      return next;
    });
  };

  const handleBlur = (key: keyof HomeFormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateHomeForm(form)[key] }));
  };

  const handleSubmit = async () => {
    const found = validateHomeForm(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setForm(INITIAL);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-[#111111] text-white px-6 py-20 md:px-16 lg:px-20 md:py-[104px]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[80px] xl:gap-[123px]">

        {/* ── Left ── */}
        <FadeIn direction="right" className="flex flex-col gap-5 lg:max-w-[340px]">
          <SDG title="Get In Touch" className="border-none" />
          <h2 className="font-display text-[32px] md:text-[40px] leading-tight">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-xs text-white/50 leading-relaxed">
            We&apos;re here to answer your questions and explore how we can help
            your business grow.
          </p>

          <div className="flex flex-col gap-1">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex items-center gap-3 py-4 border-b border-white/10">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#1e1e1e] border border-white/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-white/40">{item.label}</p>
                  <p className="text-sm font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Right: Form ── */}
        <FadeIn direction="left" delay={0.1} className="flex-1 flex flex-col gap-4">
          {/* Name + Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-xs text-white/50">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Ali"
                value={form.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                className={inputClass}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name}</p>
              )}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-xs text-white/50">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                value={form.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-white/50">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Tell us what you need"
              value={form.subject}
              onChange={handleChange}
              onBlur={() => handleBlur("subject")}
              className={inputClass}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-white/50">Your Message</label>
            <textarea
              name="message"
              placeholder="Describe your project..."
              rows={6}
              value={form.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              className={`${inputClass} resize-none`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          {submitted && (
            <p className="text-sm text-[#6abf3f]">
              Message sent — thanks for reaching out, we&apos;ll get back to you soon.
            </p>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={sending}
            className="btn-primary w-fit px-8 py-3 rounded-full text-black font-semibold text-sm disabled:opacity-60"
            style={{ background: "linear-gradient(90deg, #6abf3f, #f472b6)" }}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </FadeIn>

      </div>
    </section>
  );
}