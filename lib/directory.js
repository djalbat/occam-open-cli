'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var pathUtilities = require('./utilities/path');

var path = necessary.path,
    fileSystem = necessary.fileSystem,
    concatenatePaths = path.concatenatePaths,
    isEntryDirectory = fileSystem.isEntryDirectory,
    pathWithoutTrailingSlashFromPath = pathUtilities.pathWithoutTrailingSlashFromPath,
    removeMasterDirectoryNameFromPath = pathUtilities.removeMasterDirectoryNameFromPath;

var Directory = function () {
  function Directory(path) {
    _classCallCheck(this, Directory);

    this.path = path;
  }

  _createClass(Directory, [{
    key: 'getPath',
    value: function getPath() {
      return this.path;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var type = Directory.type,
          path = this.path,
          json = {
        "type": type,
        "path": path
      };

      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var pathJSON = json["path"],
          path = pathJSON,
          ///
      directory = new Directory(path);

      return directory;
    }
  }, {
    key: 'fromDirectoryPath',
    value: function fromDirectoryPath(directoryPath, projectsDirectoryPath) {
      var directory = null;

      var absolutePath = concatenatePaths(projectsDirectoryPath, directoryPath),
          entryDirectory = isEntryDirectory(absolutePath);

      if (entryDirectory) {
        var _path = directoryPath; ///

        directory = new Directory(_path);
      }

      return directory;
    }
  }, {
    key: 'fromJSZipEntry',
    value: function fromJSZipEntry(jsZipEntry, callback) {
      var directory = null;

      var jsZipEntryDirectory = jsZipEntry.dir; ///

      if (!jsZipEntryDirectory) {
        callback(directory);
      } else {
        var jsZipDirectory = jsZipEntry,
            jsZipDirectoryPath = jsZipDirectory.name; ///

        var _path2 = jsZipDirectoryPath; ///

        _path2 = pathWithoutTrailingSlashFromPath(_path2); ///

        _path2 = removeMasterDirectoryNameFromPath(_path2); ///

        directory = new Directory(_path2);

        callback(directory);
      }
    }
  }]);

  return Directory;
}();

Directory.type = 'Directory';

