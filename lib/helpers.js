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
    var _movedPath = void 0;

    var absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
        exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      _movedPath = null;

      callback(_movedPath);
    } else {
      var absoluteTargetPath = pathUtil.combinePaths(projectsDirectoryPath, targetPath);

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

function removeEntry(sourcePath, projectsDirectoryPath, callback) {
  var absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
      exists = fsExtra.existsSync(absoluteSourcePath);

  if (!exists) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImZzRXh0cmEiLCJyZXF1aXJlIiwiYXN5bmMiLCJwYXRoVXRpbCIsInBhdGhNYXBzVXRpbCIsImhlbHBlcnMiLCJwYXRoTWFwcyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwibW92ZWRQYXRocyIsImFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aCIsInNvdXJjZVBhdGgiLCJ0YXJnZXRQYXRoIiwibmV4dCIsIm1vdmVFbnRyeSIsIm1vdmVkUGF0aCIsInB1c2giLCJyZW1vdmVkUGF0aHMiLCJhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aCIsInJlbW92ZUVudHJ5IiwicmVtb3ZlZFBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVTb3VyY2VQYXRoIiwiY29tYmluZVBhdGhzIiwiZXhpc3RzIiwiZXhpc3RzU3luYyIsImFic29sdXRlVGFyZ2V0UGF0aCIsIm1vdmUiLCJlcnIiLCJjb2RlIiwicmVtb3ZlIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsVUFBUixDQUFoQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01FLFdBQVdGLFFBQVEsYUFBUixDQURqQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsaUJBQVIsQ0FGckI7O0lBSU1JLE87Ozs7Ozs7Z0NBQ2VDLFEsRUFBVUMscUIsRUFBdUJDLFEsRUFBVTtBQUM1RCxVQUFNQyxhQUFhLEVBQW5COztBQUVBTCxtQkFBYU0sdUNBQWIsQ0FDRUosUUFERixFQUVFLFVBQVNLLFVBQVQsRUFBcUJDLFVBQXJCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUNyQ0Msa0JBQVVILFVBQVYsRUFBc0JDLFVBQXRCLEVBQWtDTCxxQkFBbEMsRUFBeUQsVUFBU1EsU0FBVCxFQUFvQjtBQUMzRU4scUJBQVdPLElBQVgsQ0FBZ0JELFNBQWhCOztBQUVBRjtBQUNELFNBSkQ7QUFLRCxPQVJILEVBU0UsWUFBVztBQUNUTCxpQkFBU0MsVUFBVDtBQUNELE9BWEg7QUFhRDs7O2tDQUVvQkgsUSxFQUFVQyxxQixFQUF1QkMsUSxFQUFVO0FBQzlELFVBQU1TLGVBQWUsRUFBckI7O0FBRUFiLG1CQUFhYywwQkFBYixDQUNFWixRQURGLEVBRUUsVUFBU0ssVUFBVCxFQUFxQkUsSUFBckIsRUFBMkI7QUFDekJNLG9CQUFZUixVQUFaLEVBQXdCSixxQkFBeEIsRUFBK0MsVUFBU2EsV0FBVCxFQUFzQjtBQUNuRUgsdUJBQWFELElBQWIsQ0FBa0JJLFdBQWxCOztBQUVBUDtBQUNELFNBSkQ7QUFLRCxPQVJILEVBU0UsWUFBVztBQUNUTCxpQkFBU1MsWUFBVDtBQUNELE9BWEg7QUFhRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJqQixPQUFqQjs7QUFFQSxTQUFTUyxTQUFULENBQW1CSCxVQUFuQixFQUErQkMsVUFBL0IsRUFBMkNMLHFCQUEzQyxFQUFrRUMsUUFBbEUsRUFBNEU7QUFDMUUsTUFBSUcsZUFBZUMsVUFBbkIsRUFBK0I7QUFDN0IsUUFBTUcsWUFBWUosVUFBbEI7O0FBRUFILGFBQVNPLFNBQVQ7QUFDRCxHQUpELE1BSU87QUFDTCxRQUFJQSxtQkFBSjs7QUFFQSxRQUFNUSxxQkFBcUJwQixTQUFTcUIsWUFBVCxDQUFzQmpCLHFCQUF0QixFQUE2Q0ksVUFBN0MsQ0FBM0I7QUFBQSxRQUNNYyxTQUFTekIsUUFBUTBCLFVBQVIsQ0FBbUJILGtCQUFuQixDQURmOztBQUdBLFFBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hWLG1CQUFZLElBQVo7O0FBRUFQLGVBQVNPLFVBQVQ7QUFDRCxLQUpELE1BSU87QUFDTCxVQUFNWSxxQkFBcUJ4QixTQUFTcUIsWUFBVCxDQUFzQmpCLHFCQUF0QixFQUE2Q0ssVUFBN0MsQ0FBM0I7O0FBRUFaLGNBQVE0QixJQUFSLENBQWFMLGtCQUFiLEVBQWlDSSxrQkFBakMsRUFBcUQsVUFBU0UsR0FBVCxFQUFjO0FBQ2pFLFlBQUlkLGtCQUFKOztBQUVBLFlBQUljLE9BQVFBLElBQUlDLElBQUosS0FBYSxRQUF6QixFQUFvQztBQUFFO0FBQ3BDZixzQkFBWUgsVUFBWjs7QUFFQUEsdUJBQWEsSUFBYixDQUhrQyxDQUdkOztBQUVwQm1CLGlCQUFPcEIsVUFBUCxFQUFtQkMsVUFBbkIsRUFBK0JMLHFCQUEvQixFQUFzRCxZQUFXO0FBQy9EQyxxQkFBU08sU0FBVDtBQUNELFdBRkQ7QUFHRCxTQVJELE1BUU87QUFDTCxjQUFNaUIsVUFBV0gsUUFBUSxJQUF6Qjs7QUFFQWQsc0JBQVlpQixVQUNFcEIsVUFERixHQUVJRCxVQUZoQjs7QUFJQUgsbUJBQVNPLFNBQVQ7QUFDRDtBQUNGLE9BcEJEO0FBcUJEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTSSxXQUFULENBQXFCUixVQUFyQixFQUFpQ0oscUJBQWpDLEVBQXdEQyxRQUF4RCxFQUFrRTtBQUNoRSxNQUFNZSxxQkFBcUJwQixTQUFTcUIsWUFBVCxDQUFzQmpCLHFCQUF0QixFQUE2Q0ksVUFBN0MsQ0FBM0I7QUFBQSxNQUNNYyxTQUFTekIsUUFBUTBCLFVBQVIsQ0FBbUJILGtCQUFuQixDQURmOztBQUdBLE1BQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1gsUUFBTUwsY0FBY1QsVUFBcEI7O0FBRUFILGFBQVNZLFdBQVQ7QUFDRCxHQUpELE1BSU87QUFDTHBCLFlBQVErQixNQUFSLENBQWVSLGtCQUFmLEVBQW1DLFVBQVNNLEdBQVQsRUFBYztBQUMvQyxVQUFNRyxVQUFXSCxRQUFRLElBQXpCO0FBQUEsVUFDTVQsY0FBY1ksVUFDRSxJQURGLEdBRUlyQixVQUh4Qjs7QUFLQUgsZUFBU1ksV0FBVDtBQUNELEtBUEQ7QUFRRDtBQUNGIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzRXh0cmEgPSByZXF1aXJlKCdmcy1leHRyYScpO1xuXG5jb25zdCBhc3luYyA9IHJlcXVpcmUoJy4vYXN5bmMnKSxcbiAgICAgIHBhdGhVdGlsID0gcmVxdWlyZSgnLi91dGlsL3BhdGgnKSxcbiAgICAgIHBhdGhNYXBzVXRpbCA9IHJlcXVpcmUoJy4vdXRpbC9wYXRoTWFwcycpO1xuXG5jbGFzcyBoZWxwZXJzIHtcbiAgc3RhdGljIG1vdmVFbnRyaWVzKHBhdGhNYXBzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbW92ZWRQYXRocyA9IFtdO1xuXG4gICAgcGF0aE1hcHNVdGlsLmFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aChcbiAgICAgIHBhdGhNYXBzLCBcbiAgICAgIGZ1bmN0aW9uKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIG5leHQpIHtcbiAgICAgICAgbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24obW92ZWRQYXRoKSB7XG4gICAgICAgICAgbW92ZWRQYXRocy5wdXNoKG1vdmVkUGF0aCk7XG4gICAgICAgICAgXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2sobW92ZWRQYXRocyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVFbnRyaWVzKHBhdGhNYXBzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVtb3ZlZFBhdGhzID0gW107XG5cbiAgICBwYXRoTWFwc1V0aWwuYXN5bmNGb3JFYWNoV2l0aFNvdXJjZVBhdGgoXG4gICAgICBwYXRoTWFwcyxcbiAgICAgIGZ1bmN0aW9uKHNvdXJjZVBhdGgsIG5leHQpIHtcbiAgICAgICAgcmVtb3ZlRW50cnkoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmdW5jdGlvbihyZW1vdmVkUGF0aCkge1xuICAgICAgICAgIHJlbW92ZWRQYXRocy5wdXNoKHJlbW92ZWRQYXRoKTtcblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlbW92ZWRQYXRocyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cbmZ1bmN0aW9uIG1vdmVFbnRyeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGlmIChzb3VyY2VQYXRoID09PSB0YXJnZXRQYXRoKSB7XG4gICAgY29uc3QgbW92ZWRQYXRoID0gc291cmNlUGF0aDtcblxuICAgIGNhbGxiYWNrKG1vdmVkUGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG1vdmVkUGF0aDtcbiAgICBcbiAgICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKSxcbiAgICAgICAgICBleGlzdHMgPSBmc0V4dHJhLmV4aXN0c1N5bmMoYWJzb2x1dGVTb3VyY2VQYXRoKTtcblxuICAgIGlmICghZXhpc3RzKSB7XG4gICAgICBtb3ZlZFBhdGggPSBudWxsO1xuXG4gICAgICBjYWxsYmFjayhtb3ZlZFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVRhcmdldFBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0YXJnZXRQYXRoKTtcblxuICAgICAgZnNFeHRyYS5tb3ZlKGFic29sdXRlU291cmNlUGF0aCwgYWJzb2x1dGVUYXJnZXRQYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgbGV0IG1vdmVkUGF0aDtcblxuICAgICAgICBpZiAoZXJyICYmIChlcnIuY29kZSA9PT0gJ0VFWElTVCcpKSB7IC8vL1xuICAgICAgICAgIG1vdmVkUGF0aCA9IHRhcmdldFBhdGg7XG5cbiAgICAgICAgICB0YXJnZXRQYXRoID0gbnVsbDsgIC8vL1xuXG4gICAgICAgICAgcmVtb3ZlKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhtb3ZlZFBhdGgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoZXJyID09PSBudWxsKTtcblxuICAgICAgICAgIG1vdmVkUGF0aCA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVBhdGg7XG5cbiAgICAgICAgICBjYWxsYmFjayhtb3ZlZFBhdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRW50cnkoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKSxcbiAgICAgICAgZXhpc3RzID0gZnNFeHRyYS5leGlzdHNTeW5jKGFic29sdXRlU291cmNlUGF0aCk7XG5cbiAgaWYgKCFleGlzdHMpIHtcbiAgICBjb25zdCByZW1vdmVkUGF0aCA9IHNvdXJjZVBhdGg7XG5cbiAgICBjYWxsYmFjayhyZW1vdmVkUGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgZnNFeHRyYS5yZW1vdmUoYWJzb2x1dGVTb3VyY2VQYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoZXJyID09PSBudWxsKSxcbiAgICAgICAgICAgIHJlbW92ZWRQYXRoID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VQYXRoO1xuXG4gICAgICBjYWxsYmFjayhyZW1vdmVkUGF0aCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==