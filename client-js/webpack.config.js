const path = require("path");

module.exports = {
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "../")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
