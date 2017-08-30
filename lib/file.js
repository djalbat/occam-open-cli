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
    removeMasterDirectoryNameFromPath = pathUtilities.removeMasterDirectoryNameFromPath,
    concatenatePaths = path.concatenatePaths,
    topmostDirectoryPathFromPath = path.topmostDirectoryPathFromPath;

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
      var absolutePath = concatenatePaths(projectsDirectoryPath, this.path),
          ///
      topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);

      mkdirp.sync(topmostAbsoluteDirectoryPath);

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
      var absolutePath = concatenatePaths(projectsDirectoryPath, filePath);

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

        _path = removeMasterDirectoryNameFromPath(_path);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJwYXRoVXRpbGl0aWVzIiwicGF0aCIsImZpbGVTeXN0ZW0iLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsInJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIiwiRmlsZSIsImNvbnRlbnQiLCJ0eXBlIiwianNvbiIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFic29sdXRlUGF0aCIsInRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzeW5jIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImZpbGUiLCJmaWxlUGF0aCIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeU5hbWUiLCJuYW1lIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRW50cnlGaWxlIiwiYXN5bmMiLCJ0aGVuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUcsSSxHQUFxQkYsUyxDQUFyQkUsSTtJQUFNQyxVLEdBQWVILFMsQ0FBZkcsVTtJQUNOQyxRLEdBQXdCRCxVLENBQXhCQyxRO0lBQVVDLFMsR0FBY0YsVSxDQUFkRSxTO0lBQ1ZDLGlDLEdBQXNDTCxhLENBQXRDSyxpQztJQUNBQyxnQixHQUFtREwsSSxDQUFuREssZ0I7SUFBa0JDLDRCLEdBQWlDTixJLENBQWpDTSw0Qjs7SUFFcEJDLEk7QUFDSixnQkFBWVAsSUFBWixFQUFrQlEsT0FBbEIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS1IsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS1EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtSLElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLUSxPQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLE9BQU9GLEtBQUtFLElBQWxCO0FBQUEsVUFDTVQsT0FBTyxLQUFLQSxJQURsQjtBQUFBLFVBRU1RLFVBQVUsS0FBS0EsT0FGckI7QUFBQSxVQUdNRSxPQUFPO0FBQ0wsZ0JBQVFELElBREg7QUFFTCxnQkFBUVQsSUFGSDtBQUdMLG1CQUFXUTtBQUhOLE9BSGI7O0FBU0EsYUFBT0UsSUFBUDtBQUNEOzs7eUJBRUlDLHFCLEVBQXVCO0FBQzFCLFVBQU1DLGVBQWVQLGlCQUFpQk0scUJBQWpCLEVBQXdDLEtBQUtYLElBQTdDLENBQXJCO0FBQUEsVUFBMEU7QUFDcEVhLHFDQUErQlAsNkJBQTZCTSxZQUE3QixDQURyQzs7QUFHQWhCLGFBQU9rQixJQUFQLENBQVlELDRCQUFaOztBQUVBVixnQkFBVVMsWUFBVixFQUF3QixLQUFLSixPQUE3QjtBQUNEOzs7NkJBRWVFLEksRUFBTTtBQUNwQixVQUFNSyxXQUFXTCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNTSxjQUFjTixLQUFLLFNBQUwsQ0FEcEI7QUFBQSxVQUVNVixPQUFPZSxRQUZiO0FBQUEsVUFFd0I7QUFDbEJQLGdCQUFVUSxXQUhoQjtBQUFBLFVBRzhCO0FBQ3hCQyxhQUFPLElBQUlWLElBQUosQ0FBU1AsSUFBVCxFQUFlUSxPQUFmLENBSmI7O0FBTUEsYUFBT1MsSUFBUDtBQUNEOzs7aUNBRW1CQyxRLEVBQVVQLHFCLEVBQXVCO0FBQ25ELFVBQU1DLGVBQWVQLGlCQUFpQk0scUJBQWpCLEVBQXdDTyxRQUF4QyxDQUFyQjs7QUFFQSxVQUFJVixnQkFBSjs7QUFFQSxVQUFJO0FBQ0ZBLGtCQUFVTixTQUFTVSxZQUFULENBQVY7QUFDRCxPQUZELENBR0EsT0FBT08sS0FBUCxFQUFjO0FBQ1pYLGtCQUFVLElBQVY7QUFDRDs7QUFFRCxVQUFNUixPQUFPa0IsUUFBYjtBQUFBLFVBQXdCO0FBQ2xCRCxhQUFPLElBQUlWLElBQUosQ0FBU1AsSUFBVCxFQUFlUSxPQUFmLENBRGI7O0FBR0EsYUFBT1MsSUFBUDtBQUNEOzs7bUNBRXFCRyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJSixPQUFPLElBQVg7O0FBRUEsVUFBTUssaUJBQWlCRixXQUFXRyxJQUFsQztBQUFBLFVBQ01DLHNCQUFzQkosV0FBV0ssR0FEdkM7QUFBQSxVQUM0QztBQUN0Q0MsdUJBQWlCLENBQUNGLG1CQUZ4QixDQUgwQyxDQUtJOztBQUU5QyxVQUFJLENBQUNFLGNBQUwsRUFBcUI7QUFDbkJMLGlCQUFTSixJQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSWpCLFFBQU9zQixjQUFYLENBREssQ0FDc0I7O0FBRTNCdEIsZ0JBQU9JLGtDQUFrQ0osS0FBbEMsQ0FBUDs7QUFFQW9CLG1CQUFXTyxLQUFYLENBQWlCLFFBQWpCLEVBQTJCQyxJQUEzQixDQUFnQyxVQUFTcEIsT0FBVCxFQUFrQjtBQUNoRFMsaUJBQU8sSUFBSVYsSUFBSixDQUFTUCxLQUFULEVBQWVRLE9BQWYsQ0FBUDs7QUFFQWEsbUJBQVNKLElBQVQ7QUFDRCxTQUpEO0FBS0Q7QUFDRjs7Ozs7O0FBR0hWLEtBQUtFLElBQUwsR0FBWSxNQUFaOztBQUVBb0IsT0FBT0MsT0FBUCxHQUFpQnZCLElBQWpCIiwiZmlsZSI6ImZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9wYXRoJyk7XG5cbmNvbnN0IHsgcGF0aCwgZmlsZVN5c3RlbSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyByZWFkRmlsZSwgd3JpdGVGaWxlIH0gPSBmaWxlU3lzdGVtLFxuICAgICAgeyByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGggfSA9IHBhdGg7XG5cbmNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGaWxlLnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0aGlzLnBhdGgpLCAgLy8vXG4gICAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcblxuICAgIG1rZGlycC5zeW5jKHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgd3JpdGVGaWxlKGFic29sdXRlUGF0aCwgdGhpcy5jb250ZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgIHBhdGggPSBwYXRoSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aChmaWxlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGZpbGVQYXRoKTtcblxuICAgIGxldCBjb250ZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGggPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGpzWmlwRW50cnlOYW1lID0ganNaaXBFbnRyeS5uYW1lLFxuICAgICAgICAgIGpzWmlwRW50cnlEaXJlY3RvcnkgPSBqc1ppcEVudHJ5LmRpciwgLy8vXG4gICAgICAgICAganNaaXBFbnRyeUZpbGUgPSAhanNaaXBFbnRyeURpcmVjdG9yeTsgIC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RmlsZSkge1xuICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXRoID0ganNaaXBFbnRyeU5hbWU7IC8vL1xuXG4gICAgICBwYXRoID0gcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAgICBqc1ppcEVudHJ5LmFzeW5jKCdzdHJpbmcnKS50aGVuKGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbkZpbGUudHlwZSA9ICdGaWxlJztcblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlO1xuIl19