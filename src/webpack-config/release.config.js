const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// Date
const date = new Date().toISOString().slice(0, 10).split("/").join("-");

// Filesystem commands
let fs = require("fs");
let mkdirp = require("mkdirp");

// Make Release Directories
mkdirp(path.join(__dirname, "../releases/" + date), function(err) {
   if (err) console.error(err);
   else console.log("Successfully created a dated release folder!");
});

// Find and remove for package.json issue
fs.readFile(path.join(__dirname, "../package.json"), { encoding: "utf-8" }, function(err, data) {
   if (err) throw error;

   // Convert file data in an array
   let dataArray = data.split("\n");

   // Looking for a line that contains keyword in our files
   const searchKeyword = "@primacy";

   // Keyword not found checker
   let lastIndex = -1;

   for (let index = 0; index < dataArray.length; index++) {

      // Check if a line contains the keyword
      if (dataArray[index].includes(searchKeyword)) {

         // Found a line includes a keyword
         lastIndex = index;
         break;
      }
   }

   // Removes the keyword from data Array
   dataArray.splice(lastIndex, 1);

   // Create updated file with new data and remove the line containing our keyword.
   const updatedData = dataArray.join("\n");
   fs.writeFile(path.join(__dirname, "../releases/" + date + "/package.json"), updatedData, (err) => {
      if (err) throw err;
      console.log("Successfully removed dependencies from package.json file!");
   });
});

module.exports = merge(baseConfig, {
   devtool: "none",
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
      new OptimizeCssAssetsPlugin({
         assetNameRegExp: /\.css$/g,
         cssProcessor: require("cssnano"),
         cssProcessorOptions: { discardComments: { removeAll: true } },
         canPrint: true
      }),
      new FileManagerPlugin({
         onEnd: [
            {
               copy: [
                  {
                     source: path.join(__dirname, "../config/{base,dev,prod}.config.js"),
                     destination: path.join(__dirname, "../releases/" + date + "/config")
                  },
                  {
                     source: path.join(__dirname, "../dist"),
                     destination: path.join(__dirname, "../releases/" + date + "/dist")
                  },
                  {
                     source: path.join(__dirname, "../src"),
                     destination: path.join(__dirname, "../releases/" + date + "/src")
                  },
                  {
                     source: path.join(__dirname, "../.*"),
                     destination: path.join(__dirname, "../releases/" + date)
                  },
                  {
                     source: path.join(__dirname, "../build.xml"),
                     destination: path.join(__dirname, "../releases/" + date)
                  },
                  {
                     source: path.join(__dirname, "../postcss.config.js"),
                     destination: path.join(__dirname, "../releases/" + date)
                  },
                  {
                     source: path.join(__dirname, "../gsap-bonus.tgz"),
                     destination: path.join(__dirname, "../releases/" + date)
                  }
               ],
               archive: [
                  {
                     source: path.join(__dirname, "../releases/" + date),
                     destination: path.join(__dirname, "../releases/" + date) + ".zip"
                  }
               ],
               delete: [
                  path.join(__dirname, "../releases/" + date)
               ]
            }
         ]
      })
   ]
});
