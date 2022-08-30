"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Entries;
    }
});
var _necessary = require("necessary");
var _file = /*#__PURE__*/ _interopRequireDefault(require("./file"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("./files"));
var _directory = /*#__PURE__*/ _interopRequireDefault(require("./directory"));
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
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath;
var Entries = /*#__PURE__*/ function() {
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
                var filePaths = this.reduceEntry(function(filePaths, entry) {
                    var entryFile = entry.isFile();
                    if (entryFile) {
                        var file = entry, filePath = file.getPath();
                        filePaths.push(filePath);
                    }
                    return filePaths;
                }, []);
                return filePaths;
            }
        },
        {
            key: "getDirectoryPaths",
            value: function getDirectoryPaths() {
                var directoryPaths = this.reduceEntry(function(directoryPaths, entry) {
                    var entryDirectory = entry.isDirectory();
                    if (entryDirectory) {
                        var directory = entry, directoryPath = directory.getPath();
                        directoryPaths.push(directoryPath);
                    }
                    return directoryPaths;
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
                    var _$json = entryJSON, file = _file.default.fromJSON(_$json), directory = _directory.default.fromJSON(_$json), entry = file || directory; ///
                    return entry;
                }), entries = new Entries(array);
                return entries;
            }
        },
        {
            key: "fromEntry",
            value: function fromEntry(entry) {
                var array = [
                    entry
                ], entries = new Entries(array);
                return entries;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], entries = new Entries(array);
                return entries;
            }
        }
    ]);
    return Entries;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVudHJpZXMiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsInBhdGhVdGlsaXRpZXMiLCJhcnJheSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicmVtb3ZlRmlsZUJ5UGF0aCIsInBhdGgiLCJlbnRyeSIsImVudHJ5RmlsZSIsImlzRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImdldEZpbGVzIiwiZmlsZXMiLCJGaWxlcyIsImZyb21Ob3RoaW5nIiwibWFwRW50cnkiLCJhZGRGaWxlIiwiZ2V0RmlsZVBhdGhzIiwiZmlsZVBhdGhzIiwicmVkdWNlRW50cnkiLCJwdXNoIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJkaXJlY3RvcnlQYXRocyIsImVudHJ5RGlyZWN0b3J5IiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJkaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRW50cnkiLCJzb21lIiwiZXZlcnlFbnRyeSIsImV2ZXJ5IiwiZm9yRWFjaEVudHJ5IiwiZm9yRWFjaCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsInRvSlNPTiIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwianNvbiIsImZyb21KU09OIiwiRmlsZSIsIkRpcmVjdG9yeSIsImVudHJpZXMiLCJmcm9tRW50cnkiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVdRQSxPQUFPOzs7eUJBVGtCLFdBQVc7eURBRXhDLFFBQVE7MERBQ1AsU0FBUzs4REFDTCxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQVFDLEtBQUssR0FBYUMsVUFBYyxlQUFBLENBQWhDRCxLQUFLLEVBQUVFLE1BQU0sR0FBS0QsVUFBYyxlQUFBLENBQXpCQyxNQUFNLEVBQ2YsQUFBRUMsNEJBQTRCLEdBQUtD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