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
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
      var entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwidXJsIiwiY2FsbGJhY2siLCJwYXJhbXMiLCJtZXRob2QiLCJlbmNvZGluZyIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiYm9keSIsImxvYWRBc3luYyIsInRoZW4iLCJqc1ppcCIsImZyb21KU1ppcCIsInByb2plY3QiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLE9BQVIsQ0FBZDtBQUFBLElBQ01DLFVBQVVELFFBQVEsU0FBUixDQURoQjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFdBQVIsQ0FBaEI7O0lBRU1HLE87QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxVQUFNRCxPQUFPLEtBQUtBLElBQWxCO0FBQUEsVUFDTUUsY0FBYyxLQUFLRCxPQUFMLENBQWFFLE1BQWIsRUFEcEI7QUFBQSxVQUVNRixVQUFVQyxXQUZoQjtBQUFBLFVBRThCO0FBQ3hCRSxhQUFPO0FBQ0wsZ0JBQVFKLElBREg7QUFFTCxtQkFBV0M7QUFGTixPQUhiOztBQVFBLGFBQU9HLElBQVA7QUFDRDs7OzRCQUVjQyxHLEVBQUtDLFEsRUFBVTtBQUM1QixVQUFNQyxTQUFTO0FBQ1BDLGdCQUFTLEtBREY7QUFFUEgsYUFBTUEsR0FGQztBQUdQSSxrQkFBVTtBQUhILE9BQWY7O0FBTUFaLGNBQVFVLE1BQVIsRUFBZ0IsVUFBU0csS0FBVCxFQUFnQkMsUUFBaEIsRUFBMEI7QUFBQSxZQUNoQ0MsVUFEZ0MsR0FDakJELFFBRGlCLENBQ2hDQyxVQURnQzs7O0FBR3hDRixnQkFBUUEsU0FBVUUsZUFBZSxHQUFqQyxDQUh3QyxDQUdBOztBQUV4QyxZQUFJRixLQUFKLEVBQVc7QUFDVEosbUJBQVMsSUFBVDs7QUFFQTtBQUNEOztBQVR1QyxZQVdoQ08sSUFYZ0MsR0FXdkJGLFFBWHVCLENBV2hDRSxJQVhnQzs7O0FBYXhDbEIsY0FBTW1CLFNBQU4sQ0FBZ0JELElBQWhCLEVBQ0dFLElBREgsQ0FDUSxVQUFTQyxLQUFULEVBQWdCO0FBQ3BCakIsa0JBQVFrQixTQUFSLENBQWtCRCxLQUFsQixFQUF5QlYsUUFBekI7QUFDRCxTQUhIO0FBSUQsT0FqQkQ7QUFrQkQ7Ozs4QkFFZ0JVLEssRUFBT1YsUSxFQUFVO0FBQ2hDLFVBQUlZLFVBQVUsSUFBZDs7QUFFQXBCLGNBQVFtQixTQUFSLENBQWtCRCxLQUFsQixFQUF5QixVQUFTZixPQUFULEVBQWtCO0FBQ3pDLFlBQU1rQix1QkFBdUJsQixRQUFRbUIsdUJBQVIsRUFBN0I7O0FBRUEsWUFBSUQseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLGNBQU1uQixPQUFPbUIsb0JBQWIsQ0FEaUMsQ0FDRzs7QUFFcENELG9CQUFVLElBQUluQixPQUFKLENBQVlDLElBQVosRUFBa0JDLE9BQWxCLENBQVY7QUFDRDs7QUFFREssaUJBQVNZLE9BQVQ7QUFDRCxPQVZEO0FBV0Q7Ozs2Q0FFK0JDLG9CLEVBQXNCRSxxQixFQUF1QkMsa0MsRUFBb0M7QUFDL0csVUFBTXJCLFVBQVVILFFBQVF5Qix3QkFBUixDQUFpQ0osb0JBQWpDLEVBQXVERSxxQkFBdkQsRUFBOEVDLGtDQUE5RSxDQUFoQjtBQUFBLFVBQ01KLFVBQVUsSUFBSW5CLE9BQUosQ0FBWW9CLG9CQUFaLEVBQWtDbEIsT0FBbEMsQ0FEaEI7O0FBR0EsYUFBT2lCLE9BQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUIxQixPQUFqQiIsImZpbGUiOiJwcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBKU1ppcCA9IHJlcXVpcmUoJ2pzemlwJyksXG4gICAgICByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuXG5jb25zdCBFbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyk7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVVSTCh1cmwsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgbWV0aG9kIDogXCJHRVRcIixcbiAgICAgICAgICAgIHVybCA6IHVybCxcbiAgICAgICAgICAgIGVuY29kaW5nOiBudWxsXG4gICAgICAgICAgfTtcblxuICAgIHJlcXVlc3QocGFyYW1zLCBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIGVycm9yID0gZXJyb3IgfHwgKHN0YXR1c0NvZGUgIT09IDIwMCk7ICAvLy9cblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBib2R5IH0gPSByZXNwb25zZTtcblxuICAgICAgSlNaaXAubG9hZEFzeW5jKGJvZHkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGpzWmlwKSB7XG4gICAgICAgICAgUHJvamVjdC5mcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIGxldCBwcm9qZWN0ID0gbnVsbDtcblxuICAgIEVudHJpZXMuZnJvbUpTWmlwKGpzWmlwLCBmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGVudHJpZXMuZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QodG9wbW9zdERpcmVjdG9yeU5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0O1xuIl19