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
            removeEntry(sourcePath, projectsDirectoryPath, function (targetPath) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImZzRXh0cmEiLCJyZXF1aXJlIiwiYXN5bmMiLCJwYXRoVXRpbCIsInBhdGhNYXBzVXRpbCIsImhlbHBlcnMiLCJwYXRoTWFwcyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwidGFyZ2V0UGF0aHMiLCJhc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aEFuZFRhcmdldFBhdGgiLCJzb3VyY2VQYXRoIiwidGFyZ2V0UGF0aCIsIm5leHQiLCJtb3ZlRW50cnkiLCJwdXNoIiwicmVtb3ZlRW50cnkiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWJzb2x1dGVTb3VyY2VQYXRoIiwiY29tYmluZVBhdGhzIiwiZXhpc3RzIiwiZXhpc3RzU3luYyIsImFic29sdXRlVGFyZ2V0UGF0aCIsIm1vdmUiLCJlcnIiLCJzdWNjZXNzIiwiZXJyQ29kZSIsImNvZGUiLCJhYnNvbHV0ZVNvdXJjZVBhdGhEaXJlY3RvcnlQYXRoIiwiaXNEaXJlY3RvcnlQYXRoIiwiZW50cnlEaXJlY3RvcnkiLCJyZW1vdmVEaXJlY3RvcnkiLCJyZW1vdmVGaWxlIiwiZW1wdHkiLCJpc0RpcmVjdG9yeUVtcHR5IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxVQUFSLENBQWhCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxpQkFBUixDQUZyQjs7SUFJTUksTzs7Ozs7OztnQ0FDZUMsUSxFQUFVQyxxQixFQUF1QkMsUSxFQUFVO0FBQzVELFVBQU1DLGNBQWMsRUFBcEI7O0FBRUFMLG1CQUFhTSx1Q0FBYixDQUNFSixRQURGLEVBRUUsVUFBU0ssVUFBVCxFQUFxQkMsVUFBckIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQ3JDQyxrQkFBVUgsVUFBVixFQUFzQkMsVUFBdEIsRUFB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LEdBRUl5QixXQUFXdEIsVUFBWCxFQUF1QkoscUJBQXZCLEVBQThDQyxRQUE5QyxDQUZKO0FBR0Q7QUFDRjtBQUNGOztBQUVELFNBQVN3QixlQUFULENBQXlCckIsVUFBekIsRUFBcUNKLHFCQUFyQyxFQUE0REMsUUFBNUQsRUFBc0U7QUFDcEUsTUFBTVcscUJBQXFCaEIsU0FBU2lCLFlBQVQsQ0FBc0JiLHFCQUF0QixFQUE2Q0ksVUFBN0MsQ0FBM0I7QUFBQSxNQUNNdUIsUUFBUS9CLFNBQVNnQyxnQkFBVCxDQUEwQmhCLGtCQUExQixDQURkOztBQUdBLE1BQUksQ0FBQ2UsS0FBTCxFQUFZO0FBQ1YsUUFBTXRCLGFBQWFELFVBQW5COztBQUVBSCxhQUFTSSxVQUFUO0FBQ0QsR0FKRCxNQUlPO0FBQ0xaLFlBQVFvQyxNQUFSLENBQWVqQixrQkFBZixFQUFtQyxVQUFTTSxHQUFULEVBQWM7QUFDL0MsVUFBTUMsVUFBV0QsUUFBUSxJQUF6QjtBQUFBLFVBQ01iLGFBQWFjLFVBQ0csSUFESCxHQUVLZixVQUh4Qjs7QUFLQUgsZUFBU0ksVUFBVDtBQUNELEtBUEQ7QUFRRDtBQUNGOztBQUVELFNBQVNxQixVQUFULENBQW9CdEIsVUFBcEIsRUFBZ0NKLHFCQUFoQyxFQUF1REMsUUFBdkQsRUFBaUU7QUFDL0QsTUFBTVcscUJBQXFCaEIsU0FBU2lCLFlBQVQsQ0FBc0JiLHFCQUF0QixFQUE2Q0ksVUFBN0MsQ0FBM0I7O0FBRUFYLFVBQVFvQyxNQUFSLENBQWVqQixrQkFBZixFQUFtQyxVQUFTTSxHQUFULEVBQWM7QUFDL0MsUUFBTUMsVUFBV0QsUUFBUSxJQUF6QjtBQUFBLFFBQ01iLGFBQWFjLFVBQ0csSUFESCxHQUVLZixVQUh4Qjs7QUFLQUgsYUFBU0ksVUFBVDtBQUNELEdBUEQ7QUFRRCIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmc0V4dHJhID0gcmVxdWlyZSgnZnMtZXh0cmEnKTtcblxuY29uc3QgYXN5bmMgPSByZXF1aXJlKCcuL2FzeW5jJyksXG4gICAgICBwYXRoVXRpbCA9IHJlcXVpcmUoJy4vdXRpbC9wYXRoJyksXG4gICAgICBwYXRoTWFwc1V0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aE1hcHMnKTtcblxuY2xhc3MgaGVscGVycyB7XG4gIHN0YXRpYyBtb3ZlRW50cmllcyhwYXRoTWFwcywgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHRhcmdldFBhdGhzID0gW107XG5cbiAgICBwYXRoTWFwc1V0aWwuYXN5bmNGb3JFYWNoV2l0aFNvdXJjZVBhdGhBbmRUYXJnZXRQYXRoKFxuICAgICAgcGF0aE1hcHMsIFxuICAgICAgZnVuY3Rpb24oc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgbmV4dCkge1xuICAgICAgICBtb3ZlRW50cnkoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmdW5jdGlvbih0YXJnZXRQYXRoKSB7XG4gICAgICAgICAgdGFyZ2V0UGF0aHMucHVzaCh0YXJnZXRQYXRoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsYmFjayh0YXJnZXRQYXRocyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVFbnRyaWVzKHBhdGhNYXBzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGFyZ2V0UGF0aHMgPSBbXTtcblxuICAgIHBhdGhNYXBzVXRpbC5hc3luY0ZvckVhY2hXaXRoU291cmNlUGF0aEFuZFRhcmdldFBhdGgoXG4gICAgICBwYXRoTWFwcyxcbiAgICAgIGZ1bmN0aW9uKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIG5leHQpIHtcbiAgICAgICAgcmVtb3ZlRW50cnkoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmdW5jdGlvbih0YXJnZXRQYXRoKSB7XG4gICAgICAgICAgdGFyZ2V0UGF0aHMucHVzaCh0YXJnZXRQYXRoKTtcblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrKHRhcmdldFBhdGhzKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcblxuZnVuY3Rpb24gbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgaWYgKHNvdXJjZVBhdGggPT09IHRhcmdldFBhdGgpIHtcbiAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKSxcbiAgICAgICAgICBleGlzdHMgPSBmc0V4dHJhLmV4aXN0c1N5bmMoYWJzb2x1dGVTb3VyY2VQYXRoKTtcblxuICAgIGlmICghZXhpc3RzKSB7XG4gICAgICB0YXJnZXRQYXRoID0gbnVsbDtcbiAgICAgIFxuICAgICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFic29sdXRlVGFyZ2V0UGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHRhcmdldFBhdGgpO1xuXG4gICAgICBmc0V4dHJhLm1vdmUoYWJzb2x1dGVTb3VyY2VQYXRoLCBhYnNvbHV0ZVRhcmdldFBhdGgsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gKGVyciA9PT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlcnJDb2RlID0gZXJyLmNvZGU7XG5cbiAgICAgICAgICBpZiAoZXJyQ29kZSAhPT0gJ0VFWElTVCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBhdGggPSBzb3VyY2VQYXRoO1xuXG4gICAgICAgICAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlRW50cnkoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmdW5jdGlvbih0YXJnZXRQYXRoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAodGFyZ2V0UGF0aCA9PT0gbnVsbCk7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFBhdGggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUGF0aDtcblxuICAgICAgICAgICAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVudHJ5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgaWYgKHNvdXJjZVBhdGggPT09IHRhcmdldFBhdGgpIHtcbiAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKSxcbiAgICAgICAgICBleGlzdHMgPSBmc0V4dHJhLmV4aXN0c1N5bmMoYWJzb2x1dGVTb3VyY2VQYXRoKTtcblxuICAgIGlmICghZXhpc3RzKSB7XG4gICAgICB0YXJnZXRQYXRoID0gbnVsbDtcblxuICAgICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFic29sdXRlU291cmNlUGF0aERpcmVjdG9yeVBhdGggPSBwYXRoVXRpbC5pc0RpcmVjdG9yeVBhdGgoYWJzb2x1dGVTb3VyY2VQYXRoKSxcbiAgICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gYWJzb2x1dGVTb3VyY2VQYXRoRGlyZWN0b3J5UGF0aDtcblxuICAgICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgICByZW1vdmVEaXJlY3Rvcnkoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykgOlxuICAgICAgICAgIHJlbW92ZUZpbGUoc291cmNlUGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURpcmVjdG9yeShzb3VyY2VQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFic29sdXRlU291cmNlUGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHNvdXJjZVBhdGgpLFxuICAgICAgICBlbXB0eSA9IHBhdGhVdGlsLmlzRGlyZWN0b3J5RW1wdHkoYWJzb2x1dGVTb3VyY2VQYXRoKTtcblxuICBpZiAoIWVtcHR5KSB7XG4gICAgY29uc3QgdGFyZ2V0UGF0aCA9IHNvdXJjZVBhdGg7XG5cbiAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgfSBlbHNlIHtcbiAgICBmc0V4dHJhLnJlbW92ZShhYnNvbHV0ZVNvdXJjZVBhdGgsIGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc3Qgc3VjY2VzcyA9IChlcnIgPT09IG51bGwpLFxuICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUGF0aDtcblxuICAgICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRmlsZShzb3VyY2VQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFic29sdXRlU291cmNlUGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHNvdXJjZVBhdGgpO1xuXG4gIGZzRXh0cmEucmVtb3ZlKGFic29sdXRlU291cmNlUGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IChlcnIgPT09IG51bGwpLFxuICAgICAgICAgIHRhcmdldFBhdGggPSBzdWNjZXNzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUGF0aDtcblxuICAgIGNhbGxiYWNrKHRhcmdldFBhdGgpO1xuICB9KTtcbn0iXX0=