'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('./util'),
    Project = require('./project');

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
    key: 'toJSON',
    value: function toJSON() {
      var json = this.array.map(function (project) {
        var projectJSON = project.toJSON();

        return projectJSON;
      });

      return json;
    }
  }], [{
    key: 'fromProjectsDirectoryPath',
    value: function fromProjectsDirectoryPath(projectsDirectoryPath) {
      var projects = new Projects(),
          rootDirectoryNames = rootDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath);

      rootDirectoryNames.forEach(function (rootDirectoryName) {
        var project = Project.fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath);

        projects.addProject(project);
      });

      return projects;
    }
  }]);

  return Projects;
}();

module.exports = Projects;

function rootDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath) {
  var subEntryNames = util.subEntryNamesFromAbsoluteFilePath(projectsDirectoryPath),
      rootDirectoryNames = subEntryNames.reduce(function (rootDirectoryNames, subEntryName) {
    var absoluteSubEntryPath = util.combinePaths(projectsDirectoryPath, subEntryName),
        absoluteSubEntryPathDirectoryPath = util.isDirectoryPath(absoluteSubEntryPath),
        subEntryDirectory = absoluteSubEntryPathDirectoryPath,
        ///
    subEntryHidden = util.isHidden(absoluteSubEntryPath);

    if (subEntryDirectory && !subEntryHidden) {
      var rootDirectoryName = subEntryName; ///

      rootDirectoryNames.push(rootDirectoryName);
    }

    return rootDirectoryNames;
  }, []);

  return rootDirectoryNames;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlByb2plY3QiLCJQcm9qZWN0cyIsImFycmF5IiwicHJvamVjdCIsInB1c2giLCJqc29uIiwibWFwIiwicHJvamVjdEpTT04iLCJ0b0pTT04iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJwcm9qZWN0cyIsInJvb3REaXJlY3RvcnlOYW1lcyIsInJvb3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJmb3JFYWNoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJmcm9tUm9vdERpcmVjdG9yeU5hbWUiLCJhZGRQcm9qZWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRmlsZVBhdGgiLCJyZWR1Y2UiLCJzdWJFbnRyeU5hbWUiLCJhYnNvbHV0ZVN1YkVudHJ5UGF0aCIsImNvbWJpbmVQYXRocyIsImFic29sdXRlU3ViRW50cnlQYXRoRGlyZWN0b3J5UGF0aCIsImlzRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5RGlyZWN0b3J5Iiwic3ViRW50cnlIaWRkZW4iLCJpc0hpZGRlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxXQUFSLENBRGhCOztJQUdNRSxRO0FBQ0osc0JBQWM7QUFBQTs7QUFDWixTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNEOzs7OytCQUVVQyxPLEVBQVM7QUFDbEIsV0FBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCRCxPQUFoQjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNRSxPQUFPLEtBQUtILEtBQUwsQ0FBV0ksR0FBWCxDQUFlLFVBQVNILE9BQVQsRUFBa0I7QUFDNUMsWUFBTUksY0FBY0osUUFBUUssTUFBUixFQUFwQjs7QUFFQSxlQUFPRCxXQUFQO0FBQ0QsT0FKWSxDQUFiOztBQU1BLGFBQU9GLElBQVA7QUFDRDs7OzhDQUVnQ0kscUIsRUFBdUI7QUFDdEQsVUFBTUMsV0FBVyxJQUFJVCxRQUFKLEVBQWpCO0FBQUEsVUFDTVUscUJBQXFCQyw0Q0FBNENILHFCQUE1QyxDQUQzQjs7QUFHQUUseUJBQW1CRSxPQUFuQixDQUEyQixVQUFTQyxpQkFBVCxFQUE0QjtBQUNyRCxZQUFNWCxVQUFVSCxRQUFRZSxxQkFBUixDQUE4QkQsaUJBQTlCLEVBQWlETCxxQkFBakQsQ0FBaEI7O0FBRUFDLGlCQUFTTSxVQUFULENBQW9CYixPQUFwQjtBQUNELE9BSkQ7O0FBTUEsYUFBT08sUUFBUDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQmpCLFFBQWpCOztBQUVBLFNBQVNXLDJDQUFULENBQXFESCxxQkFBckQsRUFBNEU7QUFDMUUsTUFBTVUsZ0JBQWdCckIsS0FBS3NCLGlDQUFMLENBQXVDWCxxQkFBdkMsQ0FBdEI7QUFBQSxNQUNNRSxxQkFBcUJRLGNBQWNFLE1BQWQsQ0FBcUIsVUFBU1Ysa0JBQVQsRUFBNkJXLFlBQTdCLEVBQTJDO0FBQ25GLFFBQU1DLHVCQUF1QnpCLEtBQUswQixZQUFMLENBQWtCZixxQkFBbEIsRUFBeUNhLFlBQXpDLENBQTdCO0FBQUEsUUFDTUcsb0NBQW9DM0IsS0FBSzRCLGVBQUwsQ0FBcUJILG9CQUFyQixDQUQxQztBQUFBLFFBRU1JLG9CQUFvQkYsaUNBRjFCO0FBQUEsUUFFOEQ7QUFDeERHLHFCQUFpQjlCLEtBQUsrQixRQUFMLENBQWNOLG9CQUFkLENBSHZCOztBQUtBLFFBQUlJLHFCQUFxQixDQUFDQyxjQUExQixFQUEwQztBQUN4QyxVQUFNZCxvQkFBb0JRLFlBQTFCLENBRHdDLENBQ0M7O0FBRXpDWCx5QkFBbUJQLElBQW5CLENBQXdCVSxpQkFBeEI7QUFDRDs7QUFFRCxXQUFPSCxrQkFBUDtBQUNELEdBYm9CLEVBYWxCLEVBYmtCLENBRDNCOztBQWdCQSxTQUFPQSxrQkFBUDtBQUNEIiwiZmlsZSI6InByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyksXG4gICAgICBQcm9qZWN0ID0gcmVxdWlyZSgnLi9wcm9qZWN0Jyk7XG5cbmNsYXNzIFByb2plY3RzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICBjb25zdCBwcm9qZWN0SlNPTiA9IHByb2plY3QudG9KU09OKCk7XG5cbiAgICAgIHJldHVybiBwcm9qZWN0SlNPTjtcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKSxcbiAgICAgICAgICByb290RGlyZWN0b3J5TmFtZXMgPSByb290RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICByb290RGlyZWN0b3J5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihyb290RGlyZWN0b3J5TmFtZSkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbVJvb3REaXJlY3RvcnlOYW1lKHJvb3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdHM7XG5cbmZ1bmN0aW9uIHJvb3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSB1dGlsLnN1YkVudHJ5TmFtZXNGcm9tQWJzb2x1dGVGaWxlUGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgpLFxuICAgICAgICByb290RGlyZWN0b3J5TmFtZXMgPSBzdWJFbnRyeU5hbWVzLnJlZHVjZShmdW5jdGlvbihyb290RGlyZWN0b3J5TmFtZXMsIHN1YkVudHJ5TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGFic29sdXRlU3ViRW50cnlQYXRoID0gdXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgICAgIGFic29sdXRlU3ViRW50cnlQYXRoRGlyZWN0b3J5UGF0aCA9IHV0aWwuaXNEaXJlY3RvcnlQYXRoKGFic29sdXRlU3ViRW50cnlQYXRoKSxcbiAgICAgICAgICAgICAgICBzdWJFbnRyeURpcmVjdG9yeSA9IGFic29sdXRlU3ViRW50cnlQYXRoRGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICAgICAgICAgIHN1YkVudHJ5SGlkZGVuID0gdXRpbC5pc0hpZGRlbihhYnNvbHV0ZVN1YkVudHJ5UGF0aCk7XG4gIFxuICAgICAgICAgIGlmIChzdWJFbnRyeURpcmVjdG9yeSAmJiAhc3ViRW50cnlIaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHJvb3REaXJlY3RvcnlOYW1lID0gc3ViRW50cnlOYW1lOyAgLy8vXG4gIFxuICAgICAgICAgICAgcm9vdERpcmVjdG9yeU5hbWVzLnB1c2gocm9vdERpcmVjdG9yeU5hbWUpXG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWVzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIHJvb3REaXJlY3RvcnlOYW1lcztcbn1cbiJdfQ==