"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _mkdirp = _interopRequireDefault(require("mkdirp"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUuanMiXSwibmFtZXMiOlsicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwid3JpdGVGaWxlIiwiaXNFbnRyeUZpbGUiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVQYXRoIiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsIm1rZGlycCIsInN5bmMiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsImVudHJ5RmlsZSIsImVycm9yIiwiZG9jdW1lbnQiLCJmaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZ2V0Q29udGVudCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVRQSxRLEdBQXFDQyw4QixDQUFyQ0QsUTtJQUFVRSxTLEdBQTJCRCw4QixDQUEzQkMsUztJQUFXQyxXLEdBQWdCRiw4QixDQUFoQkUsVztJQUNyQkMsZ0IsR0FBbURDLHdCLENBQW5ERCxnQjtJQUFrQkUsNEIsR0FBaUNELHdCLENBQWpDQyw0Qjs7SUFFTEMsSTtBQUNuQixnQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLElBQUksR0FBRyxJQUFiO0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFN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O0FBQ0Q7Ozt1Q0FFeUJGLEksRUFBTUMsTyxFQUFTO0FBQ3ZDQSxNQUFBQSxPQUFPLEdBQUdhLDhCQUE4QixDQUFDYixPQUFELENBQXhDLENBRHVDLENBQ2E7O0FBRXBELFVBQU1DLElBQUksR0FBRyxJQUFJSCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQUFiO0FBRUEsYUFBT0MsSUFBUDtBQUNEOzs7Ozs7OztnQkF6SGtCSCxJLFVBd0RMLE07O0FBb0VoQixTQUFTZSw4QkFBVCxDQUF3Q2IsT0FBeEMsRUFBaUQ7QUFBRSxTQUFPQSxPQUFPLENBQUNvQixPQUFSLENBQWdCLEtBQWhCLEVBQXVCLElBQXZCLENBQVA7QUFBc0MsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBta2RpcnAgZnJvbSBcIm1rZGlycFwiO1xuXG5jb25zdCB7IHJlYWRGaWxlLCB3cml0ZUZpbGUsIGlzRW50cnlGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0aGlzLnBhdGgpLCAgLy8vXG4gICAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcblxuICAgIG1rZGlycC5zeW5jKHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgd3JpdGVGaWxlKGFic29sdXRlUGF0aCwgdGhpcy5jb250ZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IFwiRmlsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICAgIGlmICh0eXBlSlNPTiA9PT0gdHlwZSkgeyAgLy8vXG4gICAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICAgIGNvbnRlbnRKU09OID0ganNvbltcImNvbnRlbnRcIl0sXG4gICAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTjsgIC8vL1xuXG4gICAgICAgIGxldCBjb250ZW50ID0gY29udGVudEpTT047ICAvLy9cblxuICAgICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXG4gICAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gcmVhZEZpbGUoYWJzb2x1dGVQYXRoKTtcblxuICAgICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGRvY3VtZW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgcGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQW5kQ29udGVudChwYXRoLCBjb250ZW50KSB7XG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx0L2csIFwiICBcIik7IH0gLy8vXG4iXX0=