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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERJUkVDVE9SWV9UWVBFIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5IHtcbiAgY29uc3RydWN0b3IocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX1RZUEU7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBESVJFQ1RPUllfVFlQRSkge1xuICAgICAgICBjb25zdCB7IHBhdGggfSA9IGpzb247XG5cbiAgICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0b3J5IiwicGF0aCIsImdldFBhdGgiLCJpc0ZpbGUiLCJmaWxlIiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJ0b0pTT04iLCJ0eXBlIiwianNvbiIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFTLENBQVQsTUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5CQSxTQUFTLGlCQUFmLFFBQVE7YUFBRkEsU0FBUyxDQUNoQkMsSUFBSTs7UUFDZCxJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTs7OztZQUdsQkMsR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRLENBQVJBLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUNELElBQUk7WUFDbEIsQ0FBQzs7O1lBRURFLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUcsQ0FBQztnQkFDUixHQUFLLENBQUNDLElBQUksR0FBRyxLQUFLO2dCQUVsQixNQUFNLENBQUNBLElBQUk7WUFDYixDQUFDOzs7WUFFREMsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsR0FBRyxDQUFDO2dCQUNiLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLElBQUk7Z0JBRXRCLE1BQU0sQ0FBQ0EsU0FBUztZQUNsQixDQUFDOzs7WUFFREMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBR0MsSUFBSSxHQUFLUixTQUFTLENBQWxCUSxJQUFJLEVBQ05QLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksRUFDaEJRLElBQUksR0FBRyxDQUFDO29CQUNORCxJQUFJLEVBQUpBLElBQUk7b0JBQ0pQLElBQUksRUFBSkEsSUFBSTtnQkFDTixDQUFDO2dCQUVQLE1BQU0sQ0FBQ1EsSUFBSTtZQUNiLENBQUM7Ozs7WUFJTUMsR0FBUSxFQUFSQSxDQUFRO21CQUFmLFFBQVEsQ0FBREEsUUFBUSxDQUFDRCxJQUFJLEVBQUUsQ0FBQztnQkFDckIsR0FBRyxDQUFDSCxTQUFTLEdBQUcsSUFBSTtnQkFFcEIsRUFBRSxFQUFFRyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2xCLEdBQUssQ0FBR0QsSUFBSSxHQUFLQyxJQUFJLENBQWJELElBQUk7b0JBRVosRUFBRSxFQUFFQSxJQUFJLEtBMUNpQixNQUFTLGlCQTBDTCxDQUFDO3dCQUM1QixHQUFLLENBQUdQLElBQUksR0FBS1EsSUFBSSxDQUFiUixJQUFJO3dCQUVaSyxTQUFTLEdBQUcsR0FBRyxDQUFDTixTQUFTLENBQUNDLElBQUk7b0JBQ2hDLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxNQUFNLENBQUNLLFNBQVM7WUFDbEIsQ0FBQzs7Ozs7Z0JBaERrQk4sU0FBUyxFQWdDckJRLENBQUksT0FsQ2tCLE1BQVM7a0JBRW5CUixTQUFTIn0=