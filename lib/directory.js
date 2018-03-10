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
    key: 'fromDirectoryPath',
    value: function fromDirectoryPath(directoryPath, projectsDirectoryPath) {
      var directory = null;

      var absolutePath = concatenatePaths(projectsDirectoryPath, directoryPath),
          entryDirectory = isEntryDirectory(absolutePath);

      if (entryDirectory) {
        var path = directoryPath; ///

        directory = new Directory(path);
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

        var path = jsZipDirectoryPath; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJpc0VudHJ5RGlyZWN0b3J5IiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRGlyZWN0b3J5IiwicGF0aCIsInR5cGUiLCJqc29uIiwiZGlyZWN0b3J5IiwidHlwZUpTT04iLCJwYXRoSlNPTiIsImRpcmVjdG9yeVBhdGgiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJlbnRyeURpcmVjdG9yeSIsImpzWmlwRW50cnkiLCJjYWxsYmFjayIsImpzWmlwRW50cnlEaXJlY3RvcnkiLCJkaXIiLCJqc1ppcERpcmVjdG9yeSIsImpzWmlwRGlyZWN0b3J5UGF0aCIsIm5hbWUiLCJwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aCIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2giLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUUsYSxHQUF1Q0gsUyxDQUF2Q0csYTtJQUFlQyxtQixHQUF3QkosUyxDQUF4QkksbUI7SUFDZkMsZ0IsR0FBcUJGLGEsQ0FBckJFLGdCO0lBQ0FDLGdCLEdBQXFCRixtQixDQUFyQkUsZ0I7SUFDQUMsaUMsR0FBc0NMLGEsQ0FBdENLLGlDOztJQUVGQyxTO0FBQ0oscUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRO0FBQ0QsVUFBRUMsSUFBRixHQUFXRixTQUFYLENBQUVFLElBQUY7QUFBQSxVQUNBRCxJQURBLEdBQ08sS0FBS0EsSUFEWjtBQUFBLFVBRUFFLElBRkEsR0FFTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFEO0FBRkgsT0FGUDs7O0FBT04sYUFBT0UsSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFJQyxZQUFZLElBQWhCOztBQUVNLFVBQUVGLElBQUYsR0FBV0YsU0FBWCxDQUFFRSxJQUFGO0FBQUEsVUFDQUcsUUFEQSxHQUNXRixLQUFLLE1BQUwsQ0FEWDs7O0FBR04sVUFBSUUsYUFBYUgsSUFBakIsRUFBdUI7QUFBRztBQUN4QixZQUFNSSxXQUFXSCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxZQUNNRixPQUFPSyxRQURiLENBRHFCLENBRUc7O0FBRXhCRixvQkFBWSxJQUFJSixTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEOztBQUVELGFBQU9HLFNBQVA7QUFDRDs7O3NDQUV3QkcsYSxFQUFlQyxxQixFQUF1QjtBQUM3RCxVQUFJSixZQUFZLElBQWhCOztBQUVBLFVBQU1LLGVBQWVaLGlCQUFpQlcscUJBQWpCLEVBQXdDRCxhQUF4QyxDQUFyQjtBQUFBLFVBQ01HLGlCQUFpQlosaUJBQWlCVyxZQUFqQixDQUR2Qjs7QUFHQSxVQUFJQyxjQUFKLEVBQW9CO0FBQ2xCLFlBQU1ULE9BQU9NLGFBQWIsQ0FEa0IsQ0FDVTs7QUFFNUJILG9CQUFZLElBQUlKLFNBQUosQ0FBY0MsSUFBZCxDQUFaO0FBQ0Q7O0FBRUQsYUFBT0csU0FBUDtBQUNEOzs7bUNBRXFCTyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJUixZQUFZLElBQWhCOztBQUVBLFVBQU1TLHNCQUFzQkYsV0FBV0csR0FBdkMsQ0FIMEMsQ0FHRTs7QUFFNUMsVUFBSSxDQUFDRCxtQkFBTCxFQUEwQjtBQUN4QkQsaUJBQVNSLFNBQVQ7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNVyxpQkFBaUJKLFVBQXZCO0FBQUEsWUFDTUsscUJBQXFCRCxlQUFlRSxJQUQxQyxDQURLLENBRTRDOztBQUVqRCxZQUFJaEIsT0FBT2Usa0JBQVgsQ0FKSyxDQUkyQjs7QUFFaENmLGVBQU9pQixpQ0FBaUNqQixJQUFqQyxDQUFQLENBTkssQ0FNMkM7O0FBRWhEQSxlQUFPRixrQ0FBa0NFLElBQWxDLENBQVAsQ0FSSyxDQVEyQzs7QUFFaERHLG9CQUFZLElBQUlKLFNBQUosQ0FBY0MsSUFBZCxDQUFaOztBQUVBVyxpQkFBU1IsU0FBVDtBQUNEO0FBQ0Y7Ozs7OztBQUdILElBQU1GLE9BQU8sV0FBYjs7QUFFQWlCLE9BQU9DLE1BQVAsQ0FBY3BCLFNBQWQsRUFBeUI7QUFDdkJFLFFBQU1BO0FBRGlCLENBQXpCOztBQUlBbUIsT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCOztBQUVBLFNBQVNrQixnQ0FBVCxDQUEwQ2pCLElBQTFDLEVBQWdEO0FBQzlDLE1BQU1zQiwyQkFBMkJ0QixLQUFLdUIsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBakM7O0FBRUEsU0FBT0Qsd0JBQVA7QUFDRCIsImZpbGUiOiJkaXJlY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBuYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0gRGlyZWN0b3J5LFxuICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTjsgIC8vL1xuXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG5cbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBkaXJlY3RvcnlQYXRoOyAvLy9cblxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QganNaaXBFbnRyeURpcmVjdG9yeSA9IGpzWmlwRW50cnkuZGlyOyAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeURpcmVjdG9yeSkge1xuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QganNaaXBEaXJlY3RvcnkgPSBqc1ppcEVudHJ5LFxuICAgICAgICAgICAganNaaXBEaXJlY3RvcnlQYXRoID0ganNaaXBEaXJlY3RvcnkubmFtZTsgIC8vL1xuXG4gICAgICBsZXQgcGF0aCA9IGpzWmlwRGlyZWN0b3J5UGF0aDsgIC8vL1xuXG4gICAgICBwYXRoID0gcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoRnJvbVBhdGgocGF0aCk7ICAvLy9cblxuICAgICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG5cbiAgICAgIGNhbGxiYWNrKGRpcmVjdG9yeSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnRGlyZWN0b3J5JztcblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnksIHtcbiAgdHlwZTogdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0b3J5O1xuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcblxuICByZXR1cm4gcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoO1xufVxuXG4iXX0=