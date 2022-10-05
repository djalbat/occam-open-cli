"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

import { findTerminalNodes } from "../utilities/node";

const { third } = arrayUtilities;

export default class RepositoryNode extends NonTerminalNode {
  getRepository() {
    const node = this,  ///
          terminalNodes = findTerminalNodes(node),
          thirdTerminalNode = third(terminalNodes),
          thirdTerminalNodeSignificantToken = thirdTerminalNode.getSignificantToken(),
          thirdTerminalNodeSignificantTokenString = thirdTerminalNodeSignificantToken.getString(),
          repository = thirdTerminalNodeSignificantTokenString;  ///

    return repository;
  }

  clone() { return super.clone(RepositoryNode); }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = nodes, ///
          repositoryNode = NonTerminalNode.fromRuleNameAndChildNodes(RepositoryNode, ruleName, childNodes);

    return repositoryNode;
  }
}
