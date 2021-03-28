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
import File1 from "./file";
var Files = function() {
    function Files(array) {
        _classCallCheck(this, Files);
        this.array = array;
    }
    _createClass(Files, [
        {
            key: "getFilePaths",
            value: function getFilePaths() {
                var filePaths = this.mapFile(function(file) {
                    var filePath = file.getPath();
                    return filePath;
                });
                return filePaths;
            }
        },
        {
            key: "addFile",
            value: function addFile(file) {
                this.array.push(file);
            }
        },
        {
            key: "mapFile",
            value: function mapFile(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "someFile",
            value: function someFile(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "reduceFile",
            value: function reduceFile(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachFile",
            value: function forEachFile(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "findFile",
            value: function findFile(callback) {
                return this.array.find(callback) || null; ///
            }
        },
        {
            key: "save",
            value: function save(projectsDirectoryPath) {
                this.array.forEach(function(file) {
                    file.save(projectsDirectoryPath);
                });
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var filesJSON = this.array.map(function(file) {
                    var fileJSON = file !== null ? file.toJSON() : null;
                    return fileJSON;
                }), json = filesJSON;
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var filesJSON = json, array = [], files = new Files(array);
                filesJSON.forEach(function(fileJSON) {
                    var json1 = fileJSON, file = File1.fromJSON(json1);
                    files.addFile(file);
                });
                return files;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], files = new Files(array);
                return files;
            }
        },
        {
            key: "fromPaths",
            value: function fromPaths(paths, projectsDirectoryPath) {
                var array = [], files = new Files(array);
                paths.forEach(function(path) {
                    var file = File1.fromPath(path, projectsDirectoryPath);
                    files.addFile(file);
                });
                return files;
            }
        }
    ]);
    return Files;
}();
export { Files as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgZmlsZS5zYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG4gICAgfSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBmaWxlc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcbiAgICBcbiAgICBmaWxlc0pTT04uZm9yRWFjaCgoZmlsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBmaWxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbik7XG5cbiAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRocyhwYXRocywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG5cbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gRmlsZS5mcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FFTCxLQUFJLE9BQU0sTUFBUTtJQUVKLEtBQUs7YUFBTCxLQUFLLENBQ1osS0FBSzs4QkFERSxLQUFLO2FBRWpCLEtBQUssR0FBRyxLQUFLOztpQkFGRCxLQUFLOztBQUt4QixlQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZO29CQUNKLFNBQVMsUUFBUSxPQUFPLFVBQUUsSUFBSTt3QkFDNUIsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPOzJCQUV0QixRQUFROzt1QkFHVixTQUFTOzs7O0FBR2xCLGVBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxJQUFJO3FCQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztBQUd0QixlQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsUUFBUTs0QkFDRixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVE7Ozs7QUFHaEMsZUFBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxDQUFDLFFBQVE7NEJBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFROzs7O0FBR2pDLGVBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWTs0QkFDbkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsWUFBWTs7OztBQUdqRCxlQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLENBQUMsUUFBUTtxQkFDYixLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVE7Ozs7QUFHN0IsZUFBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxDQUFDLFFBQVE7NEJBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7OztBQUcvQyxlQUFJLEdBQUosSUFBSTs0QkFBSixJQUFJLENBQUMscUJBQXFCO3FCQUNuQixLQUFLLENBQUMsT0FBTyxVQUFFLElBQUk7QUFDdEIsd0JBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCOzs7OztBQUluQyxlQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNO29CQUNFLFNBQVMsUUFBUSxLQUFLLENBQUMsR0FBRyxVQUFFLElBQUk7d0JBQ3hCLFFBQVEsR0FBSSxJQUFJLEtBQUssSUFBSSxHQUNYLElBQUksQ0FBQyxNQUFNLEtBQ1QsSUFBSTsyQkFFbkIsUUFBUTtvQkFFakIsSUFBSSxHQUFHLFNBQVM7dUJBRWYsSUFBSTs7Ozs7QUFHTixlQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsSUFBSTtvQkFDWixTQUFTLEdBQUcsSUFBSSxFQUNoQixLQUFLLE9BQ0wsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFLO0FBRTdCLHlCQUFTLENBQUMsT0FBTyxVQUFFLFFBQVE7d0JBQ25CLEtBQUksR0FBRyxRQUFRLEVBQ2YsSUFBSSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSTtBQUUvQix5QkFBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJOzt1QkFHYixLQUFLOzs7O0FBR1AsZUFBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDVixLQUFLLE9BQ0wsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFLO3VCQUV0QixLQUFLOzs7O0FBR1AsZUFBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLEtBQUssRUFBRSxxQkFBcUI7b0JBQ3JDLEtBQUssT0FDTCxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQUs7QUFFN0IscUJBQUssQ0FBQyxPQUFPLFVBQUUsSUFBSTt3QkFDWCxJQUFJLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUscUJBQXFCO0FBRXRELHlCQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7O3VCQUdiLEtBQUs7Ozs7V0ExRkssS0FBSzs7U0FBTCxLQUFLIn0=