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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIG1hcFByb2plY3QoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlUHJvamVjdChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaFByb2plY3QoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QoY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiZm9yRWFjaCIsIlByb2plY3RzIiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsInB1c2giLCJtYXBQcm9qZWN0IiwiY2FsbGJhY2siLCJtYXAiLCJyZWR1Y2VQcm9qZWN0IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaFByb2plY3QiLCJhc3luY2hyb25vdXNGb3JFYWNoUHJvamVjdCIsImRvbmUiLCJ0b0pTT04iLCJqc29uIiwicHJvamVjdEpTT04iLCJmcm9tSlNPTiIsInByb2plY3RzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRTBCLEdBQVcsQ0FBWCxVQUFXO0FBRTdCLEdBQVcsQ0FBWCxRQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLEdBQUssQ0FBR0EsT0FBTyxHQUp1QixVQUFXLHVCQUl6Q0EsT0FBTztJQUVNQyxRQUFRLGlCQUFkLFFBQVE7YUFBRkEsUUFBUSxDQUNmQyxLQUFLOztRQUNmLElBQUksQ0FBQ0Es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