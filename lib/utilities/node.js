"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findNodeByClass = findNodeByClass;
exports.findNodesByClass = findNodesByClass;
exports.findTerminalNodes = findTerminalNodes;
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function findNodeByClass(node, Class) {
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
function findNodesByClass(node, Class) {
    var foundNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
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
function findTerminalNodes(node) {
    var foundTerminalNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROb2RlQnlDbGFzcyhub2RlLCBDbGFzcykge1xuICBsZXQgZm91bmROb2RlID0gbnVsbDtcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgZm91bmROb2RlID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGZvdW5kTm9kZSA9IGZpbmROb2RlQnlDbGFzcyhjaGlsZE5vZGUsIENsYXNzKTtcblxuICAgICAgICBpZiAoZm91bmROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTm9kZXNCeUNsYXNzKG5vZGUsIENsYXNzLCBmb3VuZE5vZGVzID0gW10pIHtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgIGNvbnN0IGZvdW5kTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgZm91bmROb2Rlcy5wdXNoKGZvdW5kTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBmaW5kTm9kZXNCeUNsYXNzKGNoaWxkTm9kZSwgQ2xhc3MsIGZvdW5kTm9kZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGVybWluYWxOb2Rlcyhub2RlLCBmb3VuZFRlcm1pbmFsTm9kZXMgPSBbXSkge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgZm91bmRUZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIGZvdW5kVGVybWluYWxOb2Rlcy5wdXNoKGZvdW5kVGVybWluYWxOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGZpbmRUZXJtaW5hbE5vZGVzKGNoaWxkTm9kZSwgZm91bmRUZXJtaW5hbE5vZGVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZFRlcm1pbmFsTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiZmluZE5vZGVCeUNsYXNzIiwiZmluZE5vZGVzQnlDbGFzcyIsImZpbmRUZXJtaW5hbE5vZGVzIiwibm9kZSIsIkNsYXNzIiwiZm91bmROb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzb21lIiwiY2hpbGROb2RlIiwiZm91bmROb2RlcyIsInB1c2giLCJmb3JFYWNoIiwiZm91bmRUZXJtaW5hbE5vZGVzIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwiZm91bmRUZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7UUFFSUEsZUFBZSxHQUFmQSxlQUFlO1FBeUJmQyxnQkFBZ0IsR0FBaEJBLGdCQUFnQjtRQXFCaEJDLGlCQUFpQixHQUFqQkEsaUJBQWlCOzs7Ozs7OztTQTlDakJGLGVBQWUsQ0FBQ0csSUFBSSxFQUFFQyxLQUFLLEVBQUUsQ0FBQztJQUM1QyxHQUFHLENBQUNDLFNBQVMsR0FBRyxJQUFJO0lBRXBCLEVBQUUsRUFBRUYsV0FBcUIsQ0FBckJBLElBQUksRUFBWUMsS0FBSyxHQUFFLENBQUM7UUFDMUJDLFNBQVMsR0FBR0YsSUFBSTtJQUNsQixDQUFDLE1BQU0sQ0FBQztRQUNOLEdBQUssQ0FBQ0csbUJBQW1CLEdBQUdILElBQUksQ0FBQ0ksaUJBQWlCO1FBRWxELEVBQUUsRUFBRUQsbUJBQW1CLEVBQUUsQ0FBQztZQUN4QixHQUFLLENBQUNFLGVBQWUsR0FBR0wsSUFBSSxFQUN0Qk0sVUFBVSxHQUFHRCxlQUFlLENBQUNFLGFBQWE7WUFFaERELFVBQVUsQ0FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsU0FBUyxFQUFLLENBQUM7Z0JBQzlCUCxTQUFTLEdBQUdMLGVBQWUsQ0FBQ1ksU0FBUyxFQUFFUixLQUFLO2dCQUU1QyxFQUFFLEVBQUVDLFNBQVMsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTSxDQUFDLElBQUk7Z0JBQ2IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQ0EsU0FBUztBQUNsQixDQUFDO1NBRWVKLGdCQUFnQixDQUFDRSxJQUFJLEVBQUVDLEtBQUssRUFBbUIsQ0FBQztRQUFsQlMsVUFBVSxvRUFBRyxDQUFDLENBQUM7SUFDM0QsRUFBRSxFQUFFVixXQUFxQixDQUFyQkEsSUFBSSxFQUFZQyxLQUFLLEdBQUUsQ0FBQztRQUMxQixHQUFLLENBQUNDLFNBQVMsR0FBR0YsSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUUzQlUsVUFBVSxDQUFDQyxJQUFJLENBQUNULFNBQVM7SUFDM0IsQ0FBQyxNQUFNLENBQUM7UUFDTixHQUFLLENBQUNDLG1CQUFtQixHQUFHSCxJQUFJLENBQUNJLGlCQUFpQjtRQUVsRCxFQUFFLEVBQUVELG1CQUFtQixFQUFFLENBQUM7WUFDeEIsR0FBSyxDQUFDRSxlQUFlLEdBQUdMLElBQUksRUFDdEJNLFVBQVUsR0FBR0QsZUFBZSxDQUFDRSxhQUFhO1lBRWhERCxVQUFVLENBQUNNLE9BQU8sQ0FBQyxRQUFRLENBQVBILFNBQVMsRUFBSyxDQUFDO2dCQUNqQ1gsZ0JBQWdCLENBQUNXLFNBQVMsRUFBRVIsS0FBSyxFQUFFUyxVQUFVO1lBQy9DLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQ0EsVUFBVTtBQUNuQixDQUFDO1NBRWVYLGlCQUFpQixDQUFDQyxJQUFJLEVBQTJCLENBQUM7UUFBMUJhLGtCQUFrQixvRUFBRyxDQUFDLENBQUM7SUFDN0QsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR2QsSUFBSSxDQUFDZSxjQUFjO0lBRTVDLEVBQUUsRUFBRUQsZ0JBQWdCLEVBQUUsQ0FBQztRQUNyQixHQUFLLENBQUNFLGlCQUFpQixHQUFHaEIsSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUVuQ2Esa0JBQWtCLENBQUNGLElBQUksQ0FBQ0ssaUJBQWlCO0lBQzNDLENBQUMsTUFBTSxDQUFDO1FBQ04sR0FBSyxDQUFDYixtQkFBbUIsR0FBR0gsSUFBSSxDQUFDSSxpQkFBaUI7UUFFbEQsRUFBRSxFQUFFRCxtQkFBbUIsRUFBRSxDQUFDO1lBQ3hCLEdBQUssQ0FBQ0UsZUFBZSxHQUFHTCxJQUFJLEVBQ3RCTSxVQUFVLEdBQUdELGVBQWUsQ0FBQ0UsYUFBYTtZQUVoREQsVUFBVSxDQUFDTSxPQUFPLENBQUMsUUFBUSxDQUFQSCxTQUFTLEVBQUssQ0FBQztnQkFDakNWLGlCQUFpQixDQUFDVSxTQUFTLEVBQUVJLGtCQUFrQjtZQUNqRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUNBLGtCQUFrQjtBQUMzQixDQUFDIn0=