'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    parsers = require('occam-parsers');

var File = require('../file'),
    RepositoryNode = require('../node/repository'),
    DependencyNode = require('../node/dependency'),
    nodeUtilities = require('../utilities/node'),
    tokensUtilities = require('../utilities/tokens');

var MetaJSONLexer = lexers.MetaJSONLexer,
    MetaJSONParser = parsers.MetaJSONParser,
    findNode = nodeUtilities.findNode,
    findNodes = nodeUtilities.findNodes,
    significantTokensFromTokens = tokensUtilities.significantTokensFromTokens;


var mappings = {
  'repository': RepositoryNode,
  'dependency': DependencyNode
},
    metaJSONLexer = MetaJSONLexer.fromNothing(),
    metaJSONParser = MetaJSONParser.fromMappings(mappings);

var MetaJSONFile = function (_File) {
  _inherits(MetaJSONFile, _File);

  function MetaJSONFile(path, content, repositoryNode, dependencyNodes) {
    _classCallCheck(this, MetaJSONFile);

    var _this = _possibleConstructorReturn(this, (MetaJSONFile.__proto__ || Object.getPrototypeOf(MetaJSONFile)).call(this, path, content));

    _this.repositoryNode = repositoryNode;
    _this.dependencyNodes = dependencyNodes;
    return _this;
  }

  _createClass(MetaJSONFile, [{
    key: 'getRepository',
    value: function getRepository() {
      return this.repositoryNode.getRepository();
    }
  }, {
    key: 'getDependencies',
    value: function getDependencies() {
      var dependencies = this.dependencyNodes.map(function (dependencyNode) {
        var dependency = dependencyNode.getDependency();

        return dependency;
      });

      return dependencies;
    }
  }, {
    key: 'checkRepositoryExists',
    value: function checkRepositoryExists() {
      var repositoryNodeExists = this.repositoryNode !== null,
          repositoryExists = repositoryNodeExists; ///

      return repositoryExists;
    }
  }], [{
    key: 'fromFile',
    value: function fromFile(file) {
      var path = file.getPath(),
          content = file.getContent(),
          tokens = metaJSONLexer.tokensFromContent(content),
          significantTokens = significantTokensFromTokens(tokens),
          node = metaJSONParser.nodeFromSignificantTokens(significantTokens),
          repositoryNode = findNode(node, RepositoryNode),
          dependencyNodes = findNodes(node, DependencyNode),
          metaJSONFile = new MetaJSONFile(path, content, repositoryNode, dependencyNodes);

      return metaJSONFile;
    }
  }]);

  return MetaJSONFile;
}(File);

