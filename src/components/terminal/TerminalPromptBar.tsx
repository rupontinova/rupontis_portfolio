"use client";

import { useEffect, useState } from "react";
import styles from "./TerminalPromptBar.module.css";

export function TerminalPromptBar() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCursorVisible((value) => !value);
    }, 530);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer className={styles.bar}>
      <p className={styles.prompt}>
        <span className={styles.user}>nova@profile</span>
        <span className={styles.path}>:~$</span>
        <span
          className={`${styles.cursor} ${cursorVisible ? styles.cursorVisible : ""}`}
          aria-hidden
        />
      </p>
    </footer>
  );
}
