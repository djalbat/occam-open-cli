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
    key: 'fromFilePaths',
    value: function fromFilePaths(filePaths, projectsDirectoryPath) {
      var files = new Files();

      filePaths.forEach(function (filePath) {
        var file = File.fromFilePath(filePath, projectsDirectoryPath);

        files.addFile(file);
      });

      return files;
    }
  }]);

  return Files;
}();

module.exports = Files;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlIiwicmVxdWlyZSIsIkZpbGVzIiwiYXJyYXkiLCJmaWxlIiwicHVzaCIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImZvckVhY2giLCJzYXZlIiwiZmlsZXNKU09OIiwibWFwIiwiZmlsZUpTT04iLCJ0b0pTT04iLCJqc29uIiwiZmlsZXMiLCJmcm9tSlNPTiIsImFkZEZpbGUiLCJmaWxlUGF0aHMiLCJmaWxlUGF0aCIsImZyb21GaWxlUGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjs7SUFFTUMsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDRDs7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCRCxJQUFoQjtBQUNEOzs7eUJBRUlFLHFCLEVBQXVCO0FBQzFCLFdBQUtILEtBQUwsQ0FBV0ksT0FBWCxDQUFtQixVQUFTSCxJQUFULEVBQWU7QUFDaENBLGFBQUtJLElBQUwsQ0FBVUYscUJBQVY7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQU1HLFlBQVksS0FBS04sS0FBTCxDQUFXTyxHQUFYLENBQWUsVUFBU04sSUFBVCxFQUFlO0FBQ3hDLFlBQU1PLFdBQVdQLEtBQUtRLE1BQUwsRUFBakI7O0FBRUEsZUFBT0QsUUFBUDtBQUNELE9BSlcsQ0FBbEI7QUFBQSxVQUtNRSxPQUFPSixTQUxiOztBQU9BLGFBQU9JLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUosWUFBWUksSUFBbEI7QUFBQSxVQUF3QjtBQUNsQkMsY0FBUSxJQUFJWixLQUFKLEVBRGQ7O0FBR0FPLGdCQUFVRixPQUFWLENBQWtCLFVBQVNJLFFBQVQsRUFBbUI7QUFDbkMsWUFBTVAsT0FBT0osS0FBS2UsUUFBTCxDQUFjSixRQUFkLENBQWI7O0FBRUFHLGNBQU1FLE9BQU4sQ0FBY1osSUFBZDtBQUNELE9BSkQ7O0FBTUEsYUFBT1UsS0FBUDtBQUNEOzs7a0NBRW9CRyxTLEVBQVdYLHFCLEVBQXVCO0FBQ3JELFVBQU1RLFFBQVEsSUFBSVosS0FBSixFQUFkOztBQUVBZSxnQkFBVVYsT0FBVixDQUFrQixVQUFTVyxRQUFULEVBQW1CO0FBQ25DLFlBQU1kLE9BQU9KLEtBQUttQixZQUFMLENBQWtCRCxRQUFsQixFQUE0QloscUJBQTVCLENBQWI7O0FBRUFRLGNBQU1FLE9BQU4sQ0FBY1osSUFBZDtBQUNELE9BSkQ7O0FBTUEsYUFBT1UsS0FBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQm5CLEtBQWpCIiwiZmlsZSI6ImZpbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyk7XG5cbmNsYXNzIEZpbGVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG4gIFxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZmlsZSk7XG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICBmaWxlLnNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlc0pTT04gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlSlNPTiA9IGZpbGUudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGZpbGVKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlc0pTT047XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoKTtcbiAgICBcbiAgICBmaWxlc0pTT04uZm9yRWFjaChmdW5jdGlvbihmaWxlSlNPTikge1xuICAgICAgY29uc3QgZmlsZSA9IEZpbGUuZnJvbUpTT04oZmlsZUpTT04pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGhzKGZpbGVQYXRocywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBuZXcgRmlsZXMoKTtcblxuICAgIGZpbGVQYXRocy5mb3JFYWNoKGZ1bmN0aW9uKGZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlcztcbiJdfQ==