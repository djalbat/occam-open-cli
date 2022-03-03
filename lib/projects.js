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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIG1hcFByb2plY3QoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlUHJvamVjdChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaFByb2plY3QoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QoY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIlByb2plY3RzIiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsInB1c2giLCJtYXBQcm9qZWN0IiwiY2FsbGJhY2siLCJtYXAiLCJyZWR1Y2VQcm9qZWN0IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaFByb2plY3QiLCJhc3luY2hyb25vdXNGb3JFYWNoUHJvamVjdCIsImRvbmUiLCJ0b0pTT04iLCJqc29uIiwicHJvamVjdEpTT04iLCJmcm9tSlNPTiIsIlByb2plY3QiLCJwcm9qZWN0cyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0U7d0I7QUFFeUIsR0FBVyxDQUFYLFVBQVc7QUFFN0IsR0FBVyxDQUFYLFFBQVc7Ozs7Ozs7Ozs4RDtzQzs2RDtpRTs7Ozt3RTtnRTs7Ozs7Ozs7QUFFL0IsR0FBSyxDQUFHQSxPQUFPLEdBQUtDLFVBQXFCLHVCQUFqQ0QsT0FBTztJQUVNRSxRQUFRLGlCQUFkLFFBQVE7YUFBRkEsUUFBUSxDQUNmQyxLQUFLO3VDO1FBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7OztZQUdyQkMsR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsR0FBRyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUMxQixDQUFDOzs7WUFFREMsR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUM7OztZQUVERSxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxDQUFDQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxHQUFHLENBQUNELFFBQVE7WUFDaEMsQ0FBQzs7O1lBRURFLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLENBQUNGLFFBQVEsRUFBRUcsWUFBWSxFQUFFLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUNWLEtBQUssQ0FBQ1csTUFBTSxDQUFDSixRQUFRLEVBQUVHLFlBQVk7WUFDakQsQ0FBQzs7O1lBRURFLEdBQWMsRUFBZEEsQ0FBYzttQkFBZEEsUUFBUSxDQUFSQSxjQUFjLENBQUNMLFFBQVEsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUNQLEtBQUssQ0FBQ0gsT0FBTyxDQUFDVSxRQUFRLENBQUMsQ0FBQztZQUMvQixDQUFDOzs7WUFFRE0sR0FBMEIsRUFBMUJBLENBQTBCO21CQUExQkEsUUFBUSxDQUFSQSwwQkFBMEIsQ0FBQ04sUUFBUSxFQUFFTyxJQUFJLEVBQUUsQ0FBQztnQkFDMUNqQixPQUFPLENBQUMsSUFBSSxDQUFDRyxLQUFLLEVBQUVPLFFBQVEsRUFBRU8sSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQzs7O1lBRURDLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUcsQ0FBQztnQkFDUixHQUFLLENBQUNDLElBQUksR0FBRyxJQUFJLENBQUNoQixLQUFLLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBKLE9BQU8sRUFBSyxDQUFDO29CQUN4QyxHQUFLLENBQUNhLFdBQVcsR0FBR2IsT0FBTyxDQUFDVyxNQUFNO29CQUVsQyxNQUFNLENBQUNFLFdBQVc7Z0JBQ3BCLENBQUM7Z0JBRUQsTUFBTSxDQUFDRCxJQUFJO1lBQ2IsQ0FBQzs7OztZQUVNRSxHQUFRLEVBQVJBLENBQVE7bUJBQWYsUUFBUSxDQUFEQSxRQUFRLENBQUNGLEtBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFLLENBQUNoQixLQUFLLEdBQUdnQixLQUFJLENBQUNSLEdBQUcsQ0FBQyxRQUFRLENBQVBRLElBQUksRUFBSyxDQUFDO29CQUMxQixHQUFLLENBQUNaLE9BQU8sR0FBR2UsUUFBTyxTQUFDRCxRQUFRLENBQUNGLElBQUk7b0JBRXJDLE1BQU0sQ0FBQ1osT0FBTztnQkFDaEIsQ0FBQyxHQUNEZ0IsUUFBUSxHQUFHLEdBQUcsQ0FBQ3JCLFFBQVEsQ0FBQ0MsS0FBSztnQkFFbkMsTUFBTSxDQUFDb0IsUUFBUTtZQUNqQixDQUFDOzs7WUFFTUMsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUNyQixLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQ1ZvQixRQUFRLEdBQUcsR0FBRyxDQUFDckIsUUFBUSxDQUFDQyxLQUFLO2dCQUVuQyxNQUFNLENBQUNvQixRQUFRO1lBQ2pCLENBQUM7O007OztrQkF2RGtCckIsUUFBUSxBIn0=