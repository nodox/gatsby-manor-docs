const path = require('path');

exports.getGatsbyConfig = () => {
  const configPath = path.resolve('./themes/src/gatsby-config.js');
  const config = require(configPath);
  return config;
}

exports.getGatsbyNodeCreatePages = () => {
  const nodePath = path.resolve('./themes/src/gatsby-node.js');
  const node = require(nodePath).createPages;
  return node
}
