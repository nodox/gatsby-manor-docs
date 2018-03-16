const path = require('path');
const config = require('./jay-config');

exports.createPages = config.getGatsbyNodeCreatePages();
