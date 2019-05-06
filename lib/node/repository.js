'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var nodeUtilities = require('../utilities/node');

var NonTerminalNode = parsers.NonTerminalNode,
    arrayUtilities = necessary.arrayUtilities,
    findTerminalNodes = nodeUtilities.findTerminalNodes,
    third = arrayUtilities.third;

var RepositoryNode = function (_NonTerminalNode) {
      _inherits(RepositoryNode, _NonTerminalNode);

      function RepositoryNode(ruleName, childNodes) {
            _classCallCheck(this, RepositoryNode);

            var _this = _possibleConstructorReturn(this, (RepositoryNode.__proto__ || Object.getPrototypeOf(RepositoryNode)).call(this, ruleName, childNodes));

            _this.repository = null;
            return _this;
      }

      _createClass(RepositoryNode, [{
            key: 'getRepository',
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
            key: 'fromNodesAndRuleName',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL3JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJub2RlVXRpbGl0aWVzIiwiTm9uVGVybWluYWxOb2RlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaW5kVGVybWluYWxOb2RlcyIsInRoaXJkIiwiUmVwb3NpdG9yeU5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJyZXBvc2l0b3J5Iiwibm9kZSIsInRlcm1pbmFsTm9kZXMiLCJ0aGlyZFRlcm1pbmFsTm9kZSIsInRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJ0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmciLCJnZXRTdHJpbmciLCJub2RlcyIsInJlcG9zaXRvcnlOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxtQkFBUixDQUF0Qjs7QUFFTSxJQUFFRyxlQUFGLEdBQXNCSixPQUF0QixDQUFFSSxlQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkgsU0FEckIsQ0FDRUcsY0FERjtBQUFBLElBRUVDLGlCQUZGLEdBRXdCSCxhQUZ4QixDQUVFRyxpQkFGRjtBQUFBLElBR0VDLEtBSEYsR0FHWUYsY0FIWixDQUdFRSxLQUhGOztJQUtBQyxjOzs7QUFDSiw4QkFBWUMsUUFBWixFQUFzQkMsVUFBdEIsRUFBa0M7QUFBQTs7QUFBQSx3SUFDMUJELFFBRDBCLEVBQ2hCQyxVQURnQjs7QUFHaEMsa0JBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFIZ0M7QUFJakM7Ozs7NENBRWU7QUFDZCxzQkFBTUMsT0FBTyxJQUFiO0FBQUEsc0JBQW9CO0FBQ2RDLGtDQUFnQlAsa0JBQWtCTSxJQUFsQixDQUR0QjtBQUFBLHNCQUVNRSxvQkFBb0JQLE1BQU1NLGFBQU4sQ0FGMUI7QUFBQSxzQkFHTUUsb0NBQW9DRCxrQkFBa0JFLG1CQUFsQixFQUgxQztBQUFBLHNCQUlNQywwQ0FBMENGLGtDQUFrQ0csU0FBbEMsRUFKaEQ7QUFBQSxzQkFLTVAsYUFBYU0sdUNBTG5CLENBRGMsQ0FNK0M7O0FBRTdELHlCQUFPTixVQUFQO0FBQ0Q7OztpREFFMkJRLEssRUFBT1YsUSxFQUFVO0FBQzNDLHNCQUFNQyxhQUFhUyxLQUFuQjtBQUFBLHNCQUEwQjtBQUNwQkMsbUNBQWlCaEIsZ0JBQWdCaUIseUJBQWhCLENBQTBDYixjQUExQyxFQUEwREMsUUFBMUQsRUFBb0VDLFVBQXBFLENBRHZCOztBQUdBLHlCQUFPVSxjQUFQO0FBQ0Q7Ozs7RUF2QjBCaEIsZTs7QUEwQjdCa0IsT0FBT0MsT0FBUCxHQUFpQmYsY0FBakIiLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBub2RlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL25vZGUnKTtcblxuY29uc3QgeyBOb25UZXJtaW5hbE5vZGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpbmRUZXJtaW5hbE5vZGVzIH0gPSBub2RlVXRpbGl0aWVzLFxuICAgICAgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJlcG9zaXRvcnlOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnJlcG9zaXRvcnkgPSBudWxsO1xuICB9XG5cbiAgZ2V0UmVwb3NpdG9yeSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZXMgPSBmaW5kVGVybWluYWxOb2Rlcyhub2RlKSxcbiAgICAgICAgICB0aGlyZFRlcm1pbmFsTm9kZSA9IHRoaXJkKHRlcm1pbmFsTm9kZXMpLFxuICAgICAgICAgIHRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiA9IHRoaXJkVGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICB0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5TdHJpbmcgPSB0aGlyZFRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVwb3NpdG9yeSA9IHRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlblN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHJlcG9zaXRvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICByZXBvc2l0b3J5Tm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFJlcG9zaXRvcnlOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVwb3NpdG9yeU5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXBvc2l0b3J5Tm9kZTtcbiJdfQ==