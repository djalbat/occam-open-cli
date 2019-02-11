'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Project = require('./project'),
    nameUtilities = require('./utilities/name');

var pathUtilities = necessary.pathUtilities,
    fileSystemUtilities = necessary.fileSystemUtilities,
    asynchronousUtilities = necessary.asynchronousUtilities,
    forEach = asynchronousUtilities.forEach,
    concatenatePaths = pathUtilities.concatenatePaths,
    isNameHiddenName = nameUtilities.isNameHiddenName,
    isEntryDirectory = fileSystemUtilities.isEntryDirectory,
    readDirectory = fileSystemUtilities.readDirectory;

var Projects = function () {
  function Projects() {
    _classCallCheck(this, Projects);

    this.array = [];
  }

  _createClass(Projects, [{
    key: 'addProject',
    value: function addProject(project) {
      this.array.push(project);
    }
  }, {
    key: 'mapProject',
    value: function mapProject(callback) {
      return this.array.map(callback);
    }
  }, {
    key: 'reduceProject',
    value: function reduceProject(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: 'forEachProject',
    value: function forEachProject(callback) {
      this.array.forEach(callback);
    }
  }, {
    key: 'asynchronousForEachProject',
    value: function asynchronousForEachProject(callback, done) {
      forEach(this.array, callback, done);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = this.array.map(function (project) {
        var projectJSON = project.toJSON();

        return projectJSON;
      });

      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var array = json.map(function (json) {
        ///
        var project = Project.fromJSON(json);

        return project;
      }),
          projects = new Projects(array);

      return projects;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var array = [],
          projects = new Projects(array);

      return projects;
    }
  }, {
    key: 'fromProjectsDirectoryPath',
    value: function fromProjectsDirectoryPath(projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories) {
      var projects = new Projects(),
          topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, disallowHiddenFilesAndDirectories);

      topmostDirectoryNames.forEach(function (topmostDirectoryName) {
        var project = Project.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories);

        projects.addProject(project);
      });

      return projects;
    }
  }]);

  return Projects;
}();

module.exports = Projects;

function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, disallowHiddenFilesAndDirectories) {
  var topmostDirectoryNames = void 0;

  try {
    var subEntryNames = readDirectory(projectsDirectoryPath);

    topmostDirectoryNames = subEntryNames.reduce(function (topmostDirectoryNames, subEntryName) {
      var absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
          subEntryNameHiddenName = isNameHiddenName(subEntryName),
          subEntryNameNotHiddenName = !subEntryNameHiddenName,
          loadHiddenFilesAndDirectories = !disallowHiddenFilesAndDirectories;

      if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
        var subEntryDirectory = isEntryDirectory(absoluteSubEntryPath);

        if (subEntryDirectory) {
          var topmostDirectoryName = subEntryName; ///

          topmostDirectoryNames.push(topmostDirectoryName);
        }
      }

      return topmostDirectoryNames;
    }, []);
  } catch (error) {
    topmostDirectoryNames = [];
  }

  return topmostDirectoryNames;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiUHJvamVjdCIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZvckVhY2giLCJjb25jYXRlbmF0ZVBhdGhzIiwiaXNOYW1lSGlkZGVuTmFtZSIsImlzRW50cnlEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwiUHJvamVjdHMiLCJhcnJheSIsInByb2plY3QiLCJwdXNoIiwiY2FsbGJhY2siLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJkb25lIiwianNvbiIsInByb2plY3RKU09OIiwidG9KU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0cyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFsbG93T25seVJlY29nbmlzZWRGaWxlcyIsImRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsImFkZFByb2plY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsImFic29sdXRlU3ViRW50cnlQYXRoIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInN1YkVudHJ5RGlyZWN0b3J5IiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUUsZ0JBQWdC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LDRCQUE0QixDQUFDRCxzQkFGbkM7QUFBQSxVQUdNRSxnQ0FBZ0MsQ0FBQ2IsaUNBSHZDOztBQUtBLFVBQUlZLDZCQUE2QkMsNkJBQWpDLEVBQWdFO0FBQzlELFlBQU1DLG9CQUFvQmhDLGlCQUFpQjRCLG9CQUFqQixDQUExQjs7QUFFQSxZQUFJSSxpQkFBSixFQUF1QjtBQUNyQixjQUFNWCx1QkFBdUJNLFlBQTdCLENBRHFCLENBQ3VCOztBQUU1Q1IsZ0NBQXNCZCxJQUF0QixDQUEyQmdCLG9CQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0YscUJBQVA7QUFDRCxLQWpCdUIsRUFpQnJCLEVBakJxQixDQUF4QjtBQWtCRCxHQXJCRCxDQXFCRSxPQUFPYyxLQUFQLEVBQWM7QUFDZGQsNEJBQXdCLEVBQXhCO0FBQ0Q7O0FBRUQsU0FBT0EscUJBQVA7QUFDRCIsImZpbGUiOiJwcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFByb2plY3QgPSByZXF1aXJlKCcuL3Byb2plY3QnKSxcbiAgICAgIG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyk7XG5cbmNvbnN0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSwgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBtYXBQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZVByb2plY3QoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hQcm9qZWN0KGNhbGxiYWNrLCBkb25lKSB7XG4gICAgZm9yRWFjaCh0aGlzLmFycmF5LCBjYWxsYmFjaywgZG9uZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoZnVuY3Rpb24oanNvbikgeyAgLy8vXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tSlNPTihqc29uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IHByb2plY3RzID0gbmV3IFByb2plY3RzKCksXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gdG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMuZm9yRWFjaChmdW5jdGlvbih0b3Btb3N0RGlyZWN0b3J5TmFtZSkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3RzO1xuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gc3ViRW50cnlOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKHRvcG1vc3REaXJlY3RvcnlOYW1lcywgc3ViRW50cnlOYW1lKSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVN1YkVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcztcblxuICAgICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgY29uc3Qgc3ViRW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlU3ViRW50cnlQYXRoKTtcblxuICAgICAgICBpZiAoc3ViRW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHN1YkVudHJ5TmFtZTsgIC8vL1xuXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLnB1c2godG9wbW9zdERpcmVjdG9yeU5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcbiAgICB9LCBbXSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gW107XG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xufVxuIl19