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
                return this.entries.getFile(filePath);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLFxuICAgICAgICAgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgsXG4gICAgICAgICBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoLFxuICAgICAgICAgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICBnZXRGbG9yZW5jZUZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChmbG9yZW5jZUZpbGVzLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUZsb3JlbmNlRmlsZSA9IGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUZsb3JlbmNlRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBmbG9yZW5jZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgZmxvcmVuY2VGaWxlcy5wdXNoKGZsb3JlbmNlRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGN1c3RvbUdyYW1tYXJCTkZGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcy5wdXNoKGN1c3RvbUdyYW1tYXJCTkZGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzID0gZmlsZXMucmVkdWNlRmlsZSgoY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoQ3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyUGF0dGVybkZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVDdXN0b21HcmFtbWFyUGF0dGVybkZpbGUgPSBmaWxlUGF0aEN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVDdXN0b21HcmFtbWFyUGF0dGVybkZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZXMucHVzaChjdXN0b21HcmFtbWFyUGF0dGVybkZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCBlbnRyaWVzOiBlbnRyaWVzSlNPTiB9ID0ganNvbjtcblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQcm9qZWN0IiwibmFtZSIsImVudHJpZXMiLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImdldEZpbGVzIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJnZXRGaWxlIiwiZmlsZVBhdGgiLCJnZXRNZXRhSlNPTkZpbGUiLCJmaWxlcyIsIm1ldGFKU09ORmlsZSIsImZpbmRGaWxlIiwiZmlsZSIsImdldFBhdGgiLCJmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImdldEZsb3JlbmNlRmlsZXMiLCJmbG9yZW5jZUZpbGVzIiwicmVkdWNlRmlsZSIsImZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIiwiZmlsZUZsb3JlbmNlRmlsZSIsImZsb3JlbmNlRmlsZSIsInB1c2giLCJnZXRDdXN0b21HcmFtbWFyQk5GRmlsZXMiLCJjdXN0b21HcmFtbWFyQk5GRmlsZXMiLCJmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgiLCJmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUiLCJjdXN0b21HcmFtbWFyQk5GRmlsZSIsImdldEN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZXMiLCJjdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzIiwiZmlsZVBhdGhDdXN0b21HcmFtbWFyUGF0dGVybkZpbGVQYXRoIiwiaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZVBhdGgiLCJmaWxlQ3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlIiwiY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlIiwidG9KU09OIiwiZW50cmllc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwicHJvamVjdCIsImZyb21OYW1lIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzREQVBEO3dCQUttQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1BLHdCQUFOO2FBQU1BLFFBQ1BDLElBQUksRUFBRUMsT0FBTzs4QkFETkY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztpQkFIRUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQUUsT0FBTyxJQUFJLENBQUNILE9BQU8sQ0FBQ0csUUFBUTtZQUFJOzs7WUFFN0NDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlO2dCQUFFLE9BQU8sSUFBSSxDQUFDSixPQUFPLENBQUNJLFlBQVk7WUFBSTs7O1lBRXJEQyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUFFLE9BQU8sSUFBSSxDQUFDTCxPQUFPLENBQUNLLGlCQUFpQjtZQUFJOzs7WUFFL0RDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTyxJQUFJLENBQUNQLE9BQU8sQ0FBQ00sT0FBTyxDQUFDQztZQUFXOzs7WUFFM0RDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLElBQU1DLFFBQVEsSUFBSSxDQUFDTixRQUFRLElBQ3JCTyxlQUFlRCxNQUFNRSxR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