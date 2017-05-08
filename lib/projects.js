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
    subEntryHidden = pathUtil.isHidden(absoluteSubEntryPath);

    if (subEntryDirectory && !subEntryHidden) {
      var rootDirectoryName = subEntryName; ///

      rootDirectoryNames.push(rootDirectoryName);
    }

    return rootDirectoryNames;
  }, []);

  return rootDirectoryNames;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwicmVxdWlyZSIsInBhdGhVdGlsIiwiUHJvamVjdHMiLCJhcnJheSIsInByb2plY3QiLCJwdXNoIiwianNvbiIsIm1hcCIsInByb2plY3RKU09OIiwidG9KU09OIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwicHJvamVjdHMiLCJyb290RGlyZWN0b3J5TmFtZXMiLCJyb290RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZm9yRWFjaCIsInJvb3REaXJlY3RvcnlOYW1lIiwiZnJvbVJvb3REaXJlY3RvcnlOYW1lIiwiYWRkUHJvamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJyZWR1Y2UiLCJzdWJFbnRyeU5hbWUiLCJhYnNvbHV0ZVN1YkVudHJ5UGF0aCIsImNvbWJpbmVQYXRocyIsImFic29sdXRlU3ViRW50cnlQYXRoRGlyZWN0b3J5UGF0aCIsImlzRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5RGlyZWN0b3J5Iiwic3ViRW50cnlIaWRkZW4iLCJpc0hpZGRlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLFdBQVdELFFBQVEsYUFBUixDQURqQjs7SUFHTUUsUTtBQUNKLHNCQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDRDs7OzsrQkFFVUMsTyxFQUFTO0FBQ2xCLFdBQUtELEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkQsT0FBaEI7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUUsT0FBTyxLQUFLSCxLQUFMLENBQVdJLEdBQVgsQ0FBZSxVQUFTSCxPQUFULEVBQWtCO0FBQzVDLFlBQU1JLGNBQWNKLFFBQVFLLE1BQVIsRUFBcEI7O0FBRUEsZUFBT0QsV0FBUDtBQUNELE9BSlksQ0FBYjs7QUFNQSxhQUFPRixJQUFQO0FBQ0Q7Ozs4Q0FFZ0NJLHFCLEVBQXVCO0FBQ3RELFVBQU1DLFdBQVcsSUFBSVQsUUFBSixFQUFqQjtBQUFBLFVBQ01VLHFCQUFxQkMsNENBQTRDSCxxQkFBNUMsQ0FEM0I7O0FBR0FFLHlCQUFtQkUsT0FBbkIsQ0FBMkIsVUFBU0MsaUJBQVQsRUFBNEI7QUFDckQsWUFBTVgsVUFBVUwsUUFBUWlCLHFCQUFSLENBQThCRCxpQkFBOUIsRUFBaURMLHFCQUFqRCxDQUFoQjs7QUFFQUMsaUJBQVNNLFVBQVQsQ0FBb0JiLE9BQXBCO0FBQ0QsT0FKRDs7QUFNQSxhQUFPTyxRQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCakIsUUFBakI7O0FBRUEsU0FBU1csMkNBQVQsQ0FBcURILHFCQUFyRCxFQUE0RTtBQUMxRSxNQUFNVSxnQkFBZ0JuQixTQUFTb0Isc0NBQVQsQ0FBZ0RYLHFCQUFoRCxDQUF0QjtBQUFBLE1BQ01FLHFCQUFxQlEsY0FBY0UsTUFBZCxDQUFxQixVQUFTVixrQkFBVCxFQUE2QlcsWUFBN0IsRUFBMkM7QUFDbkYsUUFBTUMsdUJBQXVCdkIsU0FBU3dCLFlBQVQsQ0FBc0JmLHFCQUF0QixFQUE2Q2EsWUFBN0MsQ0FBN0I7QUFBQSxRQUNNRyxvQ0FBb0N6QixTQUFTMEIsZUFBVCxDQUF5Qkgsb0JBQXpCLENBRDFDO0FBQUEsUUFFTUksb0JBQW9CRixpQ0FGMUI7QUFBQSxRQUU4RDtBQUN4REcscUJBQWlCNUIsU0FBUzZCLFFBQVQsQ0FBa0JOLG9CQUFsQixDQUh2Qjs7QUFLQSxRQUFJSSxxQkFBcUIsQ0FBQ0MsY0FBMUIsRUFBMEM7QUFDeEMsVUFBTWQsb0JBQW9CUSxZQUExQixDQUR3QyxDQUNDOztBQUV6Q1gseUJBQW1CUCxJQUFuQixDQUF3QlUsaUJBQXhCO0FBQ0Q7O0FBRUQsV0FBT0gsa0JBQVA7QUFDRCxHQWJvQixFQWFsQixFQWJrQixDQUQzQjs7QUFnQkEsU0FBT0Esa0JBQVA7QUFDRCIsImZpbGUiOiJwcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvamVjdCA9IHJlcXVpcmUoJy4vcHJvamVjdCcpLFxuICAgICAgcGF0aFV0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aCcpO1xuXG5jbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgY29uc3QgcHJvamVjdEpTT04gPSBwcm9qZWN0LnRvSlNPTigpO1xuXG4gICAgICByZXR1cm4gcHJvamVjdEpTT047XG4gICAgfSk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gbmV3IFByb2plY3RzKCksXG4gICAgICAgICAgcm9vdERpcmVjdG9yeU5hbWVzID0gcm9vdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgcm9vdERpcmVjdG9yeU5hbWVzLmZvckVhY2goZnVuY3Rpb24ocm9vdERpcmVjdG9yeU5hbWUpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LmZyb21Sb290RGlyZWN0b3J5TmFtZShyb290RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3RzO1xuXG5mdW5jdGlvbiByb290RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcGF0aFV0aWwuc3ViRW50cnlOYW1lc0Zyb21BYnNvbHV0ZURpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgcm9vdERpcmVjdG9yeU5hbWVzID0gc3ViRW50cnlOYW1lcy5yZWR1Y2UoZnVuY3Rpb24ocm9vdERpcmVjdG9yeU5hbWVzLCBzdWJFbnRyeU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBhYnNvbHV0ZVN1YkVudHJ5UGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVTdWJFbnRyeVBhdGhEaXJlY3RvcnlQYXRoID0gcGF0aFV0aWwuaXNEaXJlY3RvcnlQYXRoKGFic29sdXRlU3ViRW50cnlQYXRoKSxcbiAgICAgICAgICAgICAgICBzdWJFbnRyeURpcmVjdG9yeSA9IGFic29sdXRlU3ViRW50cnlQYXRoRGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICAgICAgICAgIHN1YkVudHJ5SGlkZGVuID0gcGF0aFV0aWwuaXNIaWRkZW4oYWJzb2x1dGVTdWJFbnRyeVBhdGgpO1xuICBcbiAgICAgICAgICBpZiAoc3ViRW50cnlEaXJlY3RvcnkgJiYgIXN1YkVudHJ5SGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCByb290RGlyZWN0b3J5TmFtZSA9IHN1YkVudHJ5TmFtZTsgIC8vL1xuICBcbiAgICAgICAgICAgIHJvb3REaXJlY3RvcnlOYW1lcy5wdXNoKHJvb3REaXJlY3RvcnlOYW1lKVxuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgcmV0dXJuIHJvb3REaXJlY3RvcnlOYW1lcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiByb290RGlyZWN0b3J5TmFtZXM7XG59XG4iXX0=