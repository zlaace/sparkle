const path = require("path");

module.exports = {
	entry: {
		main: "./resource/js/theme.js"
	},
	module: {
		rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
        use:	[
					{
						loader: "file-loader",
						options: {
							name: "[name].[hash].[ext]",
							outputPath: "images",
							publicPath: "images"
						}
					}
				]
      }	
		]
	}
}