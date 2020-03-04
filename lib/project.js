'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JSZip = require('jszip'),
    request = require('request');

var Entries = require('./entries'),
    filePathUtilities = require('./utilities/filePath');

var isFilePathFlorenceFilePath = filePathUtilities.isFilePathFlorenceFilePath,
    isFilePathMetaJSONFilePath = filePathUtilities.isFilePathMetaJSONFilePath,
    isFilePathCustomGrammarBNFFilePath = filePathUtilities.isFilePathCustomGrammarBNFFilePath,
    isFilePathCustomGrammarLexicalPatternFilePath = filePathUtilities.isFilePathCustomGrammarLexicalPatternFilePath;

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
            filePathMetaJSONFilePath = isFilePathMetaJSONFilePath(filePath);

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
            filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath),
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
            filePathCustomGrammarBNFFilePath = isFilePathCustomGrammarBNFFilePath(filePath),
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
            filePatCustomGrammarLexicalPatternFilePath = isFilePathCustomGrammarLexicalPatternFilePath(filePath);

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
      entries = Entries.fromJSON(json),
          project = new Project(name, entries);
      return project;
    }
  }, {
    key: "fromURL",
    value: function fromURL(url, callback) {
      var method = 'GET',
          encoding = null,
          options = {
        url: url,
        method: method,
        encoding: encoding
      };
      request(options, function (error, response) {
        var statusCode = response.statusCode;
        error = error || statusCode !== 200; ///

        if (error) {
          var project = null;
          callback(project);
          return;
        }

        var body = response.body;
        JSZip.loadAsync(body).then(function (jsZip) {
          Project.fromJSZip(jsZip, callback);
        });
      });
    }
  }, {
    key: "fromJSZip",
    value: function fromJSZip(jsZip, callback) {
      Entries.fromJSZip(jsZip, function (entries) {
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
      var entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);
      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuanMiXSwibmFtZXMiOlsiSlNaaXAiLCJyZXF1aXJlIiwicmVxdWVzdCIsIkVudHJpZXMiLCJmaWxlUGF0aFV0aWxpdGllcyIsImlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIiwiaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0RmlsZXMiLCJnZXRGaWxlUGF0aHMiLCJnZXREaXJlY3RvcnlQYXRocyIsImZpbGVzIiwibWV0YUpTT05GaWxlIiwiZmluZEZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiZmxvcmVuY2VGaWxlcyIsInJlZHVjZUZpbGUiLCJmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJmaWxlRmxvcmVuY2VGaWxlIiwiZmxvcmVuY2VGaWxlIiwicHVzaCIsImN1c3RvbUdyYW1tYXJCTkZGaWxlcyIsImZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckJORkZpbGUiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlIiwiZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwibmFtZUpTT04iLCJmcm9tSlNPTiIsInByb2plY3QiLCJ1cmwiLCJjYWxsYmFjayIsIm1ldGhvZCIsImVuY29kaW5nIiwib3B0aW9ucyIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiYm9keSIsImxvYWRBc3luYyIsInRoZW4iLCJqc1ppcCIsImZyb21KU1ppcCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXJCO0FBQUEsSUFDTUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsU0FBRCxDQUR2Qjs7QUFHQSxJQUFNRSxPQUFPLEdBQUdGLE9BQU8sQ0FBQyxXQUFELENBQXZCO0FBQUEsSUFDTUcsaUJBQWlCLEdBQUdILE9BQU8sQ0FBQyxzQkFBRCxDQURqQzs7SUFHUUksMEIsR0FBOElELGlCLENBQTlJQywwQjtJQUE0QkMsMEIsR0FBa0hGLGlCLENBQWxIRSwwQjtJQUE0QkMsa0MsR0FBc0ZILGlCLENBQXRGRyxrQztJQUFvQ0MsNkMsR0FBa0RKLGlCLENBQWxESSw2Qzs7SUFFOUZDLE87QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0EsT0FBTCxDQUFhQyxRQUFiLEVBQVA7QUFBaUM7OzttQ0FFL0I7QUFBRSxhQUFPLEtBQUtELE9BQUwsQ0FBYUUsWUFBYixFQUFQO0FBQXFDOzs7d0NBRWxDO0FBQUUsYUFBTyxLQUFLRixPQUFMLENBQWFHLGlCQUFiLEVBQVA7QUFBMEM7OztzQ0FFOUM7QUFDaEIsVUFBTUMsS0FBSyxHQUFHLEtBQUtILFFBQUwsRUFBZDtBQUFBLFVBQ01JLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxRQUFOLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hDLFlBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFMLEVBQWpCO0FBQUEsWUFDTUMsd0JBQXdCLEdBQUdmLDBCQUEwQixDQUFDYSxRQUFELENBRDNEOztBQUdBLFlBQUlFLHdCQUFKLEVBQThCO0FBQzVCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUGdCLENBRHJCO0FBVUEsYUFBT0wsWUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1ELEtBQUssR0FBRyxLQUFLSCxRQUFMLEVBQWQ7QUFBQSxVQUNNVSxhQUFhLEdBQUdQLEtBQUssQ0FBQ1EsVUFBTixDQUFpQixVQUFDRCxhQUFELEVBQWdCSixJQUFoQixFQUF5QjtBQUN4RCxZQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxFQUFqQjtBQUFBLFlBQ01JLHdCQUF3QixHQUFHbkIsMEJBQTBCLENBQUNjLFFBQUQsQ0FEM0Q7QUFBQSxZQUVNTSxnQkFBZ0IsR0FBR0Qsd0JBRnpCLENBRHdELENBR0o7O0FBRXBELFlBQUlDLGdCQUFKLEVBQXNCO0FBQ3BCLGNBQU1DLFlBQVksR0FBR1IsSUFBckIsQ0FEb0IsQ0FDUTs7QUFFNUJJLFVBQUFBLGFBQWEsQ0FBQ0ssSUFBZCxDQUFtQkQsWUFBbkI7QUFDRDs7QUFFRCxlQUFPSixhQUFQO0FBQ0QsT0FaZSxFQVliLEVBWmEsQ0FEdEI7QUFlQSxhQUFPQSxhQUFQO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsVUFBTVAsS0FBSyxHQUFHLEtBQUtILFFBQUwsRUFBZDtBQUFBLFVBQ01nQixxQkFBcUIsR0FBR2IsS0FBSyxDQUFDUSxVQUFOLENBQWlCLFVBQUNLLHFCQUFELEVBQXdCVixJQUF4QixFQUFpQztBQUN4RSxZQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxFQUFqQjtBQUFBLFlBQ01TLGdDQUFnQyxHQUFHdEIsa0NBQWtDLENBQUNZLFFBQUQsQ0FEM0U7QUFBQSxZQUVNVyx3QkFBd0IsR0FBR0QsZ0NBRmpDLENBRHdFLENBR0o7O0FBRXBFLFlBQUlDLHdCQUFKLEVBQThCO0FBQzVCLGNBQU1DLG9CQUFvQixHQUFHYixJQUE3QixDQUQ0QixDQUNROztBQUVwQ1UsVUFBQUEscUJBQXFCLENBQUNELElBQXRCLENBQTJCSSxvQkFBM0I7QUFDRDs7QUFFRCxlQUFPSCxxQkFBUDtBQUNELE9BWnVCLEVBWXJCLEVBWnFCLENBRDlCO0FBZUEsYUFBT0EscUJBQVA7QUFDRDs7O3lEQUVvQztBQUNuQyxVQUFNYixLQUFLLEdBQUcsS0FBS0gsUUFBTCxFQUFkO0FBQUEsVUFDTW9CLCtCQUErQixHQUFHakIsS0FBSyxDQUFDRSxRQUFOLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pELFlBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFMLEVBQWpCO0FBQUEsWUFDTWEsMENBQTBDLEdBQUd6Qiw2Q0FBNkMsQ0FBQ1csUUFBRCxDQURoRzs7QUFHQSxZQUFJYywwQ0FBSixFQUFnRDtBQUM5QyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVBpQyxDQUR4QztBQVVBLGFBQU9ELCtCQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU10QixJQUFJLEdBQUcsS0FBS0EsSUFBbEI7QUFBQSxVQUNNd0IsV0FBVyxHQUFHLEtBQUt2QixPQUFMLENBQWF3QixNQUFiLEVBRHBCO0FBQUEsVUFFTXhCLE9BQU8sR0FBR3VCLFdBRmhCO0FBQUEsVUFFOEI7QUFDeEJFLE1BQUFBLElBQUksR0FBRztBQUNMLGdCQUFRMUIsSUFESDtBQUVMLG1CQUFXQztBQUZOLE9BSGI7QUFRQSxhQUFPeUIsSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQyxNQUFELENBQXJCO0FBQUEsVUFDTUYsV0FBVyxHQUFHRSxJQUFJLENBQUMsU0FBRCxDQUR4QjtBQUdBQSxNQUFBQSxJQUFJLEdBQUdGLFdBQVAsQ0FKb0IsQ0FJQTs7QUFFcEIsVUFBTXhCLElBQUksR0FBRzJCLFFBQWI7QUFBQSxVQUF3QjtBQUNsQjFCLE1BQUFBLE9BQU8sR0FBR1IsT0FBTyxDQUFDbUMsUUFBUixDQUFpQkYsSUFBakIsQ0FEaEI7QUFBQSxVQUVNRyxPQUFPLEdBQUcsSUFBSTlCLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsQ0FGaEI7QUFJQSxhQUFPNEIsT0FBUDtBQUNEOzs7NEJBRWNDLEcsRUFBS0MsUSxFQUFVO0FBQzVCLFVBQU1DLE1BQU0sR0FBRyxLQUFmO0FBQUEsVUFDTUMsUUFBUSxHQUFHLElBRGpCO0FBQUEsVUFFTUMsT0FBTyxHQUFHO0FBQ1JKLFFBQUFBLEdBQUcsRUFBSEEsR0FEUTtBQUVSRSxRQUFBQSxNQUFNLEVBQU5BLE1BRlE7QUFHUkMsUUFBQUEsUUFBUSxFQUFSQTtBQUhRLE9BRmhCO0FBUUF6QyxNQUFBQSxPQUFPLENBQUMwQyxPQUFELEVBQVUsVUFBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQUEsWUFDNUJDLFVBRDRCLEdBQ2JELFFBRGEsQ0FDNUJDLFVBRDRCO0FBR3BDRixRQUFBQSxLQUFLLEdBQUdBLEtBQUssSUFBS0UsVUFBVSxLQUFLLEdBQWpDLENBSG9DLENBR0k7O0FBRXhDLFlBQUlGLEtBQUosRUFBVztBQUNULGNBQU1OLE9BQU8sR0FBRyxJQUFoQjtBQUVBRSxVQUFBQSxRQUFRLENBQUNGLE9BQUQsQ0FBUjtBQUVBO0FBQ0Q7O0FBWG1DLFlBYTVCUyxJQWI0QixHQWFuQkYsUUFibUIsQ0FhNUJFLElBYjRCO0FBZXBDaEQsUUFBQUEsS0FBSyxDQUFDaUQsU0FBTixDQUFnQkQsSUFBaEIsRUFDR0UsSUFESCxDQUNRLFVBQUNDLEtBQUQsRUFBVztBQUNmMUMsVUFBQUEsT0FBTyxDQUFDMkMsU0FBUixDQUFrQkQsS0FBbEIsRUFBeUJWLFFBQXpCO0FBQ0QsU0FISDtBQUlELE9BbkJNLENBQVA7QUFvQkQ7Ozs4QkFFZ0JVLEssRUFBT1YsUSxFQUFVO0FBQ2hDdEMsTUFBQUEsT0FBTyxDQUFDaUQsU0FBUixDQUFrQkQsS0FBbEIsRUFBeUIsVUFBQ3hDLE9BQUQsRUFBYTtBQUNwQyxZQUFJNEIsT0FBTyxHQUFHLElBQWQ7QUFFQSxZQUFNYyxvQkFBb0IsR0FBRzFDLE9BQU8sQ0FBQzJDLHVCQUFSLEVBQTdCOztBQUVBLFlBQUlELG9CQUFvQixLQUFLLElBQTdCLEVBQW1DO0FBQ2pDLGNBQU0zQyxJQUFJLEdBQUcyQyxvQkFBYixDQURpQyxDQUNHOztBQUVwQ2QsVUFBQUEsT0FBTyxHQUFHLElBQUk5QixPQUFKLENBQVlDLElBQVosRUFBa0JDLE9BQWxCLENBQVY7QUFDRDs7QUFFRDhCLFFBQUFBLFFBQVEsQ0FBQ0YsT0FBRCxDQUFSO0FBQ0QsT0FaRDtBQWFEOzs7NkNBRStCYyxvQixFQUFzQkUscUIsRUFBdUJDLHVCLEVBQXlCQyxrQyxFQUFvQztBQUN4SSxVQUFNOUMsT0FBTyxHQUFHUixPQUFPLENBQUN1RCx3QkFBUixDQUFpQ0wsb0JBQWpDLEVBQXVERSxxQkFBdkQsRUFBOEVDLHVCQUE5RSxFQUF1R0Msa0NBQXZHLENBQWhCO0FBQUEsVUFDTWxCLE9BQU8sR0FBRyxJQUFJOUIsT0FBSixDQUFZNEMsb0JBQVosRUFBa0MxQyxPQUFsQyxDQURoQjtBQUdBLGFBQU80QixPQUFQO0FBQ0Q7Ozs7OztBQUdIb0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkQsT0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEpTWmlwID0gcmVxdWlyZSgnanN6aXAnKSxcbiAgICAgIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbmNvbnN0IEVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcbiAgICAgIGZpbGVQYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZmlsZVBhdGgnKTtcblxuY29uc3QgeyBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgsIGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgsIGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERpcmVjdG9yeVBhdGhzKCk7IH1cblxuICBnZXRNZXRhSlNPTkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgIGlmIChmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgZ2V0RmxvcmVuY2VGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBmbG9yZW5jZUZpbGVzID0gZmlsZXMucmVkdWNlRmlsZSgoZmxvcmVuY2VGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCA9IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVGbG9yZW5jZUZpbGUgPSBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVGbG9yZW5jZUZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxvcmVuY2VGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGZsb3JlbmNlRmlsZXMucHVzaChmbG9yZW5jZUZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJCTkZGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChjdXN0b21HcmFtbWFyQk5GRmlsZXMsIGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXN0b21HcmFtbWFyQk5GRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMucHVzaChjdXN0b21HcmFtbWFyQk5GRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWVKU09OID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXTtcblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBjb25zdCBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVVJMKHVybCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBtZXRob2QgPSAnR0VUJyxcbiAgICAgICAgICBlbmNvZGluZyA9IG51bGwsXG4gICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIGVuY29kaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJlcXVlc3Qob3B0aW9ucywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSByZXNwb25zZTtcblxuICAgICAgZXJyb3IgPSBlcnJvciB8fCAoc3RhdHVzQ29kZSAhPT0gMjAwKTsgIC8vL1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG51bGw7XG5cbiAgICAgICAgY2FsbGJhY2socHJvamVjdCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGJvZHkgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBKU1ppcC5sb2FkQXN5bmMoYm9keSlcbiAgICAgICAgLnRoZW4oKGpzWmlwKSA9PiB7XG4gICAgICAgICAgUHJvamVjdC5mcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIEVudHJpZXMuZnJvbUpTWmlwKGpzWmlwLCAoZW50cmllcykgPT4ge1xuICAgICAgbGV0IHByb2plY3QgPSBudWxsO1xuXG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGVudHJpZXMuZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Q7XG4iXX0=