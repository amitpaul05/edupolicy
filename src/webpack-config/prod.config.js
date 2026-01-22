const { merge } = require('webpack-merge');
const baseConfig = require("./base.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(baseConfig, {
   devtool: "hidden-source-map",
   mode: "production",

   optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
         terserOptions: {
            extractComments: "all",
            compress: {
               drop_console: true
            }
         }
      })]
   },

   plugins: [
      new MiniCssExtractPlugin({
         // assetNameRegExp: /\.css$/g,
         // cssProcessor: require("cssnano"),
         // cssProcessorOptions: { discardComments: { removeAll: true } },
         // canPrint: true
      })
   ]
});
