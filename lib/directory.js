'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var nameUtilities = require('./utilities/name');

var pathUtilities = necessary.pathUtilities,
    fileSystemUtilities = necessary.fileSystemUtilities,
    concatenatePaths = pathUtilities.concatenatePaths,
    isEntryDirectory = fileSystemUtilities.isEntryDirectory,
    removeMasterDirectoryNameFromPath = nameUtilities.removeMasterDirectoryNameFromPath;

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
    key: 'isFile',
    value: function isFile() {
      var file = false;

      return file;
    }
  }, {
    key: 'isDirectory',
    value: function isDirectory() {
      var directory = true;

      return directory;
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
      var directory = null;

      if (json !== null) {
        var _type = Directory.type,
            typeJSON = json["type"];


        if (typeJSON === _type) {
          ///
          var pathJSON = json["path"],
              path = pathJSON; ///

          directory = new Directory(path);
        }
      }

      return directory;
    }
  }, {
    key: 'fromPath',
    value: function fromPath(path, projectsDirectoryPath) {
      var directory = null;

      try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path),
            entryDirectory = isEntryDirectory(absolutePath);

        if (entryDirectory) {
          directory = new Directory(path);
        }
      } catch (error) {
        ///
      }

      return directory;
    }
  }, {
    key: 'fromJSZipEntry',
    value: function fromJSZipEntry(jsZipEntry, callback) {
      var directory = null;

      var dir = jsZipEntry.dir,
          jsZipEntryDirectory = dir; ///

      if (!jsZipEntryDirectory) {
        callback(directory);

        return;
      }

      var jsZipDirectory = jsZipEntry,
          name = jsZipDirectory.name;

      var path = name; ///

      path = pathWithoutTrailingSlashFromPath(path); ///

      path = removeMasterDirectoryNameFromPath(path); ///

      directory = new Directory(path);

      callback(directory);
    }
  }]);

  return Directory;
}();

var type = 'Directory';

Object.assign(Directory, {
  type: type
});

module.exports = Directory;

