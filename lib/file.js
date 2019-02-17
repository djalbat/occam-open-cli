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

      return file;
    }
  }, {
    key: 'fromPath',
    value: function fromPath(path, projectsDirectoryPath) {
      var file = null;

      var absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryFile = isEntryFile(absolutePath);

      if (entryFile) {
        var content = readFile(absolutePath);

        content = convertContentTabsToWhitespace(content); ///

        file = new File(path, content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVQYXRoIiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN5bmMiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsImVudHJ5RmlsZSIsImRvY3VtZW50IiwiZmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsImdldENvbnRlbnQiLCJqc1ppcEVudHJ5IiwiY2FsbGJhY2siLCJkaXIiLCJqc1ppcEVudHJ5RGlyZWN0b3J5IiwianNaaXBFbnRyeUZpbGUiLCJuYW1lIiwianNaaXBGaWxlIiwiYXN5bmMiLCJ0aGVuIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFFBQVIsQ0FBZjtBQUFBLElBQ01DLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHQSxJQUFNRSxnQkFBZ0JGLFFBQVEsa0JBQVIsQ0FBdEI7O0lBRVFHLGEsR0FBdUNGLFMsQ0FBdkNFLGE7SUFBZUMsbUIsR0FBd0JILFMsQ0FBeEJHLG1CO0lBQ2ZDLFEsR0FBcUNELG1CLENBQXJDQyxRO0lBQVVDLFMsR0FBMkJGLG1CLENB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Yyw4QkFBVCxDQUF3Q1osT0FBeEMsRUFBaUQ7QUFBRSxTQUFPQSxRQUFRK0IsT0FBUixDQUFnQixLQUFoQixFQUF1QixJQUF2QixDQUFQO0FBQXNDLEMsQ0FBQyIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgaXNFbnRyeUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGhpcy5wYXRoKSwgIC8vL1xuICAgICAgICAgIHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBta2RpcnAuc3luYyh0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIHRoaXMuY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG5cbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgdHlwZUpTT04gPSBqc29uW1widHlwZVwiXTtcblxuICAgIGlmICh0eXBlSlNPTiA9PT0gdHlwZSkgeyAgLy8vXG4gICAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgICAgY29udGVudEpTT04gPSBqc29uW1wiY29udGVudFwiXSxcbiAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTjsgIC8vL1xuXG4gICAgICBsZXQgY29udGVudCA9IGNvbnRlbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoKSxcbiAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgbGV0IGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGRvY3VtZW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgcGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHsgZGlyIH0gPSBqc1ppcEVudHJ5LFxuICAgICAgICAgIGpzWmlwRW50cnlEaXJlY3RvcnkgPSBkaXIsICAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5RmlsZSA9ICFqc1ppcEVudHJ5RGlyZWN0b3J5OyAgLy8vXG5cbiAgICBpZiAoIWpzWmlwRW50cnlGaWxlKSB7XG4gICAgICBjYWxsYmFjayhmaWxlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGpzWmlwRmlsZSA9IGpzWmlwRW50cnksICAvLy9cbiAgICAgICAgICB7IG5hbWUgfSA9IGpzWmlwRmlsZTtcblxuICAgIGxldCBwYXRoID0gbmFtZTsgLy8vXG5cbiAgICBwYXRoID0gcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAganNaaXBFbnRyeS5hc3luYygnc3RyaW5nJykudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhBbmRDb250ZW50KHBhdGgsIGNvbnRlbnQpIHtcbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ0ZpbGUnO1xuXG5PYmplY3QuYXNzaWduKEZpbGUsIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcblxuZnVuY3Rpb24gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx0L2csICcgICcpOyB9IC8vL1xuIl19