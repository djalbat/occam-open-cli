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
var Files = /*#__PURE__*/ function() {
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
                }), json = filesJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var filesJSON = json, array = [], files = new Files(array);
                filesJSON.forEach(function(fileJSON) {
                    var json = fileJSON, file = _file.default.fromJSON(json);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJuYW1lcyI6WyJGaWxlIiwiRmlsZXMiLCJjb25zdHJ1Y3RvciIsImFycmF5IiwiZ2V0RmlsZVBhdGhzIiwiZmlsZVBhdGhzIiwibWFwRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImdldFBhdGgiLCJhZGRGaWxlIiwicHVzaCIsImNhbGxiYWNrIiwibWFwIiwic29tZUZpbGUiLCJzb21lIiwicmVkdWNlRmlsZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hGaWxlIiwiZm9yRWFjaCIsImZpbmRGaWxlIiwiZmluZCIsInRvSlNPTiIsImZpbGVzSlNPTiIsImZpbGVKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZXMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFRLENBQVIsS0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVKLEtBQUssaUJBQVgsUUFBUTthQUFGLEtBQUssQ0FDWixLQUFLOzhCQURFLEtBQUs7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLOztpQkFGRCxLQUFLOztZQUt4QixHQUFZLEdBQVosWUFBWTttQkFBWixRQUFRLENBQVIsWUFBWSxHQUFHLENBQUM7Z0JBQ2QsR0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBUCxJQUFJLEVBQUssQ0FBQztvQkFDeEMsR0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTztvQkFFN0IsTUFBTSxDQUFDLFFBQVE7Z0JBQ2pCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLFNBQVM7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3RCLENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRO1lBQ2hDLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2pDLENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDO2dCQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFlBQVk7WUFDakQsQ0FBQzs7O1lBRUQsR0FBVyxHQUFYLFdBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUTtZQUM3QixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFDL0MsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFQLElBQUksRUFBSyxDQUFDO29CQUNwQyxHQUFLLENBQUMsUUFBUSxHQUFJLElBQUksS0FBSyxJQUFJLEdBQ1gsSUFBSSxDQUFDLE1BQU0sS0FDVCxJQUFJO29CQUUxQixNQUFNLENBQUMsUUFBUTtnQkFDakIsQ0FBQyxHQUNELElBQUksR0FBRyxTQUFTLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUUzQixNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7Ozs7WUFFTSxHQUFRLEdBQVIsUUFBUTttQkFBZixRQUFRLENBQUQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFLLENBQUMsU0FBUyxHQUFHLElBQUksRUFDaEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUNWLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBRTdCLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLFFBQVEsRUFBSyxDQUFDO29CQUMvQixHQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFDZixJQUFJLEdBN0RDLEtBQVEsU0E2REQsUUFBUSxDQUFDLElBQUk7b0JBRS9CLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFDcEIsQ0FBQztnQkFFRCxNQUFNLENBQUMsS0FBSztZQUNkLENBQUM7OztZQUVNLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQ1YsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSztnQkFFN0IsTUFBTSxDQUFDLEtBQUs7WUFDZCxDQUFDOzs7V0F4RWtCLEtBQUs7O2tCQUFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goKGZpbGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuIl19