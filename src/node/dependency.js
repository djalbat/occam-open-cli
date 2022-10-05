"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

import { findTerminalNodes } from "../utilities/node";

const { first } = arrayUtilities;

export default class DependencyNode extends NonTerminalNode {
  getDependency() {
    const node = this,  ///
          terminalNodes = findTerminalNodes(node),
          firstTerminalNode = first(terminalNodes),
          firstTerminalNodeSignificantToken = firstTerminalNode.getSignificantToken(),
          firstTerminalNodeSignificantTokenString = firstTerminalNodeSignificantToken.getString(),
          dependency = firstTerminalNodeSignificantTokenString; ///

    return dependency;
  }

  clone() { return super.clone(DependencyNode); }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = nodes, ///
          dependencyNode = NonTerminalNode.fromRuleNameAndChildNodes(DependencyNode, ruleName, childNodes);

    return dependencyNode;
  }
}
