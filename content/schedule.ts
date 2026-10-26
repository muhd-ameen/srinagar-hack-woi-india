// The event timetable. Leave the array empty until dates are confirmed:
// the section then shows "The full schedule goes live once dates are confirmed."
//
// Example:
// {
//   day: "Day 1",
//   date: "Fri, 14 Nov",
//   sessions: [
//     { time: "09:00", title: "Check-in and breakfast", place: "Main hall" },
//     { time: "10:00", title: "Opening and problem statements" },
//   ],
// },

export type Session = {
  time: string;
  title: string;
  place?: string;
};

export type ScheduleDay = {
  day: string;
  date: string;
  sessions: Session[];
};

export const schedule: ScheduleDay[] = [];
