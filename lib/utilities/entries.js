"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    entriesFromTopmostDirectoryName: function() {
        return entriesFromTopmostDirectoryName;
    },
    default: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _entries = /*#__PURE__*/ _interopRequireDefault(require("../entries"));
var _directory = /*#__PURE__*/ _interopRequireDefault(require("../directory"));
var _name = require("../utilities/name");
var _constants = require("../constants");
var _filePath = require("../utilities/filePath");
var _messages = require("../messages");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, readDirectory = _necessary.fileSystemUtilities.readDirectory, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory;
function entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var array = [], relativeDirectoryPath = topmostDirectoryName; ///
    entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
    var entries = new _entries.default(array);
    return entries;
}
var _default = {
    entriesFromTopmostDirectoryName: entriesFromTopmostDirectoryName
};
function directoryFromPath(path, projectsDirectoryPath) {
    var directory = null;
    try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path), entryDirectory = isEntryDirectory(absolutePath);
        if (entryDirectory) {
            directory = new _directory.default(path);
        }
    } catch (error) {
    ///
    }
    return directory;
}
function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath), subEntryNames = readDirectory(absoluteDirectoryPath);
    subEntryNames.forEach(function(subEntryName) {
        var subEntryNameHiddenName = (0, _name.isNameHiddenName)(subEntryName), subEntryNameNotHiddenName = !subEntryNameHiddenName, loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories, loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;
        if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
            var entry;
            var path = concatenatePaths(relativeDirectoryPath, subEntryName), directory = directoryFromPath(path, projectsDirectoryPath);
            if (directory !== null) {
                var directoryPath = path; ///
                if (loadUnrecognisedFilesAndDirectories) {
                    entry = directory; ///
                    array.push(entry); ///
                    var arrayLength = array.length;
                    if (arrayLength > _constants.ENTRIES_MAXIMUM_ARRAY_LENGTH) {
                        throw new Error(_messages.ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE);
                    }
                }
                entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories); ///
            } else {
                var file = loadFile(path, projectsDirectoryPath);
                if (file !== null) {
                    var filePath = file.getPath(), filePathRecognisedFilePath = (0, _filePath.isFilePathRecognisedFilePath)(filePath), fileRecognisedFile = filePathRecognisedFilePath; ///
                    if (fileRecognisedFile || loadUnrecognisedFilesAndDirectories) {
                        entry = file; ///
                        array.push(entry); ///
                        var arrayLength1 = array.length;
                        if (arrayLength1 > _constants.ENTRIES_MAXIMUM_ARRAY_LENGTH) {
                            throw new Error(_messages.ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE);
                        }
                    }
                }
            }
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XHJcblxyXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi4vZW50cmllc1wiO1xyXG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuLi9kaXJlY3RvcnlcIjtcclxuXHJcbmltcG9ydCB7IGlzTmFtZUhpZGRlbk5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcclxuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcclxuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXHJcbiAgICAgIHsgcmVhZERpcmVjdG9yeSwgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnRyaWVzRnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgY29uc3QgYXJyYXkgPSBbXSxcclxuICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xyXG5cclxuICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcclxuXHJcbiAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcclxuXHJcbiAgcmV0dXJuIGVudHJpZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBlbnRyaWVzRnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lXHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaXJlY3RvcnlGcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoKSxcclxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpO1xyXG5cclxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xyXG4gICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLy9cclxuICB9XHJcblxyXG4gIHJldHVybiBkaXJlY3Rvcnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcclxuICAgICAgICBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xyXG5cclxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goKHN1YkVudHJ5TmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcclxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcclxuICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMsXHJcbiAgICAgICAgICBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyA9ICFsb2FkT25seVJlY29nbmlzZWRGaWxlcztcclxuXHJcbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gICAgICBsZXQgZW50cnk7XHJcblxyXG4gICAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXHJcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IGRpcmVjdG9yeUZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xyXG5cclxuICAgICAgICBpZiAobG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXHJcblxyXG4gICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cclxuXHJcbiAgICAgICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7IC8vL1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBsb2FkRmlsZShwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcclxuICAgICAgICAgICAgICAgIGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aChmaWxlUGF0aCksXHJcbiAgICAgICAgICAgICAgICBmaWxlUmVjb2duaXNlZEZpbGUgPSBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aDsgIC8vL1xyXG5cclxuICAgICAgICAgIGlmIChmaWxlUmVjb2duaXNlZEZpbGUgfHwgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICAgICAgICAgICAgZW50cnkgPSBmaWxlOyAvLy9cclxuXHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlmIChhcnJheUxlbmd0aCA+IEVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEgpIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImVudHJpZXNGcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInJlYWREaXJlY3RvcnkiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiaXNFbnRyeURpcmVjdG9yeSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiYXJyYXkiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXMiLCJFbnRyaWVzIiwiZGlyZWN0b3J5RnJvbVBhdGgiLCJwYXRoIiwiZGlyZWN0b3J5IiwiYWJzb2x1dGVQYXRoIiwiZW50cnlEaXJlY3RvcnkiLCJEaXJlY3RvcnkiLCJlcnJvciIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJmb3JFYWNoIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsImlzTmFtZUhpZGRlbk5hbWUiLCJzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIiwibG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyIsImVudHJ5IiwiZGlyZWN0b3J5UGF0aCIsInB1c2giLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsIkVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEgiLCJFcnJvciIsIkVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEhfRVhDRUVERURfTUVTU0FHRSIsImZpbGUiLCJsb2FkRmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImZpbGVSZWNvZ25pc2VkRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZWdCQSwrQkFBK0I7ZUFBL0JBOztJQVdoQixPQUVFO2VBRkY7Ozt5QkF4Qm1EOzREQUUvQjs4REFDRTtvQkFFVzt5QkFDWTt3QkFDQTt3QkFDaUI7Ozs7OztBQUU5RCxJQUFNLEFBQUVDLG1CQUFxQkMsd0JBQWEsQ0FBbENELGtCQUNBRSxnQkFBb0NDLDhCQUFtQixDQUF2REQsZUFBZUUsbUJBQXFCRCw4QkFBbUIsQ0FBeENDO0FBRWhCLFNBQVNMLGdDQUFnQ00sb0JBQW9CLEVBQUVDLHFCQUFxQixFQUFFQyx1QkFBdUIsRUFBRUMsa0NBQWtDLEVBQUU7SUFDeEosSUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLHdCQUF3Qkwsc0JBQXVCLEdBQUc7SUFFeERNLGlDQUFpQ0YsT0FBT0MsdUJBQXVCSix1QkFBdUJDLHlCQUF5QkM7SUFFL0csSUFBTUksVUFBVSxJQUFJQyxnQkFBTyxDQUFDSjtJQUU1QixPQUFPRztBQUNUO0lBRUEsV0FBZTtJQUNiYixpQ0FBQUE7QUFDRjtBQUVBLFNBQVNlLGtCQUFrQkMsSUFBSSxFQUFFVCxxQkFBcUIsRUFBRTtJQUN0RCxJQUFJVSxZQUFZLElBQUk7SUFFcEIsSUFBSTtRQUNGLElBQU1DLGVBQWVqQixpQkFBaUJNLHVCQUF1QlMsT0FDdkRHLGlCQUFpQmQsaUJBQWlCYTtRQUV4QyxJQUFJQyxnQkFBZ0I7WUFDbEJGLFlBQVksSUFBSUcsa0JBQVMsQ0FBQ0o7UUFDNUIsQ0FBQztJQUNILEVBQUUsT0FBT0ssT0FBTztJQUNkLEdBQUc7SUFDTDtJQUVBLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTTCxpQ0FBaUNGLEtBQUssRUFBRUMscUJBQXFCLEVBQUVKLHFCQUFxQixFQUFFQyx1QkFBdUIsRUFBRUMsa0NBQWtDLEVBQUU7SUFDMUosSUFBTWEsd0JBQXdCckIsaUJBQWlCTSx1QkFBdUJJLHdCQUNoRVksZ0JBQWdCcEIsY0FBY21CO0lBRXBDQyxjQUFjQyxPQUFPLENBQUMsU0FBQ0MsY0FBaUI7UUFDdEMsSUFBTUMseUJBQXlCQyxJQUFBQSxzQkFBZ0IsRUFBQ0YsZUFDMUNHLDRCQUE0QixDQUFDRix3QkFDN0JHLGdDQUFnQyxDQUFDcEIsb0NBQ2pDcUIsc0NBQXNDLENBQUN0QjtRQUU3QyxJQUFJb0IsNkJBQTZCQywrQkFBK0I7WUFDOUQsSUFBSUU7WUFFSixJQUFNZixPQUFPZixpQkFBaUJVLHVCQUF1QmMsZUFDL0NSLFlBQVlGLGtCQUFrQkMsTUFBTVQ7WUFFMUMsSUFBSVUsY0FBYyxJQUFJLEVBQUU7Z0JBQ3RCLElBQU1lLGdCQUFnQmhCLE1BQU0sR0FBRztnQkFFL0IsSUFBSWMscUNBQXFDO29CQUN2Q0MsUUFBUWQsV0FBWSxHQUFHO29CQUV2QlAsTUFBTXVCLElBQUksQ0FBQ0YsUUFBUyxHQUFHO29CQUV2QixJQUFNRyxjQUFjeEIsTUFBTXlCLE1BQU07b0JBRWhDLElBQUlELGNBQWNFLHVDQUE0QixFQUFFO3dCQUM5QyxNQUFNLElBQUlDLE1BQU1DLHVEQUE2QyxFQUFDO29CQUNoRSxDQUFDO2dCQUNILENBQUM7Z0JBRUQxQixpQ0FBaUNGLE9BQU9zQixlQUFlekIsdUJBQXVCQyx5QkFBeUJDLHFDQUFxQyxHQUFHO1lBQ2pKLE9BQU87Z0JBQ0wsSUFBTThCLE9BQU9DLFNBQVN4QixNQUFNVDtnQkFFNUIsSUFBSWdDLFNBQVMsSUFBSSxFQUFFO29CQUNqQixJQUFNRSxXQUFXRixLQUFLRyxPQUFPLElBQ3ZCQyw2QkFBNkJDLElBQUFBLHNDQUE0QixFQUFDSCxXQUMxREkscUJBQXFCRiw0QkFBNkIsR0FBRztvQkFFM0QsSUFBSUUsc0JBQXNCZixxQ0FBcUM7d0JBQzdEQyxRQUFRUSxNQUFNLEdBQUc7d0JBRWpCN0IsTUFBTXVCLElBQUksQ0FBQ0YsUUFBUyxHQUFHO3dCQUV2QixJQUFNRyxlQUFjeEIsTUFBTXlCLE1BQU07d0JBRWhDLElBQUlELGVBQWNFLHVDQUE0QixFQUFFOzRCQUM5QyxNQUFNLElBQUlDLE1BQU1DLHVEQUE2QyxFQUFDO3dCQUNoRSxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0g7QUFDRiJ9