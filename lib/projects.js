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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiUHJvamVjdCIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZvckVhY2giLCJjb25jYXRlbmF0ZVBhdGhzIiwiaXNOYW1lSGlkZGVuTmFtZSIsImlzRW50cnlEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwiUHJvamVjdHMiLCJhcnJheSIsImxlbmd0aCIsInByb2plY3QiLCJwdXNoIiwiY2FsbGJhY2siLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJkb25lIiwianNvbiIsInByb2plY3RKU09OIiwidG9KU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0cyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFsbG93T25seVJlY29nbmlzZWRGaWxlcyIsImRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsImFkZFByb2plY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsImFic29sdXRlU3ViRW50cnlQYXRoIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInN1YkVudHJ5RGlyZWN0b3J5IiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFD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QUE3QjtBQUFBLFVBQ01FLHlCQUF5Qi9CLGlCQUFpQjZCLFlBQWpCLENBRC9CO0FBQUEsVUFFTUcsNEJBQTRCLENBQUNELHNCQUZuQztBQUFBLFVBR01FLGdDQUFnQyxDQUFDYixpQ0FIdkM7O0FBS0EsVUFBSVksNkJBQTZCQyw2QkFBakMsRUFBZ0U7QUFDOUQsWUFBTUMsb0JBQW9CakMsaUJBQWlCNkIsb0JBQWpCLENBQTFCOztBQUVBLFlBQUlJLGlCQUFKLEVBQXVCO0FBQ3JCLGNBQU1YLHVCQUF1Qk0sWUFBN0IsQ0FEcUIsQ0FDdUI7O0FBRTVDUixnQ0FBc0JkLElBQXRCLENBQTJCZ0Isb0JBQTNCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRixxQkFBUDtBQUNELEtBakJ1QixFQWlCckIsRUFqQnFCLENBQXhCO0FBa0JELEdBckJELENBcUJFLE9BQU9jLEtBQVAsRUFBYztBQUNkZCw0QkFBd0IsRUFBeEI7QUFDRDs7QUFFRCxTQUFPQSxxQkFBUDtBQUNEIiwiZmlsZSI6InByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUHJvamVjdCA9IHJlcXVpcmUoJy4vcHJvamVjdCcpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKTtcblxuY29uc3QgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBpc05hbWVIaWRkZW5OYW1lIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBpc0VudHJ5RGlyZWN0b3J5LCByZWFkRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5jbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBtYXBQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZVByb2plY3QoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hQcm9qZWN0KGNhbGxiYWNrLCBkb25lKSB7XG4gICAgZm9yRWFjaCh0aGlzLmFycmF5LCBjYWxsYmFjaywgZG9uZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoZnVuY3Rpb24oanNvbikgeyAgLy8vXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tSlNPTihqc29uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IHByb2plY3RzID0gbmV3IFByb2plY3RzKCksXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gdG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMuZm9yRWFjaChmdW5jdGlvbih0b3Btb3N0RGlyZWN0b3J5TmFtZSkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3RzO1xuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gc3ViRW50cnlOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKHRvcG1vc3REaXJlY3RvcnlOYW1lcywgc3ViRW50cnlOYW1lKSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVN1YkVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcztcblxuICAgICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgY29uc3Qgc3ViRW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlU3ViRW50cnlQYXRoKTtcblxuICAgICAgICBpZiAoc3ViRW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHN1YkVudHJ5TmFtZTsgIC8vL1xuXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLnB1c2godG9wbW9zdERpcmVjdG9yeU5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcbiAgICB9LCBbXSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gW107XG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xufVxuIl19