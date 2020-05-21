"use strict";

var _necessary = require("necessary");

var _project = _interopRequireDefault(require("./project"));

var _name = require("./utilities/name");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var forEach = _necessary.asynchronousUtilities.forEach,
    concatenatePaths = _necessary.pathUtilities.concatenatePaths,
    isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory,
    readDirectory = _necessary.fileSystemUtilities.readDirectory;

var Projects = /*#__PURE__*/function () {
  function Projects(array) {
    _classCallCheck(this, Projects);

    this.array = array;
  }

  _createClass(Projects, [{
    key: "getLength",
    value: function getLength() {
      return this.array.length;
    }
  }, {
    key: "addProject",
    value: function addProject(project) {
      this.array.push(project);
    }
  }, {
    key: "mapProject",
    value: function mapProject(callback) {
      return this.array.map(callback);
    }
  }, {
    key: "reduceProject",
    value: function reduceProject(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: "forEachProject",
    value: function forEachProject(callback) {
      this.array.forEach(callback);
    }
  }, {
    key: "asynchronousForEachProject",
    value: function asynchronousForEachProject(callback, done) {
      forEach(this.array, callback, done);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = this.array.map(function (project) {
        var projectJSON = project.toJSON();
        return projectJSON;
      });
      return json;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(json) {
      var array = json.map(function (json) {
        ///
        var project = _project["default"].fromJSON(json);

        return project;
      }),
          projects = new Projects(array);
      return projects;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var array = [],
          projects = new Projects(array);
      return projects;
    }
  }, {
    key: "fromProjectsDirectoryPath",
    value: function fromProjectsDirectoryPath(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
      var array = [],
          projects = new Projects(array),
          topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);
      topmostDirectoryNames.forEach(function (topmostDirectoryName) {
        var project = _project["default"].fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

        projects.addProject(project);
      });
      return projects;
    }
  }]);

  return Projects;
}();

module.exports = Projects;

function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  var topmostDirectoryNames;
  var subEntryNames = readDirectory(projectsDirectoryPath);
  topmostDirectoryNames = subEntryNames.reduce(function (topmostDirectoryNames, subEntryName) {
    var absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
        subEntryNameHiddenName = (0, _name.isNameHiddenName)(subEntryName),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmpzIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImlzRW50cnlEaXJlY3RvcnkiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicmVhZERpcmVjdG9yeSIsIlByb2plY3RzIiwiYXJyYXkiLCJsZW5ndGgiLCJwcm9qZWN0IiwicHVzaCIsImNhbGxiYWNrIiwibWFwIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZG9uZSIsImpzb24iLCJwcm9qZWN0SlNPTiIsInRvSlNPTiIsIlByb2plY3QiLCJmcm9tSlNPTiIsInByb2plY3RzIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwiYWRkUHJvamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lIiwiYWJzb2x1dGVTdWJFbnRyeVBhdGgiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwic3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSIsImxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwic3ViRW50cnlEaXJlY3RvcnkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRU0sSUFBRUEsT0FBRixHQUFjQyxnQ0FBZCxDQUFFRCxPQUFGO0FBQUEsSUFDRUUsZ0JBREYsR0FDdUJDLHdCQUR2QixDQUNFRCxnQkFERjtBQUFBLElBRUVFLGdCQUZGLEdBRXNDQyw4QkFGdEMsQ0FFRUQsZ0JBRkY7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WUFBakIsQ0FEL0I7QUFBQSxRQUVNRyx5QkFBeUIsR0FBRyxDQUFDRCxzQkFGbkM7QUFBQSxRQUdNRSw2QkFBNkIsR0FBRyxDQUFDYixrQ0FIdkM7O0FBS0EsUUFBSVkseUJBQXlCLElBQUlDLDZCQUFqQyxFQUFnRTtBQUM5RCxVQUFNQyxpQkFBaUIsR0FBR25DLGdCQUFnQixDQUFDK0Isb0JBQUQsQ0FBMUM7O0FBRUEsVUFBSUksaUJBQUosRUFBdUI7QUFDckIsWUFBTVgsb0JBQW9CLEdBQUdNLFlBQTdCLENBRHFCLENBQ3VCOztBQUU1Q1IsUUFBQUEscUJBQXFCLENBQUNmLElBQXRCLENBQTJCaUIsb0JBQTNCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPRixxQkFBUDtBQUNELEdBakJ1QixFQWlCckIsRUFqQnFCLENBQXhCO0FBbUJBLFNBQU9BLHFCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmltcG9ydCB7IGlzTmFtZUhpZGRlbk5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSwgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBtYXBQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZVByb2plY3QoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hQcm9qZWN0KGNhbGxiYWNrLCBkb25lKSB7XG4gICAgZm9yRWFjaCh0aGlzLmFycmF5LCBjYWxsYmFjaywgZG9uZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXJyYXkubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SlNPTiA9IHByb2plY3QudG9KU09OKCk7XG5cbiAgICAgIHJldHVybiBwcm9qZWN0SlNPTjtcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IGpzb24ubWFwKChqc29uKSA9PiB7ICAvLy9cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LmZyb21KU09OKGpzb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhhcnJheSksXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gdG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLmZvckVhY2goKHRvcG1vc3REaXJlY3RvcnlOYW1lKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdHM7XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG5cbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSBzdWJFbnRyeU5hbWVzLnJlZHVjZSgodG9wbW9zdERpcmVjdG9yeU5hbWVzLCBzdWJFbnRyeU5hbWUpID0+IHtcbiAgICBjb25zdCBhYnNvbHV0ZVN1YkVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSA9ICFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lLFxuICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXM7XG5cbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgY29uc3Qgc3ViRW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlU3ViRW50cnlQYXRoKTtcblxuICAgICAgaWYgKHN1YkVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc3ViRW50cnlOYW1lOyAgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLnB1c2godG9wbW9zdERpcmVjdG9yeU5hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcbiAgfSwgW10pO1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG59XG4iXX0=