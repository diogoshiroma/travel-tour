import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const TripPlanner = (props: any) => {
  return (<div>
    <Calendar
      localizer={localizer}
      events={props.eventsList}
      startAccessor="start"
      endAccessor="end"
      showMultiDayTimes
      onSelectEvent={event => {
        console.log(event);
      }}
    />
  </div>);
};
