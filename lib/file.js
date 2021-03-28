"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _mkdirp = _interopRequireDefault(require("mkdirp"));
var _necessary = require("necessary");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var readFile = _necessary.fileSystemUtilities.readFile, writeFile = _necessary.fileSystemUtilities.writeFile, isEntryFile = _necessary.fileSystemUtilities.isEntryFile, concatenatePaths = _necessary.pathUtilities.concatenatePaths, topmostDirectoryPathFromPath = _necessary.pathUtilities.topmostDirectoryPathFromPath;
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
            key: "save",
            value: function save(projectsDirectoryPath) {
                var absolutePath = concatenatePaths(projectsDirectoryPath, this.path), topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);
                _mkdirp.default.sync(topmostAbsoluteDirectoryPath);
                writeFile(absolutePath, this.content);
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
            key: "fromPath",
            value: function fromPath(path, projectsDirectoryPath) {
                var file = null;
                try {
                    var absolutePath = concatenatePaths(projectsDirectoryPath, path), entryFile = isEntryFile(absolutePath);
                    if (entryFile) {
                        var content = readFile(absolutePath);
                        content = convertContentTabsToWhitespace(content); ///
                        file = new File1(path, content);
                    }
                } catch (error) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbWtkaXJwIGZyb20gXCJta2RpcnBcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBpc0VudHJ5RmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGhpcy5wYXRoKSwgIC8vL1xuICAgICAgICAgIHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBta2RpcnAuc3luYyh0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIHRoaXMuY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBcIkZpbGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgICB0eXBlSlNPTiA9IGpzb25bXCJ0eXBlXCJdO1xuXG4gICAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgICAgICBwYXRoID0gcGF0aEpTT047ICAvLy9cblxuICAgICAgICBsZXQgY29udGVudCA9IGNvbnRlbnRKU09OOyAgLy8vXG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxuICAgICAgICAgICAgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBsZXQgY29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUGF0aCk7XG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURvY3VtZW50KGRvY3VtZW50KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBkb2N1bWVudC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHBhdGggPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aEFuZENvbnRlbnQocGF0aCwgY29udGVudCkge1xuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcdC9nLCBcIiAgXCIpOyB9IC8vL1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRU8sT0FBUTtJQUV3QixVQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0RCxRQUFRLEdBRm1DLFVBQVcscUJBRXRELFFBQVEsRUFBRSxTQUFTLEdBRndCLFVBQVcscUJBRTVDLFNBQVMsRUFBRSxXQUFXLEdBRlcsVUFBVyxxQkFFakMsV0FBVyxFQUNoQyxnQkFBZ0IsR0FIMkIsVUFBVyxlQUd0RCxnQkFBZ0IsRUFBRSw0QkFBNEIsR0FISCxVQUFXLGVBR3BDLDRCQUE0QjtJQUVqQyxLQUFJO2FBQUosS0FBSSxDQUNYLElBQUksRUFBRSxPQUFPOzhCQUROLEtBQUk7YUFFaEIsSUFBSSxHQUFHLElBQUk7YUFDWCxPQUFPLEdBQUcsT0FBTzs7aUJBSEwsS0FBSTs7QUFNdkIsZUFBTyxHQUFQLE9BQU87NEJBQVAsT0FBTzs0QkFDTyxJQUFJOzs7O0FBR2xCLGVBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVU7NEJBQ0ksT0FBTzs7OztBQUdyQixlQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNO29CQUNFLElBQUksR0FBRyxJQUFJO3VCQUVWLElBQUk7Ozs7QUFHYixlQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO29CQUNILFNBQVMsR0FBRyxLQUFLO3VCQUVoQixTQUFTOzs7O0FBR2xCLGVBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxJQUFJO3FCQUNMLElBQUks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