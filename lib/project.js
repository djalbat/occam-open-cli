'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSZip = require('jszip'),
    request = require('request');

var Entries = require('./entries'),
    filePathUtilities = require('./utilities/filePath');

var isFilePathFlorenceFilePath = filePathUtilities.isFilePathFlorenceFilePath,
    isFilePathMetaJSONFilePath = filePathUtilities.isFilePathMetaJSONFilePath,
    isFilePathCustomGrammarBNFFilePath = filePathUtilities.isFilePathCustomGrammarBNFFilePath,
    isFilePathCustomGrammarLexicalPatternFilePath = filePathUtilities.isFilePathCustomGrammarLexicalPatternFilePath;

var Project = function () {
  function Project(name, entries) {
    _classCallCheck(this, Project);

    this.name = name;
    this.entries = entries;
  }

  _createClass(Project, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getEntries',
    value: function getEntries() {
      return this.entries;
    }
  }, {
    key: 'getFiles',
    value: function getFiles() {
      return this.entries.getFiles();
    }
  }, {
    key: 'getFilePaths',
    value: function getFilePaths() {
      return this.entries.getFilePaths();
    }
  }, {
    key: 'getDirectoryPaths',
    value: function getDirectoryPaths() {
      return this.entries.getDirectoryPaths();
    }
  }, {
    key: 'getFlorenceFiles',
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
    key: 'getMetaJSONFile',
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
    key: 'getCustomGrammarBNFFile',
    value: function getCustomGrammarBNFFile() {
      var files = this.getFiles(),
          customGrammarBNFFile = files.findFile(function (file) {
        var filePath = file.getPath(),
            filePatCustomGrammarBNFFilePath = isFilePathCustomGrammarBNFFilePath(filePath);

        if (filePatCustomGrammarBNFFilePath) {
          return true;
        }
      });

      return customGrammarBNFFile;
    }
  }, {
    key: 'getCustomGrammarLexicalPatternFile',
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
    key: 'toJSON',
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
    key: 'fromJSON',
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
    key: 'fromURL',
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
    key: 'fromJSZip',
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
    key: 'fromTopmostDirectoryName',
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
      var entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsImdldEZpbGVzIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJmaWxlcyIsImZsb3JlbmNlRmlsZXMiLCJyZWR1Y2VGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImZpbGVGbG9yZW5jZUZpbGUiLCJmbG9yZW5jZUZpbGUiLCJwdXNoIiwibWV0YUpTT05GaWxlIiwiZmluZEZpbGUiLCJmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJjdXN0b21HcmFtbWFyQk5GRmlsZSIsImZpbGVQYXRDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlIiwiZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwibmFtZUpTT04iLCJmcm9tSlNPTiIsInByb2plY3QiLCJ1cmwiLCJjYWxsYmFjayIsIm1ldGhvZCIsImVuY29kaW5nIiwib3B0aW9ucyIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiYm9keSIsImxvYWRBc3luYyIsInRoZW4iLCJqc1ppcCIsImZyb21KU1ppcCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxPQUFSLENBQWQ7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLFNBQVIsQ0FEaEI7O0FBR0EsSUFBTUUsVUFBVUYsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUcsb0JBQW9CSCxRQUFRLHNCQUFSLENBRDFCOztJQUdRSSwwQixHQUE4SUQsaUIsQ0FBOUlDLDBCO0lBQTRCQywwQixHQUFrSEYsaUIsQ0FBbEhFLDBCO0lBQTRCQyxrQyxHQUFzRkgsaUIsQ0FBdEZHLGtDO0lBQW9DQyw2QyxHQUFrREosaUIsQ0FBbERJLDZDOztJQUU5RkMsTztBQUNKLG1CQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0QsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7OytCQUVVO0FBQUUsYUFBTyxLQUFLQSxPQUFMLENBQWFDLFFBQWIsRUFBUDtBQUFpQzs7O21DQUUvQjtBQUFFLGFBQU8sS0FBS0QsT0FBTCxDQUFhRSxZQUFiLEVBQVA7QUFBcUM7Ozt3Q0FFbEM7QUFBRSxhQUFPLEtBQUtGLE9BQUwsQ0FBYUcsaUJBQWIsRUFBUDtBQUEwQzs7O3VDQUU3QztBQUNqQixVQUFNQyxRQUFRLEtBQUtILFFBQUwsRUFBZDtBQUFBLFVBQ01JLGdCQUFnQkQsTUFBTUUsVUFBTixDQUFpQixVQUFTRCxhQUFULEVBQXdCRSxJQUF4QixFQUE4QjtBQUM3RCxZQUFNQyxXQUFXRCxLQUFLRSxPQUFMLEVBQWpCO0FBQUEsWUFDTUMsMkJBQTJCaEIsMkJB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QWFqQ1MsSUFiaUMsR0FheEJGLFFBYndCLENBYWpDRSxJQWJpQzs7O0FBZXpDOUMsY0FBTStDLFNBQU4sQ0FBZ0JELElBQWhCLEVBQ0dFLElBREgsQ0FDUSxVQUFTQyxLQUFULEVBQWdCO0FBQ3BCeEMsa0JBQVF5QyxTQUFSLENBQWtCRCxLQUFsQixFQUF5QlYsUUFBekI7QUFDRCxTQUhIO0FBSUQsT0FuQkQ7QUFvQkQ7Ozs4QkFFZ0JVLEssRUFBT1YsUSxFQUFVO0FBQ2hDcEMsY0FBUStDLFNBQVIsQ0FBa0JELEtBQWxCLEVBQXlCLFVBQVN0QyxPQUFULEVBQWtCO0FBQ3pDLFlBQUkwQixVQUFVLElBQWQ7O0FBRUEsWUFBTWMsdUJBQXVCeEMsUUFBUXlDLHVCQUFSLEVBQTdCOztBQUVBLFlBQUlELHlCQUF5QixJQUE3QixFQUFtQztBQUNqQyxjQUFNekMsT0FBT3lDLG9CQUFiLENBRGlDLENBQ0c7O0FBRXBDZCxvQkFBVSxJQUFJNUIsT0FBSixDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixDQUFWO0FBQ0Q7O0FBRUQ0QixpQkFBU0YsT0FBVDtBQUNELE9BWkQ7QUFhRDs7OzZDQUUrQmMsb0IsRUFBc0JFLHFCLEVBQXVCQyx1QixFQUF5QkMsa0MsRUFBb0M7QUFDeEksVUFBTTVDLFVBQVVSLFFBQVFxRCx3QkFBUixDQUFpQ0wsb0JBQWpDLEVBQXVERSxxQkFBdkQsRUFBOEVDLHVCQUE5RSxFQUF1R0Msa0NBQXZHLENBQWhCO0FBQUEsVUFDTWxCLFVBQVUsSUFBSTVCLE9BQUosQ0FBWTBDLG9CQUFaLEVBQWtDeEMsT0FBbEMsQ0FEaEI7O0FBR0EsYUFBTzBCLE9BQVA7QUFDRDs7Ozs7O0FBR0hvQixPQUFPQyxPQUFQLEdBQWlCakQsT0FBakIiLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSlNaaXAgPSByZXF1aXJlKCdqc3ppcCcpLFxuICAgICAgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcztcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldEZsb3JlbmNlRmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgZmxvcmVuY2VGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoZnVuY3Rpb24oZmxvcmVuY2VGaWxlcywgZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCA9IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVGbG9yZW5jZUZpbGUgPSBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVGbG9yZW5jZUZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxvcmVuY2VGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGZsb3JlbmNlRmlsZXMucHVzaChmbG9yZW5jZUZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlcy5maW5kRmlsZShmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFKU09ORmlsZTtcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJCTkZGaWxlKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZXMuZmluZEZpbGUoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGggPSBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGU7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUgPSBmaWxlcy5maW5kRmlsZShmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWVKU09OID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXTtcblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBjb25zdCBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVVJMKHVybCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBtZXRob2QgPSAnR0VUJyxcbiAgICAgICAgICBlbmNvZGluZyA9IG51bGwsXG4gICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIG1ldGhvZCAsXG4gICAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXF1ZXN0KG9wdGlvbnMsIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSkge1xuICAgICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSByZXNwb25zZTtcblxuICAgICAgZXJyb3IgPSBlcnJvciB8fCAoc3RhdHVzQ29kZSAhPT0gMjAwKTsgIC8vL1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG51bGw7XG5cbiAgICAgICAgY2FsbGJhY2socHJvamVjdCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGJvZHkgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBKU1ppcC5sb2FkQXN5bmMoYm9keSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oanNaaXApIHtcbiAgICAgICAgICBQcm9qZWN0LmZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgRW50cmllcy5mcm9tSlNaaXAoanNaaXAsIGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgIGxldCBwcm9qZWN0ID0gbnVsbDtcblxuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBlbnRyaWVzLmdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBuYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cbiAgICAgICAgXG4gICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2socHJvamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QodG9wbW9zdERpcmVjdG9yeU5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0O1xuIl19