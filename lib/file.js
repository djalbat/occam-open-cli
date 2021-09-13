"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertContentTabsToWhitespace = convertContentTabsToWhitespace;
exports.default = void 0;
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
                    "type": type,
                    "path": path,
                    "content": content
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
                    var type = File.type, typeJSON = json["type"];
                    if (typeJSON === type) {
                        var pathJSON = json["path"], contentJSON = json["content"], path = pathJSON; ///
                        var content = contentJSON; ///
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
_defineProperty(File, "type", "File");
exports.default = File;
function convertContentTabsToWhitespace(content) {
    return content.replace(/\t/g, _constants.DOUBLE_SPACE);
} ///

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sIm5hbWVzIjpbIkRPVUJMRV9TUEFDRSIsIkZpbGUiLCJjb25zdHJ1Y3RvciIsInBhdGgiLCJjb250ZW50IiwiZ2V0UGF0aCIsImdldENvbnRlbnQiLCJpc0ZpbGUiLCJmaWxlIiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJzZXRQYXRoIiwic2V0Q29udGVudCIsInRvSlNPTiIsInR5cGUiLCJqc29uIiwiZnJvbUpTT04iLCJ0eXBlSlNPTiIsInBhdGhKU09OIiwiY29udGVudEpTT04iLCJjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UiLCJmcm9tRG9jdW1lbnQiLCJkb2N1bWVudCIsImZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJmcm9tUGF0aEFuZENvbnRlbnQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBa0dJLDhCQUE4QixHQUE5Qiw4QkFBOEI7O0FBaEdqQixHQUFhLENBQWIsVUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJCLElBQUksaUJBQVYsUUFBUTthQUFGLElBQUksQ0FDWCxJQUFJLEVBQUUsT0FBTzs4QkFETixJQUFJO1FBRXJCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87O2lCQUhMLElBQUk7O1lBTXZCLEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBVSxHQUFWLFVBQVU7bUJBQVYsUUFBUSxDQUFSLFVBQVUsR0FBRyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNyQixDQUFDOzs7WUFFRCxHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsR0FBSyxDQUFDLElBQUksR0FBRyxJQUFJO2dCQUVq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RSxPQUFPO2dCQUVuQyxNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7OztXQTNGa0IsSUFBSTs7Z0JBQUosSUFBSSxHQStDaEIsSUFBSSxJQUFHLElBQU07a0JBL0NELElBQUk7U0E4RlQsOEJBQThCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sUUFoR25ELFVBQWE7QUFnRzZELENBQUMsQUFBQyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSBmYWxzZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IFwiRmlsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICAgIGlmICh0eXBlSlNPTiA9PT0gdHlwZSkgeyAgLy8vXG4gICAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICAgIGNvbnRlbnRKU09OID0ganNvbltcImNvbnRlbnRcIl0sXG4gICAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTjsgIC8vL1xuXG4gICAgICAgIGxldCBjb250ZW50ID0gY29udGVudEpTT047ICAvLy9cblxuICAgICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Eb2N1bWVudChkb2N1bWVudCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZG9jdW1lbnQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGg7ICAvLy9cblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhBbmRDb250ZW50KHBhdGgsIGNvbnRlbnQpIHtcbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx0L2csIERPVUJMRV9TUEFDRSk7IH0gLy8vXG4iXX0=