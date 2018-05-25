'use strict';

function findNode(node, Class) {
  let foundNode = null;

  if (node instanceof Class) {
    foundNode = node;
  } else {
    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes();

      childNodes.some(function(childNode) {
        foundNode = findNode(childNode, Class);

        if (foundNode !== null) {
          return true;
        }
      });
    }
  }

  return foundNode;
}

function findNodes(node, Class, foundNodes = []) {
  if (node instanceof Class) {
    const foundNode = node; ///

    foundNodes.push(foundNode);
  } else {
    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes();

      childNodes.forEach(function(childNode) {
        findNodes(childNode, Class, foundNodes);
      });
    }
  }

  return foundNodes;
}

module.exports = {
  findNode: findNode,
  findNodes: findNodes
};
