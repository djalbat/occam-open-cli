"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _occamParsers = require("occam-parsers");

var _node = require("../utilities/node");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var first = _necessary.arrayUtilities.first;

var DependencyNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(DependencyNode, _NonTerminalNode);

  var _super = _createSuper(DependencyNode);

  function DependencyNode(ruleName, childNodes) {
    var _this;

    _classCallCheck(this, DependencyNode);

    _this = _super.call(this, ruleName, childNodes);
    _this.dependency = null;
    return _this;
  }

  _createClass(DependencyNode, [{
    key: "getDependency",
    value: function getDependency() {
      var node = this,
          ///
      terminalNodes = (0, _node.findTerminalNodes)(node),
          firstTerminalNode = first(terminalNodes),
          firstTerminalNodeSignificantToken = firstTerminalNode.getSignificantToken(),
          firstTerminalNodeSignificantTokenString = firstTerminalNodeSignificantToken.getString(),
          dependency = firstTerminalNodeSignificantTokenString; ///

      return dependency;
    }
  }], [{
    key: "fromNodesAndRuleName",
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = nodes,
          ///
      dependencyNode = _occamParsers.NonTerminalNode.fromRuleNameAndChildNodes(DependencyNode, ruleName, childNodes);

      return dependencyNode;
    }
  }]);

  return DependencyNode;
}(_occamParsers.NonTerminalNode);

exports["default"] = DependencyNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3kuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkRlcGVuZGVuY3lOb2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiZGVwZW5kZW5jeSIsIm5vZGUiLCJ0ZXJtaW5hbE5vZGVzIiwiZmlyc3RUZXJtaW5hbE5vZGUiLCJmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZmlyc3RUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuU3RyaW5nIiwiZ2V0U3RyaW5nIiwibm9kZXMiLCJkZXBlbmRlbmN5Tm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0lBRWFFLGM7Ozs7O0FBQ25CLDBCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQztBQUFBOztBQUFBOztBQUNoQyw4QkFBTUQsUUFBTixFQUFnQkMsVUFBaEI7QUFFQSxVQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBSGdDO0FBSWpDOzs7O29DQUVlO0FBQ2QsVUFBTUMsSUFBSSxHQUFHLElBQWI7QUFBQSxVQUFvQjtBQUNkQyxNQUFBQSxhQUFhLEdBQUcsNkJBQWtCRCxJQUFsQixDQUR0QjtBQUFBLFVBRU1FLGlCQUFpQixHQUFHUixLQUFLLENBQUNPLGFBQUQsQ0FGL0I7QUFBQSxVQUdNRSxpQ0FBaUMsR0FBR0QsaUJBQWlCLENBQUNFLG1CQUFsQixFQUgxQztBQUFBLFVBSU1DLHVDQUF1QyxHQUFHRixpQ0FBaUMsQ0FBQ0csU0FBbEMsRUFKaEQ7QUFBQSxVQUtNUCxVQUFVLEdBQUdNLHVDQUxuQixDQURjLENBTThDOztBQUU1RCxhQUFPTixVQUFQO0FBQ0Q7Ozt5Q0FFMkJRLEssRUFBT1YsUSxFQUFVO0FBQzNDLFVBQU1DLFVBQVUsR0FBR1MsS0FBbkI7QUFBQSxVQUEwQjtBQUNwQkMsTUFBQUEsY0FBYyxHQUFHQyw4QkFBZ0JDLHlCQUFoQixDQUEwQ2QsY0FBMUMsRUFBMERDLFFBQTFELEVBQW9FQyxVQUFwRSxDQUR2Qjs7QUFHQSxhQUFPVSxjQUFQO0FBQ0Q7Ozs7RUF2QnlDQyw2QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpbmRUZXJtaW5hbE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXBlbmRlbmN5Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5ID0gbnVsbDtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3koKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVzID0gZmluZFRlcm1pbmFsTm9kZXMobm9kZSksXG4gICAgICAgICAgZmlyc3RUZXJtaW5hbE5vZGUgPSBmaXJzdCh0ZXJtaW5hbE5vZGVzKSxcbiAgICAgICAgICBmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4gPSBmaXJzdFRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuU3RyaW5nID0gZmlyc3RUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlcGVuZGVuY3kgPSBmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBkZXBlbmRlbmN5Tm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERlcGVuZGVuY3lOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeU5vZGU7XG4gIH1cbn1cbiJdfQ==