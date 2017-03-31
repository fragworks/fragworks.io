import Route from './route';
import net from '../net';
const { u } = require('umbrellajs');

const getPath = (path: string) => {
	if (path.endsWith('/')) path += 'index';
	return `views${path}.html`;
};

const index = {
	path: '*',
	fn: (ctx: any) => {
		const path = getPath(ctx.pathname);
		net.request(path)
			.then((body: string) => u('#content').html(body));
	}
};

export default [
	index
];
