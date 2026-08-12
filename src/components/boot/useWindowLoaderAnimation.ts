"use client";

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";

const STEP_DELAY = 0.08;
const LOADER_REPEATS = 2;

export function useWindowLoaderAnimation(
  containerRef: RefObject<HTMLDivElement | null>,
  onComplete?: () => void,
) {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const root = containerRef.current;
    if (!root) {
      return;
    }

    const delay = STEP_DELAY;
    const scope = root;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: LOADER_REPEATS,
        repeatDelay: delay,
        onComplete: () => onCompleteRef.current?.(),
      });

      tl.to(".c-loader__block1", { opacity: 0, duration: 0 }, delay)
        .to(".c-loader__block11", { x: 0, y: 24, duration: 0 }, delay)
        .to(".c-loader__block12", { x: -8, y: 40, duration: 0 }, delay)

        .to(
          ".c-loader__block1",
          { opacity: 1, x: 24, y: 72, duration: 0 },
          delay * 2,
        )
        .to(".c-loader__block3", { x: -8, y: 40, duration: 0 }, delay * 2)
        .to(".c-loader__block11", { x: 8, y: 72, duration: 0 }, delay * 2)

        .to(".c-loader__block1", { x: 24, y: 104, duration: 0 }, delay * 3)
        .to(".c-loader__block3", { x: -8, y: 64, duration: 0 }, delay * 3)
        .to(".c-loader__block4", { x: -24, y: 64, duration: 0 }, delay * 3)

        .to(".c-loader__block2", { x: 8, y: 72, duration: 0 }, delay * 4)
        .to(".c-loader__block3", { x: 16, y: 112, duration: 0 }, delay * 4)
        .to(".c-loader__block4", { x: -24, y: 40, duration: 0 }, delay * 4)

        .to(".c-loader__block2", { x: -8, y: 104, duration: 0 }, delay * 5)
        .to(".c-loader__block4", { x: -24, y: 64, duration: 0 }, delay * 5)
        .to(".c-loader__block6", { x: 0, y: 56, duration: 0 }, delay * 5)

        .to(".c-loader__block4", { x: -48, y: 112, duration: 0 }, delay * 6)
        .to(".c-loader__block5", { x: 16, y: 64, duration: 0 }, delay * 6)
        .to(".c-loader__block6", { x: 0, y: 32, duration: 0 }, delay * 6)

        .to(".c-loader__block5", { x: 32, y: 96, duration: 0 }, delay * 7)
        .to(".c-loader__block6", { x: 0, y: 56, duration: 0 }, delay * 7)
        .to(".c-loader__block7", { x: -16, y: 56, duration: 0 }, delay * 7)

        .to(".c-loader__block6", { x: 8, y: 88, duration: 0 }, delay * 8)
        .to(".c-loader__block7", { x: -16, y: 64, duration: 0 }, delay * 8)
        .to(".c-loader__block9", { x: -8, y: 24, duration: 0 }, delay * 8)

        .to(".c-loader__block7", { x: -24, y: 88, duration: 0 }, delay * 9)
        .to(".c-loader__block8", { x: 8, y: 24, duration: 0 }, delay * 9)
        .to(".c-loader__block9", { x: -8, y: 56, duration: 0 }, delay * 9)

        .to(".c-loader__block8", { x: 8, y: 48, duration: 0 }, delay * 10)
        .to(".c-loader__block9", { x: -8, y: 72, duration: 0 }, delay * 10)
        .to(".c-loader__block10", { x: 0, y: 40, duration: 0 }, delay * 10)

        .to(".c-loader__block8", { x: 8, y: 72, duration: 0 }, delay * 11)
        .to(".c-loader__block10", { x: 0, y: 64, duration: 0 }, delay * 11)

        .to(".c-loader__svg", { rotation: -45, duration: 0 }, delay * 12)
        .to(
          ".c-loader__block1",
          { rotation: -45, x: 20, y: 110, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block2",
          { rotation: -45, x: -7, y: 110, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block3",
          { rotation: -45, x: -23, y: 88, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block4",
          { rotation: -45, x: -50, y: 110, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block5",
          { rotation: -45, x: 23, y: 102, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block6",
          { rotation: -45, x: 18, y: 102, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block7",
          { rotation: -45, x: -20, y: 91, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block8",
          { rotation: -45, x: 4, y: 72, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block9",
          { rotation: -45, x: -12, y: 61, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block10",
          { rotation: -45, x: 7, y: 75, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block11",
          { rotation: -45, x: -15, y: 59, duration: 0 },
          delay * 12,
        )
        .to(
          ".c-loader__block12",
          { rotation: -45, x: -26, y: 27, duration: 0 },
          delay * 12,
        )

        .to(".c-loader__svg", { rotation: -90, duration: 0 }, delay * 13)
        .to(
          ".c-loader__block6",
          { rotation: -45, x: 7, y: 80, duration: 0 },
          delay * 13,
        )

        .to(".c-loader__svg", { rotation: -135, duration: 0 }, delay * 14)
        .to(
          ".c-loader__block5",
          { rotation: -45, x: 23, y: 69, duration: 0 },
          delay * 14,
        );
    }, scope);

    return () => ctx.revert();
  }, [containerRef]);
}
