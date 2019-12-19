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
    key: 'findFile',
    value: function findFile(callback) {
      return this.array.find(callback) || null; ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlIiwicmVxdWlyZSIsIkZpbGVzIiwiYXJyYXkiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoIiwiZmluZCIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsInNhdmUiLCJmaWxlc0pTT04iLCJmaWxlSlNPTiIsInRvSlNPTiIsImpzb24iLCJmaWxlcyIsImZyb21KU09OIiwiYWRkRmlsZSIsInBhdGhzIiwicGF0aCIsImZyb21QYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiOztJQUVNQyxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7bUNBRWM7QUFDYixVQUFNQyxZQUFZLEtBQUtDLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDdkMsWUFBTUMsV0FBV0QsS0FBS0UsT0FBTCxFQUFqQjs7QUFFQSxlQUFPRCxRQUFQO0FBQ0QsT0FKaUIsQ0FBbEI7O0FBTUEsYUFBT0gsU0FBUDtBQUNEOzs7NEJBRU9FLEksRUFBTTtBQUNaLFdBQUtILEtBQUwsQ0FBV00sSUFBWCxDQUFnQkgsSUFBaEI7QUFDRDs7OzRCQUVPSSxRLEVBQVU7QUFDaEIsYUFBTyxLQUFLUCxLQUFMLENBQVdRLEdBQVgsQ0FBZUQsUUFBZixDQUFQO0FBQ0Q7Ozs2QkFFUUEsUSxFQUFVO0FBQ2pCLGFBQU8sS0FBS1AsS0FBTCxDQUFXUyxJQUFYLENBQWdCRixRQUFoQixDQUFQO0FBQ0Q7OzsrQkFFVUEsUSxFQUFVRyxZLEVBQWM7QUFDakMsYUFBTyxLQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0JKLFFBQWxCLEVBQTRCRyxZQUE1QixDQUFQO0FBQ0Q7OztnQ0FFV0gsUSxFQUFVO0FBQ3BCLFdBQUtQLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQkwsUUFBbkI7QUFDRDs7OzZCQUVRQSxRLEVBQVU7QUFDakIsYUFBTyxLQUFLUCxLQUFMLENBQVdhLElBQVgsQ0FBZ0JOLFFBQWhCLEtBQTZCLElBQXBDLENBRGlCLENBQ3lCO0FBQzNDOzs7eUJBRUlPLHFCLEVBQXVCO0FBQzFCLFdBQUtkLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQixVQUFDVCxJQUFELEVBQVU7QUFDM0JBLGFBQUtZLElBQUwsQ0FBVUQscUJBQVY7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQU1FLFlBQVksS0FBS2hCLEtBQUwsQ0FBV1EsR0FBWCxDQUFlLFVBQUNMLElBQUQsRUFBVTtBQUNuQyxZQUFNYyxXQUFZZCxTQUFTLElBQVYsR0FDR0EsS0FBS2UsTUFBTCxFQURILEdBRUssSUFGdEI7O0FBSUEsZUFBT0QsUUFBUDtBQUNELE9BTlcsQ0FBbEI7QUFBQSxVQU9NRSxPQUFPSCxTQVBiOztBQVNBLGFBQU9HLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUgsWUFBWUcsSUFBbEI7QUFBQSxVQUF3QjtBQUNsQm5CLGNBQVEsRUFEZDtBQUFBLFVBRU1vQixRQUFRLElBQUlyQixLQUFKLENBQVVDLEtBQVYsQ0FGZDs7QUFJQWdCLGdCQUFVSixPQUFWLENBQWtCLFVBQUNLLFFBQUQsRUFBYztBQUM5QixZQUFNRSxPQUFPRixRQUFiO0FBQUEsWUFBd0I7QUFDbEJkLGVBQU9OLEtBQUt3QixRQUFMLENBQWNGLElBQWQsQ0FEYjs7QUFHQUMsY0FBTUUsT0FBTixDQUFjbkIsSUFBZDtBQUNELE9BTEQ7O0FBT0EsYUFBT2lCLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNcEIsUUFBUSxFQUFkO0FBQUEsVUFDTW9CLFFBQVEsSUFBSXJCLEtBQUosQ0FBVUMsS0FBVixDQURkOztBQUdBLGFBQU9vQixLQUFQO0FBQ0Q7Ozs4QkFFZ0JHLEssRUFBT1QscUIsRUFBdUI7QUFDN0MsVUFBTWQsUUFBUSxFQUFkO0FBQUEsVUFDTW9CLFFBQVEsSUFBSXJCLEtBQUosQ0FBVUMsS0FBVixDQURkOztBQUdBdUIsWUFBTVgsT0FBTixDQUFjLFVBQUNZLElBQUQsRUFBVTtBQUN0QixZQUFNckIsT0FBT04sS0FBSzRCLFFBQUwsQ0FBY0QsSUFBZCxFQUFvQlYscUJBQXBCLENBQWI7O0FBRUFNLGNBQU1FLE9BQU4sQ0FBY25CLElBQWQ7QUFDRCxPQUpEOztBQU1BLGFBQU9pQixLQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCNUIsS0FBakIiLCJmaWxlIjoiZmlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKTtcblxuY2xhc3MgRmlsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLm1hcEZpbGUoKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZmlsZSk7XG4gIH1cblxuICBtYXBGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICByZWR1Y2VGaWxlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cblxuICBmb3JFYWNoRmlsZShjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmaW5kRmlsZShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IC8vL1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGZpbGUuc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlSlNPTiA9IChmaWxlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGZpbGVKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlc0pTT047XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goKGZpbGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aHMocGF0aHMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuXG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGVzO1xuIl19