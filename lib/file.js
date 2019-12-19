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
    key: 'setPath',
    value: function setPath(path) {
      this.path = path;
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;
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
    key: 'fromPath',
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
      } catch (error) {
        ///
      }

      return file;
    }
  }, {
    key: 'fromDocument',
    value: function fromDocument(document) {
      var filePath = document.getFilePath(),
          path = filePath; ///

      var content = document.getContent();

      content = convertContentTabsToWhitespace(content); ///

      var file = new File(path, content);

      return file;
    }
  }, {
    key: 'fromJSZipEntry',
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
    key: 'fromPathAndContent',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVQYXRoIiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN5bmMiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsImVudHJ5RmlsZSIsImVycm9yIiwiZG9jdW1lbnQiLCJmaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZ2V0Q29udGVudCIsImpzWmlwRW50cnkiLCJjYWxsYmFjayIsImRpciIsImpzWmlwRW50cnlEaXJlY3RvcnkiLCJqc1ppcEVudHJ5RmlsZSIsIm5hbWUiLCJqc1ppcEZpbGUiLCJhc3luYyIsInRoZW4iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUcsYSxHQUF1Q0YsUyxDQUF2Q0UsYTtJQUFlQyxtQixHQUF3QkgsUyxDQUF4QkcsbUI7SUFDZkMsUSxHQUFxQ0QsbUIsQ0FBckNDLFE7SUFBVUMsUyxHQUEy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QixPQUFPQyxNQUFQLENBQWMvQixJQUFkLEVBQW9CO0FBQ2xCUztBQURrQixDQUFwQjs7QUFJQXVCLE9BQU9DLE9BQVAsR0FBaUJqQyxJQUFqQjs7QUFFQSxTQUFTYyw4QkFBVCxDQUF3Q1osT0FBeEMsRUFBaUQ7QUFBRSxTQUFPQSxRQUFRZ0MsT0FBUixDQUFnQixLQUFoQixFQUF1QixJQUF2QixDQUFQO0FBQXNDLEMsQ0FBQyIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgaXNFbnRyeUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGhpcy5wYXRoKSwgIC8vL1xuICAgICAgICAgIHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBta2RpcnAuc3luYyh0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIHRoaXMuY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgICAgdHlwZUpTT04gPSBqc29uW1widHlwZVwiXTtcblxuICAgICAgaWYgKHR5cGVKU09OID09PSB0eXBlKSB7ICAvLy9cbiAgICAgICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICAgICAgY29udGVudEpTT04gPSBqc29uW1wiY29udGVudFwiXSxcbiAgICAgICAgICAgICAgcGF0aCA9IHBhdGhKU09OOyAgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBjb250ZW50SlNPTjsgIC8vL1xuXG4gICAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoKSxcbiAgICAgICAgICAgIGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Eb2N1bWVudChkb2N1bWVudCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZG9jdW1lbnQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGg7ICAvLy9cblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgeyBkaXIgfSA9IGpzWmlwRW50cnksXG4gICAgICAgICAganNaaXBFbnRyeURpcmVjdG9yeSA9IGRpciwgIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlGaWxlID0gIWpzWmlwRW50cnlEaXJlY3Rvcnk7ICAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeUZpbGUpIHtcbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganNaaXBGaWxlID0ganNaaXBFbnRyeSwgIC8vL1xuICAgICAgICAgIHsgbmFtZSB9ID0ganNaaXBGaWxlO1xuXG4gICAgbGV0IHBhdGggPSBuYW1lOyAvLy9cblxuICAgIHBhdGggPSByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCk7XG5cbiAgICBqc1ppcEVudHJ5LmFzeW5jKCdzdHJpbmcnKS50aGVuKChjb250ZW50KSA9PiB7XG4gICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhBbmRDb250ZW50KHBhdGgsIGNvbnRlbnQpIHtcbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ0ZpbGUnO1xuXG5PYmplY3QuYXNzaWduKEZpbGUsIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcblxuZnVuY3Rpb24gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx0L2csICcgICcpOyB9IC8vL1xuIl19