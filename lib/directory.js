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
var concatenatePaths = pathUtilities.concatenatePaths, isEntryDirectory = fileSystemUtilities.isEntryDirectory;
var Directory = function() {
    function Directory(path) {
        _classCallCheck(this, Directory);
        this.path = path;
    }
    _createClass(Directory, [
        {
            key: "getPath",
            value: function getPath() {
                return this.path;
            }
        },
        {
            key: "isFile",
            value: function isFile() {
                var file = false;
                return file;
            }
        },
        {
            key: "isDirectory",
            value: function isDirectory() {
                var directory = true;
                return directory;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var type = Directory.type, path = this.path, json = {
                    "type": type,
                    "path": path
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var directory = null;
                if (json !== null) {
                    var type = Directory.type, typeJSON = json["type"];
                    if (typeJSON === type) {
                        var pathJSON = json["path"], path = pathJSON; ///
                        directory = new Directory(path);
                    }
                }
                return directory;
            }
        },
        {
            key: "fromPath",
            value: function fromPath(path, projectsDirectoryPath) {
                var directory = null;
                try {
                    var absolutePath = concatenatePaths(projectsDirectoryPath, path), entryDirectory = isEntryDirectory(absolutePath);
                    if (entryDirectory) {
                        directory = new Directory(path);
                    }
                } catch (error) {
                }
                return directory;
            }
        }
    ]);
    return Directory;
}();
_defineProperty(Directory, "type", "Directory");
export { Directory as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5IHtcbiAgY29uc3RydWN0b3IocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGg7XG4gIH1cblxuICBpc0ZpbGUoKSB7XG4gICAgY29uc3QgZmlsZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IERpcmVjdG9yeSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBcIkRpcmVjdG9yeVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyB0eXBlIH0gPSBEaXJlY3RvcnksXG4gICAgICAgICAgICB0eXBlSlNPTiA9IGpzb25bXCJ0eXBlXCJdO1xuXG4gICAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgICAgICBwYXRoID0gcGF0aEpTT047ICAvLy9cblxuICAgICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxuICAgICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRUgsYUFBYSxFQUFFLG1CQUFtQixTQUFRLFNBQVc7SUFFdEQsZ0JBQWdCLEdBQUssYUFBYSxDQUFsQyxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEdBQUssbUJBQW1CLENBQXhDLGdCQUFnQjtJQUVILFNBQVM7YUFBVCxTQUFTLENBQ2hCLElBQUk7OEJBREcsU0FBUzthQUVyQixJQUFJLEdBQUcsSUFBSTs7aUJBRkMsU0FBUzs7QUFLNUIsZUFBTyxHQUFQLE9BQU87NEJBQVAsT0FBTzs0QkFDTyxJQUFJOzs7O0FBR2xCLGVBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU07b0JBQ0UsSUFBSSxHQUFHLEtBQUs7dUJBRVgsSUFBSTs7OztBQUdiLGVBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ0gsU0FBUyxHQUFHLElBQUk7dUJBRWYsU0FBUzs7OztBQUdsQixlQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNO29CQUNJLElBQUksR0FBSyxTQUFTLENBQWxCLElBQUksRUFDTixJQUFJLFFBQVEsSUFBSSxFQUNoQixJQUFJO3FCQUNGLElBQU0sR0FBRSxJQUFJO3FCQUNaLElBQU0sR0FBRSxJQUFJOzt1QkFHYixJQUFJOzs7OztBQUtOLGVBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxJQUFJO29CQUNkLFNBQVMsR0FBRyxJQUFJO29CQUVoQixJQUFJLEtBQUssSUFBSTt3QkFDUCxJQUFJLEdBQUssU0FBUyxDQUFsQixJQUFJLEVBQ04sUUFBUSxHQUFHLElBQUksRUFBQyxJQUFNO3dCQUV4QixRQUFRLEtBQUssSUFBSTs0QkFDYixRQUFRLEdBQUcsSUFBSSxFQUFDLElBQU0sSUFDdEIsSUFBSSxHQUFHLFFBQVEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7QUFFM0IsaUNBQVMsT0FBTyxTQUFTLENBQUMsSUFBSTs7O3VCQUkzQixTQUFTOzs7O0FBR1gsZUFBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxDQUFDLElBQUksRUFBRSxxQkFBcUI7b0JBQ3JDLFNBQVMsR0FBRyxJQUFJOzt3QkFHWixZQUFZLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsSUFBSSxHQUMzRCxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsWUFBWTt3QkFFaEQsY0FBYztBQUNoQixpQ0FBUyxPQUFPLFNBQVMsQ0FBQyxJQUFJOzt5QkFFekIsS0FBSzs7dUJBSVAsU0FBUzs7OztXQWxFQyxTQUFTOztnQkFBVCxTQUFTLEdBZ0NyQixJQUFJLElBQUcsU0FBVztTQWhDTixTQUFTIn0=