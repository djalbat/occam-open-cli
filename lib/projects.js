"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Projects;
    }
});
var _necessary = require("necessary");
var _project = /*#__PURE__*/ _interopRequireDefault(require("./project"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuYXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIG1hcFByb2plY3QoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlUHJvamVjdChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaFByb2plY3QoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QoY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlByb2plY3RzIiwiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJwdXNoIiwibWFwUHJvamVjdCIsImNhbGxiYWNrIiwibWFwIiwicmVkdWNlUHJvamVjdCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hQcm9qZWN0IiwiYXN5bmNocm9ub3VzRm9yRWFjaFByb2plY3QiLCJkb25lIiwidG9KU09OIiwianNvbiIsInByb2plY3RKU09OIiwiZnJvbUpTT04iLCJQcm9qZWN0IiwicHJvamVjdHMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBUVFBLFFBQVE7Ozt5QkFOUyxXQUFXOzREQUU3QixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU0sQUFBRUMsT0FBTyxHQUFLQyxVQUFxQixzQkFBQSxDQUFqQ0QsT0FBTyxBQUEwQixBQUFDO0FBRTNCLElBQUEsQUFBTUQsUUFBUSxpQkFBZDthQUFNQSxRQUFRLENBQ2ZHLEtBQUs7OEJBREVILFFBQVE7UUFFekIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7aUJBRkZILFFBQVE7O1lBSzNCSSxHQUFTLEVBQVRBLFdBQVM7bUJBQVRBLFNBQUFBLFNBQVMsR0FBRztnQkFDVixPQUFPLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxNQUFNLENBQUM7WUFDM0IsQ0FBQzs7O1lBRURDLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUM7OztZQUVERSxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsQ0FBQ0MsUUFBUSxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxHQUFHLENBQUNELFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7OztZQUVERSxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsQ0FBQ0YsUUFBUSxFQUFFRyxZQUFZLEVBQUU7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDVixLQUFLLENBQUNXLE1BQU0sQ0FBQ0osUUFBUSxFQUFFRyxZQUFZLENBQUMsQ0FBQztZQUNuRCxDQUFDOzs7WUFFREUsR0FBYyxFQUFkQSxnQkFBYzttQkFBZEEsU0FBQUEsY0FBYyxDQUFDTCxRQUFRLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQ1AsS0FBSyxDQUFDRixPQUFPLENBQUNTLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLENBQUM7OztZQUVETSxHQUEwQixFQUExQkEsNEJBQTBCO21CQUExQkEsU0FBQUEsMEJBQTBCLENBQUNOLFFBQVEsRUFBRU8sSUFBSSxFQUFFO2dCQUN6Q2hCLE9BQU8sQ0FBQyxJQUFJLENBQUNFLEtBQUssRUFBRU8sUUFBUSxFQUFFTyxJQUFJLENBQUMsQ0FBQztZQUN0QyxDQUFDOzs7WUFFREMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBTUMsSUFBSSxHQUFHLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ1EsR0FBRyxDQUFDLFNBQUNKLE9BQU8sRUFBSztvQkFDdkMsSUFBTWEsV0FBVyxHQUFHYixPQUFPLENBQUNXLE1BQU0sRUFBRSxBQUFDO29CQUVyQyxPQUFPRSxXQUFXLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxBQUFDO2dCQUVILE9BQU9ELElBQUksQ0FBQztZQUNkLENBQUM7Ozs7WUFFTUUsR0FBUSxFQUFSQSxVQUFRO21CQUFmLFNBQU9BLFFBQVEsQ0FBQ0YsSUFBSSxFQUFFO2dCQUNwQixJQUFNaEIsS0FBSyxHQUFHZ0IsSUFBSSxDQUFDUixHQUFHLENBQUMsU0FBQ1EsSUFBSSxFQUFLO29CQUN6QixJQUFNWixPQUFPLEdBQUdlLFFBQU8sUUFBQSxDQUFDRCxRQUFRLENBQUNGLElBQUksQ0FBQyxBQUFDO29CQUV2QyxPQUFPWixPQUFPLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxFQUNGZ0IsUUFBUSxHQUFHLElBN0NBdkIsUUFBUSxDQTZDS0csS0FBSyxDQUFDLEFBQUM7Z0JBRXJDLE9BQU9vQixRQUFRLENBQUM7WUFDbEIsQ0FBQzs7O1lBRU1DLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUNuQixJQUFNckIsS0FBSyxHQUFHLEVBQUUsRUFDVm9CLFFBQVEsR0FBRyxJQXBEQXZCLFFBQVEsQ0FvREtHLEtBQUssQ0FBQyxBQUFDO2dCQUVyQyxPQUFPb0IsUUFBUSxDQUFDO1lBQ2xCLENBQUM7OztXQXZEa0J2QixRQUFRO0NBd0Q1QixFQUFBIn0=