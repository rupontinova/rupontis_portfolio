"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="block w-full h-auto"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col items-start justify-end gap-1 py-6 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
        {card.subtitle && (
          <div className="text-xs md:text-sm italic text-neutral-200/90">
            &ldquo;{card.subtitle}&rdquo;
          </div>
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type CardType = {
  title: string;
  subtitle?: string;
  src: string;
};

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 w-full">
      {cards.map((card, index) => (
        <Card
          key={`${card.title}-${index}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
