'use strict';

const parsers = require('occam-parsers'),
      necessary = require('necessary');

const { NonTerminalNode } = parsers,
      { arrayUtilities } = necessary,
      { third } = arrayUtilities;

class RepositoryNode extends NonTerminalNode {
  constructor(ruleName, childNodes) {
    super(ruleName, childNodes);

    this.repository = null;
  }

  getRepository() {
    const childNodes = this.getChildNodes(),
          thirdChildNode = third(childNodes),
          thirdChildNodeSignificantToken = thirdChildNode.getSignificantToken(),
          thirdChildNodeSignificantTokenContent = thirdChildNodeSignificantToken.getContent(),
          repository = thirdChildNodeSignificantTokenContent;  ///

    return repository;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = nodes, ///
          repositoryNode = NonTerminalNode.fromRuleNameAndChildNodes(RepositoryNode, ruleName, childNodes);

    return repositoryNode;
  }
}

module.exports = RepositoryNode;
