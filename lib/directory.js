"use strict";

var _necessary = require("necessary");

var _name = require("./utilities/name");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var concatenatePaths = _necessary.pathUtilities.concatenatePaths,
    isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory;

var Directory = /*#__PURE__*/function () {
  function Directory(path) {
    _classCallCheck(this, Directory);

    this.path = path;
  }

  _createClass(Directory, [{
    key: "getPath",
    value: function getPath() {
      return this.path;
    }
  }, {
    key: "isFile",
    value: function isFile() {
      var file = false;
      return file;
    }
  }, {
    key: "isDirectory",
    value: function isDirectory() {
      var directory = true;
      return directory;
    }
  }, {
    key: "toJSON",
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
    key: "fromJSON",
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
    key: "fromPath",
    value: function fromPath(path, projectsDirectoryPath) {
      var directory = null;

      try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path),
            entryDirectory = isEntryDirectory(absolutePath);

        if (entryDirectory) {
          directory = new Directory(path);
        }
      } catch (error) {///
      }

      return directory;
    }
  }, {
    key: "fromJSZipEntry",
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

      path = (0, _name.removeMasterDirectoryNameFromPath)(path); ///

      directory = new Directory(path);
      callback(directory);
    }
  }]);

  return Directory;
}();

var type = "Directory";
Object.assign(Directory, {
  type: type
});
module.exports = Directory;

