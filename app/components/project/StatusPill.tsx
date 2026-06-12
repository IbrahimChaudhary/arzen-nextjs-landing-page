import type { ProjectStatus } from "@/app/data/projects";

interface StatusPillProps {
  status: ProjectStatus;
}

/**
 * Status indicator pill.
 * - "Live" → green outline + green text
 * - "Delivered" → grey outline + muted text
 */
export default function StatusPill({ status }: StatusPillProps) {
  const isLive = status === "Live";

  return (
    <span
      className={[
        "inline-flex items-center justify-center rounded-full border px-5 py-1.5 text-[13px] font-medium tracking-[0.04em] whitespace-nowrap",
        isLive
          ? "border-[#2f6e33] text-[#4caf50]"
          : "border-[#3a3a3a] text-[#9a9a9a]",
      ].join(" ")}
    >
      {status}
    </span>
  );
}