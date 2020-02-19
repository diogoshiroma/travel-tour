import React from 'react';
import ReactDOM from 'react-dom';
import { TravelSimpleApp } from './app';
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';


const render = Component => {
	ReactDOM.render(
	  <AppContainer>
		<Component />
	  </AppContainer>,
	  document.getElementById('root')
	);
  }

  render(TravelSimpleApp);

  if (module.hot) {
	module.hot.accept('./app', () => { render(TravelSimpleApp) });
  }
