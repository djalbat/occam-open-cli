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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERpcmVjdG9yeVBhdGhzKCk7IH1cblxuICBnZXRNZXRhSlNPTkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgIGlmIChmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBmbG9yZW5jZUZpbGVzID0gZmlsZXMucmVkdWNlRmlsZSgoZmxvcmVuY2VGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCA9IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVGbG9yZW5jZUZpbGUgPSBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVGbG9yZW5jZUZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxvcmVuY2VGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGZsb3JlbmNlRmlsZXMucHVzaChmbG9yZW5jZUZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJCTkZGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChjdXN0b21HcmFtbWFyQk5GRmlsZXMsIGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXN0b21HcmFtbWFyQk5GRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMucHVzaChjdXN0b21HcmFtbWFyQk5GRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIGVudHJpZXM6IGVudHJpZXNKU09OIH0gPSBqc29uO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0TmFtZSIsImdldEVudHJpZXMiLCJnZXRGaWxlcyIsImdldEZpbGVQYXRocyIsImdldERpcmVjdG9yeVBhdGhzIiwiZ2V0TWV0YUpTT05GaWxlIiwiZmlsZXMiLCJtZXRhSlNPTkZpbGUiLCJmaW5kRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImdldFBhdGgiLCJmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJnZXRGbG9yZW5jZUZpbGVzIiwiZmxvcmVuY2VGaWxlcyIsInJlZHVjZUZpbGUiLCJmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJmaWxlRmxvcmVuY2VGaWxlIiwiZmxvcmVuY2VGaWxlIiwicHVzaCIsImdldEN1c3RvbUdyYW1tYXJCTkZGaWxlcyIsImN1c3RvbUdyYW1tYXJCTkZGaWxlcyIsImZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckJORkZpbGUiLCJnZXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlIiwiY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSIsImZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsInRvSlNPTiIsImVudHJpZXNKU09OIiwianNvbiIsImZyb21KU09OIiwicHJvamVjdCIsImZyb21OYW1lIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVEsR0FBVyxDQUFYLFFBQVc7QUFFMkgsR0FBc0IsQ0FBdEIsU0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFM0pBLE9BQU8saUJBQWIsUUFBUTthQUFGQSxPQUFPLENBQ2RDLElBQUksRUFBRUMsT0FBTzs4QkFETkYsT0FBTztRQUV4QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtRQUNoQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTzs7aUJBSExGLE9BQU87O1lBTTFCRyxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVEsQ0FBUkEsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQ0YsSUFBSTtZQUNsQixDQUFDOzs7WUFFREcsR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsR0FBRyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUNGLE9BQU87WUFDckIsQ0FBQzs7O1lBRURHLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUNHLFFBQVE7WUFBSSxDQUFDOzs7WUFFOUNDLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDSixPQUFPLENBQUNJLFlBQVk7WUFBSSxDQUFDOzs7WUFFdERDLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBakJBLFFBQVEsQ0FBUkEsaUJBQWlCLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDTCxPQUFPLENBQUNLLGlCQUFpQjtZQUFJLENBQUM7OztZQUVoRUMsR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixHQUFLLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNKLFFBQVEsSUFDckJLLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxRQUFRLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztvQkFDekMsR0FBSyxDQUFDQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxJQUN2QkMsd0JBQXdCLE9BMUJrSCxTQUFzQiw2QkEwQjFHRixRQUFRO29CQUVwRSxFQUFFLEVBQUVFLHdCQUF3QixFQUFFLENBQUM7d0JBQzdCLE1BQU0sQ0FBQyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsQ0FBQztnQkFFTCxNQUFNLENBQUNMLFlBQVk7WUFDckIsQ0FBQzs7O1lBRURNLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDbEIsR0FBSyxDQUFDUCxLQUFLLEdBQUcsSUFBSSxDQUFDSixRQUFRLElBQ3JCWSxjQUFhLEdBQUdSLEtBQUssQ0FBQ1MsVUFBVSxDQUFDLFFBQVEsQ0FBUEQsYUFBYSxFQUFFTCxJQUFJLEVBQUssQ0FBQztvQkFDekQsR0FBSyxDQUFDQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxJQUN2Qkssd0JBQXdCLE9BeENnSCxTQUFzQiw2QkF3Q3hHTixRQUFRLEdBQzlETyxnQkFBZ0IsR0FBR0Qsd0JBQXdCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUV2RCxFQUFFLEVBQUVDLGdCQUFnQixFQUFFLENBQUM7d0JBQ3JCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHVCxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUUvQkssYUFBYSxDQUFDSyxJQUFJLENBQUNELFlBQVk7b0JBQ2pDLENBQUM7b0JBRUQsTUFBTSxDQUFDSixhQUFhO2dCQUN0QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVYLE1BQU0sQ0FBQ0EsY0FBYTtZQUN0QixDQUFDOzs7WUFFRE0sR0FBd0IsRUFBeEJBLENBQXdCO21CQUF4QkEsUUFBUSxDQUFSQSx3QkFBd0IsR0FBRyxDQUFDO2dCQUMxQixHQUFLLENBQUNkLEtBQUssR0FBRyxJQUFJLENBQUNKLFFBQVEsSUFDckJtQixzQkFBcUIsR0FBR2YsS0FBSyxDQUFDUyxVQUFVLENBQUMsUUFBUSxDQUFQTSxxQkFBcUIsRUFBRVosSUFBSSxFQUFLLENBQUM7b0JBQ3pFLEdBQUssQ0FBQ0MsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE9BQU8sSUFDdkJXLGdDQUFnQyxPQTNEd0csU0FBc0IscUNBMkR4RlosUUFBUSxHQUM5RWEsd0JBQXdCLEdBQUdELGdDQUFnQyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFdkUsRUFBRSxFQUFFQyx3QkFBd0IsRUFBRSxDQUFDO3dCQUM3QixHQUFLLENBQUNDLG9CQUFvQixHQUFHZixJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUV2Q1kscUJBQXFCLENBQUNGLElBQUksQ0FBQ0ssb0JBQW9CO29CQUNqRCxDQUFDO29CQUVELE1BQU0sQ0FBQ0gscUJBQXFCO2dCQUM5QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVYLE1BQU0sQ0FBQ0Esc0JBQXFCO1lBQzlCLENBQUM7OztZQUVESSxHQUFrQyxFQUFsQ0EsQ0FBa0M7bUJBQWxDQSxRQUFRLENBQVJBLGtDQUFrQyxHQUFHLENBQUM7Z0JBQ3BDLEdBQUssQ0FBQ25CLEtBQUssR0FBRyxJQUFJLENBQUNKLFFBQVEsSUFDckJ3QiwrQkFBK0IsR0FBR3BCLEtBQUssQ0FBQ0UsUUFBUSxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7b0JBQzFELEdBQUssQ0FBQ0MsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE9BQU8sSUFDdkJnQiwwQ0FBMEMsT0E5RThGLFNBQXNCLGdEQThFbkVqQixRQUFRO29CQUV6RyxFQUFFLEVBQUVpQiwwQ0FBMEMsRUFBRSxDQUFDO3dCQUMvQyxNQUFNLENBQUMsSUFBSTtvQkFDYixDQUFDO2dCQUNILENBQUM7Z0JBRVAsTUFBTSxDQUFDRCwrQkFBK0I7WUFDeEMsQ0FBQzs7O1lBRURFLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUcsQ0FBQztnQkFDUixHQUFLLENBQUM5QixJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLEVBQ2hCK0IsV0FBVyxHQUFHLElBQUksQ0FBQzlCLE9BQU8sQ0FBQzZCLE1BQU0sSUFDakM3QixPQUFPLEdBQUc4QixXQUFXLEVBQ3JCQyxJQUFJLEdBQUcsQ0FBQztvQkFDTmhDLElBQUksRUFBSkEsSUFBSTtvQkFDSkMsT0FBTyxFQUFQQSxPQUFPO2dCQUNULENBQUM7Z0JBRVAsTUFBTSxDQUFDK0IsSUFBSTtZQUNiLENBQUM7Ozs7WUFFTUMsR0FBUSxFQUFSQSxDQUFRO21CQUFmLFFBQVEsQ0FBREEsUUFBUSxDQUFDRCxJQUFJLEVBQUUsQ0FBQztnQkFDckIsR0FBSyxDQUFHaEMsSUFBSSxHQUEyQmdDLElBQUksQ0FBbkNoQyxJQUFJLEVBQVcrQixXQUFXLEdBQUtDLElBQUksQ0FBN0IvQixPQUFPO2dCQUVyQitCLElBQUksR0FBR0QsV0FBVyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdkIsR0FBSyxDQUFDOUIsT0FBTyxHQTNHRyxRQUFXLFNBMkdIZ0MsUUFBUSxDQUFDRCxJQUFJLEdBQy9CRSxPQUFPLEdBQUcsR0FBRyxDQUFDbkMsT0FBTyxDQUFDQyxJQUFJLEVBQUVDLE9BQU87Z0JBRXpDLE1BQU0sQ0FBQ2lDLE9BQU87WUFDaEIsQ0FBQzs7O1lBRU1DLEdBQVEsRUFBUkEsQ0FBUTttQkFBZixRQUFRLENBQURBLFFBQVEsQ0FBQ25DLElBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFLLENBQUNDLE9BQU8sR0FsSEcsUUFBVyxTQWtISG1DLFdBQVcsSUFDN0JGLE9BQU8sR0FBRyxHQUFHLENBQUNuQyxPQUFPLENBQUNDLElBQUksRUFBRUMsT0FBTztnQkFFekMsTUFBTSxDQUFDaUMsT0FBTztZQUNoQixDQUFDOzs7V0FsSGtCbkMsT0FBTzs7a0JBQVBBLE9BQU8ifQ==