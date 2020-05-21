"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Projects;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmpzIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImlzRW50cnlEaXJlY3RvcnkiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicmVhZERpcmVjdG9yeSIsIlByb2plY3RzIiwiYXJyYXkiLCJsZW5ndGgiLCJwcm9qZWN0IiwicHVzaCIsImNhbGxiYWNrIiwibWFwIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZG9uZSIsImpzb24iLCJwcm9qZWN0SlNPTiIsInRvSlNPTiIsIlByb2plY3QiLCJmcm9tSlNPTiIsInByb2plY3RzIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwiYWRkUHJvamVjdCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJhYnNvbHV0ZVN1YkVudHJ5UGF0aCIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIiwibG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJzdWJFbnRyeURpcmVjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQUVNLElBQUVBLE9BQUYsR0FBY0MsZ0NBQWQsQ0FBRUQsT0FBRjtBQUFBLElBQ0VFLGdCQURGLEdBQ3VCQyx3QkFEdkIsQ0FDRUQsZ0JBREY7QUFBQSxJQUVFRSxnQkFGRixHQUVzQ0MsOEJBRnRDLENBRUVELGdCQUZGO0FBQUEsSUFFb0JFLGFB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QUFBLFFBR01FLDZCQUE2QixHQUFHLENBQUNYLGtDQUh2Qzs7QUFLQSxRQUFJVSx5QkFBeUIsSUFBSUMsNkJBQWpDLEVBQWdFO0FBQzlELFVBQU1DLGlCQUFpQixHQUFHakMsZ0JBQWdCLENBQUM2QixvQkFBRCxDQUExQzs7QUFFQSxVQUFJSSxpQkFBSixFQUF1QjtBQUNyQixZQUFNVCxvQkFBb0IsR0FBR0ksWUFBN0IsQ0FEcUIsQ0FDdUI7O0FBRTVDTixRQUFBQSxxQkFBcUIsQ0FBQ2YsSUFBdEIsQ0FBMkJpQixvQkFBM0I7QUFDRDtBQUNGOztBQUVELFdBQU9GLHFCQUFQO0FBQ0QsR0FqQnVCLEVBaUJyQixFQWpCcUIsQ0FBeEI7QUFtQkEsU0FBT0EscUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuaW1wb3J0IHsgaXNOYW1lSGlkZGVuTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBpc0VudHJ5RGlyZWN0b3J5LCByZWFkRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIG1hcFByb2plY3QoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlUHJvamVjdChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaFByb2plY3QoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QoY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KSxcbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMuZm9yRWFjaCgodG9wbW9zdERpcmVjdG9yeU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lcztcblxuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lcyA9IHN1YkVudHJ5TmFtZXMucmVkdWNlKCh0b3Btb3N0RGlyZWN0b3J5TmFtZXMsIHN1YkVudHJ5TmFtZSkgPT4ge1xuICAgIGNvbnN0IGFic29sdXRlU3ViRW50cnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXG4gICAgICAgICAgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcztcblxuICAgIGlmIChzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIHx8IGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBjb25zdCBzdWJFbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVTdWJFbnRyeVBhdGgpO1xuXG4gICAgICBpZiAoc3ViRW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzdWJFbnRyeU5hbWU7ICAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMucHVzaCh0b3Btb3N0RGlyZWN0b3J5TmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcbn1cbiJdfQ==