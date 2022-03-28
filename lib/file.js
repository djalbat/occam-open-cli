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
exports.default = File;
_defineProperty(File, "type", _types.FILE_TYPE);
function convertContentTabsToWhitespace(content) {
    return content.replace(/\t/g, _constants.DOUBLE_SPACE);
} ///

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSBmYWxzZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfVFlQRTtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBGSUxFX1RZUEUpIHtcbiAgICAgICAgbGV0IHsgY29udGVudCB9ID0ganNvbjtcblxuICAgICAgICBjb25zdCB7IHBhdGggfSA9IGpzb247XG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGRvY3VtZW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgcGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQW5kQ29udGVudChwYXRoLCBjb250ZW50KSB7XG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcdC9nLCBET1VCTEVfU1BBQ0UpOyB9IC8vL1xuIl0sIm5hbWVzIjpbImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsIkZpbGUiLCJwYXRoIiwiY29udGVudCIsImdldFBhdGgiLCJnZXRDb250ZW50IiwiaXNGaWxlIiwiZmlsZSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5Iiwic2V0UGF0aCIsInNldENvbnRlbnQiLCJ0b0pTT04iLCJ0eXBlIiwianNvbiIsImZyb21KU09OIiwiRklMRV9UWVBFIiwiZnJvbURvY3VtZW50IiwiZG9jdW1lbnQiLCJmaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZnJvbVBhdGhBbmRDb250ZW50IiwicmVwbGFjZSIsIkRPVUJMRV9TUEFDRSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7O1FBZ0dHQSw4QkFBOEIsR0FBOUJBLDhCQUE4Qjs7QUE5RnBCLElBQUEsTUFBUyxXQUFULFNBQVMsQ0FBQTtBQUNOLElBQUEsVUFBYSxXQUFiLGFBQWEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUMsSUFBSSxpQkEyRnRCLEFBM0ZZO2FBQU1BLElBQUksQ0FDWEMsSUFBSSxFQUFFQyxPQUFPOztRQUN2QixJQUFJLENBQUNELElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPLENBQUM7Ozs7WUFHekJDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJLENBQUM7YUFDbEI7OztZQUVERyxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxPQUFPLElBQUksQ0FBQ0YsT0FBTyxDQUFDO2FBQ3JCOzs7WUFFREcsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBTUMsSUFBSSxHQUFHLElBQUksQUFBQztnQkFF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