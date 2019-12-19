'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entries = require('./entries'),
    filePathUtilities = require('./utilities/filePath');

var isFilePathReadmeFilePath = filePathUtilities.isFilePathReadmeFilePath,
    isFilePathMetaJSONFilePath = filePathUtilities.isFilePathMetaJSONFilePath;

var Release = function () {
  function Release(name, entries, versionNumber) {
    _classCallCheck(this, Release);

    this.name = name;
    this.entries = entries;
    this.versionNumber = versionNumber;
  }

  _createClass(Release, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getEntries',
    value: function getEntries() {
      return this.entries;
    }
  }, {
    key: 'getVersionNumber',
    value: function getVersionNumber() {
      return this.versionNumber;
    }
  }, {
    key: 'getFiles',
    value: function getFiles() {
      return this.entries.getFiles();
    }
  }, {
    key: 'getReadmeFile',
    value: function getReadmeFile() {
      var readmeFile = null;

      var files = this.getFiles();

      files.someFile(function (file) {
        var filePath = file.getPath(),
            filePathReadmeFilePath = isFilePathReadmeFilePath(filePath);

        if (filePathReadmeFilePath) {
          readmeFile = file; ///

          return true;
        }
      });

      return readmeFile;
    }
  }, {
    key: 'getMetaJSONFile',
    value: function getMetaJSONFile() {
      var metaJSONFile = null;

      var files = this.getFiles();

      files.someFile(function (file) {
        var filePath = file.getPath(),
            filePathMetaJSONFilePath = isFilePathMetaJSONFilePath(filePath);

        if (filePathMetaJSONFilePath) {
          metaJSONFile = file; ///

          return true;
        }
      });

      return metaJSONFile;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var entriesJSON = this.entries.toJSON(),
          name = this.name,
          entries = entriesJSON,
          ///
      versionNumber = this.versionNumber,
          json = {
        name: name,
        entries: entries,
        versionNumber: versionNumber
      };

      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var nameJSON = json["name"],
          entriesJSON = json["entries"],
          versionNumberJSON = json["versionNumber"],
          name = nameJSON,
          ///
      entries = Entries.fromJSON(entriesJSON),
          versionNumber = versionNumberJSON,
          ///
      release = new Release(name, entries, versionNumber);

      return release;
    }
  }, {
    key: 'fromName',
    value: function fromName(name) {
      var topmostDirectoryName = name,
          ///
      projectsDirectoryPath = '.',
          loadOnlyRecognisedFiles = true,
          doNotLoadHiddenFilesAndDirectories = true,
          entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          versionNumber = null,
          ///
      release = new Release(name, entries, versionNumber);

      return release;
    }
  }]);

  return Release;
}();

