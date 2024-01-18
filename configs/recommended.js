"use strict";

const all = require("./all");

module.exports = Object.assign({}, all, {
  languageOptions: all.languageOptions,
});

// this is so the `languageOptions` property won't be warned in the new config system
Object.defineProperty(module.exports, "languageOptions", { enumerable: false });
