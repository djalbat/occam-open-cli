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
            key: "getFile",
            value: function getFile(filePath) {
                var files = this.getFiles(), file = files.find(function(file) {
                    var path = file.getPath();
                    if (path === filePath) {
                        return true;
                    }
                }) || null;
                return file;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZpbGUgPSBmaWxlcy5maW5kKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXRoID09PSBmaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IEZpbGVzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLm1hcEVudHJ5KChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5OyAvLy9cblxuICAgICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMucmVkdWNlRW50cnkoKGZpbGVQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZmlsZVBhdGhzLnB1c2goZmlsZVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsZVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICBnZXREaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRocyA9IHRoaXMucmVkdWNlRW50cnkoKGRpcmVjdG9yeVBhdGhzLCBlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBlbnRyeS5pc0RpcmVjdG9yeSgpO1xuXG4gICAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5ID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5LmdldFBhdGgoKTtcblxuICAgICAgICBkaXJlY3RvcnlQYXRocy5wdXNoKGRpcmVjdG9yeVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGZpbGUpO1xuICB9XG5cbiAgbWFwRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5RW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaEVudHJ5KGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VFbnRyeShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBlbnRyaWVzSlNPTi5tYXAoKGVudHJ5SlNPTikgPT4ge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGVudHJ5SlNPTiwgLy8vXG4gICAgICAgICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgIGVudHJ5ID0gZmlsZSB8fCBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRW50cnkoZW50cnkpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgICAgICAgIGVudHJ5XG4gICAgICAgICAgXSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRW50cmllcyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsImFycmF5IiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyZW1vdmVGaWxlQnlQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0RmlsZSIsImZpbGVzIiwiZ2V0RmlsZXMiLCJmaW5kIiwiRmlsZXMiLCJmcm9tTm90aGluZyIsIm1hcEVudHJ5IiwiYWRkRmlsZSIsImdldEZpbGVQYXRocyIsImZpbGVQYXRocyIsInJlZHVjZUVudHJ5IiwicHVzaCIsImdldERpcmVjdG9yeVBhdGhzIiwiZGlyZWN0b3J5UGF0aHMiLCJlbnRyeURpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsImNhbGxiYWNrIiwibWFwIiwic29tZUVudHJ5Iiwic29tZSIsImV2ZXJ5RW50cnkiLCJldmVyeSIsImZvckVhY2hFbnRyeSIsImZvckVhY2giLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImVudHJ5SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkZpbGUiLCJEaXJlY3RvcnkiLCJlbnRyaWVzIiwiZnJvbUVudHJ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUeUI7eURBRTdCOzBEQUNDOzhEQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDLFFBQ1QsQUFBRUMsK0JBQWlDQyx3QkFBYSxDQUE5Q0Q7QUFFTyxJQUFBLEFBQU1KLHdCQUFOO2FBQU1BLFFBQ1BNLEtBQUs7OEJBREVOO1FBRWpCLElBQUksQ0FBQ00sS0FBSyxHQUFHQTs7aUJBRklOOztZQUtuQk8sS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQjtnQkFDeEIsSUFBSUMsdUJBQXVCLElBQUk7Z0JBRS9CLElBQU1DLGFBQWFSLE1BQU0sSUFBSSxDQUFDSyxLQUFLLEdBQUcsR0FBRztnQkFFekMsSUFBSUcsWUFBWTtvQkFDZCxJQUFNQyxpQkFBaUJELFdBQVdFLE9BQU87b0JBRXpDSCx1QkFBdUJKLDZCQUE2Qk07b0JBRXBELElBQUlGLHlCQUF5QixJQUFJLEVBQUU7d0JBQ2pDQSx1QkFBdUJFO29CQUN6QixDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLElBQUksRUFBRTtnQkFDckJWLE9BQU8sSUFBSSxDQUFDRyxLQUFLLEVBQUUsU0FBQ1EsT0FBVTtvQkFDNUIsSUFBTUMsWUFBWUQsTUFBTUUsTUFBTTtvQkFFOUIsSUFBSUQsV0FBVzt3QkFDYixJQUFNRSxPQUFPSCxPQUNQSSxXQUFXRCxLQUFLTixPQUFPO3dCQUU3QixJQUFJTyxhQUFhTCxNQUFNOzRCQUNyQixPQUFPLEtBQUs7d0JBQ2QsQ0FBQztvQkFDSCxDQUFDO29CQUVELE9BQU8sSUFBSTtnQkFDYjtZQUNGOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFELFFBQVEsRUFB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