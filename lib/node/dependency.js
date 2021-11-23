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
var first = _necessary.arrayUtilities.first;
var DependencyNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DependencyNode, NonTerminalNode);
    function DependencyNode(ruleName, childNodes) {
        _classCallCheck(this, DependencyNode);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(DependencyNode).call(this, ruleName, childNodes));
        _this.dependency = null;
        return _this;
    }
    _createClass(DependencyNode, [
        {
            key: "getDependency",
            value: function getDependency() {
                var node = this, terminalNodes = (0, _node).findTerminalNodes(node), firstTerminalNode = first(terminalNodes), firstTerminalNodeSignificantToken = firstTerminalNode.getSignificantToken(), firstTerminalNodeSignificantTokenString = firstTerminalNodeSignificantToken.getString(), dependency = firstTerminalNodeSignificantTokenString; ///
                return dependency;
            }
        }
    ], [
        {
            key: "fromNodesAndRuleName",
            value: function fromNodesAndRuleName(nodes, ruleName) {
                var childNodes = nodes, dependencyNode = _occamParsers.NonTerminalNode.fromRuleNameAndChildNodes(DependencyNode, ruleName, childNodes);
                return dependencyNode;
            }
        }
    ]);
    return DependencyNode;
}(_occamParsers.NonTerminalNode);
exports.default = DependencyNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2RlcGVuZGVuY3kuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbE5vZGUiLCJmaW5kVGVybWluYWxOb2RlcyIsImZpcnN0IiwiRGVwZW5kZW5jeU5vZGUiLCJjb25zdHJ1Y3RvciIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImRlcGVuZGVuY3kiLCJnZXREZXBlbmRlbmN5Iiwibm9kZSIsInRlcm1pbmFsTm9kZXMiLCJmaXJzdFRlcm1pbmFsTm9kZSIsImZpcnN0VGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmciLCJnZXRTdHJpbmciLCJmcm9tTm9kZXNBbmRSdWxlTmFtZSIsIm5vZGVzIiwiZGVwZW5kZW5jeU5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUNWLEdBQWUsQ0FBZixhQUFlO0FBRWIsR0FBbUIsQ0FBbkIsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsR0FBSyxDQUFHLEtBQUssR0FMa0IsVUFBVyxnQkFLbEMsS0FBSztJQUVRLGNBQWMsaUJBQXBCLFFBQVE7Y0FBRixjQUFjO2FBQWQsY0FBYyxDQUNyQixRQUFRLEVBQUUsVUFBVTs4QkFEYixjQUFjOztpRUFBZCxjQUFjLGFBRXpCLFFBQVEsRUFBRSxVQUFVO2NBRXJCLFVBQVUsR0FBRyxJQUFJOzs7aUJBSkwsY0FBYzs7WUFPakMsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUNYLGFBQWEsT0FiVyxLQUFtQixvQkFhVCxJQUFJLEdBQ3RDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxhQUFhLEdBQ3ZDLGlDQUFpQyxHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixJQUN6RSx1Q0FBdUMsR0FBRyxpQ0FBaUMsQ0FBQyxTQUFTLElBQ3JGLFVBQVUsR0FBRyx1Q0FBdUMsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRS9ELE1BQU0sQ0FBQyxVQUFVO1lBQ25CLENBQUM7Ozs7WUFFTSxHQUFvQixHQUFwQixvQkFBb0I7bUJBQTNCLFFBQVEsQ0FBRCxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQzVDLEdBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxFQUNsQixjQUFjLEdBMUJRLGFBQWUsaUJBMEJKLHlCQUF5QixDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsVUFBVTtnQkFFckcsTUFBTSxDQUFDLGNBQWM7WUFDdkIsQ0FBQzs7O1dBdkJrQixjQUFjO0VBTkgsYUFBZTtrQkFNMUIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpbmRUZXJtaW5hbE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXBlbmRlbmN5Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5ID0gbnVsbDtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3koKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVzID0gZmluZFRlcm1pbmFsTm9kZXMobm9kZSksXG4gICAgICAgICAgZmlyc3RUZXJtaW5hbE5vZGUgPSBmaXJzdCh0ZXJtaW5hbE5vZGVzKSxcbiAgICAgICAgICBmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4gPSBmaXJzdFRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuU3RyaW5nID0gZmlyc3RUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlcGVuZGVuY3kgPSBmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBkZXBlbmRlbmN5Tm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERlcGVuZGVuY3lOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeU5vZGU7XG4gIH1cbn1cbiJdfQ==