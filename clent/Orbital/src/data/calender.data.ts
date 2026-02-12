import type { CalendarEvent } from "../components/calender/Calender.types";

export const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Sprint Planning",
    start: new Date(),
    end: new Date(),
    type: "MEETING",
    color: "#3b82f6",
  },
  {
    id: "2",
    title: "Sourav Leave",
    start: "2026-02-03",
    end: "2026-02-05",
    type: "LEAVE",
    color: "#ef4444",
  },
];