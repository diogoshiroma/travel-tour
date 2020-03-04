import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { TripPlanner } from './trip-planner.component';

export class TripPlannerContainer extends React.Component<RouteComponentProps> {
  render() {
    return (
      <TripPlanner />
    );
  }
}
