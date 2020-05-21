"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Release;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2UuanMiXSwibmFtZXMiOlsiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwidmVyc2lvbk51bWJlciIsImdldEZpbGVzIiwicmVhZG1lRmlsZSIsImZpbGVzIiwic29tZUZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhSZWFkbWVGaWxlUGF0aCIsIm1ldGFKU09ORmlsZSIsImZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwidmVyc2lvbk51bWJlckpTT04iLCJFbnRyaWVzIiwiZnJvbUpTT04iLCJyZWxlYXNlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7SUFFcUJBLE87QUFDbkIsbUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxhQUEzQixFQUEwQztBQUFBOztBQUN4QyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0MsYUFBWjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtELE9BQUwsQ0FBYUUsUUFBYixFQUFQO0FBQWlDOzs7b0NBRTlCO0FBQ2QsVUFBSUMsVUFBVSxHQUFHLElBQWpCO0FBRUEsVUFBTUMsS0FBSyxHQUFHLEtBQUtGLFFBQUwsRUFBZDtBQUVBRSxNQUFBQSxLQUFLLENBQUNDLFFBQU4sQ0FBZSxVQUFDQyxJQUFELEVBQVU7QUFDdkIsWUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE9BQUwsRUFBakI7QUFBQSxZQUNNQyxzQkFBc0IsR0FBRyx3Q0FBeUJGLFFBQXpCLENBRC9COztBQUdBLFlBQUlFLHNCQUFKLEVBQTRCO0FBQzFCTixVQUFBQSxVQUFVLEdBQUdHLElBQWIsQ0FEMEIsQ0FDTjs7QUFFcEIsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FURDtBQVdBLGFBQU9ILFVBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFJTyxZQUFZLEdBQUcsSUFBbkI7QUFFQSxVQUFNTixLQUFLLEdBQUcsS0FBS0YsUUFBTCxFQUFkO0FBRUFFLE1BQUFBLEtBQUssQ0FBQ0MsUUFBTixDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUN2QixZQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxFQUFqQjtBQUFBLFlBQ01HLHdCQUF3QixHQUFHLDBDQUEyQkosUUFBM0IsQ0FEakM7O0FBR0EsWUFBSUksd0JBQUosRUFBOEI7QUFDNUJELFVBQUFBLFlBQVksR0FBR0osSUFBZixDQUQ0QixDQUNOOztBQUV0QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVREO0FBV0EsYUFBT0ksWUFBUDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNRSxXQUFXLEdBQUcsS0FBS1osT0FBTCxDQUFhYSxNQUFiLEVBQXBCO0FBQUEsVUFDTWQsSUFBSSxHQUFHLEtBQUtBLElBRGxCO0FBQUEsVUFFTUMsT0FBTyxHQUFHWSxXQUZoQjtBQUFBLFVBRThCO0FBQ3hCWCxNQUFBQSxhQUFhLEdBQUcsS0FBS0EsYUFIM0I7QUFBQSxVQUlNYSxJQUFJLEdBQUc7QUFDTGYsUUFBQUEsSUFBSSxFQUFKQSxJQURLO0FBRUxDLFFBQUFBLE9BQU8sRUFBUEEsT0FGSztBQUdMQyxRQUFBQSxhQUFhLEVBQWJBO0FBSEssT0FKYjtBQVVBLGFBQU9hLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUMsTUFBRCxDQUFyQjtBQUFBLFVBQ01GLFdBQVcsR0FBR0UsSUFBSSxDQUFDLFNBQUQsQ0FEeEI7QUFBQSxVQUVNRSxpQkFBaUIsR0FBR0YsSUFBSSxDQUFDLGVBQUQsQ0FGOUI7QUFBQSxVQUdNZixJQUFJLEdBQUdnQixRQUhiO0FBQUEsVUFHd0I7QUFDbEJmLE1BQUFBLE9BQU8sR0FBR2lCLG9CQUFRQyxRQUFSLENBQWlCTixXQUFqQixDQUpoQjtBQUFBLFVBS01YLGFBQWEsR0FBR2UsaUJBTHRCO0FBQUEsVUFLMEM7QUFDcENHLE1BQUFBLE9BQU8sR0FBRyxJQUFJckIsT0FBSixDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsQ0FOaEI7O0FBUUEsYUFBT2tCLE9BQVA7QUFDRDs7OzZCQUVlcEIsSSxFQUFNO0FBQ3BCLFVBQU1xQixvQkFBb0IsR0FBR3JCLElBQTdCO0FBQUEsVUFBbUM7QUFDN0JzQixNQUFBQSxxQkFBcUIsR0FBRyxHQUQ5QjtBQUFBLFVBRU1DLHVCQUF1QixHQUFHLElBRmhDO0FBQUEsVUFHTUMsa0NBQWtDLEdBQUcsSUFIM0M7QUFBQSxVQUlNdkIsT0FBTyxHQUFHaUIsb0JBQVFPLHdCQUFSLENBQWlDSixvQkFBakMsRUFBdURDLHFCQUF2RCxFQUE4RUMsdUJBQTlFLEVBQXVHQyxrQ0FBdkcsQ0FKaEI7QUFBQSxVQUtNdEIsYUFBYSxHQUFHLElBTHRCO0FBQUEsVUFLNEI7QUFDdEJrQixNQUFBQSxPQUFPLEdBQUcsSUFBSXJCLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLENBTmhCOztBQVFBLGFBQU9rQixPQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xuXG5pbXBvcnQgeyBpc0ZpbGVQYXRoUmVhZG1lRmlsZVBhdGgsIGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2Uge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMudmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXI7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRWZXJzaW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb25OdW1iZXI7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0UmVhZG1lRmlsZSgpIHtcbiAgICBsZXQgcmVhZG1lRmlsZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKTtcblxuICAgIGZpbGVzLnNvbWVGaWxlKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgZmlsZVBhdGhSZWFkbWVGaWxlUGF0aCA9IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGlmIChmaWxlUGF0aFJlYWRtZUZpbGVQYXRoKSB7XG4gICAgICAgIHJlYWRtZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVhZG1lRmlsZTtcbiAgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBsZXQgbWV0YUpTT05GaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuc29tZUZpbGUoKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICBmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggPSBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGlmIChmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgpIHtcbiAgICAgICAgbWV0YUpTT05GaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFKU09ORmlsZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHZlcnNpb25OdW1iZXIgPSB0aGlzLnZlcnNpb25OdW1iZXIsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICAgICAgdmVyc2lvbk51bWJlclxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdLFxuICAgICAgICAgIHZlcnNpb25OdW1iZXJKU09OID0ganNvbltcInZlcnNpb25OdW1iZXJcIl0sXG4gICAgICAgICAgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oZW50cmllc0pTT04pLFxuICAgICAgICAgIHZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uTnVtYmVySlNPTiwgIC8vL1xuICAgICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgIHByb2plY3RzRGlyZWN0b3J5UGF0aCA9IFwiLlwiLFxuICAgICAgICAgIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzID0gdHJ1ZSxcbiAgICAgICAgICBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gdHJ1ZSxcbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHZlcnNpb25OdW1iZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcik7XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxufVxuIl19