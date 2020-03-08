import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './app/home/home.component';
import { TripPlannerContainer } from './app/trip-planner';

export const TravelSimpleApp = () => {
	return (
		<BrowserRouter>
			<Container fluid={true}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/trip-planner' component={TripPlannerContainer} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};
