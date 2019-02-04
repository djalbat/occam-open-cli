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
      files = new Files();

      filesJSON.forEach(function (fileJSON) {
        var file = File.fromJSON(fileJSON);

        files.addFile(file);
      });

      return files;
    }
  }, {
    key: 'fromPaths',
    value: function fromPaths(paths, projectsDirectoryPath) {
      var files = new Files();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlIiwicmVxdWlyZSIsIkZpbGVzIiwiYXJyYXkiLCJmaWxlIiwicHVzaCIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImZvckVhY2giLCJzYXZlIiwiZmlsZXNKU09OIiwibWFwIiwiZmlsZUpTT04iLCJ0b0pTT04iLCJqc29uIiwiZmlsZXMiLCJmcm9tSlNPTiIsImFkZEZpbGUiLCJwYXRocyIsInBhdGgiLCJmcm9tUGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjs7SUFFTUMsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCRCxJQUFoQjtBQUNEOzs7eUJBRUlFLHFCLEVBQXVCO0FBQzFCLFdBQUtILEtBQUwsQ0FBV0ksT0FBWCxDQUFtQixVQUFTSCxJQUFULEVBQWU7QUFDaENBLGFBQUtJLElBQUwsQ0FBVUYscUJBQVY7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQU1HLFlBQVksS0FBS04sS0FBTCxDQUFXTyxHQUFYLENBQWUsVUFBU04sSUFBVCxFQUFlO0FBQ3hDLFlBQU1PLFdBQVdQLEtBQUtRLE1BQUwsRUFBakI7O0FBRUEsZUFBT0QsUUFBUDtBQUNELE9BSlcsQ0FBbEI7QUFBQSxVQUtNRSxPQUFPSixTQUxiOztBQU9BLGFBQU9JLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUosWUFBWUksSUFBbEI7QUFBQSxVQUF3QjtBQUNsQkMsY0FBUSxJQUFJWixLQUFKLEVBRGQ7O0FBR0FPLGdCQUFVRixPQUFWLENBQWtCLFVBQVNJLFFBQVQsRUFBbUI7QUFDbkMsWUFBTVAsT0FBT0osS0FBS2UsUUFBTCxDQUFjSixRQUFkLENBQWI7O0FBRUFHLGNBQU1FLE9BQU4sQ0FBY1osSUFBZDtBQUNELE9BSkQ7O0FBTUEsYUFBT1UsS0FBUDtBQUNEOzs7OEJBRWdCRyxLLEVBQU9YLHFCLEVBQXVCO0FBQzdDLFVBQU1RLFFBQVEsSUFBSVosS0FBSixFQUFkOztBQUVBZSxZQUFNVixPQUFOLENBQWMsVUFBU1csSUFBVCxFQUFlO0FBQzNCLFlBQU1kLE9BQU9KLEtBQUttQixRQUFMLENBQWNELElBQWQsRUFBb0JaLHFCQUFwQixDQUFiOztBQUVBUSxjQUFNRSxPQUFOLENBQWNaLElBQWQ7QUFDRCxPQUpEOztBQU1BLGFBQU9VLEtBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJuQixLQUFqQiIsImZpbGUiOiJmaWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZScpO1xuXG5jbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgfVxuICBcbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGZpbGUpO1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgZmlsZS5zYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG4gICAgfSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZUpTT04gPSBmaWxlLnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBmaWxlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZXNKU09OO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGZpbGVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKCk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goZnVuY3Rpb24oZmlsZUpTT04pIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21KU09OKGZpbGVKU09OKTtcblxuICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhzKHBhdGhzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBmaWxlcyA9IG5ldyBGaWxlcygpO1xuXG4gICAgcGF0aHMuZm9yRWFjaChmdW5jdGlvbihwYXRoKSB7XG4gICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZXM7XG4iXX0=