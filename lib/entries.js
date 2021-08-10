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
        }
    ]);
    return Entries;
}();
exports.default = Entries;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWtDLEdBQVcsQ0FBWCxVQUFXO0FBRXhDLEdBQVEsQ0FBUixLQUFRO0FBQ1AsR0FBUyxDQUFULE1BQVM7QUFDTCxHQUFhLENBQWIsVUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxHQUFLLENBQUcsS0FBSyxHQU5pQyxVQUFXLGdCQU1qRCxLQUFLLEVBQUUsTUFBTSxHQU55QixVQUFXLGdCQU0xQyxNQUFNLEVBQ2IsNEJBQTRCLEdBUFUsVUFBVyxlQU9qRCw0QkFBNEI7SUFFZixPQUFPO2FBQVAsT0FBTyxDQUNkLEtBQUs7OEJBREUsT0FBTzthQUVuQixLQUFLLEdBQUcsS0FBSzs7aUJB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