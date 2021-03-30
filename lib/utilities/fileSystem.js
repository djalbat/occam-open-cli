"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveFile = saveFile;
exports.saveFiles = saveFiles;
exports.fileFromPath = fileFromPath;
exports.filesFromPaths = filesFromPaths;
exports.directoryFromPath = directoryFromPath;
exports.entriesFromTopmostDirectoryName = entriesFromTopmostDirectoryName;
exports.projectFromTopmostDirectoryName = projectFromTopmostDirectoryName;
exports.projectsFromProjectsDirectoryPath = projectsFromProjectsDirectoryPath;
exports.releaseFromName = releaseFromName;
exports.default = void 0;
var _mkdirp = _interopRequireDefault(require("mkdirp"));
var _necessary = require("necessary");
var _file = _interopRequireWildcard(require("../file"));
var _files = _interopRequireDefault(require("../files"));
var _entries = _interopRequireDefault(require("../entries"));
var _project = _interopRequireDefault(require("../project"));
var _release = _interopRequireDefault(require("../release"));
var _projects = _interopRequireDefault(require("../projects"));
var _directory = _interopRequireDefault(require("../directory"));
var _name = require("../utilities/name");
var _constants = require("../constants");
var _filePath = require("../utilities/filePath");
var _messages = require("../messages");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                    };
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, topmostDirectoryPathFromPath = _necessary.pathUtilities.topmostDirectoryPathFromPath, readFile = _necessary.fileSystemUtilities.readFile, writeFile = _necessary.fileSystemUtilities.writeFile, isEntryFile = _necessary.fileSystemUtilities.isEntryFile, readDirectory = _necessary.fileSystemUtilities.readDirectory, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory;
function saveFile(file, projectsDirectoryPath) {
    var path = file.getPath(), content = file.getContent(), absolutePath = concatenatePaths(projectsDirectoryPath, path), topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);
    _mkdirp.default.sync(topmostAbsoluteDirectoryPath);
    writeFile(absolutePath, content);
}
function saveFiles(files, projectsDirectoryPath) {
    files.forEachFile(function(file) {
        saveFile(file, projectsDirectoryPath);
    });
}
function fileFromPath(path, projectsDirectoryPath) {
    var file = null;
    try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path), entryFile = isEntryFile(absolutePath);
        if (entryFile) {
            var content = readFile(absolutePath);
            content = _file.convertContentTabsToWhitespace(content); ///
            file = new _file.default(path, content);
        }
    } catch (error) {
    }
    return file;
}
function filesFromPaths(paths, projectsDirectoryPath) {
    var array = [], files = new _files.default(array);
    paths.forEach(function(path) {
        var file = fileFromPath(path, projectsDirectoryPath);
        files.addFile(file);
    });
    return files;
}
function directoryFromPath(path, projectsDirectoryPath) {
    var directory = null;
    try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path), entryDirectory = isEntryDirectory(absolutePath);
        if (entryDirectory) {
            directory = new _directory.default(path);
        }
    } catch (error) {
    }
    return directory;
}
function entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var array = [], relativeDirectoryPath = topmostDirectoryName; ///
    entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
    var entries = new _entries.default(array);
    return entries;
}
function projectFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var name = topmostDirectoryName, entries = entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories), project = new _project.default(name, entries);
    return project;
}
function projectsFromProjectsDirectoryPath(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var projects;
    try {
        var array = [];
        projects = new _projects.default(array);
        var topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);
        topmostDirectoryNames.forEach(function(topmostDirectoryName) {
            var project = projectFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
            projects.addProject(project);
        });
    } catch (error) {
        projects = null;
    }
    return projects;
}
function releaseFromName(name) {
    var topmostDirectoryName = name, projectsDirectoryPath = ".", loadOnlyRecognisedFiles = true, doNotLoadHiddenFilesAndDirectories = true, entries = entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories), versionNumber = null, release = new _release.default(name, entries, versionNumber);
    return release;
}
var _default = {
    saveFile: saveFile,
    saveFiles: saveFiles,
    fileFromPath: fileFromPath,
    filesFromPaths: filesFromPaths,
    directoryFromPath: directoryFromPath,
    entriesFromTopmostDirectoryName: entriesFromTopmostDirectoryName,
    projectFromTopmostDirectoryName: projectFromTopmostDirectoryName,
    projectsFromProjectsDirectoryPath: projectsFromProjectsDirectoryPath,
    releaseFromName: releaseFromName
};
exports.default = _default;
function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath), subEntryNames = readDirectory(absoluteDirectoryPath);
    subEntryNames.forEach(function(subEntryName) {
        var subEntryNameHiddenName = _name.isNameHiddenName(subEntryName), subEntryNameNotHiddenName = !subEntryNameHiddenName, loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories, loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;
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
                    var filePath = file.getPath(), filePathRecognisedFilePath = _filePath.isFilePathRecognisedFilePath(filePath), fileRecognisedFile = filePathRecognisedFilePath; ///
                    if (fileRecognisedFile || loadUnrecognisedFilesAndDirectories) {
                        entry = file; ///
                        array.push(entry); ///
                        var arrayLength = array.length;
                        if (arrayLength > _constants.ENTRIES_MAXIMUM_ARRAY_LENGTH) {
                            throw new Error(_messages.ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE);
                        }
                    }
                }
            }
        }
    });
}
function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
    var topmostDirectoryNames;
    var subEntryNames = readDirectory(projectsDirectoryPath);
    topmostDirectoryNames = subEntryNames.reduce(function(topmostDirectoryNames1, subEntryName) {
        var absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName), subEntryNameHiddenName = _name.isNameHiddenName(subEntryName), subEntryNameNotHiddenName = !subEntryNameHiddenName, loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;
        if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
            var subEntryDirectory = isEntryDirectory(absoluteSubEntryPath);
            if (subEntryDirectory) {
                var topmostDirectoryName = subEntryName; ///
                topmostDirectoryNames1.push(topmostDirectoryName);
            }
        }
        return topmostDirectoryNames1;
    }, []);
    return topmostDirectoryNames;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBta2RpcnAgZnJvbSBcIm1rZGlycFwiO1xyXG5cclxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBGaWxlIGZyb20gXCIuLi9maWxlXCI7XHJcbmltcG9ydCBGaWxlcyBmcm9tIFwiLi4vZmlsZXNcIjtcclxuaW1wb3J0IEVudHJpZXMgZnJvbSBcIi4uL2VudHJpZXNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcclxuaW1wb3J0IFJlbGVhc2UgZnJvbSBcIi4uL3JlbGVhc2VcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuLi9kaXJlY3RvcnlcIjtcclxuXHJcbmltcG9ydCB7IGlzTmFtZUhpZGRlbk5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcclxuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcclxuaW1wb3J0IHsgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIH0gZnJvbSBcIi4uL2ZpbGVcIjtcclxuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXMsXHJcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgaXNFbnRyeUZpbGUsIHJlYWREaXJlY3RvcnksIGlzRW50cnlEaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUZpbGUoZmlsZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxyXG4gICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcclxuICAgICAgICBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgbWtkaXJwLnN5bmModG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIGNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUZpbGVzKGZpbGVzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBmaWxlcy5mb3JFYWNoRmlsZSgoZmlsZSkgPT4ge1xyXG4gICAgc2F2ZUZpbGUoZmlsZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVGcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBsZXQgZmlsZSA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xyXG5cclxuICAgIGlmIChlbnRyeUZpbGUpIHtcclxuICAgICAgbGV0IGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xyXG5cclxuICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLy9cclxuICB9XHJcblxyXG4gIHJldHVybiBmaWxlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsZXNGcm9tUGF0aHMocGF0aHMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xyXG4gIGNvbnN0IGFycmF5ID0gW10sXHJcbiAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xyXG5cclxuICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gZmlsZUZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGZpbGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0b3J5RnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcclxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlyZWN0b3J5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW50cmllc0Zyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gIGNvbnN0IGFycmF5ID0gW10sXHJcbiAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cclxuXHJcbiAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XHJcblxyXG4gIGNvbnN0IGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XHJcblxyXG4gIHJldHVybiBlbnRyaWVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZSwgIC8vL1xyXG4gICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcclxuICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdHNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICBsZXQgcHJvamVjdHM7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhcnJheSA9IFtdO1xyXG5cclxuICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcclxuXHJcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XHJcblxyXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLmZvckVhY2goKHRvcG1vc3REaXJlY3RvcnlOYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcclxuXHJcbiAgICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcHJvamVjdHMgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUZyb21OYW1lKG5hbWUpIHtcclxuICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG5hbWUsIC8vL1xyXG4gICAgICAgIHByb2plY3RzRGlyZWN0b3J5UGF0aCA9IFwiLlwiLFxyXG4gICAgICAgIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzID0gdHJ1ZSxcclxuICAgICAgICBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gdHJ1ZSxcclxuICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXHJcbiAgICAgICAgdmVyc2lvbk51bWJlciA9IG51bGwsIC8vL1xyXG4gICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcclxuXHJcbiAgcmV0dXJuIHJlbGVhc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzYXZlRmlsZSxcclxuICBzYXZlRmlsZXMsXHJcbiAgZmlsZUZyb21QYXRoLFxyXG4gIGZpbGVzRnJvbVBhdGhzLFxyXG4gIGRpcmVjdG9yeUZyb21QYXRoLFxyXG4gIGVudHJpZXNGcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUsXHJcbiAgcHJvamVjdEZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSxcclxuICBwcm9qZWN0c0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgsXHJcbiAgcmVsZWFzZUZyb21OYW1lXHJcbn07XHJcblxyXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXHJcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcclxuXHJcbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKChzdWJFbnRyeU5hbWUpID0+IHtcclxuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXHJcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXHJcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLFxyXG4gICAgICAgICAgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXM7XHJcblxyXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICAgICAgbGV0IGVudHJ5O1xyXG5cclxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxyXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBkaXJlY3RvcnlGcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoOyAvLy9cclxuXHJcbiAgICAgICAgaWYgKGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xyXG5cclxuICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXHJcblxyXG4gICAgICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgaWYgKGFycmF5TGVuZ3RoID4gRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZmlsZUZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggPSBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoKGZpbGVQYXRoKSxcclxuICAgICAgICAgICAgICAgIGZpbGVSZWNvZ25pc2VkRmlsZSA9IGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoOyAgLy8vXHJcblxyXG4gICAgICAgICAgaWYgKGZpbGVSZWNvZ25pc2VkRmlsZSB8fCBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gICAgICAgICAgICBlbnRyeSA9IGZpbGU7IC8vL1xyXG5cclxuICAgICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFycmF5TGVuZ3RoID4gRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCkge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xyXG5cclxuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSBzdWJFbnRyeU5hbWVzLnJlZHVjZSgodG9wbW9zdERpcmVjdG9yeU5hbWVzLCBzdWJFbnRyeU5hbWUpID0+IHtcclxuICAgIGNvbnN0IGFic29sdXRlU3ViRW50cnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXHJcbiAgICAgICAgICBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxyXG4gICAgICAgICAgc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSA9ICFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lLFxyXG4gICAgICAgICAgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcztcclxuXHJcbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gICAgICBjb25zdCBzdWJFbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVTdWJFbnRyeVBhdGgpO1xyXG5cclxuICAgICAgaWYgKHN1YkVudHJ5RGlyZWN0b3J5KSB7XHJcbiAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzdWJFbnRyeU5hbWU7ICAvLy9cclxuXHJcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLnB1c2godG9wbW9zdERpcmVjdG9yeU5hbWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQXVCSSxRQUFRLEdBQVIsUUFBUTtRQVdSLFNBQVMsR0FBVCxTQUFTO1FBTVQsWUFBWSxHQUFaLFlBQVk7UUFxQlosY0FBYyxHQUFkLGNBQWM7UUFhZCxpQkFBaUIsR0FBakIsaUJBQWlCO1FBaUJqQiwrQkFBK0IsR0FBL0IsK0JBQStCO1FBVy9CLCtCQUErQixHQUEvQiwrQkFBK0I7UUFRL0IsaUNBQWlDLEdBQWpDLGlDQUFpQztRQXNCakMsZUFBZSxHQUFmLGVBQWU7O0lBbElaLE9BQVE7SUFFd0IsVUFBVztJQUU3QyxLQUFTO0lBQ1IsTUFBVTtJQUNSLFFBQVk7SUFDWixRQUFZO0lBQ1osUUFBWTtJQUNYLFNBQWE7SUFDWixVQUFjO0lBRUgsS0FBbUI7SUFDUCxVQUFjO0lBQ2QsU0FBdUI7SUFFTixTQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuRSxnQkFBZ0IsR0FoQjJCLFVBQVcsZUFnQnRELGdCQUFnQixFQUFFLDRCQUE0QixHQWhCSCxVQUFXLGVBZ0JwQyw0QkFBNEIsRUFDOUMsUUFBUSxHQWpCbUMsVUFBVyxxQkFpQnRELFFBQVEsRUFBRSxTQUFTLEdBakJ3QixVQUFXLHFCQWlCNUMsU0FBUyxFQUFFLFdBQVcsR0FqQlcsVUFBVyxxQkFpQmpDLFdBQVcsRUFBRSxhQUFhLEdBakJKLFVBQVcscUJBaUJwQixhQUFhLEVBQUUsZ0JBQWdCLEdBakJ0QixVQUFXLHFCQWlCTCxnQkFBZ0I7U0FFekQsUUFBUSxDQUFDLElBQUksRUFBRSxxQkFBcUI7UUFDNUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQ25CLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUN6QixZQUFZLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsSUFBSSxHQUMzRCw0QkFBNEIsR0FBRyw0QkFBNEIsQ0FBQyxZQUFZO0FBekI3RCxXQUFRLFNBMkJsQixJQUFJLENBQUMsNEJBQTRCO0FBRXhDLGFBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTzs7U0FHakIsU0FBUyxDQUFDLEtBQUssRUFBRSxxQkFBcUI7QUFDcEQsU0FBSyxDQUFDLFdBQVcsVUFBRSxJQUFJO0FBQ3JCLGdCQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFxQjs7O1NBSXhCLFlBQVksQ0FBQyxJQUFJLEVBQUUscUJBQXFCO1FBQ2xELElBQUksR0FBRyxJQUFJOztZQUdQLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEdBQzNELFNBQVMsR0FBRyxXQUFXLENBQUMsWUFBWTtZQUV0QyxTQUFTO2dCQUNQLE9BQU8sR0FBRyxRQUFRLENBQUMsWUFBWTtBQUVuQyxtQkFBTyxHQTVDSSxLQUFTLGdDQTRDcUIsT0FBTyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztBQUV2RCxnQkFBSSxPQTlDTyxLQUFTLFNBOENKLElBQUksRUFBRSxPQUFPOzthQUV4QixLQUFLOztXQUlQLElBQUk7O1NBR0csY0FBYyxDQUFDLEtBQUssRUFBRSxxQkFBcUI7UUFDbkQsS0FBSyxPQUNMLEtBQUssT0F4REssTUFBVSxTQXdERixLQUFLO0FBRTdCLFNBQUssQ0FBQyxPQUFPLFVBQUUsSUFBSTtZQUNYLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLHFCQUFxQjtBQUVyRCxhQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7O1dBR2IsS0FBSzs7U0FHRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUscUJBQXFCO1FBQ3ZELFNBQVMsR0FBRyxJQUFJOztZQUdaLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEdBQzNELGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZO1lBRWhELGNBQWM7QUFDaEIscUJBQVMsT0F0RU8sVUFBYyxTQXNFSixJQUFJOzthQUV6QixLQUFLOztXQUlQLFNBQVM7O1NBR0YsK0JBQStCLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsa0NBQWtDO1FBQ2hKLEtBQUssT0FDTCxxQkFBcUIsR0FBRyxvQkFBb0IsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7QUFFeEQsb0NBQWdDLENBQUMsS0FBSyxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLGtDQUFrQztRQUUzSSxPQUFPLE9BekZLLFFBQVksU0F5RkYsS0FBSztXQUUxQixPQUFPOztTQUdBLCtCQUErQixDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLGtDQUFrQztRQUNoSixJQUFJLEdBQUcsb0JBQW9CLEVBQzNCLE9BQU8sR0FBRywrQkFBK0IsQ0FBQyxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxrQ0FBa0MsR0FDbEosT0FBTyxPQWhHSyxRQUFZLFNBZ0dGLElBQUksRUFBRSxPQUFPO1dBRWxDLE9BQU87O1NBR0EsaUNBQWlDLENBQUMscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsa0NBQWtDO1FBQzlILFFBQVE7O1lBR0osS0FBSztBQUVYLGdCQUFRLE9BekdTLFNBQWEsU0F5R04sS0FBSztZQUV2QixxQkFBcUIsR0FBRyw4Q0FBOEMsQ0FBQyxxQkFBcUIsRUFBRSxrQ0FBa0M7QUFFdEksNkJBQXFCLENBQUMsT0FBTyxVQUFFLG9CQUFvQjtnQkFDM0MsT0FBTyxHQUFHLCtCQUErQixDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLGtDQUFrQztBQUV4SixvQkFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzthQUV0QixLQUFLO0FBQ1osZ0JBQVEsR0FBRyxJQUFJOztXQUdWLFFBQVE7O1NBR0QsZUFBZSxDQUFDLElBQUk7UUFDNUIsb0JBQW9CLEdBQUcsSUFBSSxFQUMzQixxQkFBcUIsSUFBRyxDQUFHLEdBQzNCLHVCQUF1QixHQUFHLElBQUksRUFDOUIsa0NBQWtDLEdBQUcsSUFBSSxFQUN6QyxPQUFPLEdBQUcsK0JBQStCLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsa0NBQWtDLEdBQ2xKLGFBQWEsR0FBRyxJQUFJLEVBQ3BCLE9BQU8sT0FqSUssUUFBWSxTQWlJRixJQUFJLEVBQUUsT0FBTyxFQUFFLGFBQWE7V0FFakQsT0FBTzs7O0FBSWQsWUFBUSxFQUFSLFFBQVE7QUFDUixhQUFTLEVBQVQsU0FBUztBQUNULGdCQUFZLEVBQVosWUFBWTtBQUNaLGtCQUFjLEVBQWQsY0FBYztBQUNkLHFCQUFpQixFQUFqQixpQkFBaUI7QUFDakIsbUNBQStCLEVBQS9CLCtCQUErQjtBQUMvQixtQ0FBK0IsRUFBL0IsK0JBQStCO0FBQy9CLHFDQUFpQyxFQUFqQyxpQ0FBaUM7QUFDakMsbUJBQWUsRUFBZixlQUFlOzs7U0FHUixnQ0FBZ0MsQ0FBQyxLQUFLLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsa0NBQWtDO1FBQ2xKLHFCQUFxQixHQUFHLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLHFCQUFxQixHQUNyRixhQUFhLEdBQUcsYUFBYSxDQUFDLHFCQUFxQjtBQUV6RCxpQkFBYSxDQUFDLE9BQU8sVUFBRSxZQUFZO1lBQzNCLHNCQUFzQixHQW5KQyxLQUFtQixrQkFtSkEsWUFBWSxHQUN0RCx5QkFBeUIsSUFBSSxzQkFBc0IsRUFDbkQsNkJBQTZCLElBQUksa0NBQWtDLEVBQ25FLG1DQUFtQyxJQUFJLHVCQUF1QjtZQUVoRSx5QkFBeUIsSUFBSSw2QkFBNkI7Z0JBQ3hELEtBQUs7Z0JBRUgsSUFBSSxHQUFHLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLFlBQVksR0FDM0QsU0FBUyxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxxQkFBcUI7Z0JBRTNELFNBQVMsS0FBSyxJQUFJO29CQUNkLGFBQWEsR0FBRyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUUzQixtQ0FBbUM7QUFDckMseUJBQUssR0FBRyxTQUFTLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0FBRXZCLHlCQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7d0JBRWpCLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTTt3QkFFNUIsV0FBVyxHQXZLb0IsVUFBYztrQ0F3S3JDLEtBQUssQ0FyS21DLFNBQWE7OztBQXlLbkUsZ0RBQWdDLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxrQ0FBa0MsRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7O29CQUV6SSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxxQkFBcUI7b0JBRWpELElBQUksS0FBSyxJQUFJO3dCQUNULFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUN2QiwwQkFBMEIsR0FqTEcsU0FBdUIsOEJBaUxNLFFBQVEsR0FDbEUsa0JBQWtCLEdBQUcsMEJBQTBCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUV2RCxrQkFBa0IsSUFBSSxtQ0FBbUM7QUFDM0QsNkJBQUssR0FBRyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0FBRWpCLDZCQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7NEJBRWpCLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTTs0QkFFNUIsV0FBVyxHQTVMa0IsVUFBYztzQ0E2TG5DLEtBQUssQ0ExTGlDLFNBQWE7Ozs7Ozs7O1NBbU1sRSw4Q0FBOEMsQ0FBQyxxQkFBcUIsRUFBRSxrQ0FBa0M7UUFDM0cscUJBQXFCO1FBRW5CLGFBQWEsR0FBRyxhQUFhLENBQUMscUJBQXFCO0FBRXpELHlCQUFxQixHQUFHLGFBQWEsQ0FBQyxNQUFNLFVBQUUsc0JBQXFCLEVBQUUsWUFBWTtZQUN6RSxvQkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLEdBQzNFLHNCQUFzQixHQTlNQyxLQUFtQixrQkE4TUEsWUFBWSxHQUN0RCx5QkFBeUIsSUFBSSxzQkFBc0IsRUFDbkQsNkJBQTZCLElBQUksa0NBQWtDO1lBRXJFLHlCQUF5QixJQUFJLDZCQUE2QjtnQkFDdEQsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsb0JBQW9CO2dCQUUzRCxpQkFBaUI7b0JBQ2Isb0JBQW9CLEdBQUcsWUFBWSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztBQUUvQyxzQ0FBcUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9COzs7ZUFJNUMsc0JBQXFCOztXQUd2QixxQkFBcUIifQ==