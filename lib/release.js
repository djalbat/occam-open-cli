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
import Entries from "./entries";
import { isFilePathReadmeFilePath, isFilePathMetaJSONFilePath } from "./utilities/filePath";
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
                    var filePath = file.getPath(), filePathReadmeFilePath = isFilePathReadmeFilePath(filePath);
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
                    var filePath = file.getPath(), filePathMetaJSONFilePath = isFilePathMetaJSONFilePath(filePath);
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
                var nameJSON = json["name"], entriesJSON = json["entries"], versionNumberJSON = json["versionNumber"], name = nameJSON, entries = Entries.fromJSON(entriesJSON), versionNumber = versionNumberJSON, release = new Release(name, entries, versionNumber);
                return release;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var topmostDirectoryName = name, projectsDirectoryPath = ".", loadOnlyRecognisedFiles = true, doNotLoadHiddenFilesAndDirectories = true, entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories), versionNumber = null, release = new Release(name, entries, versionNumber);
                return release;
            }
        }
    ]);
    return Release;
}();
export { Release as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy52ZXJzaW9uTnVtYmVyID0gdmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldFZlcnNpb25OdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldEZpbGVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVzKCk7IH1cblxuICBnZXRSZWFkbWVGaWxlKCkge1xuICAgIGxldCByZWFkbWVGaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuc29tZUZpbGUoKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICBmaWxlUGF0aFJlYWRtZUZpbGVQYXRoID0gaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoUmVhZG1lRmlsZVBhdGgpIHtcbiAgICAgICAgcmVhZG1lRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWFkbWVGaWxlO1xuICB9XG5cbiAgZ2V0TWV0YUpTT05GaWxlKCkge1xuICAgIGxldCBtZXRhSlNPTkZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5zb21lRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHRoaXMudmVyc2lvbk51bWJlcixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lSlNPTiA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGVudHJpZXNKU09OID0ganNvbltcImVudHJpZXNcIl0sXG4gICAgICAgICAgdmVyc2lvbk51bWJlckpTT04gPSBqc29uW1widmVyc2lvbk51bWJlclwiXSxcbiAgICAgICAgICBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihlbnRyaWVzSlNPTiksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXJKU09OLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoID0gXCIuXCIsXG4gICAgICAgICAgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMgPSB0cnVlLFxuICAgICAgICAgIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSB0cnVlLFxuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FFTCxPQUFPLE9BQU0sU0FBVztTQUV0Qix3QkFBd0IsRUFBRSwwQkFBMEIsU0FBUSxvQkFB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