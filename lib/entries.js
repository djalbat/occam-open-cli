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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbInBhdGhVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIkZpbGUiLCJGaWxlcyIsIkRpcmVjdG9yeSIsImZpcnN0IiwiZmlsdGVyIiwidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsIkVudHJpZXMiLCJjb25zdHJ1Y3RvciIsImFycmF5IiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyZW1vdmVGaWxlQnlQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0RmlsZXMiLCJmaWxlcyIsImZyb21Ob3RoaW5nIiwibWFwRW50cnkiLCJhZGRGaWxlIiwiZ2V0RmlsZVBhdGhzIiwiZmlsZVBhdGhzIiwicmVkdWNlRW50cnkiLCJwdXNoIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJkaXJlY3RvcnlQYXRocyIsImVudHJ5RGlyZWN0b3J5IiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJkaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRW50cnkiLCJzb21lIiwiZXZlcnlFbnRyeSIsImV2ZXJ5IiwiZm9yRWFjaEVudHJ5IiwiZm9yRWFjaCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsInRvSlNPTiIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwianNvbiIsImZyb21KU09OIiwiZW50cmllcyIsImZyb21FbnRyeSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFa0MsR0FBVyxDQUFYLFVBQVc7QUFFeEMsR0FBUSxDQUFSLEtBQVE7QUFDUCxHQUFTLENBQVQsTUFBUztBQUNMLEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLEdBQUssQ0FBRyxLQUFLLEdBTmlDLFVBQVcs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akMsTUFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQzs7O1lBRU0sR0FBUyxHQUFULFNBQVM7bUJBQWhCLFFBQVEsQ0FBRCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztvQkFDUCxLQUFLO2dCQUNQLENBQUMsRUFDRCxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dCQUVqQyxNQUFNLENBQUMsT0FBTztZQUNoQixDQUFDOzs7WUFFTSxHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUNWLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUs7Z0JBRWpDLE1BQU0sQ0FBQyxPQUFPO1lBQ2hCLENBQUM7OztXQWhKa0IsT0FBTzs7a0JBQVAsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG4iXX0=