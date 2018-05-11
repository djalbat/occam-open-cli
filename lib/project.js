'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSZip = require('jszip'),
    request = require('request');

var Entries = require('./entries');

var Project = function () {
  function Project(name, entries) {
    _classCallCheck(this, Project);

    this.name = name;
    this.entries = entries;
  }

  _createClass(Project, [{
    key: 'toJSON',
    value: function toJSON() {
      var name = this.name,
          entriesJSON = this.entries.toJSON(),
          entries = entriesJSON,
          ///
      json = {
        "name": name,
        "entries": entries
      };

      return json;
    }
  }], [{
    key: 'fromURL',
    value: function fromURL(url, callback) {
      var params = {
        method: "GET",
        url: url,
        encoding: null
      };

      request(params, function (error, response) {
        var statusCode = response.statusCode;


        error = error || statusCode !== 200; ///

        if (error) {
          callback(null);

          return;
        }

        var body = response.body;


        JSZip.loadAsync(body).then(function (jsZip) {
          Project.fromJSZip(jsZip, callback);
        });
      });
    }
  }, {
    key: 'fromJSZip',
    value: function fromJSZip(jsZip, callback) {
      var project = null;

      Entries.fromJSZip(jsZip, function (entries) {
        var topmostDirectoryName = entries.getTopmostDirectoryName();

        if (topmostDirectoryName !== null) {
          var name = topmostDirectoryName; ///

          project = new Project(name, entries);
        }

        callback(project);
      });
    }
  }, {
    key: 'fromTopmostDirectoryName',
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories) {
      var entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwidXJsIiwiY2FsbGJhY2siLCJwYXJhbXMiLCJtZXRob2QiLCJlbmNvZGluZyIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiYm9keSIsImxvYWRBc3luYyIsInRoZW4iLCJqc1ppcCIsImZyb21KU1ppcCIsInByb2plY3QiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzIiwiZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxTQUFSLENBRGhCOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjs7SUFFTUcsTztBQUNKLG1CQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7Ozs2QkFFUTtBQUNQLFVBQU1ELE9BQU8sS0FBS0EsSUFBbEI7QUFBQSxVQUNNRSxjQUFjLEtBQUtELE9BQUwsQ0FBYUUsTUFBYixFQURwQjtBQUFBLFVBRU1GLFVBQVVDLFdBRmhCO0FBQUEsVUFFOEI7QUFDeEJFLGFBQU87QUFDTCxnQkFBUUosSUFESDtBQUVMLG1CQUFXQztBQUZOLE9BSGI7O0FBUUEsYUFBT0csSUFBUDtBQUNEOzs7NEJBRWNDLEcsRUFBS0MsUSxFQUFVO0FBQzVCLFVBQU1DLFNBQVM7QUFDUEMsZ0JBQVMsS0FERjtBQUVQSCxhQUFNQSxHQUZDO0FBR1BJLGtCQUFVO0FBSEgsT0FBZjs7QUFNQVosY0FBUVUsTUFBUixFQUFnQixVQUFTRyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQjtBQUFBLFlBQ2hDQyxVQURnQyxHQUNqQkQsUUFEaUIsQ0FDaENDLFVBRGdDOzs7QUFHeENGLGdCQUFRQSxTQUFVRSxlQUFlLEdBQWpDLENBSHdDLENBR0E7O0FBRXhDLFlBQUlGLEtBQUosRUFBVztBQUNUSixtQkFBUyxJQUFUOztBQUVBO0FBQ0Q7O0FBVHVDLFlBV2hDTyxJQVhnQyxHQVd2QkYsUUFYdUIsQ0FXaENFLElBWGdDOzs7QUFheENsQixjQUFNbUIsU0FBTixDQUFnQkQsSUFBaEIsRUFDR0UsSUFESCxDQUNRLFVBQVNDLEtBQVQsRUFBZ0I7QUFDcEJqQixrQkFBUWtCLFNBQVIsQ0FBa0JELEtBQWxCLEVBQXlCVixRQUF6QjtBQUNELFNBSEg7QUFJRCxPQWpCRDtBQWtCRDs7OzhCQUVnQlUsSyxFQUFPVixRLEVBQVU7QUFDaEMsVUFBSVksVUFBVSxJQUFkOztBQUVBcEIsY0FBUW1CLFNBQVIsQ0FBa0JELEtBQWxCLEVBQXlCLFVBQVNmLE9BQVQsRUFBa0I7QUFDekMsWUFBTWtCLHVCQUF1QmxCLFFBQVFtQix1QkFBUixFQUE3Qjs7QUFFQSxZQUFJRCx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakMsY0FBTW5CLE9BQU9tQixvQkFBYixDQURpQyxDQUNHOztBQUVwQ0Qsb0JBQVUsSUFBSW5CLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsQ0FBVjtBQUNEOztBQUVESyxpQkFBU1ksT0FBVDtBQUNELE9BVkQ7QUFXRDs7OzZDQUUrQkMsb0IsRUFBc0JFLHFCLEVBQXVCQyx3QixFQUEwQkMsaUMsRUFBbUM7QUFDeEksVUFBTXRCLFVBQVVILFFBQVEwQix3QkFBUixDQUFpQ0wsb0JBQWpDLEVBQXVERSxxQkFBdkQsRUFBOEVDLHdCQUE5RSxFQUF3R0MsaUNBQXhHLENBQWhCO0FBQUEsVUFDTUwsVUFBVSxJQUFJbkIsT0FBSixDQUFZb0Isb0JBQVosRUFBa0NsQixPQUFsQyxDQURoQjs7QUFHQSxhQUFPaUIsT0FBUDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQjNCLE9BQWpCIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEpTWmlwID0gcmVxdWlyZSgnanN6aXAnKSxcbiAgICAgIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbmNvbnN0IEVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVudHJpZXNcIjogZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVVJMKHVybCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBtZXRob2QgOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsIDogdXJsLFxuICAgICAgICAgICAgZW5jb2Rpbmc6IG51bGxcbiAgICAgICAgICB9O1xuXG4gICAgcmVxdWVzdChwYXJhbXMsIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSkge1xuICAgICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSByZXNwb25zZTtcblxuICAgICAgZXJyb3IgPSBlcnJvciB8fCAoc3RhdHVzQ29kZSAhPT0gMjAwKTsgIC8vL1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGJvZHkgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBKU1ppcC5sb2FkQXN5bmMoYm9keSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oanNaaXApIHtcbiAgICAgICAgICBQcm9qZWN0LmZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHByb2plY3QgPSBudWxsO1xuXG4gICAgRW50cmllcy5mcm9tSlNaaXAoanNaaXAsIGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZW50cmllcy5nZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKHByb2plY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRvcG1vc3REaXJlY3RvcnlOYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdDtcbiJdfQ==