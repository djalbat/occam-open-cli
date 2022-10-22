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
            key: "getFile",
            value: function getFile(filePath) {
                var files = this.getFiles(), file = files.find(function(file) {
                    var path = file.getPath();
                    if (path === filePath) {
                        return true;
                    }
                }) || null;
                return file;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBmaWxlID0gZmlsZXMuZmluZCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gZmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgZ2V0TWV0YUpTT05GaWxlKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIG1ldGFKU09ORmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICBmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggPSBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgICBpZiAoZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFKU09ORmlsZTtcbiAgfVxuXG4gIGdldEZsb3JlbmNlRmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgZmxvcmVuY2VGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGZsb3JlbmNlRmlsZXMsIGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlRmxvcmVuY2VGaWxlID0gZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmaWxlRmxvcmVuY2VGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZsb3JlbmNlRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBmbG9yZW5jZUZpbGVzLnB1c2goZmxvcmVuY2VGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZsb3JlbmNlRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlRmlsZXM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyQk5GRmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORkZpbGVzID0gZmlsZXMucmVkdWNlRmlsZSgoY3VzdG9tR3JhbW1hckJORkZpbGVzLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGggPSBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSA9IGZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgY3VzdG9tR3JhbW1hckJORkZpbGVzLnB1c2goY3VzdG9tR3JhbW1hckJORkZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GRmlsZXM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChjdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhDdXN0b21HcmFtbWFyUGF0dGVybkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZSA9IGZpbGVQYXRoQ3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXN0b21HcmFtbWFyUGF0dGVybkZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcy5wdXNoKGN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIGVudHJpZXM6IGVudHJpZXNKU09OIH0gPSBqc29uO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0RmlsZXMiLCJnZXRGaWxlUGF0aHMiLCJnZXREaXJlY3RvcnlQYXRocyIsImdldEZpbGUiLCJmaWxlUGF0aCIsImZpbGVzIiwiZmlsZSIsImZpbmQiLCJwYXRoIiwiZ2V0UGF0aCIsImdldE1ldGFKU09ORmlsZSIsIm1ldGFKU09ORmlsZSIsImZpbmRGaWxlIiwiZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJnZXRGbG9yZW5jZUZpbGVzIiwiZmxvcmVuY2VGaWxlcyIsInJlZHVjZUZpbGUiLCJmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImZpbGVGbG9yZW5jZUZpbGUiLCJmbG9yZW5jZUZpbGUiLCJwdXNoIiwiZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGVzIiwiY3VzdG9tR3JhbW1hckJORkZpbGVzIiwiZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgiLCJpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckJORkZpbGUiLCJnZXRDdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzIiwiY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcyIsImZpbGVQYXRoQ3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlUGF0aCIsImlzRmlsZVBhdGhDdXN0b21HcmFtbWFyUGF0dGVybkZpbGVQYXRoIiwiZmlsZUN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZSIsImN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZSIsInRvSlNPTiIsImVudHJpZXNKU09OIiwianNvbiIsImZyb21KU09OIiwiRW50cmllcyIsInByb2plY3QiLCJmcm9tTmFtZSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs0REFKRDt3QkFFK0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEksSUFBQSxBQUFNQSx3QkFBTjthQUFNQSxRQUNQQyxJQUFJLEVBQUVDLE9BQU87OEJBRE5GO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7aUJBSEVGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUFFLE9BQU8sSUFBSSxDQUFDSCxPQUFPLENBQUNHLFFBQVE7WUFBSTs7O1lBRTdDQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTtnQkFBRSxPQUFPLElBQUksQ0FBQ0osT0FBTyxDQUFDSSxZQUFZO1lBQUk7OztZQUVyREMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjtnQkFBRSxPQUFPLElBQUksQ0FBQ0wsT0FBTyxDQUFDSyxp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