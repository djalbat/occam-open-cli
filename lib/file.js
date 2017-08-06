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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJwYXRoVXRpbGl0aWVzIiwicGF0aCIsImZpbGVTeXN0ZW0iLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIiwiRmlsZSIsImNvbnRlbnQiLCJ0eXBlIiwianNvbiIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFic29sdXRlUGF0aCIsInRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzeW5jIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImZpbGUiLCJmaWxlUGF0aCIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeU5hbWUiLCJuYW1lIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiYXN5bmMiLCJ0aGVuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUcsSSxHQUFxQkYsUyxDQUFyQkUsSTtJQUFNQyxVLEdBQWVILFMsQ0FBZkcsVTtJQUNOQyxRLEdBQXdCRCxVLENBQXhCQyxRO0lBQVVDLFMsR0FBY0YsVSxDQUFkRSxTO0lBQ1ZDLGdCLEdBQW1ESixJLENBQW5ESSxnQjtJQUFrQkMsNEIsR0FBaUNMLEksQ0FBakNLLDRCOztJQUVwQkMsSTtBQUNKLGdCQUFZTixJQUFaLEVBQWtCTyxPQUFsQixFQUEyQjtBQUFBOztBQUN6QixTQUFLUCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLTyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS1AsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtPLE9BQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsT0FBT0YsS0FBS0UsSUFBbEI7QUFBQSxVQUNNUixPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTU8sVUFBVSxLQUFLQSxPQUZyQjtBQUFBLFVBR01FLE9BQU87QUFDTCxnQkFBUUQsSUFESDtBQUVMLGdCQUFRUixJQUZIO0FBR0wsbUJBQVdPO0FBSE4sT0FIYjs7QUFTQSxhQUFPRSxJQUFQO0FBQ0Q7Ozt5QkFFSUMscUIsRUFBdUI7QUFDMUIsVUFBTUMsZUFBZVAsaUJBQWlCTSxxQkFBakIsRUFBd0MsS0FBS1YsSUFBN0MsQ0FBckI7QUFBQSxVQUEwRTtBQUNwRVkscUNBQStCUCw2QkFBNkJNLFlBQTdCLENBRHJDOztBQUdBZixhQUFPaUIsSUFBUCxDQUFZRCw0QkFBWjs7QUFFQVQsZ0JBQVVRLFlBQVYsRUFBd0IsS0FBS0osT0FBN0I7QUFDRDs7OzZCQUVlRSxJLEVBQU07QUFDcEIsVUFBTUssV0FBV0wsS0FBSyxNQUFMLENBQWpCO0FBQUEsVUFDTU0sY0FBY04sS0FBSyxTQUFMLENBRHBCO0FBQUEsVUFFTVQsT0FBT2MsUUFGYjtBQUFBLFVBRXdCO0FBQ2xCUCxnQkFBVVEsV0FIaEI7QUFBQSxVQUc4QjtBQUN4QkMsYUFBTyxJQUFJVixJQUFKLENBQVNOLElBQVQsRUFBZU8sT0FBZixDQUpiOztBQU1BLGFBQU9TLElBQVA7QUFDRDs7O2lDQUVtQkMsUSxFQUFVUCxxQixFQUF1QjtBQUNuRCxVQUFNQyxlQUFlUCxpQkFBaUJNLHFCQUFqQixFQUF3Q08sUUFBeEMsQ0FBckI7O0FBRUEsVUFBSVYsZ0JBQUo7O0FBRUEsVUFBSTtBQUNGQSxrQkFBVUwsU0FBU1MsWUFBVCxDQUFWO0FBQ0QsT0FGRCxDQUdBLE9BQU9PLEtBQVAsRUFBYztBQUNaWCxrQkFBVSxJQUFWO0FBQ0Q7O0FBRUQsVUFBTVAsT0FBT2lCLFFBQWI7QUFBQSxVQUF3QjtBQUNsQkQsYUFBTyxJQUFJVixJQUFKLENBQVNOLElBQVQsRUFBZU8sT0FBZixDQURiOztBQUdBLGFBQU9TLElBQVA7QUFDRDs7O21DQUVxQkcsVSxFQUFZQyxRLEVBQVU7QUFDMUMsVUFBSUosT0FBTyxJQUFYOztBQUVBLFVBQU1LLGlCQUFpQkYsV0FBV0csSUFBbEM7QUFBQSxVQUNNQyxzQkFBc0JKLFdBQVdLLEdBRHZDO0FBQUEsVUFDNEM7QUFDdENDLHVCQUFpQixDQUFDRixtQkFGeEIsQ0FIMEMsQ0FLSTs7QUFFOUMsVUFBSSxDQUFDRSxjQUFMLEVBQXFCO0FBQ25CTCxpQkFBU0osSUFBVDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUloQixRQUFPcUIsY0FBWCxDQURLLENBQ3NCOztBQUUzQnJCLGdCQUFPRCxjQUFjMkIsaUNBQWQsQ0FBZ0QxQixLQUFoRCxDQUFQOztBQUVBbUIsbUJBQVdRLEtBQVgsQ0FBaUIsUUFBakIsRUFBMkJDLElBQTNCLENBQWdDLFVBQVNyQixPQUFULEVBQWtCO0FBQ2hEUyxpQkFBTyxJQUFJVixJQUFKLENBQVNOLEtBQVQsRUFBZU8sT0FBZixDQUFQOztBQUVBYSxtQkFBU0osSUFBVDtBQUNELFNBSkQ7QUFLRDtBQUNGOzs7Ozs7QUFHSFYsS0FBS0UsSUFBTCxHQUFZLE1BQVo7O0FBRUFxQixPQUFPQyxPQUFQLEdBQWlCeEIsSUFBakIiLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJyksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgcGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3BhdGgnKTtcblxuY29uc3QgeyBwYXRoLCBmaWxlU3lzdGVtIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHJlYWRGaWxlLCB3cml0ZUZpbGUgfSA9IGZpbGVTeXN0ZW0sXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGggfSA9IHBhdGg7XG5cbmNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGaWxlLnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0aGlzLnBhdGgpLCAgLy8vXG4gICAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcblxuICAgIG1rZGlycC5zeW5jKHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgd3JpdGVGaWxlKGFic29sdXRlUGF0aCwgdGhpcy5jb250ZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgIHBhdGggPSBwYXRoSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aChmaWxlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGZpbGVQYXRoKTtcblxuICAgIGxldCBjb250ZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGggPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGpzWmlwRW50cnlOYW1lID0ganNaaXBFbnRyeS5uYW1lLFxuICAgICAgICAgIGpzWmlwRW50cnlEaXJlY3RvcnkgPSBqc1ppcEVudHJ5LmRpciwgLy8vXG4gICAgICAgICAganNaaXBFbnRyeUZpbGUgPSAhanNaaXBFbnRyeURpcmVjdG9yeTsgIC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RmlsZSkge1xuICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXRoID0ganNaaXBFbnRyeU5hbWU7IC8vL1xuXG4gICAgICBwYXRoID0gcGF0aFV0aWxpdGllcy5yZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCk7XG5cbiAgICAgIGpzWmlwRW50cnkuYXN5bmMoJ3N0cmluZycpLnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuRmlsZS50eXBlID0gJ0ZpbGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGU7XG4iXX0=