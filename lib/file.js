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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sIm5hbWVzIjpbIkZJTEVfVFlQRSIsIkRPVUJMRV9TUEFDRSIsIkZpbGUiLCJjb25zdHJ1Y3RvciIsInBhdGgiLCJjb250ZW50IiwiZ2V0UGF0aCIsImdldENvbnRlbnQiLCJpc0ZpbGUiLCJmaWxlIiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJzZXRQYXRoIiwic2V0Q29udGVudCIsInRvSlNPTiIsInR5cGUiLCJqc29uIiwiZnJvbUpTT04iLCJjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UiLCJmcm9tRG9jdW1lbnQiLCJkb2N1bWVudCIsImZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJmcm9tUGF0aEFuZENvbnRlbnQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBZ0dJLDhCQUE4QixHQUE5Qiw4QkFBOEI7O0FBOUZwQixHQUFTLENBQVQsTUFBUztBQUNOLEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckIsSUFBSSxpQkFBVixRQUFRO2FBQUYsSUFBSSxDQUNYLElBQUksRUFBRSxPQUFPOzhCQUROLElBQUk7UUFFckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTzs7aUJBSEwsSUFBSTs7WUFNdkIsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTttQkFBVixRQUFRLENBQVIsVUFBVSxHQUFHLENBQUM7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3JCLENBQUM7OztZQUVELEdBQU0sR0FBTixNQUFNO21CQUFOLFFBQVEsQ0FBUixNQUFNLEdBQUcsQ0FBQztnQkFDUixHQUFLLENBQUMsSUFBSSxHQUFHLElBQUk7Z0JBRWpCLE1B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TUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLFFBN0ZuRCxVQUFhO0FBNkY2RCxDQUFDLEFBQUMsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZJTEVfVFlQRSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRklMRV9UWVBFO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgICAgaWYgKHR5cGUgPT09IEZJTEVfVFlQRSkge1xuICAgICAgICBsZXQgeyBjb250ZW50IH0gPSBqc29uO1xuXG4gICAgICAgIGNvbnN0IHsgcGF0aCB9ID0ganNvbjtcblxuICAgICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Eb2N1bWVudChkb2N1bWVudCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZG9jdW1lbnQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGg7ICAvLy9cblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhBbmRDb250ZW50KHBhdGgsIGNvbnRlbnQpIHtcbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx0L2csIERPVUJMRV9TUEFDRSk7IH0gLy8vXG4iXX0=