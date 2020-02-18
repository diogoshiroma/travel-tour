import React from 'react';
import queryString from 'query-string'
import { RouteComponentProps } from 'react-router-dom';
import { getResidenceById } from '../data';
import { Residence } from '../../model';
import { RoomDetails } from './room-details.component';

export class RoomDetailsContainer extends React.Component<RouteComponentProps> {
  render() {
    const values = queryString.parse(this.props.location.search);
    const roomId = values.room;
    let residence: Residence | null;

    if (roomId && typeof roomId != "object") {
      residence = getResidenceById(parseInt(roomId));
    } else {
      residence = null;
    }

    return (
      <RoomDetails residence={residence} />
    );
  }
}
