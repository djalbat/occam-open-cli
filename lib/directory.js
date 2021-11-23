"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _types = require("./types");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var Directory = /*#__PURE__*/ function() {
    function Directory(path) {
        _classCallCheck(this, Directory);
        this.path = path;
    }
    _createClass(Directory, [
        {
            key: "getPath",
            value: function getPath() {
                return this.path;
            }
        },
        {
            key: "isFile",
            value: function isFile() {
                var file = false;
                return file;
            }
        },
        {
            key: "isDirectory",
            value: function isDirectory() {
                var directory = true;
                return directory;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var type = Directory.type, path = this.path, json = {
                    type: type,
                    path: path
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var directory = null;
                if (json !== null) {
                    var type = json.type;
                    if (type === _types.DIRECTORY_TYPE) {
                        var path = json.path;
                        directory = new Directory(path);
                    }
                }
                return directory;
            }
        }
    ]);
    return Directory;
}();
_defineProperty(Directory, "type", _types.DIRECTORY_TYPE);
exports.default = Directory;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RvcnkuanMiXSwibmFtZXMiOlsiRElSRUNUT1JZX1RZUEUiLCJEaXJlY3RvcnkiLCJjb25zdHJ1Y3RvciIsInBhdGgiLCJnZXRQYXRoIiwiaXNGaWxlIiwiZmlsZSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwidG9KU09OIiwidHlwZSIsImpzb24iLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBUyxDQUFULE1BQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQixTQUFTLGlCQUFmLFFBQVE7YUFBRixTQUFTLENBQ2hCLElBQUk7OEJBREcsU0FBUztRQUUxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7O2lCQUZDLFNBQVM7O1lBSzVCLEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSztnQkFFbEIsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJO2dCQUV0QixNQUFNLENBQUMsU0FBUztZQUNsQixDQUFDOzs7WUFFRCxHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsR0FBSyxDQUFHLElBQUksR0FBSyxTQUFTLENBQWxCLElBQUksRUFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFDaEIsSUFBSSxHQUFHLENBQUM7b0JBQ04sSUFBSSxFQUFKLElBQUk7b0JBQ0osSUFBSSxFQUFKLElBQUk7Z0JBQ04sQ0FBQztnQkFFUCxNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7Ozs7WUFJTSxHQUFRLEdBQVIsUUFBUTttQkFBZixRQUFRLENBQUQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUk7Z0JBRXBCLEVBQUUsRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2xCLEdBQUssQ0FBRyxJQUFJLEdBQUssSUFBSSxDQUFiLElBQUk7b0JBRVosRUFBRSxFQUFFLElBQUksS0ExQ2lCLE1BQVMsaUJBMENMLENBQUM7d0JBQzVCLEdBQUssQ0FBRyxJQUFJLEdBQUssSUFBSSxDQUFiLElBQUk7d0JBRVosU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSTtvQkFDaEMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxTQUFTO1lBQ2xCLENBQUM7OztXQWhEa0IsU0FBUzs7Z0JBQVQsU0FBUyxHQWdDckIsSUFBSSxHQWxDa0IsTUFBUztrQkFFbkIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBESVJFQ1RPUllfVFlQRSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gdHJ1ZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBEaXJlY3RvcnksXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHBhdGhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9UWVBFO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgICBpZiAodHlwZSA9PT0gRElSRUNUT1JZX1RZUEUpIHtcbiAgICAgICAgY29uc3QgeyBwYXRoIH0gPSBqc29uO1xuXG4gICAgICAgIGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxufVxuIl19