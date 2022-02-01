"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _entries = _interopRequireDefault(require("./entries"));
var _filePath = require("./utilities/filePath");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Release = /*#__PURE__*/ function() {
    function Release(name, entries, versionNumber) {
        _classCallCheck(this, Release);
        this.name = name;
        this.entries = entries;
        this.versionNumber = versionNumber;
    }
    _createClass(Release, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return this.entries;
            }
        },
        {
            key: "getVersionNumber",
            value: function getVersionNumber() {
                return this.versionNumber;
            }
        },
        {
            key: "getFiles",
            value: function getFiles() {
                return this.entries.getFiles();
            }
        },
        {
            key: "getReadmeFile",
            value: function getReadmeFile() {
                var readmeFile = null;
                var files = this.getFiles();
                files.someFile(function(file) {
                    var filePath = file.getPath(), filePathReadmeFilePath = (0, _filePath).isFilePathReadmeFilePath(filePath);
                    if (filePathReadmeFilePath) {
                        readmeFile = file; ///
                        return true;
                    }
                });
                return readmeFile;
            }
        },
        {
            key: "getMetaJSONFile",
            value: function getMetaJSONFile() {
                var metaJSONFile = null;
                var files = this.getFiles();
                files.someFile(function(file) {
                    var filePath = file.getPath(), filePathMetaJSONFilePath = (0, _filePath).isFilePathMetaJSONFilePath(filePath);
                    if (filePathMetaJSONFilePath) {
                        metaJSONFile = file; ///
                        return true;
                    }
                });
                return metaJSONFile;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var entriesJSON = this.entries.toJSON(), name = this.name, entries = entriesJSON, versionNumber = this.versionNumber, json = {
                    name: name,
                    entries: entries,
                    versionNumber: versionNumber
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var name = json.name, versionNumber = json.versionNumber, entriesJSON = json.entries;
                json = entriesJSON; ///
                var entries = _entries.default.fromJSON(json), release = new Release(name, entries, versionNumber);
                return release;
            }
        }
    ]);
    return Release;
}();
exports.default = Release;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy52ZXJzaW9uTnVtYmVyID0gdmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldFZlcnNpb25OdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldEZpbGVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVzKCk7IH1cblxuICBnZXRSZWFkbWVGaWxlKCkge1xuICAgIGxldCByZWFkbWVGaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuc29tZUZpbGUoKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICBmaWxlUGF0aFJlYWRtZUZpbGVQYXRoID0gaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoUmVhZG1lRmlsZVBhdGgpIHtcbiAgICAgICAgcmVhZG1lRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWFkbWVGaWxlO1xuICB9XG5cbiAgZ2V0TWV0YUpTT05GaWxlKCkge1xuICAgIGxldCBtZXRhSlNPTkZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5zb21lRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHRoaXMudmVyc2lvbk51bWJlcixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIHZlcnNpb25OdW1iZXIsIGVudHJpZXM6IGVudHJpZXNKU09OIH0gPSBqc29uO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwidmVyc2lvbk51bWJlciIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0VmVyc2lvbk51bWJlciIsImdldEZpbGVzIiwiZ2V0UmVhZG1lRmlsZSIsInJlYWRtZUZpbGUiLCJmaWxlcyIsInNvbWVGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoUmVhZG1lRmlsZVBhdGgiLCJnZXRNZXRhSlNPTkZpbGUiLCJtZXRhSlNPTkZpbGUiLCJmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2UiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVEsR0FBVyxDQUFYLFFBQVc7QUFFc0MsR0FBc0IsQ0FBdEIsU0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEVBLE9BQU8saUJBQWIsUUFBUTthQUFGQSxPQUFPLENBQ2RDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxhQUFhOztRQUN0QyxJQUFJLENBQUNGLElBQUksR0FBR0EsSUFBSTtRQUNoQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTztRQUN0QixJQUFJLENBQUNDLGFBQWEsR0FBR0EsYUFBYTs7OztZQUdwQ0MsR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRLENBQVJBLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUNILElBQUk7WUFDbEIsQ0FBQzs7O1lBRURJLEdBQVUsRUFBVkEsQ0FBVTttQkFBVkEsUUFBUSxDQUFSQSxVQUFVLEdBQUcsQ0FBQztnQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDSCxPQUFPO1lBQ3JCLENBQUM7OztZQUVESSxHQUFnQixFQUFoQkEsQ0FBZ0I7bUJBQWhCQSxRQUFRLENBQVJBLGdCQUFnQixHQUFHLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUNILGFBQWE7WUFDM0IsQ0FBQzs7O1lBRURJLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDTCxPQUFPLENBQUNLLFFBQVE7WUFBSSxDQUFDOzs7WUFFOUNDLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFHLENBQUNDLFVBQVUsR0FBRyxJQUFJO2dCQUVyQixHQUFLLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNILFFBQVE7Z0JBRTNCRyxLQUFLLENBQUNDLFFBQVEsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO29CQUN4QixHQUFLLENBQUNDLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLElBQ3ZCQyxzQkFBc0IsT0E5Qm1DLFNBQXNCLDJCQThCN0JGLFFBQVE7b0JBRWhFLEVBQUUsRUFBRUUsc0JBQXNCLEVBQUUsQ0FBQzt3QkFDM0JOLFVBQVUsR0FBR0csSUFBSSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt3QkFFdkIsTUFBTSxDQUFDLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE1BQU0sQ0FBQ0gsVUFBVTtZQUNuQixDQUFDOzs7WUFFRE8sR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixHQUFHLENBQUNDLFlBQVksR0FBRyxJQUFJO2dCQUV2QixHQUFLLENBQUNQLEtBQUssR0FBRyxJQUFJLENBQUNILFFBQVE7Z0JBRTNCRyxLQUFLLENBQUNDLFFBQVEsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO29CQUN4QixHQUFLLENBQUNDLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLElBQ3ZCSSx3QkFBd0IsT0FqRGlDLFNBQXNCLDZCQWlEekJMLFFBQVE7b0JBRXBFLEVBQUUsRUFBRUssd0JBQXdCLEVBQUUsQ0FBQzt3QkFDN0JELFlBQVksR0FBR0wsSUFBSSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt3QkFFekIsTUFBTSxDQUFDLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE1BQU0sQ0FBQ0ssWUFBWTtZQUNyQixDQUFDOzs7WUFFREUsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQ2lCLE1BQU0sSUFDakNsQixJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxPQUFPLEdBQUdrQixXQUFXLEVBQ3JCakIsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxFQUNsQ2tCLElBQUksR0FBRyxDQUFDO29CQUNOcEIsSUFBSSxFQUFKQSxJQUFJO29CQUNKQyxPQUFPLEVBQVBBLE9BQU87b0JBQ1BDLGFBQWEsRUFBYkEsYUFBYTtnQkFDZixDQUFDO2dCQUVQLE1BQU0sQ0FBQ2tCLElBQUk7WUFDYixDQUFDOzs7O1lBRU1DLEdBQVEsRUFBUkEsQ0FBUTttQkFBZixRQUFRLENBQURBLFFBQVEsQ0FBQ0QsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLEdBQUssQ0FBR3BCLElBQUksR0FBMENvQixJQUFJLENBQWxEcEIsSUFBSSxFQUFFRSxhQUFhLEdBQTJCa0IsSUFBSSxDQUE1Q2xCLGFBQWEsRUFBV2lCLFdBQVcsR0FBS0MsSUFBSSxDQUE3Qm5CLE9BQU87Z0JBRXBDbUIsSUFBSSxHQUFHRCxXQUFXLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV2QixHQUFLLENBQUNsQixPQUFPLEdBbEZHLFFBQVcsU0FrRkhvQixRQUFRLENBQUNELElBQUksR0FDL0JFLE9BQU8sR0FBRyxHQUFHLENBQUN2QixPQUFPLENBQUNDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxhQUFhO2dCQUV4RCxNQUFNLENBQUNvQixPQUFPO1lBQ2hCLENBQUM7Ozs7O2tCQWxGa0J2QixPQUFPIn0=