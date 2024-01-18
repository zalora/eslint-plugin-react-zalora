"use strict";

const configAll = require("./configs/all");
const configRecommended = require("./configs/recommended");

const rule = require("./lib/rules/disallow-no-translation-text");

// for legacy config system
const plugins = ["react"];

module.exports = {
  rules: [rule],
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
