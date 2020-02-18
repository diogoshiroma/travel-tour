import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { HotelIcon, Strings } from '../../resources';
import { H2, H3, VSeparator, H1, PageTitle, ErrorMessage } from '../../components';
import Button from 'react-bootstrap/Button';
import { Residence } from '../../model';

interface RoomDetailsProps {
  residence: Residence | null;
}

export const RoomDetails = (props: RoomDetailsProps) => {
  return (
    !!props.residence ?
      <>
        <PageTitle showButton={true} />
        <VSeparator />
        <Row>
          <Col sm={6}>
            <Image src={HotelIcon} rounded />
          </Col>
          <Col sm={6}>
            <VSeparator />
            <VSeparator />
            <VSeparator />
            <Row noGutters={true}>
              <H1>{props.residence.hotel}</H1>
            </Row>
            <Row noGutters={true}>
              <H3>{props.residence.address + ' - ' + props.residence.city}</H3>
            </Row>
            <VSeparator />
            <Row noGutters={true}>
              <H2>{props.residence.bedroomName}</H2>
            </Row>
            <VSeparator />
            <Row noGutters={true}>
              <H2>{Strings.Components.ResidenceDetail.AvailablePlacesLbl + props.residence.availablePlaces}</H2>
            </Row>
            
            <VSeparator />
            <VSeparator />
            <VSeparator />
            <VSeparator />

            <H3>{Strings.Components.ResidenceDetail.BookNowYourRoom}</H3>
            <VSeparator />
            <Button variant="primary" onClick={() => alert("Comprou!")} block>{Strings.Components.ResidenceDetail.BuyRoom}</Button>
          </Col>
        </Row>
      </>
    :
      <>
        <PageTitle showButton={true} />
        <VSeparator />
        <Row noGutters={true}>
          <ErrorMessage>{Strings.Components.ResidenceDetail.NoResFound}</ErrorMessage>
        </Row>
      </>
  );
};
