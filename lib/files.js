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
    key: 'addFile',
    value: function addFile(file) {
      this.array.push(file);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlIiwicmVxdWlyZSIsIkZpbGVzIiwiYXJyYXkiLCJmaWxlIiwicHVzaCIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImZvckVhY2giLCJzYXZlIiwiZmlsZXNKU09OIiwibWFwIiwiZmlsZUpTT04iLCJ0b0pTT04iLCJqc29uIiwiZmlsZXMiLCJmcm9tSlNPTiIsImFkZEZpbGUiLCJwYXRocyIsInBhdGgiLCJmcm9tUGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjs7SUFFTUMsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCRCxJQUFoQjtBQUNEOzs7eUJBRUlFLHFCLEVBQXVCO0FBQzFCLFdBQUtILEtBQUwsQ0FBV0ksT0FBWCxDQUFtQixVQUFTSCxJQUFULEVBQWU7QUFDaENBLGFBQUtJLElBQUwsQ0FBVUYscUJBQVY7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQU1HLFlBQVksS0FBS04sS0FBTCxDQUFXTyxHQUFYLENBQWUsVUFBU04sSUFBVCxFQUFlO0FBQ3hDLFlBQU1PLFdBQVdQLEtBQUtRLE1BQUwsRUFBakI7O0FBRUEsZUFBT0QsUUFBUDtBQUNELE9BSlcsQ0FBbEI7QUFBQSxVQUtNRSxPQUFPSixTQUxiOztBQU9BLGFBQU9JLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUosWUFBWUksSUFBbEI7QUFBQSxVQUF3QjtBQUNsQlYsY0FBUSxFQURkO0FBQUEsVUFFTVcsUUFBUSxJQUFJWixLQUFKLENBQVVDLEtBQVYsQ0FGZDs7QUFJQU0sZ0JBQVVGLE9BQVYsQ0FBa0IsVUFBU0ksUUFBVCxFQUFtQjtBQUNuQyxZQUFNUCxPQUFPSixLQUFLZSxRQUFMLENBQWNKLFFBQWQsQ0FBYjs7QUFFQUcsY0FBTUUsT0FBTixDQUFjWixJQUFkO0FBQ0QsT0FKRDs7QUFNQSxhQUFPVSxLQUFQO0FBQ0Q7Ozs4QkFFZ0JHLEssRUFBT1gscUIsRUFBdUI7QUFDN0MsVUFBTUgsUUFBUSxFQUFkO0FBQUEsVUFDTVcsUUFBUSxJQUFJWixLQUFKLENBQVVDLEtBQVYsQ0FEZDs7QUFHQWMsWUFBTVYsT0FBTixDQUFjLFVBQVNXLElBQVQsRUFBZTtBQUMzQixZQUFNZCxPQUFPSixLQUFLbUIsUUFBTCxDQUFjRCxJQUFkLEVBQW9CWixxQkFBcEIsQ0FBYjs7QUFFQVEsY0FBTUUsT0FBTixDQUFjWixJQUFkO0FBQ0QsT0FKRDs7QUFNQSxhQUFPVSxLQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCbkIsS0FBakIiLCJmaWxlIjoiZmlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZpbGUgPSByZXF1aXJlKCcuL2ZpbGUnKTtcblxuY2xhc3MgRmlsZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cbiAgXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIHNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIGZpbGUuc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gZmlsZS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBmaWxlc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcbiAgICBcbiAgICBmaWxlc0pTT04uZm9yRWFjaChmdW5jdGlvbihmaWxlSlNPTikge1xuICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbUpTT04oZmlsZUpTT04pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aHMocGF0aHMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuXG4gICAgcGF0aHMuZm9yRWFjaChmdW5jdGlvbihwYXRoKSB7XG4gICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZXM7XG4iXX0=