"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

import { findTerminalNodes } from "../utilities/node";

const { third } = arrayUtilities;

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
