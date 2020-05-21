"use strict";

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

module.exports = RepositoryNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsidGhpcmQiLCJhcnJheVV0aWxpdGllcyIsIlJlcG9zaXRvcnlOb2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicmVwb3NpdG9yeSIsIm5vZGUiLCJ0ZXJtaW5hbE5vZGVzIiwidGhpcmRUZXJtaW5hbE5vZGUiLCJ0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwidGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuU3RyaW5nIiwiZ2V0U3RyaW5nIiwibm9kZXMiLCJyZXBvc2l0b3J5Tm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFRkUsYzs7Ozs7QUFDSiwwQkFBWUMsUUFBWixFQUFzQkMsVUFBdEIsRUFBa0M7QUFBQTs7QUFBQTs7QUFDaEMsOEJBQU1ELFFBQU4sRUFBZ0JDLFVBQWhCO0FBRUEsVUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUhnQztBQUlqQzs7OztvQ0FFZTtBQUNkLFVBQU1DLElBQUksR0FBRyxJQUFiO0FBQUEsVUFBb0I7QUFDZEMsTUFBQUEsYUFBYSxHQUFHLDZCQUFrQkQsSUFBbEIsQ0FEdEI7QUFBQSxVQUVNRSxpQkFBaUIsR0FBR1IsS0FBSyxDQUFDTyxhQUFELENBRi9CO0FBQUEsVUFHTUUsaUNBQWlDLEdBQUdELGlCQUFpQixDQUFDRSxtQkFBbEIsRUFIMUM7QUFBQSxVQUlNQyx1Q0FBdUMsR0FBR0YsaUNBQWlDLENBQUNHLFNBQWxDLEVBSmhEO0FBQUEsVUFLTVAsVUFBVSxHQUFHTSx1Q0FMbkIsQ0FEYyxDQU0rQzs7QUFFN0QsYUFBT04sVUFBUDtBQUNEOzs7eUNBRTJCUSxLLEVBQU9WLFEsRUFBVTtBQUMzQyxVQUFNQyxVQUFVLEdBQUdTLEtBQW5CO0FBQUEsVUFBMEI7QUFDcEJDLE1BQUFBLGNBQWMsR0FBR0MsOEJBQWdCQyx5QkFBaEIsQ0FBMENkLGNBQTFDLEVBQTBEQyxRQUExRCxFQUFvRUMsVUFBcEUsQ0FEdkI7O0FBR0EsYUFBT1UsY0FBUDtBQUNEOzs7O0VBdkIwQkMsNkI7O0FBMEI3QkUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEIsY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBmaW5kVGVybWluYWxOb2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUmVwb3NpdG9yeU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcykge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHRoaXMucmVwb3NpdG9yeSA9IG51bGw7XG4gIH1cblxuICBnZXRSZXBvc2l0b3J5KCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlcyA9IGZpbmRUZXJtaW5hbE5vZGVzKG5vZGUpLFxuICAgICAgICAgIHRoaXJkVGVybWluYWxOb2RlID0gdGhpcmQodGVybWluYWxOb2RlcyksXG4gICAgICAgICAgdGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuID0gdGhpcmRUZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIHRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlblN0cmluZyA9IHRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZXBvc2l0b3J5ID0gdGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuU3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gcmVwb3NpdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIHJlcG9zaXRvcnlOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUmVwb3NpdG9yeU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZXBvc2l0b3J5Tm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcG9zaXRvcnlOb2RlO1xuIl19