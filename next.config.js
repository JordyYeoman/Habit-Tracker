const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  // Below section gives us access to the webpack config
  // IE - adding in additional packages
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
};
