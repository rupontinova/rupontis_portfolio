"use client";

import { useCallback, useEffect, useState } from "react";
import { BootLoader } from "@/components/boot";
import { TerminalShell } from "@/components/terminal";
import styles from "./HomeClient.module.css";

const BOOT_FADE_MS = 900;

export function HomeClient() {
  const [bootMounted, setBootMounted] = useState(true);
  const [bootExiting, setBootExiting] = useState(false);
  const [terminalVisible, setTerminalVisible] = useState(false);

  const handleBootComplete = useCallback(() => {
    setTerminalVisible(true);
    setBootExiting(true);
  }, []);

  useEffect(() => {
    if (!bootExiting) {
      return;
    }

    const timer = window.setTimeout(() => {
      setBootMounted(false);
    }, BOOT_FADE_MS);

    return () => window.clearTimeout(timer);
  }, [bootExiting]);

  return (
    <div className={styles.viewport}>
      <div
        className={`${styles.terminalLayer} ${
          terminalVisible ? styles.terminalLayerVisible : ""
        }`}
      >
        <TerminalShell />
      </div>

      {bootMounted && (
        <div
          className={`${styles.bootLayer} ${
            bootExiting ? styles.bootLayerExit : ""
          }`}
        >
          <BootLoader onComplete={handleBootComplete} />
        </div>
      )}
    </div>
  );
}
