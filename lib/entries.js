"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _file = _interopRequireDefault(require("./file"));
var _files = _interopRequireDefault(require("./files"));
var _directory = _interopRequireDefault(require("./directory"));
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
            key: "fromEntry",
            value: function fromEntry(entry) {
                var array = [
                    entry
                ], entries = new Entries(array);
                return entries;
            }
        }
    ]);
    return Entries;
}();
exports.default = Entries;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVrQyxHQUFXLENBQVgsVUFBVztBQUV4QyxHQUFRLENBQVIsS0FBUTtBQUNQLEdBQVMsQ0FBVCxNQUFTO0FBQ0wsR0FBYSxDQUFiLFVBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsR0FBSyxDQUFHLEtBQUssR0FO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