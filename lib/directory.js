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

      var type = Directory.type,
          typeJSON = json["type"];


      if (typeJSON === type) {
        ///
        var pathJSON = json["path"],
            path = pathJSON; ///

        directory = new Directory(path);
      }

      return directory;
    }
  }, {
    key: 'fromPath',
    value: function fromPath(path, projectsDirectoryPath) {
      var directory = null;

      var absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryDirectory = isEntryDirectory(absolutePath);

      if (entryDirectory) {
        directory = new Directory(path);
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
      } else {
        var jsZipDirectory = jsZipEntry,
            name = jsZipDirectory.name; ///

        var path = name; ///

        path = pathWithoutTrailingSlashFromPath(path); ///

        path = removeMasterDirectoryNameFromPath(path); ///

        directory = new Directory(path);

        callback(directory);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJpc0VudHJ5RGlyZWN0b3J5IiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRGlyZWN0b3J5IiwicGF0aCIsInR5cGUiLCJqc29uIiwiZGlyZWN0b3J5IiwidHlwZUpTT04iLCJwYXRoSlNPTiIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFic29sdXRlUGF0aCIsImVudHJ5RGlyZWN0b3J5IiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwiZGlyIiwianNaaXBFbnRyeURpcmVjdG9yeSIsIm5hbWUiLCJqc1ppcERpcmVjdG9yeSIsInBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLGtCQUFSLENBQXRCOztJQUVRRSxhLEdBQXVDSCxTLENBQXZDRyxhO0lBQWVDLG1CLEdBQXdCSixTLENBQXhCSSxtQjtJQUNmQyxnQixHQUFxQkYsYSxDQUFyQkUsZ0I7SUFDQUMsZ0IsR0FBcUJGLG1CLENBQXJCRSxnQjtJQUNBQyxpQyxHQUFzQ0wsYSxDQUF0Q0ssaUM7O0lBRUZDLFM7QUFDSixxQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7NkJBRVE7QUFDRCxVQUFFQyxJQUFGLEdBQVdGLFNBQVgsQ0FBRUUsSUFBRjtBQUFBLFVBQ0FELElBREEsR0FDTyxLQUFLQSxJQURaO0FBQUEsVUFFQUUsSUFGQSxHQUVPO0FBQ0wsZ0JBQVFELElBREg7QUFFTCxnQkFBUUQ7QUFGSCxPQUZQOzs7QUFPTixhQUFPRSxJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQUlDLFlBQVksSUFBaEI7O0FBRU0sVUFBRUYsSUFBRixHQUFXRixTQUFYLENBQUVFLElBQUY7QUFBQSxVQUNBRyxRQURBLEdBQ1dGLEtBQUssTUFBTCxDQURYOzs7QUFHTixVQUFJRSxhQUFhSCxJQUFqQixFQUF1QjtBQUFHO0FBQ3hCLFlBQU1JLFdBQVdILEtBQUssTUFBTCxDQUFqQjtBQUFBLFlBQ01GLE9BQU9LLFFBRGIsQ0FEcUIsQ0FFRzs7QUFFeEJGLG9CQUFZLElBQUlKLFNBQUosQ0FBY0MsSUFBZCxDQUFaO0FBQ0Q7O0FBRUQsYUFBT0csU0FBUDtBQUNEOzs7NkJBRWVILEksRUFBTU0scUIsRUFBdUI7QUFDM0MsVUFBSUgsWUFBWSxJQUFoQjs7QUFFQSxVQUFNSSxlQUFlWCxpQkFBaUJVLHFCQUFqQixFQUF3Q04sSUFBeEMsQ0FBckI7QUFBQSxVQUNNUSxpQkFBaUJYLGlCQUFpQlUsWUFBakIsQ0FEdkI7O0FBR0EsVUFBSUMsY0FBSixFQUFvQjtBQUNsQkwsb0JBQVksSUFBSUosU0FBSixDQUFjQyxJQUFkLENBQVo7QUFDRDs7QUFFRCxhQUFPRyxTQUFQO0FBQ0Q7OzttQ0FFcUJNLFUsRUFBWUMsUSxFQUFVO0FBQzFDLFVBQUlQLFlBQVksSUFBaEI7O0FBRU0sVUFBRVEsR0FBRixHQUFVRixVQUFWLENBQUVFLEdBQUY7QUFBQSxVQUNBQyxtQkFEQSxHQUNzQkQsR0FEdEIsQ0FIb0MsQ0FJVDs7QUFFakMsVUFBSSxDQUFDQyxtQkFBTCxFQUEwQjtBQUN4QkYsaUJBQVNQLFNBQVQ7QUFDRCxPQUZELE1BRU87QUFDQyw2QkFBaUJNLFVBQWpCO0FBQUEsWUFDRUksSUFERixHQUNXQyxjQURYLENBQ0VELElBREYsQ0FERCxDQUU2Qjs7QUFFbEMsWUFBSWIsT0FBT2EsSUFBWCxDQUpLLENBSWE7O0FBRWxCYixlQUFPZSxpQ0FBaUNmLElBQWpDLENBQVAsQ0FOSyxDQU0yQzs7QUFFaERBLGVBQU9GLGtDQUFrQ0UsSUFBbEMsQ0FBUCxDQVJLLENBUTJDOztBQUVoREcsb0JBQVksSUFBSUosU0FBSixDQUFjQyxJQUFkLENBQVo7O0FBRUFVLGlCQUFTUCxTQUFUO0FBQ0Q7QUFDRjs7Ozs7O0FBR0gsSUFBTUYsT0FBTyxXQUFiOztBQUVBZSxPQUFPQyxNQUFQLENBQWNsQixTQUFkLEVBQXlCO0FBQ3ZCRSxRQUFNQTtBQURpQixDQUF6Qjs7QUFJQWlCLE9BQU9DLE9BQVAsR0FBaUJwQixTQUFqQjs7QUFFQSxTQUFTZ0IsZ0NBQVQsQ0FBMENmLElBQTFDLEVBQWdEO0FBQzlDLE1BQU1vQiwyQkFBMkJwQixLQUFLcUIsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBakM7O0FBRUEsU0FBT0Qsd0JBQVA7QUFDRCIsImZpbGUiOiJkaXJlY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBuYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0gRGlyZWN0b3J5LFxuICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTjsgIC8vL1xuXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG5cbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHsgZGlyIH0gPSBqc1ppcEVudHJ5LFxuICAgICAgICAgIGpzWmlwRW50cnlEaXJlY3RvcnkgPSBkaXI7IC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBjYWxsYmFjayhkaXJlY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBqc1ppcERpcmVjdG9yeSA9IGpzWmlwRW50cnksXG4gICAgICAgICAgICB7IG5hbWUgfSA9IGpzWmlwRGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgIGxldCBwYXRoID0gbmFtZTsgIC8vL1xuXG4gICAgICBwYXRoID0gcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoRnJvbVBhdGgocGF0aCk7ICAvLy9cblxuICAgICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG5cbiAgICAgIGNhbGxiYWNrKGRpcmVjdG9yeSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnRGlyZWN0b3J5JztcblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnksIHtcbiAgdHlwZTogdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0b3J5O1xuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcblxuICByZXR1cm4gcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoO1xufVxuXG4iXX0=