"use strict";

export function findNodeByClass(node, Class) {
  let foundNode = null;

  if (node instanceof Class) {
    foundNode = node;
  } else {
    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes();

      childNodes.some((childNode) => {
        foundNode = findNodeByClass(childNode, Class);

        if (foundNode !== null) {
          return true;
        }
      });
    }
  }

  return foundNode;
}

export function findNodesByClass(node, Class, foundNodes = []) {
  if (node instanceof Class) {
    const foundNode = node; ///

    foundNodes.push(foundNode);
  } else {
    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes();

      childNodes.forEach((childNode) => {
        findNodesByClass(childNode, Class, foundNodes);
      });
    }
  }

  return foundNodes;
}

export function findTerminalNodes(node, foundTerminalNodes = []) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const foundTerminalNode = node; ///

    foundTerminalNodes.push(foundTerminalNode);
  } else {
    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes();

      childNodes.forEach((childNode) => {
        findTerminalNodes(childNode, foundTerminalNodes);
      });
    }
  }

  return foundTerminalNodes;
}
