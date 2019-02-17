'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var File = require('./file');

var Files = function () {
  function Files() {
    _classCallCheck(this, Files);

    this.array = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlIiwicmVxdWlyZSIsIkZpbGVzIiwiYXJyYXkiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJmb3JFYWNoIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwic2F2ZSIsImZpbGVzSlNPTiIsImZpbGVKU09OIiwidG9KU09OIiwianNvbiIsImZpbGVzIiwiZnJvbUpTT04iLCJhZGRGaWxlIiwicGF0aHMiLCJwYXRoIiwiZnJvbVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7O0lBRU1DLEs7QUFDSixtQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7Ozs7bUNBRWM7QUFDYixVQUFNQyxZQUFZLEtBQUtDLE9BQUwsQ0FBYSxVQUFTQyxJQUFULEVBQWU7QUFDNUMsWUFBTUMsV0FBV0QsS0FBS0UsT0FBTCxFQUFqQjs7QUFFQSxlQUFPRCxRQUFQO0FBQ0QsT0FKaUIsQ0FBbEI7O0FBTUEsYUFBT0gsU0FBUDtBQUNEOzs7NEJBRU9FLEksRUFBTTtBQUNaLFdBQUtILEtBQUwsQ0FBV00sSUFBWCxDQUFnQkgsSUFBaEI7QUFDRDs7OzRCQUVPSSxRLEVBQVU7QUFDaEIsV0FBS1AsS0FBTCxDQUFXUSxHQUFYLENBQWVELFFBQWY7QUFDRDs7OzZCQUVRQSxRLEVBQVU7QUFDakIsYUFBTyxLQUFLUCxLQUFMLENBQVdTLElBQVgsQ0FBZ0JGLFFBQWhCLENBQVA7QUFDRDs7O2dDQUVXQSxRLEVBQVU7QUFDcEIsV0FBS1AsS0FBTCxDQUFXVSxPQUFYLENBQW1CSCxRQUFuQjtBQUNEOzs7K0JBRVVBLFEsRUFBVUksWSxFQUFjO0FBQ2pDLGFBQU8sS0FBS1gsS0FBTCxDQUFXWSxNQUFYLENBQWtCTCxRQUFsQixFQUE0QkksWUFBNUIsQ0FBUDtBQUNEOzs7eUJBRUlFLHFCLEVBQXVCO0FBQzFCLFdBQUtiLEtBQUwsQ0FBV1UsT0FBWCxDQUFtQixVQUFTUCxJQUFULEVBQWU7QUFDaENBLGFBQUtXLElBQUwsQ0FBVUQscUJBQVY7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQU1FLFlBQVksS0FBS2YsS0FBTCxDQUFXUSxHQUFYLENBQWUsVUFBU0wsSUFBVCxFQUFlO0FBQ3hDLFlBQU1hLFdBQVdiLEtBQUtjLE1BQUwsRUFBakI7O0FBRUEsZUFBT0QsUUFBUDtBQUNELE9BSlcsQ0FBbEI7QUFBQSxVQUtNRSxPQUFPSCxTQUxiOztBQU9BLGFBQU9HLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUgsWUFBWUcsSUFBbEI7QUFBQSxVQUF3QjtBQUNsQmxCLGNBQVEsRUFEZDtBQUFBLFVBRU1tQixRQUFRLElBQUlwQixLQUFKLENBQVVDLEtBQVYsQ0FGZDs7QUFJQWUsZ0JBQVVMLE9BQVYsQ0FBa0IsVUFBU00sUUFBVCxFQUFtQjtBQUNuQyxZQUFNYixPQUFPTixLQUFLdUIsUUFBTCxDQUFjSixRQUFkLENBQWI7O0FBRUFHLGNBQU1FLE9BQU4sQ0FBY2xCLElBQWQ7QUFDRCxPQUpEOztBQU1BLGFBQU9nQixLQUFQO0FBQ0Q7Ozs4QkFFZ0JHLEssRUFBT1QscUIsRUFBdUI7QUFDN0MsVUFBTWIsUUFBUSxFQUFkO0FBQUEsVUFDTW1CLFFBQVEsSUFBSXBCLEtBQUosQ0FBVUMsS0FBVixDQURkOztBQUdBc0IsWUFBTVosT0FBTixDQUFjLFVBQVNhLElBQVQsRUFBZTtBQUMzQixZQUFNcEIsT0FBT04sS0FBSzJCLFFBQUwsQ0FBY0QsSUFBZCxFQUFvQlYscUJBQXBCLENBQWI7O0FBRUFNLGNBQU1FLE9BQU4sQ0FBY2xCLElBQWQ7QUFDRCxPQUpEOztBQU1BLGFBQU9nQixLQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCM0IsS0FBakIiLCJmaWxlIjoiZmlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKTtcblxuY2xhc3MgRmlsZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5tYXBGaWxlKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZmlsZSk7XG4gIH1cblxuICBtYXBGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIHNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIGZpbGUuc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gZmlsZS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBmaWxlc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcbiAgICBcbiAgICBmaWxlc0pTT04uZm9yRWFjaChmdW5jdGlvbihmaWxlSlNPTikge1xuICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbUpTT04oZmlsZUpTT04pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aHMocGF0aHMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuXG4gICAgcGF0aHMuZm9yRWFjaChmdW5jdGlvbihwYXRoKSB7XG4gICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZXM7XG4iXX0=