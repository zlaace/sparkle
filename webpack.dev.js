const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "assets")
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./resource/template.html",
		})
	],
	module: {
		rules: [
			{
			  test: /\.s[ac]ss$/,
			  use: [
			  	"style-loader",
					"css-loader",
			  	"sass-loader"
			  ]
			}
		]	
	}	
});