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
    key: 'fromFilePath',
    value: function fromFilePath(filePath, projectsDirectoryPath) {
      var absolutePath = concatenatePaths(projectsDirectoryPath, filePath),
          entryFile = isEntryFile(absolutePath);

      var content = null;

      try {
        if (entryFile) {
          content = readFile(absolutePath);
        }
      } catch (error) {}

      var path = filePath,
          ///
      file = new File(path, content);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJ0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3luYyIsInR5cGUiLCJqc29uIiwiZmlsZSIsInR5cGVKU09OIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImZpbGVQYXRoIiwiZW50cnlGaWxlIiwiZXJyb3IiLCJqc1ppcEVudHJ5IiwiY2FsbGJhY2siLCJqc1ppcEVudHJ5TmFtZSIsIm5hbWUiLCJqc1ppcEVudHJ5RGlyZWN0b3J5IiwiZGlyIiwianNaaXBFbnRyeUZpbGUiLCJhc3luYyIsInRoZW4iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxRQUFSLENBQWY7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsZ0JBQWdCRixRQUFRLGtCQUFSLENBQXRCOztJQUVRRyxhLEdBQXVDRixTLENBQXZDRSxhO0lBQWVDLG1CLEdBQXdCSCxTLENBQXhCRyxtQjtJQUNmQyxRLEdBQXFDRCxtQixDQUFyQ0MsUTtJQUFVQyxTLEdBQTJCRixtQixDQUEzQkUsUztJQUFXQyxXLEdBQWdCSCxtQixDQUFoQkcsVztJQUNyQkMsaUMsR0FBc0NOLGEsQ0FBdENNLGlDO0lBQ0FDLGdCLEdBQW1ETixh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QUFiOztBQUVBa0IsT0FBT0MsTUFBUCxDQUFjMUIsSUFBZCxFQUFvQjtBQUNsQk8sUUFBTUE7QUFEWSxDQUFwQjs7QUFJQW9CLE9BQU9DLE9BQVAsR0FBaUI1QixJQUFqQiIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgaXNFbnRyeUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0aGlzLnBhdGgpLCAgLy8vXG4gICAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcblxuICAgIG1rZGlycC5zeW5jKHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgd3JpdGVGaWxlKGFic29sdXRlUGF0aCwgdGhpcy5jb250ZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICB0eXBlSlNPTiA9IGpzb25bXCJ0eXBlXCJdO1xuXG4gICAgaWYgKHR5cGVKU09OID09PSB0eXBlKSB7ICAvLy9cbiAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgICAgcGF0aCA9IHBhdGhKU09OLCAgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudEpTT047ICAvLy9cblxuICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aChmaWxlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGZpbGVQYXRoKSxcbiAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUGF0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge31cblxuICAgIGNvbnN0IHBhdGggPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGpzWmlwRW50cnlOYW1lID0ganNaaXBFbnRyeS5uYW1lLFxuICAgICAgICAgIGpzWmlwRW50cnlEaXJlY3RvcnkgPSBqc1ppcEVudHJ5LmRpciwgLy8vXG4gICAgICAgICAganNaaXBFbnRyeUZpbGUgPSAhanNaaXBFbnRyeURpcmVjdG9yeTsgIC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RmlsZSkge1xuICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXRoID0ganNaaXBFbnRyeU5hbWU7IC8vL1xuXG4gICAgICBwYXRoID0gcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAgICBqc1ppcEVudHJ5LmFzeW5jKCdzdHJpbmcnKS50aGVuKGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnRmlsZSc7XG5cbk9iamVjdC5hc3NpZ24oRmlsZSwge1xuICB0eXBlOiB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlO1xuIl19