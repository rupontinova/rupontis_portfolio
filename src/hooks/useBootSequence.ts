"use client";

import { useCallback, useEffect, useState } from "react";

const DEFAULT_BOOT_DURATION_MS = 4500;

export function useBootSequence(durationMs = DEFAULT_BOOT_DURATION_MS) {
  const [complete, setComplete] = useState(false);

  const skip = useCallback(() => {
    setComplete(true);
  }, []);

  useEffect(() => {
    if (complete) {
      return;
    }

    const timer = window.setTimeout(() => {
      setComplete(true);
    }, durationMs);

    return () => window.clearTimeout(timer);
  }, [complete, durationMs]);

  return { complete, skip };
}
