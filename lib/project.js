"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
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
var topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath;
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
                var files = this.getFiles(), florenceFiles1 = files.reduceFile(function(florenceFiles, file) {
                    var filePath = file.getPath(), filePathFlorenceFilePath = (0, _filePath).isFilePathFlorenceFilePath(filePath), fileFlorenceFile = filePathFlorenceFilePath; ///
                    if (fileFlorenceFile) {
                        var florenceFile = file; ///
                        florenceFiles.push(florenceFile);
                    }
                    return florenceFiles;
                }, []);
                return florenceFiles1;
            }
        },
        {
            key: "getCustomGrammarBNFFiles",
            value: function getCustomGrammarBNFFiles() {
                var files = this.getFiles(), customGrammarBNFFiles1 = files.reduceFile(function(customGrammarBNFFiles, file) {
                    var filePath = file.getPath(), filePathCustomGrammarBNFFilePath = (0, _filePath).isFilePathCustomGrammarBNFFilePath(filePath), fileCustomGrammarBNFFile = filePathCustomGrammarBNFFilePath; ///
                    if (fileCustomGrammarBNFFile) {
                        var customGrammarBNFFile = file; ///
                        customGrammarBNFFiles.push(customGrammarBNFFile);
                    }
                    return customGrammarBNFFiles;
                }, []);
                return customGrammarBNFFiles1;
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
            key: "fromMetaJSONFile",
            value: function fromMetaJSONFile(metaJSONFile) {
                var path = metaJSONFile.getPath(), topmostDirectoryName = topmostDirectoryNameFromPath(path), name = topmostDirectoryName, entry = metaJSONFile, entries = _entries.default.fromEntry(entry), project = new Project(name, entries);
                return project;
            }
        }
    ]);
    return Project;
}();
exports.default = Project;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5cbmNvbnN0IHsgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICBnZXRGbG9yZW5jZUZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChmbG9yZW5jZUZpbGVzLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUZsb3JlbmNlRmlsZSA9IGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUZsb3JlbmNlRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBmbG9yZW5jZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgZmxvcmVuY2VGaWxlcy5wdXNoKGZsb3JlbmNlRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGN1c3RvbUdyYW1tYXJCTkZGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcy5wdXNoKGN1c3RvbUdyYW1tYXJCTkZGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGggPSBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgbmFtZSwgZW50cmllczogZW50cmllc0pTT04gfSA9IGpzb247XG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFKU09ORmlsZShtZXRhSlNPTkZpbGUpIHtcbiAgICBjb25zdCBwYXRoID0gbWV0YUpTT05GaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgICAgbmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLCAvLy9cbiAgICAgICAgICBlbnRyeSA9IG1ldGFKU09ORmlsZSwgLy8vXG4gICAgICAgICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUVudHJ5KGVudHJ5KSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJQcm9qZWN0IiwibmFtZSIsImVudHJpZXMiLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImdldEZpbGVzIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJnZXRNZXRhSlNPTkZpbGUiLCJmaWxlcyIsIm1ldGFKU09ORmlsZSIsImZpbmRGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImdldEZsb3JlbmNlRmlsZXMiLCJmbG9yZW5jZUZpbGVzIiwicmVkdWNlRmlsZSIsImZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImZpbGVGbG9yZW5jZUZpbGUiLCJmbG9yZW5jZUZpbGUiLCJwdXNoIiwiZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGVzIiwiY3VzdG9tR3JhbW1hckJORkZpbGVzIiwiZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgiLCJmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUiLCJjdXN0b21HcmFtbWFyQk5GRmlsZSIsImdldEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlIiwiZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwidG9KU09OIiwiZW50cmllc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJwcm9qZWN0IiwiZnJvbU1ldGFKU09ORmlsZSIsInBhdGgiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImVudHJ5IiwiZnJvbUVudHJ5Il0sIm1hcHBpbmdz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