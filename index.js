"use strict";

const configAll = require("./configs/all");
const configRecommended = require("./configs/recommended");

const allRules = require("./lib/rules");

// for legacy config system
const plugins = ["react"];

module.exports = {
  deprecatedRules: configAll.plugins.react.deprecatedRules,
  rules: allRules,
  configs: {
    recommended: Object.assign({}, configRecommended, {
      parserOptions: configRecommended.languageOptions.parserOptions,
      plugins,
    }),
    all: Object.assign({}, configAll, {
      parserOptions: configAll.languageOptions.parserOptions,
      plugins,
    }),
  },
};
