// Libs
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import App from './app/App.js';
// CSS
import './static/css/adoptly.css';

render((
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
), document.getElementById('app'));