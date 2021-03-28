"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _file = _interopRequireDefault(require("./file"));
var _files = _interopRequireDefault(require("./files"));
var _directory = _interopRequireDefault(require("./directory"));
var _name = require("./utilities/name");
var _constants = require("./constants");
var _filePath = require("./utilities/filePath");
var _messages = require("./messages");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, readDirectory = _necessary.fileSystemUtilities.readDirectory, concatenatePaths = _necessary.pathUtilities.concatenatePaths, topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath;
var Entries = function() {
    function Entries(array) {
        _classCallCheck(this, Entries);
        this.array = array;
    }
    _createClass(Entries, [
        {
            key: "getTopmostDirectoryName",
            value: function getTopmostDirectoryName() {
                var topmostDirectoryName = null;
                var firstEntry = first(this.array); ///
                if (firstEntry) {
                    var firstEntryPath = firstEntry.getPath();
                    topmostDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);
                    if (topmostDirectoryName === null) {
                        topmostDirectoryName = firstEntryPath;
                    }
                }
                return topmostDirectoryName;
            }
        },
        {
            key: "removeFileByPath",
            value: function removeFileByPath(path) {
                filter(this.array, function(entry) {
                    var entryFile = entry.isFile();
                    if (entryFile) {
                        var file = entry, filePath = file.getPath();
                        if (filePath === path) {
                            return false;
                        }
                    }
                    return true;
                });
            }
        },
        {
            key: "getFiles",
            value: function getFiles() {
                var files = _files.default.fromNothing();
                this.mapEntry(function(entry) {
                    var entryFile = entry.isFile();
                    if (entryFile) {
                        var file = entry; ///
                        files.addFile(file);
                    }
                });
                return files;
            }
        },
        {
            key: "getFilePaths",
            value: function getFilePaths() {
                var filePaths = this.reduceEntry(function(filePaths1, entry) {
                    var entryFile = entry.isFile();
                    if (entryFile) {
                        var file = entry, filePath = file.getPath();
                        filePaths1.push(filePath);
                    }
                    return filePaths1;
                }, []);
                return filePaths;
            }
        },
        {
            key: "getDirectoryPaths",
            value: function getDirectoryPaths() {
                var directoryPaths = this.reduceEntry(function(directoryPaths1, entry) {
                    var entryDirectory = entry.isDirectory();
                    if (entryDirectory) {
                        var directory = entry, directoryPath = directory.getPath();
                        directoryPaths1.push(directoryPath);
                    }
                    return directoryPaths1;
                }, []);
                return directoryPaths;
            }
        },
        {
            key: "addFile",
            value: function addFile(file) {
                this.array.push(file);
            }
        },
        {
            key: "mapEntry",
            value: function mapEntry(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "someEntry",
            value: function someEntry(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "everyEntry",
            value: function everyEntry(callback) {
                return this.array.every(callback);
            }
        },
        {
            key: "forEachEntry",
            value: function forEachEntry(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "reduceEntry",
            value: function reduceEntry(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var entriesJSON = this.array.map(function(entry) {
                    var entryJSON = entry.toJSON();
                    return entryJSON;
                }), json = entriesJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var entriesJSON = json, array = entriesJSON.map(function(entryJSON) {
                    var json1 = entryJSON, file = _file.default.fromJSON(json1), directory = _directory.default.fromJSON(json1), entry = file || directory; ///
                    return entry;
                }), entries = new Entries(array);
                return entries;
            }
        },
        {
            key: "fromTopmostDirectoryName",
            value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
                var array = [], relativeDirectoryPath = topmostDirectoryName; ///
                entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
                var entries = new Entries(array);
                return entries;
            }
        }
    ]);
    return Entries;
}();
exports.default = Entries;
function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath), subEntryNames = readDirectory(absoluteDirectoryPath);
    subEntryNames.forEach(function(subEntryName) {
        var subEntryNameHiddenName = _name.isNameHiddenName(subEntryName), subEntryNameNotHiddenName = !subEntryNameHiddenName, loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories, loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;
        if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
            var entry;
            var path = concatenatePaths(relativeDirectoryPath, subEntryName), directory = _directory.default.fromPath(path, projectsDirectoryPath);
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
                var file = _file.default.fromPath(path, projectsDirectoryPath);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgRmlsZXMgZnJvbSBcIi4vZmlsZXNcIjtcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSBcIi4vZGlyZWN0b3J5XCI7XG5cbmltcG9ydCB7IGlzTmFtZUhpZGRlbk5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlUGF0aFwiO1xuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cmllcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKSB7XG4gICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkpIHsgLy8vXG4gICAgICBjb25zdCBmaXJzdEVudHJ5UGF0aCA9IGZpcnN0RW50cnkuZ2V0UGF0aCgpO1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlyc3RFbnRyeVBhdGgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBmaXJzdEVudHJ5UGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICByZW1vdmVGaWxlQnlQYXRoKHBhdGgpIHtcbiAgICBmaWx0ZXIodGhpcy5hcnJheSwgKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gRmlsZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMubWFwRW50cnkoKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnk7IC8vL1xuXG4gICAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZmlsZVBhdGhzLCBlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBmaWxlUGF0aHMucHVzaChmaWxlUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZGlyZWN0b3J5UGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGVudHJ5LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnkuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGhzLnB1c2goZGlyZWN0b3J5UGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZmlsZSk7XG4gIH1cblxuICBtYXBFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRW50cnkoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUVudHJ5KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IGVudHJpZXNKU09OLm1hcCgoZW50cnlKU09OKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKChzdWJFbnRyeU5hbWUpID0+IHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLFxuICAgICAgICAgIGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzID0gIWxvYWRPbmx5UmVjb2duaXNlZEZpbGVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xuXG4gICAgICAgIGlmIChsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgZmlsZVJlY29nbmlzZWRGaWxlID0gZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgIGlmIChmaWxlUmVjb2duaXNlZEZpbGUgfHwgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJu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