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
      var projects;

      try {
        var array = [];
        projects = new Projects(array);
        var topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);
        topmostDirectoryNames.forEach(function (topmostDirectoryName) {
          var project = _project["default"].fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

          projects.addProject(project);
        });
      } catch (error) {
        projects = null;
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmpzIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImlzRW50cnlEaXJlY3RvcnkiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicmVhZERpcmVjdG9yeSIsIlByb2plY3RzIiwiYXJyYXkiLCJsZW5ndGgiLCJwcm9qZWN0IiwicHVzaCIsImNhbGxiYWNrIiwibWFwIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZG9uZSIsImpzb24iLCJwcm9qZWN0SlNPTiIsInRvSlNPTiIsIlByb2plY3QiLCJmcm9tSlNPTiIsInByb2plY3RzIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwiYWRkUHJvamVjdCIsImVycm9yIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsImFic29sdXRlU3ViRW50cnlQYXRoIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInN1YkVudHJ5RGlyZWN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRU0sSUFBRUEsT0FBRixHQUFjQyxnQ0FBZCxDQUFFRCxPQUFGO0FBQUEsSUFDRUUsZ0JBREYsR0FDdUJDLHdCQUR2QixDQUNFRCxnQkFERjtBQUFBLElBRUVFLGdCQUZGLEdBRXNDQyw4QkFGdEMsQ0FFRUQsZ0JBRkY7QUFBQSxJ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RUFBd0JVLFlBQXhCLENBQTdDO0FBQUEsUUFDTUUsc0JBQXNCLEdBQUcsNEJBQWlCRixZQUFqQixDQUQvQjtBQUFBLFFBRU1HLHlCQUF5QixHQUFHLENBQUNELHNCQUZuQztBQUFBLFFBR01FLDZCQUE2QixHQUFHLENBQUNaLGtDQUh2Qzs7QUFLQSxRQUFJVyx5QkFBeUIsSUFBSUMsNkJBQWpDLEVBQWdFO0FBQzlELFVBQU1DLGlCQUFpQixHQUFHbEMsZ0JBQWdCLENBQUM4QixvQkFBRCxDQUExQzs7QUFFQSxVQUFJSSxpQkFBSixFQUF1QjtBQUNyQixZQUFNVixvQkFBb0IsR0FBR0ssWUFBN0IsQ0FEcUIsQ0FDdUI7O0FBRTVDUCxRQUFBQSxxQkFBcUIsQ0FBQ2YsSUFBdEIsQ0FBMkJpQixvQkFBM0I7QUFDRDtBQUNGOztBQUVELFdBQU9GLHFCQUFQO0FBQ0QsR0FqQnVCLEVBaUJyQixFQWpCcUIsQ0FBeEI7QUFtQkEsU0FBT0EscUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuaW1wb3J0IHsgaXNOYW1lSGlkZGVuTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBpc0VudHJ5RGlyZWN0b3J5LCByZWFkRGlyZWN0b3J5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIG1hcFByb2plY3QoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlUHJvamVjdChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaFByb2plY3QoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QoY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBsZXQgcHJvamVjdHM7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoYXJyYXkpO1xuXG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lcy5mb3JFYWNoKCh0b3Btb3N0RGlyZWN0b3J5TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcHJvamVjdHMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xuXG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gc3ViRW50cnlOYW1lcy5yZWR1Y2UoKHRvcG1vc3REaXJlY3RvcnlOYW1lcywgc3ViRW50cnlOYW1lKSA9PiB7XG4gICAgY29uc3QgYWJzb2x1dGVTdWJFbnRyeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGNvbnN0IHN1YkVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVN1YkVudHJ5UGF0aCk7XG5cbiAgICAgIGlmIChzdWJFbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHN1YkVudHJ5TmFtZTsgIC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lcy5wdXNoKHRvcG1vc3REaXJlY3RvcnlOYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xufVxuIl19