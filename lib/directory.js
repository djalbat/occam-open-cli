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
exports.default = Directory;
_defineProperty(Directory, "type", _types.DIRECTORY_TYPE);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERJUkVDVE9SWV9UWVBFIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5IHtcbiAgY29uc3RydWN0b3IocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX1RZUEU7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZGlyZWN0b3J5ID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBESVJFQ1RPUllfVFlQRSkge1xuICAgICAgICBjb25zdCB7IHBhdGggfSA9IGpzb247XG5cbiAgICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0b3J5IiwicGF0aCIsImdldFBhdGgiLCJpc0ZpbGUiLCJmaWxlIiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJ0b0pTT04iLCJ0eXBlIiwianNvbiIsImZyb21KU09OIiwiRElSRUNUT1JZX1RZUEUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUUrQixHQUFTLENBQVQsTUFBUzs7Ozs7Ozs7OzhEQUZ4QztzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7OztBQUllLEdBQUssQ0FBQ0EsU0FBUyxpQkFBZixRQUFRO2FBQUZBLFNBQVMsQ0FDaEJDLElBQUk7d0NBTGxCO1FBTUksSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUksQ0FBQzs7OztZQUduQkMsR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRLENBQVJBLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUNELElBQUk7WUFDbEIsQ0FBQzs7O1lBRURFLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUcsQ0FBQztnQkFDUixHQUFLLENBQUNDLElBQUksR0FBRyxLQUFLO2dCQUVsQixNQUFNLENBQUNBLElBQUk7WUFDYixDQUFDOzs7WUFFREMsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsR0FBRyxDQUFDO2dCQUNiLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLElBQUk7Z0JBRXRCLE1BQU0sQ0FBQ0EsU0FBUztZQUNsQixDQUFDOzs7WUFFREMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBR0MsSUFBSSxHQUFLUixTQUFTLENBQWxCUSxJQUFJLEVBQ05QLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksRUFDaEJRLElBQUksR0FBRyxDQUFDO29CQUNORCxJQUFJLEVBQUpBLElBQUk7b0JBQ0pQLElBQUksRUFBSkEsSUFBSTtnQkFDTixDQUFDO2dCQUVQLE1BQU0sQ0FBQ1EsSUFBSTtZQUNiLENBQUM7Ozs7WUFJTUMsR0FBUSxFQUFSQSxDQUFRO21CQUFmLFFBQVEsQ0FBREEsUUFBUSxDQUFDRCxJQUFJLEVBQUUsQ0FBQztnQkFDckIsR0FBRyxDQUFDSCxTQUFTLEdBQUcsSUFBSTtnQkFFcEIsRUFBRSxFQUFFRyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2xCLEdBQUssQ0FBR0QsSUFBSSxHQUFLQyxJQUFJLENBQWJELElBQUk7b0JBRVosRUFBRSxFQUFFQSxJQUFJLEtBQUtHLE1BQWMsaUJBQUUsQ0FBQzt3QkFDNUIsR0FBSyxDQUFHVixJQUFJLEdBQUtRLElBQUksQ0FBYlIsSUFBSTt3QkFFWkssU0FBUyxHQUFHLEdBQUcsQ0FBQ04sU0FBUyxDQUFDQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE1BQU0sQ0FBQ0ssU0FBUztZQUNsQixDQUFDOztNQXBESDs7O2tCQUlxQk4sU0FBUyxBQUo5QjtnQkFJcUJBLFNBQVMsRUFnQ3JCUSxDQUFJLE9BQUdHLE1BQWMsZ0JBcEM5QiJ9