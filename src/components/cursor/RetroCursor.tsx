"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./RetroCursor.module.css";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], label[for], select, summary, input[type="submit"], input[type="button"], input[type="reset"], .suggestion, .suggestionSelected';

/**
 * Retro pixel cursor follower (desktop / fine pointer only).
 */
export function RetroCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const pressingRef = useRef(false);
  const hoveringRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) {
      return;
    }

    setVisible(true);

    const applyTransform = () => {
      const el = cursorRef.current;
      if (!el) {
        return;
      }
      const { x, y } = positionRef.current;
      const scale = pressingRef.current ? 0.9 : 1;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    };

    const updateHoverState = (x: number, y: number) => {
      const under = document.elementFromPoint(x, y);
      const isInteractive =
        under instanceof Element && Boolean(under.closest(INTERACTIVE_SELECTOR));
      if (hoveringRef.current !== isInteractive) {
        hoveringRef.current = isInteractive;
        setHovering(isInteractive);
      }
    };

    const move = (event: MouseEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
      updateHoverState(event.clientX, event.clientY);
      applyTransform();
    };

    const onDown = () => {
      pressingRef.current = true;
      applyTransform();
    };

    const onUp = () => {
      pressingRef.current = false;
      applyTransform();
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={[styles.cursor, hovering ? styles.hand : styles.arrow]
        .filter(Boolean)
        .join(" ")}
      aria-hidden
    />
  );
}
