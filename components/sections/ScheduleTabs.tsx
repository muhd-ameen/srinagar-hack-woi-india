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
      <div role="tablist" aria-label={copy.ui.scheduleDays} className="flex flex-wrap gap-x-8 border-b border-line">
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
              className={`-mb-px border-b-2 pt-2 pb-4 text-left transition-colors duration-150 ${
                selected ? "border-secondary text-fg" : "border-transparent text-muted hover:text-fg"
              }`}
            >
              <span className="block text-lg font-medium">{day.day}</span>
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
          <table className="w-full border-collapse text-left">
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
                <tr key={`${session.time}-${session.title}`} className="border-b border-line align-top">
                  <th scope="row" className="w-24 py-5 pr-6 text-base font-normal text-muted tabular-nums sm:w-32">
                    {session.time}
                  </th>
                  <td className="py-5">
                    <span className="block text-lg font-normal">{session.title}</span>
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
