'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var nodeUtilities = require('../utilities/node');

var NonTerminalNode = parsers.NonTerminalNode,
    arrayUtilities = necessary.arrayUtilities,
    findTerminalNodes = nodeUtilities.findTerminalNodes,
    first = arrayUtilities.first;

var DependencyNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(DependencyNode, _NonTerminalNode);

  function DependencyNode(ruleName, childNodes) {
    var _this;

    _classCallCheck(this, DependencyNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DependencyNode).call(this, ruleName, childNodes));
    _this.dependency = null;
    return _this;
  }

  _createClass(DependencyNode, [{
    key: "getDependency",
    value: function getDependency() {
      var node = this,
          ///
      terminalNodes = findTerminalNodes(node),
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
      dependencyNode = NonTerminalNode.fromRuleNameAndChildNodes(DependencyNode, ruleName, childNodes);
      return dependencyNode;
    }
  }]);

  return DependencyNode;
}(NonTerminalNode);

module.exports = DependencyNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY3kuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJub2RlVXRpbGl0aWVzIiwiTm9uVGVybWluYWxOb2RlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaW5kVGVybWluYWxOb2RlcyIsImZpcnN0IiwiRGVwZW5kZW5jeU5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJkZXBlbmRlbmN5Iiwibm9kZSIsInRlcm1pbmFsTm9kZXMiLCJmaXJzdFRlcm1pbmFsTm9kZSIsImZpcnN0VGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmciLCJnZXRTdHJpbmciLCJub2RlcyIsImRlcGVuZGVuY3lOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBdkI7QUFBQSxJQUNNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFELENBRHpCOztBQUdBLElBQU1FLGFBQWEsR0FBR0YsT0FBTyxDQUFDLG1CQUFELENBQTdCOztBQUVNLElBQUVHLGVBQUYsR0FBc0JKLE9BQXRCLENBQUVJLGVBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCSCxTQURyQixDQUNFRyxjQURGO0FBQUEsSUFFRUMsaUJBRkYsR0FFd0JILGFBRnhCLENBRUVHLGlCQUZGO0FBQUEsSUFHRUMsS0FIRixHQUdZRixjQUhaLENBR0VFLEtBSEY7O0lBS0FDLGM7OztBQUNKLDBCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQztBQUFBOztBQUFBOztBQUNoQyx3RkFBTUQsUUFBTixFQUFnQkMsVUFBaEI7QUFFQSxVQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBSGdDO0FBSWpDOzs7O29DQUVlO0FBQ2QsVUFBTUMsSUFBSSxHQUFHLElBQWI7QUFBQSxVQUFvQjtBQUNkQyxNQUFBQSxhQUFhLEdBQUdQLGlCQUFpQixDQUFDTSxJQUFELENBRHZDO0FBQUEsVUFFTUUsaUJBQWlCLEdBQUdQLEtBQUssQ0FBQ00sYUFBRCxDQUYvQjtBQUFBLFVBR01FLGlDQUFpQyxHQUFHRCxpQkFBaUIsQ0FBQ0UsbUJBQWxCLEVBSDFDO0FBQUEsVUFJTUMsdUNBQXVDLEdBQUdGLGlDQUFpQyxDQUFDRyxTQUFsQyxFQUpoRDtBQUFBLFVBS01QLFVBQVUsR0FBR00sdUNBTG5CLENBRGMsQ0FNOEM7O0FBRTVELGFBQU9OLFVBQVA7QUFDRDs7O3lDQUUyQlEsSyxFQUFPVixRLEVBQVU7QUFDM0MsVUFBTUMsVUFBVSxHQUFHUyxLQUFuQjtBQUFBLFVBQTBCO0FBQ3BCQyxNQUFBQSxjQUFjLEdBQUdoQixlQUFlLENBQUNpQix5QkFBaEIsQ0FBMENiLGNBQTFDLEVBQTBEQyxRQUExRCxFQUFvRUMsVUFBcEUsQ0FEdkI7QUFHQSxhQUFPVSxjQUFQO0FBQ0Q7Ozs7RUF2QjBCaEIsZTs7QUEwQjdCa0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBub2RlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL25vZGUnKTtcblxuY29uc3QgeyBOb25UZXJtaW5hbE5vZGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpbmRUZXJtaW5hbE5vZGVzIH0gPSBub2RlVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIERlcGVuZGVuY3lOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3kgPSBudWxsO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jeSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZXMgPSBmaW5kVGVybWluYWxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBmaXJzdFRlcm1pbmFsTm9kZSA9IGZpcnN0KHRlcm1pbmFsTm9kZXMpLFxuICAgICAgICAgIGZpcnN0VGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0VGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmcgPSBmaXJzdFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVwZW5kZW5jeSA9IGZpcnN0VGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlblN0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY3lOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRGVwZW5kZW5jeU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5Tm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlcGVuZGVuY3lOb2RlO1xuIl19