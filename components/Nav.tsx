"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { campaignLink, copy, nav, site } from "@/content/site";
import { ExternalArrow } from "./Arrow";
import { Container } from "./Container";
import { RegisterButton } from "./RegisterButton";

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
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-base font-medium tracking-tight whitespace-nowrap">
          <Image
            src="/logos/gism-badge.png"
            alt="Great Indian Startup Month 2026"
            width={560}
            height={670}
            priority
            className="h-12 w-auto"
          />
          <Image
            src="/logos/woi-logo-onLight.png"
            alt="WOI India"
            width={600}
            height={224}
            priority
            className="h-7 w-auto"
          />
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm transition-colors duration-150 hover:text-fg ${
                      isActive ? "text-secondary" : "text-muted"
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
                className="group inline-flex items-center gap-1 text-sm text-muted transition-colors duration-150 hover:text-fg"
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
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">{copy.ui.openMenu}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h18M3 16h18" />
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
          className="fixed inset-0 z-50 flex flex-col bg-bg xl:hidden"
        >
          <Container className="flex h-16 shrink-0 items-center justify-between border-b border-line">
            <Link href="/" className="flex items-center gap-3 text-base font-medium tracking-tight" onClick={() => setOpen(false)}>
              <Image
                src="/logos/gism-badge.png"
                alt="Great Indian Startup Month 2026"
                width={560}
                height={670}
                className="h-12 w-auto"
              />
              <Image
                src="/logos/woi-logo-onLight.png"
                alt="WOI India"
                width={600}
                height={224}
                className="h-7 w-auto"
              />
              <span className="hidden sm:inline">{site.name}</span>
            </Link>
            <button
              type="button"
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">{copy.ui.closeMenu}</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </Container>
          <Container className="flex flex-1 flex-col justify-between overflow-y-auto py-10">
            <nav aria-label="Mobile">
              <ul>
                {nav.map((item, i) => (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-5 py-4 text-4xl font-medium tracking-tight sm:text-5xl"
                    >
                      <span className="label w-6">{String(i + 1).padStart(2, "0")}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="border-b border-line">
                  <a
                    href={campaignLink.href}
                    target="_blank"
                    rel="noopener"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-4 text-2xl font-medium tracking-tight text-muted sm:text-3xl"
                  >
                    <span className="w-6" aria-hidden="true" />
                    {campaignLink.label}
                    <span className="sr-only"> {campaignLink.newTab}</span>
                    <ExternalArrow className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mt-10">
              <RegisterButton className="w-full sm:w-auto" />
              <p className="mt-4 text-sm text-muted">{site.dates ?? site.datesPending}</p>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
