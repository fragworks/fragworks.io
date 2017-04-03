import * as page from 'page';
import Route from './routes/route';

export default class Router {
	constructor(routes: Route[]) {
		for (const route of routes) {
			page(route.path, route.fn);
		}

		page();
	}
}
