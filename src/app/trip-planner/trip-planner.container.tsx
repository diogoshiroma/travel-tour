import axios from "axios";
import React from "react";
import { TripPlanner } from "./trip-planner.component";
import { mapToCalendarEvent } from "../data/mapper/mapper";

export const TripPlannerContainer = () => {
  const [eventsList, setEventsList] = React.useState<any[]>([]);
  const [populatedEvents, setPopulatedEvents] = React.useState(false);

  React.useEffect(() => {
    if (!populatedEvents) {
      axios.get("http://localhost:8000/api/lodgingevents").then(list => {
        const eventList = list.data.data.map((event: any) =>
          mapToCalendarEvent(event)
        );
        console.log(eventList);
        setEventsList(eventList);
        setPopulatedEvents(true);
      });
    }
  });

  return <TripPlanner eventsList={eventsList} />;
};
