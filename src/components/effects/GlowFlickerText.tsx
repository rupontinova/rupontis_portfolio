import type { ElementType, ReactNode } from "react";
import styles from "./GlowFlickerText.module.css";

type GlowFlickerTextProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export function GlowFlickerText({
  children,
  as: Tag = "h1",
  className,
}: GlowFlickerTextProps) {
  return (
    <Tag
      className={[styles.glowFlicker, styles.text, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
