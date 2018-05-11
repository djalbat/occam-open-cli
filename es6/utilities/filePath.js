'use strict';

const readmeFilePathPattern = '^(?:[^\\/]+\\/){1}README\\.md$',
      florenceFilePathPattern = '^(?:[^\\/]+\\/){1,}[^\\.]+\\.ocs$',
      metaJSONFilePathPattern = '^(?:[^\\/]+\\/){1}meta\\.json$',
      customGrammarBNFFilePathPattern = '^(?:[^\\/]+\\/){1}(term|expression|statement|metastatement)\\.bnf$',
      customGrammarLexicalPatternFilePathPattern = '^(?:[^\\/]+\\/){1}pattern\\.lex$',
      recognisedFilePathPattern = `${readmeFilePathPattern}|${florenceFilePathPattern}|${metaJSONFilePathPattern}|${customGrammarBNFFilePathPattern}|${customGrammarLexicalPatternFilePathPattern}`;

const recognisedFilePathRegularExpression = new RegExp(recognisedFilePathPattern);

function isFilePathRecognisedFilePath(filePath) { return recognisedFilePathRegularExpression.test(filePath); }

module.exports = {
  isFilePathRecognisedFilePath: isFilePathRecognisedFilePath
};
