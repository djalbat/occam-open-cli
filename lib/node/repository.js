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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var third = _necessary.arrayUtilities.third;

var RepositoryNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(RepositoryNode, _NonTerminalNode);

  var _super = _createSuper(RepositoryNode);

  function RepositoryNode(ruleName, childNodes) {
    var _this;

    _classCallCheck(this, RepositoryNode);

    _this = _super.call(this, ruleName, childNodes);
    _this.repository = null;
    return _this;
  }

  _createClass(RepositoryNode, [{
    key: "getRepository",
    value: function getRepository() {
      var node = this,
          ///
      terminalNodes = (0, _node.findTerminalNodes)(node),
          thirdTerminalNode = third(terminalNodes),
          thirdTerminalNodeSignificantToken = thirdTerminalNode.getSignificantToken(),
          thirdTerminalNodeSignificantTokenString = thirdTerminalNodeSignificantToken.getString(),
          repository = thirdTerminalNodeSignificantTokenString; ///

      return repository;
    }
  }], [{
    key: "fromNodesAndRuleName",
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = nodes,
          ///
      repositoryNode = _occamParsers.NonTerminalNode.fromRuleNameAndChildNodes(RepositoryNode, ruleName, childNodes);

      return repositoryNode;
    }
  }]);

  return RepositoryNode;
}(_occamParsers.NonTerminalNode);

exports["default"] = RepositoryNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsidGhpcmQiLCJhcnJheVV0aWxpdGllcyIsIlJlcG9zaXRvcnlOb2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicmVwb3NpdG9yeSIsIm5vZGUiLCJ0ZXJtaW5hbE5vZGVzIiwidGhpcmRUZXJtaW5hbE5vZGUiLCJ0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwidGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuU3RyaW5nIiwiZ2V0U3RyaW5nIiwibm9kZXMiLCJyZXBvc2l0b3J5Tm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0lBRWFFLGM7Ozs7O0FBQ25CLDBCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQztBQUFBOztBQUFBOztBQUNoQyw4QkFBTUQsUUFBTixFQUFnQkMsVUFBaEI7QUFFQSxVQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBSGdDO0FBSWpDOzs7O29DQUVlO0FBQ2QsVUFBTUMsSUFBSSxHQUFHLElBQWI7QUFBQSxVQUFvQjtBQUNkQyxNQUFBQSxhQUFhLEdBQUcsNkJBQWtCRCxJQUFsQixDQUR0QjtBQUFBLFVBRU1FLGlCQUFpQixHQUFHUixLQUFLLENBQUNPLGFBQUQsQ0FGL0I7QUFBQSxVQUdNRSxpQ0FBaUMsR0FBR0QsaUJBQWlCLENBQUNFLG1CQUFsQixFQUgxQztBQUFBLFVBSU1DLHVDQUF1QyxHQUFHRixpQ0FBaUMsQ0FBQ0csU0FBbEMsRUFKaEQ7QUFBQSxVQUtNUCxVQUFVLEdBQUdNLHVDQUxuQixDQURjLENBTStDOztBQUU3RCxhQUFPTixVQUFQO0FBQ0Q7Ozt5Q0FFMkJRLEssRUFBT1YsUSxFQUFVO0FBQzNDLFVBQU1DLFVBQVUsR0FBR1MsS0FBbkI7QUFBQSxVQUEwQjtBQUNwQkMsTUFBQUEsY0FBYyxHQUFHQyw4QkFBZ0JDLHlCQUFoQixDQUEwQ2QsY0FBMUMsRUFBMERDLFFBQTFELEVBQW9FQyxVQUFwRSxDQUR2Qjs7QUFHQSxhQUFPVSxjQUFQO0FBQ0Q7Ozs7RUF2QnlDQyw2QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpbmRUZXJtaW5hbE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHsgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvc2l0b3J5Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gbnVsbDtcbiAgfVxuXG4gIGdldFJlcG9zaXRvcnkoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVzID0gZmluZFRlcm1pbmFsTm9kZXMobm9kZSksXG4gICAgICAgICAgdGhpcmRUZXJtaW5hbE5vZGUgPSB0aGlyZCh0ZXJtaW5hbE5vZGVzKSxcbiAgICAgICAgICB0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4gPSB0aGlyZFRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgdGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuU3RyaW5nID0gdGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlcG9zaXRvcnkgPSB0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiByZXBvc2l0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgcmVwb3NpdG9yeU5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSZXBvc2l0b3J5Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlcG9zaXRvcnlOb2RlO1xuICB9XG59XG4iXX0=