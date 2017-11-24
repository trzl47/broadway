import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RedirectWithStatus from './redirect-w-status.js';
import router from '../routes/router';

class App extends Component {
	render() {
		let routes = router.routes.map(({ path, component, exact }, i) =>
			<Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
		);
		let redirects = router.redirects.map(({ from, to, status }, i) =>
			<RedirectWithStatus key={Math.random() + 'REDIRECT_'} from={from} to={to} status={status} />
		);
		return (
			<div>
				<Switch>
					{routes}
					{redirects}
				</Switch>
			</div>
		);
	}
}
export default App;