module.exports = Directory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInBhdGhVdGlsaXRpZXMiLCJwYXRoIiwiZmlsZVN5c3RlbSIsImNvbmNhdGVuYXRlUGF0aHMiLCJpc0VudHJ5RGlyZWN0b3J5IiwicGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoRnJvbVBhdGgiLCJyZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJEaXJlY3RvcnkiLCJ0eXBlIiwianNvbiIsInBhdGhKU09OIiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFic29sdXRlUGF0aCIsImVudHJ5RGlyZWN0b3J5IiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRGlyZWN0b3J5IiwianNaaXBEaXJlY3RvcnlQYXRoIiwibmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLGtCQUFSLENBQXRCOztJQUVRRSxJLEdBQXFCSCxTLENBQXJCRyxJO0lBQU1DLFUsR0FBZUosUyxDQUFmSSxVO0lBQ05DLGdCLEdBQXFCRixJLENBQXJCRSxnQjtJQUNBQyxnQixHQUFxQkYsVSxDQUFyQkUsZ0I7SUFDQUMsZ0MsR0FBd0VMLGEsQ0FBeEVLLGdDO0lBQWtDQyxpQyxHQUFzQ04sYSxDQUF0Q00saUM7O0lBRXBDQyxTO0FBQ0oscUJBQVlOLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTU8sT0FBT0QsVUFBVUMsSUFBdkI7QUFBQSxVQUNNUCxPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTVEsT0FBTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFQO0FBRkgsT0FGYjs7QUFPQSxhQUFPUSxJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1DLFdBQVdELEtBQUssTUFBTCxDQUFqQjtBQUFBLFVBQ01SLE9BQU9TLFFBRGI7QUFBQSxVQUN3QjtBQUNsQkMsa0JBQVksSUFBSUosU0FBSixDQUFjTixJQUFkLENBRmxCOztBQUlBLGFBQU9VLFNBQVA7QUFDRDs7O3NDQUV3QkMsYSxFQUFlQyxxQixFQUF1QjtBQUM3RCxVQUFJRixZQUFZLElBQWhCOztBQUVBLFVBQU1HLGVBQWVYLGlCQUFpQlUscUJBQWpCLEVBQXdDRCxhQUF4QyxDQUFyQjtBQUFBLFVBQ01HLGlCQUFpQlgsaUJBQWlCVSxZQUFqQixDQUR2Qjs7QUFHQSxVQUFJQyxjQUFKLEVBQW9CO0FBQ2xCLFlBQU1kLFFBQU9XLGFBQWIsQ0FEa0IsQ0FDVTs7QUFFNUJELG9CQUFZLElBQUlKLFNBQUosQ0FBY04sS0FBZCxDQUFaO0FBQ0Q7O0FBRUQsYUFBT1UsU0FBUDtBQUNEOzs7bUNBRXFCSyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJTixZQUFZLElBQWhCOztBQUVBLFVBQU1PLHNCQUFzQkYsV0FBV0csR0FBdkMsQ0FIMEMsQ0FHRTs7QUFFNUMsVUFBSSxDQUFDRCxtQkFBTCxFQUEwQjtBQUN4QkQsaUJBQVNOLFNBQVQ7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNUyxpQkFBaUJKLFVBQXZCO0FBQUEsWUFDTUsscUJBQXFCRCxlQUFlRSxJQUQxQyxDQURLLENBRTRDOztBQUVqRCxZQUFJckIsU0FBT29CLGtCQUFYLENBSkssQ0FJMkI7O0FBRWhDcEIsaUJBQU9JLGlDQUFpQ0osTUFBakMsQ0FBUCxDQU5LLENBTTJDOztBQUVoREEsaUJBQU9LLGtDQUFrQ0wsTUFBbEMsQ0FBUCxDQVJLLENBUTJDOztBQUVoRFUsb0JBQVksSUFBSUosU0FBSixDQUFjTixNQUFkLENBQVo7O0FBRUFnQixpQkFBU04sU0FBVDtBQUNEO0FBQ0Y7Ozs7OztBQUdISixVQUFVQyxJQUFWLEdBQWlCLFdBQWpCOztBQUVBZSxPQUFPQyxPQUFQLEdBQWlCakIsU0FBakIiLCJmaWxlIjoiZGlyZWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgcGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3BhdGgnKTtcblxuY29uc3QgeyBwYXRoLCBmaWxlU3lzdGVtIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGgsXG4gICAgICB7IGlzRW50cnlEaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW0sXG4gICAgICB7IHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoLCByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSBEaXJlY3RvcnkudHlwZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgIHBhdGggPSBwYXRoSlNPTiwgIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBjb25zdCBwYXRoID0gZGlyZWN0b3J5UGF0aDsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGpzWmlwRW50cnlEaXJlY3RvcnkgPSBqc1ppcEVudHJ5LmRpcjsgLy8vXG5cbiAgICBpZiAoIWpzWmlwRW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGNhbGxiYWNrKGRpcmVjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGpzWmlwRGlyZWN0b3J5ID0ganNaaXBFbnRyeSxcbiAgICAgICAgICAgIGpzWmlwRGlyZWN0b3J5UGF0aCA9IGpzWmlwRGlyZWN0b3J5Lm5hbWU7ICAvLy9cblxuICAgICAgbGV0IHBhdGggPSBqc1ppcERpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgcGF0aCA9IHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoKHBhdGgpOyAgLy8vXG5cbiAgICAgIHBhdGggPSByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCk7IC8vL1xuXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgICBjYWxsYmFjayhkaXJlY3RvcnkpO1xuICAgIH1cbiAgfVxufVxuXG5EaXJlY3RvcnkudHlwZSA9ICdEaXJlY3RvcnknO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdG9yeTtcbiJdfQ==