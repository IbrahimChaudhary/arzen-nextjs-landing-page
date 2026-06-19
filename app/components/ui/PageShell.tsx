import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

/**
 * Shared page container. Gives every route the same max-width, horizontal
 * padding, and vertical rhythm. The root layout already provides the <main>
 * and page background, so this is just the inner constraint wrapper.
 */
export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 ${className}`}>
      {children}
    </div>
  );
}