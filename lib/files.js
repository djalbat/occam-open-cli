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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goKGZpbGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVzIiwiYXJyYXkiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImFkZEZpbGUiLCJwdXNoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRmlsZSIsInNvbWUiLCJyZWR1Y2VGaWxlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaEZpbGUiLCJmb3JFYWNoIiwiZmluZEZpbGUiLCJmaW5kIiwidG9KU09OIiwiZmlsZXNKU09O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