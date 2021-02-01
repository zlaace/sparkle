const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports =  merge(common, {
	mode: "production",
	output: {
		filename: "[name].[conentHash].bundle.js",
		path: path.resolve(__dirname, "assets")
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: "./resource/template.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				},
				favicon: "./resource/img/favicon.png"
			})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].[contentHash].css"}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
			  test: /\.s[ac]ss$/,
			  use: [
			  	MiniCssExtractPlugin.loader, // Extract css into files
					"css-loader", // Translates CSS into CommonJS
			  	"sass-loader", // Compiles Sass to CSS
			  ]
			}
		]	
	}	
});