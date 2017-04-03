const { u } = require('umbrellajs');
import Route from './route';
import net from '../net';

const getPath = (path: string) => {
	if (path.endsWith('/')) path += 'index';
	return `views${path}.html`;
};

const index = {
	path: '*',
	fn: (ctx: PageJS.Context) => {
		const path = getPath(ctx.pathname);
		net.request(path)
			.then((body: string) => u('#content').html(body));
	}
};

export default [
	index
];
