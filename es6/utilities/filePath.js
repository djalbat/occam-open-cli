'use strict';

const readmeFilePathPattern = '^[^\\/]+\/README\\.md$',
      florenceFilePathPattern = '\\.ocs$',
      validMetaJSONFilePathPattern = '^(?:[^\\/]+\\/){1}meta\\.json$',
      invalidMetaJSONFilePathPattern = '^(?:[^\\/]+\\/){2,}meta\\.json$',
      validCustomGrammarBNFFilePathPattern = '^(?:[^\\/]+\\/){1}(term|statement|metastatement)\\.bnf$',
      invalidCustomGrammarBNFFilePathPattern = '^(?:[^\\/]+\\/){2,}(term|statement|metastatement)\\.bnf$',
      validCustomGrammarLexicalPatternFilePathPattern = '^(?:[^\\/]+\\/){1}pattern\\.lex$',
      invalidCustomGrammarLexicalPatternFilePathPattern = '^(?:[^\\/]+\\/){2,}pattern\\.lex$',
      validCustomGrammarFilePathPattern = `${validCustomGrammarBNFFilePathPattern}|${validCustomGrammarLexicalPatternFilePathPattern}`,
      invalidCustomGrammarFilePathPattern = `${invalidCustomGrammarBNFFilePathPattern}|${invalidCustomGrammarLexicalPatternFilePathPattern}`,
      validFilePathPattern = `${validMetaJSONFilePathPattern}|${validCustomGrammarFilePathPattern}`,
      invalidFilePathPattern = `${invalidMetaJSONFilePathPattern}|${invalidCustomGrammarFilePathPattern}`,
      recognisedFilePathPattern = `${readmeFilePathPattern}|${florenceFilePathPattern}|${validFilePathPattern}`;

const validFilePathRegularExpression = new RegExp(validFilePathPattern),
      invalidFilePathRegularExpression = new RegExp(invalidFilePathPattern),
      readmeFilePathRegularExpression = new RegExp(readmeFilePathPattern),
      florenceFilePathRegularExpression = new RegExp(florenceFilePathPattern),
      recognisedFilePathRegularExpression = new RegExp(recognisedFilePathPattern),
      validMetaJSONFilePathRegularExpression = new RegExp(validMetaJSONFilePathPattern),
      invalidMetaJSONFilePathRegularExpression = new RegExp(invalidMetaJSONFilePathPattern),
      validCustomGrammarBNFFilePathRegularExpression = new RegExp(validCustomGrammarBNFFilePathPattern),
      invalidCustomGrammarBNFFilePathRegularExpression = new RegExp(invalidCustomGrammarBNFFilePathPattern),
      validCustomGrammarLexicalPatternFilePathRegularExpression = new RegExp(validCustomGrammarLexicalPatternFilePathPattern),
      invalidCustomGrammarLexicalPatternFilePathRegularExpression = new RegExp(invalidCustomGrammarLexicalPatternFilePathPattern);

function isFilePathValidFilePath(filePath) { return validFilePathRegularExpression.test(filePath); }

function isFilePathInvalidFilePath(filePath) { return invalidFilePathRegularExpression.test(filePath); }

function isFilePathReadmeFilePath(filePath) { return readmeFilePathRegularExpression.test(filePath); }

function isFilePathFlorenceFilePath(filePath) { return florenceFilePathRegularExpression.test(filePath); }

function isFilePathRecognisedFilePath(filePath) { return recognisedFilePathRegularExpression.test(filePath); }

function isFilePathValidMetaJSONFilePath(filePath) { return validMetaJSONFilePathRegularExpression.test(filePath); }

function isFilePathInvalidMetaJSONFilePath(filePath) { return invalidMetaJSONFilePathRegularExpression.test(filePath); }

function isFilePathValidCustomGrammarBNFFilePath(filePath) { return validCustomGrammarBNFFilePathRegularExpression.test(filePath); }

function isFilePathInvalidCustomGrammarBNFFilePath(filePath) { return invalidCustomGrammarBNFFilePathRegularExpression.test(filePath); }

function isFilePathValidCustomGrammarLexicalPatternFilePath(filePath) { return validCustomGrammarLexicalPatternFilePathRegularExpression.test(filePath); }

function isFilePathInvalidCustomGrammarLexicalPatternFilePath(filePath) { return invalidCustomGrammarLexicalPatternFilePathRegularExpression.test(filePath); }

module.exports = {
  isFilePathValidFilePath: isFilePathValidFilePath,
  isFilePathInvalidFilePath: isFilePathInvalidFilePath,
  isFilePathReadmeFilePath: isFilePathReadmeFilePath,
  isFilePathFlorenceFilePath: isFilePathFlorenceFilePath,
  isFilePathRecognisedFilePath: isFilePathRecognisedFilePath,
  isFilePathValidMetaJSONFilePath: isFilePathValidMetaJSONFilePath,
  isFilePathInvalidMetaJSONFilePath: isFilePathInvalidMetaJSONFilePath,
  isFilePathValidCustomGrammarBNFFilePath: isFilePathValidCustomGrammarBNFFilePath,
  isFilePathInvalidCustomGrammarBNFFilePath: isFilePathInvalidCustomGrammarBNFFilePath,
  isFilePathValidCustomGrammarLexicalPatternFilePath: isFilePathValidCustomGrammarLexicalPatternFilePath,
  isFilePathInvalidCustomGrammarLexicalPatternFilePath: isFilePathInvalidCustomGrammarLexicalPatternFilePath
};
