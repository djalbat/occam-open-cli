"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Directory;
    }
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RvcnkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERJUkVDVE9SWV9UWVBFIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5IHtcbiAgY29uc3RydWN0b3IocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX1RZUEU7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBESVJFQ1RPUllfVFlQRSkge1xuICAgICAgICBjb25zdCB7IHBhdGggfSA9IGpzb247XG5cbiAgICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdG9yeSIsInBhdGgiLCJnZXRQYXRoIiwiaXNGaWxlIiwiZmlsZSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwidG9KU09OIiwidHlwZSIsImpzb24iLCJmcm9tSlNPTiIsIkRJUkVDVE9SWV9UWVBFIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFJUUEsU0FBUzs7O3FCQUZDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLFNBQVMsaUJBQWY7YUFBTUEsU0FBUyxDQUNoQkMsSUFBSTs4QkFER0QsU0FBUztRQUUxQixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSSxDQUFDOztpQkFGQUQsU0FBUzs7WUFLNUJFLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJLENBQUM7WUFDbkIsQ0FBQzs7O1lBRURFLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLElBQU1DLElBQUksR0FBRyxLQUFLLEFBQUM7Z0JBRW5CLE9BQU9BLElBQUksQ0FBQztZQUNkLENBQUM7OztZQUVEQyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixJQUFNQyxTQUFTLEdBQUcsSUFBSSxBQUFDO2dCQUV2QixPQUFPQSxTQUFTLENBQUM7WUFDbkIsQ0FBQzs7O1lBRURDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLElBQU0sQUFBRUMsSUFBSSxHQXRCS1IsU0FBUyxDQXNCbEJRLElBQUksQUFBYyxFQUNwQlAsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSSxFQUNoQlEsSUFBSSxHQUFHO29CQUNMRCxJQUFJLEVBQUpBLElBQUk7b0JBQ0pQLElBQUksRUFBSkEsSUFBSTtpQkFDTCxBQUFDO2dCQUVSLE9BQU9RLElBQUksQ0FBQztZQUNkLENBQUM7Ozs7WUFJTUMsR0FBUSxFQUFSQSxVQUFRO21CQUFmLFNBQU9BLFFBQVEsQ0FBQ0QsSUFBSSxFQUFFO2dCQUNwQixJQUFJSCxTQUFTLEdBQUcsSUFBSSxBQUFDO2dCQUVyQixJQUFJRyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUNqQixJQUFNLEFBQUVELElBQUksR0FBS0MsSUFBSSxDQUFiRCxJQUFJLEFBQVMsQUFBQztvQkFFdEIsSUFBSUEsSUFBSSxLQUFLRyxNQUFjLGVBQUEsRUFBRTt3QkFDM0IsSUFBTSxBQUFFVixJQUFJLEdBQUtRLElBQUksQ0FBYlIsSUFBSSxBQUFTLEFBQUM7d0JBRXRCSyxTQUFTLEdBQUcsSUEzQ0NOLFNBQVMsQ0EyQ0lDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0ssU0FBUyxDQUFDO1lBQ25CLENBQUM7OztXQWhEa0JOLFNBQVM7Q0FpRDdCLEVBQUE7QUFqQkMsZ0JBaENtQkEsU0FBUyxFQWdDckJRLE1BQUksRUFBR0csTUFBYyxlQUFBLENBQUMifQ==