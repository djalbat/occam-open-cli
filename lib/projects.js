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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIG1hcFByb2plY3QoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlUHJvamVjdChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaFByb2plY3QoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QoY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJQcm9qZWN0cyIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJwdXNoIiwibWFwUHJvamVjdCIsImNhbGxiYWNrIiwibWFwIiwicmVkdWNlUHJvamVjdCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hQcm9qZWN0IiwiYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QiLCJkb25lIiwidG9KU09OIiwianNvbiIsInByb2plY3RKU09OIiwiZnJvbUpTT04iLCJQcm9qZWN0IiwicHJvamVjdHMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUV5QixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFN0IsSUFBQSxRQUFXLGtDQUFYLFdBQVcsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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