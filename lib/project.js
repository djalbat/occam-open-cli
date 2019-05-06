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
    key: 'getCustomGrammarBNFFiles',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsImdldEZpbGVzIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJmaWxlcyIsIm1ldGFKU09ORmlsZSIsImZpbmRGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImZsb3JlbmNlRmlsZXMiLCJyZWR1Y2VGaWxlIiwiZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIiwiZmlsZUZsb3JlbmNlRmlsZSIsImZsb3JlbmNlRmlsZSIsInB1c2giLCJjdXN0b21HcmFtbWFyQk5GRmlsZXMiLCJmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSIsImN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSIsImZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0IiwidXJsIiwiY2FsbGJhY2siLCJtZXRob2QiLCJlbmNvZGluZyIsIm9wdGlvbnMiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImJvZHkiLCJsb2FkQXN5bmMiLCJ0aGVuIiwianNaaXAiLCJmcm9tSlNaaXAiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxTQUFSLENBRGhCOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUQxQjs7SUFHUUksMEIsR0FBOElELGlCLENBQTlJQywwQjtJQUE0QkMsMEIsR0FBa0hGLGlCLENBQWxIRSwwQjtJQUE0QkMsa0MsR0FBc0ZILGlCLENBQXRGRyxrQztJQUFvQ0MsNkMsR0FBa0RKLGlCLENBQWxESSw2Qzs7SUFFOUZDLE87QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0EsT0FBTCxDQUFhQyxRQUFiLEVBQVA7QUFBaUM7OzttQ0FFL0I7QUFBRSxhQUFPLEtBQUtELE9BQUwsQ0FBYUUsWUFBYixFQUFQO0FBQXFDOzs7d0NBRWxDO0FBQUUsYUFBTyxLQUFLRixPQUFMLENBQWFHLGlCQUFiLEVBQVA7QUFBMEM7OztzQ0FFOUM7QUFDaEIsVUFBTUMsUUFBUSxLQUFLSCxRQUFMLEVBQWQ7QUFBQSxVQUNNSSxlQUFlRCxNQUFNRSxRQUFOLENBQWUsVUFBU0MsSUFBVCxFQUFlO0FBQzdDLFlBQU1DLFdBQVdELEtBQUtF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QUFQO0FBQ0Q7Ozs7OztBQUdIb0IsT0FBT0MsT0FBUCxHQUFpQm5ELE9BQWpCIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEpTWmlwID0gcmVxdWlyZSgnanN6aXAnKSxcbiAgICAgIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbmNvbnN0IEVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcbiAgICAgIGZpbGVQYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZmlsZVBhdGgnKTtcblxuY29uc3QgeyBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgsIGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgsIGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERpcmVjdG9yeVBhdGhzKCk7IH1cblxuICBnZXRNZXRhSlNPTkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gZmlsZXMuZmluZEZpbGUoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICBnZXRGbG9yZW5jZUZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKGZ1bmN0aW9uKGZsb3JlbmNlRmlsZXMsIGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlRmxvcmVuY2VGaWxlID0gZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmaWxlRmxvcmVuY2VGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZsb3JlbmNlRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBmbG9yZW5jZUZpbGVzLnB1c2goZmxvcmVuY2VGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZsb3JlbmNlRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlRmlsZXM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyQk5GRmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORkZpbGVzID0gZmlsZXMucmVkdWNlRmlsZShmdW5jdGlvbihjdXN0b21HcmFtbWFyQk5GRmlsZXMsIGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXN0b21HcmFtbWFyQk5GRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZXMucHVzaChjdXN0b21HcmFtbWFyQk5GRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSA9IGZpbGVzLmZpbmRGaWxlKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGggPSBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVudHJpZXNcIjogZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21VUkwodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnLFxuICAgICAgICAgIGVuY29kaW5nID0gbnVsbCxcbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgZW5jb2RpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIGVycm9yID0gZXJyb3IgfHwgKHN0YXR1c0NvZGUgIT09IDIwMCk7ICAvLy9cblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBudWxsO1xuXG4gICAgICAgIGNhbGxiYWNrKHByb2plY3QpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBib2R5IH0gPSByZXNwb25zZTtcblxuICAgICAgSlNaaXAubG9hZEFzeW5jKGJvZHkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGpzWmlwKSB7XG4gICAgICAgICAgUHJvamVjdC5mcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIEVudHJpZXMuZnJvbUpTWmlwKGpzWmlwLCBmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICBsZXQgcHJvamVjdCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZW50cmllcy5nZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKHByb2plY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRvcG1vc3REaXJlY3RvcnlOYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdDtcbiJdfQ==