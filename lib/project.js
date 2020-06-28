"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entries = _interopRequireDefault(require("./entries"));

var _filePath = require("./utilities/filePath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Project = /*#__PURE__*/function () {
  function Project(name, entries) {
    _classCallCheck(this, Project);

    this.name = name;
    this.entries = entries;
  }

  _createClass(Project, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getEntries",
    value: function getEntries() {
      return this.entries;
    }
  }, {
    key: "getFiles",
    value: function getFiles() {
      return this.entries.getFiles();
    }
  }, {
    key: "getFilePaths",
    value: function getFilePaths() {
      return this.entries.getFilePaths();
    }
  }, {
    key: "getDirectoryPaths",
    value: function getDirectoryPaths() {
      return this.entries.getDirectoryPaths();
    }
  }, {
    key: "getMetaJSONFile",
    value: function getMetaJSONFile() {
      var files = this.getFiles(),
          metaJSONFile = files.findFile(function (file) {
        var filePath = file.getPath(),
            filePathMetaJSONFilePath = (0, _filePath.isFilePathMetaJSONFilePath)(filePath);

        if (filePathMetaJSONFilePath) {
          return true;
        }
      });
      return metaJSONFile;
    }
  }, {
    key: "getFlorenceFiles",
    value: function getFlorenceFiles() {
      var files = this.getFiles(),
          florenceFiles = files.reduceFile(function (florenceFiles, file) {
        var filePath = file.getPath(),
            filePathFlorenceFilePath = (0, _filePath.isFilePathFlorenceFilePath)(filePath),
            fileFlorenceFile = filePathFlorenceFilePath; ///

        if (fileFlorenceFile) {
          var florenceFile = file; ///

          florenceFiles.push(florenceFile);
        }

        return florenceFiles;
      }, []);
      return florenceFiles;
    }
  }, {
    key: "getCustomGrammarBNFFiles",
    value: function getCustomGrammarBNFFiles() {
      var files = this.getFiles(),
          customGrammarBNFFiles = files.reduceFile(function (customGrammarBNFFiles, file) {
        var filePath = file.getPath(),
            filePathCustomGrammarBNFFilePath = (0, _filePath.isFilePathCustomGrammarBNFFilePath)(filePath),
            fileCustomGrammarBNFFile = filePathCustomGrammarBNFFilePath; ///

        if (fileCustomGrammarBNFFile) {
          var customGrammarBNFFile = file; ///

          customGrammarBNFFiles.push(customGrammarBNFFile);
        }

        return customGrammarBNFFiles;
      }, []);
      return customGrammarBNFFiles;
    }
  }, {
    key: "getCustomGrammarLexicalPatternFile",
    value: function getCustomGrammarLexicalPatternFile() {
      var files = this.getFiles(),
          customGrammarLexicalPatternFile = files.findFile(function (file) {
        var filePath = file.getPath(),
            filePatCustomGrammarLexicalPatternFilePath = (0, _filePath.isFilePathCustomGrammarLexicalPatternFilePath)(filePath);

        if (filePatCustomGrammarLexicalPatternFilePath) {
          return true;
        }
      });
      return customGrammarLexicalPatternFile;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var name = this.name,
          entriesJSON = this.entries.toJSON(),
          entries = entriesJSON,
          ///
      json = {
        "name": name,
        "entries": entries
      };
      return json;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(json) {
      var nameJSON = json["name"],
          entriesJSON = json["entries"];
      json = entriesJSON; ///

      var name = nameJSON,
          ///
      entries = _entries["default"].fromJSON(json),
          project = new Project(name, entries);

      return project;
    }
  }, {
    key: "fromTopmostDirectoryName",
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
      var name = topmostDirectoryName,
          ///
      entries = _entries["default"].fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          project = new Project(name, entries);

      return project;
    }
  }]);

  return Project;
}();

exports["default"] = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuanMiXSwibmFtZXMiOlsiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0RmlsZXMiLCJnZXRGaWxlUGF0aHMiLCJnZXREaXJlY3RvcnlQYXRocyIsImZpbGVzIiwibWV0YUpTT05GaWxlIiwiZmluZEZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiZmxvcmVuY2VGaWxlcyIsInJlZHVjZUZpbGUiLCJmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJmaWxlRmxvcmVuY2VGaWxlIiwiZmxvcmVuY2VGaWxlIiwicHVzaCIsImN1c3RvbUdyYW1tYXJCTkZGaWxlcyIsImZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckJORkZpbGUiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlIiwiZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwibmFtZUpTT04iLCJFbnRyaWVzIiwiZnJvbUpTT04iLCJwcm9qZWN0IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7SUFFcUJBLE87QUFDbkIsbUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7OztpQ0FF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QVdDO0FBRk4sT0FIYjtBQVFBLGFBQU95QixJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDLE1BQUQsQ0FBckI7QUFBQSxVQUNNRixXQUFXLEdBQUdFLElBQUksQ0FBQyxTQUFELENBRHhCO0FBR0FBLE1BQUFBLElBQUksR0FBR0YsV0FBUCxDQUpvQixDQUlBOztBQUVwQixVQUFNeEIsSUFBSSxHQUFHMkIsUUFBYjtBQUFBLFVBQXdCO0FBQ2xCMUIsTUFBQUEsT0FBTyxHQUFHMkIsb0JBQVFDLFFBQVIsQ0FBaUJILElBQWpCLENBRGhCO0FBQUEsVUFFTUksT0FBTyxHQUFHLElBQUkvQixPQUFKLENBQVlDLElBQVosRUFBa0JDLE9BQWxCLENBRmhCOztBQUlBLGFBQU82QixPQUFQO0FBQ0Q7Ozs2Q0FFK0JDLG9CLEVBQXNCQyxxQixFQUF1QkMsdUIsRUFBeUJDLGtDLEVBQW9DO0FBQ3hJLFVBQU1sQyxJQUFJLEdBQUcrQixvQkFBYjtBQUFBLFVBQW9DO0FBQzlCOUIsTUFBQUEsT0FBTyxHQUFHMkIsb0JBQVFPLHdCQUFSLENBQWlDSixvQkFBakMsRUFBdURDLHFCQUF2RCxFQUE4RUMsdUJBQTlFLEVBQXVHQyxrQ0FBdkcsQ0FEaEI7QUFBQSxVQUVNSixPQUFPLEdBQUcsSUFBSS9CLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsQ0FGaEI7O0FBSUEsYUFBTzZCLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERpcmVjdG9yeVBhdGhzKCk7IH1cblxuICBnZXRNZXRhSlNPTkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgIGlmIChmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBmbG9yZW5jZUZpbGVzID0gZmlsZXMucmVkdWNlRmlsZSgoZmxvcmVuY2VGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCA9IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVGbG9yZW5jZUZpbGUgPSBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVGbG9yZW5jZUZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxvcmVuY2VGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGZsb3JlbmNlRmlsZXMucHVzaChmbG9yZW5jZUZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJCTkZGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChjdXN0b21HcmFtbWFyQk5GRmlsZXMsIGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXN0b21HcmFtbWFyQk5GRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMucHVzaChjdXN0b21HcmFtbWFyQk5GRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWVKU09OID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXTtcblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBjb25zdCBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBuYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUsICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG4iXX0=