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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goKGZpbGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVzIiwiYXJyYXkiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImFkZEZpbGUiLCJwdXNoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRmlsZSIsInNvbWUiLCJyZWR1Y2VGaWxlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaEZpbGUiLCJmb3JFYWNoIiwiZmluZEZpbGUiLCJmaW5kIiwidG9KU09OIiwiZmlsZXNKU09O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