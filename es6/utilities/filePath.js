'use strict';

const readmeFilePathPattern = '^(?:[^\\/]+\\/){1}README\\.md$',
      florenceFilePathPattern = '^(?:[^\\/]+\\/){1,}[^\\.]+\\.ocs$',
      validMetaJSONFilePathPattern = '^(?:[^\\/]+\\/){1}meta\\.json$',
      invalidMetaJSONFilePathPattern = '^(?:[^\\/]+\\/){2,}meta\\.json$',
      validCustomGrammarBNFFilePathPattern = '^(?:[^\\/]+\\/){1}(term|expression|statement|metastatement)\\.bnf$',
      invalidCustomGrammarBNFFilePathPattern = '^(?:[^\\/]+\\/){2,}(term|expression|statement|metastatement)\\.bnf$',
      validCustomGrammarLexicalPatternFilePathPattern = '^(?:[^\\/]+\\/){1}pattern\\.lex$',
      invalidCustomGrammarLexicalPatternFilePathPattern = '^(?:[^\\/]+\\/){2,}pattern\\.lex$',
      metaJSONFilePathPattern = validMetaJSONFilePathPattern, ///
      customGrammarBNFFilePathPattern = validCustomGrammarBNFFilePathPattern, ///
      customGrammarLexicalPatternFilePathPattern = validCustomGrammarLexicalPatternFilePathPattern, ///
      validFilePathPattern = `${validMetaJSONFilePathPattern}|${validCustomGrammarBNFFilePathPattern}|${validCustomGrammarLexicalPatternFilePathPattern}`,
      invalidFilePathPattern = `${invalidMetaJSONFilePathPattern}|${invalidCustomGrammarBNFFilePathPattern}|${invalidCustomGrammarLexicalPatternFilePathPattern}`,
      recognisedFilePathPattern = `${readmeFilePathPattern}|${florenceFilePathPattern}|${metaJSONFilePathPattern}|${customGrammarBNFFilePathPattern}|${customGrammarLexicalPatternFilePathPattern}`;

const readmeFilePathRegularExpression = new RegExp(readmeFilePathPattern),
      florenceFilePathRegularExpression = new RegExp(florenceFilePathPattern),
      metaJSONFilePathRegularExpression = new RegExp(metaJSONFilePathPattern),
      validFilePathRegularExpression = new RegExp(validFilePathPattern),
      invalidFilePathRegularExpression = new RegExp(invalidFilePathPattern),
      recognisedFilePathRegularExpression = new RegExp(recognisedFilePathPattern),
      validMetaJSONFilePathRegularExpression = new RegExp(validMetaJSONFilePathPattern),
      invalidMetaJSONFilePathRegularExpression = new RegExp(invalidMetaJSONFilePathPattern),
      validCustomGrammarBNFFilePathRegularExpression = new RegExp(validCustomGrammarBNFFilePathPattern),
      invalidCustomGrammarBNFFilePathRegularExpression = new RegExp(invalidCustomGrammarBNFFilePathPattern),
      validCustomGrammarLexicalPatternFilePathRegularExpression = new RegExp(validCustomGrammarLexicalPatternFilePathPattern),
      invalidCustomGrammarLexicalPatternFilePathRegularExpression = new RegExp(invalidCustomGrammarLexicalPatternFilePathPattern);

function isFilePathReadmeFilePath(filePath) { return readmeFilePathRegularExpression.test(filePath); }

function isFilePathFlorenceFilePath(filePath) { return florenceFilePathRegularExpression.test(filePath); }

function isFilePathMetaJSONFilePath(filePath) { return metaJSONFilePathRegularExpression.test(filePath); }

function isFilePathValidFilePath(filePath) { return validFilePathRegularExpression.test(filePath); }

function isFilePathInvalidFilePath(filePath) { return invalidFilePathRegularExpression.test(filePath); }

function isFilePathRecognisedFilePath(filePath) { return recognisedFilePathRegularExpression.test(filePath); }

function isFilePathValidMetaJSONFilePath(filePath) { return validMetaJSONFilePathRegularExpression.test(filePath); }

function isFilePathInvalidMetaJSONFilePath(filePath) { return invalidMetaJSONFilePathRegularExpression.test(filePath); }

function isFilePathValidCustomGrammarBNFFilePath(filePath) { return validCustomGrammarBNFFilePathRegularExpression.test(filePath); }

function isFilePathInvalidCustomGrammarBNFFilePath(filePath) { return invalidCustomGrammarBNFFilePathRegularExpression.test(filePath); }

function isFilePathValidCustomGrammarLexicalPatternFilePath(filePath) { return validCustomGrammarLexicalPatternFilePathRegularExpression.test(filePath); }

function isFilePathInvalidCustomGrammarLexicalPatternFilePath(filePath) { return invalidCustomGrammarLexicalPatternFilePathRegularExpression.test(filePath); }

module.exports = {
  isFilePathReadmeFilePath,
  isFilePathFlorenceFilePath,
  isFilePathMetaJSONFilePath,
  isFilePathValidFilePath,
  isFilePathInvalidFilePath,
  isFilePathRecognisedFilePath,
  isFilePathValidMetaJSONFilePath,
  isFilePathInvalidMetaJSONFilePath,
  isFilePathValidCustomGrammarBNFFilePath,
  isFilePathInvalidCustomGrammarBNFFilePath,
  isFilePathValidCustomGrammarLexicalPatternFilePath,
  isFilePathInvalidCustomGrammarLexicalPatternFilePath
};
