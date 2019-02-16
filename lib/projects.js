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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiUHJvamVjdCIsIm5hbWVVdGlsaXRpZXMiLCJwYXRoVXRpbGl0aWVzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImZvckVhY2giLCJjb25jYXRlbmF0ZVBhdGhzIiwiaXNOYW1lSGlkZGVuTmFtZSIsImlzRW50cnlEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwiUHJvamVjdHMiLCJhcnJheSIsImxlbmd0aCIsInByb2plY3QiLCJwdXNoIiwiY2FsbGJhY2siLCJtYXAiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJkb25lIiwianNvbiIsInByb2plY3RKU09OIiwidG9KU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0cyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFsbG93T25seVJlY29nbmlzZWRGaWxlcyIsImRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsImFkZFByb2plY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsImFic29sdXRlU3ViRW50cnlQYXRoIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsInN1YkVudHJ5RGlyZWN0b3J5IiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUUsZ0JBQWdCRixRQUFRLGtCQUFSLENBRHRCOztJQUdRRyxhLEdBQThESixTLENBQTlESSxhO0lBQWVDLG1CLEdBQStDTCxTLENBQS9DSyxtQjtJQUFxQkMscUIsR0FBMEJOLFMsQ0FBMUJNLHFCO0lBQ3BDQyxPLEdBQVlELHFCLENBQVpDLE87SUFDQUMsZ0IsR0FBcUJKLGEsQ0FBckJJLGdCO0lBQ0FDLGdCLEdBQXFCTixhLENBQXJCTSxnQjtJQUNBQyxnQixHQUFvQ0wsbUIsQ0FBcENLLGdCO0lBQWtCQyxhLEdBQWtCTixtQixDQUFsQk0sYTs7SUFFcEJDLFE7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsS0FBTCxDQUFXQyxNQUFsQjtBQUNEOzs7K0JBRVVDLE8sRUFBUztBQUNsQixXQUFLRixLQUFMLENBQVdHLElBQVgsQ0FBZ0JELE9BQWhCO0FBQ0Q7OzsrQkFFVUUsUSxFQUFVO0FBQ25CLGFBQU8sS0FBS0osS0FBTCxDQUFXSyxHQUFYLENBQWVELFFBQWYsQ0FBUDtBQUNEOzs7a0NBRWFBLFEsRUFBVUUsWSxFQUFjO0FBQ3BDLGFBQU8sS0FBS04sS0FBTCxDQUFXTyxNQUFYLENBQWtCSCxRQUFsQixFQUE0QkUsWUFBNUIsQ0FBUDtBQUNEOzs7bUNBRWNGLFEsRUFBVTtBQUN2QixXQUFLSixLQUFMLENBQVdOLE9BQVgsQ0FBbUJVLFFBQW5CO0FBQ0Q7OzsrQ0FFMEJBLFEsRUFBVUksSSxFQUFNO0FBQ3pDZCxjQUFRLEtBQUtNLEtBQWIsRUFBb0JJLFFBQXBCLEVBQThCSSxJQUE5QjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxPQUFPLEtBQUtULEtBQUwsQ0FBV0ssR0FBWCxDQUFlLFVBQVNILE9BQVQsRUFBa0I7QUFDNUMsWUFBTVEsY0FBY1IsUUFBUVMsTUFBUixFQUFwQjs7QUFFQSxlQUFPRCxXQUFQO0FBQ0QsT0FKWSxDQUFiOztBQU1BLGFBQU9ELElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTVQsUUFBUVMsS0FBS0osR0FBTCxDQUFTLFVBQVNJLElBQVQsRUFBZTtBQUFHO0FBQ2pDLFlBQU1QLFVBQVViLFFBQVF1QixRQUFSLENBQWlCSCxJQUFqQixDQUFoQjs7QUFFQSxlQUFPUCxPQUFQO0FBQ0QsT0FKTyxDQUFkO0FBQUEsVUFLTVcsV0FBVyxJQUFJZCxRQUFKLENBQWFDLEtBQWIsQ0FMakI7O0FBT0EsYUFBT2EsUUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1iLFFBQVEsRUFBZDtBQUFBLFVBQ01hLFdBQVcsSUFBSWQsUUFBSixDQUFhQyxLQUFiLENBRGpCOztBQUdBLGFBQU9hLFFBQVA7QUFDRDs7OzhDQUVnQ0MscUIsRUFBdUJDLHdCLEVBQTBCQyxpQyxFQUFtQztBQUNuSCxVQUFNaEIsUUFBUSxFQUFkO0FBQUEsVUFDTWEsV0FBVyxJQUFJZCxRQUFKLENBQWFDLEtBQWIsQ0FEakI7QUFBQSxVQUVNaUIsd0JBQXdCQywrQ0FBK0NKLHFCQUEvQyxFQUFzRUUsaUNBQXRFLENBRjlCOztBQUlBQyw0QkFBc0J2QixPQUF0QixDQUE4QixVQUFTeUIsb0JBQVQsRUFBK0I7QUFDM0QsWUFBTWpCLFVBQVViLFFBQVErQix3QkFBUixDQUFpQ0Qsb0JBQWpDLEVBQXVETCxxQkFBdkQsRUFBOEVDLHdCQUE5RSxFQUF3R0MsaUNBQXhHLENBQWhCOztBQUVBSCxpQkFBU1EsVUFBVCxDQUFvQm5CLE9BQXBCO0FBQ0QsT0FKRDs7QUFNQSxhQUFPVyxRQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCeEIsUUFBakI7O0FBRUEsU0FBU21CLDhDQUFULENBQXdESixxQkFBeEQsRUFBK0VFLGlDQUEvRSxFQUFrSDtBQUNoSCxNQUFJQyw4QkFBSjs7QUFFQSxNQUFJO0FBQ0YsUUFBTU8sZ0JBQWdCMUIsY0FBY2dCLHFCQUFkLENBQXRCOztBQUVBRyw0QkFBd0JPLGNBQWNqQixNQUFkLENBQXFCLFVBQVNVLHFCQUFULEVBQWdDUSxZQUFoQyxFQUE4QztBQUN6RixVQUFNQyx1QkFBdUIvQixpQkFBaUJtQixxQkFBakIsRUFBd0NXLFlBQXhDLENBQTdCO0FBQUEsVUFDTUUseUJBQXlCL0IsaUJBQWlCNkIsWUFBakIsQ0FEL0I7QUFBQSxVQUVNRyw0QkFBNEIsQ0FBQ0Qsc0JBRm5DO0FBQUEsVUFHTUUsZ0NBQWdDLENBQUNiLGlDQUh2Qzs7QUFLQSxVQUFJWSw2QkFBNkJDLDZCQUFqQyxFQUFnRTtBQUM5RCxZQUFNQyxvQkFBb0JqQyxpQkFBaUI2QixvQkFBakIsQ0FBMUI7O0FBRUEsWUFBSUksaUJBQUosRUFBdUI7QUFDckIsY0FBTVgsdUJBQXVCTSxZQUE3QixDQURxQixDQUN1Qjs7QUFFNUNSLGdDQUFzQmQsSUFBdEIsQ0FBMkJnQixvQkFBM0I7QUFDRDtBQUNGOztBQUVELGFBQU9GLHFCQUFQO0FBQ0QsS0FqQnVCLEVBaUJyQixFQWpCcUIsQ0FBeEI7QUFrQkQsR0FyQkQsQ0FxQkUsT0FBT2MsS0FBUCxFQUFjO0FBQ2RkLDRCQUF3QixFQUF4QjtBQUNEOztBQUVELFNBQU9BLHFCQUFQO0FBQ0QiLCJmaWxlIjoicHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBQcm9qZWN0ID0gcmVxdWlyZSgnLi9wcm9qZWN0JyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IGlzTmFtZUhpZGRlbk5hbWUgfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGlzRW50cnlEaXJlY3RvcnksIHJlYWREaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmNsYXNzIFByb2plY3RzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgbWFwUHJvamVjdChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7XG4gIH1cblxuICByZWR1Y2VQcm9qZWN0KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cblxuICBmb3JFYWNoUHJvamVjdChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc3luY2hyb25vdXNGb3JFYWNoUHJvamVjdChjYWxsYmFjaywgZG9uZSkge1xuICAgIGZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2ssIGRvbmUpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmFycmF5Lm1hcChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICBjb25zdCBwcm9qZWN0SlNPTiA9IHByb2plY3QudG9KU09OKCk7XG5cbiAgICAgIHJldHVybiBwcm9qZWN0SlNPTjtcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IGpzb24ubWFwKGZ1bmN0aW9uKGpzb24pIHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KSxcbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHRvcG1vc3REaXJlY3RvcnlOYW1lKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdHM7XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lcztcblxuICB0cnkge1xuICAgIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSBzdWJFbnRyeU5hbWVzLnJlZHVjZShmdW5jdGlvbih0b3Btb3N0RGlyZWN0b3J5TmFtZXMsIHN1YkVudHJ5TmFtZSkge1xuICAgICAgY29uc3QgYWJzb2x1dGVTdWJFbnRyeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICAgIHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXG4gICAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXM7XG5cbiAgICAgIGlmIChzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIHx8IGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YkVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVN1YkVudHJ5UGF0aCk7XG5cbiAgICAgICAgaWYgKHN1YkVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzdWJFbnRyeU5hbWU7ICAvLy9cblxuICAgICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lcy5wdXNoKHRvcG1vc3REaXJlY3RvcnlOYW1lKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XG4gICAgfSwgW10pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lcyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcbn1cbiJdfQ==