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
                    var filePath = file.getPath(), filePathMetaJSONFilePath = (0, _filePath).isFilePathMetaJSONFilePath(filePath);
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
                    var filePath = file.getPath(), filePathFlorenceFilePath = (0, _filePath).isFilePathFlorenceFilePath(filePath), fileFlorenceFile = filePathFlorenceFilePath; ///
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
                    var filePath = file.getPath(), filePathCustomGrammarBNFFilePath = (0, _filePath).isFilePathCustomGrammarBNFFilePath(filePath), fileCustomGrammarBNFFile = filePathCustomGrammarBNFFilePath; ///
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
            key: "getCustomGrammarLexicalPatternFile",
            value: function getCustomGrammarLexicalPatternFile() {
                var files = this.getFiles(), customGrammarLexicalPatternFile = files.findFile(function(file) {
                    var filePath = file.getPath(), filePatCustomGrammarLexicalPatternFilePath = (0, _filePath).isFilePathCustomGrammarLexicalPatternFilePath(filePath);
                    if (filePatCustomGrammarLexicalPatternFilePath) {
                        return true;
                    }
                });
                return customGrammarLexicalPatternFile;
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
exports.default = Project;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERpcmVjdG9yeVBhdGhzKCk7IH1cblxuICBnZXRNZXRhSlNPTkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgIGlmIChmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBmbG9yZW5jZUZpbGVzID0gZmlsZXMucmVkdWNlRmlsZSgoZmxvcmVuY2VGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCA9IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVGbG9yZW5jZUZpbGUgPSBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVGbG9yZW5jZUZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxvcmVuY2VGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGZsb3JlbmNlRmlsZXMucHVzaChmbG9yZW5jZUZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJCTkZGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChjdXN0b21HcmFtbWFyQk5GRmlsZXMsIGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXN0b21HcmFtbWFyQk5GRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMucHVzaChjdXN0b21HcmFtbWFyQk5GRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIGVudHJpZXM6IGVudHJpZXNKU09OIH0gPSBqc29uO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0RmlsZXMiLCJnZXRGaWxlUGF0aHMiLCJnZXREaXJlY3RvcnlQYXRocyIsImdldE1ldGFKU09ORmlsZSIsImZpbGVzIiwibWV0YUpTT05GaWxlIiwiZmluZEZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJnZXRGbG9yZW5jZUZpbGVzIiwiZmxvcmVuY2VGaWxlcyIsInJlZHVjZUZpbGUiLCJmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImZpbGVGbG9yZW5jZUZpbGUiLCJmbG9yZW5jZUZpbGUiLCJwdXNoIiwiZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGVzIiwiY3VzdG9tR3JhbW1hckJORkZpbGVzIiwiZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgiLCJpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckJORkZpbGUiLCJnZXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlIiwiY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSIsImZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsImlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsInRvSlNPTiIsImVudHJpZXNKU09OIiwianNvbiIsImZyb21KU09OIiwiRW50cmllcyIsInByb2plY3QiLCJmcm9tTmFtZSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRU8sSUFBQSxRQUFXLGtDQUFYLFdBQVcsRUFBQTtBQUUySCxJQUFBLFNBQXNCLFdBQXRCLHNCQUFzQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpLLElBQUEsQUFBTUEsT0FBTyxpQkFBYjthQUFNQSxPQUFPLENBQ2RDLElBQUksRUFBRUMsT0FBTzs7UUFDdkIsSUFBSSxDQUFDRCxJ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