"use strict";

var _file = _interopRequireDefault(require("./file"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Files = /*#__PURE__*/function () {
  function Files(array) {
    _classCallCheck(this, Files);

    this.array = array;
  }

  _createClass(Files, [{
    key: "getFilePaths",
    value: function getFilePaths() {
      var filePaths = this.mapFile(function (file) {
        var filePath = file.getPath();
        return filePath;
      });
      return filePaths;
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      this.array.push(file);
    }
  }, {
    key: "mapFile",
    value: function mapFile(callback) {
      return this.array.map(callback);
    }
  }, {
    key: "someFile",
    value: function someFile(callback) {
      return this.array.some(callback);
    }
  }, {
    key: "reduceFile",
    value: function reduceFile(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: "forEachFile",
    value: function forEachFile(callback) {
      this.array.forEach(callback);
    }
  }, {
    key: "findFile",
    value: function findFile(callback) {
      return this.array.find(callback) || null; ///
    }
  }, {
    key: "save",
    value: function save(projectsDirectoryPath) {
      this.array.forEach(function (file) {
        file.save(projectsDirectoryPath);
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var filesJSON = this.array.map(function (file) {
        var fileJSON = file !== null ? file.toJSON() : null;
        return fileJSON;
      }),
          json = filesJSON;
      return json;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(json) {
      var filesJSON = json,
          ///
      array = [],
          files = new Files(array);
      filesJSON.forEach(function (fileJSON) {
        var json = fileJSON,
            ///
        file = _file["default"].fromJSON(json);

        files.addFile(file);
      });
      return files;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var array = [],
          files = new Files(array);
      return files;
    }
  }, {
    key: "fromPaths",
    value: function fromPaths(paths, projectsDirectoryPath) {
      var array = [],
          files = new Files(array);
      paths.forEach(function (path) {
        var file = _file["default"].fromPath(path, projectsDirectoryPath);

        files.addFile(file);
      });
      return files;
    }
  }]);

  return Files;
}();

module.exports = Files;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVzLmpzIl0sIm5hbWVzIjpbIkZpbGVzIiwiYXJyYXkiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsInNvbWUiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoIiwiZmluZCIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsInNhdmUiLCJmaWxlc0pTT04iLCJmaWxlSlNPTiIsInRvSlNPTiIsImpzb24iLCJmaWxlcyIsIkZpbGUiLCJmcm9tSlNPTiIsImFkZEZpbGUiLCJwYXRocyIsInBhdGgiLCJmcm9tUGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7O0lBRU1BLEs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzttQ0FFYztBQUNiLFVBQU1DLFNBQVMsR0FBRyxLQUFLQyxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZDLFlBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFMLEVBQWpCO0FBRUEsZUFBT0QsUUFBUDtBQUNELE9BSmlCLENBQWxCO0FBTUEsYUFBT0gsU0FBUDtBQUNEOzs7NEJBRU9FLEksRUFBTTtBQUNaLFdBQUtILEtBQUwsQ0FBV00sSUFBWCxDQUFnQkgsSUFBaEI7QUFDRDs7OzRCQUVPSSxRLEVBQVU7QUFDaEIsYUFBTyxLQUFLUCxLQUFMLENBQVdRLEdBQVgsQ0FBZUQsUUFBZixDQUFQO0FBQ0Q7Ozs2QkFFUUEsUSxFQUFVO0FBQ2pCLGFBQU8sS0FBS1AsS0FBTCxDQUFXUyxJQUFYLENBQWdCRixRQUFoQixDQUFQO0FBQ0Q7OzsrQkFFVUEsUSxFQUFVRyxZLEVBQWM7QUFDakMsYUFBTyxLQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0JKLFFBQWxCLEVBQTRCRyxZQUE1QixDQUFQO0FBQ0Q7OztnQ0FFV0gsUSxFQUFVO0FBQ3BCLFdBQUtQLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQkwsUUFBbkI7QUFDRDs7OzZCQUVRQSxRLEVBQVU7QUFDakIsYUFBTyxLQUFLUCxLQUFMLENBQVdhLElBQVgsQ0FBZ0JOLFFBQWhCLEtBQTZCLElBQXBDLENBRGlCLENBQ3lCO0FBQzNDOzs7eUJBRUlPLHFCLEVBQXVCO0FBQzFCLFdBQUtkLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQixVQUFDVCxJQUFELEVBQVU7QUFDM0JBLFFBQUFBLElBQUksQ0FBQ1ksSUFBTCxDQUFVRCxxQkFBVjtBQUNELE9BRkQ7QUFHRDs7OzZCQUVRO0FBQ1AsVUFBTUUsU0FBUyxHQUFHLEtBQUtoQixLQUFMLENBQVdRLEdBQVgsQ0FBZSxVQUFDTCxJQUFELEVBQVU7QUFDbkMsWUFBTWMsUUFBUSxHQUFJZCxJQUFJLEtBQUssSUFBVixHQUNHQSxJQUFJLENBQUNlLE1BQUwsRUFESCxHQUVLLElBRnRCO0FBSUEsZUFBT0QsUUFBUDtBQUNELE9BTlcsQ0FBbEI7QUFBQSxVQU9NRSxJQUFJLEdBQUdILFNBUGI7QUFTQSxhQUFPRyxJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1ILFNBQVMsR0FBR0csSUFBbEI7QUFBQSxVQUF3QjtBQUNsQm5CLE1BQUFBLEtBQUssR0FBRyxFQURkO0FBQUEsVUFFTW9CLEtBQUssR0FBRyxJQUFJckIsS0FBSixDQUFVQyxLQUFWLENBRmQ7QUFJQWdCLE1BQUFBLFNBQVMsQ0FBQ0osT0FBVixDQUFrQixVQUFDSyxRQUFELEVBQWM7QUFDOUIsWUFBTUUsSUFBSSxHQUFHRixRQUFiO0FBQUEsWUFBd0I7QUFDbEJkLFFBQUFBLElBQUksR0FBR2tCLGlCQUFLQyxRQUFMLENBQWNILElBQWQsQ0FEYjs7QUFHQUMsUUFBQUEsS0FBSyxDQUFDRyxPQUFOLENBQWNwQixJQUFkO0FBQ0QsT0FMRDtBQU9BLGFBQU9pQixLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTXBCLEtBQUssR0FBRyxFQUFkO0FBQUEsVUFDTW9CLEtBQUssR0FBRyxJQUFJckIsS0FBSixDQUFVQyxLQUFWLENBRGQ7QUFHQSxhQUFPb0IsS0FBUDtBQUNEOzs7OEJBRWdCSSxLLEVBQU9WLHFCLEVBQXVCO0FBQzdDLFVBQU1kLEtBQUssR0FBRyxFQUFkO0FBQUEsVUFDTW9CLEtBQUssR0FBRyxJQUFJckIsS0FBSixDQUFVQyxLQUFWLENBRGQ7QUFHQXdCLE1BQUFBLEtBQUssQ0FBQ1osT0FBTixDQUFjLFVBQUNhLElBQUQsRUFBVTtBQUN0QixZQUFNdEIsSUFBSSxHQUFHa0IsaUJBQUtLLFFBQUwsQ0FBY0QsSUFBZCxFQUFvQlgscUJBQXBCLENBQWI7O0FBRUFNLFFBQUFBLEtBQUssQ0FBQ0csT0FBTixDQUFjcEIsSUFBZDtBQUNELE9BSkQ7QUFNQSxhQUFPaUIsS0FBUDtBQUNEOzs7Ozs7QUFHSE8sTUFBTSxDQUFDQyxPQUFQLEdBQWlCN0IsS0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5jbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgZmlsZS5zYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG4gICAgfSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBmaWxlc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcbiAgICBcbiAgICBmaWxlc0pTT04uZm9yRWFjaCgoZmlsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBmaWxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbik7XG5cbiAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRocyhwYXRocywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG5cbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZXM7XG4iXX0=