"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { ScheduleDay } from "@/content/schedule";
import { copy } from "@/content/site";

type Props = {
  days: ScheduleDay[];
};

// Day tabs with a time / session table. Arrow keys move between tabs.
export function ScheduleTabs({ days }: Props) {
  const [current, setCurrent] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const moves: Record<string, number> = {
      ArrowRight: 1,
      ArrowLeft: -1,
      Home: -current,
      End: days.length - 1 - current,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    const next = (current + moves[event.key] + days.length) % days.length;
    setCurrent(next);
    tabs.current[next]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label={copy.ui.scheduleDays} className="flex flex-wrap gap-3">
        {days.map((day, i) => {
          const selected = i === current;
          return (
            <button
              key={day.day}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`day-tab-${i}`}
              aria-selected={selected}
              aria-controls={`day-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setCurrent(i)}
              onKeyDown={onKeyDown}
              className={`rounded-xl border-3 border-ink px-4 py-2 text-left transition-transform duration-150 ${
                selected ? "bg-sun shadow-hard-sm" : "bg-paper hover:-translate-y-0.5"
              }`}
            >
              <span className="block text-lg font-bold">{day.day}</span>
              <span className="block text-sm">{day.date}</span>
            </button>
          );
        })}
      </div>

      {days.map((day, i) => (
        <div
          key={day.day}
          role="tabpanel"
          id={`day-panel-${i}`}
          aria-labelledby={`day-tab-${i}`}
          hidden={i !== current}
        >
          <table className="card mt-6 w-full border-separate border-spacing-0 overflow-hidden text-left">
            <caption className="sr-only">
              {day.day}, {day.date}
            </caption>
            <thead className="sr-only">
              <tr>
                <th scope="col">{copy.ui.scheduleTime}</th>
                <th scope="col">{copy.ui.scheduleSession}</th>
              </tr>
            </thead>
            <tbody>
              {day.sessions.map((session) => (
                <tr key={`${session.time}-${session.title}`} className="align-top [&:not(:last-child)>*]:border-b-2 [&:not(:last-child)>*]:border-ink/15">
                  <th scope="row" className="w-24 py-5 pr-6 pl-5 text-base font-bold tabular-nums sm:w-32 md:pl-7">
                    {session.time}
                  </th>
                  <td className="py-5 pr-5">
                    <span className="block text-lg font-bold">{session.title}</span>
                    {session.place && <span className="mt-1 block text-sm text-muted">{session.place}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
