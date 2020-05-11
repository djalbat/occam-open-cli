'use strict';

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

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var nodeUtilities = require('../utilities/node');

var NonTerminalNode = parsers.NonTerminalNode,
    arrayUtilities = necessary.arrayUtilities,
    findTerminalNodes = nodeUtilities.findTerminalNodes,
    third = arrayUtilities.third;

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
      terminalNodes = findTerminalNodes(node),
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
      repositoryNode = NonTerminalNode.fromRuleNameAndChildNodes(RepositoryNode, ruleName, childNodes);
      return repositoryNode;
    }
  }]);

  return RepositoryNode;
}(NonTerminalNode);

module.exports = RepositoryNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJub2RlVXRpbGl0aWVzIiwiTm9uVGVybWluYWxOb2RlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaW5kVGVybWluYWxOb2RlcyIsInRoaXJkIiwiUmVwb3NpdG9yeU5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJyZXBvc2l0b3J5Iiwibm9kZSIsInRlcm1pbmFsTm9kZXMiLCJ0aGlyZFRlcm1pbmFsTm9kZSIsInRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJ0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmciLCJnZXRTdHJpbmciLCJub2RlcyIsInJlcG9zaXRvcnlOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQXZCO0FBQUEsSUFDTUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUR6Qjs7QUFHQSxJQUFNRSxhQUFhLEdBQUdGLE9BQU8sQ0FBQyxtQkFBRCxDQUE3Qjs7QUFFTSxJQUFFRyxlQUFGLEdBQXNCSixPQUF0QixDQUFFSSxlQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkgsU0FEckIsQ0FDRUcsY0FERjtBQUFBLElBRUVDLGlCQUZGLEdBRXdCSCxhQUZ4QixDQUVFRyxpQkFGRjtBQUFBLElBR0VDLEtBSEYsR0FHWUYsY0FIWixDQUdFRSxLQUhGOztJQUtBQyxjOzs7OztBQUNKLDBCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQztBQUFBOztBQUFBOztBQUNoQyw4QkFBTUQsUUFBTixFQUFnQkMsVUFBaEI7QUFFQSxVQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBSGdDO0FBSWpDOzs7O29DQUVlO0FBQ2QsVUFBTUMsSUFBSSxHQUFHLElBQWI7QUFBQSxVQUFvQjtBQUNkQyxNQUFBQSxhQUFhLEdBQUdQLGlCQUFpQixDQUFDTSxJQUFELENBRHZDO0FBQUEsVUFFTUUsaUJBQWlCLEdBQUdQLEtBQUssQ0FBQ00sYUFBRCxDQUYvQjtBQUFBLFVBR01FLGlDQUFpQyxHQUFHRCxpQkFBaUIsQ0FBQ0UsbUJBQWxCLEVBSDFDO0FBQUEsVUFJTUMsdUNBQXVDLEdBQUdGLGlDQUFpQyxDQUFDRyxTQUFsQyxFQUpoRDtBQUFBLFVBS01QLFVBQVUsR0FBR00sdUNBTG5CLENBRGMsQ0FNK0M7O0FBRTdELGFBQU9OLFVBQVA7QUFDRDs7O3lDQUUyQlEsSyxFQUFPVixRLEVBQVU7QUFDM0MsVUFBTUMsVUFBVSxHQUFHUyxLQUFuQjtBQUFBLFVBQTBCO0FBQ3BCQyxNQUFBQSxjQUFjLEdBQUdoQixlQUFlLENBQUNpQix5QkFBaEIsQ0FBMENiLGNBQTFDLEVBQTBEQyxRQUExRCxFQUFvRUMsVUFBcEUsQ0FEdkI7QUFHQSxhQUFPVSxjQUFQO0FBQ0Q7Ozs7RUF2QjBCaEIsZTs7QUEwQjdCa0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBub2RlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL25vZGUnKTtcblxuY29uc3QgeyBOb25UZXJtaW5hbE5vZGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpbmRUZXJtaW5hbE5vZGVzIH0gPSBub2RlVXRpbGl0aWVzLFxuICAgICAgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJlcG9zaXRvcnlOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnJlcG9zaXRvcnkgPSBudWxsO1xuICB9XG5cbiAgZ2V0UmVwb3NpdG9yeSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZXMgPSBmaW5kVGVybWluYWxOb2Rlcyhub2RlKSxcbiAgICAgICAgICB0aGlyZFRlcm1pbmFsTm9kZSA9IHRoaXJkKHRlcm1pbmFsTm9kZXMpLFxuICAgICAgICAgIHRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiA9IHRoaXJkVGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICB0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmcgPSB0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVwb3NpdG9yeSA9IHRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlblN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHJlcG9zaXRvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICByZXBvc2l0b3J5Tm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFJlcG9zaXRvcnlOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVwb3NpdG9yeU5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXBvc2l0b3J5Tm9kZTtcbiJdfQ==