'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSZip = require('jszip'),
    request = require('request');

var Entries = require('./entries'),
    filePathUtilities = require('./utilities/filePath');

var isFilePathFlorenceFilePath = filePathUtilities.isFilePathFlorenceFilePath;

var Project = function () {
  function Project(name, entries) {
    _classCallCheck(this, Project);

    this.name = name;
    this.entries = entries;
  }

  _createClass(Project, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getEntries',
    value: function getEntries() {
      return this.entries;
    }
  }, {
    key: 'getFiles',
    value: function getFiles() {
      return this.entries.getFiles();
    }
  }, {
    key: 'getFilePaths',
    value: function getFilePaths() {
      return this.entries.getFilePaths();
    }
  }, {
    key: 'getDirectoryPaths',
    value: function getDirectoryPaths() {
      return this.entries.getDirectoryPaths();
    }
  }, {
    key: 'getFlorenceFiles',
    value: function getFlorenceFiles() {
      var files = this.getFiles(),
          florenceFiles = files.reduce(function (florenceFiles, file) {
        var filePath = file.getPath(),
            filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath),
            fileFlorenceFile = filePathFlorenceFilePath; ///

        if (fileFlorenceFile) {
          var florenceFile = file; ///

          florenceFiles.push(florenceFile);
        }

        return florenceFiles;
      }, []);

      return florenceFiles;
    }
  }, {
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
    key: 'fromJSON',
    value: function fromJSON(json) {
      var nameJSON = json["name"],
          entriesJSON = json["entries"];

      json = entriesJSON; ///

      var name = nameJSON,
          ///
      entries = Entries.fromJSON(json),
          project = new Project(name, entries);

      return project;
    }
  }, {
    key: 'fromURL',
    value: function fromURL(url, callback) {
      var method = 'GET',
          encoding = null,
          options = {
        url: url,
        method: method,
        encoding: encoding
      };

      request(options, function (error, response) {
        var statusCode = response.statusCode;


        error = error || statusCode !== 200; ///

        if (error) {
          var project = null;

          callback(project);

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
      Entries.fromJSZip(jsZip, function (entries) {
        var project = null;

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
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
      var entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsImdldEZpbGVzIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJmaWxlcyIsImZsb3JlbmNlRmlsZXMiLCJyZWR1Y2UiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIiwiZmlsZUZsb3JlbmNlRmlsZSIsImZsb3JlbmNlRmlsZSIsInB1c2giLCJlbnRyaWVzSlNPTiIsInRvSlNPTiIsImpzb24iLCJuYW1lSlNPTiIsImZyb21KU09OIiwicHJvamVjdCIsInVybCIsImNhbGxiYWNrIiwibWV0aG9kIiwiZW5jb2RpbmciLCJvcHRpb25zIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJib2R5IiwibG9hZEFzeW5jIiwidGhlbiIsImpzWmlwIiwiZnJvbUpTWmlwIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImxvYWRPbmx5UmVjb2duaXNlZEZpbGVzIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLE9BQVIsQ0FBZDtBQUFBLElBQ01DLFVBQVVELFFBQVEsU0FBUixDQURoQjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRyxvQkFBb0JILFFBQVEsc0JBQVIsQ0FEMUI7O0lBR1FJLDBCLEdBQStCRCxpQixDQUEvQkMsMEI7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LFlBQUltQixVQUFVLElBQWQ7O0FBRUEsWUFBTWMsdUJBQXVCakMsUUFBUWtDLHVCQUFSLEVBQTdCOztBQUVBLFlBQUlELHlCQUF5QixJQUE3QixFQUFtQztBQUNqQyxjQUFNbEMsT0FBT2tDLG9CQUFiLENBRGlDLENBQ0c7O0FBRXBDZCxvQkFBVSxJQUFJckIsT0FBSixDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixDQUFWO0FBQ0Q7O0FBRURxQixpQkFBU0YsT0FBVDtBQUNELE9BWkQ7QUFhRDs7OzZDQUUrQmMsb0IsRUFBc0JFLHFCLEVBQXVCQyx1QixFQUF5QkMsa0MsRUFBb0M7QUFDeEksVUFBTXJDLFVBQVVMLFFBQVEyQyx3QkFBUixDQUFpQ0wsb0JBQWpDLEVBQXVERSxxQkFBdkQsRUFBOEVDLHVCQUE5RSxFQUF1R0Msa0NBQXZHLENBQWhCO0FBQUEsVUFDTWxCLFVBQVUsSUFBSXJCLE9BQUosQ0FBWW1DLG9CQUFaLEVBQWtDakMsT0FBbEMsQ0FEaEI7O0FBR0EsYUFBT21CLE9BQVA7QUFDRDs7Ozs7O0FBR0hvQixPQUFPQyxPQUFQLEdBQWlCMUMsT0FBakIiLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSlNaaXAgPSByZXF1aXJlKCdqc3ppcCcpLFxuICAgICAgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcztcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldEZsb3JlbmNlRmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgZmxvcmVuY2VGaWxlcyA9IGZpbGVzLnJlZHVjZShmdW5jdGlvbihmbG9yZW5jZUZpbGVzLCBmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUZsb3JlbmNlRmlsZSA9IGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUZsb3JlbmNlRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBmbG9yZW5jZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgZmxvcmVuY2VGaWxlcy5wdXNoKGZsb3JlbmNlRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWVKU09OID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXTtcblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBjb25zdCBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVVJMKHVybCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBtZXRob2QgPSAnR0VUJyxcbiAgICAgICAgICBlbmNvZGluZyA9IG51bGwsXG4gICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIG1ldGhvZCAsXG4gICAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXF1ZXN0KG9wdGlvbnMsIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSkge1xuICAgICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSByZXNwb25zZTtcblxuICAgICAgZXJyb3IgPSBlcnJvciB8fCAoc3RhdHVzQ29kZSAhPT0gMjAwKTsgIC8vL1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG51bGw7XG5cbiAgICAgICAgY2FsbGJhY2socHJvamVjdCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGJvZHkgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBKU1ppcC5sb2FkQXN5bmMoYm9keSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oanNaaXApIHtcbiAgICAgICAgICBQcm9qZWN0LmZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgRW50cmllcy5mcm9tSlNaaXAoanNaaXAsIGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgIGxldCBwcm9qZWN0ID0gbnVsbDtcblxuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBlbnRyaWVzLmdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBuYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cbiAgICAgICAgXG4gICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2socHJvamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QodG9wbW9zdERpcmVjdG9yeU5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0O1xuIl19