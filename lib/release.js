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
var Release = function() {
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
                    var filePath = file.getPath(), filePathReadmeFilePath = _filePath.isFilePathReadmeFilePath(filePath);
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
                    var filePath = file.getPath(), filePathMetaJSONFilePath = _filePath.isFilePathMetaJSONFilePath(filePath);
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
                var nameJSON = json["name"], entriesJSON = json["entries"], versionNumberJSON = json["versionNumber"], name = nameJSON, entries = _entries.default.fromJSON(entriesJSON), versionNumber = versionNumberJSON, release = new Release(name, entries, versionNumber);
                return release;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var topmostDirectoryName = name, projectsDirectoryPath = ".", loadOnlyRecognisedFiles = true, doNotLoadHiddenFilesAndDirectories = true, entries = _entries.default.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories), versionNumber = null, release = new Release(name, entries, versionNumber);
                return release;
            }
        }
    ]);
    return Release;
}();
exports.default = Release;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy52ZXJzaW9uTnVtYmVyID0gdmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldFZlcnNpb25OdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldEZpbGVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVzKCk7IH1cblxuICBnZXRSZWFkbWVGaWxlKCkge1xuICAgIGxldCByZWFkbWVGaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuc29tZUZpbGUoKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICBmaWxlUGF0aFJlYWRtZUZpbGVQYXRoID0gaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoUmVhZG1lRmlsZVBhdGgpIHtcbiAgICAgICAgcmVhZG1lRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWFkbWVGaWxlO1xuICB9XG5cbiAgZ2V0TWV0YUpTT05GaWxlKCkge1xuICAgIGxldCBtZXRhSlNPTkZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5zb21lRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHRoaXMudmVyc2lvbk51bWJlcixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lSlNPTiA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGVudHJpZXNKU09OID0ganNvbltcImVudHJpZXNcIl0sXG4gICAgICAgICAgdmVyc2lvbk51bWJlckpTT04gPSBqc29uW1widmVyc2lvbk51bWJlclwiXSxcbiAgICAgICAgICBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihlbnRyaWVzSlNPTiksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXJKU09OLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoID0gXCIuXCIsXG4gICAgICAgICAgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMgPSB0cnVlLFxuICAgICAgICAgIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSB0cnVlLFxuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFUSxRQUFXO0lBRXNDLFNBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRFLE9BQU87YUFBUCxPQUFPLENB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