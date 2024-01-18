"use strict";

const fromEntries = require("object.fromentries");
const entries = require("object.entries");

const rule = require("../lib/rules/disallow-no-translation-text");

module.exports = {
  plugins: {
    react-zalora: {
      rules: [rule],
    },
  },
  rules: [rule],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
};

// this is so the `languageOptions` property won't be warned in the new config system
Object.defineProperty(module.exports, "languageOptions", { enumerable: false });
