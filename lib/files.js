'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var File = require('./file');

var Files = function () {
  function Files(array) {
    _classCallCheck(this, Files);

    this.array = array;
  }

  _createClass(Files, [{
    key: 'getFilePaths',
    value: function getFilePaths() {
      var filePaths = this.mapFile(function (file) {
        var filePath = file.getPath();

        return filePath;
      });

      return filePaths;
    }
  }, {
    key: 'addFile',
    value: function addFile(file) {
      this.array.push(file);
    }
  }, {
    key: 'mapFile',
    value: function mapFile(callback) {
      this.array.map(callback);
    }
  }, {
    key: 'someFile',
    value: function someFile(callback) {
      return this.array.some(callback);
    }
  }, {
    key: 'forEachFile',
    value: function forEachFile(callback) {
      this.array.forEach(callback);
    }
  }, {
    key: 'reduceFile',
    value: function reduceFile(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: 'save',
    value: function save(projectsDirectoryPath) {
      this.array.forEach(function (file) {
        file.save(projectsDirectoryPath);
      });
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var filesJSON = this.array.map(function (file) {
        var fileJSON = file.toJSON();

        return fileJSON;
      }),
          json = filesJSON;

      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var filesJSON = json,
          ///
      array = [],
          files = new Files(array);

      filesJSON.forEach(function (fileJSON) {
        var file = File.fromJSON(fileJSON);

        files.addFile(file);
      });

      return files;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var array = [],
          files = new Files(array);

      return files;
    }
  }, {
    key: 'fromPaths',
    value: function fromPaths(paths, projectsDirectoryPath) {
      var array = [],
          files = new Files(array);

      paths.forEach(function (path) {
        var file = File.fromPath(path, projectsDirectoryPath);

        files.addFile(file);
      });

      return files;
    }
  }]);

  return Files;
}();

module.exports = Files;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlIiwicmVxdWlyZSIsIkZpbGVzIiwiYXJyYXkiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJmb3JFYWNoIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwic2F2ZSIsImZpbGVzSlNPTiIsImZpbGVKU09OIiwidG9KU09OIiwianNvbiIsImZpbGVzIiwiZnJvbUpTT04iLCJhZGRGaWxlIiwicGF0aHMiLCJwYXRoIiwiZnJvbVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7O0lBRU1DLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzttQ0FFYztBQUNiLFVBQU1DLFlBQVksS0FBS0MsT0FBTCxDQUFhLFVBQVNDLElBQVQsRUFBZTtBQUM1QyxZQUFNQyxXQUFXRCxLQUFLRSxPQUFMLEVBQWpCOztBQUVBLGVBQU9ELFFBQVA7QUFDRCxPQUppQixDQUFsQjs7QUFNQSxhQUFPSCxTQUFQO0FBQ0Q7Ozs0QkFFT0UsSSxFQUFNO0FBQ1osV0FBS0gsS0FBTCxDQUFXTSxJQUFYLENBQWdCSCxJQUFoQjtBQUNEOzs7NEJBRU9JLFEsRUFBVTtBQUNoQixXQUFLUCxLQUFMLENBQVdRLEdBQVgsQ0FBZUQsUUFBZjtBQUNEOzs7NkJBRVFBLFEsRUFBVTtBQUNqQixhQUFPLEtBQUtQLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkYsUUFBaEIsQ0FBUDtBQUNEOzs7Z0NBRVdBLFEsRUFBVTtBQUNwQixXQUFLUCxLQUFMLENBQVdVLE9BQVgsQ0FBbUJILFFBQW5CO0FBQ0Q7OzsrQkFFVUEsUSxFQUFVSSxZLEVBQWM7QUFDakMsYUFBTyxLQUFLWCxLQUFMLENBQVdZLE1BQVgsQ0FBa0JMLFFBQWxCLEVBQTRCSSxZQUE1QixDQUFQO0FBQ0Q7Ozt5QkFFSUUscUIsRUFBdUI7QUFDMUIsV0FBS2IsS0FBTCxDQUFXVSxPQUFYLENBQW1CLFVBQVNQLElBQVQsRUFBZTtBQUNoQ0EsYUFBS1csSUFBTCxDQUFVRCxxQkFBVjtBQUNELE9BRkQ7QUFHRDs7OzZCQUVRO0FBQ1AsVUFBTUUsWUFBWSxLQUFLZixLQUFMLENBQVdRLEdBQVgsQ0FBZSxVQUFTTCxJQUFULEVBQWU7QUFDeEMsWUFBTWEsV0FBV2IsS0FBS2MsTUFBTCxFQUFqQjs7QUFFQSxlQUFPRCxRQUFQO0FBQ0QsT0FKVyxDQUFsQjtBQUFBLFVBS01FLE9BQU9ILFNBTGI7O0FBT0EsYUFBT0csSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNSCxZQUFZRyxJQUFsQjtBQUFBLFVBQXdCO0FBQ2xCbEIsY0FBUSxFQURkO0FBQUEsVUFFTW1CLFFBQVEsSUFBSXBCLEtBQUosQ0FBVUMsS0FBVixDQUZkOztBQUlBZSxnQkFBVUwsT0FBVixDQUFrQixVQUFTTSxRQUFULEVBQW1CO0FBQ25DLFlBQU1iLE9BQU9OLEtBQUt1QixRQUFMLENBQWNKLFFBQWQsQ0FBYjs7QUFFQUcsY0FBTUUsT0FBTixDQUFjbEIsSUFBZDtBQUNELE9BSkQ7O0FBTUEsYUFBT2dCLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNbkIsUUFBUSxFQUFkO0FBQUEsVUFDTW1CLFFBQVEsSUFBSXBCLEtBQUosQ0FBVUMsS0FBVixDQURkOztBQUdBLGFBQU9tQixLQUFQO0FBQ0Q7Ozs4QkFFZ0JHLEssRUFBT1QscUIsRUFBdUI7QUFDN0MsVUFBTWIsUUFBUSxFQUFkO0FBQUEsVUFDTW1CLFFBQVEsSUFBSXBCLEtBQUosQ0FBVUMsS0FBVixDQURkOztBQUdBc0IsWUFBTVosT0FBTixDQUFjLFVBQVNhLElBQVQsRUFBZTtBQUMzQixZQUFNcEIsT0FBT04sS0FBSzJCLFFBQUwsQ0FBY0QsSUFBZCxFQUFvQlYscUJBQXBCLENBQWI7O0FBRUFNLGNBQU1FLE9BQU4sQ0FBY2xCLElBQWQ7QUFDRCxPQUpEOztBQU1BLGFBQU9nQixLQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCM0IsS0FBakIiLCJmaWxlIjoiZmlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKTtcblxuY2xhc3MgRmlsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLm1hcEZpbGUoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7XG4gIH1cblxuICBzb21lRmlsZShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgZm9yRWFjaEZpbGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlRmlsZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgZmlsZS5zYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG4gICAgfSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZUpTT04gPSBmaWxlLnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBmaWxlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZXNKU09OO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGZpbGVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuICAgIFxuICAgIGZpbGVzSlNPTi5mb3JFYWNoKGZ1bmN0aW9uKGZpbGVKU09OKSB7XG4gICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tSlNPTihmaWxlSlNPTik7XG5cbiAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRocyhwYXRocywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG5cbiAgICBwYXRocy5mb3JFYWNoKGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlcztcbiJdfQ==