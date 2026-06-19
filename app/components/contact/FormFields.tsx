"use client";

import { useState, useRef, useEffect } from "react";

/* ---------------------------------------------------------------- */
/* Text input                                                        */
/* ---------------------------------------------------------------- */

interface TextFieldProps {
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export function TextField({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}: TextFieldProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-[10px] bg-[#2B2B2B] px-6 py-5 text-gray text-base text-default placeholder:text-faint outline-none transition-colors focus:bg-[#1a1a1a] focus:ring-1 focus:ring-line-3"
    />
  );
}

/* ---------------------------------------------------------------- */
/* Textarea                                                          */
/* ---------------------------------------------------------------- */

interface TextAreaFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

export function TextAreaField({
  name,
  placeholder,
  value,
  onChange,
  rows = 6,
}: TextAreaFieldProps) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="w-full resize-none rounded-card bg-[#2B2B2B] rounded-[10px] px-6 py-5 text-base leading-relaxed text-default placeholder:text-faint outline-none transition-colors focus:bg-[#1a1a1a] focus:ring-1 focus:ring-line-3"
    />
  );
}

/* ---------------------------------------------------------------- */
/* Service select (custom dropdown)                                  */
/* ---------------------------------------------------------------- */

interface ServiceSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function ServiceSelect({
  options,
  value,
  onChange,
}: ServiceSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full rounded-[10px] bg-[#2B2B2B] text-gray items-center justify-between rounded-card bg-surface-2 px-6 py-5 text-left text-base text-default outline-none transition-colors hover:bg-[#1a1a1a] focus:ring-1 focus:ring-line-3"
      >
        <span>{value}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className={`text-faint transition-transform ${open ? "" : "rotate-180"}`}
          aria-hidden="true"
        >
          <path
            d="M6 15l6-6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full overflow-hidden rounded-card border border-line bg-[#2B2B2B] shadow-xl">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`w-full px-6 py-3.5 text-left text-base transition-colors hover:bg-[#1f1f1f] ${
                  option === value ? "text-accent" : "text-default"
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Feature checkbox                                                  */
/* ---------------------------------------------------------------- */

interface FeatureCheckboxProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

export function FeatureCheckbox({
  label,
  checked,
  onToggle,
}: FeatureCheckboxProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-3 text-left"
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
          checked
            ? "border-accent-border bg-accent text-white"
            : "border-line-3 bg-white"
        }`}
      >
        {checked && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12l5 5L20 6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="font-body font-extralight text-xs leading-[17px] text-center text-default">
        {label}
      </span>
    </button>
  );
}
