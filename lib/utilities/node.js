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
function findNodesByClass(node, Class, param) {
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
function findTerminalNodes(node, param) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROb2RlQnlDbGFzcyhub2RlLCBDbGFzcykge1xuICBsZXQgZm91bmROb2RlID0gbnVsbDtcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgZm91bmROb2RlID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGZvdW5kTm9kZSA9IGZpbmROb2RlQnlDbGFzcyhjaGlsZE5vZGUsIENsYXNzKTtcblxuICAgICAgICBpZiAoZm91bmROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTm9kZXNCeUNsYXNzKG5vZGUsIENsYXNzLCBmb3VuZE5vZGVzID0gW10pIHtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgIGNvbnN0IGZvdW5kTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgZm91bmROb2Rlcy5wdXNoKGZvdW5kTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBmaW5kTm9kZXNCeUNsYXNzKGNoaWxkTm9kZSwgQ2xhc3MsIGZvdW5kTm9kZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGVybWluYWxOb2Rlcyhub2RlLCBmb3VuZFRlcm1pbmFsTm9kZXMgPSBbXSkge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgZm91bmRUZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIGZvdW5kVGVybWluYWxOb2Rlcy5wdXNoKGZvdW5kVGVybWluYWxOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGZpbmRUZXJtaW5hbE5vZGVzKGNoaWxkTm9kZSwgZm91bmRUZXJtaW5hbE5vZGVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZFRlcm1pbmFsTm9kZXM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBw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