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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsImdldEZpbGVzIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJmaWxlcyIsIm1ldGFKU09ORmlsZSIsImZpbmRGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImZsb3JlbmNlRmlsZXMiLCJyZWR1Y2VGaWxlIiwiZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIiwiZmlsZUZsb3JlbmNlRmlsZSIsImZsb3JlbmNlRmlsZSIsInB1c2giLCJjdXN0b21HcmFtbWFyQk5GRmlsZXMiLCJmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSIsImN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSIsImZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0IiwidXJsIiwiY2FsbGJhY2siLCJtZXRob2QiLCJlbmNvZGluZyIsIm9wdGlvbnMiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImJvZHkiLCJsb2FkQXN5bmMiLCJ0aGVuIiwianNaaXAiLCJmcm9tSlNaaXAiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxTQUFSLENBRGhCOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUQxQjs7SUFHUUksMEIsR0FBOElELGlCLENBQTlJQywwQjtJQUE0QkMsMEIsR0FBa0hGLGlCLENBQWxIRSwwQjtJQUE0QkMsa0MsR0FBc0ZILGlCLENBQXRGRyxrQztJQUFvQ0MsNkMsR0FBa0RKLGlCLENBQWxESSw2Qzs7SUFFOUZDLE87QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0EsT0FBTCxDQUFhQyxRQUFiLEVBQVA7QUFBaUM7OzttQ0FFL0I7QUFBRSxhQUFPLEtBQUtELE9BQUwsQ0FBYUUsWUFBYixFQUFQO0FBQXFDOzs7d0NBRWxDO0FBQUUsYUFBTyxLQUFLRixPQUFMLENBQWFHLGlCQUFiLEVBQVA7QUFBMEM7OztzQ0FFOUM7QUFDaEIsVUFBTUMsUUFBUSxLQUFLSCxRQUFMLEVBQWQ7QUFBQSxVQUNNSSxlQUFlRCxNQUFNRSxRQUFOLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hDLFlBQU1DLFdBQVdELEtBQUtF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RDs7Ozs7O0FBR0hvQixPQUFPQyxPQUFQLEdBQWlCbkQsT0FBakIiLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSlNaaXAgPSByZXF1aXJlKCdqc3ppcCcpLFxuICAgICAgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcztcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICBnZXRGbG9yZW5jZUZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChmbG9yZW5jZUZpbGVzLCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUZsb3JlbmNlRmlsZSA9IGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUZsb3JlbmNlRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBmbG9yZW5jZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgZmxvcmVuY2VGaWxlcy5wdXNoKGZsb3JlbmNlRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGN1c3RvbUdyYW1tYXJCTkZGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoID0gaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJCTkZGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcy5wdXNoKGN1c3RvbUdyYW1tYXJCTkZGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGVzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlID0gZmlsZXMuZmluZEZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGggPSBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVudHJpZXNcIjogZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21VUkwodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnLFxuICAgICAgICAgIGVuY29kaW5nID0gbnVsbCxcbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgZW5jb2RpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmVxdWVzdChvcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBlcnJvciA9IGVycm9yIHx8IChzdGF0dXNDb2RlICE9PSAyMDApOyAgLy8vXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbnVsbDtcblxuICAgICAgICBjYWxsYmFjayhwcm9qZWN0KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgYm9keSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIEpTWmlwLmxvYWRBc3luYyhib2R5KVxuICAgICAgICAudGhlbigoanNaaXApID0+IHtcbiAgICAgICAgICBQcm9qZWN0LmZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgRW50cmllcy5mcm9tSlNaaXAoanNaaXAsIChlbnRyaWVzKSA9PiB7XG4gICAgICBsZXQgcHJvamVjdCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZW50cmllcy5nZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKHByb2plY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRvcG1vc3REaXJlY3RvcnlOYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdDtcbiJdfQ==