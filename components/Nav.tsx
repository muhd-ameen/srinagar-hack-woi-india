"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { campaignLink, copy, nav, site } from "@/content/site";
import { AppIcon } from "./brand/AppIcon";
import { ExternalArrow } from "./Arrow";
import { Container } from "./Container";
import { RegisterButton } from "./RegisterButton";

// App icon plus the event name. The name drops to the icon alone on the smallest phones.
function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex shrink-0 items-center gap-3">
      <AppIcon className="size-11" />
      <span className="flex flex-col leading-none">
        <span className="display text-[1.05rem] whitespace-nowrap sm:text-lg">{site.name}</span>
        <span className="mt-1 text-[0.7rem] font-bold tracking-[0.08em] uppercase">{site.edition}</span>
      </span>
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  // Mobile overlay: lock scroll, close on Escape, keep focus inside.
  useEffect(() => {
    if (!open) return;
    const button = menuButton.current;
    document.body.style.overflow = "hidden";
    overlay.current?.querySelector<HTMLElement>("a, button")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !overlay.current) return;
      const focusable = overlay.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      button?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-3 border-ink bg-cream">
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <Brand />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-lg border-2 px-3 py-1.5 text-sm font-bold transition-colors duration-150 ${
                      isActive ? "border-ink bg-sun" : "border-transparent hover:border-ink hover:bg-paper"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={campaignLink.href}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-1 rounded-lg border-2 border-transparent px-3 py-1.5 text-sm font-bold transition-colors duration-150 hover:border-ink hover:bg-paper"
              >
                {campaignLink.label}
                <span className="sr-only"> {campaignLink.newTab}</span>
                <ExternalArrow className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <RegisterButton size="sm" />
          </div>
          <button
            ref={menuButton}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border-3 border-ink bg-paper shadow-hard-sm xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">{copy.ui.openMenu}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div
          ref={overlay}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="tone-sky bg-grid fixed inset-0 z-50 flex flex-col xl:hidden"
        >
          <Container className="flex h-[4.5rem] shrink-0 items-center justify-between">
            <Brand onClick={() => setOpen(false)} />
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-xl border-3 border-ink bg-paper shadow-hard-sm"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">{copy.ui.closeMenu}</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </Container>
          <Container className="flex flex-1 flex-col justify-between overflow-y-auto py-8">
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {nav.map((item, i) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="display flex items-baseline gap-4 py-1.5 text-4xl sm:text-5xl"
                    >
                      <span className="w-7 font-sans text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href={campaignLink.href}
                    target="_blank"
                    rel="noopener"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-2 text-xl font-bold sm:text-2xl"
                  >
                    <span className="w-7" aria-hidden="true" />
                    {campaignLink.label}
                    <span className="sr-only"> {campaignLink.newTab}</span>
                    <ExternalArrow className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mt-10">
              <RegisterButton className="w-full sm:w-auto" />
              <p className="mt-5 text-sm font-bold">{site.dates ?? site.datesPending}</p>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
