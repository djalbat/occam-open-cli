'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('./util'),
    Entries = require('./entries');

var Project = function () {
  function Project(rootDirectoryName, entries) {
    _classCallCheck(this, Project);

    this.rootDirectoryName = rootDirectoryName;
    this.entries = entries;
  }

  _createClass(Project, [{
    key: 'toJSON',
    value: function toJSON() {
      var rootDirectoryName = this.rootDirectoryName,
          entriesJSON = this.entries.toJSON(),
          entries = entriesJSON,
          ///
      json = {
        "rootDirectoryName": rootDirectoryName,
        "entries": entries
      };

      return json;
    }
  }], [{
    key: 'fromJSZip',
    value: function fromJSZip(jsZip, callback) {
      var project = null;

      Entries.fromJSZip(jsZip, function (entries) {
        var rootDirectoryName = entries.getRootDirectoryName();

        if (rootDirectoryName !== null) {
          project = new Project(rootDirectoryName, entries);
        }

        callback(project);
      });
    }
  }, {
    key: 'fromRootDirectoryName',
    value: function fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath) {
      var entries = Entries.fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath),
          project = new Project(rootDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiRW50cmllcyIsIlByb2plY3QiLCJyb290RGlyZWN0b3J5TmFtZSIsImVudHJpZXMiLCJlbnRyaWVzSlNPTiIsInRvSlNPTiIsImpzb24iLCJqc1ppcCIsImNhbGxiYWNrIiwicHJvamVjdCIsImZyb21KU1ppcCIsImdldFJvb3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZnJvbVJvb3REaXJlY3RvcnlOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxXQUFSLENBRGhCOztJQUdNRSxPO0FBQ0osbUJBQVlDLGlCQUFaLEVBQStCQyxPQUEvQixFQUF3QztBQUFBOztBQUN0QyxTQUFLRCxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxVQUFNRCxvQkFBb0IsS0FBS0EsaUJBQS9CO0FBQUEsVUFDTUUsY0FBYyxLQUFLRCxPQUFMLENBQWFFLE1BQWIsRUFEcEI7QUFBQSxVQUVNRixVQUFVQyxXQUZoQjtBQUFBLFVBRThCO0FBQ3hCRSxhQUFPO0FBQ0wsNkJBQXFCSixpQkFEaEI7QUFFTCxtQkFBV0M7QUFGTixPQUhiOztBQVFBLGFBQU9HLElBQVA7QUFDRDs7OzhCQUVnQkMsSyxFQUFPQyxRLEVBQVU7QUFDaEMsVUFBSUMsVUFBVSxJQUFkOztBQUVBVCxjQUFRVSxTQUFSLENBQWtCSCxLQUFsQixFQUF5QixVQUFTSixPQUFULEVBQWtCO0FBQ3pDLFlBQU1ELG9CQUFvQkMsUUFBUVEsb0JBQVIsRUFBMUI7O0FBRUEsWUFBSVQsc0JBQXNCLElBQTFCLEVBQWdDO0FBQzlCTyxvQkFBVSxJQUFJUixPQUFKLENBQVlDLGlCQUFaLEVBQStCQyxPQUEvQixDQUFWO0FBQ0Q7O0FBRURLLGlCQUFTQyxPQUFUO0FBQ0QsT0FSRDtBQVNEOzs7MENBRTRCUCxpQixFQUFtQlUscUIsRUFBdUI7QUFDckUsVUFBTVQsVUFBVUgsUUFBUWEscUJBQVIsQ0FBOEJYLGlCQUE5QixFQUFpRFUscUJBQWpELENBQWhCO0FBQUEsVUFDTUgsVUFBVSxJQUFJUixPQUFKLENBQVlDLGlCQUFaLEVBQStCQyxPQUEvQixDQURoQjs7QUFHQSxhQUFPTSxPQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCZCxPQUFqQiIsImZpbGUiOiJwcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyksXG4gICAgICBFbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyk7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihyb290RGlyZWN0b3J5TmFtZSwgZW50cmllcykge1xuICAgIHRoaXMucm9vdERpcmVjdG9yeU5hbWUgPSByb290RGlyZWN0b3J5TmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHJvb3REaXJlY3RvcnlOYW1lID0gdGhpcy5yb290RGlyZWN0b3J5TmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJyb290RGlyZWN0b3J5TmFtZVwiOiByb290RGlyZWN0b3J5TmFtZSxcbiAgICAgICAgICAgIFwiZW50cmllc1wiOiBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGxldCBwcm9qZWN0ID0gbnVsbDtcblxuICAgIEVudHJpZXMuZnJvbUpTWmlwKGpzWmlwLCBmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICBjb25zdCByb290RGlyZWN0b3J5TmFtZSA9IGVudHJpZXMuZ2V0Um9vdERpcmVjdG9yeU5hbWUoKTtcblxuICAgICAgaWYgKHJvb3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChyb290RGlyZWN0b3J5TmFtZSwgZW50cmllcyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKHByb2plY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb290RGlyZWN0b3J5TmFtZShyb290RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbVJvb3REaXJlY3RvcnlOYW1lKHJvb3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChyb290RGlyZWN0b3J5TmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Q7XG4iXX0=