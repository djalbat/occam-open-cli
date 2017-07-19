'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs'),
    mkdirp = require('mkdirp');

var pathUtil = require('./util/path');

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

      var absolutePath = pathUtil.combinePaths(projectsDirectoryPath, directoryPath),
          absolutePathDirectoryPath = pathUtil.isDirectoryPath(absolutePath);

      if (absolutePathDirectoryPath) {
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
        var jsZipDirectory = jsZipEntry;

        var jsZipDirectoryPath = jsZipDirectory.name; ///

        jsZipDirectoryPath = pathUtil.removeTrailingSlashFromPath(jsZipDirectoryPath);
        jsZipDirectoryPath = pathUtil.removeMasterFromPath(jsZipDirectoryPath);

        var path = jsZipDirectoryPath; ///

        directory = new Directory(path);

        callback(directory);
      }
    }
  }]);

  return Directory;
}();

Directory.type = 'Directory';

module.exports = Directory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwibWtkaXJwIiwicGF0aFV0aWwiLCJEaXJlY3RvcnkiLCJwYXRoIiwidHlwZSIsImpzb24iLCJwYXRoSlNPTiIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJjb21iaW5lUGF0aHMiLCJhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoIiwiaXNEaXJlY3RvcnlQYXRoIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRGlyZWN0b3J5IiwianNaaXBEaXJlY3RvcnlQYXRoIiwibmFtZSIsInJlbW92ZVRyYWlsaW5nU2xhc2hGcm9tUGF0aCIsInJlbW92ZU1hc3RlckZyb21QYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxRQUFSLENBRGY7O0FBR0EsSUFBTUUsV0FBV0YsUUFBUSxhQUFSLENBQWpCOztJQUVNRyxTO0FBQ0oscUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsT0FBT0YsVUFBVUUsSUFBdkI7QUFBQSxVQUNNRCxPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTUUsT0FBTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFEO0FBRkgsT0FGYjs7QUFPQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1DLFdBQVdELEtBQUssTUFBTCxDQUFqQjtBQUFBLFVBQ01GLE9BQU9HLFFBRGI7QUFBQSxVQUN3QjtBQUNsQkMsa0JBQVksSUFBSUwsU0FBSixDQUFjQyxJQUFkLENBRmxCOztBQUlBLGFBQU9JLFNBQVA7QUFDRDs7O3NDQUV3QkMsYSxFQUFlQyxxQixFQUF1QjtBQUM3RCxVQUFJRixZQUFZLElBQWhCOztBQUVBLFVBQU1HLGVBQWVULFNBQVNVLFlBQVQsQ0FBc0JGLHFCQUF0QixFQUE2Q0QsYUFBN0MsQ0FBckI7QUFBQSxVQUNNSSw0QkFBNEJYLFNBQVNZLGVBQVQsQ0FBeUJILFlBQXpCLENBRGxDOztBQUdBLFVBQUlFLHlCQUFKLEVBQStCO0FBQzdCLFlBQU1ULE9BQU9LLGFBQWIsQ0FENkIsQ0FDRDs7QUFFNUJELG9CQUFZLElBQUlMLFNBQUosQ0FBY0MsSUFBZCxDQUFaO0FBQ0Q7O0FBRUQsYUFBT0ksU0FBUDtBQUNEOzs7bUNBRXFCTyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJUixZQUFZLElBQWhCOztBQUVBLFVBQU1TLHNCQUFzQkYsV0FBV0csR0FBdkMsQ0FIMEMsQ0FHRTs7QUFFNUMsVUFBSSxDQUFDRCxtQkFBTCxFQUEwQjtBQUN4QkQsaUJBQVNSLFNBQVQ7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNVyxpQkFBaUJKLFVBQXZCOztBQUVBLFlBQUlLLHFCQUFxQkQsZUFBZUUsSUFBeEMsQ0FISyxDQUcwQzs7QUFFL0NELDZCQUFxQmxCLFNBQVNvQiwyQkFBVCxDQUFxQ0Ysa0JBQXJDLENBQXJCO0FBQ0FBLDZCQUFxQmxCLFNBQVNxQixvQkFBVCxDQUE4Qkgsa0JBQTlCLENBQXJCOztBQUVBLFlBQU1oQixPQUFPZ0Isa0JBQWIsQ0FSSyxDQVE2Qjs7QUFFbENaLG9CQUFZLElBQUlMLFNBQUosQ0FBY0MsSUFBZCxDQUFaOztBQUVBWSxpQkFBU1IsU0FBVDtBQUNEO0FBQ0Y7Ozs7OztBQUdITCxVQUFVRSxJQUFWLEdBQWlCLFdBQWpCOztBQUVBbUIsT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCIiwiZmlsZSI6ImRpcmVjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpLFxuICAgICAgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJyk7XG5cbmNvbnN0IHBhdGhVdGlsID0gcmVxdWlyZSgnLi91dGlsL3BhdGgnKTtcblxuY2xhc3MgRGlyZWN0b3J5IHtcbiAgY29uc3RydWN0b3IocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZSA9IERpcmVjdG9yeS50eXBlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiB0eXBlLFxuICAgICAgICAgICAgXCJwYXRoXCI6IHBhdGhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgcGF0aCA9IHBhdGhKU09OLCAgLy8vXG4gICAgICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG5cbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBhYnNvbHV0ZVBhdGhEaXJlY3RvcnlQYXRoID0gcGF0aFV0aWwuaXNEaXJlY3RvcnlQYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBpZiAoYWJzb2x1dGVQYXRoRGlyZWN0b3J5UGF0aCkge1xuICAgICAgY29uc3QgcGF0aCA9IGRpcmVjdG9yeVBhdGg7IC8vL1xuXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwRW50cnkoanNaaXBFbnRyeSwgY2FsbGJhY2spIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXI7IC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBjYWxsYmFjayhkaXJlY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBqc1ppcERpcmVjdG9yeSA9IGpzWmlwRW50cnk7XG4gICAgICBcbiAgICAgIGxldCBqc1ppcERpcmVjdG9yeVBhdGggPSBqc1ppcERpcmVjdG9yeS5uYW1lOyAgLy8vXG5cbiAgICAgIGpzWmlwRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsLnJlbW92ZVRyYWlsaW5nU2xhc2hGcm9tUGF0aChqc1ppcERpcmVjdG9yeVBhdGgpO1xuICAgICAganNaaXBEaXJlY3RvcnlQYXRoID0gcGF0aFV0aWwucmVtb3ZlTWFzdGVyRnJvbVBhdGgoanNaaXBEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgY29uc3QgcGF0aCA9IGpzWmlwRGlyZWN0b3J5UGF0aDsgIC8vL1xuXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuXG4gICAgICBjYWxsYmFjayhkaXJlY3RvcnkpO1xuICAgIH1cbiAgfVxufVxuXG5EaXJlY3RvcnkudHlwZSA9ICdEaXJlY3RvcnknO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdG9yeTtcbiJdfQ==