import { CalendarEvent } from "../model/calendar-event";

export const mapToCalendarEvent = (data: any) => {
  return {
    id: data.pk,
    host_id: data.host_id,
    title: data.host_name,
    bedroom_id: data.bedroom_id,
    bedroom_name: data.bedroom_name,
    start: new Date(data.start_date),
    end: new Date(data.end_date)
  };
};
