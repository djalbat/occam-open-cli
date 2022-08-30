"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return File;
    },
    convertContentTabsToWhitespace: function() {
        return convertContentTabsToWhitespace;
    }
});
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
function convertContentTabsToWhitespace(content) {
    return content.replace(/\t/g, _constants.DOUBLE_SPACE);
} ///

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSBmYWxzZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfVFlQRTtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBGSUxFX1RZUEUpIHtcbiAgICAgICAgbGV0IHsgY29udGVudCB9ID0ganNvbjtcblxuICAgICAgICBjb25zdCB7IHBhdGggfSA9IGpzb247XG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGRvY3VtZW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgcGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQW5kQ29udGVudChwYXRoLCBjb250ZW50KSB7XG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcdC9nLCBET1VCTEVfU1BBQ0UpOyB9IC8vL1xuIl0sIm5hbWVzIjpbIkZpbGUiLCJjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UiLCJwYXRoIiwiY29udGVudCIsImdldFBhdGgiLCJnZXRDb250ZW50IiwiaXNGaWxlIiwiZmlsZSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5Iiwic2V0UGF0aCIsInNldENvbnRlbnQiLCJ0b0pTT04iLCJ0eXBlIiwianNvbiIsImZyb21KU09OIiwiRklMRV9UWVBFIiwiZnJvbURvY3VtZW50IiwiZG9jdW1lbnQiLCJmaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZnJvbVBhdGhBbmRDb250ZW50IiwicmVwbGFjZSIsIkRPVUJMRV9TUEFDRSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7ZUFLUUEsSUFBSTs7SUEyRlRDLDhCQUE4QjtlQUE5QkEsOEJBQThCOzs7cUJBOUZwQixTQUFTO3lCQUNOLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1ELElBQUksaUJBMkZ0QixBQTNGWTthQUFNQSxJQUFJLENBQ1hFLElBQUksRUFBRUMsT0FBTzs4QkFETkgsSUFBSTtRQUVyQixJQUFJLENBQUNFLElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPLENBQUM7O2lCQUhOSCxJQUFJOztZQU12QkksR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUksQ0FBQztZQUNuQixDQUFDOzs7WUFFREcsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsT0FBTyxJQUFJLENBQUNGLE9BQU8sQ0FBQztZQUN0QixDQUFDOzs7WUFFREcsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBTUMsSUFBSSxHQUFH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