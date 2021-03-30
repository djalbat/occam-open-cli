"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertContentTabsToWhitespace = convertContentTabsToWhitespace;
exports.default = void 0;
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
var File1 = function() {
    function File1(path, content) {
        _classCallCheck(this, File1);
        this.path = path;
        this.content = content;
    }
    _createClass(File1, [
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
                var type = File1.type, path = this.path, content = this.content, json = {
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
                    var type = File1.type, typeJSON = json["type"];
                    if (typeJSON === type) {
                        var pathJSON = json["path"], contentJSON = json["content"], path = pathJSON; ///
                        var content = contentJSON; ///
                        content = convertContentTabsToWhitespace(content); ///
                        file = new File1(path, content);
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
                var file = new File1(path, content);
                return file;
            }
        },
        {
            key: "fromPathAndContent",
            value: function fromPathAndContent(path, content) {
                content = convertContentTabsToWhitespace(content); ///
                var file = new File1(path, content);
                return file;
            }
        }
    ]);
    return File1;
}();
_defineProperty(File1, "type", "File");
exports.default = File1;
function convertContentTabsToWhitespace(content) {
    return content.replace(/\t/g, "  ");
} ///

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBcIkZpbGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgICB0eXBlSlNPTiA9IGpzb25bXCJ0eXBlXCJdO1xuXG4gICAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgICAgICBwYXRoID0gcGF0aEpTT047ICAvLy9cblxuICAgICAgICBsZXQgY29udGVudCA9IGNvbnRlbnRKU09OOyAgLy8vXG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGRvY3VtZW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgcGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQW5kQ29udGVudChwYXRoLCBjb250ZW50KSB7XG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcdC9nLCBcIiAgXCIpOyB9IC8vL1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFnR0ksOEJBQThCLEdBQTlCLDhCQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTlGekIsS0FBSTthQUFKLEtBQUksQ0FDWCxJQUFJLEVBQUUsT0FBTzs4QkFETixLQUFJO2FBRWhCLElBQUksR0FBRyxJQUFJO2FBQ1gsT0FBTyxHQUFHLE9BQU87O2lCQUhMLEtBQUk7O0FBTXZCLGVBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87NEJBQ08sSUFBSTs7OztBQUdsQixlQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVOzRCQUNJLE9BQU87Ozs7QUFHckIsZUFBTSxHQUFOLE1BQU07NEJBQU4sTUFBTTtvQkFDRSxJQUFJLEdBQUcsSUFBSTt1QkFFVixJQUFJOzs7O0FBR2IsZUFBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDSCxTQUFTLEdBQUcsS0FBSzt1QkFFaEIsU0FBUzs7OztBQUdsQixlQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsSUFBSTtxQkFDTCxJQUFJLEdBQUcsSUFBSTs7OztBQUdsQixlQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVLENBQUMsT0FBTztxQkFDWCxPQUFPLEdBQUcsT0FBTzs7OztBQUd4QixlQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNO29CQUNJLElBQUksR0FBSyxLQUFJLENBQWIsSUFBSSxFQUNOLElBQUksUUFBUSxJQUFJLEVBQ2hCLE9BQU8sUUFBUSxPQUFPLEVBQ3RCLElBQUk7cUJBQ0YsSUFBTSxHQUFFLElBQUk7cUJBQ1osSUFBTSxHQUFFLElBQUk7cUJBQ1osT0FBUyxHQUFFLE9BQU87O3VCQUduQixJQUFJOzs7OztBQUtOLGVBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxJQUFJO29CQUNkLElBQUksR0FBRyxJQUFJO29CQUVYLElBQUksS0FBSyxJQUFJO3dCQUNQLElBQUksR0FBSyxLQUFJLENBQWIsSUFBSSxFQUNOLFFBQVEsR0FBRyxJQUFJLEVBQUMsSUFBTTt3QkFFeEIsUUFBUSxLQUFLLElBQUk7NEJBQ2IsUUFBUSxHQUFHLElBQUksRUFBQyxJQUFNLElBQ3RCLFdBQVcsR0FBRyxJQUFJLEVBQUMsT0FBUyxJQUM1QixJQUFJLEdBQUcsUUFBUSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs0QkFFdkIsT0FBTyxHQUFHLFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7QUFFL0IsK0JBQU8sR0FBRyw4QkFBOEIsQ0FBQyxPQUFPLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0FBRXZELDRCQUFJLE9BQU8sS0FBSSxDQUFDLElBQUksRUFBRSxPQUFPOzs7dUJBSTFCLElBQUk7Ozs7QUFHTixlQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLENBQUMsUUFBUTtvQkFDcEIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLElBQy9CLElBQUksR0FBRyxRQUFRLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUV2QixPQUFPLEdBQUcsUUFBUSxDQUFDLFVBQVU7QUFFakMsdUJBQU8sR0FBRyw4QkFBOEIsQ0FBQyxPQUFPLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUVqRCxJQUFJLE9BQU8sS0FBSSxDQUFDLElBQUksRUFBRSxPQUFPO3VCQUU1QixJQUFJOzs7O0FBR04sZUFBa0IsR0FBbEIsa0JBQWtCOzRCQUFsQixrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsT0FBTztBQUNyQyx1QkFBTyxHQUFHLDhCQUE4QixDQUFDLE9BQU8sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRWpELElBQUksT0FBTyxLQUFJLENBQUMsSUFBSSxFQUFFLE9BQU87dUJBRTVCLElBQUk7Ozs7V0ExRk0sS0FBSTs7Z0JBQUosS0FBSSxHQStDaEIsSUFBSSxJQUFHLElBQU07a0JBL0NELEtBQUk7U0E4RlQsOEJBQThCLENBQUMsT0FBTztXQUFXLE9BQU8sQ0FBQyxPQUFPLFNBQVEsRUFBSTtDQUFLLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRyJ9