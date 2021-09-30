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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5cbmNvbnN0IHsgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICBnZXRGbG9yZW5jZUZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChmbG9yZW5jZUZpbGVzLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUZsb3JlbmNlRmlsZSA9IGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUZsb3JlbmNlRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBmbG9yZW5jZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgZmxvcmVuY2VGaWxlcy5wdXNoKGZsb3JlbmNlRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGN1c3RvbUdyYW1tYXJCTkZGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcy5wdXNoKGN1c3RvbUdyYW1tYXJCTkZGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGggPSBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVudHJpZXNcIjogZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhSlNPTkZpbGUobWV0YUpTT05GaWxlKSB7XG4gICAgY29uc3QgcGF0aCA9IG1ldGFKU09ORmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZSwgLy8vXG4gICAgICAgICAgZW50cnkgPSBtZXRhSlNPTkZpbGUsIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21FbnRyeShlbnRyeSksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVrQixHQUFXLENBQVgsVUFBVztBQUVyQixHQUFXLENBQVgsUUFBVztBQUUySCxHQUFzQixDQUF0QixTQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoTCxHQUFLLENBQUcsNEJBQTRCLEdBTk4sVUFBVyxlQU1qQyw0QkFBNEI7SUFFZixPQUFPO2FBQVAsT0FBTyxDQUNkLElBQUksRUFBRSxPQUFPOzhCQUROLE9BQU87YUFFbkIsSUFBSSxHQUFHLElBQUk7YUFDWCxPQUFPLEdBQUcsT0FBTzs7aUJBSEwsT0FBTzs7WUFNMUIsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxHQUFHLENBQUM7NEJBQ0csSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVLEdBQUcsQ0FBQzs0QkFDQSxPQUFPO1lBQ3JCLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsR0FBRyxDQUFDOzRCQUFhLE9BQU8sQ0FBQyxRQUFRO1lBQUksQ0FBQzs7O1lBRTlDLEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksR0FBRyxDQUFDOzRCQUFhLE9BQU8sQ0FBQyxZQUFZO1lBQUksQ0FBQzs7O1lBRXRELEdBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCLEdBQUcsQ0FBQzs0QkFBYSxPQUFPLENBQUMsaUJBQWlCO1lBQUksQ0FBQzs7O1lBRWhFLEdBQWUs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