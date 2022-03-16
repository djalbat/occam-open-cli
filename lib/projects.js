"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _project = _interopRequireDefault(require("./project"));
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
var forEach = _necessary.asynchronousUtilities.forEach;
var Projects = /*#__PURE__*/ function() {
    function Projects(array) {
        _classCallCheck(this, Projects);
        this.array = array;
    }
    _createClass(Projects, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "addProject",
            value: function addProject(project) {
                this.array.push(project);
            }
        },
        {
            key: "mapProject",
            value: function mapProject(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "reduceProject",
            value: function reduceProject(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachProject",
            value: function forEachProject(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "asynchronousForEachProject",
            value: function asynchronousForEachProject(callback, done) {
                forEach(this.array, callback, done);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = this.array.map(function(project) {
                    var projectJSON = project.toJSON();
                    return projectJSON;
                });
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json1) {
                var array = json1.map(function(json) {
                    var project = _project.default.fromJSON(json);
                    return project;
                }), projects = new Projects(array);
                return projects;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], projects = new Projects(array);
                return projects;
            }
        }
    ]);
    return Projects;
}();
exports.default = Projects;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIG1hcFByb2plY3QoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlUHJvamVjdChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaFByb2plY3QoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QoY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIlByb2plY3RzIiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsInB1c2giLCJtYXBQcm9qZWN0IiwiY2FsbGJhY2siLCJtYXAiLCJyZWR1Y2VQcm9qZWN0IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaFByb2plY3QiLCJhc3luY2hyb25vdXNGb3JFYWNoUHJvamVjdCIsImRvbmUiLCJ0b0pTT04iLCJqc29uIiwicHJvamVjdEpTT04iLCJmcm9tSlNPTiIsIlByb2plY3QiLCJwcm9qZWN0cyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFc0MsR0FBVyxDQUFYLFVBQVc7QUFFN0IsR0FBVyxDQUFYLFFBQVc7Ozs7Ozs7Ozs4REFKL0I7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7O0FBTUEsR0FBSyxDQUFHQSxPQUFPLEdB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