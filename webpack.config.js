const path = require("path");
const hwp = require("html-webpack-plugin");
module.exports = {
  entry: {
    index: path.join(__dirname, "src", "index.js"),
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { test: /\.jsx?$/, resolve: { extensions: [".js", ".jsx"] } },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  performance: {
    hints: false,
  },
  plugins: [
    new hwp({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
