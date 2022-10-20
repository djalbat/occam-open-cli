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
var _file = /*#__PURE__*/ _interopRequireDefault(require("../file"));
var _entries = /*#__PURE__*/ _interopRequireDefault(require("../entries"));
var _directory = /*#__PURE__*/ _interopRequireDefault(require("../directory"));
var _name = require("../utilities/name");
var _constants = require("../constants");
var _filePath = require("../utilities/filePath");
var _content = require("../utilities/content");
var _messages = require("../messages");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, readFile = _necessary.fileSystemUtilities.readFile, readDirectory = _necessary.fileSystemUtilities.readDirectory, isEntryFile = _necessary.fileSystemUtilities.isEntryFile, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory;
function entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var array = [], relativeDirectoryPath = topmostDirectoryName; ///
    entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
    var entries = new _entries.default(array);
    return entries;
}
var _default = {
    entriesFromTopmostDirectoryName: entriesFromTopmostDirectoryName
};
function fileFromPath(path, projectsDirectoryPath) {
    var file = null;
    try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path), entryFile = isEntryFile(absolutePath);
        if (entryFile) {
            var content = readFile(absolutePath);
            content = (0, _content.convertContentTabsToWhitespace)(content); ///
            file = new _file.default(path, content);
        }
    } catch (error) {
    ///
    }
    return file;
}
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
                var file = fileFromPath(path, projectsDirectoryPath);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XHJcblxyXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi4vZmlsZVwiO1xyXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi4vZW50cmllc1wiO1xyXG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuLi9kaXJlY3RvcnlcIjtcclxuXHJcbmltcG9ydCB7IGlzTmFtZUhpZGRlbk5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcclxuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcclxuaW1wb3J0IHsgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XHJcbmltcG9ydCB7IEVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEhfRVhDRUVERURfTUVTU0FHRSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xyXG5cclxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxyXG4gICAgICB7IHJlYWRGaWxlLCByZWFkRGlyZWN0b3J5LCBpc0VudHJ5RmlsZSwgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnRyaWVzRnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgY29uc3QgYXJyYXkgPSBbXSxcclxuICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xyXG5cclxuICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcclxuXHJcbiAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcclxuXHJcbiAgcmV0dXJuIGVudHJpZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBlbnRyaWVzRnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lXHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaWxlRnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgbGV0IGZpbGUgPSBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxyXG4gICAgICAgICAgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgICBpZiAoZW50cnlGaWxlKSB7XHJcbiAgICAgIGxldCBjb250ZW50ID0gcmVhZEZpbGUoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cclxuXHJcbiAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmlsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlyZWN0b3J5RnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcclxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlyZWN0b3J5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXHJcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcclxuXHJcbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKChzdWJFbnRyeU5hbWUpID0+IHtcclxuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXHJcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXHJcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLFxyXG4gICAgICAgICAgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXM7XHJcblxyXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICAgICAgbGV0IGVudHJ5O1xyXG5cclxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxyXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBkaXJlY3RvcnlGcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoOyAvLy9cclxuXHJcbiAgICAgICAgaWYgKGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xyXG5cclxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXHJcblxyXG4gICAgICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgaWYgKGFycmF5TGVuZ3RoID4gRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZmlsZUZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggPSBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoKGZpbGVQYXRoKSxcclxuICAgICAgICAgICAgICAgIGZpbGVSZWNvZ25pc2VkRmlsZSA9IGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoOyAgLy8vXHJcblxyXG4gICAgICAgICAgaWYgKGZpbGVSZWNvZ25pc2VkRmlsZSB8fCBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gICAgICAgICAgICBlbnRyeSA9IGZpbGU7IC8vL1xyXG5cclxuICAgICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFycmF5TGVuZ3RoID4gRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCkge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZW50cmllc0Zyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicmVhZERpcmVjdG9yeSIsImlzRW50cnlGaWxlIiwiaXNFbnRyeURpcmVjdG9yeSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiYXJyYXkiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXMiLCJFbnRyaWVzIiwiZmlsZUZyb21QYXRoIiwicGF0aCIsImZpbGUiLCJhYnNvbHV0ZVBhdGgiLCJlbnRyeUZpbGUiLCJjb250ZW50IiwiY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIiwiRmlsZSIsImVycm9yIiwiZGlyZWN0b3J5RnJvbVBhdGgiLCJkaXJlY3RvcnkiLCJlbnRyeURpcmVjdG9yeSIsIkRpcmVjdG9yeSIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJmb3JFYWNoIiwic3ViRW50cnlOYW1lIiwic3ViRW50cnlOYW1lSGlkZGVuTmFtZSIsImlzTmFtZUhpZGRlbk5hbWUiLCJzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIiwibG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyIsImVudHJ5IiwiZGlyZWN0b3J5UGF0aCIsInB1c2giLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsIkVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEgiLCJFcnJvciIsIkVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEhfRVhDRUVERURfTUVTU0FHRSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImZpbGVSZWNvZ25pc2VkRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBaUJnQkEsK0JBQStCO2VBQS9CQTs7SUFXaEIsT0FFRTtlQUZGOzs7eUJBMUJtRDt5REFFbEM7NERBQ0c7OERBQ0U7b0JBRVc7eUJBQ1k7d0JBQ0E7dUJBQ0U7d0JBQ2U7Ozs7OztBQUU5RCxJQUFNLEFBQUVDLG1CQUFxQkMsd0JBQWEsQ0FBbENELGtCQUNBRSxXQUEyREMsOEJBQW1CLENBQTlFRCxVQUFVRSxnQkFBaURELDhCQUFtQixDQUFwRUMsZUFBZUMsY0FBa0NGLDhCQUFtQixDQUFyREUsYUFBYUMsbUJBQXFCSCw4QkFBbUIsQ0FBeENHO0FBRXZDLFNBQVNQLGdDQUFnQ1Esb0JBQW9CLEVBQUVDLHFCQUFxQixFQUFFQyx1QkFBdUIsRUFBRUMsa0NBQWtDLEVBQUU7SUFDeEosSUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLHdCQUF3Qkwsc0JBQXVCLEdBQUc7SUFFeERNLGlDQUFpQ0YsT0FBT0MsdUJBQXVCSix1QkFBdUJDLHlCQUF5QkM7SUFFL0csSUFBTUksVUFBVSxJQUFJQyxnQkFBTyxDQUFDSjtJQUU1QixPQUFPRztBQUNUO0lBRUEsV0FBZTtJQUNiZixpQ0FBQUE7QUFDRjtBQUVBLFNBQVNpQixhQUFhQyxJQUFJLEVBQUVULHFCQUFxQixFQUFFO0lBQ2pELElBQUlVLE9BQU8sSUFBSTtJQUVmLElBQUk7UUFDRixJQUFNQyxlQUFlbkIsaUJBQWlCUSx1QkFBdUJTLE9BQ3ZERyxZQUFZZixZQUFZYztRQUU5QixJQUFJQyxXQUFXO1lBQ2IsSUFBSUMsVUFBVW5CLFNBQVNpQjtZQUV2QkUsVUFBVUMsSUFBQUEsdUNBQThCLEVBQUNELFVBQVcsR0FBRztZQUV2REgsT0FBTyxJQUFJSyxhQUFJLENBQUNOLE1BQU1JO1FBQ3hCLENBQUM7SUFDSCxFQUFFLE9BQU9HLE9BQU87SUFDZCxHQUFHO0lBQ0w7SUFFQSxPQUFPTjtBQUNUO0FBRUEsU0FBU08sa0JBQWtCUixJQUFJLEVBQUVULHFCQUFxQixFQUFFO0lBQ3RELElBQUlrQixZQUFZLElBQUk7SUFFcEIsSUFBSTtRQUNGLElBQU1QLGVBQWVuQixpQkFBaUJRLHVCQUF1QlMsT0FDdkRVLGlCQUFpQnJCLGlCQUFpQmE7UUFFeEMsSUFBSVEsZ0JBQWdCO1lBQ2xCRCxZQUFZLElBQUlFLGtCQUFTLENBQUNYO1FBQzVCLENBQUM7SUFDSCxFQUFFLE9BQU9PLE9BQU87SUFDZCxHQUFHO0lBQ0w7SUFFQSxPQUFPRTtBQUNUO0FBRUEsU0FBU2IsaUNBQWlDRixLQUFLLEVBQUVDLHFCQUFxQixFQUFFSixxQkFBcUIsRUFBRUMsdUJBQXVCLEVBQUVDLGtDQUFrQyxFQUFFO0lBQzFKLElBQU1tQix3QkFBd0I3QixpQkFBaUJRLHVCQUF1Qkksd0JBQ2hFa0IsZ0JBQWdCMUIsY0FBY3lCO0lBRXBDQyxjQUFjQyxPQUFPLENBQUMsU0FBQ0MsY0FBaUI7UUFDdEMsSUFBTUMseUJBQXlCQyxJQUFBQSxzQkFBZ0IsRUFBQ0YsZUFDMUNHLDRCQUE0QixDQUFDRix3QkFDN0JHLGdDQUFnQyxDQUFDMUIsb0NBQ2pDMkIsc0NBQXNDLENBQUM1QjtRQUU3QyxJQUFJMEIsNkJBQTZCQywrQkFBK0I7WUFDOUQsSUFBSUU7WUFFSixJQUFNckIsT0FBT2pCLGlCQUFpQlksdUJBQXVCb0IsZUFDL0NOLFlBQVlELGtCQUFrQlIsTUFBTVQ7WUFFMUMsSUFBSWtCLGNBQWMsSUFBSSxFQUFFO2dCQUN0QixJQUFNYSxnQkFBZ0J0QixNQUFNLEdBQUc7Z0JBRS9CLElBQUlvQixxQ0FBcUM7b0JBQ3ZDQyxRQUFRWixXQUFZLEdBQUc7b0JBRXZCZixNQUFNNkIsSUFBSSxDQUFDRixRQUFTLEdBQUc7b0JBRXZCLElBQU1HLGNBQWM5QixNQUFNK0IsTUFBTTtvQkFFaEMsSUFBSUQsY0FBY0UsdUNBQTRCLEVBQUU7d0JBQzlDLE1BQU0sSUFBSUMsTUFBTUMsdURBQTZDLEVBQUM7b0JBQ2hFLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRGhDLGlDQUFpQ0YsT0FBTzRCLGVBQWUvQix1QkFBdUJDLHlCQUF5QkMscUNBQXFDLEdBQUc7WUFDakosT0FBTztnQkFDTCxJQUFNUSxPQUFPRixhQUFhQyxNQUFNVDtnQkFFaEMsSUFBSVUsU0FBUyxJQUFJLEVBQUU7b0JBQ2pCLElBQU00QixXQUFXNUIsS0FBSzZCLE9BQU8sSUFDdkJDLDZCQUE2QkMsSUFBQUEsc0NBQTRCLEVBQUNILFdBQzFESSxxQkFBcUJGLDRCQUE2QixHQUFHO29CQUUzRCxJQUFJRSxzQkFBc0JiLHFDQUFxQzt3QkFDN0RDLFFBQVFwQixNQUFNLEdBQUc7d0JBRWpCUCxNQUFNNkIsSUFBSSxDQUFDRixRQUFTLEdBQUc7d0JBRXZCLElBQU1HLGVBQWM5QixNQUFNK0IsTUFBTTt3QkFFaEMsSUFBSUQsZUFBY0UsdUNBQTRCLEVBQUU7NEJBQzlDLE1BQU0sSUFBSUMsTUFBTUMsdURBQTZDLEVBQUM7d0JBQ2hFLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSDtBQUNGIn0=