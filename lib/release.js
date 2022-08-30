"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Release;
    }
});
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./entries"));
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
                    var filePath = file.getPath(), filePathReadmeFilePath = (0, _filePath.isFilePathReadmeFilePath)(filePath);
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
                    var filePath = file.getPath(), filePathMetaJSONFilePath = (0, _filePath.isFilePathMetaJSONFilePath)(filePath);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy52ZXJzaW9uTnVtYmVyID0gdmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldFZlcnNpb25OdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldEZpbGVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVzKCk7IH1cblxuICBnZXRSZWFkbWVGaWxlKCkge1xuICAgIGxldCByZWFkbWVGaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuc29tZUZpbGUoKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICBmaWxlUGF0aFJlYWRtZUZpbGVQYXRoID0gaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoUmVhZG1lRmlsZVBhdGgpIHtcbiAgICAgICAgcmVhZG1lRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWFkbWVGaWxlO1xuICB9XG5cbiAgZ2V0TWV0YUpTT05GaWxlKCkge1xuICAgIGxldCBtZXRhSlNPTkZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5zb21lRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHRoaXMudmVyc2lvbk51bWJlcixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIHZlcnNpb25OdW1iZXIsIGVudHJpZXM6IGVudHJpZXNKU09OIH0gPSBqc29uO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsInZlcnNpb25OdW1iZXIiLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImdldFZlcnNpb25OdW1iZXIiLCJnZXRGaWxlcyIsImdldFJlYWRtZUZpbGUiLCJyZWFkbWVGaWxlIiwiZmlsZXMiLCJzb21lRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImdldFBhdGgiLCJmaWxlUGF0aFJlYWRtZUZpbGVQYXRoIiwiaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoIiwiZ2V0TWV0YUpTT05GaWxlIiwibWV0YUpTT05GaWxlIiwiZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkVudHJpZXMiLCJyZWxlYXNlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFNUUEsT0FBTzs7OzREQUpSLFdBQVc7d0JBRXNDLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEFBQU1BLE9BQU8saUJBQWI7YUFBTUEsT0FBTyxDQUNkQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsYUFBYTs4QkFEckJILE9BQU87UUFFeEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQSxhQUFhLENBQUM7O2lCQUpsQkgsT0FB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