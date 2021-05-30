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
var Projects = function() {
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
            value: function fromJSON(json) {
                var array = json.map(function(json1) {
                    var project = _project.default.fromJSON(json1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIG1hcFByb2plY3QoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlUHJvamVjdChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaFByb2plY3QoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QoY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFMEIsVUFBVztJQUU3QixRQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLE9BQU8sR0FKdUIsVUFBVyx1QkFJekMsT0FBTztJQUVNLFFBQVE7YUFBUixRQUFRLENBQ2YsS0FBSzs4QkFERSxRQUFRO2FBRXBCLEtBQUssR0FBRyxLQUFLOztpQkFGRCxRQUFROztZQUszQixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTOzRCQUNLLEtBQUssQ0FBQyxNQUFNOzs7O1lBRzFCLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsQ0FBQyxPQUFPO3FCQUNYLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztZQUd6QixHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVLENBQUMsUUFBUTs0QkFDTCxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVE7Ozs7WUFHaEMsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYSxDQUFDLFFBQVEsRUFBRSxZQUFZOzRCQUN0QixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZOzs7O1lBR2pELEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxRQUFRO3FCQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVE7Ozs7WUFHN0IsR0FBMEIsR0FBMUIsMEJBQTBCOzRCQUExQiwwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsSUFBSTtnQkFDdkMsT0FBTyxNQUFNLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSTs7OztZQUdwQyxHQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNO29CQUNFLElBQUksUUFBUSxLQUFLLENBQUMsR0FBRyxVQUFFLE9BQU87d0JBQzVCLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTsyQkFFM0IsV0FBVzs7dUJBR2IsSUFBSTs7Ozs7WUFHTixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsSUFBSTtvQkFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsVUFBRSxLQUFJO3dCQUNkLE9BQU8sR0E3Q0wsUUFBVyxTQTZDSyxRQUFRLENBQUMsS0FBSTsyQkFFOUIsT0FBTztvQkFFaEIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxLQUFLO3VCQUU1QixRQUFROzs7O1lBR1YsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDVixLQUFLLE9BQ0wsUUFBUSxPQUFPLFFBQVEsQ0FBQyxLQUFLO3VCQUU1QixRQUFROzs7O1dBdERFLFFBQVE7O2tCQUFSLFFBQVEifQ==