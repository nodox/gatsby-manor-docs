module.exports = {
  verbose: true,
  modulePathIgnorePatterns: [
    "node_modules/",
    ".cache/",
  ],
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy"
  },
  setupFiles: [
    "./config/test/shim.js",
    "./config/test/jestSetup.js"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
