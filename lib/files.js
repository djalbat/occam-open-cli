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
      return this.array.map(callback);
    }
  }, {
    key: 'someFile',
    value: function someFile(callback) {
      return this.array.some(callback);
    }
  }, {
    key: 'reduceFile',
    value: function reduceFile(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: 'forEachFile',
    value: function forEachFile(callback) {
      this.array.forEach(callback);
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
        var fileJSON = file !== null ? file.toJSON() : null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlIiwicmVxdWlyZSIsIkZpbGVzIiwiYXJyYXkiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwic2F2ZSIsImZpbGVzSlNPTiIsImZpbGVKU09OIiwidG9KU09OIiwianNvbiIsImZpbGVzIiwiZnJvbUpTT04iLCJhZGRGaWxlIiwicGF0aHMiLCJwYXRoIiwiZnJvbVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7O0lBRU1DLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzttQ0FFYztBQUNiLFVBQU1DLFlBQVksS0FBS0MsT0FBTCxDQUFhLFVBQVNDLElBQVQsRUFBZTtBQUM1QyxZQUFNQyxXQUFXRCxLQUFLRSxPQUFMLEVBQWpCOztBQUVBLGVBQU9ELFFBQVA7QUFDRCxPQUppQixDQUFsQjs7QUFNQSxhQUFPSCxTQUFQO0FBQ0Q7Ozs0QkFFT0UsSSxFQUFNO0FBQ1osV0FBS0gsS0FBTCxDQUFXTSxJQUFYLENBQWdCSCxJQUFoQjtBQUNEOzs7NEJBRU9JLFEsRUFBVTtBQUNoQixhQUFPLEtBQUtQLEtBQUwsQ0FBV1EsR0FBWCxDQUFlRCxRQUFmLENBQVA7QUFDRDs7OzZCQUVRQSxRLEVBQVU7QUFDakIsYUFBTyxLQUFLUCxLQUFMLENBQVdTLElBQVgsQ0FBZ0JGLFFBQWhCLENBQVA7QUFDRDs7OytCQUVVQSxRLEVBQVVHLFksRUFBYztBQUNqQyxhQUFPLEtBQUtWLEtBQUwsQ0FBV1csTUFBWCxDQUFrQkosUUFBbEIsRUFBNEJHLFlBQTVCLENBQVA7QUFDRDs7O2dDQUVXSCxRLEVBQVU7QUFDcEIsV0FBS1AsS0FBTCxDQUFXWSxPQUFYLENBQW1CTCxRQUFuQjtBQUNEOzs7eUJBRUlNLHFCLEVBQXVCO0FBQzFCLFdBQUtiLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQixVQUFTVCxJQUFULEVBQWU7QUFDaENBLGFBQUtXLElBQUwsQ0FBVUQscUJBQVY7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQU1FLFlBQVksS0FBS2YsS0FBTCxDQUFXUSxHQUFYLENBQWUsVUFBU0wsSUFBVCxFQUFlO0FBQ3hDLFlBQU1hLFdBQVliLFNBQVMsSUFBVixHQUNHQSxLQUFLYyxNQUFMLEVBREgsR0FFSyxJQUZ0Qjs7QUFJQSxlQUFPRCxRQUFQO0FBQ0QsT0FOVyxDQUFsQjtBQUFBLFVBT01FLE9BQU9ILFNBUGI7O0FBU0EsYUFBT0csSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNSCxZQUFZRyxJQUFsQjtBQUFBLFVBQXdCO0FBQ2xCbEIsY0FBUSxFQURkO0FBQUEsVUFFTW1CLFFBQVEsSUFBSXBCLEtBQUosQ0FBVUMsS0FBVixDQUZkOztBQUlBZSxnQkFBVUgsT0FBVixDQUFrQixVQUFTSSxRQUFULEVBQW1CO0FBQ25DLFlBQU1iLE9BQU9OLEtBQUt1QixRQUFMLENBQWNKLFFBQWQsQ0FBYjs7QUFFQUcsY0FBTUUsT0FBTixDQUFjbEIsSUFBZDtBQUNELE9BSkQ7O0FBTUEsYUFBT2dCLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNbkIsUUFBUSxFQUFkO0FBQUEsVUFDTW1CLFFBQVEsSUFBSXBCLEtBQUosQ0FBVUMsS0FBVixDQURkOztBQUdBLGFBQU9tQixLQUFQO0FBQ0Q7Ozs4QkFFZ0JHLEssRUFBT1QscUIsRUFBdUI7QUFDN0MsVUFBTWIsUUFBUSxFQUFkO0FBQUEsVUFDTW1CLFFBQVEsSUFBSXBCLEtBQUosQ0FBVUMsS0FBVixDQURkOztBQUdBc0IsWUFBTVYsT0FBTixDQUFjLFVBQVNXLElBQVQsRUFBZTtBQUMzQixZQUFNcEIsT0FBT04sS0FBSzJCLFFBQUwsQ0FBY0QsSUFBZCxFQUFvQlYscUJBQXBCLENBQWI7O0FBRUFNLGNBQU1FLE9BQU4sQ0FBY2xCLElBQWQ7QUFDRCxPQUpEOztBQU1BLGFBQU9nQixLQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCM0IsS0FBakIiLCJmaWxlIjoiZmlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKTtcblxuY2xhc3MgRmlsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLm1hcEZpbGUoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIGZpbGUuc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBmaWxlc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcbiAgICBcbiAgICBmaWxlc0pTT04uZm9yRWFjaChmdW5jdGlvbihmaWxlSlNPTikge1xuICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbUpTT04oZmlsZUpTT04pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aHMocGF0aHMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuXG4gICAgcGF0aHMuZm9yRWFjaChmdW5jdGlvbihwYXRoKSB7XG4gICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZXM7XG4iXX0=