function pathWithoutTrailingSlashFromPath(path) {
  var pathWithoutTrailingSlash = path.replace(/\/$/, '');

  return pathWithoutTrailingSlash;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJpc0VudHJ5RGlyZWN0b3J5IiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRGlyZWN0b3J5IiwicGF0aCIsImZpbGUiLCJkaXJlY3RvcnkiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJlbnRyeURpcmVjdG9yeSIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwiZGlyIiwianNaaXBFbnRyeURpcmVjdG9yeSIsIm5hbWUiLCJqc1ppcERpcmVjdG9yeSIsInBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLGtCQUFSLENBQXRCOztJQUVRRSxhLEdBQXVDSCxTLENBQXZDRyxhO0lBQWVDLG1CLEdBQXdCSixTLENBQXhCSSxtQjtJQUNmQyxnQixHQUFxQkYsYSxDQUFyQkUsZ0I7SUFDQUMsZ0IsR0FBcUJGLG1CLENBQXJCRSxnQjtJQUNBQyxpQyxHQUFzQ0wsYSxDQUF0Q0ssaUM7O0lBRUZDLFM7QUFDSixxQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxPQUFPLEtBQWI7O0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQyxZQUFZLElBQWxCOztBQUVBLGFBQU9BLFNBQVA7QUFDRDs7OzZCQUVRO0FBQ0QsVUFBRUMsSUFBRixHQUFXSixTQUFYLENBQUVJLElBQUY7QUFBQSxVQUNBSCxJQURBLEdBQ08sS0FBS0EsSUFEWjtBQUFBLFVBRUFJLElBRkEsR0FFTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFIO0FBRkgsT0FGUDs7O0FBT04sYUFBT0ksSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFJRixZQUFZLElBQWhCOztBQUVBLFVBQUlFLFNBQVMsSUFBYixFQUFtQjtBQUNYLFlBQUVELEtBQUYsR0FBV0osU0FBWCxDQUFFSSxJQUFGO0FBQUEsWUFDQUUsUUFEQSxHQUNXRCxLQUFLLE1BQUwsQ0FEWDs7O0FBR04sWUFBSUMsYUFBYUYsS0FBakIsRUFBdUI7QUFBRztBQUN4QixjQUFNRyxXQUFXRixLQUFLLE1BQUwsQ0FBakI7QUFBQSxjQUNNSixPQUFPTSxRQURiLENBRHFCLENBRUc7O0FBRXhCSixzQkFBWSxJQUFJSCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0UsU0FBUDtBQUNEOzs7NkJBRWVGLEksRUFBTU8scUIsRUFBdUI7QUFDM0MsVUFBSUwsWUFBWSxJQUFoQjs7QUFFQSxVQUFJO0FBQ0YsWUFBTU0sZUFBZVosaUJBQWlCVyxxQkFBakIsRUFBd0NQLElBQXhDLENBQXJCO0FBQUEsWUFDTVMsaUJBQWlCWixpQkFBaUJXLFlBQWpCLENBRHZCOztBQUdBLFlBQUlDLGNBQUosRUFBb0I7QUFDbEJQLHNCQUFZLElBQUlILFNBQUosQ0FBY0MsSUFBZCxDQUFaO0FBQ0Q7QUFDRixPQVBELENBT0UsT0FBT1UsS0FBUCxFQUFjO0FBQ2Q7QUFDRDs7QUFFRCxhQUFPUixTQUFQO0FBQ0Q7OzttQ0FFcUJTLFUsRUFBWUMsUSxFQUFVO0FBQzFDLFVBQUlWLFlBQVksSUFBaEI7O0FBRU0sVUFBRVcsR0FBRixHQUFVRixVQUFWLENBQUVFLEdBQUY7QUFBQSxVQUNBQyxtQkFEQSxHQUNzQkQsR0FEdEIsQ0FIb0MsQ0FJVDs7QUFFakMsVUFBSSxDQUFDQyxtQkFBTCxFQUEwQjtBQUN4QkYsaUJBQVNWLFNBQVQ7O0FBRUE7QUFDRDs7QUFFSywyQkFBaUJTLFVBQWpCO0FBQUEsVUFDRUksSUFERixHQUNXQyxjQURYLENBQ0VELElBREY7O0FBR04sVUFBSWYsT0FBT2UsSUFBWCxDQWYwQyxDQWV4Qjs7QUFFbEJmLGFBQU9pQixpQ0FBaUNqQixJQUFqQyxDQUFQLENBakIwQyxDQWlCTTs7QUFFaERBLGFBQU9GLGtDQUFrQ0UsSUFBbEMsQ0FBUCxDQW5CMEMsQ0FtQk07O0FBRWhERSxrQkFBWSxJQUFJSCxTQUFKLENBQWNDLElBQWQsQ0FBWjs7QUFFQVksZUFBU1YsU0FBVDtBQUNEOzs7Ozs7QUFHSCxJQUFNQyxPQUFPLFdBQWI7O0FBRUFlLE9BQU9DLE1BQVAsQ0FBY3BCLFNBQWQsRUFBeUI7QUFDdkJJO0FBRHVCLENBQXpCOztBQUlBaUIsT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCOztBQUVBLFNBQVNrQixnQ0FBVCxDQUEwQ2pCLElBQTFDLEVBQWdEO0FBQzlDLE1BQU1zQiwyQkFBMkJ0QixLQUFLdUIsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBakM7O0FBRUEsU0FBT0Qsd0JBQVA7QUFDRCIsImZpbGUiOiJkaXJlY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBuYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IHRydWU7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRGlyZWN0b3J5LFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiB0eXBlLFxuICAgICAgICAgICAgXCJwYXRoXCI6IHBhdGhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gRGlyZWN0b3J5LFxuICAgICAgICAgICAgdHlwZUpTT04gPSBqc29uW1widHlwZVwiXTtcblxuICAgICAgaWYgKHR5cGVKU09OID09PSB0eXBlKSB7ICAvLy9cbiAgICAgICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICAgICAgcGF0aCA9IHBhdGhKU09OOyAgLy8vXG5cbiAgICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoKSxcbiAgICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHsgZGlyIH0gPSBqc1ppcEVudHJ5LFxuICAgICAgICAgIGpzWmlwRW50cnlEaXJlY3RvcnkgPSBkaXI7IC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBjYWxsYmFjayhkaXJlY3RvcnkpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganNaaXBEaXJlY3RvcnkgPSBqc1ppcEVudHJ5LCAgLy8vXG4gICAgICAgICAgeyBuYW1lIH0gPSBqc1ppcERpcmVjdG9yeTtcblxuICAgIGxldCBwYXRoID0gbmFtZTsgIC8vL1xuXG4gICAgcGF0aCA9IHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoKHBhdGgpOyAgLy8vXG5cbiAgICBwYXRoID0gcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpOyAvLy9cblxuICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG5cbiAgICBjYWxsYmFjayhkaXJlY3RvcnkpO1xuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnRGlyZWN0b3J5JztcblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnksIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0b3J5O1xuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcblxuICByZXR1cm4gcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoO1xufVxuXG4iXX0=