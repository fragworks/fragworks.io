var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.ts',
	output: {
		path: __dirname + './dist',
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: 'body'
		})
	]
};
