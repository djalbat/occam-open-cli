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
      var array = [],
          projects = new Projects(array),
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

  return topmostDirectoryNames;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiUHJvamVjdCIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZvckVhY2giLCJjb25jYXRlbmF0ZVBhdGhzIiwiaXNOYW1lSGlkZGVuTmFtZSIsImlzRW50cnlEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwiUHJvamVjdHMiLCJhcnJheSIsImxlbmd0aCIsInByb2plY3QiLCJwdXNoIiwiY2FsbGJhY2siLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJkb25lIiwianNvbiIsInByb2plY3RKU09OIiwidG9KU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0cyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFsbG93T25seVJlY29nbmlzZWRGaWxlcyIsImRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsImFkZFByb2plY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsImFic29sdXRlU3ViRW50cnlQYXRoIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInN1YkVudHJ5RGlyZWN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01FLGdCQUFn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QkFBaUJtQixxQkFBakIsRUFBd0NXLFlBQXhDLENBQTdCO0FBQUEsUUFDTUUseUJBQXlCL0IsaUJBQWlCNkIsWUFBakIsQ0FEL0I7QUFBQSxRQUVNRyw0QkFBNEIsQ0FBQ0Qsc0JBRm5DO0FBQUEsUUFHTUUsZ0NBQWdDLENBQUNiLGlDQUh2Qzs7QUFLQSxRQUFJWSw2QkFBNkJDLDZCQUFqQyxFQUFnRTtBQUM5RCxVQUFNQyxvQkFBb0JqQyxpQkFBaUI2QixvQkFBakIsQ0FBMUI7O0FBRUEsVUFBSUksaUJBQUosRUFBdUI7QUFDckIsWUFBTVgsdUJBQXVCTSxZQUE3QixDQURxQixDQUN1Qjs7QUFFNUNSLDhCQUFzQmQsSUFBdEIsQ0FBMkJnQixvQkFBM0I7QUFDRDtBQUNGOztBQUVELFdBQU9GLHFCQUFQO0FBQ0QsR0FqQnVCLEVBaUJyQixFQWpCcUIsQ0FBeEI7O0FBbUJBLFNBQU9BLHFCQUFQO0FBQ0QiLCJmaWxlIjoicHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBQcm9qZWN0ID0gcmVxdWlyZSgnLi9wcm9qZWN0JyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGlzTmFtZUhpZGRlbk5hbWUgfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGlzRW50cnlEaXJlY3RvcnksIHJlYWREaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmNsYXNzIFByb2plY3RzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgbWFwUHJvamVjdChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7XG4gIH1cblxuICByZWR1Y2VQcm9qZWN0KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cblxuICBmb3JFYWNoUHJvamVjdChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc3luY2hyb25vdXNGb3JFYWNoUHJvamVjdChjYWxsYmFjaywgZG9uZSkge1xuICAgIGZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2ssIGRvbmUpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICBjb25zdCBwcm9qZWN0SlNPTiA9IHByb2plY3QudG9KU09OKCk7XG5cbiAgICAgIHJldHVybiBwcm9qZWN0SlNPTjtcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IGpzb24ubWFwKGZ1bmN0aW9uKGpzb24pIHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KSxcbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHRvcG1vc3REaXJlY3RvcnlOYW1lKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdHM7XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lcztcblxuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lcyA9IHN1YkVudHJ5TmFtZXMucmVkdWNlKGZ1bmN0aW9uKHRvcG1vc3REaXJlY3RvcnlOYW1lcywgc3ViRW50cnlOYW1lKSB7XG4gICAgY29uc3QgYWJzb2x1dGVTdWJFbnRyeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXM7XG5cbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgY29uc3Qgc3ViRW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlU3ViRW50cnlQYXRoKTtcblxuICAgICAgaWYgKHN1YkVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc3ViRW50cnlOYW1lOyAgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLnB1c2godG9wbW9zdERpcmVjdG9yeU5hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcbiAgfSwgW10pO1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG59XG4iXX0=