"use strict";
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
export function findNodeByClass(node, Class) {
    var foundNode = null;
    if (_instanceof(node, Class)) {
        foundNode = node;
    } else {
        var nodeNonTerminalNode = node.isNonTerminalNode();
        if (nodeNonTerminalNode) {
            var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
            childNodes.some(function(childNode) {
                foundNode = findNodeByClass(childNode, Class);
                if (foundNode !== null) {
                    return true;
                }
            });
        }
    }
    return foundNode;
}
export function findNodesByClass(node, Class, param) {
    var foundNodes = param === void 0 ? [] : param;
    if (_instanceof(node, Class)) {
        var foundNode = node; ///
        foundNodes.push(foundNode);
    } else {
        var nodeNonTerminalNode = node.isNonTerminalNode();
        if (nodeNonTerminalNode) {
            var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
            childNodes.forEach(function(childNode) {
                findNodesByClass(childNode, Class, foundNodes);
            });
        }
    }
    return foundNodes;
}
export function findTerminalNodes(node, param) {
    var foundTerminalNodes = param === void 0 ? [] : param;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var foundTerminalNode = node; ///
        foundTerminalNodes.push(foundTerminalNode);
    } else {
        var nodeNonTerminalNode = node.isNonTerminalNode();
        if (nodeNonTerminalNode) {
            var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
            childNodes.forEach(function(childNode) {
                findTerminalNodes(childNode, foundTerminalNodes);
            });
        }
    }
    return foundTerminalNodes;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROb2RlQnlDbGFzcyhub2RlLCBDbGFzcykge1xuICBsZXQgZm91bmROb2RlID0gbnVsbDtcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgZm91bmROb2RlID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGZvdW5kTm9kZSA9IGZpbmROb2RlQnlDbGFzcyhjaGlsZE5vZGUsIENsYXNzKTtcblxuICAgICAgICBpZiAoZm91bmROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTm9kZXNCeUNsYXNzKG5vZGUsIENsYXNzLCBmb3VuZE5vZGVzID0gW10pIHtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgIGNvbnN0IGZvdW5kTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgZm91bmROb2Rlcy5wdXNoKGZvdW5kTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBmaW5kTm9kZXNCeUNsYXNzKGNoaWxkTm9kZSwgQ2xhc3MsIGZvdW5kTm9kZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGVybWluYWxOb2Rlcyhub2RlLCBmb3VuZFRlcm1pbmFsTm9kZXMgPSBbXSkge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgZm91bmRUZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIGZvdW5kVGVybWluYWxOb2Rlcy5wdXNoKGZvdW5kVGVybWluYWxOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGZpbmRUZXJtaW5hbE5vZGVzKGNoaWxkTm9kZSwgZm91bmRUZXJtaW5hbE5vZGVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZFRlcm1pbmFsTm9kZXM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Z0JBRUksZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLO1FBQ3JDLFNBQVMsR0FBRyxJQUFJO1FBRWhCLFdBQXFCLENBQXJCLElBQUksRUFBWSxLQUFLO0FBQ3ZCLGlCQUFTLEdBQUcsSUFBSTs7WUFFVixtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCO1lBRTlDLG1CQUFtQjtnQkFDZixlQUFlLEdBQUcsSUFBSSxFQUN0QixVQUFVLEdBQUcsZUFBZSxDQUFDLGFBQWE7QUFFaEQsc0JBQVUsQ0FBQyxJQUFJLFVBQUUsU0FBUztBQUN4Qix5QkFBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLEVBQUUsS0FBSztvQkFFeEMsU0FBUyxLQUFLLElBQUk7MkJBQ2IsSUFBSTs7Ozs7V0FNWixTQUFTOztnQkFHRixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQWU7UUFBZixVQUFVLEdBQVYsS0FBZSxtQkFBZixLQUFlO1FBQ3ZELFdBQXFCLENBQXJCLElBQUksRUFBWSxLQUFLO1lBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0FBRTNCLGtCQUFVLENBQUMsSUFBSSxDQUFDLFNBQVM7O1lBRW5CLG1CQUFtQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7WUFFOUMsbUJBQW1CO2dCQUNmLGVBQWUsR0FBRyxJQUFJLEVBQ3RCLFVBQVUsR0FBRyxlQUFlLENBQUMsYUFBYTtBQUVoRCxzQkFBVSxDQUFDLE9BQU8sVUFBRSxTQUFTO0FBQzNCLGdDQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVTs7OztXQUs1QyxVQUFVOztnQkFHSCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsS0FBdUI7UUFBdkIsa0JBQWtCLEdBQWxCLEtBQXVCLG1CQUF2QixLQUF1QjtRQUN2RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYztRQUV4QyxnQkFBZ0I7WUFDWixpQkFBaUIsR0FBRyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0FBRW5DLDBCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUI7O1lBRW5DLG1CQUFtQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7WUFFOUMsbUJBQW1CO2dCQUNmLGVBQWUsR0FBRyxJQUFJLEVBQ3RCLFVBQVUsR0FBRyxlQUFlLENBQUMsYUFBYTtBQUVoRCxzQkFBVSxDQUFDLE9BQU8sVUFBRSxTQUFTO0FBQzNCLGlDQUFpQixDQUFDLFNBQVMsRUFBRSxrQkFBa0I7Ozs7V0FLOUMsa0JBQWtCIn0=