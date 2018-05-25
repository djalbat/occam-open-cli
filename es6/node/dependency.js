'use strict';

const parsers = require('occam-parsers'),
      necessary = require('necessary');

const { NonTerminalNode } = parsers,
      { arrayUtilities } = necessary,
      { first, second } = arrayUtilities;

class DependencyNode extends NonTerminalNode {
  constructor(ruleName, childNodes) {
    super(ruleName, childNodes);

    this.dependency = null;
  }

  getDependency() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          firstChildNodeSignificantToken = firstChildNode.getSignificantToken(),
          firstChildNodeSignificantTokenContent = firstChildNodeSignificantToken.getContent(),
          matches = firstChildNodeSignificantTokenContent.match(/^"([^"]+)"$/),
          secondMatch = second(matches),
          dependency = secondMatch; ///

    return dependency;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = nodes, ///
          dependencyNode = NonTerminalNode.fromRuleNameAndChildNodes(DependencyNode, ruleName, childNodes);

    return dependencyNode;
  }
}

module.exports = DependencyNode;
