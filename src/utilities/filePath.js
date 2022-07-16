"use strict";

const readmeFilePathPattern = "^(?:[^\\/]+\\/){1}README\\.md$",
      florenceFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.fls$",
      metaJSONFilePathPattern = "^(?:[^\\/]+\\/){1}meta\\.json$",
      customGrammarBNFFilePathPattern = "^(?:[^\\/]+\\/){1}(type|term|expression|statement|metastatement)\\.bnf$",
      customGrammarLexicalPatternFilePathPattern = "^(?:[^\\/]+\\/){1}pattern\\.lex$",
      recognisedFilePathPattern = `${readmeFilePathPattern}|${florenceFilePathPattern}|${metaJSONFilePathPattern}|${customGrammarBNFFilePathPattern}|${customGrammarLexicalPatternFilePathPattern}`;

const readmeFilePathRegularExpression = new RegExp(readmeFilePathPattern),
      florenceFilePathRegularExpression = new RegExp(florenceFilePathPattern),
      metaJSONFilePathRegularExpression = new RegExp(metaJSONFilePathPattern),
      recognisedFilePathRegularExpression = new RegExp(recognisedFilePathPattern),
      customGrammarBNFFilePathRegularExpression = new RegExp(customGrammarBNFFilePathPattern),
      customGrammarLexicalPatternFilePathRegularExpression = new RegExp(customGrammarLexicalPatternFilePathPattern);

export function isFilePathReadmeFilePath(filePath) { return readmeFilePathRegularExpression.test(filePath); }

export function isFilePathFlorenceFilePath(filePath) { return florenceFilePathRegularExpression.test(filePath); }

export function isFilePathMetaJSONFilePath(filePath) { return metaJSONFilePathRegularExpression.test(filePath); }

export function isFilePathRecognisedFilePath(filePath) { return recognisedFilePathRegularExpression.test(filePath); }

export function isFilePathCustomGrammarBNFFilePath(filePath) { return customGrammarBNFFilePathRegularExpression.test(filePath); }

export function isFilePathCustomGrammarLexicalPatternFilePath(filePath) { return customGrammarLexicalPatternFilePathRegularExpression.test(filePath); }

export default {
  isFilePathReadmeFilePath,
  isFilePathFlorenceFilePath,
  isFilePathMetaJSONFilePath,
  isFilePathRecognisedFilePath,
  isFilePathCustomGrammarBNFFilePath,
  isFilePathCustomGrammarLexicalPatternFilePath
};
