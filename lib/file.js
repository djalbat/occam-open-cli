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
    value: function fromFilePath(path, projectsDirectoryPath) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJ0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3luYyIsInR5cGUiLCJqc29uIiwiZmlsZSIsInR5cGVKU09OIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImVudHJ5RmlsZSIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeU5hbWUiLCJuYW1lIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRW50cnlGaWxlIiwiYXN5bmMiLCJ0aGVuIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUcsYSxHQUF1Q0YsUyxDQUF2Q0UsYTtJQUFlQyxtQixHQUF3QkgsUyxDQUF4QkcsbUI7SUFDZkMsUSxHQUFxQ0QsbUIsQ0FBckNDLFE7SUFBVUMsUyxHQUEyQkYsbUIsQ0FBM0JFLFM7SUFBV0MsVyxHQUFnQkgsbUIsQ0FBaEJHLFc7SUFDckJDLGlDLEdBQXNDTixhLENBQXRDTSxpQztJQUNBQyxnQixHQUFtRE4sYSxDQUFuRE0sZ0I7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QixJQUFkLEVBQW9CO0FBQ2xCTyxRQUFNQTtBQURZLENBQXBCOztBQUlBbUIsT0FBT0MsT0FBUCxHQUFpQjNCLElBQWpCIiwiZmlsZSI6ImZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyk7XG5cbmNvbnN0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBpc0VudHJ5RmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIHNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHRoaXMucGF0aCksICAvLy9cbiAgICAgICAgICB0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChhYnNvbHV0ZVBhdGgpO1xuXG4gICAgbWtkaXJwLnN5bmModG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgICB3cml0ZUZpbGUoYWJzb2x1dGVQYXRoLCB0aGlzLmNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiB0eXBlLFxuICAgICAgICAgICAgXCJwYXRoXCI6IHBhdGgsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogY29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICAgIGNvbnRlbnRKU09OID0ganNvbltcImNvbnRlbnRcIl0sXG4gICAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50SlNPTjsgIC8vL1xuXG4gICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoKSxcbiAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUGF0aCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGpzWmlwRW50cnlOYW1lID0ganNaaXBFbnRyeS5uYW1lLFxuICAgICAgICAgIGpzWmlwRW50cnlEaXJlY3RvcnkgPSBqc1ppcEVudHJ5LmRpciwgLy8vXG4gICAgICAgICAganNaaXBFbnRyeUZpbGUgPSAhanNaaXBFbnRyeURpcmVjdG9yeTsgIC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RmlsZSkge1xuICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXRoID0ganNaaXBFbnRyeU5hbWU7IC8vL1xuXG4gICAgICBwYXRoID0gcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAgICBqc1ppcEVudHJ5LmFzeW5jKCdzdHJpbmcnKS50aGVuKGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnRmlsZSc7XG5cbk9iamVjdC5hc3NpZ24oRmlsZSwge1xuICB0eXBlOiB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlO1xuIl19