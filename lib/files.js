"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _file = _interopRequireDefault(require("./file"));
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
                    var json1 = fileJSON, file = _file.default.fromJSON(json1);
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
        }
    ]);
    return Files;
}();
exports.default = Files;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBmaWxlc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcbiAgICBcbiAgICBmaWxlc0pTT04uZm9yRWFjaCgoZmlsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBmaWxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbik7XG5cbiAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFSyxLQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUosS0FBSzthQUFMLEtBQUssQ0FDWixLQUFLOzhCQURFLEtBQUs7YUFFakIsS0FBSyxHQUFHLEtBQUs7O2lCQUZELEtBQUs7O0FBS3hCLGVBQVksR0FBWixZQUFZOzRCQUFaLFlBQVk7b0JBQ0osU0FBUyxRQUFRLE9BQU8sVUFBRSxJQUFJO3dCQUM1QixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU87MkJBRXRCLFFBQVE7O3VCQUdWLFNBQVM7Ozs7QUFHbEIsZUFBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxDQUFDLElBQUk7cUJBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O0FBR3RCLGVBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxRQUFROzRCQUNGLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUTs7OztBQUdoQyxlQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsUUFBUTs0QkFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVE7Ozs7QUFHakMsZUFBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZOzRCQUNuQixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZOzs7O0FBR2pELGVBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxRQUFRO3FCQUNiLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUTs7OztBQUc3QixlQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsUUFBUTs0QkFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzs7O0FBRy9DLGVBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU07b0JBQ0UsU0FBUyxRQUFRLEtBQUssQ0FBQyxHQUFHLFVBQUUsSUFBSTt3QkFDeEIsUUFBUSxHQUFJLElBQUksS0FBSyxJQUFJLEdBQ1gsSUFBSSxDQUFDLE1BQU0sS0FDVCxJQUFJOzJCQUVuQixRQUFRO29CQUVqQixJQUFJLEdBQUcsU0FBUzt1QkFFZixJQUFJOzs7OztBQUdOLGVBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxJQUFJO29CQUNaLFNBQVMsR0FBRyxJQUFJLEVBQ2hCLEtBQUssT0FDTCxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQUs7QUFFN0IseUJBQVMsQ0FBQyxPQUFPLFVBQUUsUUFBUTt3QkFDbkIsS0FBSSxHQUFHLFFBQVEsRUFDZixJQUFJLEdBN0RDLEtBQVEsU0E2REQsUUFBUSxDQUFDLEtBQUk7QUFFL0IseUJBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTs7dUJBR2IsS0FBSzs7OztBQUdQLGVBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ1YsS0FBSyxPQUNMLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBSzt1QkFFdEIsS0FBSzs7OztXQXZFSyxLQUFLOztrQkFBTCxLQUFLIn0=