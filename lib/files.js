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
                    var _$json = fileJSON, file = _file.default.fromJSON(_$json);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goKGZpbGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlcyIsImFycmF5IiwiZ2V0RmlsZVBhdGhzIiwiZmlsZVBhdGhzIiwibWFwRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImdldFBhdGgiLCJhZGRGaWxlIiwicHVzaCIsImNhbGxiYWNrIiwibWFwIiwic29tZUZpbGUiLCJzb21lIiwicmVkdWNlRmlsZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hGaWxlIiwiZm9yRWFjaCIsImZpbmRGaWxlIiwiZmluZCIsInRvSlNPTiIsImZpbGVzSlNPTiIsImZpbGVKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZXMiLCJGaWxlIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFSSxJQUFBLEtBQVEsa0NBQVIsUUFBUSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSxLQUFLLGlCQ0p2QixBRElZO2FBQU1BLEtBQUssQ0FDWkMsS0FBSzs7UUFDZixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSyxDQUFDOzs7O1lBR3JCQyxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksR0FBRztnQkFDYixJQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxPQUFPLENBQUMsU0FBQ0MsSUFBSSxFQUFLO29CQUN2QyxJQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7b0JBRWhDLE9BQU9ELFFBQVEsQ0FBQztpQkFDakIsQ0FBQyxBQUFDO2dCQUVILE9BQU9ILFNBQVMsQ0FBQzthQUNsQjs7O1lBRURLLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDSCxJQUFJLEVBQUU7Z0JBQ1osSUFBSSxDQUFDSixLQUFLLENBQUNRLElBQUksQ0FBQ0osSUFBSSxDQUFDLENBQUM7YUFDdkI7OztZQUVERCxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ00sUUFBUSxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxHQUFHLENBQUNELFFBQVEsQ0FBQyxDQUFDO2FBQ2pDOzs7WUFFREUsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLENBQUNGLFFBQVEsRUFBRTtnQkFDakIsT0FBTyxJQUFJLENBQUNULEtBQUssQ0FBQ1ksSUFBSSxDQUFDSCxRQUFRLENBQUMsQ0FBQzthQUNsQzs7O1lBRURJLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxDQUFDSixRQUFRLEVBQUVLLFlBQVksRUFBRTtnQkFDakMsT0FBTyxJQUFJLENBQUNkLEtBQUssQ0FBQ2UsTUFBTSxDQUFDTixRQUFRLEVBQUVLLFlBQVksQ0FBQyxDQUFDO2FBQ2xEOzs7WUFFREUsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLENBQUNQLFFBQVEsRUFBRTtnQkFDcEIsSUFBSSxDQUFDVCxLQUFLLENBQUNpQixPQUFPLENBQUNSLFFBQVEsQ0FBQyxDQUFDO2FBQzlCOzs7WUFFRFMsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLENBQUNULFFBQVEsRUFBRTtnQkFDakIsT0FBTyxJQUFJLENBQUNULEtBQUssQ0FBQ21CLElBQUksQ0FBQ1YsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRzthQUM5Qzs7O1lBRURXLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLElBQU1DLFNBQVMsR0FBRyxJQUFJLENBQUNyQixLQUFLLENBQUNVLEdBQUcsQ0FBQyxTQUFDTixJQUFJLEVBQUs7b0JBQ25DLElBQU1rQixRQUFRLEdBQUcsQUFBQ2xCLElBQUksS0FBSyxJQUFJLEdBQ1hBLElBQUksQ0FBQ2dCLE1BQU0sRUFBRSxHQUNYLElBQUksQUFBQztvQkFFM0IsT0FBT0UsUUFBUSxDQUFDO2lCQUNqQixDQUFDLEVBQ0ZDLElBQUksR0FBR0YsU0FBUyxBQUFDLEVBQUMsR0FBRztnQkFFM0IsT0FBT0UsSUFBSSxDQUFDO2FBQ2I7Ozs7WUFFTUMsR0FBUSxFQUFSQSxVQUFRO21CQUFmLFNBQU9BLFFBQVEsQ0FBQ0QsSUFBSSxFQUFFO2dCQUNwQixJQUFNRixTQUFTLEdBQUdFLElBQUksRUFDaEJ2QixLQUFLLEdBQUcsRUFBRSxFQUNWeUIsS0FBSyxHQUFHLElBQUkxQixLQUFLLENBQUNDLEtBQUssQ0FBQyxBQUFDO2dCQUUvQnFCLFNBQVMsQ0FBQ0osT0FBTyxDQUFDLFNBQUNLLFFBQVEsRUFBSztvQkFDOUIsSUFBTUMsTUFBSSxHQUFHRCxRQUFRLEVBQ2ZsQixJQUFJLEdBQUdzQixLQUFJLFFBQUEsQ0FBQ0YsUUFBUSxDQUFDRCxNQUFJLENBQUMsQUFBQztvQkFFakNFLEtBQUssQ0FBQ2xCLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDLENBQUM7aUJBQ3JCLENBQUMsQ0FBQztnQkFFSCxPQUFPcUIsS0FBSyxDQUFDO2FBQ2Q7OztZQUVNRSxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFDbkIsSUFBTTNCLEtBQUssR0FBRyxFQUFFLEVBQ1Z5QixLQUFLLEdBQUcsSUFBSTFCLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEFBQUM7Z0JBRS9CLE9BQU95QixLQUFLLENBQUM7YUFDZDs7OztDQUNGLEVBQUE7a0JBekVvQjFCLEtBQUsifQ==