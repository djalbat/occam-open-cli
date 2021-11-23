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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERJUkVDVE9SWV9UWVBFIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5IHtcbiAgY29uc3RydWN0b3IocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX1RZUEU7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBESVJFQ1RPUllfVFlQRSkge1xuICAgICAgICBjb25zdCB7IHBhdGggfSA9IGpzb247XG5cbiAgICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0b3J5IiwicGF0aCIsImdldFBhdGgiLCJpc0ZpbGUiLCJmaWxlIiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJ0b0pTT04iLCJ0eXBlIiwianNvbiIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFTLENBQVQsTUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5CQSxTQUFTLGlCQUFmLFFBQVE7YUFBRkEsU0FBUyxDQUNoQkMsSUFBSTs4QkFER0QsU0FBUztRQUUxQixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTs7aUJBRkNELFNBQVM7O1lBSzVCRSxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVEsQ0FBUkEsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQ0QsSUFBSTtZQUNsQixDQUFDOzs7WUFFREUsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUs7Z0JBRWxCLE1BQU0sQ0FBQ0EsSUFBSTtZQUNiLENBQUM7OztZQUVEQyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDQyxTQUFTLEdBQUcsSUFBSTtnQkFFdEIsTUFBTSxDQUFDQSxTQUFTO1lBQ2xCLENBQUM7OztZQUVEQyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsR0FBSyxDQUFHQyxJQUFJLEdBQUtSLFNBQVMsQ0FBbEJRLElBQUksRUFDTlAsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSSxFQUNoQlEsSUFBSSxHQUFHLENBQUM7b0JBQ05ELElBQUksRUFBSkEsSUFBSTtvQkFDSlAsSUFBSSxFQUFKQSxJQUFJO2dCQUNOLENBQUM7Z0JBRVAsTUFBTSxDQUFDUSxJQUFJO1lBQ2IsQ0FBQzs7OztZQUlNQyxHQUFRLEVBQVJBLENBQVE7bUJBQWYsUUFBUSxDQUFEQSxRQUFRLENBQUNELElBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFHLENBQUNILFNBQVMsR0FBRyxJQUFJO2dCQUVwQixFQUFFLEVBQUVHLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDbEIsR0FBSyxDQUFHRCxJQUFJLEdBQUtDLElBQUksQ0FBYkQsSUFBSTtvQkFFWixFQUFFLEVBQUVBLElBQUksS0ExQ2lCLE1BQVMsaUJBMENMLENBQUM7d0JBQzVCLEdBQUssQ0FBR1AsSUFBSSxHQUFLUSxJQUFJLENBQWJSLElBQUk7d0JBRVpLLFNBQVMsR0FBRyxHQUFHLENBQUNOLFNBQVMsQ0FBQ0MsSUFBSTtvQkFDaEMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE1BQU0sQ0FBQ0ssU0FBUztZQUNsQixDQUFDOzs7V0FoRGtCTixTQUFTOztnQkFBVEEsU0FBUyxFQWdDckJRLENBQUksT0FsQ2tCLE1BQVM7a0JBRW5CUixTQUFTIn0=