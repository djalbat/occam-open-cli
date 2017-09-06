'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var needle = require('needle'),
    JSZip = require('jszip');

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
        if (!error && response.statusCode == 200) {
          var body = response.body;

          JSZip.loadAsync(body).then(function (jsZip) {
            Project.fromJSZip(jsZip, callback);
          });
        } else {
          callback(null);
        }
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
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
      var entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIm5lZWRsZSIsInJlcXVpcmUiLCJKU1ppcCIsIkVudHJpZXMiLCJQcm9qZWN0IiwibmFtZSIsImVudHJpZXMiLCJlbnRyaWVzSlNPTiIsInRvSlNPTiIsImpzb24iLCJ1cmwiLCJjYWxsYmFjayIsInBhcmFtcyIsIm1ldGhvZCIsImVuY29kaW5nIiwicmVxdWVzdCIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiYm9keSIsImxvYWRBc3luYyIsInRoZW4iLCJqc1ppcCIsImZyb21KU1ppcCIsInByb2plY3QiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFFBQVIsQ0FBZjtBQUFBLElBQ01DLFFBQVFELFFBQVEsT0FBUixDQURkOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjs7SUFFTUcsTztBQUNKLG1CQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7Ozs2QkFFUTtBQUNQLFVBQU1ELE9BQU8sS0FBS0EsSUFBbEI7QUFBQSxVQUNNRSxjQUFjLEtBQUtELE9BQUwsQ0FBYUUsTUFBYixFQURwQjtBQUFBLFVBRU1GLFVBQVVDLFdBRmhCO0FBQUEsVUFFOEI7QUFDeEJFLGFBQU87QUFDTCxnQkFBUUosSUFESDtBQUVMLG1CQUFXQztBQUZOLE9BSGI7O0FBUUEsYUFBT0csSUFBUDtBQUNEOzs7NEJBRWNDLEcsRUFBS0MsUSxFQUFVO0FBQzVCLFVBQU1DLFNBQVM7QUFDUEMsZ0JBQVMsS0FERjtBQUVQSCxhQUFNQSxHQUZDO0FBR1BJLGtCQUFVO0FBSEgsT0FBZjs7QUFNQUMsY0FBUUgsTUFBUixFQUFnQixVQUFTSSxLQUFULEVBQWdCQyxRQUFoQixFQUEwQjtBQUN4QyxZQUFJLENBQUNELEtBQUQsSUFBV0MsU0FBU0MsVUFBVCxJQUF1QixHQUF0QyxFQUE0QztBQUMxQyxjQUFNQyxPQUFPRixTQUFTRSxJQUF0Qjs7QUFFQWpCLGdCQUFNa0IsU0FBTixDQUFnQkQsSUFBaEIsRUFBc0JFLElBQXRCLENBQTJCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDekNsQixvQkFBUW1CLFNBQVIsQ0FBa0JELEtBQWxCLEVBQXlCWCxRQUF6QjtBQUNELFdBRkQ7QUFHRCxTQU5ELE1BTU87QUFDTEEsbUJBQVMsSUFBVDtBQUNEO0FBQ0YsT0FWRDtBQVdEOzs7OEJBRWdCVyxLLEVBQU9YLFEsRUFBVTtBQUNoQyxVQUFJYSxVQUFVLElBQWQ7O0FBRUFyQixjQUFRb0IsU0FBUixDQUFrQkQsS0FBbEIsRUFBeUIsVUFBU2hCLE9BQVQsRUFBa0I7QUFDekMsWUFBTW1CLHVCQUF1Qm5CLFFBQVFvQix1QkFBUixFQUE3Qjs7QUFFQSxZQUFJRCx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakMsY0FBTXBCLE9BQU9vQixvQkFBYixDQURpQyxDQUNHOztBQUVwQ0Qsb0JBQVUsSUFBSXBCLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsQ0FBVjtBQUNEOztBQUVESyxpQkFBU2EsT0FBVDtBQUNELE9BVkQ7QUFXRDs7OzZDQUUrQkMsb0IsRUFBc0JFLHFCLEVBQXVCQyxrQyxFQUFvQztBQUMvRyxVQUFNdEIsVUFBVUgsUUFBUTBCLHdCQUFSLENBQWlDSixvQkFBakMsRUFBdURFLHFCQUF2RCxFQUE4RUMsa0NBQTlFLENBQWhCO0FBQUEsVUFDTUosVUFBVSxJQUFJcEIsT0FBSixDQUFZcUIsb0JBQVosRUFBa0NuQixPQUFsQyxDQURoQjs7QUFHQSxhQUFPa0IsT0FBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQjNCLE9BQWpCIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lZWRsZSA9IHJlcXVpcmUoJ25lZWRsZScpLFxuICAgICAgSlNaaXAgPSByZXF1aXJlKCdqc3ppcCcpO1xuXG5jb25zdCBFbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyk7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVVSTCh1cmwsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgbWV0aG9kIDogXCJHRVRcIixcbiAgICAgICAgICAgIHVybCA6IHVybCxcbiAgICAgICAgICAgIGVuY29kaW5nOiBudWxsXG4gICAgICAgICAgfTtcblxuICAgIHJlcXVlc3QocGFyYW1zLCBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpIHtcbiAgICAgIGlmICghZXJyb3IgJiYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwKSkge1xuICAgICAgICBjb25zdCBib2R5ID0gcmVzcG9uc2UuYm9keTtcblxuICAgICAgICBKU1ppcC5sb2FkQXN5bmMoYm9keSkudGhlbihmdW5jdGlvbihqc1ppcCkge1xuICAgICAgICAgIFByb2plY3QuZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGxldCBwcm9qZWN0ID0gbnVsbDtcblxuICAgIEVudHJpZXMuZnJvbUpTWmlwKGpzWmlwLCBmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGVudHJpZXMuZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QodG9wbW9zdERpcmVjdG9yeU5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0O1xuIl19