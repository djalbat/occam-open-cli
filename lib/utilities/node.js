'use strict';

function findNode(node, Class) {
  var foundNode = null;

  if (node instanceof Class) {
    foundNode = node;
  } else {
    var nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      var nonTerminalNode = node,
          ///
      childNodes = nonTerminalNode.getChildNodes();

      childNodes.some(function (childNode) {
        foundNode = findNode(childNode, Class);

        if (foundNode !== null) {
          return true;
        }
      });
    }
  }

  return foundNode;
}

function findNodes(node, Class) {
  var foundNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (node instanceof Class) {
    var foundNode = node; ///

    foundNodes.push(foundNode);
  } else {
    var nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      var nonTerminalNode = node,
          ///
      childNodes = nonTerminalNode.getChildNodes();

      childNodes.forEach(function (childNode) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvbm9kZS5qcyJdLCJuYW1lcyI6WyJmaW5kTm9kZSIsIm5vZGUiLCJDbGFzcyIsImZvdW5kTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic29tZSIsImNoaWxkTm9kZSIsImZpbmROb2RlcyIsImZvdW5kTm9kZXMiLCJwdXNoIiwiZm9yRWFjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxLQUF4QixFQUErQjtBQUM3QixNQUFJQyxZQUFZLElBQWhCOztBQUVBLE1BQUlGLGdCQUFnQkMsS0FBcEIsRUFBMkI7QUFDekJDLGdCQUFZRixJQUFaO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTUcsc0JBQXNCSCxLQUFLSSxpQkFBTCxFQUE1Qjs7QUFFQSxRQUFJRCxtQkFBSixFQUF5QjtBQUN2QixVQUFNRSxrQkFBa0JMLElBQXhCO0FBQUEsVUFBOEI7QUFDeEJNLG1CQUFhRCxnQkFBZ0JFLGFBQWhCLEVBRG5COztBQUdBRCxpQkFBV0UsSUFBWCxDQUFnQixVQUFTQyxTQUFULEVBQW9CO0FBQ2xDUCxvQkFBWUgsU0FBU1UsU0FBVCxFQUFvQlIsS0FBcEIsQ0FBWjs7QUFFQSxZQUFJQyxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTkQ7QUFPRDtBQUNGOztBQUVELFNBQU9BLFNBQVA7QUFDRDs7QUFFRCxTQUFTUSxTQUFULENBQW1CVixJQUFuQixFQUF5QkMsS0FBekIsRUFBaUQ7QUFBQSxNQUFqQlUsVUFBaUIsdUVBQUosRUFBSTs7QUFDL0MsTUFBSVgsZ0JBQWdCQyxLQUFwQixFQUEyQjtBQUN6QixRQUFNQyxZQUFZRixJQUFsQixDQUR5QixDQUNEOztBQUV4QlcsZUFBV0MsSUFBWCxDQUFnQlYsU0FBaEI7QUFDRCxHQUpELE1BSU87QUFDTCxRQUFNQyxzQkFBc0JILEtBQUtJLGlCQUFMLEVBQTVCOztBQUVBLFFBQUlELG1CQUFKLEVBQXlCO0FBQ3ZCLFVBQU1FLGtCQUFrQkwsSUFBeEI7QUFBQSxVQUE4QjtBQUN4Qk0sbUJBQWFELGdCQUFnQkUsYUFBaEIsRUFEbkI7O0FBR0FELGlCQUFXTyxPQUFYLENBQW1CLFVBQVNKLFNBQVQsRUFBb0I7QUFDckNDLGtCQUFVRCxTQUFWLEVBQXFCUixLQUFyQixFQUE0QlUsVUFBNUI7QUFDRCxPQUZEO0FBR0Q7QUFDRjs7QUFFRCxTQUFPQSxVQUFQO0FBQ0Q7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmhCLFlBQVVBLFFBREs7QUFFZlcsYUFBV0E7QUFGSSxDQUFqQiIsImZpbGUiOiJub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBmaW5kTm9kZShub2RlLCBDbGFzcykge1xuICBsZXQgZm91bmROb2RlID0gbnVsbDtcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgZm91bmROb2RlID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuc29tZShmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgICAgZm91bmROb2RlID0gZmluZE5vZGUoY2hpbGROb2RlLCBDbGFzcyk7XG5cbiAgICAgICAgaWYgKGZvdW5kTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm91bmROb2RlO1xufVxuXG5mdW5jdGlvbiBmaW5kTm9kZXMobm9kZSwgQ2xhc3MsIGZvdW5kTm9kZXMgPSBbXSkge1xuICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgY29uc3QgZm91bmROb2RlID0gbm9kZTsgLy8vXG5cbiAgICBmb3VuZE5vZGVzLnB1c2goZm91bmROb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgICAgZmluZE5vZGVzKGNoaWxkTm9kZSwgQ2xhc3MsIGZvdW5kTm9kZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kTm9kZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaW5kTm9kZTogZmluZE5vZGUsXG4gIGZpbmROb2RlczogZmluZE5vZGVzXG59O1xuIl19