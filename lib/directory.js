"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
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
        }
    ]);
    return Directory;
}();
_defineProperty(Directory, "type", "Directory");
exports.default = Directory;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gdHJ1ZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBEaXJlY3RvcnksXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gXCJEaXJlY3RvcnlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBkaXJlY3RvcnkgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gRGlyZWN0b3J5LFxuICAgICAgICAgICAgdHlwZUpTT04gPSBqc29uW1widHlwZVwiXTtcblxuICAgICAgaWYgKHR5cGVKU09OID09PSB0eXBlKSB7ICAvLy9cbiAgICAgICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICAgICAgcGF0aCA9IHBhdGhKU09OOyAgLy8vXG5cbiAgICAgICAgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVTLFNBQVM7YUFBVCxTQUFTLENBQ2hCLElBQUk7OEJBREcsU0FBUzthQUVyQixJQUFJLEdBQUcsSUFBSTs7aUJBRkMsU0FBUzs7WUFLNUIsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTzs0QkFDTyxJQUFJOzs7O1lBR2xCLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU07b0JBQ0UsSUFBSSxHQUFHLEtBQUs7dUJBRVgsSUFBSTs7OztZQUdiLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ0gsU0FBUyxHQUFHLElBQUk7dUJBRWYsU0FBUzs7OztZQUdsQixHQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNO29CQUNJLElBQUksR0FBSyxTQUFTLENBQWxCLElBQUksRUFDTixJQUFJLFFBQVEsSUFBSSxFQUNoQixJQUFJO3FCQUNGLElBQU0sR0FBRSxJQUFJO3FCQUNaLElBQU0sR0FBRSxJQUFJOzt1QkFHYixJQUFJOzs7OztZQUtOLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxJQUFJO29CQUNkLFNBQVMsR0FBRyxJQUFJO29CQUVoQixJQUFJLEtBQUssSUFBSTt3QkFDUCxJQUFJLEdBQUssU0FBUyxDQUFsQixJQUFJLEVBQ04sUUFBUSxHQUFHLElBQUksRUFBQyxJQUFNO3dCQUV4QixRQUFRLEtBQUssSUFBSTs0QkFDYixRQUFRLEdBQUcsSUFBSSxFQUFDLElBQU0sSUFDdEIsSUFBSSxHQUFHLFFBQVEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7d0JBRTNCLFNBQVMsT0FBTyxTQUFTLENBQUMsSUFBSTs7O3VCQUkzQixTQUFTOzs7O1dBakRDLFNBQVM7O2dCQUFULFNBQVMsR0FnQ3JCLElBQUksSUFBRyxTQUFXO2tCQWhDTixTQUFTIn0=