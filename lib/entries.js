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
                var filePaths1 = this.reduceEntry(function(filePaths, entry) {
                    var entryFile = entry.isFile();
                    if (entryFile) {
                        var file = entry, filePath = file.getPath();
                        filePaths.push(filePath);
                    }
                    return filePaths;
                }, []);
                return filePaths1;
            }
        },
        {
            key: "getDirectoryPaths",
            value: function getDirectoryPaths() {
                var directoryPaths1 = this.reduceEntry(function(directoryPaths, entry) {
                    var entryDirectory = entry.isDirectory();
                    if (entryDirectory) {
                        var directory = entry, directoryPath = directory.getPath();
                        directoryPaths.push(directoryPath);
                    }
                    return directoryPaths;
                }, []);
                return directoryPaths1;
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
exports.default = Entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsIkVudHJpZXMiLCJhcnJheSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJmaXJzdEVudHJ5IiwiZmlyc3RFbnRyeVBhdGgiLCJnZXRQYXRoIiwicmVtb3ZlRmlsZUJ5UGF0aCIsInBhdGgiLCJlbnRyeSIsImVudHJ5RmlsZSIsImlzRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImdldEZpbGVzIiwiZmlsZXMiLCJGaWxlcyIsImZyb21Ob3RoaW5nIiwibWFwRW50cnkiLCJhZGRGaWxlIiwiZ2V0RmlsZVBhdGhzIiwiZmlsZVBhdGhzIiwicmVkdWNlRW50cnkiLCJwdXNoIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJkaXJlY3RvcnlQYXRocyIsImVudHJ5RGlyZWN0b3J5IiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJkaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRW50cnkiLCJzb21lIiwiZXZlcnlFbnRyeSIsImV2ZXJ5IiwiZm9yRWFjaEVudHJ5IiwiZm9yRWFjaCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsInRvSlNPTiIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwianNvbiIsImZyb21KU09OIiwiRmlsZSIsIkRpcmVjdG9yeSIsImVudHJpZXMiLCJmcm9tRW50cnkiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFaUMsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRXhDLElBQUEsS0FBUSxrQ0FBUixRQUFRLEVBQUE7QUFDUCxJQUFBLE1BQVMsa0NBQVQsU0FBUyxFQUFBO0FBQ0wsSUFBQSxVQUFhLGtDQUFiLGFBQWEsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFRQSxLQUFLLEdBQWFDLFVBQWMsZUFBQSxDQUFoQ0QsS0FB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