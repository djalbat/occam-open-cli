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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSBmYWxzZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfVFlQRTtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBGSUxFX1RZUEUpIHtcbiAgICAgICAgbGV0IHsgY29udGVudCB9ID0ganNvbjtcblxuICAgICAgICBjb25zdCB7IHBhdGggfSA9IGpzb247XG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGRvY3VtZW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgcGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQW5kQ29udGVudChwYXRoLCBjb250ZW50KSB7XG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcdC9nLCBET1VCTEVfU1BBQ0UpOyB9IC8vL1xuIl0sIm5hbWVzIjpbIkZpbGUiLCJjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UiLCJwYXRoIiwiY29udGVudCIsImdldFBhdGgiLCJnZXRDb250ZW50IiwiaXNGaWxlIiwiZmlsZSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5Iiwic2V0UGF0aCIsInNldENvbnRlbnQiLCJ0b0pTT04iLCJ0eXBlIiwianNvbiIsImZyb21KU09OIiwiRklMRV9UWVBFIiwiZnJvbURvY3VtZW50IiwiZG9jdW1lbnQiLCJmaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZnJvbVBhdGhBbmRDb250ZW50IiwicmVwbGFjZSIsIkRPVUJMRV9TUEFDRSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7ZUFLUUEsSUFBSTs7SUEyRlRDLDhCQUE4QjtlQUE5QkEsOEJBQThCOzs7cUJBOUZwQixTQUFTO3lCQUNOLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1ELElBQUksaUJBMkZ0QixBQTNGWTthQUFNQSxJQUFJLENBQ1hFLElBQUksRUFBRUMsT0FBTzs7UUFDdkIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTyxDQUFDOzs7O1lBR3pCQyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sR0FBRztnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSSxDQUFDO2FBQ2xCOzs7WUFFREcsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsT0FBTyxJQUFJLENBQUNGLE9BQU8sQ0FBQzthQUNyQjs7O1lBRURHLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLElBQU1DLElBQUksR0FBRyxJQUFJLEFBQUM7Z0JBRWxCLE9BQU9BLElBQUksQ0FB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