'use strict';

const lexers = require('occam-lexers'),
      parsers = require('occam-parsers');

const File = require('../file'),
      RepositoryNode = require('../node/repository'),
      DependencyNode = require('../node/dependency'),
      nodeUtilities = require('../utilities/node'),
      tokensUtilities = require('../utilities/tokens');

const { MetaJSONLexer } = lexers,
      { MetaJSONParser } = parsers,
      { findNode, findNodes } = nodeUtilities,
      { significantTokensFromTokens } = tokensUtilities;

const mappings = {
        'repository': RepositoryNode,
        'dependency': DependencyNode
      },
      metaJSONLexer = MetaJSONLexer.fromNothing(),
      metaJSONParser = MetaJSONParser.fromMappings(mappings);

class MetaJSONFile extends File {
  constructor(path, content, repositoryNode, dependencyNodes) {
    super(path, content);

    this.repositoryNode = repositoryNode;
    this.dependencyNodes = dependencyNodes;
  }

  getRepository() { return this.repositoryNode.getRepository(); }

  getDependencies() {
    const dependencies = this.dependencyNodes.map(function(dependencyNode) {
      const dependency = dependencyNode.getDependency();

      return dependency;
    });

    return dependencies;
  }

  checkRepositoryExists() {
    const repositoryNodeExists = (this.repositoryNode !== null),
          repositoryExists = repositoryNodeExists;///

    return repositoryExists;
  }

  static fromFile(file) {
    const path = file.getPath(),
          content = file.getContent(),
          tokens = metaJSONLexer.tokensFromContent(content),
          significantTokens = significantTokensFromTokens(tokens),
          node = metaJSONParser.nodeFromSignificantTokens(significantTokens),
          repositoryNode = findNode(node, RepositoryNode),
          dependencyNodes = findNodes(node, DependencyNode),
          metaJSONFile = new MetaJSONFile(path, content, repositoryNode, dependencyNodes);

    return metaJSONFile;
  }
}

module.exports = MetaJSONFile;
