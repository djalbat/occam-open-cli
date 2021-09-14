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
                var files = this.getFiles(), florenceFiles = files.reduceFile(function(florenceFiles1, file) {
                    var filePath = file.getPath(), filePathFlorenceFilePath = (0, _filePath).isFilePathFlorenceFilePath(filePath), fileFlorenceFile = filePathFlorenceFilePath; ///
                    if (fileFlorenceFile) {
                        var florenceFile = file; ///
                        florenceFiles1.push(florenceFile);
                    }
                    return florenceFiles1;
                }, []);
                return florenceFiles;
            }
        },
        {
            key: "getCustomGrammarBNFFiles",
            value: function getCustomGrammarBNFFiles() {
                var files = this.getFiles(), customGrammarBNFFiles = files.reduceFile(function(customGrammarBNFFiles1, file) {
                    var filePath = file.getPath(), filePathCustomGrammarBNFFilePath = (0, _filePath).isFilePathCustomGrammarBNFFilePath(filePath), fileCustomGrammarBNFFile = filePathCustomGrammarBNFFilePath; ///
                    if (fileCustomGrammarBNFFile) {
                        var customGrammarBNFFile = file; ///
                        customGrammarBNFFiles1.push(customGrammarBNFFile);
                    }
                    return customGrammarBNFFiles1;
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
                    "name": name,
                    "entries": entries
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var nameJSON = json["name"], entriesJSON = json["entries"];
                json = entriesJSON; ///
                var name = nameJSON, entries = _entries.default.fromJSON(json), project = new Project(name, entries);
                return project;
            }
        }
    ]);
    return Project;
}();
exports.default = Project;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERpcmVjdG9yeVBhdGhzKCk7IH1cblxuICBnZXRNZXRhSlNPTkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgIGlmIChmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBmbG9yZW5jZUZpbGVzID0gZmlsZXMucmVkdWNlRmlsZSgoZmxvcmVuY2VGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCA9IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVGbG9yZW5jZUZpbGUgPSBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVGbG9yZW5jZUZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxvcmVuY2VGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGZsb3JlbmNlRmlsZXMucHVzaChmbG9yZW5jZUZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJCTkZGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChjdXN0b21HcmFtbWFyQk5GRmlsZXMsIGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXN0b21HcmFtbWFyQk5GRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMucHVzaChjdXN0b21HcmFtbWFyQk5GRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWVKU09OID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXTtcblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBjb25zdCBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVEsR0FBVyxDQUFYLFFBQVc7QUFFMkgsR0FBc0IsQ0FBdEIsU0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFM0osT0FBTzthQUFQLE9BQU8sQ0FDZCxJQUFJLEVBQUUsT0FBTzs4QkFETixPQUFPO2FBRW5CLElBQUksR0FBRyxJQUFJO2FBQ1gsT0FBTyxHQUFHLE9BQU87O2lCQUhMLE9BQU87O1lBTTFCLEdBQU8s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