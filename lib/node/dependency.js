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
var DependencyNode = function(NonTerminalNode) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2RlcGVuZGVuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgZmluZFRlcm1pbmFsTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlcGVuZGVuY3lOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3kgPSBudWxsO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jeSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZXMgPSBmaW5kVGVybWluYWxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBmaXJzdFRlcm1pbmFsTm9kZSA9IGZpcnN0KHRlcm1pbmFsTm9kZXMpLFxuICAgICAgICAgIGZpcnN0VGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0VGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmcgPSBmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVwZW5kZW5jeSA9IGZpcnN0VGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlblN0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY3lOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRGVwZW5kZW5jeU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5Tm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRW1CLFVBQVc7SUFDVixhQUFlO0lBRWIsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0MsS0FBSyxHQUxrQixVQUFXLGdCQUtsQyxLQUFLO0lBRVEsY0FBYztjQUFkLGNBQWM7YUFBZCxjQUFjLENBQ3JCLFFBQVEsRUFBRSxVQUFVOzhCQURiLGNBQWM7O2lFQUFkLGNBQWMsYUFFekIsUUFBUSxFQUFFLFVBQVU7Y0FFckIsVUFBVSxHQUFHLElBQUk7OztpQkFKTCxjQUFjOztZQU9qQyxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLElBQUksU0FDSixhQUFhLE9BYlcsS0FBbUIsb0JBYVQsSUFBSSxHQUN0QyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsYUFBYSxHQUN2QyxpQ0FBaUMsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsSUFDekUsdUNBQXVDLEdBQUcsaUNBQWlDLENBQUMsU0FBUyxJQUNyRixVQUFVLEdBQUcsdUNBQXVDLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV4RCxVQUFVOzs7OztZQUdaLEdBQW9CLEdBQXBCLG9CQUFvQjs0QkFBcEIsb0JBQW9CLENBQUMsS0FBSyxFQUFFLFFBQVE7b0JBQ25DLFVBQVUsR0FBRyxLQUFLLEVBQ2xCLGNBQWMsR0ExQlEsYUFBZSxpQkEwQkoseUJBQXlCLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxVQUFVO3VCQUU5RixjQUFjOzs7O1dBdEJKLGNBQWM7RUFOSCxhQUFlO2tCQU0xQixjQUFjIn0=