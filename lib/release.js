"use strict";

var _entries = _interopRequireDefault(require("./entries"));

var _filePath = require("./utilities/filePath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Release = /*#__PURE__*/function () {
  function Release(name, entries, versionNumber) {
    _classCallCheck(this, Release);

    this.name = name;
    this.entries = entries;
    this.versionNumber = versionNumber;
  }

  _createClass(Release, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getEntries",
    value: function getEntries() {
      return this.entries;
    }
  }, {
    key: "getVersionNumber",
    value: function getVersionNumber() {
      return this.versionNumber;
    }
  }, {
    key: "getFiles",
    value: function getFiles() {
      return this.entries.getFiles();
    }
  }, {
    key: "getReadmeFile",
    value: function getReadmeFile() {
      var readmeFile = null;
      var files = this.getFiles();
      files.someFile(function (file) {
        var filePath = file.getPath(),
            filePathReadmeFilePath = (0, _filePath.isFilePathReadmeFilePath)(filePath);

        if (filePathReadmeFilePath) {
          readmeFile = file; ///

          return true;
        }
      });
      return readmeFile;
    }
  }, {
    key: "getMetaJSONFile",
    value: function getMetaJSONFile() {
      var metaJSONFile = null;
      var files = this.getFiles();
      files.someFile(function (file) {
        var filePath = file.getPath(),
            filePathMetaJSONFilePath = (0, _filePath.isFilePathMetaJSONFilePath)(filePath);

        if (filePathMetaJSONFilePath) {
          metaJSONFile = file; ///

          return true;
        }
      });
      return metaJSONFile;
    }
  }, {
    key: "toJSON",
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
    key: "fromJSON",
    value: function fromJSON(json) {
      var nameJSON = json["name"],
          entriesJSON = json["entries"],
          versionNumberJSON = json["versionNumber"],
          name = nameJSON,
          ///
      entries = _entries["default"].fromJSON(entriesJSON),
          versionNumber = versionNumberJSON,
          ///
      release = new Release(name, entries, versionNumber);

      return release;
    }
  }, {
    key: "fromName",
    value: function fromName(name) {
      var topmostDirectoryName = name,
          ///
      projectsDirectoryPath = ".",
          loadOnlyRecognisedFiles = true,
          doNotLoadHiddenFilesAndDirectories = true,
          entries = _entries["default"].fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          versionNumber = null,
          ///
      release = new Release(name, entries, versionNumber);

      return release;
    }
  }]);

  return Release;
}();

