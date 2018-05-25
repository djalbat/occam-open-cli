'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var NonTerminalNode = parsers.NonTerminalNode,
    arrayUtilities = necessary.arrayUtilities,
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
                  var childNodes = this.getChildNodes(),
                      thirdChildNode = third(childNodes),
                      thirdChildNodeSignificantToken = thirdChildNode.getSignificantToken(),
                      thirdChildNodeSignificantTokenContent = thirdChildNodeSignificantToken.getContent(),
                      repository = thirdChildNodeSignificantTokenContent; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL3JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJOb25UZXJtaW5hbE5vZGUiLCJhcnJheVV0aWxpdGllcyIsInRoaXJkIiwiUmVwb3NpdG9yeU5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJyZXBvc2l0b3J5IiwiZ2V0Q2hpbGROb2RlcyIsInRoaXJkQ2hpbGROb2RlIiwidGhpcmRDaGlsZE5vZGVTaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInRoaXJkQ2hpbGROb2RlU2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQiLCJnZXRDb250ZW50Iiwibm9kZXMiLCJyZXBvc2l0b3J5Tm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHTSxJQUFFRSxlQUFGLEdBQXNCSCxPQUF0QixDQUFFRyxlQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkYsU0FEckIsQ0FDRUUsY0FERjtBQUFBLElBRUVDLEtBRkYsR0FFWUQsY0FGWixDQUVFQyxLQUZGOztJQUlBQyxjOzs7QUFDSiw4QkFBWUMsUUFBWixFQUFzQkMsVUFBdEIsRUFBa0M7QUFBQTs7QUFBQSx3SUFDMUJELFFBRDBCLEVBQ2hCQyxVQURnQjs7QUFHaEMsa0JBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFIZ0M7QUFJakM7Ozs7NENBRWU7QUFDZCxzQkFBTUQsYUFBYSxLQUFLRSxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLGlCQUFpQk4sTUFBTUcsVUFBTixDQUR2QjtBQUFBLHNCQUVNSSxpQ0FBaUNELGVBQWVFLG1CQUFmLEVBRnZDO0FBQUEsc0JBR01DLHdDQUF3Q0YsK0JBQStCRyxVQUEvQixFQUg5QztBQUFBLHNCQUlNTixhQUFhSyxxQ0FKbkIsQ0FEYyxDQUs2Qzs7QUFFM0QseUJBQU9MLFVBQVA7QUFDRDs7O2lEQUUyQk8sSyxFQUFPVCxRLEVBQVU7QUFDM0Msc0JBQU1DLGFBQWFRLEtBQW5CO0FBQUEsc0JBQTBCO0FBQ3BCQyxtQ0FBaUJkLGdCQUFnQmUseUJBQWhCLENBQTBDWixjQUExQyxFQUEwREMsUUFBMUQsRUFBb0VDLFVBQXBFLENBRHZCOztBQUdBLHlCQUFPUyxjQUFQO0FBQ0Q7Ozs7RUF0QjBCZCxlOztBQXlCN0JnQixPQUFPQyxPQUFQLEdBQWlCZCxjQUFqQiIsImZpbGUiOiJyZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgTm9uVGVybWluYWxOb2RlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJlcG9zaXRvcnlOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnJlcG9zaXRvcnkgPSBudWxsO1xuICB9XG5cbiAgZ2V0UmVwb3NpdG9yeSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgdGhpcmRDaGlsZE5vZGUgPSB0aGlyZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0aGlyZENoaWxkTm9kZVNpZ25pZmljYW50VG9rZW4gPSB0aGlyZENoaWxkTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgdGhpcmRDaGlsZE5vZGVTaWduaWZpY2FudFRva2VuQ29udGVudCA9IHRoaXJkQ2hpbGROb2RlU2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgcmVwb3NpdG9yeSA9IHRoaXJkQ2hpbGROb2RlU2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiByZXBvc2l0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgcmVwb3NpdG9yeU5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSZXBvc2l0b3J5Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlcG9zaXRvcnlOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVwb3NpdG9yeU5vZGU7XG4iXX0=