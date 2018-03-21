'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mkdirp = require('mkdirp'),
    necessary = require('necessary');

var nameUtilities = require('./utilities/name');

var pathUtilities = necessary.pathUtilities,
    fileSystemUtilities = necessary.fileSystemUtilities,
    readFile = fileSystemUtilities.readFile,
    writeFile = fileSystemUtilities.writeFile,
    isEntryFile = fileSystemUtilities.isEntryFile,
    removeMasterDirectoryNameFromPath = nameUtilities.removeMasterDirectoryNameFromPath,
    concatenatePaths = pathUtilities.concatenatePaths,
    topmostDirectoryPathFromPath = pathUtilities.topmostDirectoryPathFromPath;

var File = function () {
  function File(path, content) {
    _classCallCheck(this, File);

    this.path = path;
    this.content = content;
  }

  _createClass(File, [{
    key: 'getPath',
    value: function getPath() {
      return this.path;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'isFile',
    value: function isFile() {
      var file = true;

      return file;
    }
  }, {
    key: 'isDirectory',
    value: function isDirectory() {
      var directory = false;

      return directory;
    }
  }, {
    key: 'save',
    value: function save(projectsDirectoryPath) {
      var absolutePath = concatenatePaths(projectsDirectoryPath, this.path),
          ///
      topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);

      mkdirp.sync(topmostAbsoluteDirectoryPath);

      writeFile(absolutePath, this.content);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var type = File.type,
          path = this.path,
          content = this.content,
          json = {
        "type": type,
        "path": path,
        "content": content
      };


      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var file = null;

      var type = File.type,
          typeJSON = json["type"];


      if (typeJSON === type) {
        ///
        var pathJSON = json["path"],
            contentJSON = json["content"],
            path = pathJSON,
            ///
        content = contentJSON; ///

        file = new File(path, content);
      }

      return file;
    }
  }, {
    key: 'fromPath',
    value: function fromPath(path, projectsDirectoryPath) {
      var absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryFile = isEntryFile(absolutePath);

      var content = null;

      try {
        if (entryFile) {
          content = readFile(absolutePath);
        }
      } catch (error) {} ///

      var file = new File(path, content);

      return file;
    }
  }, {
    key: 'fromJSZipEntry',
    value: function fromJSZipEntry(jsZipEntry, callback) {
      var file = null;

      var jsZipEntryName = jsZipEntry.name,
          jsZipEntryDirectory = jsZipEntry.dir,
          ///
      jsZipEntryFile = !jsZipEntryDirectory; ///

      if (!jsZipEntryFile) {
        callback(file);
      } else {
        var path = jsZipEntryName; ///

        path = removeMasterDirectoryNameFromPath(path);

        jsZipEntry.async('string').then(function (content) {
          file = new File(path, content);

          callback(file);
        });
      }
    }
  }]);

  return File;
}();

var type = 'File';

Object.assign(File, {
  type: type
});

module.exports = File;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVQYXRoIiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN5bmMiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImVudHJ5RmlsZSIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeU5hbWUiLCJuYW1lIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRW50cnlGaWxlIiwiYXN5bmMiLCJ0aGVuIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUcsYSxHQUF1Q0YsUyxDQUF2Q0UsYTtJQUFlQyxtQixHQUF3QkgsUyxDQUF4QkcsbUI7SUFDZkMsUSxHQUFxQ0QsbUIsQ0FBckNDLFE7SUFBVUMsUyxHQUEyQkYsbUIsQ0FBM0JFLFM7SUFBV0MsVyxHQUFnQkgsbUIsQ0FBaEJHLFc7SUFDckJDLGlDLEdBQXNDTixhLENBQXRDTSxpQztJQUNBQyxnQixHQUFtRE4s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QVNDLElBQVQsRUFBZUMsT0FBZixDQUFQOztBQUVBZSxtQkFBU2QsSUFBVDtBQUNELFNBSkQ7QUFLRDtBQUNGOzs7Ozs7QUFHSCxJQUFNTSxPQUFPLE1BQWI7O0FBRUFnQixPQUFPQyxNQUFQLENBQWMxQixJQUFkLEVBQW9CO0FBQ2xCUyxRQUFNQTtBQURZLENBQXBCOztBQUlBa0IsT0FBT0MsT0FBUCxHQUFpQjVCLElBQWpCIiwiZmlsZSI6ImZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyk7XG5cbmNvbnN0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBpc0VudHJ5RmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGhpcy5wYXRoKSwgIC8vL1xuICAgICAgICAgIHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBta2RpcnAuc3luYyh0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIHRoaXMuY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG5cbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgdHlwZUpTT04gPSBqc29uW1widHlwZVwiXTtcblxuICAgIGlmICh0eXBlSlNPTiA9PT0gdHlwZSkgeyAgLy8vXG4gICAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgICAgY29udGVudEpTT04gPSBqc29uW1wiY29udGVudFwiXSxcbiAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTiwgIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRKU09OOyAgLy8vXG5cbiAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXG4gICAgICAgICAgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcblxuICAgIGxldCBjb250ZW50ID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fSAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5TmFtZSA9IGpzWmlwRW50cnkubmFtZSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXIsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlGaWxlID0gIWpzWmlwRW50cnlEaXJlY3Rvcnk7ICAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeUZpbGUpIHtcbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF0aCA9IGpzWmlwRW50cnlOYW1lOyAvLy9cblxuICAgICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAganNaaXBFbnRyeS5hc3luYygnc3RyaW5nJykudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ0ZpbGUnO1xuXG5PYmplY3QuYXNzaWduKEZpbGUsIHtcbiAgdHlwZTogdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcbiJdfQ==