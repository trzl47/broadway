// Components
import Broadway from '../app/Broadway.js';
import NotFound from '../app/NotFound';

export default {
	routes: [
		{
			path: '/',
			component: Broadway,
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