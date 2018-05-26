'use strict';

const parsers = require('occam-parsers'),
      necessary = require('necessary');

const nodeUtilities = require('../utilities/node');

const { NonTerminalNode } = parsers,
      { arrayUtilities } = necessary,
      { findTerminalNodes } = nodeUtilities,
      { third } = arrayUtilities;

class RepositoryNode extends NonTerminalNode {
  constructor(ruleName, childNodes) {
    super(ruleName, childNodes);

    this.repository = null;
  }

  getRepository() {
    const node = this,  ///
          terminalNodes = findTerminalNodes(node),
          thirdTerminalNode = third(terminalNodes),
          thirdTerminalNodeSignificantToken = thirdTerminalNode.getSignificantToken(),
          thirdTerminalNodeSignificantTokenString = thirdTerminalNodeSignificantToken.getString(),
          repository = thirdTerminalNodeSignificantTokenString;  ///

    return repository;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = nodes, ///
          repositoryNode = NonTerminalNode.fromRuleNameAndChildNodes(RepositoryNode, ruleName, childNodes);

    return repositoryNode;
  }
}

module.exports = RepositoryNode;
