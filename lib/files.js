"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Files;
    }
});
var _file = /*#__PURE__*/ _interopRequireDefault(require("./file"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goKGZpbGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlcyIsImFycmF5IiwiZ2V0RmlsZVBhdGhzIiwiZmlsZVBhdGhzIiwibWFwRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImdldFBhdGgiLCJhZGRGaWxlIiwicHVzaCIsImNhbGxiYWNrIiwibWFwIiwic29tZUZpbGUiLCJzb21lIiwicmVkdWNlRmlsZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hGaWxlIiwiZm9yRWFjaCIsImZpbmRGaWxlIiwiZmluZCIsInRvSlNPTiIsImZpbGVzSlNPTiIsImZpbGVKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZXMiLCJGaWxlIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQUlRQSxLQUFLOzs7eURBRlQsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEsS0FBSyxpQkFBWDthQUFNQSxLQUFLLENBQ1pDLEtBQUs7O1FBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7OztZQUdyQkMsR0FBWSxFQUFaQSxjQUFZO21CQUFaQSxTQUFBQSxZQUFZLEdBQUc7Z0JBQ2IsSUFBTUMsU0FBUyxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLElBQUksRUFBSztvQkFDdkMsSUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE9BQU8sRUFBRSxBQUFDO29CQUVoQyxPQUFPRCxRQUFRLENBQUM7aUJBQ2pCLENBQUMsQUFBQztnQkFFSCxPQUFPSCxTQUFTLENBQUM7YUFDbEI7OztZQUVESyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0gsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQ0osS0FBSyxDQUFDUSxJQUFJLENBQUNKLElBQUksQ0FBQyxDQUFDO2FBQ3ZCOzs7WUFFREQsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNNLFFBQVEsRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUNULEtBQUssQ0FBQ1UsR0FBRyxDQUFDRCxRQUFRLENBQUMsQ0FBQzthQUNqQzs7O1lBRURFLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDRixRQUFRLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDVCxLQUFLLENBQUNZLElBQUksQ0FBQ0gsUUFBUSxDQUFDLENBQUM7YUFDbEM7OztZQUVESSxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsQ0FBQ0osUUFBUSxFQUFFSyxZQUFZLEVBQUU7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDZCxLQUFLLENBQUNlLE1BQU0sQ0FBQ04sUUFBUSxFQUFFSyxZQUFZLENBQUMsQ0FBQzthQUNsRDs7O1lBRURFLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxDQUFDUCxRQUFRLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQ1QsS0FBSyxDQUFDaUIsT0FBTyxDQUFDUixRQUFRLENBQUMsQ0FBQzthQUM5Qjs7O1lBRURTLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDVCxRQUFRLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDVCxLQUFLLENBQUNtQixJQUFJLENBQUNWLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUc7YUFDOUM7OztZQUVEVyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxJQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDckIsS0FBSyxDQUFDVSxHQUFHLENBQUMsU0FBQ04sSUFBSSxFQUFLO29CQUNuQyxJQUFNa0IsUUFBUSxHQUFHLEFBQUNsQixJQUFJLEtBQUssSUFBSSxHQUNYQSxJQUFJLENBQUNnQixNQUFNLEVBQUUsR0FDWCxJQUFJLEFBQUM7b0JBRTNCLE9BQU9FLFFBQVEsQ0FBQztpQkFDakIsQ0FBQyxFQUNGQyxJQUFJLEdBQUdGLFNBQVMsQUFBQyxFQUFDLEdBQUc7Z0JBRTNCLE9BQU9FLElBQUksQ0FBQzthQUNiOzs7O1lBRU1DLEdBQVEsRUFBUkEsVUFBUTttQkFBZixTQUFPQSxRQUFRLENBQUNELElBQUksRUFBRTtnQkFDcEIsSUFBTUYsU0FBUyxHQUFHRSxJQUFJLEVBQ2hCdkIsS0FBSyxHQUFHLEVBQUUsRUFDVnlCLEtBQUssR0FBRyxJQUFJMUIsS0FBSyxDQUFDQyxLQUFLLENBQUMsQUFBQztnQkFFL0JxQixTQUFTLENBQUNKLE9BQU8sQ0FBQyxTQUFDSyxRQUFRLEVBQUs7b0JBQzlCLElBQU1DLE1BQUksR0FBR0QsUUFBUSxFQUNmbEIsSUFBSSxHQUFHc0IsS0FBSSxRQUFBLENBQUNGLFFBQVEsQ0FBQ0QsTUFBSSxDQUFDLEFBQUM7b0JBRWpDRSxLQUFLLENBQUNsQixPQUFPLENBQUNILElBQUksQ0FBQyxDQUFDO2lCQUNyQixDQUFDLENBQUM7Z0JBRUgsT0FBT3FCLEtBQUssQ0FBQzthQUNkOzs7WUFFTUUsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQ25CLElBQU0zQixLQUFLLEdBQUcsRUFBRSxFQUNWeUIsS0FBSyxHQUFHLElBQUkxQixLQUFLLENBQUNDLEtBQUssQ0FBQyxBQUFDO2dCQUUvQixPQUFPeUIsS0FBSyxDQUFDO2FBQ2Q7Ozs7Q0FDRixFQUFBIn0=