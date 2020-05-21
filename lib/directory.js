"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _name = require("./utilities/name");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        var type = Directory.type,
            typeJSON = json["type"];

        if (typeJSON === type) {
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

exports["default"] = Directory;

_defineProperty(Directory, "type", "Directory");

function pathWithoutTrailingSlashFromPath(path) {
  var pathWithoutTrailingSlash = path.replace(/\/$/, "");
  return pathWithoutTrailingSlash;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yeS5qcyJdLCJuYW1lcyI6WyJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImlzRW50cnlEaXJlY3RvcnkiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiRGlyZWN0b3J5IiwicGF0aCIsImZpbGUiLCJkaXJlY3RvcnkiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJlbnRyeURpcmVjdG9yeSIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwiZGlyIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImpzWmlwRGlyZWN0b3J5IiwibmFtZSIsInBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaEZyb21QYXRoIiwicGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQUVNLElBQUVBLGdCQUFGLEdBQXVCQyx3QkFBdkIsQ0FBRUQsZ0JBQUY7QUFBQSxJQUNFRSxnQkFERixHQUN1QkMsOEJBRHZCLENBQ0VELGdCQURGOztJQUdlRSxTO0FBQ25CLHFCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLElBQUksR0FBRyxLQUFiO0FBRUEsYUFBT0EsSUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQyxTQUFTLEdBQUcsSUFBbEI7QUFFQSxhQUFPQSxTQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUVDLElBQUYsR0FBV0osU0FBWCxDQUFFSSxJQUFGO0FBQUEsVUFDQUgsSUFEQSxHQUNPLEtBQUtBLElBRFo7QUFBQSxVQUVBSSxJQUZBLEdBRU87QUFDTCxnQkFBUUQsSUFESDtBQUVMLGdCQUFRSDtBQUZILE9BRlA7QUFPTixhQUFPSSxJQUFQO0FBQ0Q7Ozs2QkFJZUEsSSxFQUFNO0FBQ3BCLFVBQUlGLFNBQVMsR0FBRyxJQUFoQjs7QUFFQSxVQUFJRSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNYLFlBQUVELElBQUYsR0FBV0osU0FBWCxDQUFFSSxJQUFGO0FBQUEsWUFDQUUsUUFEQSxHQUNXRCxJQUFJLENBQUMsTUFBRCxDQURmOztBQUdOLFlBQUlDLFFBQVEsS0FBS0YsSUFBakIsRUFBdUI7QUFBRztBQUN4QixjQUFNRyxRQUFRLEdBQUdGLElBQUksQ0FBQyxNQUFELENBQXJCO0FBQUEsY0FDTUosSUFBSSxHQUFHTSxRQURiLENBRHFCLENBRUc7O0FBRXhCSixVQUFBQSxTQUFTLEdBQUcsSUFBSUgsU0FBSixDQUFjQyxJQUFkLENBQVo7QUFDRDtBQUNGOztBQUVELGFBQU9FLFNBQVA7QUFDRDs7OzZCQUVlRixJLEVBQU1PLHFCLEVBQXVCO0FBQzNDLFVBQUlMLFNBQVMsR0FBRyxJQUFoQjs7QUFFQSxVQUFJO0FBQ0YsWUFBTU0sWUFBWSxHQUFHYixnQkFBZ0IsQ0FBQ1kscUJBQUQsRUFBd0JQLElBQXhCLENBQXJDO0FBQUEsWUFDTVMsY0FBYyxHQUFHWixnQkFBZ0IsQ0FBQ1csWUFBRCxDQUR2Qzs7QUFHQSxZQUFJQyxjQUFKLEVBQW9CO0FBQ2xCUCxVQUFBQSxTQUFTLEdBQUcsSUFBSUgsU0FBSixDQUFjQyxJQUFkLENBQVo7QUFDRDtBQUNGLE9BUEQsQ0FPRSxPQUFPVSxLQUFQLEVBQWMsQ0FDZDtBQUNEOztBQUVELGFBQU9SLFNBQVA7QUFDRDs7O21DQUVxQlMsVSxFQUFZQyxRLEVBQVU7QUFDMUMsVUFBSVYsU0FBUyxHQUFHLElBQWhCO0FBRU0sVUFBRVcsR0FBRixHQUFVRixVQUFWLENBQUVFLEdBQUY7QUFBQSxVQUNBQyxtQkFEQSxHQUNzQkQsR0FEdEIsQ0FIb0MsQ0FJVDs7QUFFakMsVUFBSSxDQUFDQyxtQkFBTCxFQUEwQjtBQUN4QkYsUUFBQUEsUUFBUSxDQUFDVixTQUFELENBQVI7QUFFQTtBQUNEOztBQUVLLFVBQUFhLGNBQWMsR0FBR0osVUFBakI7QUFBQSxVQUNFSyxJQURGLEdBQ1dELGNBRFgsQ0FDRUMsSUFERjtBQUdOLFVBQUloQixJQUFJLEdBQUdnQixJQUFYLENBZjBDLENBZXhCOztBQUVsQmhCLE1BQUFBLElBQUksR0FBR2lCLGdDQUFnQyxDQUFDakIsSUFBRCxDQUF2QyxDQWpCMEMsQ0FpQk07O0FBRWhEQSxNQUFBQSxJQUFJLEdBQUcsNkNBQWtDQSxJQUFsQyxDQUFQLENBbkIwQyxDQW1CTTs7QUFFaERFLE1BQUFBLFNBQVMsR0FBRyxJQUFJSCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUVBWSxNQUFBQSxRQUFRLENBQUNWLFNBQUQsQ0FBUjtBQUNEOzs7Ozs7OztnQkE3RmtCSCxTLFVBZ0NMLFc7O0FBZ0VoQixTQUFTa0IsZ0NBQVQsQ0FBMENqQixJQUExQyxFQUFnRDtBQUM5QyxNQUFNa0Isd0JBQXdCLEdBQUdsQixJQUFJLENBQUNtQixPQUFMLENBQWEsS0FBYixFQUFvQixFQUFwQixDQUFqQztBQUVBLFNBQU9ELHdCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBpc0VudHJ5RGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IHRydWU7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRGlyZWN0b3J5LFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiB0eXBlLFxuICAgICAgICAgICAgXCJwYXRoXCI6IHBhdGhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IFwiRGlyZWN0b3J5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICAgIGlmICh0eXBlSlNPTiA9PT0gdHlwZSkgeyAgLy8vXG4gICAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTjsgIC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXG4gICAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB7IGRpciB9ID0ganNaaXBFbnRyeSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0gZGlyOyAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeURpcmVjdG9yeSkge1xuICAgICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGpzWmlwRGlyZWN0b3J5ID0ganNaaXBFbnRyeSwgIC8vL1xuICAgICAgICAgIHsgbmFtZSB9ID0ganNaaXBEaXJlY3Rvcnk7XG5cbiAgICBsZXQgcGF0aCA9IG5hbWU7ICAvLy9cblxuICAgIHBhdGggPSBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKTsgIC8vL1xuXG4gICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTsgLy8vXG5cbiAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgY2FsbGJhY2soZGlyZWN0b3J5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2hGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuXG4gIHJldHVybiBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2g7XG59XG4iXX0=