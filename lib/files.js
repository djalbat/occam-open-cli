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
            value: function fromJSON(json1) {
                var filesJSON = json1, array = [], files = new Files(array);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goKGZpbGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVzIiwiYXJyYXkiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImFkZEZpbGUiLCJwdXNoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRmlsZSIsInNvbWUiLCJyZWR1Y2VGaWxlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaEZpbGUiLCJmb3JFYWNoIiwiZmluZEZpbGUiLCJmaW5kIiwidG9KU09OIiwiZmlsZXNKU09OIiwiZmlsZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlcyIsIkZpbGUiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRUksR0FBUSxDQUFSLEtBQVE7Ozs7Ozs7Ozs4RDtzQzs2RDtpRTs7Ozt3RTtnRTs7Ozs7Ozs7SUFFSkEsS0FBSyxpQkFBWCxRQUFRO2FBQUZBLEtBQUssQ0FDWkMsS0FBSztvQztRQUNmLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLLENBQUM7Ozs7WUFHckJDLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLEdBQUcsQ0FBQztnQkFDZCxHQUFLLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO29CQUN4QyxHQUFLLENBQUNDLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFPO29CQUU3QixNQUFNLENBQUNELFFBQVE7Z0JBQ2pCLENBQUM7Z0JBRUQsTUFBTSxDQUFDSCxTQUFTO1lBQ2xCLENBQUM7OztZQUVESyxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVFILENBQVJHLE9BQU8sQ0FBQ0gsSUFBSSxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDSixLQUFLLENBQUNRLElBQUksQ0FBQ0osSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQzs7O1lBRURELEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUU0sQ0FBUk4sT0FBTyxDQUFDTSxRQUFRLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxHQUFHLENBQUNELFFBQVE7WUFDaEMsQ0FBQzs7O1lBRURFLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLENBQUNGLFFBQVEsRUFBRSxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDVCxLQUFLLENBQUNZLElBQUksQ0FBQ0gsUUFBUTtZQUNqQyxDQUFDOzs7WUFFREksR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsQ0FBQ0osUUFBUSxFQUFFSyxZQUFZLEVBQUUsQ0FBQztnQkFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQ2QsS0FBSyxDQUFDZSxNQUFNLENBQUNOLFFBQVEsRUFBRUssWUFBWTtZQUNqRCxDQUFDOzs7WUFFREUsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsQ0FBQ1AsUUFBUSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQ1QsS0FBSyxDQUFDaUIsT0FBTyxDQUFDUixRQUFRLENBQUMsQ0FBQztZQUMvQixDQUFDOzs7WUFFRFMsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsQ0FBQ1QsUUFBUSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUNULEtBQUssQ0FBQ21CLElBQUksQ0FBQ1YsUUFBUSxLQUFLLElBQUksRUFBRSxFQUFHLEFBQUgsQ0FBRztZQUMvQyxDQUFDOzs7WUFFRFcsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ1UsR0FBRyxDQUFDLFFBQVEsQ0FBUE4sSUFBSSxFQUFLLENBQUM7b0JBQ3BDLEdBQUssQ0FBQ2tCLFFBQVEsR0FBSWxCLElBQUksS0FBSyxJQUFJLEdBQ1hBLElBQUksQ0FBQ2dCLE1BQU0sS0FDVCxJQUFJO29CQUUxQixNQUFNLENBQUNFLFFBQVE7Z0JBQ2pCLENBQUMsR0FDREMsSUFBSSxHQUFHRixTQUFTLEVBQUUsRUFBRyxBQUFILENBQUc7Z0JBRTNCLE1BQU0sQ0FBQ0UsSUFBSTtZQUNiLENBQUM7Ozs7WUFFTUMsR0FBUSxFQUFSQSxDQUFRO21CQUFmLFFBQVEsQ0FBREEsUUFBUSxDQUFDRCxLQUFJLEVBQUUsQ0FBQztnQkFDckIsR0FBSyxDQUFDRixTQUFTLEdBQUdFLEtBQUksRUFDaEJ2QixLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQ1Z5QixLQUFLLEdBQUcsR0FBRyxDQUFDMUIsS0FBSyxDQUFDQyxLQUFLO2dCQUU3QnFCLFNBQVMsQ0FBQ0osT0FBTyxDQUFDLFFBQVEsQ0FBUEssUUFBUSxFQUFLLENBQUM7b0JBQy9CLEdBQUssQ0FBQ0MsSUFBSSxHQUFHRCxRQUFRLEVBQ2ZsQixJQUFJLEdBQUdzQixLQUFJLFNBQUNGLFFBQVEsQ0FBQ0QsSUFBSTtvQkFFL0JFLEtBQUssQ0FBQ2xCLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDO2dCQUVILE1BQU0sQ0FBQ3FCLEtBQUs7WUFDZCxDQUFDOzs7WUFFTUUsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUMzQixLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQ1Z5QixLQUFLLEdBQUcsR0FBRyxDQUFDMUIsS0FBSyxDQUFDQyxLQUFLO2dCQUU3QixNQUFNLENBQUN5QixLQUFLO1lBQ2QsQ0FBQzs7TTs7O2tCQXhFa0IxQixLQUFLLEEifQ==