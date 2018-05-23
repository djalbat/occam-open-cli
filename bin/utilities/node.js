'use strict';

function findNonTerminalNodeByRuleName(node, ruleName) {
  let nonTerminalNode = null;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    nonTerminalNode = node; ///

    const nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

    if (nonTerminalNodeRuleName !== ruleName) {
      const childNodes = nonTerminalNode.getChildNodes();

      nonTerminalNode = childNodes.reduce(function(nonTerminalNode, childNode) {
        if (nonTerminalNode === null) {
          nonTerminalNode = findNonTerminalNodeByRuleName(childNode, ruleName);
        }

        return nonTerminalNode;
      }, null);
    }
  }

  return nonTerminalNode;
}

module.exports = {
  findNonTerminalNodeByRuleName: findNonTerminalNodeByRuleName
};
