const path = require("path");
const webpack = require("webpack");
const {
  override,
  addBabelPlugins,
  babelInclude,
  addWebpackAlias,
  addWebpackModuleRule,
  addWebpackPlugin,
} = require("customize-cra");

const newConf = override(
  ...addBabelPlugins(
    "@babel/plugin-proposal-class-properties",
    "react-native-reanimated/plugin",
    "babel-plugin-react-native-web"
  ),
  babelInclude(
    [
      path.resolve(__dirname, "node_modules/react-native-gesture-handler"),
      path.resolve(__dirname, "node_modules/react-native-reanimated"),
      path.resolve(__dirname, "node_modules/react-native-vector-icons"),
      path.resolve(__dirname, "src"),
    ],
    addWebpackAlias({
      "react-native": "react-native-web",
    }),
    addWebpackModuleRule({
      test: /\.ttf$/,
      loader: "url-loader", // or directly file-loader
      include: path.resolve(
        __dirname,
        "node_modules/react-native-vector-icons"
      ),
    })
  )
);

module.exports = newConf;
