"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertContentTabsToWhitespace = convertContentTabsToWhitespace;
exports.default = void 0;
var _types = require("./types");
var _constants = require("./constants");
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
var File = /*#__PURE__*/ function() {
    function File(path, content) {
        _classCallCheck(this, File);
        this.path = path;
        this.content = content;
    }
    _createClass(File, [
        {
            key: "getPath",
            value: function getPath() {
                return this.path;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                return this.content;
            }
        },
        {
            key: "isFile",
            value: function isFile() {
                var file = true;
                return file;
            }
        },
        {
            key: "isDirectory",
            value: function isDirectory() {
                var directory = false;
                return directory;
            }
        },
        {
            key: "setPath",
            value: function setPath(path) {
                this.path = path;
            }
        },
        {
            key: "setContent",
            value: function setContent(content) {
                this.content = content;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var type = File.type, path = this.path, content = this.content, json = {
                    type: type,
                    path: path,
                    content: content
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var file = null;
                if (json !== null) {
                    var type = json.type;
                    if (type === _types.FILE_TYPE) {
                        var content = json.content;
                        var path = json.path;
                        content = convertContentTabsToWhitespace(content); ///
                        file = new File(path, content);
                    }
                }
                return file;
            }
        },
        {
            key: "fromDocument",
            value: function fromDocument(document) {
                var filePath = document.getFilePath(), path = filePath; ///
                var content = document.getContent();
                content = convertContentTabsToWhitespace(content); ///
                var file = new File(path, content);
                return file;
            }
        },
        {
            key: "fromPathAndContent",
            value: function fromPathAndContent(path, content) {
                content = convertContentTabsToWhitespace(content); ///
                var file = new File(path, content);
                return file;
            }
        }
    ]);
    return File;
}();
_defineProperty(File, "type", _types.FILE_TYPE);
exports.default = File;
function convertContentTabsToWhitespace(content) {
    return content.replace(/\t/g, _constants.DOUBLE_SPACE);
} ///

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSBmYWxzZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfVFlQRTtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBGSUxFX1RZUEUpIHtcbiAgICAgICAgbGV0IHsgY29udGVudCB9ID0ganNvbjtcblxuICAgICAgICBjb25zdCB7IHBhdGggfSA9IGpzb247XG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGRvY3VtZW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgcGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQW5kQ29udGVudChwYXRoLCBjb250ZW50KSB7XG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcdC9nLCBET1VCTEVfU1BBQ0UpOyB9IC8vL1xuIl0sIm5hbWVzIjpbImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsIkZpbGUiLCJwYXRoIiwiY29udGVudCIsImdldFBhdGgiLCJnZXRDb250ZW50IiwiaXNGaWxlIiwiZmlsZSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5Iiwic2V0UGF0aCIsInNldENvbnRlbnQiLCJ0b0pTT04iLCJ0eXBlIiwianNvbiIsImZyb21KU09OIiwiRklMRV9UWVBFIiwiZnJvbURvY3VtZW50IiwiZG9jdW1lbnQiLCJmaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZnJvbVBhdGhBbmRDb250ZW50IiwicmVwbGFjZSIsIkRPVUJMRV9TUEFDRSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQWdHSUEsOEJBQThCLEdBQTlCQSw4QkFBOEI7O0FBOUZwQixHQUFTLENBQVQsTUFBUztBQUNOLEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckJDLElBQUksaUJBQVYsUUFBUTthQUFGQSxJQUFJLENBQ1hDLElBQUksRUFBRUMsT0FBTzs7UUFDdkIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBLElBQUk7UUFDaEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87Ozs7WUFHeEJDLEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUSxDQUFSQSxPQUFPLEdBQUcsQ0FBQztnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDRixJQUFJO1lBQ2xCLENBQUM7OztZQUVERyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQ0YsT0FBTztZQUNyQixDQUFDOzs7WUFFREcsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLElBQUk7Z0JBRWpCLE1BQU0s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