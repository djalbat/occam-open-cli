"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Project;
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
var Project = /*#__PURE__*/ function() {
    function Project(name, entries) {
        _classCallCheck(this, Project);
        this.name = name;
        this.entries = entries;
    }
    _createClass(Project, [
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
            key: "getFiles",
            value: function getFiles() {
                return this.entries.getFiles();
            }
        },
        {
            key: "getFilePaths",
            value: function getFilePaths() {
                return this.entries.getFilePaths();
            }
        },
        {
            key: "getDirectoryPaths",
            value: function getDirectoryPaths() {
                return this.entries.getDirectoryPaths();
            }
        },
        {
            key: "getMetaJSONFile",
            value: function getMetaJSONFile() {
                var files = this.getFiles(), metaJSONFile = files.findFile(function(file) {
                    var filePath = file.getPath(), filePathMetaJSONFilePath = (0, _filePath.isFilePathMetaJSONFilePath)(filePath);
                    if (filePathMetaJSONFilePath) {
                        return true;
                    }
                });
                return metaJSONFile;
            }
        },
        {
            key: "getFlorenceFiles",
            value: function getFlorenceFiles() {
                var files = this.getFiles(), florenceFiles = files.reduceFile(function(florenceFiles, file) {
                    var filePath = file.getPath(), filePathFlorenceFilePath = (0, _filePath.isFilePathFlorenceFilePath)(filePath), fileFlorenceFile = filePathFlorenceFilePath; ///
                    if (fileFlorenceFile) {
                        var florenceFile = file; ///
                        florenceFiles.push(florenceFile);
                    }
                    return florenceFiles;
                }, []);
                return florenceFiles;
            }
        },
        {
            key: "getCustomGrammarBNFFiles",
            value: function getCustomGrammarBNFFiles() {
                var files = this.getFiles(), customGrammarBNFFiles = files.reduceFile(function(customGrammarBNFFiles, file) {
                    var filePath = file.getPath(), filePathCustomGrammarBNFFilePath = (0, _filePath.isFilePathCustomGrammarBNFFilePath)(filePath), fileCustomGrammarBNFFile = filePathCustomGrammarBNFFilePath; ///
                    if (fileCustomGrammarBNFFile) {
                        var customGrammarBNFFile = file; ///
                        customGrammarBNFFiles.push(customGrammarBNFFile);
                    }
                    return customGrammarBNFFiles;
                }, []);
                return customGrammarBNFFiles;
            }
        },
        {
            key: "getCustomGrammarPatternFiles",
            value: function getCustomGrammarPatternFiles() {
                var files = this.getFiles(), customGrammarPatternFiles = files.reduceFile(function(customGrammarPatternFiles, file) {
                    var filePath = file.getPath(), filePathCustomGrammarPatternFilePath = (0, _filePath.isFilePathCustomGrammarPatternFilePath)(filePath), fileCustomGrammarPatternFile = filePathCustomGrammarPatternFilePath; ///
                    if (fileCustomGrammarPatternFile) {
                        var customGrammarPatternFile = file; ///
                        customGrammarPatternFiles.push(customGrammarPatternFile);
                    }
                    return customGrammarPatternFiles;
                }, []);
                return customGrammarPatternFiles;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, entriesJSON = this.entries.toJSON(), entries = entriesJSON, json = {
                    name: name,
                    entries: entries
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var name = json.name, entriesJSON = json.entries;
                json = entriesJSON; ///
                var entries = _entries.default.fromJSON(json), project = new Project(name, entries);
                return project;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var entries = _entries.default.fromNothing(), project = new Project(name, entries);
                return project;
            }
        }
    ]);
    return Project;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICBnZXRGbG9yZW5jZUZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChmbG9yZW5jZUZpbGVzLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUZsb3JlbmNlRmlsZSA9IGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUZsb3JlbmNlRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBmbG9yZW5jZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgZmxvcmVuY2VGaWxlcy5wdXNoKGZsb3JlbmNlRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGN1c3RvbUdyYW1tYXJCTkZGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcy5wdXNoKGN1c3RvbUdyYW1tYXJCTkZGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzID0gZmlsZXMucmVkdWNlRmlsZSgoY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoQ3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyUGF0dGVybkZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVDdXN0b21HcmFtbWFyUGF0dGVybkZpbGUgPSBmaWxlUGF0aEN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVDdXN0b21HcmFtbWFyUGF0dGVybkZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZXMucHVzaChjdXN0b21HcmFtbWFyUGF0dGVybkZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCBlbnRyaWVzOiBlbnRyaWVzSlNPTiB9ID0ganNvbjtcblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQcm9qZWN0IiwibmFtZSIsImVudHJpZXMiLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImdldEZpbGVzIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJnZXRNZXRhSlNPTkZpbGUiLCJmaWxlcyIsIm1ldGFKU09ORmlsZSIsImZpbmRGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiZ2V0RmxvcmVuY2VGaWxlcyIsImZsb3JlbmNlRmlsZXMiLCJyZWR1Y2VGaWxlIiwiZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIiwiaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJmaWxlRmxvcmVuY2VGaWxlIiwiZmxvcmVuY2VGaWxlIiwicHVzaCIsImdldEN1c3RvbUdyYW1tYXJCTkZGaWxlcyIsImN1c3RvbUdyYW1tYXJCTkZGaWxlcyIsImZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSIsImN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiZ2V0Q3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcyIsImN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZXMiLCJmaWxlUGF0aEN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZVBhdGgiLCJpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlUGF0aCIsImZpbGVDdXN0b21HcmFtbWFyUGF0dGVybkZpbGUiLCJjdXN0b21HcmFtbWFyUGF0dGVybkZpbGUiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkVudHJpZXMiLCJwcm9qZWN0IiwiZnJvbU5hbWUiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBTVFBLE9BQU87Ozs0REFKUixXQUFXO3dCQUVvSCxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUosSUFBQSxBQUFNQSxPQUFPLGlCQUFiO2FBQU1BLE9BQU8sQ0FDZEMsSUFBSSxFQUFFQyxPQUFPOztRQUN2QixJQUFJLENBQUNELElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPLENBQUM7Ozs7WUFHekJDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJLENBQUM7YUFDbEI7OztZQUVERyxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxPQUFPLElBQUksQ0FBQ0YsT0FBTyxDQUFDO2FBQ3JCOzs7WUFFREcsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQUUsT0FBTyxJQUFJLENBQUNILE9BQU8sQ0FBQ0csUUFBUSxFQUFFLENBQUM7YUFBRTs7O1lBRTlDQyxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQ0osT0FBTyxDQUFDSSxZQUFZLEVBQUUsQ0FBQzthQUFFOzs7WUFFdERDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQ0wsT0FBTyxDQUFDSyxpQkFBaUIsRUFBRSxDQUFDO2FBQUU7OztZQUVoRUMsR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxHQUFHO2dCQUNoQixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDSixRQUFRLEVBQUUsRUFDdkJLLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxR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