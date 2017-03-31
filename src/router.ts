import Route from './routes/route';

const page = require('page');
// window.page = page;

export default class Router {
	constructor(routes: Route[]) {
		for (let route of routes) {
			page(route.path, route.fn);
		}

		page();
	}
}
