'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Project = require('./project'),
    nameUtilities = require('./utilities/name');

var pathUtilities = necessary.pathUtilities,
    fileSystemUtilities = necessary.fileSystemUtilities,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiUHJvamVjdCIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJpc05hbWVIaWRkZW5OYW1lIiwiaXNFbnRyeURpcmVjdG9yeSIsInJlYWREaXJlY3RvcnkiLCJQcm9qZWN0cyIsImFycmF5IiwicHJvamVjdCIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2giLCJkb25lIiwianNvbiIsInByb2plY3RKU09OIiwidG9KU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0cyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFsbG93T25seVJlY29nbmlzZWRGaWxlcyIsImRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsImFkZFByb2plY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsImFic29sdXRlU3ViRW50cnlQYXRoIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInN1YkVudHJ5RGlyZWN0b3J5IiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUUsZ0JBQWdCRixRQUFRLGtCQUFSLENBRHRCOztJQUdR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QUFnRTtBQUM5RCxZQUFNQyxvQkFBb0JqQyxpQkFBaUI2QixvQkFBakIsQ0FBMUI7O0FBRUEsWUFBSUksaUJBQUosRUFBdUI7QUFDckIsY0FBTVgsdUJBQXVCTSxZQUE3QixDQURxQixDQUN1Qjs7QUFFNUNSLGdDQUFzQmYsSUFBdEIsQ0FBMkJpQixvQkFBM0I7QUFDRDtBQUNGOztBQUVELGFBQU9GLHFCQUFQO0FBQ0QsS0FqQnVCLEVBaUJyQixFQWpCcUIsQ0FBeEI7QUFrQkQsR0FyQkQsQ0FxQkUsT0FBT2MsS0FBUCxFQUFjO0FBQ2RkLDRCQUF3QixFQUF4QjtBQUNEOztBQUVELFNBQU9BLHFCQUFQO0FBQ0QiLCJmaWxlIjoicHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBQcm9qZWN0ID0gcmVxdWlyZSgnLi9wcm9qZWN0JyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSwgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBtYXBQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZVByb2plY3QoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hQcm9qZWN0KGNhbGxiYWNrLCBkb25lKSB7XG4gICAgZm9yRWFjaCh0aGlzLmFycmF5LCBjYWxsYmFjaywgZG9uZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgYXJyYXkgPSBqc29uLm1hcChmdW5jdGlvbihqc29uKSB7ICAvLy9cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LmZyb21KU09OKGpzb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKSxcbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHRvcG1vc3REaXJlY3RvcnlOYW1lKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdHM7XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lcztcblxuICB0cnkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSBzdWJFbnRyeU5hbWVzLnJlZHVjZShmdW5jdGlvbiAodG9wbW9zdERpcmVjdG9yeU5hbWVzLCBzdWJFbnRyeU5hbWUpIHtcbiAgICAgIGNvbnN0IGFic29sdXRlU3ViRW50cnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgICBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSA9ICFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lLFxuICAgICAgICAgICAgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzO1xuXG4gICAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICBjb25zdCBzdWJFbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVTdWJFbnRyeVBhdGgpO1xuXG4gICAgICAgIGlmIChzdWJFbnRyeURpcmVjdG9yeSkge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc3ViRW50cnlOYW1lOyAgLy8vXG5cbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMucHVzaCh0b3Btb3N0RGlyZWN0b3J5TmFtZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xuICAgIH0sIFtdKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSBbXTtcbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG59XG4iXX0=