module.exports = Release;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2UuanMiXSwibmFtZXMiOlsiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwidmVyc2lvbk51bWJlciIsImdldEZpbGVzIiwicmVhZG1lRmlsZSIsImZpbGVzIiwic29tZUZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhSZWFkbWVGaWxlUGF0aCIsIm1ldGFKU09ORmlsZSIsImZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwidmVyc2lvbk51bWJlckpTT04iLCJFbnRyaWVzIiwiZnJvbUpTT04iLCJyZWxlYXNlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztJQUVNQSxPO0FBQ0osbUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxhQUEzQixFQUEwQztBQUFBOztBQUN4QyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0MsYUFBWjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtELE9BQUwsQ0FBYUUsUUFBYixFQUFQO0FBQWlDOzs7b0NBRTlCO0FBQ2QsVUFBSUMsVUFBVSxHQUFHLElBQWpCO0FBRUEsVUFBTUMsS0FBSyxHQUFHLEtBQUtGLFFBQUwsRUFBZDtBQUVBRSxNQUFBQSxLQUFLLENBQUNDLFFBQU4sQ0FBZSxVQUFDQyxJQUFELEVBQVU7QUFDdkIsWUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE9BQUwsRUFBakI7QUFBQSxZQUNNQyxzQkFBc0IsR0FBRyx3Q0FBeUJGLFFBQXpCLENBRC9COztBQUdBLFlBQUlFLHNCQUFKLEVBQTRCO0FBQzFCTixVQUFBQSxVQUFVLEdBQUdHLElBQWIsQ0FEMEIsQ0FDTjs7QUFFcEIsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FURDtBQVdBLGFBQU9ILFVBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFJTyxZQUFZLEdBQUcsSUFBbkI7QUFFQSxVQUFNTixLQUFLLEdBQUcsS0FBS0YsUUFBTCxFQUFkO0FBRUFFLE1BQUFBLEtBQUssQ0FBQ0MsUUFBTixDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUN2QixZQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxFQUFqQjtBQUFBLFlBQ01HLHdCQUF3QixHQUFHLDBDQUEyQkosUUFBM0IsQ0FEakM7O0FBR0EsWUFBSUksd0JBQUosRUFBOEI7QUFDNUJELFVBQUFBLFlBQVksR0FBR0osSUFBZixDQUQ0QixDQUNOOztBQUV0QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVREO0FBV0EsYUFBT0ksWUFBUDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNRSxXQUFXLEdBQUcsS0FBS1osT0FBTCxDQUFhYSxNQUFiLEVBQXBCO0FBQUEsVUFDTWQsSUFBSSxHQUFHLEtBQUtBLElBRGxCO0FBQUEsVUFFTUMsT0FBTyxHQUFHWSxXQUZoQjtBQUFBLFVBRThCO0FBQ3hCWCxNQUFBQSxhQUFhLEdBQUcsS0FBS0EsYUFIM0I7QUFBQSxVQUlNYSxJQUFJLEdBQUc7QUFDTGYsUUFBQUEsSUFBSSxFQUFKQSxJQURLO0FBRUxDLFFBQUFBLE9BQU8sRUFBUEEsT0FGSztBQUdMQyxRQUFBQSxhQUFhLEVBQWJBO0FBSEssT0FKYjtBQVVBLGFBQU9hLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUMsTUFBRCxDQUFyQjtBQUFBLFVBQ01GLFdBQVcsR0FBR0UsSUFBSSxDQUFDLFNBQUQsQ0FEeEI7QUFBQSxVQUVNRSxpQkFBaUIsR0FBR0YsSUFBSSxDQUFDLGVBQUQsQ0FGOUI7QUFBQSxVQUdNZixJQUFJLEdBQUdnQixRQUhiO0FBQUEsVUFHd0I7QUFDbEJmLE1BQUFBLE9BQU8sR0FBR2lCLG9CQUFRQyxRQUFSLENBQWlCTixXQUFqQixDQUpoQjtBQUFBLFVBS01YLGFBQWEsR0FBR2UsaUJBTHRCO0FBQUEsVUFLMEM7QUFDcENHLE1BQUFBLE9BQU8sR0FBRyxJQUFJckIsT0FBSixDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsQ0FOaEI7O0FBUUEsYUFBT2tCLE9BQVA7QUFDRDs7OzZCQUVlcEIsSSxFQUFNO0FBQ3BCLFVBQU1xQixvQkFBb0IsR0FBR3JCLElBQTdCO0FBQUEsVUFBbUM7QUFDN0JzQixNQUFBQSxxQkFBcUIsR0FBRyxHQUQ5QjtBQUFBLFVBRU1DLHVCQUF1QixHQUFHLElBRmhDO0FBQUEsVUFHTUMsa0NBQWtDLEdBQUcsSUFIM0M7QUFBQSxVQUlNdkIsT0FBTyxHQUFHaUIsb0JBQVFPLHdCQUFSLENBQWlDSixvQkFBakMsRUFBdURDLHFCQUF2RCxFQUE4RUMsdUJBQTlFLEVBQXVHQyxrQ0FBdkcsQ0FKaEI7QUFBQSxVQUtNdEIsYUFBYSxHQUFHLElBTHRCO0FBQUEsVUFLNEI7QUFDdEJrQixNQUFBQSxPQUFPLEdBQUcsSUFBSXJCLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLENBTmhCOztBQVFBLGFBQU9rQixPQUFQO0FBQ0Q7Ozs7OztBQUdITSxNQUFNLENBQUNDLE9BQVAsR0FBaUI1QixPQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuY2xhc3MgUmVsZWFzZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy52ZXJzaW9uTnVtYmVyID0gdmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldFZlcnNpb25OdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldEZpbGVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVzKCk7IH1cblxuICBnZXRSZWFkbWVGaWxlKCkge1xuICAgIGxldCByZWFkbWVGaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuc29tZUZpbGUoKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICBmaWxlUGF0aFJlYWRtZUZpbGVQYXRoID0gaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoUmVhZG1lRmlsZVBhdGgpIHtcbiAgICAgICAgcmVhZG1lRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWFkbWVGaWxlO1xuICB9XG5cbiAgZ2V0TWV0YUpTT05GaWxlKCkge1xuICAgIGxldCBtZXRhSlNPTkZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5zb21lRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHRoaXMudmVyc2lvbk51bWJlcixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lSlNPTiA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGVudHJpZXNKU09OID0ganNvbltcImVudHJpZXNcIl0sXG4gICAgICAgICAgdmVyc2lvbk51bWJlckpTT04gPSBqc29uW1widmVyc2lvbk51bWJlclwiXSxcbiAgICAgICAgICBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihlbnRyaWVzSlNPTiksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXJKU09OLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoID0gXCIuXCIsXG4gICAgICAgICAgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMgPSB0cnVlLFxuICAgICAgICAgIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSB0cnVlLFxuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVsZWFzZTtcbiJdfQ==