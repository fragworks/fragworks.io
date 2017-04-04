import Router from './router';
import routes from './routes';
require('./styles/app.scss');

export default class App {
	private router: Router;

	constructor() {
		this.router = new Router(routes);
	}
}

const app = new App();
