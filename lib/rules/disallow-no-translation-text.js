"use strict";

const report = require("../util/report");

const messages = {
  requireTranslation: "Require translation for text",
};

// not exact Regexp but it's good enough for our purpose
const SPECIAL_CHARACTERS = new RegExp(/^&.{1,10};/);

const VALID_TEXT = new RegExp(/.*[a-zA-Z].*/);

module.exports = {
  meta: {
    docs: {
      description: "Enforce to have translation for text",
      category: "Possible Errors",
    },
    fixable: "code",
    messages,
    schema: [
      {
        type: "object",
        properties: {
          whitelistTexts: {
            type: "array",
            items: {
              type: "string",
            },
            uniqueItems: true,
            default: [],
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const config = context.options[0] || {};
    const whitelistTexts = config.whitelistTexts || [];

    return {
      JSXText(node) {
        if (whitelistTexts.includes(node.value.trim())) {
          return;
        }

        if (node.value.trim() === "") {
          return;
        }

        // require the text should have at least one alphabet
        if (!VALID_TEXT.test(node.value)) {
          return;
        }

        // ignore special characters
        if (SPECIAL_CHARACTERS.test(node.value)) {
          return;
        }

        report(context, messages.requireTranslation, "requireTranslation", {
          node,
        });
      },
    };
  },
};
