"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _mkdirp = _interopRequireDefault(require("mkdirp"));

var _name = require("./utilities/name");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var readFile = _necessary.fileSystemUtilities.readFile,
    writeFile = _necessary.fileSystemUtilities.writeFile,
    isEntryFile = _necessary.fileSystemUtilities.isEntryFile,
    concatenatePaths = _necessary.pathUtilities.concatenatePaths,
    topmostDirectoryPathFromPath = _necessary.pathUtilities.topmostDirectoryPathFromPath;

var File = /*#__PURE__*/function () {
  function File(path, content) {
    _classCallCheck(this, File);

    this.path = path;
    this.content = content;
  }

  _createClass(File, [{
    key: "getPath",
    value: function getPath() {
      return this.path;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      return this.content;
    }
  }, {
    key: "isFile",
    value: function isFile() {
      var file = true;
      return file;
    }
  }, {
    key: "isDirectory",
    value: function isDirectory() {
      var directory = false;
      return directory;
    }
  }, {
    key: "setPath",
    value: function setPath(path) {
      this.path = path;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this.content = content;
    }
  }, {
    key: "save",
    value: function save(projectsDirectoryPath) {
      var absolutePath = concatenatePaths(projectsDirectoryPath, this.path),
          ///
      topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);

      _mkdirp["default"].sync(topmostAbsoluteDirectoryPath);

      writeFile(absolutePath, this.content);
    }
  }, {
    key: "toJSON",
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
    key: "fromJSON",
    value: function fromJSON(json) {
      var file = null;

      if (json !== null) {
        var type = File.type,
            typeJSON = json["type"];

        if (typeJSON === type) {
          ///
          var pathJSON = json["path"],
              contentJSON = json["content"],
              path = pathJSON; ///

          var content = contentJSON; ///

          content = convertContentTabsToWhitespace(content); ///

          file = new File(path, content);
        }
      }

      return file;
    }
  }, {
    key: "fromPath",
    value: function fromPath(path, projectsDirectoryPath) {
      var file = null;

      try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path),
            entryFile = isEntryFile(absolutePath);

        if (entryFile) {
          var content = readFile(absolutePath);
          content = convertContentTabsToWhitespace(content); ///

          file = new File(path, content);
        }
      } catch (error) {///
      }

      return file;
    }
  }, {
    key: "fromDocument",
    value: function fromDocument(document) {
      var filePath = document.getFilePath(),
          path = filePath; ///

      var content = document.getContent();
      content = convertContentTabsToWhitespace(content); ///

      var file = new File(path, content);
      return file;
    }
  }, {
    key: "fromJSZipEntry",
    value: function fromJSZipEntry(jsZipEntry, callback) {
      var file = null;
      var dir = jsZipEntry.dir,
          jsZipEntryDirectory = dir,
          jsZipEntryFile = !jsZipEntryDirectory; ///

      if (!jsZipEntryFile) {
        callback(file);
        return;
      }

      var jsZipFile = jsZipEntry,
          name = jsZipFile.name;
      var path = name; ///

      path = (0, _name.removeMasterDirectoryNameFromPath)(path);
      jsZipEntry.async("string").then(function (content) {
        content = convertContentTabsToWhitespace(content); ///

        file = new File(path, content);
        callback(file);
      });
    }
  }, {
    key: "fromPathAndContent",
    value: function fromPathAndContent(path, content) {
      content = convertContentTabsToWhitespace(content); ///

      var file = new File(path, content);
      return file;
    }
  }]);

  return File;
}();

exports["default"] = File;

_defineProperty(File, "type", "File");

function convertContentTabsToWhitespace(content) {
  return content.replace(/\t/g, "  ");
} ///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUuanMiXSwibmFtZXMiOlsicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwid3JpdGVGaWxlIiwiaXNFbnRyeUZpbGUiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVQYXRoIiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsIm1rZGlycCIsInN5bmMiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsImVudHJ5RmlsZSIsImVycm9yIiwiZG9jdW1lbnQiLCJmaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZ2V0Q29udGVudCIsImpzWmlwRW50cnkiLCJjYWxsYmFjayIsImRpciIsImpzWmlwRW50cnlEaXJlY3RvcnkiLCJqc1ppcEVudHJ5RmlsZSIsImpzWmlwRmlsZSIsIm5hbWUiLCJhc3luYyIsInRoZW4iLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFUUEsUSxHQUFxQ0MsOEIsQ0FBckNELFE7SUFBVUUsUyxHQUEyQkQsOEIsQ0FBM0JDLFM7SUFBV0MsVyxHQUFnQkYsOEIsQ0FBaEJFLFc7SUFDckJDLGdCLEdBQW1EQyx3QixDQUFuREQsZ0I7SUFBa0JFLDRCLEdBQWlDRCx3QixDQUFqQ0MsNEI7O0lBRUxDLEk7QUFDbkIsZ0JBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FB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Q0FBYjtBQUVBLGFBQU9DLElBQVA7QUFDRDs7Ozs7Ozs7Z0JBdEprQkgsSSxVQXdETCxNOztBQWlHaEIsU0FBU2UsOEJBQVQsQ0FBd0NiLE9BQXhDLEVBQWlEO0FBQUUsU0FBT0EsT0FBTyxDQUFDNkIsT0FBUixDQUFnQixLQUFoQixFQUF1QixJQUF2QixDQUFQO0FBQXNDLEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgbWtkaXJwIGZyb20gXCJta2RpcnBcIjtcblxuaW1wb3J0IHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBpc0VudHJ5RmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGhpcy5wYXRoKSwgIC8vL1xuICAgICAgICAgIHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBta2RpcnAuc3luYyh0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIHRoaXMuY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBcIkZpbGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgICB0eXBlSlNPTiA9IGpzb25bXCJ0eXBlXCJdO1xuXG4gICAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgICAgICBwYXRoID0gcGF0aEpTT047ICAvLy9cblxuICAgICAgICBsZXQgY29udGVudCA9IGNvbnRlbnRKU09OOyAgLy8vXG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxuICAgICAgICAgICAgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBsZXQgY29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUGF0aCk7XG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURvY3VtZW50KGRvY3VtZW50KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBkb2N1bWVudC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHBhdGggPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB7IGRpciB9ID0ganNaaXBFbnRyeSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0gZGlyLCAgLy8vXG4gICAgICAgICAganNaaXBFbnRyeUZpbGUgPSAhanNaaXBFbnRyeURpcmVjdG9yeTsgIC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RmlsZSkge1xuICAgICAgY2FsbGJhY2soZmlsZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqc1ppcEZpbGUgPSBqc1ppcEVudHJ5LCAgLy8vXG4gICAgICAgICAgeyBuYW1lIH0gPSBqc1ppcEZpbGU7XG5cbiAgICBsZXQgcGF0aCA9IG5hbWU7IC8vL1xuXG4gICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgIGpzWmlwRW50cnkuYXN5bmMoXCJzdHJpbmdcIikudGhlbigoY29udGVudCkgPT4ge1xuICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQW5kQ29udGVudChwYXRoLCBjb250ZW50KSB7XG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx0L2csIFwiICBcIik7IH0gLy8vXG4iXX0=