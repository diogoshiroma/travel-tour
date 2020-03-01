
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2020, 0, 25),
    end: new Date(2020, 0, 27)
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2020, 3, 1),
    end: new Date(2020, 3, 6)
  }
];

export const TripPlanner = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      showMultiDayTimes
      onSelectEvent={(event)=> {console.log(event)}}
    />
  </div>
);
