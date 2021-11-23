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
            value: function fromJSON(json) {
                var array = json.map(function(json) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJQcm9qZWN0IiwiZm9yRWFjaCIsIlByb2plY3RzIiwiY29uc3RydWN0b3IiLCJhcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwicHVzaCIsIm1hcFByb2plY3QiLCJjYWxsYmFjayIsIm1hcCIsInJlZHVjZVByb2plY3QiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoUHJvamVjdCIsImFzeW5jaHJvbm91c0ZvckVhY2hQcm9qZWN0IiwiZG9uZSIsInRvSlNPTiIsImpzb24iLCJwcm9qZWN0SlNPTiIsImZyb21KU09OIiwicHJvamVjdHMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFMEIsR0FBVyxDQUFYLFVBQVc7QUFFN0IsR0FBVyxDQUFYLFFBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsR0FBSyxDQUFHLE9BQU8sR0FKdUIsVUFBVyx1QkFJekMsT0FBTztJQUVNLFFBQVEsaUJBQWQsUUFBUTthQUFGLFFBQVEsQ0FDZixLQUFLOzhCQURFLFFBQVE7UUFFekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLOztpQkFGRCxRQUFROztZQUszQixHQUFTLEdBQVQsU0FBUzttQkFBVCxRQUFRLENBQVIsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUMxQixDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTttQkFBVixRQUFRLENBQVIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3pCLENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRO1lBQ2hDLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDO2dCQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFlBQVk7WUFDakQsQ0FBQzs7O1lBRUQsR0FBYyxHQUFkLGNBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUTtZQUM3QixDQUFDOzs7WUFFRCxHQUEwQixHQUExQiwwQkFBMEI7bUJBQTFCLFFBQVEsQ0FBUiwwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO1lBQ3BDLENBQUM7OztZQUVELEdBQU0sR0FBTixNQUFNO21CQUFOLFFBQVEsQ0FBUixNQUFNLEdBQUcsQ0FBQztnQkFDUixHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBUCxPQUFPLEVBQUssQ0FBQztvQkFDeEMsR0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTtvQkFFbEMsTUFBTSxDQUFDLFdBQVc7Z0JBQ3BCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDOzs7O1lBRU0sR0FBUSxHQUFSLFFBQVE7bUJBQWYsUUFBUSxDQUFELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsR0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBUCxJQUFJLEVBQUssQ0FBQztvQkFDMUIsR0FBSyxDQUFDLE9BQU8sR0E3Q0wsUUFBVyxTQTZDSyxRQUFRLENBQUMsSUFBSTtvQkFFckMsTUFBTSxDQUFDLE9BQU87Z0JBQ2hCLENBQUMsR0FDRCxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLO2dCQUVuQyxNQUFNLENBQUMsUUFBUTtZQUNqQixDQUFDOzs7WUFFTSxHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUNWLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUs7Z0JBRW5DLE1BQU0sQ0FBQyxRQUFRO1lBQ2pCLENBQUM7OztXQXZEa0IsUUFBUTs7a0JBQVIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgbWFwUHJvamVjdChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7XG4gIH1cblxuICByZWR1Y2VQcm9qZWN0KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cblxuICBmb3JFYWNoUHJvamVjdChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc3luY2hyb25vdXNGb3JFYWNoUHJvamVjdChjYWxsYmFjaywgZG9uZSkge1xuICAgIGZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2ssIGRvbmUpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmFycmF5Lm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEpTT04gPSBwcm9qZWN0LnRvSlNPTigpO1xuXG4gICAgICByZXR1cm4gcHJvamVjdEpTT047XG4gICAgfSk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgYXJyYXkgPSBqc29uLm1hcCgoanNvbikgPT4geyAgLy8vXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tSlNPTihqc29uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG59XG5cbiJdfQ==