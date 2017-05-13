'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fsExtra = require('fs-extra');

var async = require('./async'),
    pathUtil = require('./util/path'),
    pathMapsUtil = require('./util/pathMaps');

var helpers = function () {
  function helpers() {
    _classCallCheck(this, helpers);
  }

  _createClass(helpers, null, [{
    key: 'moveEntries',
    value: function moveEntries(pathMaps, projectsDirectoryPath, callback) {
      var targetPaths = [];

      pathMapsUtil.asyncForEachWithSourcePathAndTargetPath(pathMaps, function (sourcePath, targetPath, next) {
        moveEntry(sourcePath, targetPath, projectsDirectoryPath, function (targetPath) {
          targetPaths.push(targetPath);

          next();
        });
      }, function () {
        callback(targetPaths);
      });
    }
  }, {
    key: 'removeEntries',
    value: function removeEntries(pathMaps, projectsDirectoryPath, callback) {
      var targetPaths = [];

      pathMapsUtil.asyncForEachWithSourcePathAndTargetPath(pathMaps, function (sourcePath, targetPath, next) {
        removeEntry(sourcePath, targetPath, projectsDirectoryPath, function (targetPath) {
          targetPaths.push(targetPath);

          next();
        });
      }, function () {
        callback(targetPaths);
      });
    }
  }]);

  return helpers;
}();

module.exports = helpers;

function moveEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (sourcePath === targetPath) {
    callback(targetPath);
  } else {
    var absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
        exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      targetPath = null;

      callback(targetPath);
    } else {
      var absoluteTargetPath = pathUtil.combinePaths(projectsDirectoryPath, targetPath);

      fsExtra.move(absoluteSourcePath, absoluteTargetPath, function (err) {
        var success = err === null;

        if (success) {
          callback(targetPath);
        } else {
          var errCode = err.code;

          if (errCode !== 'EEXIST') {
            var _targetPath = sourcePath;

            callback(_targetPath);
          } else {
            removeEntry(sourcePath, targetPath, projectsDirectoryPath, function (targetPath) {
              var success = targetPath === null;

              targetPath = success ? targetPath : sourcePath;

              callback(targetPath);
            });
          }
        }
      });
    }
  }
}

function removeEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (sourcePath === targetPath) {
    callback(targetPath);
  } else {
    var absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
        exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      targetPath = null;

      callback(targetPath);
    } else {
      var absoluteSourcePathDirectoryPath = pathUtil.isDirectoryPath(absoluteSourcePath),
          entryDirectory = absoluteSourcePathDirectoryPath;

      entryDirectory ? removeDirectory(sourcePath, projectsDirectoryPath, callback) : removeFile(sourcePath, projectsDirectoryPath, callback);
    }
  }
}

function removeDirectory(sourcePath, projectsDirectoryPath, callback) {
  var absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
      empty = pathUtil.isDirectoryEmpty(absoluteSourcePath);

  if (!empty) {
    var targetPath = sourcePath;

    callback(targetPath);
  } else {
    fsExtra.remove(absoluteSourcePath, function (err) {
      var success = err === null,
          targetPath = success ? null : sourcePath;

      callback(targetPath);
    });
  }
}

