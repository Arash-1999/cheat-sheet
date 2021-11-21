/*** *** *** *** *** *** *** *** ***/
// spry_ps webpack configuration file
/*** *** *** *** *** *** *** *** ***/

// required packages
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const eslintWebpackPlugin = require("eslint-webpack-plugin");

// check mode is productin or not
const isProduction = process.env.NODE_ENV == "production";

// main config object
const config = {
  entry: {
    index: "./src/index.jsx",
    vendor: ["react", "react-dom", "@emotion/styled"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  module: {
    rules: [
      // js and jsx files
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // babel configuration
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "> 0.5%, last 2 versions, Firefox ESR, not dead",
                },
              ],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
            plugins: [
              "@emotion",
              [
                "module-resolver",
                {
                  root: ["./src"],
                  alias: {
                    cm: "./src/components",
                    assets: "./src/assets",
                  },
                },
              ],
            ],
          },
        },
      },
      // images
      {
        test: /\.(png|jpe?g|git)$/i,
        type: "asset/resource",
        exclude: /node_modules/,
      },
      // load svg as React Components
      {
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
      },
      // styles
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new eslintWebpackPlugin({}),
  ],
};

// return config file depend on mode
module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }

  return config;
};