module.exports = MetaJSONFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9maWxlL21ldGFKU09OLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJwYXJzZXJzIiwiRmlsZSIsIlJlcG9zaXRvcnlOb2RlIiwiRGVwZW5kZW5jeU5vZGUiLCJub2RlVXRpbGl0aWVzIiwidG9rZW5zVXRpbGl0aWVzIiwiTWV0YUpTT05MZXhlciIsIk1ldGFKU09OUGFyc2VyIiwiZmluZE5vZGUiLCJmaW5kTm9kZXMiLCJzaWduaWZpY2FudFRva2Vuc0Zyb21Ub2tlbnMiLCJtYXBwaW5ncyIsIm1ldGFKU09OTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1ldGFKU09OUGFyc2VyIiwiZnJvbU1hcHBpbmdzIiwiTWV0YUpTT05GaWxlIiwicGF0aCIsImNvbnRlbnQiLCJyZXBvc2l0b3J5Tm9kZSIsImRlcGVuZGVuY3lOb2RlcyIsImdldFJlcG9zaXRvcnkiLCJkZXBlbmRlbmNpZXMiLCJtYXAiLCJkZXBlbmRlbmN5Tm9kZSIsImRlcGVuZGVuY3kiLCJnZXREZXBlbmRlbmN5IiwicmVwb3NpdG9yeU5vZGVFeGlzdHMiLCJyZXBvc2l0b3J5RXhpc3RzIiwiZmlsZSIsImdldFBhdGgiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VucyIsIm5vZGUiLCJub2RlRnJvbVNpZ25pZmljYW50VG9rZW5zIiwibWV0YUpTT05GaWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjtBQUFBLElBQ01DLFVBQVVELFFBQVEsZUFBUixDQURoQjs7QUFHQSxJQUFNRSxPQUFPRixRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01HLGlCQUFpQkgsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1JLGlCQUFpQkosUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01LLGdCQUFnQkwsUUFBUSxtQkFBUixDQUh0QjtBQUFBLElBSU1NLGtCQUFrQk4sUUFBUSxxQkFBUixDQUp4Qjs7QUFNTSxJQUFFTyxhQUFGLEdBQW9CUixNQUFwQixDQUFFUSxhQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQlAsT0FEckIsQ0FDRU8sY0FERjtBQUFBLElBRUVDLFFBRkYsR0FFMEJKLGFBRjFCLENBRUVJLFFBRkY7QUFBQSxJQUVZQyxTQUZaLEdBRTBCTCxhQUYxQixDQUVZSyxTQUZaO0FBQUEsSUFHRUMsMkJBSEYsR0FHa0NMLGVBSGxDLENBR0VLLDJCQUhGOzs7QUFLTixJQUFNQyxXQUFXO0FBQ1QsZ0JBQWNULGNBREw7QUFFVCxnQkFBY0M7QUFGTCxDQUFqQjtBQUFBLElBSU1TLGdCQUFnQk4sY0FBY08sV0FBZCxFQUp0QjtBQUFBLElBS01DLGlCQUFpQlAsZUFBZVEsWUFBZixDQUE0QkosUUFBNUIsQ0FMdkI7O0lBT01LLFk7OztBQUNKLHdCQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsY0FBM0IsRUFBMkNDLGVBQTNDLEVBQTREO0FBQUE7O0FBQUEsNEhBQ3BESCxJQURvRCxFQUM5Q0MsT0FEOEM7O0FBRzFELFVBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFKMEQ7QUFLM0Q7Ozs7b0NBRWU7QUFBRSxhQUFPLEtBQUtELGNBQUwsQ0FBb0JFLGFBQXBCLEVBQVA7QUFBNkM7OztzQ0FFN0M7QUFDaEIsVUFBTUMsZUFBZSxLQUFLRixlQUFMLENBQXFCRyxHQUFyQixDQUF5QixVQUFTQyxjQUFULEVBQXlCO0FBQ3JFLFlBQU1DLGFBQWFELGVBQWVFLGFBQWYsRUFBbkI7O0FBRUEsZUFBT0QsVUFBUDtBQUNELE9BSm9CLENBQXJCOztBQU1BLGFBQU9ILFlBQVA7QUFDRDs7OzRDQUV1QjtBQUN0QixVQUFNSyx1QkFBd0IsS0FBS1IsY0FBTCxLQUF3QixJQUF0RDtBQUFBLFVBQ01TLG1CQUFtQkQsb0JBRHpCLENBRHNCLENBRXdCOztBQUU5QyxhQUFPQyxnQkFBUDtBQUNEOzs7NkJBRWVDLEksRUFBTTtBQUNwQixVQUFNWixPQUFPWSxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNWixVQUFVVyxLQUFLRSxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsU0FBU3BCLGNBQWNxQixpQkFBZCxDQUFnQ2YsT0FBaEMsQ0FGZjtBQUFBLFVBR01nQixvQkFBb0J4Qiw0QkFBNEJzQixNQUE1QixDQUgxQjtBQUFBLFVBSU1HLE9BQU9yQixlQUFlc0IseUJBQWYsQ0FBeUNGLGlCQUF6QyxDQUpiO0FBQUEsVUFLTWYsaUJBQWlCWCxTQUFTMkIsSUFBVCxFQUFlakMsY0FBZixDQUx2QjtBQUFBLFVBTU1rQixrQkFBa0JYLFVBQVUwQixJQUFWLEVBQWdCaEMsY0FBaEIsQ0FOeEI7QUFBQSxVQU9Na0MsZUFBZSxJQUFJckIsWUFBSixDQUFpQkMsSUFBakIsRUFBdUJDLE9BQXZCLEVBQWdDQyxjQUFoQyxFQUFnREMsZUFBaEQsQ0FQckI7O0FBU0EsYUFBT2lCLFlBQVA7QUFDRDs7OztFQXRDd0JwQyxJOztBQXlDM0JxQyxPQUFPQyxPQUFQLEdBQWlCdkIsWUFBakIiLCJmaWxlIjoibWV0YUpTT04uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4uL2ZpbGUnKSxcbiAgICAgIFJlcG9zaXRvcnlOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZXBvc2l0b3J5JyksXG4gICAgICBEZXBlbmRlbmN5Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZGVwZW5kZW5jeScpLFxuICAgICAgbm9kZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ub2RlJyksXG4gICAgICB0b2tlbnNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdG9rZW5zJyk7XG5cbmNvbnN0IHsgTWV0YUpTT05MZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBNZXRhSlNPTlBhcnNlciB9ID0gcGFyc2VycyxcbiAgICAgIHsgZmluZE5vZGUsIGZpbmROb2RlcyB9ID0gbm9kZVV0aWxpdGllcyxcbiAgICAgIHsgc2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zIH0gPSB0b2tlbnNVdGlsaXRpZXM7XG5cbmNvbnN0IG1hcHBpbmdzID0ge1xuICAgICAgICAncmVwb3NpdG9yeSc6IFJlcG9zaXRvcnlOb2RlLFxuICAgICAgICAnZGVwZW5kZW5jeSc6IERlcGVuZGVuY3lOb2RlXG4gICAgICB9LFxuICAgICAgbWV0YUpTT05MZXhlciA9IE1ldGFKU09OTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1ldGFKU09OUGFyc2VyID0gTWV0YUpTT05QYXJzZXIuZnJvbU1hcHBpbmdzKG1hcHBpbmdzKTtcblxuY2xhc3MgTWV0YUpTT05GaWxlIGV4dGVuZHMgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQsIHJlcG9zaXRvcnlOb2RlLCBkZXBlbmRlbmN5Tm9kZXMpIHtcbiAgICBzdXBlcihwYXRoLCBjb250ZW50KTtcblxuICAgIHRoaXMucmVwb3NpdG9yeU5vZGUgPSByZXBvc2l0b3J5Tm9kZTtcbiAgICB0aGlzLmRlcGVuZGVuY3lOb2RlcyA9IGRlcGVuZGVuY3lOb2RlcztcbiAgfVxuXG4gIGdldFJlcG9zaXRvcnkoKSB7IHJldHVybiB0aGlzLnJlcG9zaXRvcnlOb2RlLmdldFJlcG9zaXRvcnkoKTsgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSB0aGlzLmRlcGVuZGVuY3lOb2Rlcy5tYXAoZnVuY3Rpb24oZGVwZW5kZW5jeU5vZGUpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5Tm9kZS5nZXREZXBlbmRlbmN5KCk7XG5cbiAgICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgfVxuXG4gIGNoZWNrUmVwb3NpdG9yeUV4aXN0cygpIHtcbiAgICBjb25zdCByZXBvc2l0b3J5Tm9kZUV4aXN0cyA9ICh0aGlzLnJlcG9zaXRvcnlOb2RlICE9PSBudWxsKSxcbiAgICAgICAgICByZXBvc2l0b3J5RXhpc3RzID0gcmVwb3NpdG9yeU5vZGVFeGlzdHM7Ly8vXG5cbiAgICByZXR1cm4gcmVwb3NpdG9yeUV4aXN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlKSB7XG4gICAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtZXRhSlNPTkxleGVyLnRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgbm9kZSA9IG1ldGFKU09OUGFyc2VyLm5vZGVGcm9tU2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMpLFxuICAgICAgICAgIHJlcG9zaXRvcnlOb2RlID0gZmluZE5vZGUobm9kZSwgUmVwb3NpdG9yeU5vZGUpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOb2RlcyA9IGZpbmROb2Rlcyhub2RlLCBEZXBlbmRlbmN5Tm9kZSksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gbmV3IE1ldGFKU09ORmlsZShwYXRoLCBjb250ZW50LCByZXBvc2l0b3J5Tm9kZSwgZGVwZW5kZW5jeU5vZGVzKTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZXRhSlNPTkZpbGU7XG4iXX0=