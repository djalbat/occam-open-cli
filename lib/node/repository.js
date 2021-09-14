"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _node = require("../utilities/node");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var third = _necessary.arrayUtilities.third;
var RepositoryNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RepositoryNode, NonTerminalNode);
    function RepositoryNode(ruleName, childNodes) {
        _classCallCheck(this, RepositoryNode);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(RepositoryNode).call(this, ruleName, childNodes));
        _this.repository = null;
        return _this;
    }
    _createClass(RepositoryNode, [
        {
            key: "getRepository",
            value: function getRepository() {
                var node = this, terminalNodes = (0, _node).findTerminalNodes(node), thirdTerminalNode = third(terminalNodes), thirdTerminalNodeSignificantToken = thirdTerminalNode.getSignificantToken(), thirdTerminalNodeSignificantTokenString = thirdTerminalNodeSignificantToken.getString(), repository = thirdTerminalNodeSignificantTokenString; ///
                return repository;
            }
        }
    ], [
        {
            key: "fromNodesAndRuleName",
            value: function fromNodesAndRuleName(nodes, ruleName) {
                var childNodes = nodes, repositoryNode = _occamParsers.NonTerminalNode.fromRuleNameAndChildNodes(RepositoryNode, ruleName, childNodes);
                return repositoryNode;
            }
        }
    ]);
    return RepositoryNode;
}(_occamParsers.NonTerminalNode);
exports.default = RepositoryNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3JlcG9zaXRvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgZmluZFRlcm1pbmFsTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9zaXRvcnlOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnJlcG9zaXRvcnkgPSBudWxsO1xuICB9XG5cbiAgZ2V0UmVwb3NpdG9yeSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZXMgPSBmaW5kVGVybWluYWxOb2Rlcyhub2RlKSxcbiAgICAgICAgICB0aGlyZFRlcm1pbmFsTm9kZSA9IHRoaXJkKHRlcm1pbmFsTm9kZXMpLFxuICAgICAgICAgIHRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiA9IHRoaXJkVGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICB0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmcgPSB0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVwb3NpdG9yeSA9IHRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlblN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHJlcG9zaXRvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICByZXBvc2l0b3J5Tm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFJlcG9zaXRvcnlOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVwb3NpdG9yeU5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUNWLEdBQWUsQ0FBZixhQUFlO0FBRWIsR0FBbUIsQ0FBbkIsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsR0FBSyxDQUFHLEtBQUssR0FMa0IsVUFBVyxnQkFLbEMsS0FBSztJQUVRLGNBQWM7Y0FBZCxjQUFjO2FBQWQsY0FBYyxDQUNyQixRQUFRLEVBQUUsVUFBVTs4QkFEYixjQUFjOztpRUFBZCxjQUFjLGFBRXpCLFFBQVEsRUFBRSxVQUFVO2NBRXJCLFVBQVUsR0FBRyxJQUFJOzs7aUJBSkwsY0FBYzs7WUFPakMsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLElBQUksU0FDSixhQUFhLE9BYlcsS0FBbUIsb0JBYVQsSUFBSSxHQUN0QyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsYUFBYSxHQUN2QyxpQ0FBaUMsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsSUFDekUsdUNBQXVDLEdBQUcsaUNBQWlDLENBQUMsU0FBUyxJQUNyRixVQUFVLEdBQUcsdUNBQXVDLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV6RCxVQUFVO1lBQ25CLENBQUM7Ozs7WUFFTSxHQUFvQixHQUFwQixvQkFBb0I7NEJBQXBCLG9CQUFvQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDNUMsR0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLEVBQ2xCLGNBQWMsR0ExQlEsYUFBZSxpQkEwQkoseUJBQXlCLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxVQUFVO3VCQUU5RixjQUFjO1lBQ3ZCLENBQUM7OztXQXZCa0IsY0FBYztFQU5ILGFBQWU7a0JBTTFCLGNBQWMifQ==