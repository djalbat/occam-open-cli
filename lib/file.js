'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mkdirp = require('mkdirp'),
    necessary = require('necessary');

var pathUtilities = require('./utilities/path');

var path = necessary.path,
    fileSystem = necessary.fileSystem,
    readFile = fileSystem.readFile,
    writeFile = fileSystem.writeFile,
    combinePaths = path.combinePaths,
    directoryPathFromPath = path.directoryPathFromPath;

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
  }, {
    key: 'save',
    value: function save(projectsDirectoryPath) {
      var absolutePath = combinePaths(projectsDirectoryPath, this.path),
          absoluteDirectoryPath = directoryPathFromPath(absolutePath);

      mkdirp.sync(absoluteDirectoryPath);

      writeFile(absolutePath, this.content);
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var pathJSON = json["path"],
          contentJSON = json["content"],
          path = pathJSON,
          ///
      content = contentJSON,
          ///
      file = new File(path, content);

      return file;
    }
  }, {
    key: 'fromFilePath',
    value: function fromFilePath(filePath, projectsDirectoryPath) {
      var absolutePath = combinePaths(projectsDirectoryPath, filePath);

      var content = void 0;

      try {
        content = readFile(absolutePath);
      } catch (error) {
        content = null;
      }

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
        var _path = jsZipEntryName; ///

        _path = pathUtilities.removeMasterDirectoryNameFromPath(_path);

        jsZipEntry.async('string').then(function (content) {
          file = new File(_path, content);

          callback(file);
        });
      }
    }
  }]);

  return File;
}();

File.type = 'File';

