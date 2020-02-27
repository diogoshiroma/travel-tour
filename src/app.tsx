import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RoomDetailsContainer } from './app/details/room-details.container';
import { NotFoundComponent } from './app/not-found/not-found.component';
import Home from './app/home/home.component';
import { TripPlanner } from './app/trip-planner';

export const TravelSimpleApp = () => {
	return (
		<BrowserRouter>
			<Container fluid={true}>
				<Switch>
					{/* <Route exact path='/' component={SearchPageContainer} /> */}
					<Route exact path='/' component={TripPlanner} />
					{/* <Route exact path='/details' component={RoomDetailsContainer} />
					<Route exact path='/trip-planner' component={TripPlanner} />
					<Route component={NotFoundComponent} /> */}
				</Switch>
			</Container>
		</BrowserRouter>
	);
};
