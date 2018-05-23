'use strict';

const readmeFilePathPattern = '^(?:[^\\/]+\\/){1}README\\.md$',
      florenceFilePathPattern = '^(?:[^\\/]+\\/){1,}[^\\.]+\\.ocs$',
      metaJSONFilePathPattern = '^(?:[^\\/]+\\/){1}meta\\.json$',
      customGrammarBNFFilePathPattern = '^(?:[^\\/]+\\/){1}(term|expression|statement|metastatement)\\.bnf$',
      customGrammarLexicalPatternFilePathPattern = '^(?:[^\\/]+\\/){1}pattern\\.lex$',
      recognisedFilePathPattern = `${readmeFilePathPattern}|${florenceFilePathPattern}|${metaJSONFilePathPattern}|${customGrammarBNFFilePathPattern}|${customGrammarLexicalPatternFilePathPattern}`;

const readmeFilePathRegularExpression = new RegExp(readmeFilePathPattern),
      metaJSONFilePathRegularExpression = new RegExp(metaJSONFilePathPattern),
      recognisedFilePathRegularExpression = new RegExp(recognisedFilePathPattern);

function isFilePathReadmeFilePath(filePath) { return readmeFilePathRegularExpression.test(filePath); }

function isFilePathMetaJSONFilePath(filePath) { return metaJSONFilePathRegularExpression.test(filePath); }

function isFilePathRecognisedFilePath(filePath) { return recognisedFilePathRegularExpression.test(filePath); }

module.exports = {
  isFilePathReadmeFilePath: isFilePathReadmeFilePath,
  isFilePathMetaJSONFilePath: isFilePathMetaJSONFilePath,
  isFilePathRecognisedFilePath: isFilePathRecognisedFilePath
};
