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
            value: function fromJSON(json1) {
                var entriesJSON = json1, array = entriesJSON.map(function(entryJSON) {
                    var json = entryJSON, file = _file.default.fromJSON(json), directory = _directory.default.fromJSON(json), entry = file || directory; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJmaWx0ZXIiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiRW50cmllcyIsImFycmF5IiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyZW1vdmVGaWxlQnlQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0RmlsZXMiLCJmaWxlcyIsImZyb21Ob3RoaW5nIiwibWFwRW50cnkiLCJhZGRGaWxlIiwiZ2V0RmlsZVBhdGhzIiwiZmlsZVBhdGhzIiwicmVkdWNlRW50cnkiLCJwdXNoIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJkaXJlY3RvcnlQYXRocyIsImVudHJ5RGlyZWN0b3J5IiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJkaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRW50cnkiLCJzb21lIiwiZXZlcnlFbnRyeSIsImV2ZXJ5IiwiZm9yRWFjaEVudHJ5IiwiZm9yRWFjaCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsInRvSlNPTiIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwianNvbiIsImZyb21KU09OIiwiZW50cmllcyIsImZyb21FbnRyeSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFa0MsR0FBVyxDQUFYLFVBQVc7QUFFeEMsR0FBUSxDQUFSLEtBQVE7QUFDUCxHQUFTLENBQVQsTUFBUztBQUNMLEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLEdBQUssQ0FBR0EsS0FBSyxHQU5pQyxVQUFXLGdCQU1qREEsS0FBSyxFQUFFQyxNQUFNLEdBTnlCLFVBQVcsZ0JBTTFDQSxNQUFNLEVBQ2JDLDRCQUE0QixHQVBVLFVBQVcsZUFPakRBLDRCQUE0QjtJQUVmQyxPQUFPLGlCQUFiLFFBQVE7YUFBRkEsT0FBTyxDQUNkQyxLQUFLOzhCQURFRCxPQUFPO1FBRXhCLElBQUksQ0FBQ0MsS0FBSyxHQUFH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