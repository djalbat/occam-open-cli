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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlIiwicmVxdWlyZSIsIkZpbGVzIiwiYXJyYXkiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwic2F2ZSIsImZpbGVzSlNPTiIsImZpbGVKU09OIiwidG9KU09OIiwianNvbiIsImZpbGVzIiwiZnJvbUpTT04iLCJhZGRGaWxlIiwicGF0aHMiLCJwYXRoIiwiZnJvbVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7O0lBRU1DLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzttQ0FFYztBQUNiLFVBQU1DLFlBQVksS0FBS0MsT0FBTCxDQUFhLFVBQVNDLElBQVQsRUFBZTtBQUM1QyxZQUFNQyxXQUFXRCxLQUFLRSxPQUFMLEVBQWpCOztBQUVBLGVBQU9ELFFBQVA7QUFDRCxPQUppQixDQUFsQjs7QUFNQSxhQUFPSCxTQUFQO0FBQ0Q7Ozs0QkFFT0UsSSxFQUFNO0FBQ1osV0FBS0gsS0FBTCxDQUFXTSxJQUFYLENBQWdCSCxJQUFoQjtBQUNEOzs7NEJBRU9JLFEsRUFBVTtBQUNoQixhQUFPLEtBQUtQLEtBQUwsQ0FBV1EsR0FBWCxDQUFlRCxRQUFmLENBQVA7QUFDRDs7OzZCQUVRQSxRLEVBQVU7QUFDakIsYUFBTyxLQUFLUCxLQUFMLENBQVdTLElBQVgsQ0FBZ0JGLFFBQWhCLENBQVA7QUFDRDs7OytCQUVVQSxRLEVBQVVHLFksRUFBYztBQUNqQyxhQUFPLEtBQUtWLEtBQUwsQ0FBV1csTUFBWCxDQUFrQkosUUFBbEIsRUFBNEJHLFlBQTVCLENBQVA7QUFDRDs7O2dDQUVXSCxRLEVBQVU7QUFDcEIsV0FBS1AsS0FBTCxDQUFXWSxPQUFYLENBQW1CTCxRQUFuQjtBQUNEOzs7eUJBRUlNLHFCLEVBQXVCO0FBQzFCLFdBQUtiLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQixVQUFTVCxJQUFULEVBQWU7QUFDaENBLGFBQUtXLElBQUwsQ0FBVUQscUJBQVY7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQU1FLFlBQVksS0FBS2YsS0FBTCxDQUFXUSxHQUFYLENBQWUsVUFBU0wsSUFBVCxFQUFlO0FBQ3hDLFlBQU1hLFdBQVdiLEtBQUtjLE1BQUwsRUFBakI7O0FBRUEsZUFBT0QsUUFBUDtBQUNELE9BSlcsQ0FBbEI7QUFBQSxVQUtNRSxPQUFPSCxTQUxiOztBQU9BLGFBQU9HLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUgsWUFBWUcsSUFBbEI7QUFBQSxVQUF3QjtBQUNsQmxCLGNBQVEsRUFEZDtBQUFBLFVBRU1tQixRQUFRLElBQUlwQixLQUFKLENBQVVDLEtBQVYsQ0FGZDs7QUFJQWUsZ0JBQVVILE9BQVYsQ0FBa0IsVUFBU0ksUUFBVCxFQUFtQjtBQUNuQyxZQUFNYixPQUFPTixLQUFLdUIsUUFBTCxDQUFjSixRQUFkLENBQWI7O0FBRUFHLGNBQU1FLE9BQU4sQ0FBY2xCLElBQWQ7QUFDRCxPQUpEOztBQU1BLGFBQU9nQixLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTW5CLFFBQVEsRUFBZDtBQUFBLFVBQ01tQixRQUFRLElBQUlwQixLQUFKLENBQVVDLEtBQVYsQ0FEZDs7QUFHQSxhQUFPbUIsS0FBUDtBQUNEOzs7OEJBRWdCRyxLLEVBQU9ULHFCLEVBQXVCO0FBQzdDLFVBQU1iLFFBQVEsRUFBZDtBQUFBLFVBQ01tQixRQUFRLElBQUlwQixLQUFKLENBQVVDLEtBQVYsQ0FEZDs7QUFHQXNCLFlBQU1WLE9BQU4sQ0FBYyxVQUFTVyxJQUFULEVBQWU7QUFDM0IsWUFBTXBCLE9BQU9OLEtBQUsyQixRQUFMLENBQWNELElBQWQsRUFBb0JWLHFCQUFwQixDQUFiOztBQUVBTSxjQUFNRSxPQUFOLENBQWNsQixJQUFkO0FBQ0QsT0FKRDs7QUFNQSxhQUFPZ0IsS0FBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQjNCLEtBQWpCIiwiZmlsZSI6ImZpbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyk7XG5cbmNsYXNzIEZpbGVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5tYXBGaWxlKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZmlsZSk7XG4gIH1cblxuICBtYXBGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICByZWR1Y2VGaWxlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cblxuICBmb3JFYWNoRmlsZShjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICBmaWxlLnNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlSlNPTiA9IGZpbGUudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGZpbGVKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlc0pTT047XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goZnVuY3Rpb24oZmlsZUpTT04pIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21KU09OKGZpbGVKU09OKTtcblxuICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhzKHBhdGhzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHBhdGhzLmZvckVhY2goZnVuY3Rpb24ocGF0aCkge1xuICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGVzO1xuIl19