// Components
import Main from '../app/Main.js';
import NotFound from '../app/NotFound';

export default {
	routes: [
		{
			path: '/',
			component: Main,
			exact: true
		},
		{
		path: '*',
		component: NotFound,
		exact: false
		}
	],
	redirects: [
		{
			// from: '/people',
			// to: '/user',
			// status: 301
		}
	]
};