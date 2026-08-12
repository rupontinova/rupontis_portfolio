"use client";

import { useRef } from "react";
import { useWindowLoaderAnimation } from "./useWindowLoaderAnimation";
import { WindowLoaderSvg } from "./WindowLoaderSvg";
import "./window-loader.css";

type BootLoaderProps = {
  onComplete?: () => void;
};

export function BootLoader({ onComplete }: BootLoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useWindowLoaderAnimation(loaderRef, onComplete);

  return (
    <div className="window-loader-screen" role="status" aria-label="Loading">
      <div className="c-loader" ref={loaderRef}>
        <WindowLoaderSvg />
      </div>
    </div>
  );
}