function pathWithoutTrailingSlashFromPath(path) {
  var pathWithoutTrailingSlash = path.replace(/\/$/, "");
  return pathWithoutTrailingSlash;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yeS5qcyJdLCJuYW1lcyI6WyJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImlzRW50cnlEaXJlY3RvcnkiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiRGlyZWN0b3J5IiwicGF0aCIsImZpbGUiLCJkaXJlY3RvcnkiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJlbnRyeURpcmVjdG9yeSIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwiZGlyIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImpzWmlwRGlyZWN0b3J5IiwibmFtZSIsInBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsInBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOzs7Ozs7OztBQUVNLElBQUVBLGdCQUFGLEdBQXVCQyx3QkFBdkIsQ0FBRUQsZ0JBQUY7QUFBQSxJQUNFRSxnQkFERixHQUN1QkMsOEJBRHZCLENBQ0VELGdCQURGOztJQUdBRSxTO0FBQ0oscUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsSUFBSSxHQUFHLEtBQWI7QUFFQSxhQUFPQSxJQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1DLFNBQVMsR0FBRyxJQUFsQjtBQUVBLGFBQU9BLFNBQVA7QUFDRDs7OzZCQUVRO0FBQ0QsVUFBRUMsSUFBRixHQUFXSixTQUFYLENBQUVJLElBQUY7QUFBQSxVQUNBSCxJQURBLEdBQ08sS0FBS0EsSUFEWjtBQUFBLFVBRUFJLElBRkEsR0FFTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFIO0FBRkgsT0FGUDtBQU9OLGFBQU9JLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBSUYsU0FBUyxHQUFHLElBQWhCOztBQUVBLFVBQUlFLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ1gsWUFBRUQsS0FBRixHQUFXSixTQUFYLENBQUVJLElBQUY7QUFBQSxZQUNBRSxRQURBLEdBQ1dELElBQUksQ0FBQyxNQUFELENBRGY7O0FBR04sWUFBSUMsUUFBUSxLQUFLRixLQUFqQixFQUF1QjtBQUFHO0FBQ3hCLGNBQU1HLFFBQVEsR0FBR0YsSUFBSSxDQUFDLE1BQUQsQ0FBckI7QUFBQSxjQUNNSixJQUFJLEdBQUdNLFFBRGIsQ0FEcUIsQ0FFRzs7QUFFeEJKLFVBQUFBLFNBQVMsR0FBRyxJQUFJSCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0UsU0FBUDtBQUNEOzs7NkJBRWVGLEksRUFBTU8scUIsRUFBdUI7QUFDM0MsVUFBSUwsU0FBUyxHQUFHLElBQWhCOztBQUVBLFVBQUk7QUFDRixZQUFNTSxZQUFZLEdBQUdiLGdCQUFnQixDQUFDWSxxQkFBRCxFQUF3QlAsSUFBeEIsQ0FBckM7QUFBQSxZQUNNUyxjQUFjLEdBQUdaLGdCQUFnQixDQUFDVyxZQUFELENBRHZDOztBQUdBLFlBQUlDLGNBQUosRUFBb0I7QUFDbEJQLFVBQUFBLFNBQVMsR0FBRyxJQUFJSCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEO0FBQ0YsT0FQRCxDQU9FLE9BQU9VLEtBQVAsRUFBYyxDQUNkO0FBQ0Q7O0FBRUQsYUFBT1IsU0FBUDtBQUNEOzs7bUNBRXFCUyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJVixTQUFTLEdBQUcsSUFBaEI7QUFFTSxVQUFFVyxHQUFGLEdBQVVGLFVBQVYsQ0FBRUUsR0FBRjtBQUFBLFVBQ0FDLG1CQURBLEdBQ3NCRCxHQUR0QixDQUhvQyxDQUlUOztBQUVqQyxVQUFJLENBQUNDLG1CQUFMLEVBQTBCO0FBQ3hCRixRQUFBQSxRQUFRLENBQUNWLFNBQUQsQ0FBUjtBQUVBO0FBQ0Q7O0FBRUssVUFBQWEsY0FBYyxHQUFHSixVQUFqQjtBQUFBLFVBQ0VLLElBREYsR0FDV0QsY0FEWCxDQUNFQyxJQURGO0FBR04sVUFBSWhCLElBQUksR0FBR2dCLElBQVgsQ0FmMEMsQ0FleEI7O0FBRWxCaEIsTUFBQUEsSUFBSSxHQUFHaUIsZ0NBQWdDLENBQUNqQixJQUFELENBQXZDLENBakIwQyxDQWlCTTs7QUFFaERBLE1BQUFBLElBQUksR0FBRyw2Q0FBa0NBLElBQWxDLENBQVAsQ0FuQjBDLENBbUJNOztBQUVoREUsTUFBQUEsU0FBUyxHQUFHLElBQUlILFNBQUosQ0FBY0MsSUFBZCxDQUFaO0FBRUFZLE1BQUFBLFFBQVEsQ0FBQ1YsU0FBRCxDQUFSO0FBQ0Q7Ozs7OztBQUdILElBQU1DLElBQUksR0FBRyxXQUFiO0FBRUFlLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjcEIsU0FBZCxFQUF5QjtBQUN2QkksRUFBQUEsSUFBSSxFQUFKQTtBQUR1QixDQUF6QjtBQUlBaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEIsU0FBakI7O0FBRUEsU0FBU2tCLGdDQUFULENBQTBDakIsSUFBMUMsRUFBZ0Q7QUFDOUMsTUFBTXNCLHdCQUF3QixHQUFHdEIsSUFBSSxDQUFDdUIsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBakM7QUFFQSxTQUFPRCx3QkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuY2xhc3MgRGlyZWN0b3J5IHtcbiAgY29uc3RydWN0b3IocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICAgIGlmICh0eXBlSlNPTiA9PT0gdHlwZSkgeyAgLy8vXG4gICAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTjsgIC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXG4gICAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB7IGRpciB9ID0ganNaaXBFbnRyeSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0gZGlyOyAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeURpcmVjdG9yeSkge1xuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGpzWmlwRGlyZWN0b3J5ID0ganNaaXBFbnRyeSwgIC8vL1xuICAgICAgICAgIHsgbmFtZSB9ID0ganNaaXBEaXJlY3Rvcnk7XG5cbiAgICBsZXQgcGF0aCA9IG5hbWU7ICAvLy9cblxuICAgIHBhdGggPSBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKTsgIC8vL1xuXG4gICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTsgLy8vXG5cbiAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgfVxufVxuXG5jb25zdCB0eXBlID0gXCJEaXJlY3RvcnlcIjtcblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnksIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0b3J5O1xuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuXG4gIHJldHVybiBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2g7XG59XG4iXX0=