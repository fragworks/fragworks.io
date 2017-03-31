import Route from './route';
const { u, ajax } = require('umbrellajs');

const getPath = (path: string) => {
	if (path.endsWith('/')) path += 'index';
	return `views${path}.html`;
};

const index = {
	path: '*',
	fn: (ctx: any) => {
		const path = getPath(ctx.pathname);
		console.log(path);
		ajax(path, {}, (err: Error, body: string) => {
			u('#content').html(body);
		});
	}
};

export default [
	index
];
