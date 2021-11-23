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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbE5vZGUiLCJmaW5kVGVybWluYWxOb2RlcyIsInRoaXJkIiwiUmVwb3NpdG9yeU5vZGUiLCJjb25zdHJ1Y3RvciIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInJlcG9zaXRvcnkiLCJnZXRSZXBvc2l0b3J5Iiwibm9kZSIsInRlcm1pbmFsTm9kZXMiLCJ0aGlyZFRlcm1pbmFsTm9kZSIsInRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJ0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmciLCJnZXRTdHJpbmciLCJmcm9tTm9kZXNBbmRSdWxlTmFtZSIsIm5vZGVzIiwicmVwb3NpdG9yeU5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUNWLEdBQWUsQ0FBZixhQUFlO0FBRWIsR0FBbUIsQ0FBbkIsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsR0FBSyxDQUFHLEtBQUssR0FMa0IsVUFBVyxnQkFLbEMsS0FBSztJQUVRLGNBQWMsaUJBQXBCLFFBQVE7Y0FBRixjQUFjO2FBQWQsY0FBYyxDQUNyQixRQUFRLEVBQUUsVUFBVTs4QkFEYixjQUFjOztpRUFBZCxjQUFjLGFBRXpCLFFBQVEsRUFBRSxVQUFVO2NBRXJCLFVBQVUsR0FBRyxJQUFJOzs7aUJBSkwsY0FBYzs7WUFPakMsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUNYLGFBQWEsT0FiVyxLQUFtQixvQkFhVCxJQUFJLEdBQ3RDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxhQUFhLEdBQ3ZDLGlDQUFpQyxHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixJQUN6RSx1Q0FBdUMsR0FBRyxpQ0FBaUMsQ0FBQyxTQUFTLElBQ3JGLFVBQVUsR0FBRyx1Q0FBdUMsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRWhFLE1BQU0sQ0FBQyxVQUFVO1lBQ25CLENBQUM7Ozs7WUFFTSxHQUFvQixHQUFwQixvQkFBb0I7bUJBQTNCLFFBQVEsQ0FBRCxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQzVDLEdBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxFQUNsQixjQUFjLEdBMUJRLGFBQWUsaUJBMEJKLHlCQUF5QixDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsVUFBVTtnQkFFckcsTUFBTSxDQUFDLGNBQWM7WUFDdkIsQ0FBQzs7O1dBdkJrQixjQUFjO0VBTkgsYUFBZTtrQkFNMUIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpbmRUZXJtaW5hbE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHsgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvc2l0b3J5Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gbnVsbDtcbiAgfVxuXG4gIGdldFJlcG9zaXRvcnkoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVzID0gZmluZFRlcm1pbmFsTm9kZXMobm9kZSksXG4gICAgICAgICAgdGhpcmRUZXJtaW5hbE5vZGUgPSB0aGlyZCh0ZXJtaW5hbE5vZGVzKSxcbiAgICAgICAgICB0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4gPSB0aGlyZFRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgdGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuU3RyaW5nID0gdGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlcG9zaXRvcnkgPSB0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiByZXBvc2l0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgcmVwb3NpdG9yeU5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSZXBvc2l0b3J5Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlcG9zaXRvcnlOb2RlO1xuICB9XG59XG4iXX0=