module.exports = File;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJwYXRoVXRpbGl0aWVzIiwicGF0aCIsImZpbGVTeXN0ZW0iLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImNvbWJpbmVQYXRocyIsImRpcmVjdG9yeVBhdGhGcm9tUGF0aCIsIkZpbGUiLCJjb250ZW50IiwidHlwZSIsImpzb24iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzeW5jIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImZpbGUiLCJmaWxlUGF0aCIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeU5hbWUiLCJuYW1lIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiYXN5bmMiLCJ0aGVuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUcsSSxHQUFxQkYsUyxDQUFyQkUsSTtJQUFNQyxVLEdBQWVILFMsQ0FBZkcsVTtJQUNOQyxRLEdBQXdCRCxVLENBQXhCQyxRO0lBQVVDLFMsR0FBY0YsVSxDQUFkRSxTO0lBQ1ZDLFksR0FBd0NKLEksQ0FBeENJLFk7SUFBY0MscUIsR0FBMEJMLEksQ0FBMUJLLHFCOztJQUVoQkMsSTtBQUNKLGdCQUFZTixJQUFaLEVBQWtCTyxPQUFsQixFQUEyQjtBQUFBOztBQUN6QixTQUFLUCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLTyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS1AsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtPLE9BQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsT0FBT0YsS0FBS0UsSUFBbEI7QUFBQSxVQUNNUixPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTU8sVUFBVSxLQUFLQSxPQUZyQjtBQUFBLFVBR01FLE9BQU87QUFDTCxnQkFBUUQsSUFESDtBQUVMLGdCQUFRUixJQUZIO0FBR0wsbUJBQVdPO0FBSE4sT0FIYjs7QUFTQSxhQUFPRSxJQUFQO0FBQ0Q7Ozt5QkFFSUMscUIsRUFBdUI7QUFDMUIsVUFBTUMsZUFBZVAsYUFBYU0scUJBQWIsRUFBb0MsS0FBS1YsSUFBekMsQ0FBckI7QUFBQSxVQUNNWSx3QkFBd0JQLHNCQUFzQk0sWUFBdEIsQ0FEOUI7O0FBR0FmLGFBQU9pQixJQUFQLENBQVlELHFCQUFaOztBQUVBVCxnQkFBVVEsWUFBVixFQUF3QixLQUFLSixPQUE3QjtBQUNEOzs7NkJBRWVFLEksRUFBTTtBQUNwQixVQUFNSyxXQUFXTCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNTSxjQUFjTixLQUFLLFNBQUwsQ0FEcEI7QUFBQSxVQUVNVCxPQUFPYyxRQUZiO0FBQUEsVUFFd0I7QUFDbEJQLGdCQUFVUSxXQUhoQjtBQUFBLFVBRzhCO0FBQ3hCQyxhQUFPLElBQUlWLElBQUosQ0FBU04sSUFBVCxFQUFlTyxPQUFmLENBSmI7O0FBTUEsYUFBT1MsSUFBUDtBQUNEOzs7aUNBRW1CQyxRLEVBQVVQLHFCLEVBQXVCO0FBQ25ELFVBQU1DLGVBQWVQLGFBQWFNLHFCQUFiLEVBQW9DTyxRQUFwQyxDQUFyQjs7QUFFQSxVQUFJVixnQkFBSjs7QUFFQSxVQUFJO0FBQ0ZBLGtCQUFVTCxTQUFTUyxZQUFULENBQVY7QUFDRCxPQUZELENBR0EsT0FBT08sS0FBUCxFQUFjO0FBQ1pYLGtCQUFVLElBQVY7QUFDRDs7QUFFRCxVQUFNUCxPQUFPaUIsUUFBYjtBQUFBLFVBQXdCO0FBQ2xCRCxhQUFPLElBQUlWLElBQUosQ0FBU04sSUFBVCxFQUFlTyxPQUFmLENBRGI7O0FBR0EsYUFBT1MsSUFBUDtBQUNEOzs7bUNBRXFCRyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJSixPQUFPLElBQVg7O0FBRUEsVUFBTUssaUJBQWlCRixXQUFXRyxJQUFsQztBQUFBLFVBQ01DLHNCQUFzQkosV0FBV0ssR0FEdkM7QUFBQSxVQUM0QztBQUN0Q0MsdUJBQWlCLENBQUNGLG1CQUZ4QixDQUgwQyxDQUtJOztBQUU5QyxVQUFJLENBQUNFLGNBQUwsRUFBcUI7QUFDbkJMLGlCQUFTSixJQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSWhCLFFBQU9xQixjQUFYLENBREssQ0FDc0I7O0FBRTNCckIsZ0JBQU9ELGNBQWMyQixpQ0FBZCxDQUFnRDFCLEtBQWhELENBQVA7O0FBRUFtQixtQkFBV1EsS0FBWCxDQUFpQixRQUFqQixFQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBU3JCLE9BQVQsRUFBa0I7QUFDaERTLGlCQUFPLElBQUlWLElBQUosQ0FBU04sS0FBVCxFQUFlTyxPQUFmLENBQVA7O0FBRUFhLG1CQUFTSixJQUFUO0FBQ0QsU0FKRDtBQUtEO0FBQ0Y7Ozs7OztBQUdIVixLQUFLRSxJQUFMLEdBQVksTUFBWjs7QUFFQXFCLE9BQU9DLE9BQVAsR0FBaUJ4QixJQUFqQiIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBwYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcGF0aCcpO1xuXG5jb25zdCB7IHBhdGgsIGZpbGVTeXN0ZW0gfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbSxcbiAgICAgIHsgY29tYmluZVBhdGhzLCBkaXJlY3RvcnlQYXRoRnJvbVBhdGggfSA9IHBhdGg7XG5cbmNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGaWxlLnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHRoaXMucGF0aCksXG4gICAgICAgICAgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBta2RpcnAuc3luYyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgd3JpdGVGaWxlKGFic29sdXRlUGF0aCwgdGhpcy5jb250ZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgIHBhdGggPSBwYXRoSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aChmaWxlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZmlsZVBhdGgpO1xuXG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICB0cnkge1xuICAgICAgY29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUGF0aCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aCA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QganNaaXBFbnRyeU5hbWUgPSBqc1ppcEVudHJ5Lm5hbWUsXG4gICAgICAgICAganNaaXBFbnRyeURpcmVjdG9yeSA9IGpzWmlwRW50cnkuZGlyLCAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5RmlsZSA9ICFqc1ppcEVudHJ5RGlyZWN0b3J5OyAgLy8vXG5cbiAgICBpZiAoIWpzWmlwRW50cnlGaWxlKSB7XG4gICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBhdGggPSBqc1ppcEVudHJ5TmFtZTsgLy8vXG5cbiAgICAgIHBhdGggPSBwYXRoVXRpbGl0aWVzLnJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAganNaaXBFbnRyeS5hc3luYygnc3RyaW5nJykudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5GaWxlLnR5cGUgPSAnRmlsZSc7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcbiJdfQ==