'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = require('./project'),
    pathUtil = require('./util/path');

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
  var subEntryNames = pathUtil.subEntryNamesFromAbsoluteDirectoryPath(projectsDirectoryPath),
      rootDirectoryNames = subEntryNames.reduce(function (rootDirectoryNames, subEntryName) {
    var absoluteSubEntryPath = pathUtil.combinePaths(projectsDirectoryPath, subEntryName),
        absoluteSubEntryPathDirectoryPath = pathUtil.isDirectoryPath(absoluteSubEntryPath),
        subEntryDirectory = absoluteSubEntryPathDirectoryPath,
        ///
    subEntryHidden = pathUtil.isHiddenPath(absoluteSubEntryPath);

    if (subEntryDirectory && !subEntryHidden) {
      var rootDirectoryName = subEntryName; ///

      rootDirectoryNames.push(rootDirectoryName);
    }

    return rootDirectoryNames;
  }, []);

  return rootDirectoryNames;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwicmVxdWlyZSIsInBhdGhVdGlsIiwiUHJvamVjdHMiLCJhcnJheSIsInByb2plY3QiLCJwdXNoIiwianNvbiIsIm1hcCIsInByb2plY3RKU09OIiwidG9KU09OIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwicHJvamVjdHMiLCJyb290RGlyZWN0b3J5TmFtZXMiLCJyb290RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZm9yRWFjaCIsInJvb3REaXJlY3RvcnlOYW1lIiwiZnJvbVJvb3REaXJlY3RvcnlOYW1lIiwiYWRkUHJvamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJyZWR1Y2UiLCJzdWJFbnRyeU5hbWUiLCJhYnNvbHV0ZVN1YkVudHJ5UGF0aCIsImNvbWJpbmVQYXRocyIsImFic29sdXRlU3ViRW50cnlQYXRoRGlyZWN0b3J5UGF0aCIsImlzRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5RGlyZWN0b3J5Iiwic3ViRW50cnlIaWRkZW4iLCJpc0hpZGRlblBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxXQUFXRCxRQUFRLGFBQVIsQ0FEakI7O0lBR01FLFE7QUFDSixzQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7Ozs7K0JBRVVDLE8sRUFBUztBQUNsQixXQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JELE9BQWhCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1FLE9BQU8sS0FBS0gsS0FBTCxDQUFXSSxHQUFYLENBQWUsVUFBU0gsT0FBVCxFQUFrQjtBQUM1QyxZQUFNSSxjQUFjSixRQUFRSyxNQUFSLEVBQXBCOztBQUVBLGVBQU9ELFdBQVA7QUFDRCxPQUpZLENBQWI7O0FBTUEsYUFBT0YsSUFBUDtBQUNEOzs7OENBRWdDSSxxQixFQUF1QjtBQUN0RCxVQUFNQyxXQUFXLElBQUlULFFBQUosRUFBakI7QUFBQSxVQUNNVSxxQkFBcUJDLDRDQUE0Q0gscUJBQTVDLENBRDNCOztBQUdBRSx5QkFBbUJFLE9BQW5CLENBQTJCLFVBQVNDLGlCQUFULEVBQTRCO0FBQ3JELFlBQU1YLFVBQVVMLFFBQVFpQixxQkFBUixDQUE4QkQsaUJBQTlCLEVBQWlETCxxQkFBakQsQ0FBaEI7O0FBRUFDLGlCQUFTTSxVQUFULENBQW9CYixPQUFwQjtBQUNELE9BSkQ7O0FBTUEsYUFBT08sUUFBUDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQmpCLFFBQWpCOztBQUVBLFNBQVNXLDJDQUFULENBQXFESCxxQkFBckQsRUFBNEU7QUFDMUUsTUFBTVUsZ0JBQWdCbkIsU0FBU29CLHNDQUFULENBQWdEWCxxQkFBaEQsQ0FBdEI7QUFBQSxNQUNNRSxxQkFBcUJRLGNBQWNFLE1BQWQsQ0FBcUIsVUFBU1Ysa0JBQVQsRUFBNkJXLFlBQTdCLEVBQTJDO0FBQ25GLFFBQU1DLHVCQUF1QnZCLFNBQVN3QixZQUFULENBQXNCZixxQkFBdEIsRUFBNkNhLFlBQTdDLENBQTdCO0FBQUEsUUFDTUcsb0NBQW9DekIsU0FBUzBCLGVBQVQsQ0FBeUJILG9CQUF6QixDQUQxQztBQUFBLFFBRU1JLG9CQUFvQkYsaUNBRjFCO0FBQUEsUUFFOEQ7QUFDeERHLHFCQUFpQjVCLFNBQVM2QixZQUFULENBQXNCTixvQkFBdEIsQ0FIdkI7O0FBS0EsUUFBSUkscUJBQXFCLENBQUNDLGNBQTFCLEVBQTBDO0FBQ3hDLFVBQU1kLG9CQUFvQlEsWUFBMUIsQ0FEd0MsQ0FDQzs7QUFFekNYLHlCQUFtQlAsSUFBbkIsQ0FBd0JVLGlCQUF4QjtBQUNEOztBQUVELFdBQU9ILGtCQUFQO0FBQ0QsR0Fib0IsRUFhbEIsRUFia0IsQ0FEM0I7O0FBZ0JBLFNBQU9BLGtCQUFQO0FBQ0QiLCJmaWxlIjoicHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2plY3QgPSByZXF1aXJlKCcuL3Byb2plY3QnKSxcbiAgICAgIHBhdGhVdGlsID0gcmVxdWlyZSgnLi91dGlsL3BhdGgnKTtcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cygpLFxuICAgICAgICAgIHJvb3REaXJlY3RvcnlOYW1lcyA9IHJvb3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgIHJvb3REaXJlY3RvcnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHJvb3REaXJlY3RvcnlOYW1lKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tUm9vdERpcmVjdG9yeU5hbWUocm9vdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0cztcblxuZnVuY3Rpb24gcm9vdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHBhdGhVdGlsLnN1YkVudHJ5TmFtZXNGcm9tQWJzb2x1dGVEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHJvb3REaXJlY3RvcnlOYW1lcyA9IHN1YkVudHJ5TmFtZXMucmVkdWNlKGZ1bmN0aW9uKHJvb3REaXJlY3RvcnlOYW1lcywgc3ViRW50cnlOYW1lKSB7XG4gICAgICAgICAgY29uc3QgYWJzb2x1dGVTdWJFbnRyeVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgICAgIGFic29sdXRlU3ViRW50cnlQYXRoRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsLmlzRGlyZWN0b3J5UGF0aChhYnNvbHV0ZVN1YkVudHJ5UGF0aCksXG4gICAgICAgICAgICAgICAgc3ViRW50cnlEaXJlY3RvcnkgPSBhYnNvbHV0ZVN1YkVudHJ5UGF0aERpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgICAgICBzdWJFbnRyeUhpZGRlbiA9IHBhdGhVdGlsLmlzSGlkZGVuUGF0aChhYnNvbHV0ZVN1YkVudHJ5UGF0aCk7XG4gIFxuICAgICAgICAgIGlmIChzdWJFbnRyeURpcmVjdG9yeSAmJiAhc3ViRW50cnlIaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHJvb3REaXJlY3RvcnlOYW1lID0gc3ViRW50cnlOYW1lOyAgLy8vXG4gIFxuICAgICAgICAgICAgcm9vdERpcmVjdG9yeU5hbWVzLnB1c2gocm9vdERpcmVjdG9yeU5hbWUpXG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICByZXR1cm4gcm9vdERpcmVjdG9yeU5hbWVzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIHJvb3REaXJlY3RvcnlOYW1lcztcbn1cbiJdfQ==