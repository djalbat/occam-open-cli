'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jsZip = require('./jsZip'),
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
    key: 'fromURL',
    value: function fromURL(url, callback) {
      jsZip.fromURL(url, function (jsZip) {
        Project.fromJSZip(jsZip, callback);
      });
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbImpzWmlwIiwicmVxdWlyZSIsIkVudHJpZXMiLCJQcm9qZWN0Iiwicm9vdERpcmVjdG9yeU5hbWUiLCJlbnRyaWVzIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwidXJsIiwiY2FsbGJhY2siLCJmcm9tVVJMIiwiZnJvbUpTWmlwIiwicHJvamVjdCIsImdldFJvb3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZnJvbVJvb3REaXJlY3RvcnlOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxXQUFSLENBRGhCOztJQUdNRSxPO0FBQ0osbUJBQVlDLGlCQUFaLEVBQStCQyxPQUEvQixFQUF3QztBQUFBOztBQUN0QyxTQUFLRCxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxVQUFNRCxvQkFBb0IsS0FBS0EsaUJBQS9CO0FBQUEsVUFDTUUsY0FBYyxLQUFLRCxPQUFMLENBQWFFLE1BQWIsRUFEcEI7QUFBQSxVQUVNRixVQUFVQyxXQUZoQjtBQUFBLFVBRThCO0FBQ3hCRSxhQUFPO0FBQ0wsNkJBQXFCSixpQkFEaEI7QUFFTCxtQkFBV0M7QUFGTixPQUhiOztBQVFBLGFBQU9HLElBQVA7QUFDRDs7OzRCQUVjQyxHLEVBQUtDLFEsRUFBVTtBQUM1QlYsWUFBTVcsT0FBTixDQUFjRixHQUFkLEVBQW1CLFVBQVNULEtBQVQsRUFBZ0I7QUFDakNHLGdCQUFRUyxTQUFSLENBQWtCWixLQUFsQixFQUF5QlUsUUFBekI7QUFDRCxPQUZEO0FBR0Q7Ozs4QkFFZ0JWLEssRUFBT1UsUSxFQUFVO0FBQ2hDLFVBQUlHLFVBQVUsSUFBZDs7QUFFQVgsY0FBUVUsU0FBUixDQUFrQlosS0FBbEIsRUFBeUIsVUFBU0ssT0FBVCxFQUFrQjtBQUN6QyxZQUFNRCxvQkFBb0JDLFFBQVFTLG9CQUFSLEVBQTFCOztBQUVBLFlBQUlWLHNCQUFzQixJQUExQixFQUFnQztBQUM5QlMsb0JBQVUsSUFBSVYsT0FBSixDQUFZQyxpQkFBWixFQUErQkMsT0FBL0IsQ0FBVjtBQUNEOztBQUVESyxpQkFBU0csT0FBVDtBQUNELE9BUkQ7QUFTRDs7OzBDQUU0QlQsaUIsRUFBbUJXLHFCLEVBQXVCO0FBQ3JFLFVBQU1WLFVBQVVILFFBQVFjLHFCQUFSLENBQThCWixpQkFBOUIsRUFBaURXLHFCQUFqRCxDQUFoQjtBQUFBLFVBQ01GLFVBQVUsSUFBSVYsT0FBSixDQUFZQyxpQkFBWixFQUErQkMsT0FBL0IsQ0FEaEI7O0FBR0EsYUFBT1EsT0FBUDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQmYsT0FBakIiLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QganNaaXAgPSByZXF1aXJlKCcuL2pzWmlwJyksXG4gICAgICBFbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyk7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihyb290RGlyZWN0b3J5TmFtZSwgZW50cmllcykge1xuICAgIHRoaXMucm9vdERpcmVjdG9yeU5hbWUgPSByb290RGlyZWN0b3J5TmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHJvb3REaXJlY3RvcnlOYW1lID0gdGhpcy5yb290RGlyZWN0b3J5TmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJyb290RGlyZWN0b3J5TmFtZVwiOiByb290RGlyZWN0b3J5TmFtZSxcbiAgICAgICAgICAgIFwiZW50cmllc1wiOiBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21VUkwodXJsLCBjYWxsYmFjaykge1xuICAgIGpzWmlwLmZyb21VUkwodXJsLCBmdW5jdGlvbihqc1ppcCkge1xuICAgICAgUHJvamVjdC5mcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHByb2plY3QgPSBudWxsO1xuXG4gICAgRW50cmllcy5mcm9tSlNaaXAoanNaaXAsIGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHJvb3REaXJlY3RvcnlOYW1lID0gZW50cmllcy5nZXRSb290RGlyZWN0b3J5TmFtZSgpO1xuXG4gICAgICBpZiAocm9vdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHJvb3REaXJlY3RvcnlOYW1lLCBlbnRyaWVzKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2socHJvamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJvb3REaXJlY3RvcnlOYW1lKHJvb3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tUm9vdERpcmVjdG9yeU5hbWUocm9vdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHJvb3REaXJlY3RvcnlOYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdDtcbiJdfQ==