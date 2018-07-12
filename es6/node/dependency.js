'use strict';

const parsers = require('occam-parsers'),
      necessary = require('necessary');

const nodeUtilities = require('../utilities/node');

const { NonTerminalNode } = parsers,
      { arrayUtilities } = necessary,
      { findTerminalNodes } = nodeUtilities,
      { first } = arrayUtilities;

class DependencyNode extends NonTerminalNode {
  constructor(ruleName, childNodes) {
    super(ruleName, childNodes);

    this.dependency = null;
  }

  getDependency() {
    const node = this,  ///
          terminalNodes = findTerminalNodes(node),
          firstTerminalNode = first(terminalNodes),
          firstTerminalNodeSignificantToken = firstTerminalNode.getSignificantToken(),
          firstTerminalNodeSignificantTokenString = firstTerminalNodeSignificantToken.getString(),
          dependency = firstTerminalNodeSignificantTokenString; ///

    return dependency;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = nodes, ///
          dependencyNode = NonTerminalNode.fromRuleNameAndChildNodes(DependencyNode, ruleName, childNodes);

    return dependencyNode;
  }
}

module.exports = DependencyNode;
