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
      var movedPaths = [];

      pathMapsUtil.asyncForEachWithSourcePathAndTargetPath(pathMaps, function (sourcePath, targetPath, next) {
        moveEntry(sourcePath, targetPath, projectsDirectoryPath, function (movedPath) {
          movedPaths.push(movedPath);

          next();
        });
      }, function () {
        callback(movedPaths);
      });
    }
  }, {
    key: 'removeEntries',
    value: function removeEntries(pathMaps, projectsDirectoryPath, callback) {
      var removedPaths = [];

      pathMapsUtil.asyncForEachWithSourcePath(pathMaps, function (sourcePath, next) {
        removeEntry(sourcePath, projectsDirectoryPath, function (removedPath) {
          removedPaths.push(removedPath);

          next();
        });
      }, function () {
        callback(removedPaths);
      });
    }
  }]);

  return helpers;
}();

module.exports = helpers;

function moveEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (sourcePath === targetPath) {
    var movedPath = sourcePath;

    callback(movedPath);
  } else {
    var absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
        exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      var _movedPath = null;

      callback(_movedPath);
    } else {
      var absoluteTargetPath = pathUtil.combinePaths(projectsDirectoryPath, targetPath);

      fsExtra.move(absoluteSourcePath, absoluteTargetPath, function (err) {
        var success = err === null;

        if (success) {
          var _movedPath2 = targetPath;

          callback(_movedPath2);
        } else {
          var errCode = err.code;

          if (errCode !== 'EEXIST') {
            var _movedPath3 = sourcePath;

            callback(_movedPath3);
          } else {
            removeEntry(sourcePath, projectsDirectoryPath, function (removedPath) {
              var success = removedPath === null,
                  movedPath = success ? targetPath : sourcePath;

              callback(movedPath);
            });
          }
        }
      });
    }
  }
}

function removeEntry(sourcePath, projectsDirectoryPath, callback) {
  var absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
      exists = fsExtra.existsSync(absoluteSourcePath);

  if (!exists) {
    var removedPath = null;

    callback(removedPath);
  } else {
    var absoluteSourcePathDirectoryPath = pathUtil.isDirectoryPath(absoluteSourcePath),
        entryDirectory = absoluteSourcePathDirectoryPath;

    entryDirectory ? removeDirectory(sourcePath, projectsDirectoryPath, callback) : removeFile(sourcePath, projectsDirectoryPath, callback);
  }
}

function removeDirectory(sourcePath, projectsDirectoryPath, callback) {
  var absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
      empty = pathUtil.isDirectoryEmpty(absoluteSourcePath);

  if (!empty) {
    var removedPath = sourcePath;

    callback(removedPath);
  } else {
    fsExtra.remove(absoluteSourcePath, function (err) {
      var success = err === null,
          removedPath = success ? null : sourcePath;

      callback(removedPath);
    });
  }
}

