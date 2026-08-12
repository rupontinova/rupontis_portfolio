import styles from "./StaticNoiseOverlay.module.css";

type StaticNoiseOverlayProps = {
  className?: string;
};

export function StaticNoiseOverlay({ className }: StaticNoiseOverlayProps) {
  return (
    <div
      className={[styles.overlay, className].filter(Boolean).join(" ")}
      aria-hidden
    />
  );
}
