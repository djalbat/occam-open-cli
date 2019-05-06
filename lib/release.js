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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWxlYXNlLmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJyZXF1aXJlIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoUmVhZG1lRmlsZVBhdGgiLCJpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsInZlcnNpb25OdW1iZXIiLCJnZXRGaWxlcyIsInJlYWRtZUZpbGUiLCJmaWxlcyIsInNvbWVGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoUmVhZG1lRmlsZVBhdGgiLCJtZXRhSlNPTkZpbGUiLCJmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJlbnRyaWVzSlNPTiIsInRvSlNPTiIsImpzb24iLCJuYW1lSlNPTiIsInZlcnNpb25OdW1iZXJKU09OIiwiZnJvbUpTT04iLCJyZWxlYXNlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHNCQUFSLENBRDFCOztJQUdRRSx3QixHQUF5REQsaUIsQ0FBekRDLHdCO0lBQTBCQywwQixHQUErQkYsaUIsQ0FBL0JFLDBCOztJQUU1QkMsTztBQUNKLG1CQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsRUFBMEM7QUFBQTs7QUFDeEMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtDLGFBQVo7QUFDRDs7OytCQUVVO0FBQUUsYUFBTyxLQUFLRCxPQUFMLENBQWFFLFFBQWIsRUFBUDtBQUFpQzs7O29DQUU5QjtBQUNkLFVBQUlDLGFBQWEsSUFBakI7O0FBRUEsVUFBTUMsUUFBUSxLQUFLRixRQUFMLEVBQWQ7O0FBRUFFLFlBQU1DLFFBQU4sQ0FBZSxVQUFTQyxJQUFULEVBQWU7QUFDNUIsWUFBTUMsV0FBV0QsS0FBS0UsT0FBTCxFQUFqQjtBQUFBLFlBQ01DLHlCQUF5QmIseUJBQXlCVyxRQUF6QixDQUQvQjs7QUFHQSxZQUFJRSxzQkFBSixFQUE0QjtBQUMxQk4sdUJBQWFHLElBQWIsQ0FEMEIsQ0FDTjs7QUFFcEIsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FURDs7QUFXQSxhQUFPSCxVQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBSU8sZUFBZSxJQUFuQjs7QUFFQSxVQUFNTixRQUFRLEtBQUtGLFFBQUwsRUFBZDs7QUFFQUUsWUFBTUMsUUFBTixDQUFlLFVBQVNDLElBQVQsRUFBZTtBQUM1QixZQUFNQyxXQUFXRCxLQUFLRSxPQUFMLEVBQWpCO0FBQUEsWUFDTUcsMkJBQTJCZCwyQkFBMkJVLFFBQTNCLENBRGpDOztBQUdBLFlBQUlJLHdCQUFKLEVBQThCO0FBQzVCRCx5QkFBZUosSUFBZixDQUQ0QixDQUNOOztBQUV0QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVREOztBQVdBLGFBQU9JLFlBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUUsY0FBYyxLQUFLWixPQUFMLENBQWFhLE1BQWIsRUFBcEI7QUFBQSxVQUNNZCxPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTUMsVUFBVVksV0FGaEI7QUFBQSxVQUU4QjtBQUN4Qlgsc0JBQWdCLEtBQUtBLGFBSDNCO0FBQUEsVUFJTWEsT0FBTztBQUNMZixrQkFESztBQUVMQyx3QkFGSztBQUdMQztBQUhLLE9BSmI7O0FBVUEsYUFBT2EsSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNQyxXQUFXRCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNRixjQUFjRSxLQUFLLFNBQUwsQ0FEcEI7QUFBQSxVQUVNRSxvQkFBb0JGLEtBQUssZUFBTCxDQUYxQjtBQUFBLFVBR01mLE9BQU9nQixRQUhiO0FBQUEsVUFHd0I7QUFDbEJmLGdCQUFVUCxRQUFRd0IsUUFBUixDQUFpQkwsV0FBakIsQ0FKaEI7QUFBQSxVQUtNWCxnQkFBZ0JlLGlCQUx0QjtBQUFBLFVBSzBDO0FBQ3BDRSxnQkFBVSxJQUFJcEIsT0FBSixDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsQ0FOaEI7O0FBUUEsYUFBT2lCLE9BQVA7QUFDRDs7OzZCQUVlbkIsSSxFQUFNO0FBQ3BCLFVBQU1vQix1QkFBdUJwQixJQUE3QjtBQUFBLFVBQW1DO0FBQzdCcUIsOEJBQXdCLEdBRDlCO0FBQUEsVUFFTUMsMEJBQTBCLElBRmhDO0FBQUEsVUFHTUMscUNBQXFDLElBSDNDO0FBQUEsVUFJTXRCLFVBQVVQLFFBQVE4Qix3QkFBUixDQUFpQ0osb0JBQWpDLEVBQXVEQyxxQkFBdkQsRUFBOEVDLHVCQUE5RSxFQUF1R0Msa0NBQXZHLENBSmhCO0FBQUEsVUFLTXJCLGdCQUFnQixJQUx0QjtBQUFBLFVBSzRCO0FBQ3RCaUIsZ0JBQVUsSUFBSXBCLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLENBTmhCOztBQVFBLGFBQU9pQixPQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCM0IsT0FBakIiLCJmaWxlIjoicmVsZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0VmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldFJlYWRtZUZpbGUoKSB7XG4gICAgbGV0IHJlYWRtZUZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5zb21lRmlsZShmdW5jdGlvbihmaWxlKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgZmlsZVBhdGhSZWFkbWVGaWxlUGF0aCA9IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGlmIChmaWxlUGF0aFJlYWRtZUZpbGVQYXRoKSB7XG4gICAgICAgIHJlYWRtZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVhZG1lRmlsZTtcbiAgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBsZXQgbWV0YUpTT05GaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuc29tZUZpbGUoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHRoaXMudmVyc2lvbk51bWJlcixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lSlNPTiA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGVudHJpZXNKU09OID0ganNvbltcImVudHJpZXNcIl0sXG4gICAgICAgICAgdmVyc2lvbk51bWJlckpTT04gPSBqc29uW1widmVyc2lvbk51bWJlclwiXSxcbiAgICAgICAgICBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihlbnRyaWVzSlNPTiksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXJKU09OLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoID0gJy4nLFxuICAgICAgICAgIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzID0gdHJ1ZSxcbiAgICAgICAgICBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gdHJ1ZSxcbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHZlcnNpb25OdW1iZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcik7XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbGVhc2U7XG4iXX0=