"use client";

import { useId, useState, type FormEvent } from "react";
import { site } from "@/content/site";

type Props = {
  id?: string;
  className?: string;
};

type Status = "idle" | "sending" | "done" | "error";

// Email waitlist, handled by Netlify Forms. Netlify finds the form through the static copy in
// public/__forms.html at deploy time, and this component posts to that file.
// Without JavaScript the form still posts normally and Netlify records it.
export function WaitlistForm({ id, className = "" }: Props) {
  const { waitlist } = site;
  const inputId = useId();
  const noteId = useId();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id={id} className={`scroll-mt-24 ${className}`}>
      {status === "done" ? (
        <p role="status" className="border-l-2 border-secondary py-2 pl-4 text-base text-fg">
          {waitlist.success}
        </p>
      ) : (
        <form
          name={waitlist.formName}
          method="POST"
          action="/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={onSubmit}
        >
          <input type="hidden" name="form-name" value={waitlist.formName} />
          <p className="sr-only" aria-hidden="true">
            <label>
              {waitlist.honeypotLabel}
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <label htmlFor={inputId} className="label-muted block">
            {waitlist.label}
          </label>
          <div className="mt-3 flex flex-wrap gap-3">
            <input
              id={inputId}
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder={waitlist.placeholder}
              aria-describedby={noteId}
              className="h-14 min-w-0 flex-[1_1_14rem] rounded-[3px] border border-line bg-bg px-4 text-base text-fg placeholder:text-muted focus:border-secondary"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-14 items-center justify-center rounded-[3px] bg-accent px-7 text-base font-medium whitespace-nowrap text-fg transition-colors duration-150 hover:bg-secondary hover:text-bg disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? waitlist.sending : waitlist.button}
            </button>
          </div>
          <p id={noteId} className="mt-3 text-sm text-muted">
            {waitlist.note}
          </p>
          <p role="status" aria-live="polite" className="mt-2 text-sm text-fg empty:hidden">
            {status === "error" ? waitlist.error : ""}
          </p>
        </form>
      )}
    </div>
  );
}
