'use strict';

const lexers = require('occam-lexers'),
      parsers = require('occam-parsers');

const messages = require('../messages'),
      tokensUtilities = require('../utilities/tokens'),
      nodeUtilities = require('../utilities/node');

const { MetaJSONLexer } = lexers,
      { MetaJSONParser } = parsers,
      { significantTokensFromTokens } = tokensUtilities,
      { findNonTerminalNodeByRuleName } = nodeUtilities,
      { META_JSON_REPOSITORY_DOES_NOT_EXIST_MESSAGE } = messages;

const metaJSONLexer = MetaJSONLexer.fromNothing(),
      metaJSONParser = MetaJSONParser.fromNothing();

function checkMetaJSONRepositoryExists(proceed, abort, context) {
  const { release } = context,
        metaJSONFile = release.getMetaJSONFile(),
        metaJSONFileContent = metaJSONFile.getContent(),
        content = metaJSONFileContent,  ///
        tokens = metaJSONLexer.tokensFromContent(content),
        significantTokens = significantTokensFromTokens(tokens),
        node = metaJSONParser.nodeFromSignificantTokens(significantTokens),
        ruleName = 'repository',
        repositoryNonTerminalNode = findNonTerminalNodeByRuleName(node, ruleName),
        repositoryNonTerminalNodeExists = (repositoryNonTerminalNode !== null),
        metaJSONRepositoryExists = repositoryNonTerminalNodeExists; ///

  if (!metaJSONRepositoryExists) {
    console.log(META_JSON_REPOSITORY_DOES_NOT_EXIST_MESSAGE);

    abort();

    return;
  }

  proceed();
}

module.exports = checkMetaJSONRepositoryExists;
