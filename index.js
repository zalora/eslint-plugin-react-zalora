"use strict";

const configAll = require("./configs/all");
const configRecommended = require("./configs/recommended");

// for legacy config system
const plugins = ["react-zalora"];

module.exports = {
  configs: {
    recommended: Object.assign({}, configRecommended, {
      parserOptions: configRecommended.languageOptions.parserOptions,
      plugins,
    }),
  },
};
