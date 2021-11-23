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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0TmFtZSIsImdldEVudHJpZXMiLCJnZXRGaWxlcyIsImdldEZpbGVQYXRocyIsImdldERpcmVjdG9yeVBhdGhzIiwiZ2V0TWV0YUpTT05GaWxlIiwiZmlsZXMiLCJtZXRhSlNPTkZpbGUiLCJmaW5kRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImdldFBhdGgiLCJmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJnZXRGbG9yZW5jZUZpbGVzIiwiZmxvcmVuY2VGaWxlcyIsInJlZHVjZUZpbGUiLCJmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJmaWxlRmxvcmVuY2VGaWxlIiwiZmxvcmVuY2VGaWxlIiwicHVzaCIsImdldEN1c3RvbUdyYW1tYXJCTkZGaWxlcyIsImN1c3RvbUdyYW1tYXJCTkZGaWxlcyIsImZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckJORkZpbGUiLCJnZXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlIiwiY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSIsImZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsInRvSlNPTiIsImVudHJpZXNKU09OIiwianNvbiIsImZyb21KU09OIiwicHJvamVjdCIsImZyb21OYW1lIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVEs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RUFBUCxPQUFPO2dCQUNULENBQUM7Z0JBRVAsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDOzs7O1lBRU0sR0FBUSxHQUFSLFFBQVE7bUJBQWYsUUFBUSxDQUFELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsR0FBSyxDQUFHLElBQUksR0FBMkIsSUFBSSxDQUFuQyxJQUFJLEVBQVcsV0FBVyxHQUFLLElBQUksQ0FBN0IsT0FBTztnQkFFckIsSUFBSSxHQUFHLFdBQVcsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXZCLEdBQUssQ0FBQyxPQUFPLEdBM0dHLFFBQVcsU0EyR0gsUUFBUSxDQUFDLElBQUksR0FDL0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87Z0JBRXpDLE1BQU0sQ0FBQyxPQUFPO1lBQ2hCLENBQUM7OztZQUVNLEdBQVEsR0FBUixRQUFRO21CQUFmLFFBQVEsQ0FBRCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLEdBQUssQ0FBQyxPQUFPLEdBbEhHLFFBQVcsU0FrSEgsV0FBVyxJQUM3QixPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTztnQkFFekMsTUFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQzs7O1dBbEhrQixPQUFPOztrQkFBUCxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcblxuaW1wb3J0IHsgaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgsIGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoLCBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoLCBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICBnZXRGbG9yZW5jZUZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChmbG9yZW5jZUZpbGVzLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUZsb3JlbmNlRmlsZSA9IGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUZsb3JlbmNlRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBmbG9yZW5jZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgZmxvcmVuY2VGaWxlcy5wdXNoKGZsb3JlbmNlRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGN1c3RvbUdyYW1tYXJCTkZGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcy5wdXNoKGN1c3RvbUdyYW1tYXJCTkZGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGggPSBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgbmFtZSwgZW50cmllczogZW50cmllc0pTT04gfSA9IGpzb247XG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cbiJdfQ==