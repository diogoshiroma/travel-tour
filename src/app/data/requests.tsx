import axios, { AxiosResponse } from "axios";
import { CalendarEvent } from "./model/calendar-event";
import { mapToCalendarEvent } from "./mapper/mapper";

const API_URL = "http://localhost:8000";

export const getCalendarEvents = async (): Promise<CalendarEvent[]> => {
  const url = `${API_URL}/api/lodgingevents/`;
  const axiosResponse: AxiosResponse<any> = await axios.get(url);
  return parseEventData(axiosResponse.data);
};

const parseEventData = (calendarEventData: any): CalendarEvent[] => {
  return calendarEventData.data.map((eventData: any) => mapToCalendarEvent(eventData));
};
