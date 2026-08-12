"use client";

import { TerminalConsole } from "./TerminalConsole";
import styles from "./TerminalWorkspace.module.css";

export function TerminalWorkspace() {
  return (
    <div className={styles.workspace}>
      <TerminalConsole />
    </div>
  );
}
