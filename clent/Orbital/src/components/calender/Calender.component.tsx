import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { CalendarEvent } from "./Calender.types";

interface Props {
  events?: CalendarEvent[];
  onAdd?: (event: CalendarEvent) => void;
  onUpdate?: (event: CalendarEvent) => void;
  onDelete?: (id: string) => void;
}

const colorMap = {
  MEETING: "#3b82f6",
  LEAVE: "#ef4444",
  ROOM_BOOKING: "#10b981",
  PERSONAL: "#a855f7",
};

const PlannerCalendar: React.FC<Props> = ({
  events = [],
  onAdd,
  onUpdate,
}) => {
  const [calendarEvents, setCalendarEvents] =
    useState<CalendarEvent[]>(events);

  // Add event by selecting range
  const handleSelect = (info: any) => {
    const title = prompt("Event title?");
    if (!title) return;

    const newEvent: CalendarEvent = {
      id: crypto.randomUUID(),
      title,
      start: info.start,
      end: info.end,
      type: "MEETING",
      color: colorMap.MEETING,
    };

    setCalendarEvents((prev) => [...prev, newEvent]);
    onAdd?.(newEvent);
  };

  // drag/resize update
  const handleEventChange = (info: any) => {
    const updated: CalendarEvent = {
      id: info.event.id,
      title: info.event.title,
      start: info.event.start!,
      end: info.event.end!,
      type: info.event.extendedProps.type,
      color: info.event.backgroundColor,  
    };

    setCalendarEvents((prev) =>
      prev.map((e) => (e.id === updated.id ? updated : e))
    );

    onUpdate?.(updated);
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable
        editable
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        select={handleSelect}
        events={calendarEvents}
        eventChange={handleEventChange}
        height="auto"
      />
    </div>
  );
};

export default PlannerCalendar;
