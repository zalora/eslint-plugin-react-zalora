"use strict";

const configAll = require("./configs/all");
const configRecommended = require("./configs/recommended");

// for legacy config system
const plugins = ["react-zalora"];

const rule = require("../lib/rules/disallow-no-translation-text");

module.exports = {
  configs: {
    recommended: Object.assign({}, configRecommended, {
      parserOptions: configRecommended.languageOptions.parserOptions,
      plugins,
    }),
  },
  rules: {
    "disallow-no-translation-text": rule,
  },
};
