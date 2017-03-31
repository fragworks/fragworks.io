const page = require('page');

export interface Route {
	path: string;
	fn: () => void;
}

export default class Router {
	constructor(routes: Route[]) {
		for (let route of routes) {
			page(route.path, route.fn);
		}

		page();
	}
}