function removeFile(sourcePath, projectsDirectoryPath, callback) {
  var absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath);

  fsExtra.remove(absoluteSourcePath, function (err) {
    var success = err === null,
        removedPath = success ? null : sourcePath;

    callback(removedPath);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImZzRXh0cmEiLCJyZXF1aXJlIiwiYXN5bmMiLCJwYXRoVXRpbCIsInBhdGhNYXBzVXRpbCIsImhlbHBlcnMiLCJwYXRoTWFwcyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwibW92ZWRQYXRocyIsImFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aCIsInNvdXJjZVBhdGgiLCJ0YXJnZXRQYXRoIiwibmV4dCIsIm1vdmVFbnRyeSIsIm1vdmVkUGF0aCIsInB1c2giLCJyZW1vdmVkUGF0aHMiLCJhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aCIsInJlbW92ZUVudHJ5IiwicmVtb3ZlZFBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVTb3VyY2VQYXRoIiwiY29tYmluZVBhdGhzIiwiZXhpc3RzIiwiZXhpc3RzU3luYyIsImFic29sdXRlVGFyZ2V0UGF0aCIsIm1vdmUiLCJlcnIiLCJzdWNjZXNzIiwiZXJyQ29kZSIsImNvZGUiLCJhYnNvbHV0ZVNvdXJjZVBhdGhEaXJlY3RvcnlQYXRoIiwiaXNEaXJlY3RvcnlQYXRoIiwiZW50cnlEaXJlY3RvcnkiLCJyZW1vdmVEaXJlY3RvcnkiLCJyZW1vdmVGaWxlIiwiZW1wdHkiLCJpc0RpcmVjdG9yeUVtcHR5IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxVQUFSLENBQWhCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxpQkFBUixDQUZyQjs7SUFJTUksTzs7Ozs7OztnQ0FDZUMsUSxFQUFVQyxxQixFQUF1QkMsUSxFQUFVO0FBQzVELFVBQU1DLGFBQWEsRUFBbkI7O0FBRUFMLG1CQUFhTSx1Q0FBYixDQUNFSixRQURGLEVBRUUsVUFBU0ssVUFB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VUFBaEIsRUFBNEJKLHFCQUE1QixFQUFtREMsUUFBbkQsQ0FERixHQUVJNkIsV0FBVzFCLFVBQVgsRUFBdUJKLHFCQUF2QixFQUE4Q0MsUUFBOUMsQ0FGSjtBQUdEO0FBQ0Y7O0FBRUQsU0FBUzRCLGVBQVQsQ0FBeUJ6QixVQUF6QixFQUFxQ0oscUJBQXJDLEVBQTREQyxRQUE1RCxFQUFzRTtBQUNwRSxNQUFNZSxxQkFBcUJwQixTQUFTcUIsWUFBVCxDQUFzQmpCLHFCQUF0QixFQUE2Q0ksVUFBN0MsQ0FBM0I7QUFBQSxNQUNNMkIsUUFBUW5DLFNBQVNvQyxnQkFBVCxDQUEwQmhCLGtCQUExQixDQURkOztBQUdBLE1BQUksQ0FBQ2UsS0FBTCxFQUFZO0FBQ1YsUUFBTWxCLGNBQWNULFVBQXBCOztBQUVBSCxhQUFTWSxXQUFUO0FBQ0QsR0FKRCxNQUlPO0FBQ0xwQixZQUFRd0MsTUFBUixDQUFlakIsa0JBQWYsRUFBbUMsVUFBU00sR0FBVCxFQUFjO0FBQy9DLFVBQU1DLFVBQVdELFFBQVEsSUFBekI7QUFBQSxVQUNNVCxjQUFjVSxVQUNFLElBREYsR0FFSW5CLFVBSHhCOztBQUtBSCxlQUFTWSxXQUFUO0FBQ0QsS0FQRDtBQVFEO0FBQ0Y7O0FBRUQsU0FBU2lCLFVBQVQsQ0FBb0IxQixVQUFwQixFQUFnQ0oscUJBQWhDLEVBQXVEQyxRQUF2RCxFQUFpRTtBQUMvRCxNQUFNZSxxQkFBcUJwQixTQUFTcUIsWUFBVCxDQUFzQmpCLHFCQUF0QixFQUE2Q0ksVUFBN0MsQ0FBM0I7O0FBRUFYLFVBQVF3QyxNQUFSLENBQWVqQixrQkFBZixFQUFtQyxVQUFTTSxHQUFULEVBQWM7QUFDL0MsUUFBTUMsVUFBV0QsUUFBUSxJQUF6QjtBQUFBLFFBQ01ULGNBQWNVLFVBQ0UsSUFERixHQUVJbkIsVUFIeEI7O0FBS0FILGFBQVNZLFdBQVQ7QUFDRCxHQVBEO0FBUUQiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnNFeHRyYSA9IHJlcXVpcmUoJ2ZzLWV4dHJhJyk7XG5cbmNvbnN0IGFzeW5jID0gcmVxdWlyZSgnLi9hc3luYycpLFxuICAgICAgcGF0aFV0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aCcpLFxuICAgICAgcGF0aE1hcHNVdGlsID0gcmVxdWlyZSgnLi91dGlsL3BhdGhNYXBzJyk7XG5cbmNsYXNzIGhlbHBlcnMge1xuICBzdGF0aWMgbW92ZUVudHJpZXMocGF0aE1hcHMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBtb3ZlZFBhdGhzID0gW107XG5cbiAgICBwYXRoTWFwc1V0aWwuYXN5bmNGb3JFYWNoV2l0aFNvdXJjZVBhdGhBbmRUYXJnZXRQYXRoKFxuICAgICAgcGF0aE1hcHMsIFxuICAgICAgZnVuY3Rpb24oc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgbmV4dCkge1xuICAgICAgICBtb3ZlRW50cnkoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmdW5jdGlvbihtb3ZlZFBhdGgpIHtcbiAgICAgICAgICBtb3ZlZFBhdGhzLnB1c2gobW92ZWRQYXRoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsYmFjayhtb3ZlZFBhdGhzKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZUVudHJpZXMocGF0aE1hcHMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCByZW1vdmVkUGF0aHMgPSBbXTtcblxuICAgIHBhdGhNYXBzVXRpbC5hc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aChcbiAgICAgIHBhdGhNYXBzLFxuICAgICAgZnVuY3Rpb24oc291cmNlUGF0aCwgbmV4dCkge1xuICAgICAgICByZW1vdmVFbnRyeShzb3VyY2VQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGZ1bmN0aW9uKHJlbW92ZWRQYXRoKSB7XG4gICAgICAgICAgcmVtb3ZlZFBhdGhzLnB1c2gocmVtb3ZlZFBhdGgpO1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2socmVtb3ZlZFBhdGhzKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcblxuZnVuY3Rpb24gbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgaWYgKHNvdXJjZVBhdGggPT09IHRhcmdldFBhdGgpIHtcbiAgICBjb25zdCBtb3ZlZFBhdGggPSBzb3VyY2VQYXRoO1xuXG4gICAgY2FsbGJhY2sobW92ZWRQYXRoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKSxcbiAgICAgICAgICBleGlzdHMgPSBmc0V4dHJhLmV4aXN0c1N5bmMoYWJzb2x1dGVTb3VyY2VQYXRoKTtcblxuICAgIGlmICghZXhpc3RzKSB7XG4gICAgICBjb25zdCBtb3ZlZFBhdGggPSBudWxsO1xuXG4gICAgICBjYWxsYmFjayhtb3ZlZFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVRhcmdldFBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0YXJnZXRQYXRoKTtcblxuICAgICAgZnNFeHRyYS5tb3ZlKGFic29sdXRlU291cmNlUGF0aCwgYWJzb2x1dGVUYXJnZXRQYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IChlcnIgPT09IG51bGwpO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgbW92ZWRQYXRoID0gdGFyZ2V0UGF0aDtcblxuICAgICAgICAgIGNhbGxiYWNrKG1vdmVkUGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZXJyQ29kZSA9IGVyci5jb2RlO1xuXG4gICAgICAgICAgaWYgKGVyckNvZGUgIT09ICdFRVhJU1QnKSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlZFBhdGggPSBzb3VyY2VQYXRoO1xuXG4gICAgICAgICAgICBjYWxsYmFjayhtb3ZlZFBhdGgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVFbnRyeShzb3VyY2VQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGZ1bmN0aW9uKHJlbW92ZWRQYXRoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAocmVtb3ZlZFBhdGggPT09IG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlZFBhdGggPSBzdWNjZXNzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRQYXRoIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVBhdGg7XG5cbiAgICAgICAgICAgICAgY2FsbGJhY2sobW92ZWRQYXRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgY29uc3QgYWJzb2x1dGVTb3VyY2VQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlUGF0aCksXG4gICAgICAgIGV4aXN0cyA9IGZzRXh0cmEuZXhpc3RzU3luYyhhYnNvbHV0ZVNvdXJjZVBhdGgpO1xuXG4gIGlmICghZXhpc3RzKSB7XG4gICAgY29uc3QgcmVtb3ZlZFBhdGggPSBudWxsO1xuXG4gICAgY2FsbGJhY2socmVtb3ZlZFBhdGgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGFic29sdXRlU291cmNlUGF0aERpcmVjdG9yeVBhdGggPSBwYXRoVXRpbC5pc0RpcmVjdG9yeVBhdGgoYWJzb2x1dGVTb3VyY2VQYXRoKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGFic29sdXRlU291cmNlUGF0aERpcmVjdG9yeVBhdGg7XG5cbiAgICBlbnRyeURpcmVjdG9yeSA/XG4gICAgICByZW1vdmVEaXJlY3Rvcnkoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykgOlxuICAgICAgICByZW1vdmVGaWxlKHNvdXJjZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURpcmVjdG9yeShzb3VyY2VQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFic29sdXRlU291cmNlUGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHNvdXJjZVBhdGgpLFxuICAgICAgICBlbXB0eSA9IHBhdGhVdGlsLmlzRGlyZWN0b3J5RW1wdHkoYWJzb2x1dGVTb3VyY2VQYXRoKTtcblxuICBpZiAoIWVtcHR5KSB7XG4gICAgY29uc3QgcmVtb3ZlZFBhdGggPSBzb3VyY2VQYXRoO1xuXG4gICAgY2FsbGJhY2socmVtb3ZlZFBhdGgpO1xuICB9IGVsc2Uge1xuICAgIGZzRXh0cmEucmVtb3ZlKGFic29sdXRlU291cmNlUGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zdCBzdWNjZXNzID0gKGVyciA9PT0gbnVsbCksXG4gICAgICAgICAgICByZW1vdmVkUGF0aCA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUGF0aDtcblxuICAgICAgY2FsbGJhY2socmVtb3ZlZFBhdGgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZpbGUoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKTtcblxuICBmc0V4dHJhLnJlbW92ZShhYnNvbHV0ZVNvdXJjZVBhdGgsIGZ1bmN0aW9uKGVycikge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAoZXJyID09PSBudWxsKSxcbiAgICAgICAgICByZW1vdmVkUGF0aCA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VQYXRoO1xuXG4gICAgY2FsbGJhY2socmVtb3ZlZFBhdGgpO1xuICB9KTtcbn0iXX0=