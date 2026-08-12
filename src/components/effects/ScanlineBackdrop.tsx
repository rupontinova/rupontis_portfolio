import type { ReactNode } from "react";
import styles from "./ScanlineBackdrop.module.css";

type ScanlineBackdropProps = {
  children: ReactNode;
  className?: string;
};

export function ScanlineBackdrop({ children, className }: ScanlineBackdropProps) {
  return (
    <div className={[styles.backdrop, className].filter(Boolean).join(" ")}>
      <div className={styles.scanlines} aria-hidden />
      {children}
    </div>
  );
}
