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
    default: function() {
        return _default;
    },
    loadFile: function() {
        return loadFile;
    },
    saveFile: function() {
        return saveFile;
    },
    loadFiles: function() {
        return loadFiles;
    },
    saveFiles: function() {
        return saveFiles;
    },
    loadProject: function() {
        return loadProject;
    },
    loadProjects: function() {
        return loadProjects;
    },
    releaseFromName: function() {
        return releaseFromName;
    }
});
var _mkdirp = /*#__PURE__*/ _interopRequireDefault(require("mkdirp"));
var _necessary = require("necessary");
var _file = /*#__PURE__*/ _interopRequireWildcard(require("../file"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("../files"));
var _entries = /*#__PURE__*/ _interopRequireDefault(require("../entries"));
var _project = /*#__PURE__*/ _interopRequireDefault(require("../project"));
var _release = /*#__PURE__*/ _interopRequireDefault(require("../release"));
var _projects = /*#__PURE__*/ _interopRequireDefault(require("../projects"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var PERIOD_CHARACTER = _necessary.characters.PERIOD_CHARACTER, concatenatePaths = _necessary.pathUtilities.concatenatePaths, topmostDirectoryPathFromPath = _necessary.pathUtilities.topmostDirectoryPathFromPath, readFile = _necessary.fileSystemUtilities.readFile, writeFile = _necessary.fileSystemUtilities.writeFile, isEntryFile = _necessary.fileSystemUtilities.isEntryFile, readDirectory = _necessary.fileSystemUtilities.readDirectory, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory;
function loadFile(path, projectsDirectoryPath) {
    var file = null;
    try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path), entryFile = isEntryFile(absolutePath);
        if (entryFile) {
            var content = readFile(absolutePath);
            content = (0, _file.convertContentTabsToWhitespace)(content); ///
            file = new _file.default(path, content);
        }
    } catch (error) {
    ///
    }
    return file;
}
function saveFile(file, projectsDirectoryPath) {
    var path = file.getPath(), content = file.getContent(), absolutePath = concatenatePaths(projectsDirectoryPath, path), topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);
    _mkdirp.default.sync(topmostAbsoluteDirectoryPath);
    writeFile(absolutePath, content);
}
function loadFiles(paths, projectsDirectoryPath) {
    var array = [], files = new _files.default(array);
    paths.forEach(function(path) {
        var file = loadFile(path, projectsDirectoryPath);
        files.addFile(file);
    });
    return files;
}
function saveFiles(files, projectsDirectoryPath) {
    files.forEachFile(function(file) {
        saveFile(file, projectsDirectoryPath);
    });
}
function loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var name = topmostDirectoryName, entries = entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories), project = new _project.default(name, entries);
    return project;
}
function loadProjects(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var projects;
    try {
        var array = [];
        projects = new _projects.default(array);
        var topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);
        topmostDirectoryNames.forEach(function(topmostDirectoryName) {
            var project = loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
            projects.addProject(project);
        });
    } catch (error) {
        projects = null;
    }
    return projects;
}
function releaseFromName(name) {
    var topmostDirectoryName = name, projectsDirectoryPath = PERIOD_CHARACTER, loadOnlyRecognisedFiles = true, doNotLoadHiddenFilesAndDirectories = true, entries = entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories), versionNumber = null, release = new _release.default(name, entries, versionNumber);
    return release;
}
var _default = {
    loadFile: loadFile,
    saveFile: saveFile,
    loadFiles: loadFiles,
    saveFiles: saveFiles,
    loadProject: loadProject,
    loadProjects: loadProjects,
    releaseFromName: releaseFromName
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
function entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var array = [], relativeDirectoryPath = topmostDirectoryName; ///
    entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
    var entries = new _entries.default(array);
    return entries;
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
function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
    var topmostDirectoryNames;
    var subEntryNames = readDirectory(projectsDirectoryPath);
    topmostDirectoryNames = subEntryNames.reduce(function(topmostDirectoryNames, subEntryName) {
        var absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName), subEntryNameHiddenName = (0, _name.isNameHiddenName)(subEntryName), subEntryNameNotHiddenName = !subEntryNameHiddenName, loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;
        if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
            var subEntryDirectory = isEntryDirectory(absoluteSubEntryPath);
            if (subEntryDirectory) {
                var topmostDirectoryName = subEntryName; ///
                topmostDirectoryNames.push(topmostDirectoryName);
            }
        }
        return topmostDirectoryNames;
    }, []);
    return topmostDirectoryNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBta2RpcnAgZnJvbSBcIm1rZGlycFwiO1xyXG5cclxuaW1wb3J0IHsgY2hhcmFjdGVycywgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBGaWxlIGZyb20gXCIuLi9maWxlXCI7XHJcbmltcG9ydCBGaWxlcyBmcm9tIFwiLi4vZmlsZXNcIjtcclxuaW1wb3J0IEVudHJpZXMgZnJvbSBcIi4uL2VudHJpZXNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcclxuaW1wb3J0IFJlbGVhc2UgZnJvbSBcIi4uL3JlbGVhc2VcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuLi9kaXJlY3RvcnlcIjtcclxuXHJcbmltcG9ydCB7IGlzTmFtZUhpZGRlbk5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcclxuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcclxuaW1wb3J0IHsgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIH0gZnJvbSBcIi4uL2ZpbGVcIjtcclxuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IFBFUklPRF9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnMsXHJcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcyxcclxuICAgICAgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBpc0VudHJ5RmlsZSwgcmVhZERpcmVjdG9yeSwgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZShwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBsZXQgZmlsZSA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xyXG5cclxuICAgIGlmIChlbnRyeUZpbGUpIHtcclxuICAgICAgbGV0IGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xyXG5cclxuICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLy9cclxuICB9XHJcblxyXG4gIHJldHVybiBmaWxlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUZpbGUoZmlsZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxyXG4gICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcclxuICAgICAgICBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgbWtkaXJwLnN5bmModG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIGNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpbGVzKHBhdGhzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBjb25zdCBhcnJheSA9IFtdLFxyXG4gICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcclxuXHJcbiAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGxvYWRGaWxlKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGZpbGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUZpbGVzKGZpbGVzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBmaWxlcy5mb3JFYWNoRmlsZSgoZmlsZSkgPT4ge1xyXG4gICAgc2F2ZUZpbGUoZmlsZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0KHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgY29uc3QgbmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLCAgLy8vXHJcbiAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxyXG4gICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcclxuXHJcbiAgcmV0dXJuIHByb2plY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gIGxldCBwcm9qZWN0cztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFycmF5ID0gW107XHJcblxyXG4gICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoYXJyYXkpO1xyXG5cclxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lcyA9IHRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcclxuXHJcbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMuZm9yRWFjaCgodG9wbW9zdERpcmVjdG9yeU5hbWUpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IGxvYWRQcm9qZWN0KHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcclxuXHJcbiAgICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcHJvamVjdHMgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUZyb21OYW1lKG5hbWUpIHtcclxuICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG5hbWUsIC8vL1xyXG4gICAgICAgIHByb2plY3RzRGlyZWN0b3J5UGF0aCA9IFBFUklPRF9DSEFSQUNURVIsXHJcbiAgICAgICAgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMgPSB0cnVlLFxyXG4gICAgICAgIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSB0cnVlLFxyXG4gICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcclxuICAgICAgICB2ZXJzaW9uTnVtYmVyID0gbnVsbCwgLy8vXHJcbiAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xyXG5cclxuICByZXR1cm4gcmVsZWFzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxvYWRGaWxlLFxyXG4gIHNhdmVGaWxlLFxyXG4gIGxvYWRGaWxlcyxcclxuICBzYXZlRmlsZXMsXHJcbiAgbG9hZFByb2plY3QsXHJcbiAgbG9hZFByb2plY3RzLFxyXG4gIHJlbGVhc2VGcm9tTmFtZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZGlyZWN0b3J5RnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcclxuICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlyZWN0b3J5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgY29uc3QgYXJyYXkgPSBbXSxcclxuICAgICAgICByZWxhdGl2ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xyXG5cclxuICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcclxuXHJcbiAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcclxuXHJcbiAgcmV0dXJuIGVudHJpZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcclxuICAgICAgICBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xyXG5cclxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goKHN1YkVudHJ5TmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcclxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcclxuICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMsXHJcbiAgICAgICAgICBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyA9ICFsb2FkT25seVJlY29nbmlzZWRGaWxlcztcclxuXHJcbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gICAgICBsZXQgZW50cnk7XHJcblxyXG4gICAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXHJcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IGRpcmVjdG9yeUZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xyXG5cclxuICAgICAgICBpZiAobG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXHJcblxyXG4gICAgICAgICAgYXJyYXkucHVzaChlbnRyeSk7ICAvLy9cclxuXHJcbiAgICAgICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChhcnJheSwgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7IC8vL1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBsb2FkRmlsZShwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcclxuICAgICAgICAgICAgICAgIGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aChmaWxlUGF0aCksXHJcbiAgICAgICAgICAgICAgICBmaWxlUmVjb2duaXNlZEZpbGUgPSBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aDsgIC8vL1xyXG5cclxuICAgICAgICAgIGlmIChmaWxlUmVjb2duaXNlZEZpbGUgfHwgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICAgICAgICAgICAgZW50cnkgPSBmaWxlOyAvLy9cclxuXHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlmIChhcnJheUxlbmd0aCA+IEVOVFJJRVNfTUFYSU1VTV9BUlJBWV9MRU5HVEgpIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lcztcclxuXHJcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcclxuXHJcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gc3ViRW50cnlOYW1lcy5yZWR1Y2UoKHRvcG1vc3REaXJlY3RvcnlOYW1lcywgc3ViRW50cnlOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVN1YkVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxyXG4gICAgICAgICAgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcclxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcclxuICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXM7XHJcblxyXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICAgICAgY29uc3Qgc3ViRW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlU3ViRW50cnlQYXRoKTtcclxuXHJcbiAgICAgIGlmIChzdWJFbnRyeURpcmVjdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc3ViRW50cnlOYW1lOyAgLy8vXHJcblxyXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lcy5wdXNoKHRvcG1vc3REaXJlY3RvcnlOYW1lKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XHJcbn1cclxuIl0sIm5hbWVzIjpbImxvYWRGaWxlIiwic2F2ZUZpbGUiLCJsb2FkRmlsZXMiLCJzYXZlRmlsZXMiLCJsb2FkUHJvamVjdCIsImxvYWRQcm9qZWN0cyIsInJlbGVhc2VGcm9tTmFtZSIsIlBFUklPRF9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJ0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIiwicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwid3JpdGVGaWxlIiwiaXNFbnRyeUZpbGUiLCJyZWFkRGlyZWN0b3J5IiwiaXNFbnRyeURpcmVjdG9yeSIsInBhdGgiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJmaWxlIiwiYWJzb2x1dGVQYXRoIiwiZW50cnlGaWxlIiwiY29udGVudCIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsIkZpbGUiLCJlcnJvciIsImdldFBhdGgiLCJnZXRDb250ZW50IiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsIm1rZGlycCIsInN5bmMiLCJwYXRocyIsImFycmF5IiwiZmlsZXMiLCJGaWxlcyIsImZvckVhY2giLCJhZGRGaWxlIiwiZm9yRWFjaEZpbGUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImxvYWRPbmx5UmVjb2duaXNlZEZpbGVzIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsIm5hbWUiLCJlbnRyaWVzIiwiZW50cmllc0Zyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsInByb2plY3QiLCJQcm9qZWN0IiwicHJvamVjdHMiLCJQcm9qZWN0cyIsInRvcG1vc3REaXJlY3RvcnlOYW1lcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhZGRQcm9qZWN0IiwidmVyc2lvbk51bWJlciIsInJlbGVhc2UiLCJSZWxlYXNlIiwiZGlyZWN0b3J5RnJvbVBhdGgiLCJkaXJlY3RvcnkiLCJlbnRyeURpcmVjdG9yeSIsIkRpcmVjdG9yeSIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiRW50cmllcyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwiaXNOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzIiwiZW50cnkiLCJkaXJlY3RvcnlQYXRoIiwicHVzaCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwiRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCIsIkVycm9yIiwiRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIiwiZmlsZVBhdGgiLCJmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJmaWxlUmVjb2duaXNlZEZpbGUiLCJyZWR1Y2UiLCJhYnNv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