module.exports = Release;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWxlYXNlLmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJyZXF1aXJlIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoUmVhZG1lRmlsZVBhdGgiLCJpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsInZlcnNpb25OdW1iZXIiLCJnZXRGaWxlcyIsInJlYWRtZUZpbGUiLCJmaWxlcyIsInNvbWVGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoUmVhZG1lRmlsZVBhdGgiLCJtZXRhSlNPTkZpbGUiLCJmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJlbnRyaWVzSlNPTiIsInRvSlNPTiIsImpzb24iLCJuYW1lSlNPTiIsInZlcnNpb25OdW1iZXJKU09OIiwiZnJvbUpTT04iLCJyZWxlYXNlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHNCQUFSLENBRDFCOztJQUdRRSx3QixHQUF5REQsaUIsQ0FBekRDLHdCO0lBQTBCQywwQixHQUErQkYsaUIsQ0FBL0JFLDBCOztJQUU1QkMsTztBQUNKLG1CQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsRUFBMEM7QUFBQTs7QUFDeEMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtDLGFBQVo7QUFDRDs7OytCQUVVO0FBQUUsYUFBTyxLQUFLRCxPQUFMLENBQWFFLFFBQWIsRUFBUDtBQUFpQzs7O29DQUU5QjtBQUNkLFVBQUlDLGFBQWEsSUFBakI7O0FBRUEsVUFBTUMsUUFBUSxLQUFLRixRQUFMLEVBQWQ7O0FBRUFFLFlBQU1DLFFBQU4sQ0FBZSxVQUFDQyxJQUFELEVBQVU7QUFDdkIsWUFBTUMsV0FBV0QsS0FBS0UsT0FBTCxFQUFqQjtBQUFBLFlBQ01DLHlCQUF5QmIseUJBQXlCVyxRQUF6QixDQUQvQjs7QUFHQSxZQUFJRSxzQkFBSixFQUE0QjtBQUMxQk4sdUJBQWFHLElBQWIsQ0FEMEIsQ0FDTjs7QUFFcEIsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FURDs7QUFXQSxhQUFPSCxVQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBSU8sZUFBZSxJQUFuQjs7QUFFQSxVQUFNTixRQUFRLEtBQUtGLFFBQUwsRUFBZDs7QUFFQUUsWUFBTUMsUUFBTixDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUN2QixZQUFNQyxXQUFXRCxLQUFLRSxPQUFMLEVBQWpCO0FBQUEsWUFDTUcsMkJBQTJCZCwyQkFBMkJVLFFBQTNCLENBRGpDOztBQUdBLFlBQUlJLHdCQUFKLEVBQThCO0FBQzVCRCx5QkFBZUosSUFBZixDQUQ0QixDQUNOOztBQUV0QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVREOztBQVdBLGFBQU9JLFlBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUUsY0FBYyxLQUFLWixPQUFMLENBQWFhLE1BQWIsRUFBcEI7QUFBQSxVQUNNZCxPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTUMsVUFBVVksV0FGaEI7QUFBQSxVQUU4QjtBQUN4Qlgsc0JBQWdCLEtBQUtBLGFBSDNCO0FBQUEsVUFJTWEsT0FBTztBQUNMZixrQkFESztBQUVMQyx3QkFGSztBQUdMQztBQUhLLE9BSmI7O0FBVUEsYUFBT2EsSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNQyxXQUFXRCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNRixjQUFjRSxLQUFLLFNBQUwsQ0FEcEI7QUFBQSxVQUVNRSxvQkFBb0JGLEtBQUssZUFBTCxDQUYxQjtBQUFBLFVBR01mLE9BQU9nQixRQUhiO0FBQUEsVUFHd0I7QUFDbEJmLGdCQUFVUCxRQUFRd0IsUUFBUixDQUFpQkwsV0FBakIsQ0FKaEI7QUFBQSxVQUtNWCxnQkFBZ0JlLGlCQUx0QjtBQUFBLFVBSzBDO0FBQ3BDRSxnQkFBVSxJQUFJcEIsT0FBSixDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsQ0FOaEI7O0FBUUEsYUFBT2lCLE9BQVA7QUFDRDs7OzZCQUVlbkIsSSxFQUFNO0FBQ3BCLFVBQU1vQix1QkFBdUJwQixJQUE3QjtBQUFBLFVBQW1DO0FBQzdCcUIsOEJBQXdCLEdBRDlCO0FBQUEsVUFFTUMsMEJBQTBCLElBRmhDO0FBQUEsVUFHTUMscUNBQXFDLElBSDNDO0FBQUEsVUFJTXRCLFVBQVVQLFFBQVE4Qix3QkFBUixDQUFpQ0osb0JBQWpDLEVBQXVEQyxxQkFBdkQsRUFBOEVDLHVCQUE5RSxFQUF1R0Msa0NBQXZHLENBSmhCO0FBQUEsVUFLTXJCLGdCQUFnQixJQUx0QjtBQUFBLFVBSzRCO0FBQ3RCaUIsZ0JBQVUsSUFBSXBCLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLENBTmhCOztBQVFBLGFBQU9pQixPQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCM0IsT0FBakIiLCJmaWxlIjoicmVsZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0VmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldFJlYWRtZUZpbGUoKSB7XG4gICAgbGV0IHJlYWRtZUZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5zb21lRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgIGZpbGVQYXRoUmVhZG1lRmlsZVBhdGggPSBpc0ZpbGVQYXRoUmVhZG1lRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZVBhdGhSZWFkbWVGaWxlUGF0aCkge1xuICAgICAgICByZWFkbWVGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlYWRtZUZpbGU7XG4gIH1cblxuICBnZXRNZXRhSlNPTkZpbGUoKSB7XG4gICAgbGV0IG1ldGFKU09ORmlsZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKTtcblxuICAgIGZpbGVzLnNvbWVGaWxlKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKSB7XG4gICAgICAgIG1ldGFKU09ORmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICB2ZXJzaW9uTnVtYmVyID0gdGhpcy52ZXJzaW9uTnVtYmVyLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW50cmllcyxcbiAgICAgICAgICAgIHZlcnNpb25OdW1iZXJcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWVKU09OID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXSxcbiAgICAgICAgICB2ZXJzaW9uTnVtYmVySlNPTiA9IGpzb25bXCJ2ZXJzaW9uTnVtYmVyXCJdLFxuICAgICAgICAgIG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGVudHJpZXNKU09OKSxcbiAgICAgICAgICB2ZXJzaW9uTnVtYmVyID0gdmVyc2lvbk51bWJlckpTT04sICAvLy9cbiAgICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcik7XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICBwcm9qZWN0c0RpcmVjdG9yeVBhdGggPSAnLicsXG4gICAgICAgICAgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMgPSB0cnVlLFxuICAgICAgICAgIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSB0cnVlLFxuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVsZWFzZTtcbiJdfQ==