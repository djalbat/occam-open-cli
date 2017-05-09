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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImZzRXh0cmEiLCJyZXF1aXJlIiwiYXN5bmMiLCJwYXRoVXRpbCIsInBhdGhNYXBzVXRpbCIsImhlbHBlcnMiLCJwYXRoTWFwcyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwibW92ZWRQYXRocyIsImFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aCIsInNvdXJjZVBhdGgiLCJ0YXJnZXRQYXRoIiwibmV4dCIsIm1vdmVFbnRyeSIsIm1vdmVkUGF0aCIsInB1c2giLCJyZW1vdmVkUGF0aHMiLCJhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aCIsInJlbW92ZUVudHJ5IiwicmVtb3ZlZFBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVTb3VyY2VQYXRoIiwiY29tYmluZVBhdGhzIiwiZXhpc3RzIiwiZXhpc3RzU3luYyIsImFic29sdXRlVGFyZ2V0UGF0aCIsIm1vdmUiLCJlcnIiLCJzdWNjZXNzIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxVQUFSLENBQWhCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxpQkFBUixDQUZyQjs7SUFJTUksTzs7Ozs7OztnQ0FDZUMsUSxFQUFVQyxxQixFQUF1QkMsUSxFQUFVO0FBQzVELFVBQU1DLGFBQWEsRUFBbkI7O0FBRUFMLG1CQUFhTSx1Q0FBYixDQUNFSixRQURGLEVBRUUsVUFBU0ssVUFBVCxFQUFxQkMsVUFBckIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQ3JDQyxrQkFBVUgsVUFBVixFQUFzQkMsVUFBdEIsRUFBa0NMLHFCQUFsQyxFQUF5RCxVQUFTUSxTQUFULEVBQW9CO0FBQzNFTixxQkFBV08sSUFBWCxDQUFnQkQsU0FBaEI7O0FBRUFGO0FBQ0QsU0FKRDtBQUtELE9BUkgsRUFTRSxZQUFXO0FBQ1RMLGlCQUFTQyxVQUFUO0FBQ0QsT0FYSDtBQWFEOzs7a0NBRW9CSCxRLEVBQVVDLHFCLEVBQXVCQyxRLEVBQVU7QUFDOUQsVUFBTVMsZUFBZSxFQUFyQjs7QUFFQWIsbUJBQWFjLDBCQUFiLENBQ0VaLFFBREYsRUFFRSxVQUFTSyxVQUFULEVBQXFCRSxJQUFyQixFQUEyQjtBQUN6Qk0sb0JBQVlSLFVBQVosRUFBd0JKLHFCQUF4QixFQUErQyxVQUFTYSxXQUFULEVBQXNCO0FBQ25FSCx1QkFBYUQsSUFBYixDQUFrQkksV0FBbEI7O0FBRUFQO0FBQ0QsU0FKRDtBQUtELE9BUkgsRUFTRSxZQUFXO0FBQ1RMLGlCQUFTUyxZQUFUO0FBQ0QsT0FYSDtBQWFEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQmpCLE9BQWpCOztBQUVBLFNBQVNTLFNBQVQsQ0FBbUJILFVBQW5CLEVBQStCQyxVQUEvQixFQUEyQ0wscUJBQTNDLEVBQWtFQyxRQUFsRSxFQUE0RTtBQUMxRSxNQUFJRyxlQUFlQyxVQUFuQixFQUErQjtBQUM3QixRQUFNRyxZQUFZSixVQUFsQjs7QUFFQUgsYUFBU08sU0FBVDtBQUNELEdBSkQsTUFJTztBQUNMLFFBQU1RLHFCQUFxQnBCLFNBQVNxQixZQUFULENBQXNCakIscUJBQXRCLEVBQTZDSSxVQUE3QyxDQUEzQjtBQUFBLFFBQ01jLFNBQVN6QixRQUFRMEIsVUFBUixDQUFtQkgsa0JBQW5CLENBRGY7O0FBR0EsUUFBSSxDQUFDRSxNQUFMLEVBQWE7QUFDWCxVQUFNVixhQUFZLElBQWxCOztBQUVBUCxlQUFTTyxVQUFUO0FBQ0QsS0FKRCxNQUlPO0FBQ0wsVUFBTVkscUJBQXFCeEIsU0FBU3FCLFlBQVQsQ0FBc0JqQixxQkFBdEIsRUFBNkNLLFVBQTdDLENBQTNCOztBQUVBWixjQUFRNEIsSUFBUixDQUFhTCxrQkFBYixFQUFpQ0ksa0JBQWpDLEVBQXFELFVBQVNFLEdBQVQsRUFBYztBQUNqRSxZQUFNQyxVQUFXRCxRQUFRLElBQXpCO0FBQUEsWUFDTWQsWUFBWWUsVUFDRWxCLFVBREYsR0FFSUQsVUFIdEI7O0FBS0FILGlCQUFTTyxTQUFUO0FBQ0QsT0FQRDtBQVFEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTSSxXQUFULENBQXFCUixVQUFyQixFQUFpQ0oscUJBQWpDLEVBQXdEQyxRQUF4RCxFQUFrRTtBQUNoRSxNQUFNZSxxQkFBcUJwQixTQUFTcUIsWUFBVCxDQUFzQmpCLHFCQUF0QixFQUE2Q0ksVUFBN0MsQ0FBM0I7QUFBQSxNQUNNYyxTQUFTekIsUUFBUTBCLFVBQVIsQ0FBbUJILGtCQUFuQixDQURmOztBQUdBLE1BQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1gsUUFBTUwsY0FBY1QsVUFBcEI7O0FBRUFILGFBQVNZLFdBQVQ7QUFDRCxHQUpELE1BSU87QUFDTHBCLFlBQVErQixNQUFSLENBQWVSLGtCQUFmLEVBQW1DLFVBQVNNLEdBQVQsRUFBYztBQUMvQyxVQUFNQyxVQUFXRCxRQUFRLElBQXpCO0FBQUEsVUFDTVQsY0FBY1UsVUFDRSxJQURGLEdBRUluQixVQUh4Qjs7QUFLQUgsZUFBU1ksV0FBVDtBQUNELEtBUEQ7QUFRRDtBQUNGIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzRXh0cmEgPSByZXF1aXJlKCdmcy1leHRyYScpO1xuXG5jb25zdCBhc3luYyA9IHJlcXVpcmUoJy4vYXN5bmMnKSxcbiAgICAgIHBhdGhVdGlsID0gcmVxdWlyZSgnLi91dGlsL3BhdGgnKSxcbiAgICAgIHBhdGhNYXBzVXRpbCA9IHJlcXVpcmUoJy4vdXRpbC9wYXRoTWFwcycpO1xuXG5jbGFzcyBoZWxwZXJzIHtcbiAgc3RhdGljIG1vdmVFbnRyaWVzKHBhdGhNYXBzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbW92ZWRQYXRocyA9IFtdO1xuXG4gICAgcGF0aE1hcHNVdGlsLmFzeW5jRm9yRWFjaFdpdGhTb3VyY2VQYXRoQW5kVGFyZ2V0UGF0aChcbiAgICAgIHBhdGhNYXBzLCBcbiAgICAgIGZ1bmN0aW9uKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIG5leHQpIHtcbiAgICAgICAgbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24obW92ZWRQYXRoKSB7XG4gICAgICAgICAgbW92ZWRQYXRocy5wdXNoKG1vdmVkUGF0aCk7XG4gICAgICAgICAgXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2sobW92ZWRQYXRocyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVFbnRyaWVzKHBhdGhNYXBzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVtb3ZlZFBhdGhzID0gW107XG5cbiAgICBwYXRoTWFwc1V0aWwuYXN5bmNGb3JFYWNoV2l0aFNvdXJjZVBhdGgoXG4gICAgICBwYXRoTWFwcyxcbiAgICAgIGZ1bmN0aW9uKHNvdXJjZVBhdGgsIG5leHQpIHtcbiAgICAgICAgcmVtb3ZlRW50cnkoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmdW5jdGlvbihyZW1vdmVkUGF0aCkge1xuICAgICAgICAgIHJlbW92ZWRQYXRocy5wdXNoKHJlbW92ZWRQYXRoKTtcblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlbW92ZWRQYXRocyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cbmZ1bmN0aW9uIG1vdmVFbnRyeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGlmIChzb3VyY2VQYXRoID09PSB0YXJnZXRQYXRoKSB7XG4gICAgY29uc3QgbW92ZWRQYXRoID0gc291cmNlUGF0aDtcblxuICAgIGNhbGxiYWNrKG1vdmVkUGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYWJzb2x1dGVTb3VyY2VQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlUGF0aCksXG4gICAgICAgICAgZXhpc3RzID0gZnNFeHRyYS5leGlzdHNTeW5jKGFic29sdXRlU291cmNlUGF0aCk7XG5cbiAgICBpZiAoIWV4aXN0cykge1xuICAgICAgY29uc3QgbW92ZWRQYXRoID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2sobW92ZWRQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWJzb2x1dGVUYXJnZXRQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGFyZ2V0UGF0aCk7XG5cbiAgICAgIGZzRXh0cmEubW92ZShhYnNvbHV0ZVNvdXJjZVBhdGgsIGFic29sdXRlVGFyZ2V0UGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoZXJyID09PSBudWxsKSxcbiAgICAgICAgICAgICAgbW92ZWRQYXRoID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VQYXRoO1xuXG4gICAgICAgIGNhbGxiYWNrKG1vdmVkUGF0aCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRW50cnkoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKSxcbiAgICAgICAgZXhpc3RzID0gZnNFeHRyYS5leGlzdHNTeW5jKGFic29sdXRlU291cmNlUGF0aCk7XG5cbiAgaWYgKCFleGlzdHMpIHtcbiAgICBjb25zdCByZW1vdmVkUGF0aCA9IHNvdXJjZVBhdGg7XG5cbiAgICBjYWxsYmFjayhyZW1vdmVkUGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgZnNFeHRyYS5yZW1vdmUoYWJzb2x1dGVTb3VyY2VQYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoZXJyID09PSBudWxsKSxcbiAgICAgICAgICAgIHJlbW92ZWRQYXRoID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VQYXRoO1xuXG4gICAgICBjYWxsYmFjayhyZW1vdmVkUGF0aCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==