"use client";

import { useState } from "react";
import type { Faq } from "@/content/faq";

type Props = {
  items: Faq[];
};

// Accordion with one item open at a time.
export function FaqList({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.question} className={`card overflow-hidden transition-colors duration-150 ${isOpen ? "fill-sun" : ""}`}>
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 px-5 py-5 text-left md:px-7 md:py-6"
              >
                <span
                  className="text-lg leading-snug font-bold md:text-xl"
                >
                  {item.question}
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  className="shrink-0 rounded-lg border-3 border-ink bg-paper p-1.5 transition-transform duration-150 group-hover:-rotate-6"
                >
                  <path d="M2 8h12" />
                  <path d="M8 2v12" className={`origin-center transition-transform duration-200 ${isOpen ? "scale-y-0" : ""}`} />
                </svg>
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
              inert={!isOpen}
            >
              <div className="overflow-hidden">
                <div className="max-w-[65ch] space-y-4 px-5 pb-6 text-base md:px-7 md:pb-7 md:text-lg">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
