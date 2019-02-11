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
  function Projects(array) {
    _classCallCheck(this, Projects);

    this.array = array;
  }

  _createClass(Projects, [{
    key: 'getLength',
    value: function getLength() {
      return this.array.length;
    }
  }, {
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
      var projects = Projects.fromNothing(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiUHJvamVjdCIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZvckVhY2giLCJjb25jYXRlbmF0ZVBhdGhzIiwiaXNOYW1lSGlkZGVuTmFtZSIsImlzRW50cnlEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwiUHJvamVjdHMiLCJhcnJheSIsImxlbmd0aCIsInByb2plY3QiLCJwdXNoIiwiY2FsbGJhY2siLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJkb25lIiwianNvbiIsInByb2plY3RKU09OIiwidG9KU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0cyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFsbG93T25seVJlY29nbmlzZWRGaWxlcyIsImRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Ob3RoaW5nIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwiYWRkUHJvamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lIiwiYWJzb2x1dGVTdWJFbnRyeVBhdGgiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwic3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSIsImxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwic3ViRW50cnlEaXJlY3RvcnkiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIs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QkFBaUJtQixxQkFBakIsRUFBd0NZLFlBQXhDLENBQTdCO0FBQUEsVUFDTUUseUJBQXlCaEMsaUJBQWlCOEIsWUFBakIsQ0FEL0I7QUFBQSxVQUVNRyw0QkFBNEIsQ0FBQ0Qsc0JBRm5DO0FBQUEsVUFHTUUsZ0NBQWdDLENBQUNkLGlDQUh2Qzs7QUFLQSxVQUFJYSw2QkFBNkJDLDZCQUFqQyxFQUFnRTtBQUM5RCxZQUFNQyxvQkFBb0JsQyxpQkFBaUI4QixvQkFBakIsQ0FBMUI7O0FBRUEsWUFBSUksaUJBQUosRUFBdUI7QUFDckIsY0FBTVgsdUJBQXVCTSxZQUE3QixDQURxQixDQUN1Qjs7QUFFNUNSLGdDQUFzQmYsSUFBdEIsQ0FBMkJpQixvQkFBM0I7QUFDRDtBQUNGOztBQUVELGFBQU9GLHFCQUFQO0FBQ0QsS0FqQnVCLEVBaUJyQixFQWpCcUIsQ0FBeEI7QUFrQkQsR0FyQkQsQ0FxQkUsT0FBT2MsS0FBUCxFQUFjO0FBQ2RkLDRCQUF3QixFQUF4QjtBQUNEOztBQUVELFNBQU9BLHFCQUFQO0FBQ0QiLCJmaWxlIjoicHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBQcm9qZWN0ID0gcmVxdWlyZSgnLi9wcm9qZWN0JyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGlzTmFtZUhpZGRlbk5hbWUgfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGlzRW50cnlEaXJlY3RvcnksIHJlYWREaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmNsYXNzIFByb2plY3RzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgbWFwUHJvamVjdChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7XG4gIH1cblxuICByZWR1Y2VQcm9qZWN0KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cblxuICBmb3JFYWNoUHJvamVjdChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc3luY2hyb25vdXNGb3JFYWNoUHJvamVjdChjYWxsYmFjaywgZG9uZSkge1xuICAgIGZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2ssIGRvbmUpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICBjb25zdCBwcm9qZWN0SlNPTiA9IHByb2plY3QudG9KU09OKCk7XG5cbiAgICAgIHJldHVybiBwcm9qZWN0SlNPTjtcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IGpzb24ubWFwKGZ1bmN0aW9uKGpzb24pIHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFByb2plY3RzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gdG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMuZm9yRWFjaChmdW5jdGlvbih0b3Btb3N0RGlyZWN0b3J5TmFtZSkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3RzO1xuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gc3ViRW50cnlOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKHRvcG1vc3REaXJlY3RvcnlOYW1lcywgc3ViRW50cnlOYW1lKSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVN1YkVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcztcblxuICAgICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgY29uc3Qgc3ViRW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlU3ViRW50cnlQYXRoKTtcblxuICAgICAgICBpZiAoc3ViRW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHN1YkVudHJ5TmFtZTsgIC8vL1xuXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLnB1c2godG9wbW9zdERpcmVjdG9yeU5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcbiAgICB9LCBbXSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gW107XG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xufVxuIl19