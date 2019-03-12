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
        var json = fileJSON,
            ///
        file = File.fromJSON(json);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlIiwicmVxdWlyZSIsIkZpbGVzIiwiYXJyYXkiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwic2F2ZSIsImZpbGVzSlNPTiIsImZpbGVKU09OIiwidG9KU09OIiwianNvbiIsImZpbGVzIiwiZnJvbUpTT04iLCJhZGRGaWxlIiwicGF0aHMiLCJwYXRoIiwiZnJvbVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7O0lBRU1DLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzttQ0FFYztBQUNiLFVBQU1DLFlBQVksS0FBS0MsT0FBTCxDQUFhLFVBQVNDLElBQVQsRUFBZTtBQUM1QyxZQUFNQyxXQUFXRCxLQUFLRSxPQUFMLEVBQWpCOztBQUVBLGVBQU9ELFFBQVA7QUFDRCxPQUppQixDQUFsQjs7QUFNQSxhQUFPSCxTQUFQO0FBQ0Q7Ozs0QkFFT0UsSSxFQUFNO0FBQ1osV0FBS0gsS0FBTCxDQUFXTSxJQUFYLENBQWdCSCxJQUFoQjtBQUNEOzs7NEJBRU9JLFEsRUFBVTtBQUNoQixhQUFPLEtBQUtQLEtBQUwsQ0FBV1EsR0FBWCxDQUFlRCxRQUFmLENBQVA7QUFDRDs7OzZCQUVRQSxRLEVBQVU7QUFDakIsYUFBTyxLQUFLUCxLQUFMLENBQVdTLElBQVgsQ0FBZ0JGLFFBQWhCLENBQVA7QUFDRDs7OytCQUVVQSxRLEVBQVVHLFksRUFBYztBQUNqQyxhQUFPLEtBQUtWLEtBQUwsQ0FBV1csTUFBWCxDQUFrQkosUUFBbEIsRUFBNEJHLFlBQTVCLENBQVA7QUFDRDs7O2dDQUVXSCxRLEVBQVU7QUFDcEIsV0FBS1AsS0FBTCxDQUFXWSxPQUFYLENBQW1CTCxRQUFuQjtBQUNEOzs7eUJBRUlNLHFCLEVBQXVCO0FBQzFCLFdBQUtiLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQixVQUFTVCxJQUFULEVBQWU7QUFDaENBLGFBQUtXLElBQUwsQ0FBVUQscUJBQVY7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQU1FLFlBQVksS0FBS2YsS0FBTCxDQUFXUSxHQUFYLENBQWUsVUFBU0wsSUFBVCxFQUFlO0FBQ3hDLFlBQU1hLFdBQVliLFNBQVMsSUFBVixHQUNHQSxLQUFLYyxNQUFMLEVBREgsR0FFSyxJQUZ0Qjs7QUFJQSxlQUFPRCxRQUFQO0FBQ0QsT0FOVyxDQUFsQjtBQUFBLFVBT01FLE9BQU9ILFNBUGI7O0FBU0EsYUFBT0csSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNSCxZQUFZRyxJQUFsQjtBQUFBLFVBQXdCO0FBQ2xCbEIsY0FBUSxFQURkO0FBQUEsVUFFTW1CLFFBQVEsSUFBSXBCLEtBQUosQ0FBVUMsS0FBVixDQUZkOztBQUlBZSxnQkFBVUgsT0FBVixDQUFrQixVQUFTSSxRQUFULEVBQW1CO0FBQ25DLFlBQU1FLE9BQU9GLFFBQWI7QUFBQSxZQUF3QjtBQUNsQmIsZUFBT04sS0FBS3VCLFFBQUwsQ0FBY0YsSUFBZCxDQURiOztBQUdBQyxjQUFNRSxPQUFOLENBQWNsQixJQUFkO0FBQ0QsT0FMRDs7QUFPQSxhQUFPZ0IsS0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1uQixRQUFRLEVBQWQ7QUFBQSxVQUNNbUIsUUFBUSxJQUFJcEIsS0FBSixDQUFVQyxLQUFWLENBRGQ7O0FBR0EsYUFBT21CLEtBQVA7QUFDRDs7OzhCQUVnQkcsSyxFQUFPVCxxQixFQUF1QjtBQUM3QyxVQUFNYixRQUFRLEVBQWQ7QUFBQSxVQUNNbUIsUUFBUSxJQUFJcEIsS0FBSixDQUFVQyxLQUFWLENBRGQ7O0FBR0FzQixZQUFNVixPQUFOLENBQWMsVUFBU1csSUFBVCxFQUFlO0FBQzNCLFlBQU1wQixPQUFPTixLQUFLMkIsUUFBTCxDQUFjRCxJQUFkLEVBQW9CVixxQkFBcEIsQ0FBYjs7QUFFQU0sY0FBTUUsT0FBTixDQUFjbEIsSUFBZDtBQUNELE9BSkQ7O0FBTUEsYUFBT2dCLEtBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUIzQixLQUFqQiIsImZpbGUiOiJmaWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpO1xuXG5jbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZShmdW5jdGlvbihmaWxlKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICByZXR1cm4gZmlsZVBhdGg7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGZpbGUpO1xuICB9XG5cbiAgbWFwRmlsZShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7XG4gIH1cblxuICBzb21lRmlsZShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlRmlsZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaEZpbGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgZmlsZS5zYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG4gICAgfSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZUpTT04gPSAoZmlsZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICBcbiAgICAgICAgICAgIHJldHVybiBmaWxlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZXNKU09OO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGZpbGVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuICAgIFxuICAgIGZpbGVzSlNPTi5mb3JFYWNoKGZ1bmN0aW9uKGZpbGVKU09OKSB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aHMocGF0aHMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuXG4gICAgcGF0aHMuZm9yRWFjaChmdW5jdGlvbihwYXRoKSB7XG4gICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZXM7XG4iXX0=