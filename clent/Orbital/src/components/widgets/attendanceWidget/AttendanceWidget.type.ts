export type AttendanceStatus = "Not Checked In" | "Early" | "On Time" | "Late" | "Checked Out";

export interface AttendanceRecord {
  checkIn?: Date;
  checkOut?: Date;
  status: AttendanceStatus;
}