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
    value: function fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
      var entries = Entries.fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories),
          project = new Project(rootDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbImpzWmlwIiwicmVxdWlyZSIsIkVudHJpZXMiLCJQcm9qZWN0Iiwicm9vdERpcmVjdG9yeU5hbWUiLCJlbnRyaWVzIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwidXJsIiwiY2FsbGJhY2siLCJmcm9tVVJMIiwiZnJvbUpTWmlwIiwicHJvamVjdCIsImdldFJvb3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Sb290RGlyZWN0b3J5TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01DLFVBQVVELFFBQVEsV0FBUixDQURoQjs7SUFHTUUsTztBQUNKLG1CQUFZQyxpQkFBWixFQUErQkMsT0FBL0IsRUFBd0M7QUFBQTs7QUFDdEMsU0FBS0QsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OzZCQUVRO0FBQ1AsVUFBTUQsb0JBQW9CLEtBQUtBLGlCQUEvQjtBQUFBLFVBQ01FLGNBQWMsS0FBS0QsT0FBTCxDQUFhRSxNQUFiLEVBRHBCO0FBQUEsVUFFTUYsVUFBVUMsV0FGaEI7QUFBQSxVQUU4QjtBQUN4QkUsYUFBTztBQUNMLDZCQUFxQkosaUJBRGhCO0FBRUwsbUJBQVdDO0FBRk4sT0FIYjs7QUFRQSxhQUFPRyxJQUFQO0FBQ0Q7Ozs0QkFFY0MsRyxFQUFLQyxRLEVBQVU7QUFDNUJWLFlBQU1XLE9BQU4sQ0FBY0YsR0FBZCxFQUFtQixVQUFTVCxLQUFULEVBQWdCO0FBQ2pDRyxnQkFBUVMsU0FBUixDQUFrQlosS0FBbEIsRUFBeUJVLFFBQXpCO0FBQ0QsT0FGRDtBQUdEOzs7OEJBRWdCVixLLEVBQU9VLFEsRUFBVTtBQUNoQyxVQUFJRyxVQUFVLElBQWQ7O0FBRUFYLGNBQVFVLFNBQVIsQ0FBa0JaLEtBQWxCLEVBQXlCLFVBQVNLLE9BQVQsRUFBa0I7QUFDekMsWUFBTUQsb0JBQW9CQyxRQUFRUyxvQkFBUixFQUExQjs7QUFFQSxZQUFJVixzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUJTLG9CQUFVLElBQUlWLE9BQUosQ0FBWUMsaUJBQVosRUFBK0JDLE9BQS9CLENBQVY7QUFDRDs7QUFFREssaUJBQVNHLE9BQVQ7QUFDRCxPQVJEO0FBU0Q7OzswQ0FFNEJULGlCLEVBQW1CVyxxQixFQUF1QkMsa0MsRUFBb0M7QUFDekcsVUFBTVgsVUFBVUgsUUFBUWUscUJBQVIsQ0FBOEJiLGlCQUE5QixFQUFpRFcscUJBQWpELEVBQXdFQyxrQ0FBeEUsQ0FBaEI7QUFBQSxVQUNNSCxVQUFVLElBQUlWLE9BQUosQ0FBWUMsaUJBQVosRUFBK0JDLE9BQS9CLENBRGhCOztBQUdBLGFBQU9RLE9BQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJoQixPQUFqQiIsImZpbGUiOiJwcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqc1ppcCA9IHJlcXVpcmUoJy4vanNaaXAnKSxcbiAgICAgIEVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHJvb3REaXJlY3RvcnlOYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5yb290RGlyZWN0b3J5TmFtZSA9IHJvb3REaXJlY3RvcnlOYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgcm9vdERpcmVjdG9yeU5hbWUgPSB0aGlzLnJvb3REaXJlY3RvcnlOYW1lLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInJvb3REaXJlY3RvcnlOYW1lXCI6IHJvb3REaXJlY3RvcnlOYW1lLFxuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVVSTCh1cmwsIGNhbGxiYWNrKSB7XG4gICAganNaaXAuZnJvbVVSTCh1cmwsIGZ1bmN0aW9uKGpzWmlwKSB7XG4gICAgICBQcm9qZWN0LmZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcHJvamVjdCA9IG51bGw7XG5cbiAgICBFbnRyaWVzLmZyb21KU1ppcChqc1ppcCwgZnVuY3Rpb24oZW50cmllcykge1xuICAgICAgY29uc3Qgcm9vdERpcmVjdG9yeU5hbWUgPSBlbnRyaWVzLmdldFJvb3REaXJlY3RvcnlOYW1lKCk7XG5cbiAgICAgIGlmIChyb290RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3Qocm9vdERpcmVjdG9yeU5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm9vdERpcmVjdG9yeU5hbWUocm9vdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Sb290RGlyZWN0b3J5TmFtZShyb290RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3Qocm9vdERpcmVjdG9yeU5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0O1xuIl19