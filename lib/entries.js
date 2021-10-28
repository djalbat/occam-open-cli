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
        }
    ]);
    return Entries;
}();
exports.default = Entries;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImZpbHRlciIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJFbnRyaWVzIiwiYXJyYXkiLCJnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsImZpcnN0RW50cnlQYXRoIiwiZ2V0UGF0aCIsInJlbW92ZUZpbGVCeVBhdGgiLCJwYXRoIiwiZW50cnkiLCJlbnRyeUZpbGUiLCJpc0ZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRGaWxlcyIsImZpbGVzIiwiZnJvbU5vdGhpbmciLCJtYXBFbnRyeSIsImFkZEZpbGUiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJnZXREaXJlY3RvcnlQYXRocyIsImRpcmVjdG9yeVBhdGhzIiwiZW50cnlEaXJlY3RvcnkiLCJpc0RpcmVjdG9yeSIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJjYWxsYmFjayIsIm1hcCIsInNvbWVFbnRyeSIsInNvbWUiLCJldmVyeUVudHJ5IiwiZXZlcnkiLCJmb3JFYWNoRW50cnkiLCJmb3JFYWNoIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwidG9KU09OIiwiZW50cmllc0pTT04iLCJlbnRyeUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJlbnRyaWVzIiwiZnJvbUVudHJ5Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVrQyxHQUFXLENBQVgsVUFBVztBQUV4QyxHQUFRLENBQVIsS0FBUTtBQUNQLEdBQVMsQ0FBVCxNQUFTO0FBQ0wsR0FBYSxDQUFiLFVBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsR0FBSyxDQUFHQSxLQUFLLEdBTmlDLFVBQVcsZ0JBTWpEQSxLQUFLLEVBQUVDLE1BQU0sR0FOeUIsVUFBVyxnQkFNMUNBLE1BQU0sRUFDYkMsNEJBQTRCLEdBUFUsVUFBVyxlQU9qREEsNEJBQTRCO0lBRWZDLE9BQU8saUJBQWIsUUFBUTthQUFGQSxPQUFPLENBQ2RDLEtBQUs7OEJBREVELE9BQU87UUFFeEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7O2lCQUZERCxPQUFPOztZQUsxQkUsR0FBdUIsRUFBdkJBLENBQXVCO21CQUF2QkEsUUFBUSxDQUFSQSx1QkFBdUIsR0FBRyxDQUFDO2dCQUN6QixHQUFHLENBQUNDLG9CQUFvQixHQUFHLElBQUk7Z0JBRS9CLEdBQUssQ0FBQ0MsVUFBVSxHQUFHUCxLQUFLLENBQUMsSUFBSSxDQUFDSSxLQUFLLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV6QyxFQUFFLEVBQUVHLFVBQVUsRUFBRSxDQUFDO29CQUNmLEdBQUssQ0FBQ0MsY0FBYyxHQUFHRCxVQUFVLENBQUNFLE9BQU87b0JBRXpDSCxvQkFBb0IsR0FBR0osNEJBQTRCLENBQUNNLGNBQWM7b0JBRWxFLEVBQUUsRUFBRUYsb0JBQW9CLEtBQUssSUFBSSxFQUFFLENBQUM7d0JBQ2xDQSxvQkFBb0IsR0FBR0UsY0FBYztvQkFDdkMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE1BQU0sQ0FBQ0Ysb0JBQW9CO1lBQzdCLENBQUM7OztZQUVESSxHQUFnQixFQUFoQkEsQ0FBZ0I7bUJBQWhCQSxRQUFRLENBQVJBLGdCQUFnQixDQUFDQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEJWLE1BQU0sQ0FBQyxJQUFJLENBQUNHLEtBQUssRUFBRSxRQUFRLENBQVBRLEtBQUssRUFBSyxDQUFDO29CQUM3QixHQUFLLENBQUNDLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxNQUFNO29CQUU5QixFQUFFLEVBQUVELFNBQVMsRUFBRSxDQUFDO3dCQUNkLEdBQUssQ0FBQ0UsSUFBSSxHQUFHSCxLQUFLLEVBQ1pJLFFBQVEsR0FBR0QsSUFBSSxDQUFDTixPQUFPO3dCQUU3QixFQUFFLEVBQUVPLFFBQVEsS0FBS0wsSUFBSSxFQUFFLENBQUM7NEJBQ3RCLE1BQU0sQ0FBQyxLQUFLO3dCQUNkLENBQUM7b0JBQ0gsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSTtnQkFDYixDQUFDO1lBQ0gsQ0FBQzs7O1lBRURNLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUNDLEtBQUssR0EvQ0csTUFBUyxTQStDSEMsV0FBVztnQkFFL0IsSUFBSSxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFQUixLQUFLLEVBQUssQ0FBQztvQkFDeEIsR0FBSyxDQUFDQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsTUFBTTtvQkFFOUIsRUFBRSxFQUFFRCxTQUFTLEVBQUUsQ0FBQzt3QkFDZCxHQUFLLENBQUNFLElBQUksR0FBR0gsS0FBSyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt3QkFFdkJNLEtBQUssQ0FBQ0csT0FBTyxDQUFDTixJQUFJO29CQUNwQixDQUFDO2dCQUNILENBQUM7Z0JBRUQsTUFBTSxDQUFDRyxLQUFLO1lBQ2QsQ0FBQzs7O1lBRURJLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLEdBQUcsQ0FBQztnQkFDZCxHQUFLLENBQUNDLFVBQVMsR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxRQUFRLENBQVBELFNBQVMsRUFBRVgsS0FBSyxFQUFLLENBQUM7b0JBQ3hELEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCxLQUFLLENBQUNFLE1BQU07b0JBRTlCLEVBQUUsRUFBRUQsU0FBUyxFQUFFLENBQUM7d0JBQ2QsR0FBSyxDQUFDRSxJQUFJLEdBQUdILEtBQUssRUFDWkksUUFBUSxHQUFHRCxJQUFJLENBQUNOLE9BQU87d0JBRTdCYyxTQUFTLENBQUNFLElBQUksQ0FBQ1QsUUFBUTtvQkFDekIsQ0FBQztvQkFFRCxNQUFNLENBQUNPLFNBQVM7Z0JBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRUwsTUFBTSxDQUFDQSxVQUFTO1lBQ2xCLENBQUM7OztZQUVERyxHQUFpQixFQUFqQkEsQ0FBaUI7bUJBQWpCQSxRQUFRLENBQVJBLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLEdBQUssQ0FBQ0MsZUFBYyxHQUFHLElBQUksQ0FBQ0gsV0FBVyxDQUFDLFFBQVEsQ0FBUEcsY0FBYyxFQUFFZixLQUFLLEVBQUssQ0FBQztvQkFDbEUsR0FBSyxDQUFDZ0IsY0FBYyxHQUFHaEIsS0FBSyxDQUFDaUIsV0FBVztvQkFFeEMsRUFBRSxFQUFFRCxjQUFjLEVBQUUsQ0FBQzt3QkFDbkIsR0FBSyxDQUFDRSxTQUFTLEdBQUdsQixLQUFLLEVBQ2pCbUIsYUFBYSxHQUFHRCxTQUFTLENBQUNyQixPQUFPO3dCQUV2Q2tCLGNBQWMsQ0FBQ0YsSUFBSSxDQUFDTSxhQUFhO29CQUNuQyxDQUFDO29CQUVELE1BQU0sQ0FBQ0osY0FBYztnQkFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFTCxNQUFNLENBQUNBLGVBQWM7WUFDdkIsQ0FBQzs7O1lBRUROLEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUU4sQ0FBUk0sT0FBTyxDQUFDTixJQUFJLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUNYLEtBQUssQ0FBQ3FCLElBQUksQ0FBQ1YsSUFBSTtZQUN0QixDQUFDOzs7WUFFREssR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsQ0FBQ1ksUUFBUSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzVCLEtBQUssQ0FBQzZCLEdBQUcsQ0FBQ0QsUUFBUTtZQUFHLENBQUM7OztZQUV2REUsR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsQ0FBQ0YsUUFBUSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzVCLEtBQUssQ0FBQytCLElBQUksQ0FBQ0gsUUFBUTtZQUFHLENBQUM7OztZQUV6REksR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsQ0FBQ0osUUFBUSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzVCLEtBQUssQ0FBQ2lDLEtBQUssQ0FBQ0wsUUFBUTtZQUFHLENBQUM7OztZQUUzRE0sR0FBWSxFQUFaQSxDQUFZO21CQUFaQSxRQUFRLENBQVJBLFlBQVksQ0FBQ04sUUFBUSxFQUFFLENBQUM7Z0JBQUMsSUFBSSxDQUFDNUIsS0FBSyxDQUFDbUMsT0FBTyxDQUFDUCxRQUFRO1lBQUcsQ0FBQzs7O1lBRXhEUixHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDUSxRQUFRLEVBQUVRLFlBQVksRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUNwQyxLQUFLLENBQUNxQyxNQUFNLENBQUNULFFBQVEsRUFBRVEsWUFBWTtZQUFHLENBQUM7OztZQUV6RkUsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ3ZDLEtBQUssQ0FBQzZCLEdBQUcsQ0FBQyxRQUFRLENBQVByQixLQUFLLEVBQUssQ0FBQztvQkFDdkMsR0FBSyxDQUFDZ0MsU0FBUyxHQUFHaEMsS0FBSyxDQUFDOEIsTUFBTTtvQkFFOUIsTUFBTSxDQUFDRSxTQUFTO2dCQUNsQixDQUFDLEdBQ0RDLElBQUksR0FBR0YsV0FBVyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFN0IsTUFBTSxDQUFDRSxJQUFJO1lBQ2IsQ0FBQzs7OztZQUVNQyxHQUFRLEVBQVJBLENBQVE7bUJBQWYsUUFBUSxDQUFEQSxRQUFRLENBQUNELEtBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFLLENBQUNGLFdBQVcsR0FBR0UsS0FBSSxFQUNsQnpDLEtBQUssR0FBR3VDLFdBQVcsQ0FBQ1YsR0FBRyxDQUFDLFFBQVEsQ0FBUFcsU0FBUyxFQUFLLENBQUM7b0JBQ3RDLEdBQUssQ0FBQ0MsSUFBSSxHQUFHRCxTQUFTLEVBQ2hCN0IsSUFBSSxHQTlITCxLQUFRLFNBOEhLK0IsUUFBUSxDQUFDRCxJQUFJLEdBQ3pCZixTQUFTLEdBN0hMLFVBQWEsU0E2SEtnQixRQUFRLENBQUNELElBQUksR0FDbkNqQyxLQUFLLEdBQUdHLElBQUksSUFBSWUsU0FBUyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFckMsTUFBTSxDQUFDbEIsS0FBSztnQkFDZCxDQUFDLEdBQ0RtQyxPQUFPLEdBQUcsR0FBRyxDQUFDNUMsT0FBTyxDQUFDQyxLQUFLO2dCQUVqQyxNQUFNLENBQUMyQyxPQUFPO1lBQ2hCLENBQUM7OztZQUVNQyxHQUFTLEVBQVRBLENBQVM7bUJBQWhCLFFBQVEsQ0FBREEsU0FBUyxDQUFDcEMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQ1IsS0FBSyxHQUFHLENBQUM7b0JBQ1BRLEtBQUs7Z0JBQ1AsQ0FBQyxFQUNEbUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzVDLE9BQU8sQ0FBQ0MsS0FBSztnQkFFakMsTUFBTSxDQUFDMkMsT0FBTztZQUNoQixDQUFDOzs7V0F6SWtCNUMsT0FBTzs7a0JBQVBBLE9BQU8ifQ==