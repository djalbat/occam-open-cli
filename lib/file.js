"use strict";
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
import { pathUtilities, fileSystemUtilities } from "necessary";
import mkdirp from "mkdirp";
var readFile = fileSystemUtilities.readFile, writeFile = fileSystemUtilities.writeFile, isEntryFile = fileSystemUtilities.isEntryFile, concatenatePaths = pathUtilities.concatenatePaths, topmostDirectoryPathFromPath = pathUtilities.topmostDirectoryPathFromPath;
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
                mkdirp.sync(topmostAbsoluteDirectoryPath);
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
export { File1 as default };
function convertContentTabsToWhitespace(content) {
    return content.replace(/\t/g, "  ");
} ///

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgbWtkaXJwIGZyb20gXCJta2RpcnBcIjtcblxuY29uc3QgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBpc0VudHJ5RmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIGNvbnRlbnQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGhpcy5wYXRoKSwgIC8vL1xuICAgICAgICAgIHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBta2RpcnAuc3luYyh0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIHRoaXMuY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBcIkZpbGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgICB0eXBlSlNPTiA9IGpzb25bXCJ0eXBlXCJdO1xuXG4gICAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgICAgICBwYXRoID0gcGF0aEpTT047ICAvLy9cblxuICAgICAgICBsZXQgY29udGVudCA9IGNvbnRlbnRKU09OOyAgLy8vXG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgZmlsZSA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxuICAgICAgICAgICAgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBsZXQgY29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUGF0aCk7XG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURvY3VtZW50KGRvY3VtZW50KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBkb2N1bWVudC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHBhdGggPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aEFuZENvbnRlbnQocGF0aCwgY29udGVudCkge1xuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcdC9nLCBcIiAgXCIpOyB9IC8vL1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVILGFBQWEsRUFBRSxtQkFBbUIsU0FBUSxTQUFXO09BRXZELE1BQU0sT0FBTSxNQUFRO0lBRW5CLFFBQVEsR0FBNkIsbUJBQW1CLENBQXhELFFBQVEsRUFBRSxTQUFTLEdBQWtCLG1CQUFtQixDQUE5QyxTQUFTLEVBQUUsV0FBVyxHQUFLLG1CQUFtQixDQUFuQyxXQUFXLEVBQ2hDLGdCQUFnQixHQUFtQyxhQUFhLENBQWhFLGdCQUFnQixFQUFFLDRCQUE0QixHQUFLLGFBQWEsQ0FBOUMsNEJBQTRCO0lBRWpDLEtBQUk7YUFBSixLQUFJLENBQ1gsSUFBSSxFQUFFLE9BQU87OEJBRE4sS0FBSTthQUVoQixJQUFJLEdBQUcsSUFBSTthQUNYLE9BQU8sR0FBRyxPQUFPOztpQkFITCxLQUFJOztBQU12QixlQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPOzRCQUNPLElBQUk7Ozs7QUFHbEIsZUFBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTs0QkFDSSxPQUFPOzs7O0FBR3JCLGVBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU07b0JBQ0UsSUFBSSxHQUFHLElBQUk7dUJBRVYsSUFBSTs7OztBQUdiLGVBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ0gsU0FBUyxHQUFHLEtBQUs7dUJBRWhCLFNBQVM7Ozs7QUFHbEIsZUFBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxDQUFDLElBQUk7cUJBQ0wsSUFBSSxHQUFHLElBQUk7Ozs7QUFHbEIsZUFBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxDQUFDLE9BQU87cUJBQ1gsT0FBTyxHQUFHLE9BQU87Ozs7QUFHeEIsZUFBSSxHQUFKLElBQUk7NEJBQUosSUFBSSxDQUFDLHFCQUFxQjtvQkFDbEIsWUFBWSxHQUFHLGdCQUFnQixDQUFDLHFCQUFxQixPQUFPLElBQUksR0FDaEUsNEJBQTRCLEdBQUcsNEJBQTRCLENBQUMsWUFBWTtBQUU5RSxzQkFBTSxDQUFDLElBQUksQ0FBQyw0QkFBNEI7QUFFeEMseUJBQVMsQ0FBQyxZQUFZLE9BQU8sT0FBTzs7OztBQUd0QyxlQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNO29CQUNJLElBQUksR0FBSyxLQUFJLENBQWIsSUFBSSxFQUNOLElBQUksUUFBUSxJQUFJLEVBQ2hCLE9BQU8sUUFBUSxPQUFPLEVBQ3RCLElBQUk7cUJBQ0YsSUFBTSxHQUFFLElBQUk7cUJBQ1osSUFBTSxHQUFFLElBQUk7cUJBQ1osT0FBUyxHQUFFLE9BQU87O3VCQUduQixJQUFJOzs7OztBQUtOLGVBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxJQUFJO29CQUNkLElBQUksR0FBRyxJQUFJO29CQUVYLElBQUksS0FBSyxJQUFJO3dCQUNQLElBQUksR0FBSyxLQUFJLENBQWIsSUFBSSxFQUNOLFFBQVEsR0FBRyxJQUFJLEVBQUMsSUFBTTt3QkFFeEIsUUFBUSxLQUFLLElBQUk7NEJBQ2IsUUFBUSxHQUFHLElBQUksRUFBQyxJQUFNLElBQ3RCLFdBQVcsR0FBRyxJQUFJLEVBQUMsT0FBUyxJQUM1QixJQUFJLEdBQUcsUUFBUSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs0QkFFdkIsT0FBTyxHQUFHLFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7QUFFL0IsK0JBQU8sR0FBRyw4QkFBOEIsQ0FBQyxPQUFPLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0FBRXZELDRCQUFJLE9BQU8sS0FBSSxDQUFDLElBQUksRUFBRSxPQUFPOzs7dUJBSTFCLElBQUk7Ozs7QUFHTixlQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFxQjtvQkFDckMsSUFBSSxHQUFHLElBQUk7O3dCQUdQLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEdBQzNELFNBQVMsR0FBRyxXQUFXLENBQUMsWUFBWTt3QkFFdEMsU0FBUzs0QkFDUCxPQUFPLEdBQUcsUUFBUSxDQUFDLFlBQVk7QUFFbkMsK0JBQU8sR0FBRyw4QkFBOEIsQ0FBQyxPQUFPLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0FBRXZELDRCQUFJLE9BQU8sS0FBSSxDQUFDLElBQUksRUFBRSxPQUFPOzt5QkFFeEIsS0FBSzs7dUJBSVAsSUFBSTs7OztBQUdOLGVBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksQ0FBQyxRQUFRO29CQUNwQixRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsSUFDL0IsSUFBSSxHQUFHLFFBQVEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRXZCLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVTtBQUVqQyx1QkFBTyxHQUFHLDhCQUE4QixDQUFDLE9BQU8sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRWpELElBQUksT0FBTyxLQUFJLENBQUMsSUFBSSxFQUFFLE9BQU87dUJBRTVCLElBQUk7Ozs7QUFHTixlQUFrQixHQUFsQixrQkFBa0I7NEJBQWxCLGtCQUFrQixDQUFDLElBQUksRUFBRSxPQUFPO0FBQ3JDLHVCQUFPLEdBQUcsOEJBQThCLENBQUMsT0FBTyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFakQsSUFBSSxPQUFPLEtBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTzt1QkFFNUIsSUFBSTs7OztXQXhITSxLQUFJOztnQkFBSixLQUFJLEdBd0RoQixJQUFJLElBQUcsSUFBTTtTQXhERCxLQUFJO1NBNEhoQiw4QkFBOEIsQ0FBQyxPQUFPO1dBQVcsT0FBTyxDQUFDLE9BQU8sU0FBUSxFQUFJO0NBQUssQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHIn0=