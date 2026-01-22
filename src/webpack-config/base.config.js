// Plugins
const path = require("path");
const glob = require("glob");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const isHot = path.basename(require.main.filename) === "webpack-dev-server.js";

module.exports = {

  devtool: "inline-source-map",
  externals: {
    Drupal: 'Drupal',
    drupalSettings: 'drupalSettings',
  },

  entry: (() => {
    // Get individual JS files for component-specific bundles
    const individualEntries = glob.sync('./web/themes/custom/edupolicy/templates/**/*.js').reduce(function (obj, el) {
      obj[path.parse(el).name] = el;
      return obj;
    }, {});

    // Get all JS and SCSS files for app bundle
    const allJsFiles = glob.sync('./web/themes/custom/edupolicy/templates/**/*.js');
    const allScssFiles = glob.sync('./web/themes/custom/edupolicy/templates/**/*.scss');

    return {
      ...individualEntries, // Individual component entries (block, header, footer, hero, etc.)
      app: [...allJsFiles, ...allScssFiles] // Combined app entry - all components
    };
  })(),

  output: {
    path: path.resolve('./web/themes/custom/edupolicy/dist/'),
    filename: "scripts/[name]/[name].js"
  },

  plugins: [
    // MiniCssExtractPlugin
    new MiniCssExtractPlugin({
      filename: isHot ? "[name].css" : "css/[name]/[name].css",
      chunkFilename: "[id].css"
    }),
  ],

  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin()
    ]
  },
  resolve: {
    extensions: [".js", ".css", ".scss"],
    modules: ["node_modules"],
    alias: {
      request$: "xhr",
      "fonts": path.resolve(__dirname, "themes/custom/edupolicy/fonts"),
      "components": path.resolve(__dirname, "themes/custom/edupolicy/templates/components"),
      "styles": path.resolve(__dirname, "themes/custom/edupolicy/templates/styles"),
      // "widgets": path.resolve(__dirname, "themes/custom/edupolicy/templates/widgets"),
    }
  },
  module: {
    rules: [
      {
        // babel-loader
        test: /\.js$/,
        exclude: /node_modules/,
        rules: [
          {
            use: [{
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                babelrc: false,
                rootMode: "upward"
              }
            }]
          }
        ]
      },
      {
        // json loader
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        // style loaders
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2,
              esModule: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        // Loads fonts
        test: /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader',
        options: {
          limit: true,
          esModule: false
        }
      },
      {
        // Load images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
      {
        // Allow partials in html pages.
        test: /\.(html)$/,
        // exclude: /node_modules/,
        include: [
          path.resolve(__dirname, "themes/custom/edupolicy/icon-font/")
        ],
      }
    ]
  },
  stats: {
    children: true
  },
};
