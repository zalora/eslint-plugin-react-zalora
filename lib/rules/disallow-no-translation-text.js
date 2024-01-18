'use strict';

const report = require('../util/report');

const messages = {
  requireTranslation: 'Require translation for text',
};

module.exports = {
  meta: {
    docs: {
      description: 'Enforce to have translation for text',
      category: 'Possible Errors',
    },
    fixable: 'code',
    messages,
  },

  create(context) {
    return {
      JSXText(node) {
        report(context, messages.requireTranslation, 'requireTranslation', {
          node,
        });
      },
    };
  },
};
