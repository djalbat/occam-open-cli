"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return File;
    }
});
var _types = require("./types");
var _content = require("./utilities/content");
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
                        content = (0, _content.convertContentTabsToWhitespace)(content); ///
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
                content = (0, _content.convertContentTabsToWhitespace)(content); ///
                var file = new File(path, content);
                return file;
            }
        },
        {
            key: "fromPathAndContent",
            value: function fromPathAndContent(path, content) {
                content = (0, _content.convertContentTabsToWhitespace)(content); ///
                var file = new File(path, content);
                return file;
            }
        }
    ]);
    return File;
}();
_defineProperty(File, "type", _types.FILE_TYPE);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBGSUxFX1RZUEU7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgICBpZiAodHlwZSA9PT0gRklMRV9UWVBFKSB7XG4gICAgICAgIGxldCB7IGNvbnRlbnQgfSA9IGpzb247XG5cbiAgICAgICAgY29uc3QgeyBwYXRoIH0gPSBqc29uO1xuXG4gICAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURvY3VtZW50KGRvY3VtZW50KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBkb2N1bWVudC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHBhdGggPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aEFuZENvbnRlbnQocGF0aCwgY29udGVudCkge1xuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbGUiLCJwYXRoIiwiY29udGVudCIsImdldFBhdGgiLCJnZXRDb250ZW50IiwiaXNGaWxlIiwiZmlsZSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5Iiwic2V0UGF0aCIsInNldENvbnRlbnQiLCJ0b0pTT04iLCJ0eXBlIiwianNvbiIsImZyb21KU09OIiwiRklMRV9UWVBFIiwiY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIiwiZnJvbURvY3VtZW50IiwiZG9jdW1lbnQiLCJmaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZnJvbVBhdGhBbmRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztxQkFISzt1QkFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLHFCQUFOO2FBQU1BLEtBQ1BDLElBQUksRUFBRUMsT0FBTzs4QkFETkY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztpQkFIRUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTUMsT0FBTyxJQUFJO2dCQUVqQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osSUFBTUMsWUFBWSxLQUFLO2dCQUV2QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFSLElBQUksRUFBRTtnQkFDWixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXUixPQUFPLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtZQUNqQjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU0sQUFBRUMsT0FuQ1NaLEtBbUNUWSxNQUNGWCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsVUFBVSxJQUFJLENBQUNBLE9BQU8sRUFDdEJXLE9BQU87b0JBQ0xELE1BQUFBO29CQUNBWCxNQUFBQTtvQkFDQUMsU0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT1c7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUU7Z0JBQ3BCLElBQUlQLE9BQU8sSUFBSTtnQkFFZixJQUFJTyxTQUFTLElBQUksRUFBRTtvQkFDakIsSUFBTSxBQUFFRCxPQUFTQyxLQUFURDtvQkFFUixJQUFJQSxTQUFTRyxnQkFBUyxFQUFFO3dCQUN0QixJQUFJLEFBQUViLFVBQVlXLEtBQVpYO3dCQUVOLElBQU0sQUFBRUQsT0FBU1ksS0FBVFo7d0JBRVJDLFVBQVVjLElBQUFBLHVDQUE4QixFQUFDZCxVQUFXLEdBQUc7d0JBRXZESSxPQUFPLElBOURNTixLQThER0MsTUFBTUM7b0JBQ3hCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPSTtZQUNUOzs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFO2dCQUM1QixJQUFNQyxXQUFXRCxTQUFTRSxXQUFXLElBQy9CbkIsT0FBT2tCLFVBQVcsR0FBRztnQkFFM0IsSUFBSWpCLFVBQVVnQixTQUFTZCxVQUFVO2dCQUVqQ0YsVUFBVWMsSUFBQUEsdUNBQThCLEVBQUNkLFVBQVcsR0FBRztnQkFFdkQsSUFBTUksT0FBTyxJQTdFSU4sS0E2RUtDLE1BQU1DO2dCQUU1QixPQUFPSTtZQUNUOzs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CcEIsSUFBSSxFQUFFQyxPQUFPLEVBQUU7Z0JBQ3ZDQSxVQUFVYyxJQUFBQSx1Q0FBOEIsRUFBQ2QsVUFBVyxHQUFHO2dCQUV2RCxJQUFNSSxPQUFPLElBckZJTixLQXFGS0MsTUFBTUM7Z0JBRTVCLE9BQU9JO1lBQ1Q7OztXQXhGbUJOOztBQStDbkIsZ0JBL0NtQkEsTUErQ1pZLFFBQU9HLGdCQUFTIn0=