'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entries = require('./entries');

var filePathUtilities = require('./utilities/filePath');

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
      var files = [];

      this.entries.forEachEntry(function (entry) {
        var entryFile = entry.isFile();

        if (entryFile) {
          var file = entry; ///

          files.push(file);
        }
      });

      return files;
    }
  }, {
    key: 'getReadmeFile',
    value: function getReadmeFile() {
      return this.getFile(isFilePathReadmeFilePath);
    }
  }, {
    key: 'getMetaJSONFile',
    value: function getMetaJSONFile() {
      return this.getFile(isFilePathMetaJSONFilePath);
    }
  }, {
    key: 'getFile',
    value: function getFile(test) {
      var foundFile = null;

      var files = this.getFiles();

      files.some(function (file) {
        var filePath = file.getPath(),
            fileFound = test(filePath);

        if (fileFound) {
          foundFile = file;

          return true;
        }
      });

      var file = foundFile;

      return file;
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
      var release = null;

      try {
        var topmostDirectoryName = name,
            ///
        projectsDirectoryPath = '.',
            allowOnlyRecognisedFiles = true,
            disallowHiddenFilesAndDirectories = true,
            entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories),
            versionNumber = null; ///

        release = new Release(name, entries, versionNumber);
      } catch (error) {} ///

      return release;
    }
  }]);

  return Release;
}();

module.exports = Release;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWxlYXNlLmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJyZXF1aXJlIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoUmVhZG1lRmlsZVBhdGgiLCJpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsInZlcnNpb25OdW1iZXIiLCJmaWxlcyIsImZvckVhY2hFbnRyeSIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsInB1c2giLCJnZXRGaWxlIiwidGVzdCIsImZvdW5kRmlsZSIsImdldEZpbGVzIiwic29tZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVGb3VuZCIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwidmVyc2lvbk51bWJlckpTT04iLCJmcm9tSlNPTiIsInJlbGVhc2UiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFsbG93T25seVJlY29nbmlzZWRGaWxlcyIsImRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjs7QUFFQSxJQUFNQyxvQkFBb0JELFFBQVEsc0JBQVIsQ0FBMUI7O0lBRVFFLHdCLEdBQXlERCxpQixDQUF6REMsd0I7SUFBMEJDLDBCLEdBQStCRixpQixDQUEvQkUsMEI7O0lBRTVCQyxPO0FBQ0osbUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxhQUEzQixFQUEwQztBQUFBOztBQUN4QyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNEOzs7OzhCQUVT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b250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpO1xuXG5jb25zdCBmaWxlUGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2ZpbGVQYXRoJyk7XG5cbmNvbnN0IHsgaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIFJlbGVhc2Uge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMudmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXI7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRWZXJzaW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb25OdW1iZXI7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IFtdO1xuXG4gICAgdGhpcy5lbnRyaWVzLmZvckVhY2hFbnRyeShmdW5jdGlvbihlbnRyeSkge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5OyAvLy9cblxuICAgICAgICBmaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgZ2V0UmVhZG1lRmlsZSgpIHsgcmV0dXJuIHRoaXMuZ2V0RmlsZShpc0ZpbGVQYXRoUmVhZG1lRmlsZVBhdGgpOyB9XG5cbiAgZ2V0TWV0YUpTT05GaWxlKCkgeyByZXR1cm4gdGhpcy5nZXRGaWxlKGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKTsgfVxuXG4gIGdldEZpbGUodGVzdCkge1xuICAgIGxldCBmb3VuZEZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5zb21lKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZUZvdW5kID0gdGVzdChmaWxlUGF0aCk7XG5cbiAgICAgIGlmIChmaWxlRm91bmQpIHtcbiAgICAgICAgZm91bmRGaWxlID0gZmlsZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbGUgPSBmb3VuZEZpbGU7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHZlcnNpb25OdW1iZXIgPSB0aGlzLnZlcnNpb25OdW1iZXIsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzOiBlbnRyaWVzLFxuICAgICAgICAgICAgdmVyc2lvbk51bWJlcjogdmVyc2lvbk51bWJlclxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdLFxuICAgICAgICAgIHZlcnNpb25OdW1iZXJKU09OID0ganNvbltcInZlcnNpb25OdW1iZXJcIl0sXG4gICAgICAgICAgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oZW50cmllc0pTT04pLFxuICAgICAgICAgIHZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uTnVtYmVySlNPTiwgIC8vL1xuICAgICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBsZXQgcmVsZWFzZSA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgIHByb2plY3RzRGlyZWN0b3J5UGF0aCA9ICcuJyxcbiAgICAgICAgICAgIGFsbG93T25seVJlY29nbmlzZWRGaWxlcyA9IHRydWUsXG4gICAgICAgICAgICBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSB0cnVlLFxuICAgICAgICAgICAgZW50cmllcyA9IEVudHJpZXMuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcbiAgICAgICAgICAgIHZlcnNpb25OdW1iZXIgPSBudWxsOyAvLy9cblxuICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fSAgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbGVhc2U7XG4iXX0=