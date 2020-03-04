'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      mkdirp.sync(topmostAbsoluteDirectoryPath);
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
        var _type = File.type,
            typeJSON = json["type"];

        if (typeJSON === _type) {
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

      path = removeMasterDirectoryNameFromPath(path);
      jsZipEntry.async('string').then(function (content) {
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

var type = 'File';
Object.assign(File, {
  type: type
});
module.exports = File;

function convertContentTabsToWhitespace(content) {
  return content.replace(/\t/g, '  ');
} ///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUuanMiXSwibmFtZXMiOlsibWtkaXJwIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInJlYWRGaWxlIiwid3JpdGVGaWxlIiwiaXNFbnRyeUZpbGUiLCJyZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJjb25jYXRlbmF0ZVBhdGhzIiwidG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCIsIkZpbGUiLCJwYXRoIiwiY29udGVudCIsImZpbGUiLCJkaXJlY3RvcnkiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJ0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3luYyIsInR5cGUiLCJqc29uIiwidHlwZUpTT04iLCJwYXRoSlNPTiIsImNvbnRlbnRKU09OIiwiY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIiwiZW50cnlGaWxlIiwiZXJyb3IiLCJkb2N1bWVudCIsImZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJnZXRDb250ZW50IiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwiZGlyIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImpzWmlwRW50cnlGaWxlIiwianNaaXBGaWxlIiwibmFtZSIsImFzeW5jIiwidGhlbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXRCO0FBQUEsSUFDTUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUR6Qjs7QUFHQSxJQUFNRSxhQUFhLEdBQUdGLE9BQU8sQ0FBQyxrQkFBRCxDQUE3Qjs7SUFFUUcsYSxHQUF1Q0YsUyxDQUF2Q0UsYTtJQUFlQyxtQixHQUF3QkgsUyxDQUF4QkcsbUI7SUFDZkMsUSxHQUFxQ0Qs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QUFDM0NBLFFBQUFBLE9BQU8sR0FBR1ksOEJBQThCLENBQUNaLE9BQUQsQ0FBeEMsQ0FEMkMsQ0FDUzs7QUFFcERDLFFBQUFBLElBQUksR0FBRyxJQUFJSCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQUFQO0FBRUFvQixRQUFBQSxRQUFRLENBQUNuQixJQUFELENBQVI7QUFDRCxPQU5EO0FBT0Q7Ozt1Q0FFeUJGLEksRUFBTUMsTyxFQUFTO0FBQ3ZDQSxNQUFBQSxPQUFPLEdBQUdZLDhCQUE4QixDQUFDWixPQUFELENBQXhDLENBRHVDLENBQ2E7O0FBRXBELFVBQU1DLElBQUksR0FBRyxJQUFJSCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQUFiO0FBRUEsYUFBT0MsSUFBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNTSxJQUFJLEdBQUcsTUFBYjtBQUVBcUIsTUFBTSxDQUFDQyxNQUFQLENBQWMvQixJQUFkLEVBQW9CO0FBQ2xCUyxFQUFBQSxJQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBSUF1QixNQUFNLENBQUNDLE9BQVAsR0FBaUJqQyxJQUFqQjs7QUFFQSxTQUFTYyw4QkFBVCxDQUF3Q1osT0FBeEMsRUFBaUQ7QUFBRSxTQUFPQSxPQUFPLENBQUNnQyxPQUFSLENBQWdCLEtBQWhCLEVBQXVCLElBQXZCLENBQVA7QUFBc0MsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgaXNFbnRyeUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGhpcy5wYXRoKSwgIC8vL1xuICAgICAgICAgIHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBta2RpcnAuc3luYyh0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIHRoaXMuY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgICAgdHlwZUpTT04gPSBqc29uW1widHlwZVwiXTtcblxuICAgICAgaWYgKHR5cGVKU09OID09PSB0eXBlKSB7ICAvLy9cbiAgICAgICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICAgICAgY29udGVudEpTT04gPSBqc29uW1wiY29udGVudFwiXSxcbiAgICAgICAgICAgICAgcGF0aCA9IHBhdGhKU09OOyAgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBjb250ZW50SlNPTjsgIC8vL1xuXG4gICAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoKSxcbiAgICAgICAgICAgIGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Eb2N1bWVudChkb2N1bWVudCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZG9jdW1lbnQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGg7ICAvLy9cblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgeyBkaXIgfSA9IGpzWmlwRW50cnksXG4gICAgICAgICAganNaaXBFbnRyeURpcmVjdG9yeSA9IGRpciwgIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlGaWxlID0gIWpzWmlwRW50cnlEaXJlY3Rvcnk7ICAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeUZpbGUpIHtcbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganNaaXBGaWxlID0ganNaaXBFbnRyeSwgIC8vL1xuICAgICAgICAgIHsgbmFtZSB9ID0ganNaaXBGaWxlO1xuXG4gICAgbGV0IHBhdGggPSBuYW1lOyAvLy9cblxuICAgIHBhdGggPSByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCk7XG5cbiAgICBqc1ppcEVudHJ5LmFzeW5jKCdzdHJpbmcnKS50aGVuKChjb250ZW50KSA9PiB7XG4gICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhBbmRDb250ZW50KHBhdGgsIGNvbnRlbnQpIHtcbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ0ZpbGUnO1xuXG5PYmplY3QuYXNzaWduKEZpbGUsIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcblxuZnVuY3Rpb24gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx0L2csICcgICcpOyB9IC8vL1xuIl19