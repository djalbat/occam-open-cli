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
      var method = 'GET',
          encoding = null,
          params = {
        url: url,
        method: method,
        encoding: encoding
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwidXJsIiwiY2FsbGJhY2siLCJtZXRob2QiLCJlbmNvZGluZyIsInBhcmFtcyIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiYm9keSIsImxvYWRBc3luYyIsInRoZW4iLCJqc1ppcCIsImZyb21KU1ppcCIsInByb2plY3QiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzIiwiZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxTQUFSLENBRGhCOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjs7SUFFTUcsTztBQUNKLG1CQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7Ozs2QkFFUTtBQUNQLFVBQU1ELE9BQU8sS0FBS0EsSUFBbEI7QUFBQSxVQUNNRSxjQUFjLEtBQUtELE9BQUwsQ0FBYUUsTUFBYixFQURwQjtBQUFBLFVBRU1GLFVBQVVDLFdBRmhCO0FBQUEsVUFFOEI7QUFDeEJFLGFBQU87QUFDTCxnQkFBUUosSUFESDtBQUVMLG1CQUFXQztBQUZOLE9BSGI7O0FBUUEsYUFBT0csSUFBUDtBQUNEOzs7NEJBRWNDLEcsRUFBS0MsUSxFQUFVO0FBQzVCLFVBQU1DLFNBQVMsS0FBZjtBQUFBLFVBQ01DLFdBQVcsSUFEakI7QUFBQSxVQUVNQyxTQUFTO0FBQ1BKLGFBQU1BLEdBREM7QUFFUEUsZ0JBQVNBLE1BRkY7QUFHUEMsa0JBQVVBO0FBSEgsT0FGZjs7QUFRQVgsY0FBUVksTUFBUixFQUFnQixVQUFTQyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQjtBQUFBLFlBQ2hDQyxVQURnQyxHQUNqQkQsUUFEaUIsQ0FDaENDLFVBRGdDOzs7QUFHeENGLGdCQUFRQSxTQUFVRSxlQUFlLEdBQWpDLENBSHdDLENBR0E7O0FBRXhDLFlBQUlGLEtBQUosRUFBVztBQUNUSixtQkFBUyxJQUFUOztBQUVBO0FBQ0Q7O0FBVHVDLFlBV2hDTyxJQVhnQyxHQVd2QkYsUUFYdUIsQ0FXaENFLElBWGdDOzs7QUFheENsQixjQUFNbUIsU0FBTixDQUFnQkQsSUFBaEIsRUFDR0UsSUFESCxDQUNRLFVBQVNDLEtBQVQsRUFBZ0I7QUFDcEJqQixrQkFBUWtCLFNBQVIsQ0FBa0JELEtBQWxCLEVBQXlCVixRQUF6QjtBQUNELFNBSEg7QUFJRCxPQWpCRDtBQWtCRDs7OzhCQUVnQlUsSyxFQUFPVixRLEVBQVU7QUFDaEMsVUFBSVksVUFBVSxJQUFkOztBQUVBcEIsY0FBUW1CLFNBQVIsQ0FBa0JELEtBQWxCLEVBQXlCLFVBQVNmLE9BQVQsRUFBa0I7QUFDekMsWUFBTWtCLHVCQUF1QmxCLFFBQVFtQix1QkFBUixFQUE3Qjs7QUFFQSxZQUFJRCx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakMsY0FBTW5CLE9BQU9tQixvQkFBYixDQURpQyxDQUNHOztBQUVwQ0Qsb0JBQVUsSUFBSW5CLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsQ0FBVjtBQUNEOztBQUVESyxpQkFBU1ksT0FBVDtBQUNELE9BVkQ7QUFXRDs7OzZDQUUrQkMsb0IsRUFBc0JFLHFCLEVBQXVCQyx3QixFQUEwQkMsaUMsRUFBbUM7QUFDeEksVUFBTXRCLFVBQVVILFFBQVEwQix3QkFBUixDQUFpQ0wsb0JBQWpDLEVBQXVERSxxQkFBdkQsRUFBOEVDLHdCQUE5RSxFQUF3R0MsaUNBQXhHLENBQWhCO0FBQUEsVUFDTUwsVUFBVSxJQUFJbkIsT0FBSixDQUFZb0Isb0JBQVosRUFBa0NsQixPQUFsQyxDQURoQjs7QUFHQSxhQUFPaUIsT0FBUDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQjNCLE9BQWpCIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEpTWmlwID0gcmVxdWlyZSgnanN6aXAnKSxcbiAgICAgIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbmNvbnN0IEVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVudHJpZXNcIjogZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVVJMKHVybCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBtZXRob2QgPSAnR0VUJyxcbiAgICAgICAgICBlbmNvZGluZyA9IG51bGwsXG4gICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgdXJsIDogdXJsLFxuICAgICAgICAgICAgbWV0aG9kIDogbWV0aG9kLFxuICAgICAgICAgICAgZW5jb2Rpbmc6IGVuY29kaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJlcXVlc3QocGFyYW1zLCBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIGVycm9yID0gZXJyb3IgfHwgKHN0YXR1c0NvZGUgIT09IDIwMCk7ICAvLy9cblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBib2R5IH0gPSByZXNwb25zZTtcblxuICAgICAgSlNaaXAubG9hZEFzeW5jKGJvZHkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGpzWmlwKSB7XG4gICAgICAgICAgUHJvamVjdC5mcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGxldCBwcm9qZWN0ID0gbnVsbDtcblxuICAgIEVudHJpZXMuZnJvbUpTWmlwKGpzWmlwLCBmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGVudHJpZXMuZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Q7XG4iXX0=