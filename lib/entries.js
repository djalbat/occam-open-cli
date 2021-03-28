"use strict";
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
import { pathUtilities, arrayUtilities, asynchronousUtilities, fileSystemUtilities } from "necessary";
import File1 from "./file";
import Files from "./files";
import Directory from "./directory";
import { isNameHiddenName } from "./utilities/name";
import { ENTRIES_MAXIMUM_ARRAY_LENGTH } from "./constants";
import { isFilePathRecognisedFilePath } from "./utilities/filePath";
import { ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE } from "./messages";
var first = arrayUtilities.first, filter = arrayUtilities.filter, readDirectory = fileSystemUtilities.readDirectory, concatenatePaths = pathUtilities.concatenatePaths, topmostDirectoryNameFromPath = pathUtilities.topmostDirectoryNameFromPath;
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
                var files = Files.fromNothing();
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
                    var json1 = entryJSON, file = File1.fromJSON(json1), directory = Directory.fromJSON(json1), entry = file || directory; ///
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
export { Entries as default };
function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath), subEntryNames = readDirectory(absoluteDirectoryPath);
    subEntryNames.forEach(function(subEntryName) {
        var subEntryNameHiddenName = isNameHiddenName(subEntryName), subEntryNameNotHiddenName = !subEntryNameHiddenName, loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories, loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;
        if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
            var entry;
            var path = concatenatePaths(relativeDirectoryPath, subEntryName), directory = Directory.fromPath(path, projectsDirectoryPath);
            if (directory !== null) {
                var directoryPath = path; ///
                if (loadUnrecognisedFilesAndDirectories) {
                    entry = directory; ///
                    array.push(entry); ///
                    var arrayLength = array.length;
                    if (arrayLength > ENTRIES_MAXIMUM_ARRAY_LENGTH) {
                        throw new Error(ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE);
                    }
                }
                entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories); ///
            } else {
                var file = File1.fromPath(path, projectsDirectoryPath);
                if (file !== null) {
                    var filePath = file.getPath(), filePathRecognisedFilePath = isFilePathRecognisedFilePath(filePath), fileRecognisedFile = filePathRecognisedFilePath; ///
                    if (fileRecognisedFile || loadUnrecognisedFilesAndDirectories) {
                        entry = file; ///
                        array.push(entry); ///
                        var arrayLength = array.length;
                        if (arrayLength > ENTRIES_MAXIMUM_ARRAY_LENGTH) {
                            throw new Error(ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE);
                        }
                    }
                }
            }
        }
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgRmlsZXMgZnJvbSBcIi4vZmlsZXNcIjtcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSBcIi4vZGlyZWN0b3J5XCI7XG5cbmltcG9ydCB7IGlzTmFtZUhpZGRlbk5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlUGF0aFwiO1xuaW1wb3J0IHsgRU5UUklFU19NQVhJTVVNX0FSUkFZX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cmllcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKSB7XG4gICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaXJzdEVudHJ5ID0gZmlyc3QodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgaWYgKGZpcnN0RW50cnkpIHsgLy8vXG4gICAgICBjb25zdCBmaXJzdEVudHJ5UGF0aCA9IGZpcnN0RW50cnkuZ2V0UGF0aCgpO1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlyc3RFbnRyeVBhdGgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBmaXJzdEVudHJ5UGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICByZW1vdmVGaWxlQnlQYXRoKHBhdGgpIHtcbiAgICBmaWx0ZXIodGhpcy5hcnJheSwgKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gRmlsZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMubWFwRW50cnkoKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnk7IC8vL1xuXG4gICAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZmlsZVBhdGhzLCBlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBmaWxlUGF0aHMucHVzaChmaWxlUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZGlyZWN0b3J5UGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGVudHJ5LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnkuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGhzLnB1c2goZGlyZWN0b3J5UGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZmlsZSk7XG4gIH1cblxuICBtYXBFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRW50cnkoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUVudHJ5KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IGVudHJpZXNKU09OLm1hcCgoZW50cnlKU09OKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cblxuICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgY29uc3QgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGFycmF5LCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKChzdWJFbnRyeU5hbWUpID0+IHtcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzLFxuICAgICAgICAgIGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzID0gIWxvYWRPbmx5UmVjb2duaXNlZEZpbGVzO1xuXG4gICAgaWYgKHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgfHwgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgIGxldCBlbnRyeTtcblxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xuXG4gICAgICAgIGlmIChsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICBhcnJheS5wdXNoKGVudHJ5KTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoYXJyYXksIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgZmlsZVJlY29nbmlzZWRGaWxlID0gZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgIGlmIChmaWxlUmVjb2duaXNlZEZpbGUgfHwgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICAgICAgICAgIGFycmF5LnB1c2goZW50cnkpOyAgLy8vXG5cbiAgICAgICAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoYXJyYXlMZW5ndGggPiBFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fQVJSQVlfTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJu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