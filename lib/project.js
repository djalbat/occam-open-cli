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
var Project = function() {
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
                    var filePath = file.getPath(), filePathMetaJSONFilePath = _filePath.isFilePathMetaJSONFilePath(filePath);
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
                    var filePath = file.getPath(), filePathFlorenceFilePath = _filePath.isFilePathFlorenceFilePath(filePath), fileFlorenceFile = filePathFlorenceFilePath; ///
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
                    var filePath = file.getPath(), filePathCustomGrammarBNFFilePath = _filePath.isFilePathCustomGrammarBNFFilePath(filePath), fileCustomGrammarBNFFile = filePathCustomGrammarBNFFilePath; ///
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
                    var filePath = file.getPath(), filePatCustomGrammarLexicalPatternFilePath = _filePath.isFilePathCustomGrammarLexicalPatternFilePath(filePath);
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
            key: "fromTopmostDirectoryName",
            value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
                var name = topmostDirectoryName, entries = _entries.default.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories), project = new Project(name, entries);
                return project;
            }
        }
    ]);
    return Project;
}();
exports.default = Project;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERpcmVjdG9yeVBhdGhzKCk7IH1cblxuICBnZXRNZXRhSlNPTkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgIGlmIChmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBmbG9yZW5jZUZpbGVzID0gZmlsZXMucmVkdWNlRmlsZSgoZmxvcmVuY2VGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCA9IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVGbG9yZW5jZUZpbGUgPSBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVGbG9yZW5jZUZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxvcmVuY2VGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGZsb3JlbmNlRmlsZXMucHVzaChmbG9yZW5jZUZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJCTkZGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChjdXN0b21HcmFtbWFyQk5GRmlsZXMsIGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXN0b21HcmFtbWFyQk5GRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMucHVzaChjdXN0b21HcmFtbWFyQk5GRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWVKU09OID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXTtcblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBjb25zdCBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBuYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUsICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFUSxRQUFXO0lBRTJILFNBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTNKLE9BQU87YUFBUCxPQUFPLENBQ2QsSUFBSSxFQUFFLE9BQU87OEJBRE4sT0FBTzthQUVuQixJQUFJLEdBQUcsSUFBSTthQUNYLE9BQU8sR0FBRyxPQUFPOztpQkFITCxPQUFPOztBQU0xQixlQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPOzRCQUNPLElBQUk7Ozs7QUFHbEIsZUFBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTs0QkFDSSxPQUFPOzs7O0FBR3JCLGVBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7NEJBQWlCLE9BQU8sQ0FBQyxRQUFROzs7O0FBRXpDLGVBQVksR0FBWixZQUFZOzRCQUFaLFlBQVk7NEJBQWlCLE9BQU8sQ0FBQyxZQUFZOzs7O0FBRWpELGVBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCOzRCQUFpQixPQUFPLENBQUMsaUJBQWlCOzs7O0FBRTNELGVBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWU7b0JBQ1AsS0FBSyxRQUFRLFFBQVEsSUFDckIsWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLFVBQUUsSUFBSTt3QkFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQ3ZCLHdCQUF3QixHQTFCa0gsU0FBc0IsNEJBMEIxRyxRQUFRO3dCQUVoRSx3QkFBd0I7K0JBQ25CLElBQUk7Ozt1QkFJWixZQUFZOzs7O0FBR3JCLGVBQWdCLEdBQWhCLGdCQUFnQjs0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