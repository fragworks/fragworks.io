const { ajax } = require('umbrellajs');

export default {
	ajax(endpoint: string, options: object) {
		return new Promise((resolve, reject) => {
			ajax(endpoint, options, (err: Error, body: string) => {
				if (err) return reject(err);
				resolve(body);
			})
		});
	},

	request(endpoint: string, params = {}, method = 'GET') {
		return this.ajax(endpoint, {
			method,
			body: params
		});
	}
}
