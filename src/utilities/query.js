"use strict";

import { Query } from "occam-dom";

export function nodeQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    if (node !== null) {
      const nodes = query.execute(node);

      node = nodes.shift() || null; ///
    }

    return node;
  };
}

export function nodesQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    let nodes = null;

    if (node !== null) {
      nodes = query.execute(node);
    }

    return nodes;
  };
}
