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
      var absoluteTargetPath = pathUtil.combinePaths(projectsDirectoryPath, targetPath),
          overwrite = true,
          options = {
        overwrite: overwrite
      };

      fsExtra.move(absoluteSourcePath, absoluteTargetPath, options, function (err) {
        var success = err === null,
            movedPath = success ? targetPath : sourcePath;

        callback(movedPath);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImZzRXh0cmEiLCJyZXF1aXJlIiwiYXN5bmMiLCJwYXRoVXRpbCIsInBhdGhNYXBzVXRpbCIsImhlbHBlcnMiLCJwYXRoTWFwcyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwibW92ZWRQYXRocyIsImFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aCIsInNvdXJjZVBhdGgiLCJ0YXJnZXRQYXRoIiwibmV4dCIsIm1vdmVFbnRyeSIsIm1vdmVkUGF0aCIsInB1c2giLCJyZW1vdmVkUGF0aHMiLCJhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aCIsInJlbW92ZUVudHJ5IiwicmVtb3ZlZFBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVTb3VyY2VQYXRoIiwiY29tYmluZVBhdGhzIiwiZXhpc3RzIiwiZXhpc3RzU3luYyIsImFic29sdXRlVGFyZ2V0UGF0aCIsIm92ZXJ3cml0ZSIsIm9wdGlvbnMiLCJtb3ZlIiwiZXJyIiwic3VjY2VzcyIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsVUFBUixDQUFoQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01FLFdBQVdGLFFBQVEsYUFBUixDQURqQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsaUJBQVIsQ0FGckI7O0lBSU1JLE87Ozs7Ozs7Z0NBQ2VDLFEsRUFBVUMscUIsRUFBdUJDLFEsRUFBVTtBQUM1RCxVQUFNQyxhQUFhLEVBQW5COztBQUVBTCxtQkFBYU0sdUNBQWIsQ0FDRUosUUFERixFQUVFLFVBQVNLLFVBQVQsRUFBcUJDLFVBQXJCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUNyQ0Msa0JBQVVILFVBQVYsRUFBc0JDLFVBQXRCLEVBQWtDTCxxQkFBbEMsRUFBeUQsVUFBU1EsU0FBVCxFQUFvQjtBQUMzRU4scUJBQVdPLElBQVgsQ0FBZ0JELFNBQWhCOztBQUVBRjtBQUNELFNBSkQ7QUFLRCxPQVJILEVBU0UsWUFBVztBQUNUTCxpQkFBU0MsVUFBVDtBQUNELE9BWEg7QUFhRDs7O2tDQUVvQkgsUSxFQUFVQyxxQixFQUF1QkMsUSxFQUFVO0FBQzlELFVBQU1TLGVBQWUsRUFBckI7O0FBRUFiLG1CQUFhYywwQkFBYixDQUNFWixRQURGLEVBRUUsVUFBU0ssVUFBVCxFQUFxQkUsSUFBckIsRUFBMkI7QUFDekJNLG9CQUFZUixVQUFaLEVBQXdCSixxQkFBeEIsRUFBK0MsVUFBU2EsV0FBVCxFQUFzQjtBQUNuRUgsdUJBQWFELElBQWIsQ0FBa0JJLFdBQWxCOztBQUVBUDtBQUNELFNBSkQ7QUFLRCxPQVJILEVBU0UsWUFBVztBQUNUTCxpQkFBU1MsWUFBVDtBQUNELE9BWEg7QUFhRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJqQixPQUFqQjs7QUFFQSxTQUFTUyxTQUFULENBQW1CSCxVQUFuQixFQUErQkMsVUFBL0IsRUFBMkNMLHFCQUEzQyxFQUFrRUMsUUFBbEUsRUFBNEU7QUFDMUUsTUFBSUcsZUFBZUMsVUFBbkIsRUFBK0I7QUFDN0IsUUFBTUcsWUFBWUosVUFBbEI7O0FBRUFILGFBQVNPLFNBQVQ7QUFDRCxHQUpELE1BSU87QUFDTCxRQUFNUSxxQkFBcUJwQixTQUFTcUIsWUFBVCxDQUFzQmpCLHFCQUF0QixFQUE2Q0ksVUFBN0MsQ0FBM0I7QUFBQSxRQUNNYyxTQUFTekIsUUFBUTBCLFVBQVIsQ0FBbUJILGtCQUFuQixDQURmOztBQUdBLFFBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1gsVUFBTVYsYUFBWSxJQUFsQjs7QUFFQVAsZUFBU08sVUFBVDtBQUNELEtBSkQsTUFJTztBQUNMLFVBQU1ZLHFCQUFxQnhCLFNBQVNxQixZQUFULENBQXNCakIscUJBQXRCLEVBQTZDSyxVQUE3QyxDQUEzQjtBQUFBLFVBQ01nQixZQUFZLElBRGxCO0FBQUEsVUFFTUMsVUFBVTtBQUNSRCxtQkFBV0E7QUFESCxPQUZoQjs7QUFNQTVCLGNBQVE4QixJQUFSLENBQWFQLGtCQUFiLEVBQWlDSSxrQkFBakMsRUFBcURFLE9BQXJELEVBQThELFVBQVNFLEdBQVQsRUFBYztBQUMxRSxZQUFNQyxVQUFXRCxRQUFRLElBQXpCO0FBQUEsWUFDTWhCLFlBQVlpQixVQUNFcEIsVUFERixHQUVJRCxVQUh0Qjs7QUFLQUgsaUJBQVNPLFNBQVQ7QUFDRCxPQVBEO0FBUUQ7QUFDRjtBQUNGOztBQUVELFNBQVNJLFdBQVQsQ0FBcUJSLFVBQXJCLEVBQWlDSixxQkFBakMsRUFBd0RDLFFBQXhELEVBQWtFO0FBQ2hFLE1BQU1lLHFCQUFxQnBCLFNBQVNxQixZQUFULENBQXNCakIscUJBQXRCLEVBQTZDSSxVQUE3QyxDQUEzQjtBQUFBLE1BQ01jLFNBQVN6QixRQUFRMEIsVUFBUixDQUFtQkgsa0JBQW5CLENBRGY7O0FBR0EsTUFBSSxDQUFDRSxNQUFMLEVBQWE7QUFDWCxRQUFNTCxjQUFjLElBQXBCOztBQUVBWixhQUFTWSxXQUFUO0FBQ0QsR0FKRCxNQUlPO0FBQ0xwQixZQUFRaUMsTUFBUixDQUFlVixrQkFBZixFQUFtQyxVQUFTUSxHQUFULEVBQWM7QUFDL0MsVUFBTUMsVUFBV0QsUUFBUSxJQUF6QjtBQUFBLFVBQ01YLGNBQWNZLFVBQ0UsSUFERixHQUVJckIsVUFIeEI7O0FBS0FILGVBQVNZLFdBQVQ7QUFDRCxLQVBEO0FBUUQ7QUFDRiIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmc0V4dHJhID0gcmVxdWlyZSgnZnMtZXh0cmEnKTtcblxuY29uc3QgYXN5bmMgPSByZXF1aXJlKCcuL2FzeW5jJyksXG4gICAgICBwYXRoVXRpbCA9IHJlcXVpcmUoJy4vdXRpbC9wYXRoJyksXG4gICAgICBwYXRoTWFwc1V0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aE1hcHMnKTtcblxuY2xhc3MgaGVscGVycyB7XG4gIHN0YXRpYyBtb3ZlRW50cmllcyhwYXRoTWFwcywgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IG1vdmVkUGF0aHMgPSBbXTtcblxuICAgIHBhdGhNYXBzVXRpbC5hc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aEFuZFRhcmdldFBhdGgoXG4gICAgICBwYXRoTWFwcywgXG4gICAgICBmdW5jdGlvbihzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBuZXh0KSB7XG4gICAgICAgIG1vdmVFbnRyeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGZ1bmN0aW9uKG1vdmVkUGF0aCkge1xuICAgICAgICAgIG1vdmVkUGF0aHMucHVzaChtb3ZlZFBhdGgpO1xuICAgICAgICAgIFxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKG1vdmVkUGF0aHMpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRW50cmllcyhwYXRoTWFwcywgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHJlbW92ZWRQYXRocyA9IFtdO1xuXG4gICAgcGF0aE1hcHNVdGlsLmFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoKFxuICAgICAgcGF0aE1hcHMsXG4gICAgICBmdW5jdGlvbihzb3VyY2VQYXRoLCBuZXh0KSB7XG4gICAgICAgIHJlbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24ocmVtb3ZlZFBhdGgpIHtcbiAgICAgICAgICByZW1vdmVkUGF0aHMucHVzaChyZW1vdmVkUGF0aCk7XG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsYmFjayhyZW1vdmVkUGF0aHMpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5mdW5jdGlvbiBtb3ZlRW50cnkoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICBpZiAoc291cmNlUGF0aCA9PT0gdGFyZ2V0UGF0aCkge1xuICAgIGNvbnN0IG1vdmVkUGF0aCA9IHNvdXJjZVBhdGg7XG5cbiAgICBjYWxsYmFjayhtb3ZlZFBhdGgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGFic29sdXRlU291cmNlUGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHNvdXJjZVBhdGgpLFxuICAgICAgICAgIGV4aXN0cyA9IGZzRXh0cmEuZXhpc3RzU3luYyhhYnNvbHV0ZVNvdXJjZVBhdGgpO1xuXG4gICAgaWYgKCFleGlzdHMpIHtcbiAgICAgIGNvbnN0IG1vdmVkUGF0aCA9IG51bGw7XG5cbiAgICAgIGNhbGxiYWNrKG1vdmVkUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFic29sdXRlVGFyZ2V0UGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHRhcmdldFBhdGgpLFxuICAgICAgICAgICAgb3ZlcndyaXRlID0gdHJ1ZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIG92ZXJ3cml0ZTogb3ZlcndyaXRlXG4gICAgICAgICAgICB9O1xuXG4gICAgICBmc0V4dHJhLm1vdmUoYWJzb2x1dGVTb3VyY2VQYXRoLCBhYnNvbHV0ZVRhcmdldFBhdGgsIG9wdGlvbnMsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gKGVyciA9PT0gbnVsbCksXG4gICAgICAgICAgICAgIG1vdmVkUGF0aCA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFBhdGggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUGF0aDtcblxuICAgICAgICBjYWxsYmFjayhtb3ZlZFBhdGgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgY29uc3QgYWJzb2x1dGVTb3VyY2VQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlUGF0aCksXG4gICAgICAgIGV4aXN0cyA9IGZzRXh0cmEuZXhpc3RzU3luYyhhYnNvbHV0ZVNvdXJjZVBhdGgpO1xuXG4gIGlmICghZXhpc3RzKSB7XG4gICAgY29uc3QgcmVtb3ZlZFBhdGggPSBudWxsO1xuXG4gICAgY2FsbGJhY2socmVtb3ZlZFBhdGgpO1xuICB9IGVsc2Uge1xuICAgIGZzRXh0cmEucmVtb3ZlKGFic29sdXRlU291cmNlUGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zdCBzdWNjZXNzID0gKGVyciA9PT0gbnVsbCksXG4gICAgICAgICAgICByZW1vdmVkUGF0aCA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUGF0aDtcblxuICAgICAgY2FsbGJhY2socmVtb3ZlZFBhdGgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=