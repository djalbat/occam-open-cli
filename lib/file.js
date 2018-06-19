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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVQYXRoIiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN5bmMiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImVudHJ5RmlsZSIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeU5hbWUiLCJuYW1lIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRW50cnlGaWxlIiwiYXN5bmMiLCJ0aGVuIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUcsYSxHQUF1Q0YsUyxDQUF2Q0UsYTtJQUFlQyxtQixHQUF3QkgsUyxDQUF4QkcsbUI7SUFDZkMsUSxHQUFxQ0QsbUIsQ0FBckNDLFE7SUFBVUMsUyxHQUEyQkYsbUIsQ0FBM0JFLFM7SUFBV0MsVyxHQUFnQkgsbUIsQ0FBaEJHLFc7SUFDckJDLGlDLEdBQXNDTixhLENBQXRDTSxpQztJQUNBQyxnQixHQUFtRE4s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QVNDLElBQVQsRUFBZUMsT0FBZixDQUFQOztBQUVBZSxtQkFBU2QsSUFBVDtBQUNELFNBSkQ7QUFLRDtBQUNGOzs7Ozs7QUFHSCxJQUFNTSxPQUFPLE1BQWI7O0FBRUFnQixPQUFPQyxNQUFQLENBQWMxQixJQUFkLEVBQW9CO0FBQ2xCUztBQURrQixDQUFwQjs7QUFJQWtCLE9BQU9DLE9BQVAsR0FBaUI1QixJQUFqQiIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgaXNFbnRyeUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHRoaXMucGF0aCksICAvLy9cbiAgICAgICAgICB0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChhYnNvbHV0ZVBhdGgpO1xuXG4gICAgbWtkaXJwLnN5bmModG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgICB3cml0ZUZpbGUoYWJzb2x1dGVQYXRoLCB0aGlzLmNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiB0eXBlLFxuICAgICAgICAgICAgXCJwYXRoXCI6IHBhdGgsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogY29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICAgIGNvbnRlbnRKU09OID0ganNvbltcImNvbnRlbnRcIl0sXG4gICAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50SlNPTjsgIC8vL1xuXG4gICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxuICAgICAgICAgIGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCk7XG5cbiAgICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb250ZW50ID0gcmVhZEZpbGUoYWJzb2x1dGVQYXRoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge30gIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QganNaaXBFbnRyeU5hbWUgPSBqc1ppcEVudHJ5Lm5hbWUsXG4gICAgICAgICAganNaaXBFbnRyeURpcmVjdG9yeSA9IGpzWmlwRW50cnkuZGlyLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5RmlsZSA9ICFqc1ppcEVudHJ5RGlyZWN0b3J5OyAgLy8vXG5cbiAgICBpZiAoIWpzWmlwRW50cnlGaWxlKSB7XG4gICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBhdGggPSBqc1ppcEVudHJ5TmFtZTsgLy8vXG5cbiAgICAgIHBhdGggPSByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCk7XG5cbiAgICAgIGpzWmlwRW50cnkuYXN5bmMoJ3N0cmluZycpLnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgdHlwZSA9ICdGaWxlJztcblxuT2JqZWN0LmFzc2lnbihGaWxlLCB7XG4gIHR5cGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGU7XG4iXX0=