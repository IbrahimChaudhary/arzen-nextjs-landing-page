"use client";
import { useEffect } from "react";

export default function ResetScrollOnReload() {
  useEffect(() => {
    try {
      const navEntries = performance.getEntriesByType("navigation") as
        | PerformanceNavigationTiming[]
        | undefined;
      const navType = navEntries?.[0]?.type ?? (performance as any).navigation?.type;
      if (navType === "reload") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    } catch (e) {
      // Fallback: always attempt to reset to top on any failure
      try {
        window.scrollTo(0, 0);
      } catch {}
    }
  }, []);

  return null;
}
