const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    open: true,
  },
});
