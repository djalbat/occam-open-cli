"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jszip = _interopRequireDefault(require("jszip"));

var _request = _interopRequireDefault(require("request"));

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
    key: "fromURL",
    value: function fromURL(url, callback) {
      var method = "GET",
          encoding = null,
          options = {
        url: url,
        method: method,
        encoding: encoding
      };
      (0, _request["default"])(options, function (error, response) {
        var statusCode = response.statusCode;
        error = error || statusCode !== 200; ///

        if (error) {
          var project = null;
          callback(project);
          return;
        }

        var body = response.body;

        _jszip["default"].loadAsync(body).then(function (jsZip) {
          Project.fromJSZip(jsZip, callback);
        });
      });
    }
  }, {
    key: "fromJSZip",
    value: function fromJSZip(jsZip, callback) {
      _entries["default"].fromJSZip(jsZip, function (entries) {
        var project = null;
        var topmostDirectoryName = entries.getTopmostDirectoryName();

        if (topmostDirectoryName !== null) {
          var name = topmostDirectoryName; ///

          project = new Project(name, entries);
        }

        callback(project);
      });
    }
  }, {
    key: "fromTopmostDirectoryName",
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
      var entries = _entries["default"].fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

exports["default"] = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuanMiXSwibmFtZXMiOlsiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0RmlsZXMiLCJnZXRGaWxlUGF0aHMiLCJnZXREaXJlY3RvcnlQYXRocyIsImZpbGVzIiwibWV0YUpTT05GaWxlIiwiZmluZEZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiZmxvcmVuY2VGaWxlcyIsInJlZHVjZUZpbGUiLCJmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJmaWxlRmxvcmVuY2VGaWxlIiwiZmxvcmVuY2VGaWxlIiwicHVzaCIsImN1c3RvbUdyYW1tYXJCTkZGaWxlcyIsImZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckJORkZpbGUiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlIiwiZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwibmFtZUpTT04iLCJFbnRyaWVzIiwiZnJvbUpTT04iLCJwcm9qZWN0IiwidXJsIiwiY2FsbGJhY2siLCJtZXRob2QiLCJlbmNvZGluZyIsIm9wdGlvbnMiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImJvZHkiLCJKU1ppcCIsImxvYWRBc3luYyIsInRoZW4iLCJqc1ppcCIsImZyb21KU1ppcCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FB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aW1wb3J0IEpTWmlwIGZyb20gXCJqc3ppcFwiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcInJlcXVlc3RcIjtcblxuaW1wb3J0IEVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xuXG5pbXBvcnQgeyBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgsIGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgsIGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlUGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldEZpbGVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVzKCk7IH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXREaXJlY3RvcnlQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXREaXJlY3RvcnlQYXRocygpOyB9XG5cbiAgZ2V0TWV0YUpTT05GaWxlKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIG1ldGFKU09ORmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICBmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggPSBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgICBpZiAoZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFKU09ORmlsZTtcbiAgfVxuXG4gIGdldEZsb3JlbmNlRmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgZmxvcmVuY2VGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGZsb3JlbmNlRmlsZXMsIGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlRmxvcmVuY2VGaWxlID0gZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmaWxlRmxvcmVuY2VGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZsb3JlbmNlRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBmbG9yZW5jZUZpbGVzLnB1c2goZmxvcmVuY2VGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZsb3JlbmNlRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlRmlsZXM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyQk5GRmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORkZpbGVzID0gZmlsZXMucmVkdWNlRmlsZSgoY3VzdG9tR3JhbW1hckJORkZpbGVzLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGggPSBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSA9IGZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgY3VzdG9tR3JhbW1hckJORkZpbGVzLnB1c2goY3VzdG9tR3JhbW1hckJORkZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GRmlsZXM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgICAgIGlmIChmaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgIFwiZW50cmllc1wiOiBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lSlNPTiA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGVudHJpZXNKU09OID0ganNvbltcImVudHJpZXNcIl07XG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVSTCh1cmwsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbWV0aG9kID0gXCJHRVRcIixcbiAgICAgICAgICBlbmNvZGluZyA9IG51bGwsXG4gICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIGVuY29kaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJlcXVlc3Qob3B0aW9ucywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSByZXNwb25zZTtcblxuICAgICAgZXJyb3IgPSBlcnJvciB8fCAoc3RhdHVzQ29kZSAhPT0gMjAwKTsgIC8vL1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG51bGw7XG5cbiAgICAgICAgY2FsbGJhY2socHJvamVjdCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGJvZHkgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBKU1ppcC5sb2FkQXN5bmMoYm9keSlcbiAgICAgICAgLnRoZW4oKGpzWmlwKSA9PiB7XG4gICAgICAgICAgUHJvamVjdC5mcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIEVudHJpZXMuZnJvbUpTWmlwKGpzWmlwLCAoZW50cmllcykgPT4ge1xuICAgICAgbGV0IHByb2plY3QgPSBudWxsO1xuXG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGVudHJpZXMuZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuIl19