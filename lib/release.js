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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJpc0ZpbGVQYXRoUmVhZG1lRmlsZVBhdGgiLCJpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsIlJlbGVhc2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJlbnRyaWVzIiwidmVyc2lvbk51bWJlciIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0VmVyc2lvbk51bWJlciIsImdldEZpbGVzIiwiZ2V0UmVhZG1lRmlsZSIsInJlYWRtZUZpbGUiLCJmaWxlcyIsInNvbWVGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoUmVhZG1lRmlsZVBhdGgiLCJnZXRNZXRhSlNPTkZpbGUiLCJtZXRhSlNPTkZpbGUiLCJmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2UiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVEsR0FBVyxDQUFYLFFBQVc7QUFFc0MsR0FBc0IsQ0FBdEIsU0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEUsT0FBTyxpQkFBYixRQUFRO2FBQUYsT0FBTyxDQUNkLElBQUksRUFBRSxPQUFPLEVBQUUsYUFBYTs4QkFEckIsT0FBTztRQUV4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYTs7aUJBSmpCLE9BQU87O1lBTzFCLEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBVSxHQUFWLFVBQVU7bUJBQVYsUUFBUSxDQUFSLFVBQVUsR0FBRyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNyQixDQUFDOzs7WUFFRCxHQUFnQixHQUFoQixnQkFBZ0I7bUJBQWhCLFFBQVEsQ0FBUixnQkFBZ0IsR0FBRyxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDM0IsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7WUFBSSxDQUFDOzs7WUFFOUMsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSTtnQkFFckIsR0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUTtnQkFFM0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQVAsSUFBSSxFQUFLLENBQUM7b0JBQ3hCLEdBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFDdkIsc0JBQXNCLE9BOUJtQyxTQUFzQiwyQkE4QjdCLFFBQVE7b0JBRWhFLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxDQUFDO3dCQUMzQixVQUFVLEdBQUcsSUFBSSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt3QkFFdkIsTUFBTSxDQUFDLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxVQUFVO1lBQ25CLENBQUM7OztZQUVELEdBQWUsR0FBZixlQUFlO21CQUFmLFFBQVEsQ0FBUixlQUFlLEdBQUcsQ0FBQztnQkFDakIsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJO2dCQUV2QixHQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRO2dCQUUzQixLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBUCxJQUFJLEVBQUssQ0FBQztvQkFDeEIsR0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUN2Qix3QkFBd0IsT0FqRGlDLFNBQXNCLDZCQWlEekIsUUFBUTtvQkFFcEUsRUFBRSxFQUFFLHdCQUF3QixFQUFFLENBQUM7d0JBQzdCLFlBQVksR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUV6QixNQUFNLENBQUMsSUFBSTtvQkFDYixDQUFDO2dCQUNILENBQUM7Z0JBRUQsTUFBTSxDQUFDLFlBQVk7WUFDckIsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUNoQixPQUFPLEdBQUcsV0FBVyxFQUNyQixhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFDbEMsSUFBSSxHQUFHLENBQUM7b0JBQ04sSUFBSSxFQUFKLElBQUk7b0JBQ0osT0FBTyxFQUFQLE9BQU87b0JBQ1AsYUFBYSxFQUFiLGFBQWE7Z0JBQ2YsQ0FBQztnQkFFUCxNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7Ozs7WUFFTSxHQUFRLEdBQVIsUUFBUTttQkFBZixRQUFRLENBQUQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFLLENBQUcsSUFBSSxHQUEwQyxJQUFJLENBQWxELElBQUksRUFBRSxhQUFhLEdBQTJCLElBQUksQ0FBNUMsYUFBYSxFQUFXLFdBQVcsR0FBSyxJQUFJLENBQTdCLE9BQU87Z0JBRXBDLElBQUksR0FBRyxXQUFXLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV2QixHQUFLLENBQUMsT0FBTyxHQWxGRyxRQUFXLFNBa0ZILFFBQVEsQ0FBQyxJQUFJLEdBQy9CLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsYUFBYTtnQkFFeEQsTUFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQzs7O1dBbEZrQixPQUFPOztrQkFBUCxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcblxuaW1wb3J0IHsgaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlUGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0VmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldFJlYWRtZUZpbGUoKSB7XG4gICAgbGV0IHJlYWRtZUZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5zb21lRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgIGZpbGVQYXRoUmVhZG1lRmlsZVBhdGggPSBpc0ZpbGVQYXRoUmVhZG1lRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZVBhdGhSZWFkbWVGaWxlUGF0aCkge1xuICAgICAgICByZWFkbWVGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlYWRtZUZpbGU7XG4gIH1cblxuICBnZXRNZXRhSlNPTkZpbGUoKSB7XG4gICAgbGV0IG1ldGFKU09ORmlsZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKTtcblxuICAgIGZpbGVzLnNvbWVGaWxlKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKSB7XG4gICAgICAgIG1ldGFKU09ORmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICB2ZXJzaW9uTnVtYmVyID0gdGhpcy52ZXJzaW9uTnVtYmVyLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW50cmllcyxcbiAgICAgICAgICAgIHZlcnNpb25OdW1iZXJcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgbmFtZSwgdmVyc2lvbk51bWJlciwgZW50cmllczogZW50cmllc0pTT04gfSA9IGpzb247XG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cbn1cbiJdfQ==