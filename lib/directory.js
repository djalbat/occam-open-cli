"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

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
  }]);

  return Directory;
}();

exports["default"] = Directory;

_defineProperty(Directory, "type", "Directory");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yeS5qcyJdLCJuYW1lcyI6WyJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImlzRW50cnlEaXJlY3RvcnkiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiRGlyZWN0b3J5IiwicGF0aCIsImZpbGUiLCJkaXJlY3RvcnkiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJlbnRyeURpcmVjdG9yeSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7O0FBRU0sSUFBRUEsZ0JBQUYsR0FBdUJDLHdCQUF2QixDQUFFRCxnQkFBRjtBQUFBLElBQ0VFLGdCQURGLEdBQ3VCQyw4QkFEdkIsQ0FDRUQsZ0JBREY7O0lBR2VFLFM7QUFDbkIscUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsSUFBSSxHQUFHLEtBQWI7QUFFQSxhQUFPQSxJQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1DLFNBQVMsR0FBRyxJQUFsQjtBQUVBLGFBQU9BLFNBQVA7QUFDRDs7OzZCQUVRO0FBQ0QsVUFBRUMsSUFBRixHQUFXSixTQUFYLENBQUVJLElBQUY7QUFBQSxVQUNBSCxJQURBLEdBQ08sS0FBS0EsSUFEWjtBQUFBLFVBRUFJLElBRkEsR0FFTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFIO0FBRkgsT0FGUDtBQU9OLGFBQU9JLElBQVA7QUFDRDs7OzZCQUllQSxJLEVBQU07QUFDcEIsVUFBSUYsU0FBUyxHQUFHLElBQWhCOztBQUVBLFVBQUlFLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ1gsWUFBRUQsSUFBRixHQUFXSixTQUFYLENBQUVJLElBQUY7QUFBQSxZQUNBRSxRQURBLEdBQ1dELElBQUksQ0FBQyxNQUFELENBRGY7O0FBR04sWUFBSUMsUUFBUSxLQUFLRixJQUFqQixFQUF1QjtBQUFHO0FBQ3hCLGNBQU1HLFFBQVEsR0FBR0YsSUFBSSxDQUFDLE1BQUQsQ0FBckI7QUFBQSxjQUNNSixJQUFJLEdBQUdNLFFBRGIsQ0FEcUIsQ0FFRzs7QUFFeEJKLFVBQUFBLFNBQVMsR0FBRyxJQUFJSCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0UsU0FBUDtBQUNEOzs7NkJBRWVGLEksRUFBTU8scUIsRUFBdUI7QUFDM0MsVUFBSUwsU0FBUyxHQUFHLElBQWhCOztBQUVBLFVBQUk7QUFDRixZQUFNTSxZQUFZLEdBQUdiLGdCQUFnQixDQUFDWSxxQkFBRCxFQUF3QlAsSUFBeEIsQ0FBckM7QUFBQSxZQUNNUyxjQUFjLEdBQUdaLGdCQUFnQixDQUFDVyxZQUFELENBRHZDOztBQUdBLFlBQUlDLGNBQUosRUFBb0I7QUFDbEJQLFVBQUFBLFNBQVMsR0FBRyxJQUFJSCxTQUFKLENBQWNDLElBQWQsQ0FBWjtBQUNEO0FBQ0YsT0FQRCxDQU9FLE9BQU9VLEtBQVAsRUFBYyxDQUNkO0FBQ0Q7O0FBRUQsYUFBT1IsU0FBUDtBQUNEOzs7Ozs7OztnQkFuRWtCSCxTLFVBZ0NMLFciLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBpc0VudHJ5RGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IHRydWU7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRGlyZWN0b3J5LFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiB0eXBlLFxuICAgICAgICAgICAgXCJwYXRoXCI6IHBhdGhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IFwiRGlyZWN0b3J5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICAgIGlmICh0eXBlSlNPTiA9PT0gdHlwZSkgeyAgLy8vXG4gICAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTjsgIC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXG4gICAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cbn1cbiJdfQ==