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
    value: function fromProjectsDirectoryPath(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
      var array = [],
          projects = new Projects(array),
          topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

      topmostDirectoryNames.forEach(function (topmostDirectoryName) {
        var project = Project.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

        projects.addProject(project);
      });

      return projects;
    }
  }]);

  return Projects;
}();

module.exports = Projects;

function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  var topmostDirectoryNames = void 0;

  var subEntryNames = readDirectory(projectsDirectoryPath);

  topmostDirectoryNames = subEntryNames.reduce(function (topmostDirectoryNames, subEntryName) {
    var absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
        subEntryNameHiddenName = isNameHiddenName(subEntryName),
        subEntryNameNotHiddenName = !subEntryNameHiddenName,
        loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiUHJvamVjdCIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZvckVhY2giLCJjb25jYXRlbmF0ZVBhdGhzIiwiaXNOYW1lSGlkZGVuTmFtZSIsImlzRW50cnlEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwiUHJvamVjdHMiLCJhcnJheSIsImxlbmd0aCIsInByb2plY3QiLCJwdXNoIiwiY2FsbGJhY2siLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJkb25lIiwianNvbiIsInByb2plY3RKU09OIiwidG9KU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0cyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImxvYWRPbmx5UmVjb2duaXNlZEZpbGVzIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsImFkZFByb2plY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsImFic29sdXRlU3ViRW50cnlQYXRoIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInN1YkVudHJ5RGlyZWN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01FLGdCQUFn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QUFpQm1CLHFCQUFqQixFQUF3Q1csWUFBeEMsQ0FBN0I7QUFBQSxRQUNNRSx5QkFBeUIvQixpQkFBaUI2QixZQUFqQixDQUQvQjtBQUFBLFFBRU1HLDRCQUE0QixDQUFDRCxzQkFGbkM7QUFBQSxRQUdNRSxnQ0FBZ0MsQ0FBQ2Isa0NBSHZDOztBQUtBLFFBQUlZLDZCQUE2QkMsNkJBQWpDLEVBQWdFO0FBQzlELFVBQU1DLG9CQUFvQmpDLGlCQUFpQjZCLG9CQUFqQixDQUExQjs7QUFFQSxVQUFJSSxpQkFBSixFQUF1QjtBQUNyQixZQUFNWCx1QkFBdUJNLFlBQTdCLENBRHFCLENBQ3VCOztBQUU1Q1IsOEJBQXNCZCxJQUF0QixDQUEyQmdCLG9CQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBT0YscUJBQVA7QUFDRCxHQWpCdUIsRUFpQnJCLEVBakJxQixDQUF4Qjs7QUFtQkEsU0FBT0EscUJBQVA7QUFDRCIsImZpbGUiOiJwcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFByb2plY3QgPSByZXF1aXJlKCcuL3Byb2plY3QnKSxcbiAgICAgIG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyk7XG5cbmNvbnN0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNOYW1lSGlkZGVuTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSwgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBtYXBQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZVByb2plY3QoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hQcm9qZWN0KGNhbGxiYWNrLCBkb25lKSB7XG4gICAgZm9yRWFjaCh0aGlzLmFycmF5LCBjYWxsYmFjaywgZG9uZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXJyYXkubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SlNPTiA9IHByb2plY3QudG9KU09OKCk7XG5cbiAgICAgIHJldHVybiBwcm9qZWN0SlNPTjtcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IGpzb24ubWFwKChqc29uKSA9PiB7ICAvLy9cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LmZyb21KU09OKGpzb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhhcnJheSksXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gdG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLmZvckVhY2goKHRvcG1vc3REaXJlY3RvcnlOYW1lKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdHM7XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG5cbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSBzdWJFbnRyeU5hbWVzLnJlZHVjZSgodG9wbW9zdERpcmVjdG9yeU5hbWVzLCBzdWJFbnRyeU5hbWUpID0+IHtcbiAgICBjb25zdCBhYnNvbHV0ZVN1YkVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSA9ICFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lLFxuICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXM7XG5cbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgY29uc3Qgc3ViRW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlU3ViRW50cnlQYXRoKTtcblxuICAgICAgaWYgKHN1YkVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc3ViRW50cnlOYW1lOyAgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLnB1c2godG9wbW9zdERpcmVjdG9yeU5hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcbiAgfSwgW10pO1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG59XG4iXX0=