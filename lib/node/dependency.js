'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var NonTerminalNode = parsers.NonTerminalNode,
    arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    second = arrayUtilities.second;

var DependencyNode = function (_NonTerminalNode) {
      _inherits(DependencyNode, _NonTerminalNode);

      function DependencyNode(ruleName, childNodes) {
            _classCallCheck(this, DependencyNode);

            var _this = _possibleConstructorReturn(this, (DependencyNode.__proto__ || Object.getPrototypeOf(DependencyNode)).call(this, ruleName, childNodes));

            _this.dependency = null;
            return _this;
      }

      _createClass(DependencyNode, [{
            key: 'getDependency',
            value: function getDependency() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = first(childNodes),
                      firstChildNodeSignificantToken = firstChildNode.getSignificantToken(),
                      firstChildNodeSignificantTokenContent = firstChildNodeSignificantToken.getContent(),
                      matches = firstChildNodeSignificantTokenContent.match(/^"([^"]+)"$/),
                      secondMatch = second(matches),
                      dependency = secondMatch; ///

                  return dependency;
            }
      }], [{
            key: 'fromNodesAndRuleName',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL2RlcGVuZGVuY3kuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJOb25UZXJtaW5hbE5vZGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiRGVwZW5kZW5jeU5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJkZXBlbmRlbmN5IiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGVTaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0Q2hpbGROb2RlU2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJub2RlcyIsImRlcGVuZGVuY3lOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdNLElBQUVFLGVBQUYsR0FBc0JILE9BQXRCLENBQUVHLGVBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRixTQURyQixDQUNFRSxjQURGO0FBQUEsSUFFRUMsS0FGRixHQUVvQkQsY0FGcEIsQ0FFRUMsS0FGRjtBQUFBLElBRVNDLE1BRlQsR0FFb0JGLGNBRnBCLENBRVNFLE1BRlQ7O0lBSUFDLGM7OztBQUNKLDhCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQztBQUFBOztBQUFBLHdJQUMxQkQsUUFEMEIsRUFDaEJDLFVBRGdCOztBQUdoQyxrQkFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUhnQztBQUlqQzs7Ozs0Q0FFZTtBQUNkLHNCQUFNRCxhQUFhLEtBQUtFLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsaUJBQWlCUCxNQUFNSSxVQUFOLENBRHZCO0FBQUEsc0JBRU1JLGlDQUFpQ0QsZUFBZUUsbUJBQWYsRUFGdkM7QUFBQSxzQkFHTUMsd0NBQXdDRiwrQkFBK0JHLFVBQS9CLEVBSDlDO0FBQUEsc0JBSU1DLFVBQVVGLHNDQUFzQ0csS0FBdEMsQ0FBNEMsYUFBNUMsQ0FKaEI7QUFBQSxzQkFLTUMsY0FBY2IsT0FBT1csT0FBUCxDQUxwQjtBQUFBLHNCQU1NUCxhQUFhUyxXQU5uQixDQURjLENBT2tCOztBQUVoQyx5QkFBT1QsVUFBUDtBQUNEOzs7aURBRTJCVSxLLEVBQU9aLFEsRUFBVTtBQUMzQyxzQkFBTUMsYUFBYVcsS0FBbkI7QUFBQSxzQkFBMEI7QUFDcEJDLG1DQUFpQmxCLGdCQUFnQm1CLHlCQUFoQixDQUEwQ2YsY0FBMUMsRUFBMERDLFFBQTFELEVBQW9FQyxVQUFwRSxDQUR2Qjs7QUFHQSx5QkFBT1ksY0FBUDtBQUNEOzs7O0VBeEIwQmxCLGU7O0FBMkI3Qm9CLE9BQU9DLE9BQVAsR0FBaUJqQixjQUFqQiIsImZpbGUiOiJkZXBlbmRlbmN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgTm9uVGVybWluYWxOb2RlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgRGVwZW5kZW5jeU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcykge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHRoaXMuZGVwZW5kZW5jeSA9IG51bGw7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlU2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZVNpZ25pZmljYW50VG9rZW5Db250ZW50ID0gZmlyc3RDaGlsZE5vZGVTaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gZmlyc3RDaGlsZE5vZGVTaWduaWZpY2FudFRva2VuQ29udGVudC5tYXRjaCgvXlwiKFteXCJdKylcIiQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5ID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBkZXBlbmRlbmN5Tm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERlcGVuZGVuY3lOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeU5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZXBlbmRlbmN5Tm9kZTtcbiJdfQ==