export type EventType =
  | "MEETING"
  | "LEAVE"
  | "ROOM_BOOKING"
  | "PERSONAL";

export interface TeamMember {
  id: string;
  name: string;
  email?: string;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: string | Date;
  end: string | Date;

  type: EventType;

  members?: TeamMember[];
  roomId?: string;
  description?: string;

  color?: string;
}
