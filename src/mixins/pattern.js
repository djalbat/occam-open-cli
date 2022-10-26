"use strict";

import { fileNameFromFilePath } from "../utilities/name";
import { TYPE_PATTERN_FILE_NAME, SYMBOL_PATTERN_FILE_NAME, OPERATOR_PATTERN_FILE_NAME } from "../fileNames";

function getPattern(patternFileName) {
  let pattern = null;

  const customGrammarPatternFiles = this.getCustomGrammarPatternFiles(),
        customGrammarPatternFile = customGrammarPatternFiles.find((customGrammarPatternFile) => {
        const customGrammarPatternFilePath = customGrammarPatternFile.getPath(),
              customGrammarPatternFileName = fileNameFromFilePath(customGrammarPatternFilePath);

        if (customGrammarPatternFileName === patternFileName) {
          return true;
        }
      }) || null;

  if (customGrammarPatternFile !== null) {
    const customGrammarPatternFileContent = customGrammarPatternFile.getContent();

    pattern = customGrammarPatternFileContent;  ///
  }

  return pattern;
}

function getTypePattern() {
  const fileName = TYPE_PATTERN_FILE_NAME, ///
        pattern = this.getPattern(fileName),
        typePattern = pattern;  ///

  return typePattern;
}

function getSymbolPattern() {
  const fileName = SYMBOL_PATTERN_FILE_NAME, ///
        pattern = this.getPattern(fileName),
        symbolPattern = pattern;  ///

  return symbolPattern;
}

function getOperatorPattern() {
  const fileName = OPERATOR_PATTERN_FILE_NAME, ///
        pattern = this.getPattern(fileName),
        operatorPattern = pattern;  ///

  return operatorPattern;
}

const patternMixins =  {
  getPattern,
  getTypePattern,
  getSymbolPattern,
  getOperatorPattern
};

export default patternMixins;
