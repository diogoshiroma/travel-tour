import { CalendarEvent } from "../model/calendar-event";

export const mapToCalendarEvent = (data: any) => {
  const startYear = data.start_date.substring(0, 4)
  let startMonth = data.start_date.substring(5, 7)
  const startDay = data.start_date.substring(8, 10)

  const endYear = data.end_date.substring(0, 4)
  let endMonth = data.end_date.substring(5, 7)
  const endDay = data.end_date.substring(8, 10)

  startMonth = startMonth - 1
  endMonth = endMonth - 1
  
  var endDate = new Date(endYear, endMonth, endDay)
  endDate.setDate(endDate.getDate()+1)

  return {
    id: data.pk,
    host_id: data.host_id,
    title: data.host_name,
    bedroom_id: data.bedroom_id,
    bedroom_name: data.bedroom_name,
    start: new Date(startYear, startMonth, startDay),
    end: endDate
  };
};
