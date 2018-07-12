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
    findNodeByClass = nodeUtilities.findNodeByClass,
    findNodesByClass = nodeUtilities.findNodesByClass,
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
          repositoryNode = findNodeByClass(node, RepositoryNode),
          dependencyNodes = findNodesByClass(node, DependencyNode),
          metaJSONFile = new MetaJSONFile(path, content, repositoryNode, dependencyNodes);

      return metaJSONFile;
    }
  }]);

  return MetaJSONFile;
}(File);

module.exports = MetaJSONFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9maWxlL21ldGFKU09OLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJwYXJzZXJzIiwiRmlsZSIsIlJlcG9zaXRvcnlOb2RlIiwiRGVwZW5kZW5jeU5vZGUiLCJub2RlVXRpbGl0aWVzIiwidG9rZW5zVXRpbGl0aWVzIiwiTWV0YUpTT05MZXhlciIsIk1ldGFKU09OUGFyc2VyIiwiZmluZE5vZGVCeUNsYXNzIiwiZmluZE5vZGVzQnlDbGFzcyIsInNpZ25pZmljYW50VG9rZW5zRnJvbVRva2VucyIsIm1hcHBpbmdzIiwibWV0YUpTT05MZXhlciIsImZyb21Ob3RoaW5nIiwibWV0YUpTT05QYXJzZXIiLCJmcm9tTWFwcGluZ3MiLCJNZXRhSlNPTkZpbGUiLCJwYXRoIiwiY29udGVudCIsInJlcG9zaXRvcnlOb2RlIiwiZGVwZW5kZW5jeU5vZGVzIiwiZ2V0UmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsIm1hcCIsImRlcGVuZGVuY3lOb2RlIiwiZGVwZW5kZW5jeSIsImdldERlcGVuZGVuY3kiLCJyZXBvc2l0b3J5Tm9kZUV4aXN0cyIsInJlcG9zaXRvcnlFeGlzdHMiLCJmaWxlIiwiZ2V0UGF0aCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsInNpZ25pZmljYW50VG9rZW5zIiwibm9kZSIsIm5vZGVGcm9tU2lnbmlmaWNhbnRUb2tlbnMiLCJtZXRhSlNPTkZpbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxlQUFSLENBRGhCOztBQUdBLElBQU1FLE9BQU9GLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUcsaUJBQWlCSCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUksaUJBQWlCSixRQUFRLG9CQUFSLENBRnZCO0FBQUEsSUFHTUssZ0JBQWdCTCxRQUFRLG1CQUFSLENBSHRCO0FBQUEsSUFJTU0sa0JBQWtCTixRQUFRLHFCQUFSLENBSnhCOztBQU1NLElBQUVPLGFBQUYsR0FBb0JSLE1BQXBCLENBQUVRLGFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCUCxPQURyQixDQUNFTyxjQURGO0FBQUEsSUFFRUMsZUFGRixHQUV3Q0osYUFGeEMsQ0FFRUksZUFGRjtBQUFBLElBRW1CQyxnQkFGbkIsR0FFd0NMLGFBRnhDLENBRW1CSyxnQkFGbkI7QUFBQSxJQUdFQywyQkFIRixHQUdrQ0wsZUFIbEMsQ0FHRUssMkJBSEY7OztBQUtOLElBQU1DLFdBQVc7QUFDVCxnQkFBY1QsY0FETDtBQUVULGdCQUFjQztBQUZMLENBQWpCO0FBQUEsSUFJTVMsZ0JBQWdCTixjQUFjTyxXQUFkLEVBSnRCO0FBQUEsSUFLTUMsaUJBQWlCUCxlQUFlUSxZQUFmLENBQTRCSixRQUE1QixDQUx2Qjs7SUFPTUssWTs7O0FBQ0osd0JBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxjQUEzQixFQUEyQ0MsZUFBM0MsRUFBNEQ7QUFBQTs7QUFBQSw0SEFDcERILElBRG9ELEVBQzlDQyxPQUQ4Qzs7QUFHMUQsVUFBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUowRDtBQUszRDs7OztvQ0FFZTtBQUFFLGFBQU8sS0FBS0QsY0FBTCxDQUFvQkUsYUFBcEIsRUFBUDtBQUE2Qzs7O3NDQUU3QztBQUNoQixVQUFNQyxlQUFlLEtBQUtGLGVBQUwsQ0FBcUJHLEdBQXJCLENBQXlCLFVBQVNDLGNBQVQsRUFBeUI7QUFDckUsWUFBTUMsYUFBYUQsZUFBZUUsYUFBZixFQUFuQjs7QUFFQSxlQUFPRCxVQUFQO0FBQ0QsT0FKb0IsQ0FBckI7O0FBTUEsYUFBT0gsWUFBUDtBQUNEOzs7NENBRXVCO0FBQ3RCLFVBQU1LLHVCQUF3QixLQUFLUixjQUFMLEtBQXdCLElBQXREO0FBQUEsVUFDTVMsbUJBQW1CRCxvQkFEekIsQ0FEc0IsQ0FFd0I7O0FBRTlDLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs2QkFFZUMsSSxFQUFNO0FBQ3BCLFVBQU1aLE9BQU9ZLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01aLFVBQVVXLEtBQUtFLFVBQUwsRUFEaEI7QUFBQSxVQUVNQyxTQUFTcEIsY0FBY3FCLGlCQUFkLENBQWdDZixPQUFoQyxDQUZmO0FBQUEsVUFHTWdCLG9CQUFvQnhCLDRCQUE0QnNCLE1BQTVCLENBSDFCO0FBQUEsVUFJTUcsT0FBT3JCLGVBQWVzQix5QkFBZixDQUF5Q0YsaUJBQXpDLENBSmI7QUFBQSxVQUtNZixpQkFBaUJYLGdCQUFnQjJCLElBQWhCLEVBQXNCakMsY0FBdEIsQ0FMdkI7QUFBQSxVQU1Na0Isa0JBQWtCWCxpQkFBaUIwQixJQUFqQixFQUF1QmhDLGNBQXZCLENBTnhCO0FBQUEsVUFPTWtDLGVBQWUsSUFBSXJCLFlBQUosQ0FBaUJDLElBQWpCLEVBQXVCQyxPQUF2QixFQUFnQ0MsY0FBaEMsRUFBZ0RDLGVBQWhELENBUHJCOztBQVNBLGFBQU9pQixZQUFQO0FBQ0Q7Ozs7RUF0Q3dCcEMsSTs7QUF5QzNCcUMsT0FBT0MsT0FBUCxHQUFpQnZCLFlBQWpCIiwiZmlsZSI6Im1ldGFKU09OLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuLi9maWxlJyksXG4gICAgICBSZXBvc2l0b3J5Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcmVwb3NpdG9yeScpLFxuICAgICAgRGVwZW5kZW5jeU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2RlcGVuZGVuY3knKSxcbiAgICAgIG5vZGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbm9kZScpLFxuICAgICAgdG9rZW5zVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3Rva2VucycpO1xuXG5jb25zdCB7IE1ldGFKU09OTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgTWV0YUpTT05QYXJzZXIgfSA9IHBhcnNlcnMsXG4gICAgICB7IGZpbmROb2RlQnlDbGFzcywgZmluZE5vZGVzQnlDbGFzcyB9ID0gbm9kZVV0aWxpdGllcyxcbiAgICAgIHsgc2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zIH0gPSB0b2tlbnNVdGlsaXRpZXM7XG5cbmNvbnN0IG1hcHBpbmdzID0ge1xuICAgICAgICAncmVwb3NpdG9yeSc6IFJlcG9zaXRvcnlOb2RlLFxuICAgICAgICAnZGVwZW5kZW5jeSc6IERlcGVuZGVuY3lOb2RlXG4gICAgICB9LFxuICAgICAgbWV0YUpTT05MZXhlciA9IE1ldGFKU09OTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1ldGFKU09OUGFyc2VyID0gTWV0YUpTT05QYXJzZXIuZnJvbU1hcHBpbmdzKG1hcHBpbmdzKTtcblxuY2xhc3MgTWV0YUpTT05GaWxlIGV4dGVuZHMgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQsIHJlcG9zaXRvcnlOb2RlLCBkZXBlbmRlbmN5Tm9kZXMpIHtcbiAgICBzdXBlcihwYXRoLCBjb250ZW50KTtcblxuICAgIHRoaXMucmVwb3NpdG9yeU5vZGUgPSByZXBvc2l0b3J5Tm9kZTtcbiAgICB0aGlzLmRlcGVuZGVuY3lOb2RlcyA9IGRlcGVuZGVuY3lOb2RlcztcbiAgfVxuXG4gIGdldFJlcG9zaXRvcnkoKSB7IHJldHVybiB0aGlzLnJlcG9zaXRvcnlOb2RlLmdldFJlcG9zaXRvcnkoKTsgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSB0aGlzLmRlcGVuZGVuY3lOb2Rlcy5tYXAoZnVuY3Rpb24oZGVwZW5kZW5jeU5vZGUpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5Tm9kZS5nZXREZXBlbmRlbmN5KCk7XG5cbiAgICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgfVxuXG4gIGNoZWNrUmVwb3NpdG9yeUV4aXN0cygpIHtcbiAgICBjb25zdCByZXBvc2l0b3J5Tm9kZUV4aXN0cyA9ICh0aGlzLnJlcG9zaXRvcnlOb2RlICE9PSBudWxsKSxcbiAgICAgICAgICByZXBvc2l0b3J5RXhpc3RzID0gcmVwb3NpdG9yeU5vZGVFeGlzdHM7Ly8vXG5cbiAgICByZXR1cm4gcmVwb3NpdG9yeUV4aXN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlKSB7XG4gICAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtZXRhSlNPTkxleGVyLnRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgbm9kZSA9IG1ldGFKU09OUGFyc2VyLm5vZGVGcm9tU2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMpLFxuICAgICAgICAgIHJlcG9zaXRvcnlOb2RlID0gZmluZE5vZGVCeUNsYXNzKG5vZGUsIFJlcG9zaXRvcnlOb2RlKSxcbiAgICAgICAgICBkZXBlbmRlbmN5Tm9kZXMgPSBmaW5kTm9kZXNCeUNsYXNzKG5vZGUsIERlcGVuZGVuY3lOb2RlKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBuZXcgTWV0YUpTT05GaWxlKHBhdGgsIGNvbnRlbnQsIHJlcG9zaXRvcnlOb2RlLCBkZXBlbmRlbmN5Tm9kZXMpO1xuXG4gICAgcmV0dXJuIG1ldGFKU09ORmlsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGFKU09ORmlsZTtcbiJdfQ==