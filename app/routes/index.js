import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom';

import App from '../components/App.js';
import Analytics from '../components/Analytics.js';
import Pavlov from '../components/Pavlov.js';
import NotFound from '../components/NotFound.js';

import store from '../reducers';

const Routes = () => {
	return (
		<Provider store={store}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/learn" component={Analytics} />
				<Route exact path="/pavlov" component={Pavlov} />
				<Route path="/*" component={NotFound} />
			</Switch>
		</Provider>
	);
}

export default Routes;