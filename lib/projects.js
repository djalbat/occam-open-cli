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
  var subEntryNames = util.subEntryNamesFromAbsoluteDirectoryPath(projectsDirectoryPath),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlByb2plY3QiLCJQcm9qZWN0cyIsImFycmF5IiwicHJvamVjdCIsInB1c2giLCJqc29uIiwibWFwIiwicHJvamVjdEpTT04iLCJ0b0pTT04iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJwcm9qZWN0cyIsInJvb3REaXJlY3RvcnlOYW1lcyIsInJvb3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJmb3JFYWNoIiwicm9vdERpcmVjdG9yeU5hbWUiLCJmcm9tUm9vdERpcmVjdG9yeU5hbWUiLCJhZGRQcm9qZWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWVzRnJvbUFic29sdXRlRGlyZWN0b3J5UGF0aCIsInJlZHVjZSIsInN1YkVudHJ5TmFtZSIsImFic29sdXRlU3ViRW50cnlQYXRoIiwiY29tYmluZVBhdGhzIiwiYWJzb2x1dGVTdWJFbnRyeVBhdGhEaXJlY3RvcnlQYXRoIiwiaXNEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlEaXJlY3RvcnkiLCJzdWJFbnRyeUhpZGRlbiIsImlzSGlkZGVuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLFdBQVIsQ0FEaEI7O0lBR01FLFE7QUFDSixzQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7Ozs7K0JBRVVDLE8sRUFBUztBQUNsQixXQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JELE9BQWhCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1FLE9BQU8sS0FBS0gsS0FBTCxDQUFXSSxHQUFYLENBQWUsVUFBU0gsT0FBVCxFQUFrQjtBQUM1QyxZQUFNSSxjQUFjSixRQUFRSyxNQUFSLEVBQXBCOztBQUVBLGVBQU9ELFdBQVA7QUFDRCxPQUpZLENBQWI7O0FBTUEsYUFBT0YsSUFBUDtBQUNEOzs7OENBRWdDSSxxQixFQUF1QjtBQUN0RCxVQUFNQyxXQUFXLElBQUlULFFBQUosRUFBakI7QUFBQSxVQUNNVSxxQkFBcUJDLDRDQUE0Q0gscUJBQTVDLENBRDNCOztBQUdBRSx5QkFBbUJFLE9BQW5CLENBQTJCLFVBQVNDLGlCQUFULEVBQTRCO0FBQ3JELFlBQU1YLFVBQVVILFFBQVFlLHFCQUFSLENBQThCRCxpQkFBOUIsRUFBaURMLHFCQUFqRCxDQUFoQjs7QUFFQUMsaUJBQVNNLFVBQVQsQ0FBb0JiLE9BQXBCO0FBQ0QsT0FKRDs7QUFNQSxhQUFPTyxRQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCakIsUUFBakI7O0FBRUEsU0FBU1csMkNBQVQsQ0FBcURILHFCQUFyRCxFQUE0RTtBQUMxRSxNQUFNVSxnQkFBZ0JyQixLQUFLc0Isc0NBQUwsQ0FBNENYLHFCQUE1QyxDQUF0QjtBQUFBLE1BQ01FLHFCQUFxQlEsY0FBY0UsTUFBZCxDQUFxQixVQUFTVixrQkFBVCxFQUE2QlcsWUFBN0IsRUFBMkM7QUFDbkYsUUFBTUMsdUJBQXVCekIsS0FBSzBCLFlBQUwsQ0FBa0JmLHFCQUFsQixFQUF5Q2EsWUFBekMsQ0FBN0I7QUFBQSxRQUNNRyxvQ0FBb0MzQixLQUFLNEIsZUFBTCxDQUFxQkgsb0JBQXJCLENBRDFDO0FBQUEsUUFFTUksb0JBQW9CRixpQ0FGMUI7QUFBQSxRQUU4RDtBQUN4REcscUJBQWlCOUIsS0FBSytCLFFBQUwsQ0FBY04sb0JBQWQsQ0FIdkI7O0FBS0EsUUFBSUkscUJBQXFCLENBQUNDLGNBQTFCLEVBQTBDO0FBQ3hDLFVBQU1kLG9CQUFvQlEsWUFBMUIsQ0FEd0MsQ0FDQzs7QUFFekNYLHlCQUFtQlAsSUFBbkIsQ0FBd0JVLGlCQUF4QjtBQUNEOztBQUVELFdBQU9ILGtCQUFQO0FBQ0QsR0Fib0IsRUFhbEIsRUFia0IsQ0FEM0I7O0FBZ0JBLFNBQU9BLGtCQUFQO0FBQ0QiLCJmaWxlIjoicHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKSxcbiAgICAgIFByb2plY3QgPSByZXF1aXJlKCcuL3Byb2plY3QnKTtcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXJyYXkubWFwKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cygpLFxuICAgICAgICAgIHJvb3REaXJlY3RvcnlOYW1lcyA9IHJvb3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgIHJvb3REaXJlY3RvcnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHJvb3REaXJlY3RvcnlOYW1lKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tUm9vdERpcmVjdG9yeU5hbWUocm9vdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0cztcblxuZnVuY3Rpb24gcm9vdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHV0aWwuc3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgcm9vdERpcmVjdG9yeU5hbWVzID0gc3ViRW50cnlOYW1lcy5yZWR1Y2UoZnVuY3Rpb24ocm9vdERpcmVjdG9yeU5hbWVzLCBzdWJFbnRyeU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBhYnNvbHV0ZVN1YkVudHJ5UGF0aCA9IHV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZVN1YkVudHJ5UGF0aERpcmVjdG9yeVBhdGggPSB1dGlsLmlzRGlyZWN0b3J5UGF0aChhYnNvbHV0ZVN1YkVudHJ5UGF0aCksXG4gICAgICAgICAgICAgICAgc3ViRW50cnlEaXJlY3RvcnkgPSBhYnNvbHV0ZVN1YkVudHJ5UGF0aERpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgICAgICBzdWJFbnRyeUhpZGRlbiA9IHV0aWwuaXNIaWRkZW4oYWJzb2x1dGVTdWJFbnRyeVBhdGgpO1xuICBcbiAgICAgICAgICBpZiAoc3ViRW50cnlEaXJlY3RvcnkgJiYgIXN1YkVudHJ5SGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCByb290RGlyZWN0b3J5TmFtZSA9IHN1YkVudHJ5TmFtZTsgIC8vL1xuICBcbiAgICAgICAgICAgIHJvb3REaXJlY3RvcnlOYW1lcy5wdXNoKHJvb3REaXJlY3RvcnlOYW1lKVxuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgcmV0dXJuIHJvb3REaXJlY3RvcnlOYW1lcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiByb290RGlyZWN0b3J5TmFtZXM7XG59XG4iXX0=