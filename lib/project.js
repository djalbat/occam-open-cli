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
      var entries = _entries["default"].fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

exports["default"] = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuanMiXSwibmFtZXMiOlsiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0RmlsZXMiLCJnZXRGaWxlUGF0aHMiLCJnZXREaXJlY3RvcnlQYXRocyIsImZpbGVzIiwibWV0YUpTT05GaWxlIiwiZmluZEZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiZmxvcmVuY2VGaWxlcyIsInJlZHVjZUZpbGUiLCJmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJmaWxlRmxvcmVuY2VGaWxlIiwiZmxvcmVuY2VGaWxlIiwicHVzaCIsImN1c3RvbUdyYW1tYXJCTkZGaWxlcyIsImZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckJORkZpbGUiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlIiwiZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwibmFtZUpTT04iLCJFbnRyaWVzIiwiZnJvbUpTT04iLCJwcm9qZWN0IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7SUFFcUJBLE87QUFDbkIsbUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtBLE9BQUwsQ0FBYUMsUUFBYixFQUFQO0FBQWlDOzs7bUNBRS9CO0FBQUUsYUFBTyxLQUFLRCxPQUFMLENBQWFFLFlBQWIsRUFBUDtBQUFxQzs7O3dDQUVsQztBQUFFLGFBQU8sS0FBS0YsT0FBTCxDQUFhRyxpQkFBYixFQUFQO0FBQTBDOzs7c0NBRTlDO0FBQ2hCLFVBQU1DLEtBQUssR0FBRyxLQUFLSCxRQUFMLEVBQWQ7QUFBQSxVQUNNSSxZQUFZLEdBQUdELEtBQUssQ0FBQ0UsUUFBTixDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUN4QyxZQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxFQUFqQjtBQUFBLFlBQ01DLHdCQUF3QixHQUFHLDBDQUEyQkYsUUFBM0IsQ0FEakM7O0FBR0EsWUFBSUUsd0JBQUosRUFBOEI7QUFDNUIsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FQZ0IsQ0FEckI7QUFVQSxhQUFPTCxZQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUQsS0FBSyxHQUFHLEtBQUtILFFBQUwsRUFBZDtBQUFBLFVBQ01VLGFBQWEsR0FBR1AsS0FBSyxDQUFDUSxVQUFOLENBQWlCLFVBQUNELGFBQUQsRUFBZ0JKLElBQWhCLEVBQXlCO0FBQ3hELFlBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFMLEVBQWpCO0FBQUEsWUFDTUksd0JBQXdCLEdBQUcsMENBQTJCTCxRQUEzQixDQURqQztBQUFBLFlBRU1NLGdCQUFnQixHQUFHRCx3QkFGekIsQ0FEd0QsQ0FHSjs7QUFFcEQsWUFBSUMsZ0JBQUosRUFBc0I7QUFDcEIsY0FBTUMsWUFBWSxHQUFHUixJQUFyQixDQURvQixDQUNROztBQUU1QkksVUFBQUEsYUFBYSxDQUFDSyxJQUFkLENBQW1CRCxZQUFuQjtBQUNEOztBQUVELGVBQU9KLGFBQVA7QUFDRCxPQVplLEVBWWIsRUFaYSxDQUR0QjtBQWVBLGFBQU9BLGFBQVA7QUFDRDs7OytDQUUwQjtBQUN6QixVQUFNUCxLQUFLLEdBQUcsS0FBS0gsUUFBTCxFQUFkO0FBQUEsVUFDTWdCLHFCQUFxQixHQUFHYixLQUFLLENBQUNRLFVBQU4sQ0FBaUIsVUFBQ0sscUJBQUQsRUFBd0JWLElBQXhCLEVBQWlDO0FBQ3hFLFlBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFMLEVBQWpCO0FBQUEsWUFDTVMsZ0NBQWdDLEdBQUcsa0RBQW1DVixRQUFuQyxDQUR6QztBQUFBLFlBRU1XLHdCQUF3QixHQUFHRCxnQ0FGakMsQ0FEd0UsQ0FHSjs7QUFFcEUsWUFBSUMsd0JBQUosRUFBOEI7QUFDNUIsY0FBTUMsb0JBQW9CLEdBQUdiLElBQTdCLENBRDRCLENBQ1E7O0FBRXBDVSxVQUFBQSxxQkFBcUIsQ0FBQ0QsSUFBdEIsQ0FBMkJJLG9CQUEzQjtBQUNEOztBQUVELGVBQU9ILHFCQUFQO0FBQ0QsT0FadUIsRUFZckIsRUFacUIsQ0FEOUI7QUFlQSxhQUFPQSxxQkFBUDtBQUNEOzs7eURBRW9DO0FBQ25DLFVBQU1iLEtBQUssR0FBRyxLQUFLSCxRQUFMLEVBQWQ7QUFBQSxVQUNNb0IsK0JBQStCLEdBQUdqQixLQUFLLENBQUNFLFFBQU4sQ0FBZSxVQUFDQyxJQUFELEVBQVU7QUFDekQsWUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE9BQUwsRUFBakI7QUFBQSxZQUNNYSwwQ0FBMEMsR0FBRyw2REFBOENkLFFBQTlDLENBRG5EOztBQUdBLFlBQUljLDBDQUFKLEVBQWdEO0FBQzlDLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUGlDLENBRHhDO0FBVUEsYUFBT0QsK0JBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTXRCLElBQUksR0FBRyxLQUFLQSxJQUFsQjtBQUFBLFVBQ013QixXQUFXLEdBQUcsS0FBS3ZCLE9BQUwsQ0FBYXdCLE1BQWIsRUFEcEI7QUFBQSxVQUVNeEIsT0FBTyxHQUFHdUIsV0FGaEI7QUFBQSxVQUU4QjtBQUN4QkUsTUFBQUEsSUFBSSxHQUFHO0FBQ0wsZ0JBQVExQixJQURIO0FBRUwsbUJBQVdDO0FBRk4sT0FIYjtBQVFBLGFBQU95QixJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDLE1BQUQsQ0FBckI7QUFBQSxVQUNNRixXQUFXLEdBQUdFLElBQUksQ0FBQyxTQUFELENBRHhCO0FBR0FBLE1BQUFBLElBQUksR0FBR0YsV0FBUCxDQUpvQixDQUlBOztBQUVwQixVQUFNeEIsSUFBSSxHQUFHMkIsUUFBYjtBQUFBLFVBQXdCO0FBQ2xCMUIsTUFBQUEsT0FBTyxHQUFHMkIsb0JBQVFDLFFBQVIsQ0FBaUJILElBQWpCLENBRGhCO0FBQUEsVUFFTUksT0FBTyxHQUFHLElBQUkvQixPQUFKLENBQVlDLElBQVosRUFBa0JDLE9BQWxCLENBRmhCOztBQUlBLGFBQU82QixPQUFQO0FBQ0Q7Ozs2Q0FFK0JDLG9CLEVBQXNCQyxxQixFQUF1QkMsdUIsRUFBeUJDLGtDLEVBQW9DO0FBQ3hJLFVBQU1qQyxPQUFPLEdBQUcyQixvQkFBUU8sd0JBQVIsQ0FBaUNKLG9CQUFqQyxFQUF1REMscUJBQXZELEVBQThFQyx1QkFBOUUsRUFBdUdDLGtDQUF2RyxDQUFoQjtBQUFBLFVBQ01KLE9BQU8sR0FBRyxJQUFJL0IsT0FBSixDQUFZZ0Msb0JBQVosRUFBa0M5QixPQUFsQyxDQURoQjs7QUFHQSxhQUFPNkIsT0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcblxuaW1wb3J0IHsgaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgsIGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoLCBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoLCBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICBnZXRGbG9yZW5jZUZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChmbG9yZW5jZUZpbGVzLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUZsb3JlbmNlRmlsZSA9IGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUZsb3JlbmNlRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBmbG9yZW5jZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgZmxvcmVuY2VGaWxlcy5wdXNoKGZsb3JlbmNlRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGN1c3RvbUdyYW1tYXJCTkZGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcy5wdXNoKGN1c3RvbUdyYW1tYXJCTkZGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGggPSBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVudHJpZXNcIjogZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRvcG1vc3REaXJlY3RvcnlOYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG4iXX0=