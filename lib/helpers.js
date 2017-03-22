'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fsExtra = require('fs-extra');

var util = require('./util'),
    async = require('./async');

var helpers = function () {
  function helpers() {
    _classCallCheck(this, helpers);
  }

  _createClass(helpers, null, [{
    key: 'moveEntries',
    value: function moveEntries(pathMaps, projectsDirectoryPath, callback) {
      var movedPaths = [];

      async.forEach(pathMaps, function (pathMap, next) {
        var keys = Object.keys(pathMap),
            firstKey = first(keys),
            sourcePath = firstKey,
            ///
        targetPath = pathMap[sourcePath];

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

      async.forEach(pathMaps, function (pathMap, next) {
        var keys = Object.keys(pathMap),
            firstKey = first(keys),
            sourcePath = firstKey,
            ///
        targetPath = pathMap[sourcePath];

        removeEntry(sourcePath, targetPath, projectsDirectoryPath, function (removedPath) {
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
    var _movedPath = void 0;

    var absoluteSourcePath = util.combinePaths(projectsDirectoryPath, sourcePath),
        exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      _movedPath = null;

      callback(_movedPath);
    } else {
      var absoluteTargetPath = util.combinePaths(projectsDirectoryPath, targetPath);

      fsExtra.move(absoluteSourcePath, absoluteTargetPath, function (err) {
        var movedPath = void 0;

        if (err && err.code === 'EEXIST') {
          ///
          movedPath = targetPath;

          targetPath = null; ///

          remove(sourcePath, targetPath, projectsDirectoryPath, function () {
            callback(movedPath);
          });
        } else {
          var success = err === null;

          movedPath = success ? targetPath : sourcePath;

          callback(movedPath);
        }
      });
    }
  }
}

function removeEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (targetPath !== null) {
    var removedPath = sourcePath;

    callback(removedPath);
  } else {
    var absoluteSourcePath = util.combinePaths(projectsDirectoryPath, sourcePath),
        exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      var _removedPath = sourcePath;

      callback(_removedPath);
    } else {
      fsExtra.remove(absoluteSourcePath, function (err) {
        var success = err === null,
            removedPath = success ? null : sourcePath;

        callback(removedPath);
      });
    }
  }
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImZzRXh0cmEiLCJyZXF1aXJlIiwidXRpbCIsImFzeW5jIiwiaGVscGVycyIsInBhdGhNYXBzIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJtb3ZlZFBhdGhzIiwiZm9yRWFjaCIsInBhdGhNYXAiLCJuZXh0Iiwia2V5cyIsIk9iamVjdCIsImZpcnN0S2V5IiwiZmlyc3QiLCJzb3VyY2VQYXRoIiwidGFyZ2V0UGF0aCIsIm1vdmVFbnRyeSIsIm1vdmVkUGF0aCIsInB1c2giLCJyZW1vdmVkUGF0aHMiLCJyZW1vdmVFbnRyeSIsInJlbW92ZWRQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImFic29sdXRlU291cmNlUGF0aCIsImNvbWJpbmVQYXRocyIsImV4aXN0cyIsImV4aXN0c1N5bmMiLCJhYnNvbHV0ZVRhcmdldFBhdGgiLCJtb3ZlIiwiZXJyIiwiY29kZSIsInJlbW92ZSIsInN1Y2Nlc3MiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsVUFBUixDQUFoQjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01FLFFBQVFGLFFBQVEsU0FBUixDQURkOztJQUdNRyxPOzs7Ozs7O2dDQUNlQyxRLEVBQVVDLHFCLEVBQXVCQyxRLEVBQVU7QUFDNUQsVUFBTUMsYUFBYSxFQUFuQjs7QUFFQUwsWUFBTU0sT0FBTixDQUNFSixRQURGLEVBRUUsVUFBU0ssT0FBVCxFQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEIsWUFBTUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZRixPQUFaLENBQWI7QUFBQSxZQUNNSSxXQUFXQyxNQUFNSCxJQUFOLENBRGpCO0FBQUEsWUFFTUksYUFBYUYsUUFGbkI7QUFBQSxZQUU2QjtBQUN2QkcscUJBQWFQLFFBQVFNLFVBQVIsQ0FIbkI7O0FBS0FFLGtCQUFVRixVQUFWLEVBQXNCQyxVQUF0QixFQUFr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Z0IsWUFBVDtBQUNELEtBSkQsTUFJTztBQUNMdkIsY0FBUWtDLE1BQVIsQ0FBZVIsa0JBQWYsRUFBbUMsVUFBU00sR0FBVCxFQUFjO0FBQy9DLFlBQU1HLFVBQVdILFFBQVEsSUFBekI7QUFBQSxZQUNNVCxjQUFjWSxVQUNFLElBREYsR0FFSW5CLFVBSHhCOztBQUtBVCxpQkFBU2dCLFdBQVQ7QUFDRCxPQVBEO0FBUUQ7QUFDRjtBQUNGOztBQUVELFNBQVNSLEtBQVQsQ0FBZXFCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmc0V4dHJhID0gcmVxdWlyZSgnZnMtZXh0cmEnKTtcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpLFxuICAgICAgYXN5bmMgPSByZXF1aXJlKCcuL2FzeW5jJyk7XG5cbmNsYXNzIGhlbHBlcnMge1xuICBzdGF0aWMgbW92ZUVudHJpZXMocGF0aE1hcHMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBtb3ZlZFBhdGhzID0gW107XG5cbiAgICBhc3luYy5mb3JFYWNoKFxuICAgICAgcGF0aE1hcHMsIFxuICAgICAgZnVuY3Rpb24ocGF0aE1hcCwgbmV4dCkge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGF0aE1hcCksXG4gICAgICAgICAgICAgIGZpcnN0S2V5ID0gZmlyc3Qoa2V5cyksXG4gICAgICAgICAgICAgIHNvdXJjZVBhdGggPSBmaXJzdEtleSwgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFBhdGggPSBwYXRoTWFwW3NvdXJjZVBhdGhdO1xuICAgICAgICBcbiAgICAgICAgbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24obW92ZWRQYXRoKSB7XG4gICAgICAgICAgbW92ZWRQYXRocy5wdXNoKG1vdmVkUGF0aCk7XG4gICAgICAgICAgXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2sobW92ZWRQYXRocyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVFbnRyaWVzKHBhdGhNYXBzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVtb3ZlZFBhdGhzID0gW107XG5cbiAgICBhc3luYy5mb3JFYWNoKFxuICAgICAgcGF0aE1hcHMsXG4gICAgICBmdW5jdGlvbihwYXRoTWFwLCBuZXh0KSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXRoTWFwKSxcbiAgICAgICAgICAgICAgZmlyc3RLZXkgPSBmaXJzdChrZXlzKSxcbiAgICAgICAgICAgICAgc291cmNlUGF0aCA9IGZpcnN0S2V5LCAvLy9cbiAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IHBhdGhNYXBbc291cmNlUGF0aF07XG5cbiAgICAgICAgcmVtb3ZlRW50cnkoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmdW5jdGlvbihyZW1vdmVkUGF0aCkge1xuICAgICAgICAgIHJlbW92ZWRQYXRocy5wdXNoKHJlbW92ZWRQYXRoKTtcblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlbW92ZWRQYXRocyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cbmZ1bmN0aW9uIG1vdmVFbnRyeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGlmIChzb3VyY2VQYXRoID09PSB0YXJnZXRQYXRoKSB7XG4gICAgY29uc3QgbW92ZWRQYXRoID0gc291cmNlUGF0aDtcblxuICAgIGNhbGxiYWNrKG1vdmVkUGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG1vdmVkUGF0aDtcbiAgICBcbiAgICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSB1dGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHNvdXJjZVBhdGgpLFxuICAgICAgICAgIGV4aXN0cyA9IGZzRXh0cmEuZXhpc3RzU3luYyhhYnNvbHV0ZVNvdXJjZVBhdGgpO1xuXG4gICAgaWYgKCFleGlzdHMpIHtcbiAgICAgIG1vdmVkUGF0aCA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKG1vdmVkUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFic29sdXRlVGFyZ2V0UGF0aCA9IHV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGFyZ2V0UGF0aCk7XG5cbiAgICAgIGZzRXh0cmEubW92ZShhYnNvbHV0ZVNvdXJjZVBhdGgsIGFic29sdXRlVGFyZ2V0UGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGxldCBtb3ZlZFBhdGg7XG5cbiAgICAgICAgaWYgKGVyciAmJiAoZXJyLmNvZGUgPT09ICdFRVhJU1QnKSkgeyAvLy9cbiAgICAgICAgICBtb3ZlZFBhdGggPSB0YXJnZXRQYXRoO1xuXG4gICAgICAgICAgdGFyZ2V0UGF0aCA9IG51bGw7ICAvLy9cblxuICAgICAgICAgIHJlbW92ZShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobW92ZWRQYXRoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzID0gKGVyciA9PT0gbnVsbCk7XG5cbiAgICAgICAgICBtb3ZlZFBhdGggPSBzdWNjZXNzID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFBhdGggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VQYXRoO1xuXG4gICAgICAgICAgY2FsbGJhY2sobW92ZWRQYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgaWYgKHRhcmdldFBhdGggIT09IG51bGwpIHtcbiAgICBjb25zdCByZW1vdmVkUGF0aCA9IHNvdXJjZVBhdGg7XG5cbiAgICBjYWxsYmFjayhyZW1vdmVkUGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYWJzb2x1dGVTb3VyY2VQYXRoID0gdXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKSxcbiAgICAgICAgICBleGlzdHMgPSBmc0V4dHJhLmV4aXN0c1N5bmMoYWJzb2x1dGVTb3VyY2VQYXRoKTtcblxuICAgIGlmICghZXhpc3RzKSB7XG4gICAgICBjb25zdCByZW1vdmVkUGF0aCA9IHNvdXJjZVBhdGg7XG5cbiAgICAgIGNhbGxiYWNrKHJlbW92ZWRQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnNFeHRyYS5yZW1vdmUoYWJzb2x1dGVTb3VyY2VQYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IChlcnIgPT09IG51bGwpLFxuICAgICAgICAgICAgICByZW1vdmVkUGF0aCA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVBhdGg7XG5cbiAgICAgICAgY2FsbGJhY2socmVtb3ZlZFBhdGgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19