function removeFile(sourcePath, projectsDirectoryPath, callback) {
  var absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath);

  fsExtra.remove(absoluteSourcePath, function (err) {
    var success = err === null,
        targetPath = success ? null : sourcePath;

    callback(targetPath);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImZzRXh0cmEiLCJyZXF1aXJlIiwiYXN5bmMiLCJwYXRoVXRpbCIsInBhdGhNYXBzVXRpbCIsImhlbHBlcnMiLCJwYXRoTWFwcyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwidGFyZ2V0UGF0aHMiLCJhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aEFuZFRhcmdldFBhdGgiLCJzb3VyY2VQYXRoIiwidGFyZ2V0UGF0aCIsIm5leHQiLCJtb3ZlRW50cnkiLCJwdXNoIiwicmVtb3ZlRW50cnkiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVTb3VyY2VQYXRoIiwiY29tYmluZVBhdGhzIiwiZXhpc3RzIiwiZXhpc3RzU3luYyIsImFic29sdXRlVGFyZ2V0UGF0aCIsIm1vdmUiLCJlcnIiLCJzdWNjZXNzIiwiZXJyQ29kZSIsImNvZGUiLCJhYnNvbHV0ZVNvdXJjZVBhdGhEaXJlY3RvcnlQYXRoIiwiaXNEaXJlY3RvcnlQYXRoIiwiZW50cnlEaXJlY3RvcnkiLCJyZW1vdmVEaXJlY3RvcnkiLCJyZW1vdmVGaWxlIiwiZW1wdHkiLCJpc0RpcmVjdG9yeUVtcHR5IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxVQUFSLENBQWhCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxpQkFBUixDQUZyQjs7SUFJTUksTzs7Ozs7OztnQ0FDZUMsUSxFQUFVQyxxQixFQUF1QkMsUSxFQUFVO0FBQzVELFVBQU1DLGNBQWMsRUFBcEI7O0FBRUFMLG1CQUFhTSx1Q0FBYixDQUNFSixRQURGLEVBRUUsVUFBU0ssVUFBVCxFQUFxQkMsVUFBckIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQ3JDQyxrQkFBVUgsVUFBVixFQUFzQkMsVUFBdEIsRUFB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REMsUUFBbkQsQ0FERixHQUVJeUIsV0FBV3RCLFVBQVgsRUFBdUJKLHFCQUF2QixFQUE4Q0MsUUFBOUMsQ0FGSjtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTd0IsZUFBVCxDQUF5QnJCLFVBQXpCLEVBQXFDSixxQkFBckMsRUFBNERDLFFBQTVELEVBQXNFO0FBQ3BFLE1BQU1XLHFCQUFxQmhCLFNBQVNpQixZQUFULENBQXNCYixxQkFBdEIsRUFBNkNJLFVBQTdDLENBQTNCO0FBQUEsTUFDTXVCLFFBQVEvQixTQUFTZ0MsZ0JBQVQsQ0FBMEJoQixrQkFBMUIsQ0FEZDs7QUFHQSxNQUFJLENBQUNlLEtBQUwsRUFBWTtBQUNWLFFBQU10QixhQUFhRCxVQUFuQjs7QUFFQUgsYUFBU0ksVUFBVDtBQUNELEdBSkQsTUFJTztBQUNMWixZQUFRb0MsTUFBUixDQUFlakIsa0JBQWYsRUFBbUMsVUFBU00sR0FBVCxFQUFjO0FBQy9DLFVBQU1DLFVBQVdELFFBQVEsSUFBekI7QUFBQSxVQUNNYixhQUFhYyxVQUNHLElBREgsR0FFS2YsVUFIeEI7O0FBS0FILGVBQVNJLFVBQVQ7QUFDRCxLQVBEO0FBUUQ7QUFDRjs7QUFFRCxTQUFTcUIsVUFBVCxDQUFvQnRCLFVBQXBCLEVBQWdDSixxQkFBaEMsRUFBdURDLFFBQXZELEVBQWlFO0FBQy9ELE1BQU1XLHFCQUFxQmhCLFNBQVNpQixZQUFULENBQXNCYixxQkFBdEIsRUFBNkNJLFVBQTdDLENBQTNCOztBQUVBWCxVQUFRb0MsTUFBUixDQUFlakIsa0JBQWYsRUFBbUMsVUFBU00sR0FBVCxFQUFjO0FBQy9DLFFBQU1DLFVBQVdELFFBQVEsSUFBekI7QUFBQSxRQUNNYixhQUFhYyxVQUNHLElBREgsR0FFS2YsVUFIeEI7O0FBS0FILGFBQVNJLFVBQVQ7QUFDRCxHQVBEO0FBUUQiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnNFeHRyYSA9IHJlcXVpcmUoJ2ZzLWV4dHJhJyk7XG5cbmNvbnN0IGFzeW5jID0gcmVxdWlyZSgnLi9hc3luYycpLFxuICAgICAgcGF0aFV0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aCcpLFxuICAgICAgcGF0aE1hcHNVdGlsID0gcmVxdWlyZSgnLi91dGlsL3BhdGhNYXBzJyk7XG5cbmNsYXNzIGhlbHBlcnMge1xuICBzdGF0aWMgbW92ZUVudHJpZXMocGF0aE1hcHMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0YXJnZXRQYXRocyA9IFtdO1xuXG4gICAgcGF0aE1hcHNVdGlsLmFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aChcbiAgICAgIHBhdGhNYXBzLCBcbiAgICAgIGZ1bmN0aW9uKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIG5leHQpIHtcbiAgICAgICAgbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24odGFyZ2V0UGF0aCkge1xuICAgICAgICAgIHRhcmdldFBhdGhzLnB1c2godGFyZ2V0UGF0aCk7XG4gICAgICAgICAgXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2sodGFyZ2V0UGF0aHMpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRW50cmllcyhwYXRoTWFwcywgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRhcmdldFBhdGhzID0gW107XG5cbiAgICBwYXRoTWFwc1V0aWwuYXN5bmNGb3JFYWNoV2l0aFNvdXJjZVBhdGhBbmRUYXJnZXRQYXRoKFxuICAgICAgcGF0aE1hcHMsXG4gICAgICBmdW5jdGlvbihzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBuZXh0KSB7XG4gICAgICAgIHJlbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24odGFyZ2V0UGF0aCkge1xuICAgICAgICAgIHRhcmdldFBhdGhzLnB1c2godGFyZ2V0UGF0aCk7XG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsYmFjayh0YXJnZXRQYXRocyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cbmZ1bmN0aW9uIG1vdmVFbnRyeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGlmIChzb3VyY2VQYXRoID09PSB0YXJnZXRQYXRoKSB7XG4gICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYWJzb2x1dGVTb3VyY2VQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlUGF0aCksXG4gICAgICAgICAgZXhpc3RzID0gZnNFeHRyYS5leGlzdHNTeW5jKGFic29sdXRlU291cmNlUGF0aCk7XG5cbiAgICBpZiAoIWV4aXN0cykge1xuICAgICAgdGFyZ2V0UGF0aCA9IG51bGw7XG4gICAgICBcbiAgICAgIGNhbGxiYWNrKHRhcmdldFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVRhcmdldFBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0YXJnZXRQYXRoKTtcblxuICAgICAgZnNFeHRyYS5tb3ZlKGFic29sdXRlU291cmNlUGF0aCwgYWJzb2x1dGVUYXJnZXRQYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IChlcnIgPT09IG51bGwpO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZXJyQ29kZSA9IGVyci5jb2RlO1xuXG4gICAgICAgICAgaWYgKGVyckNvZGUgIT09ICdFRVhJU1QnKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQYXRoID0gc291cmNlUGF0aDtcblxuICAgICAgICAgICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24odGFyZ2V0UGF0aCkge1xuICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzID0gKHRhcmdldFBhdGggPT09IG51bGwpO1xuXG4gICAgICAgICAgICAgIHRhcmdldFBhdGggPSBzdWNjZXNzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRQYXRoIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVBhdGg7XG5cbiAgICAgICAgICAgICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbnRyeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGlmIChzb3VyY2VQYXRoID09PSB0YXJnZXRQYXRoKSB7XG4gICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYWJzb2x1dGVTb3VyY2VQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlUGF0aCksXG4gICAgICAgICAgZXhpc3RzID0gZnNFeHRyYS5leGlzdHNTeW5jKGFic29sdXRlU291cmNlUGF0aCk7XG5cbiAgICBpZiAoIWV4aXN0cykge1xuICAgICAgdGFyZ2V0UGF0aCA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKHRhcmdldFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGhEaXJlY3RvcnlQYXRoID0gcGF0aFV0aWwuaXNEaXJlY3RvcnlQYXRoKGFic29sdXRlU291cmNlUGF0aCksXG4gICAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGFic29sdXRlU291cmNlUGF0aERpcmVjdG9yeVBhdGg7XG5cbiAgICAgIGVudHJ5RGlyZWN0b3J5ID9cbiAgICAgICAgcmVtb3ZlRGlyZWN0b3J5KHNvdXJjZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIDpcbiAgICAgICAgICByZW1vdmVGaWxlKHNvdXJjZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVEaXJlY3Rvcnkoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKSxcbiAgICAgICAgZW1wdHkgPSBwYXRoVXRpbC5pc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlU291cmNlUGF0aCk7XG5cbiAgaWYgKCFlbXB0eSkge1xuICAgIGNvbnN0IHRhcmdldFBhdGggPSBzb3VyY2VQYXRoO1xuXG4gICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgZnNFeHRyYS5yZW1vdmUoYWJzb2x1dGVTb3VyY2VQYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoZXJyID09PSBudWxsKSxcbiAgICAgICAgICAgIHRhcmdldFBhdGggPSBzdWNjZXNzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVBhdGg7XG5cbiAgICAgIGNhbGxiYWNrKHRhcmdldFBhdGgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZpbGUoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKTtcblxuICBmc0V4dHJhLnJlbW92ZShhYnNvbHV0ZVNvdXJjZVBhdGgsIGZ1bmN0aW9uKGVycikge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAoZXJyID09PSBudWxsKSxcbiAgICAgICAgICB0YXJnZXRQYXRoID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVBhdGg7XG5cbiAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgfSk7XG59Il19