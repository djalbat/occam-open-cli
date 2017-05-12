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
    fsExtra.remove(absoluteSourcePath, function (err) {
      var success = err === null,
          removedPath = success ? null : sourcePath;

      callback(removedPath);
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImZzRXh0cmEiLCJyZXF1aXJlIiwiYXN5bmMiLCJwYXRoVXRpbCIsInBhdGhNYXBzVXRpbCIsImhlbHBlcnMiLCJwYXRoTWFwcyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwibW92ZWRQYXRocyIsImFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aCIsInNvdXJjZVBhdGgiLCJ0YXJnZXRQYXRoIiwibmV4dCIsIm1vdmVFbnRyeSIsIm1vdmVkUGF0aCIsInB1c2giLCJyZW1vdmVkUGF0aHMiLCJhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aCIsInJlbW92ZUVudHJ5IiwicmVtb3ZlZFBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVTb3VyY2VQYXRoIiwiY29tYmluZVBhdGhzIiwiZXhpc3RzIiwiZXhpc3RzU3luYyIsImFic29sdXRlVGFyZ2V0UGF0aCIsIm1vdmUiLCJlcnIiLCJzdWNjZXNzIiwiZXJyQ29kZSIsImNvZGUiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsUUFBUUQsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNRSxXQUFXRixRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGlCQUFSLENBRnJCOztJQUlNSSxPOzs7Ozs7O2dDQUNlQyxRLEVBQVVDLHFCLEVBQXVCQyxRLEVBQVU7QUFDNUQsVUFBTUMsYUFBYSxFQUFuQjs7QUFFQUwsbUJBQWFNLHVDQUFiLENBQ0VKLFFBREYsRUFFRSxVQUFTSyxVQUFULEVBQXFCQyxVQUFyQixFQUFpQ0MsSUFBakMsRUFBdUM7QUFDckNDLGtCQUFVSCxVQUFWLEVBQXNCQyxVQUF0QixFQUFrQ0wscUJBQWxDLEVBQXlELFVBQVNRLFNBQVQsRUFBb0I7QUFDM0VOLHFCQUFXTyxJQUFYLENBQWdC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cmEgPSByZXF1aXJlKCdmcy1leHRyYScpO1xuXG5jb25zdCBhc3luYyA9IHJlcXVpcmUoJy4vYXN5bmMnKSxcbiAgICAgIHBhdGhVdGlsID0gcmVxdWlyZSgnLi91dGlsL3BhdGgnKSxcbiAgICAgIHBhdGhNYXBzVXRpbCA9IHJlcXVpcmUoJy4vdXRpbC9wYXRoTWFwcycpO1xuXG5jbGFzcyBoZWxwZXJzIHtcbiAgc3RhdGljIG1vdmVFbnRyaWVzKHBhdGhNYXBzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbW92ZWRQYXRocyA9IFtdO1xuXG4gICAgcGF0aE1hcHNVdGlsLmFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aChcbiAgICAgIHBhdGhNYXBzLCBcbiAgICAgIGZ1bmN0aW9uKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIG5leHQpIHtcbiAgICAgICAgbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24obW92ZWRQYXRoKSB7XG4gICAgICAgICAgbW92ZWRQYXRocy5wdXNoKG1vdmVkUGF0aCk7XG4gICAgICAgICAgXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2sobW92ZWRQYXRocyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVFbnRyaWVzKHBhdGhNYXBzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVtb3ZlZFBhdGhzID0gW107XG5cbiAgICBwYXRoTWFwc1V0aWwuYXN5bmNGb3JFYWNoV2l0aFNvdXJjZVBhdGgoXG4gICAgICBwYXRoTWFwcyxcbiAgICAgIGZ1bmN0aW9uKHNvdXJjZVBhdGgsIG5leHQpIHtcbiAgICAgICAgcmVtb3ZlRW50cnkoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmdW5jdGlvbihyZW1vdmVkUGF0aCkge1xuICAgICAgICAgIHJlbW92ZWRQYXRocy5wdXNoKHJlbW92ZWRQYXRoKTtcblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlbW92ZWRQYXRocyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cbmZ1bmN0aW9uIG1vdmVFbnRyeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGlmIChzb3VyY2VQYXRoID09PSB0YXJnZXRQYXRoKSB7XG4gICAgY29uc3QgbW92ZWRQYXRoID0gc291cmNlUGF0aDtcblxuICAgIGNhbGxiYWNrKG1vdmVkUGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYWJzb2x1dGVTb3VyY2VQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlUGF0aCksXG4gICAgICAgICAgZXhpc3RzID0gZnNFeHRyYS5leGlzdHNTeW5jKGFic29sdXRlU291cmNlUGF0aCk7XG5cbiAgICBpZiAoIWV4aXN0cykge1xuICAgICAgY29uc3QgbW92ZWRQYXRoID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2sobW92ZWRQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWJzb2x1dGVUYXJnZXRQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGFyZ2V0UGF0aCk7XG5cbiAgICAgIGZzRXh0cmEubW92ZShhYnNvbHV0ZVNvdXJjZVBhdGgsIGFic29sdXRlVGFyZ2V0UGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoZXJyID09PSBudWxsKTtcblxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IG1vdmVkUGF0aCA9IHRhcmdldFBhdGg7XG5cbiAgICAgICAgICBjYWxsYmFjayhtb3ZlZFBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGVyckNvZGUgPSBlcnIuY29kZTtcblxuICAgICAgICAgIGlmIChlcnJDb2RlICE9PSAnRUVYSVNUJykge1xuICAgICAgICAgICAgY29uc3QgbW92ZWRQYXRoID0gc291cmNlUGF0aDtcblxuICAgICAgICAgICAgY2FsbGJhY2sobW92ZWRQYXRoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlRW50cnkoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmdW5jdGlvbihyZW1vdmVkUGF0aCkge1xuICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzID0gKHJlbW92ZWRQYXRoID09PSBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgbW92ZWRQYXRoID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VQYXRoO1xuXG4gICAgICAgICAgICAgIGNhbGxiYWNrKG1vdmVkUGF0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbnRyeShzb3VyY2VQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFic29sdXRlU291cmNlUGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHNvdXJjZVBhdGgpLFxuICAgICAgICBleGlzdHMgPSBmc0V4dHJhLmV4aXN0c1N5bmMoYWJzb2x1dGVTb3VyY2VQYXRoKTtcblxuICBpZiAoIWV4aXN0cykge1xuICAgIGNvbnN0IHJlbW92ZWRQYXRoID0gbnVsbDtcblxuICAgIGNhbGxiYWNrKHJlbW92ZWRQYXRoKTtcbiAgfSBlbHNlIHtcbiAgICBmc0V4dHJhLnJlbW92ZShhYnNvbHV0ZVNvdXJjZVBhdGgsIGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc3Qgc3VjY2VzcyA9IChlcnIgPT09IG51bGwpLFxuICAgICAgICAgICAgcmVtb3ZlZFBhdGggPSBzdWNjZXNzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVBhdGg7XG5cbiAgICAgIGNhbGxiYWNrKHJlbW92ZWRQYXRoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19