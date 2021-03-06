const path = require('path');
const _ = require('lodash')
const webpack = require('webpack')
const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const env = process && process.env && process.env.NODE_ENV
const serverPort = process.env.npm_package_config_devPort || 8081
const dev = !(env && env === 'production')

/**
 * Update this variable if you change your library name
 */
const title = 'Fragworks';
const libraryName = 'app';
const plugins = [
	new CheckerPlugin(),
	new TsConfigPathsPlugin(),
	new HtmlWebpackPlugin({
		inject: true,
		title,
		filename: 'index.html',
		template: path.join(__dirname, 'index.html'),
		hash: true,
		chunks: [ 'common', 'index' ]
	}),
	new CopyWebpackPlugin([
		{ from: 'views', to: 'views' },
		{ from: 'vendor', to: 'vendor' }
	])
]

let entry: string | string[] = [
	// 'react-hot-loader/patch',
	`webpack-dev-server/client?http://localhost:${serverPort}`,
	// bundle the client for webpack-dev-servers and connect to the provided endpoint
	'webpack/hot/only-dev-server',
	// bundle the client for hot reloading
	`./src/${libraryName}.ts`
]

if (dev === false) {
	plugins.push(new TypedocWebpackPlugin(
		{
			theme: 'minimal',
			out: 'docs',
			target: 'es6',
			ignoreCompilerErrors: true
		},
		'src'
	))
	entry = path.join(__dirname, `src/${libraryName}.ts`)
} else {
	plugins.push(new webpack.HotModuleReplacementPlugin())
}

const tsRule = {
	test: /\.ts$/,
	loader: 'awesome-typescript-loader'
};

const sassRule = {
	test: /\.scss/,
	loader: [ 'style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap' ]
};

const rules = [
	tsRule,
	sassRule
];

export default {
	entry: {
		index: entry
	},
	// Currently cheap-module-source-map is broken https://github.com/webpack/webpack/issues/4176
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: _.camelCase(libraryName),
		filename: `${libraryName}.js`
	},
	resolve: {
		extensions: [ '.ts', '.js', '.scss' ]
	},
	module: {
		rules
	},
	plugins,
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		port: serverPort,
		publicPath: '/'
	}
}
