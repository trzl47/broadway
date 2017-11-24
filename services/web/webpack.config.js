const path = require('path'),
autoprefixer = require('autoprefixer'),
ExtractTextPlugin = require('extract-text-webpack-plugin'),
webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
			app: './src/index.js',
	},
	output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, './public'),
			publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015', 'react'], plugins: ['transform-object-rest-spread', 'async-to-promises'] }
				}],
			},
			//loaders for other file types can go here
			{
				// exclude: [
				// 	/\.html$/,
				// 	/\.(js|jsx)$/,
				// 	/\.css$/,
				// 	/\.json$/,
				// 	/\.bmp$/,
				// 	/\.gif$/,
				// 	/\.jpe?g$/,
				// 	/\.png$/,
				// ],
				test: [/\.bmp/, /\.gif/, /\.jpg/, /\.png/],
				loader: 'file-loader',
				options: {
					name: '[name].[hash:8].[ext]'
				},
			},
			// {
			// 	test: [/\.bmp/, /\.gif/, /\.jpg/, /\.png/],
			// 	// test: /\.(bmp|gif|jpg|png|svg)$/,
			// 	loader: 'url-loader',
			// 	options: {
			// 		limit: 10000,
			// 		name: '[name].[hash:8].[ext]',
			// 		// publicPath : './dist/client/',
			// 	},
			// },
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:[
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]_[local]--[hash:base64:8]',
							importLoaders: 1
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								autoprefixer({
									browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9', // React doesn't support IE8 anyway
									],
									flexbox: 'no-2009',
								}),
							],
						},
					}],
				}),
			},
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.HotModuleReplacementPlugin(),
	],
};