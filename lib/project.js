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
          metaJSONFile = files.find(function (file) {
        var filePath = file.getPath(),
            filePathMetaJSONFilePath = isFilePathMetaJSONFilePath(filePath);

        if (filePathMetaJSONFilePath) {
          return true;
        }
      }) || null; ///

      return metaJSONFile;
    }
  }, {
    key: 'getCustomGrammarBNFFile',
    value: function getCustomGrammarBNFFile() {
      var files = this.getFiles(),
          customGrammarBNFFile = files.find(function (file) {
        var filePath = file.getPath(),
            filePatCustomGrammarBNFFilePath = isFilePatCustomGrammarBNFFilePath(filePath);

        if (filePatCustomGrammarBNFFilePath) {
          return true;
        }
      }) || null; ///

      return customGrammarBNFFile;
    }
  }, {
    key: 'getCustomGrammarLexicalPatternFile',
    value: function getCustomGrammarLexicalPatternFile() {
      var files = this.getFiles(),
          customGrammarLexicalPatternFile = files.find(function (file) {
        var filePath = file.getPath(),
            filePatCustomGrammarLexicalPatternFilePath = isFilePatCustomGrammarLexicalPatternFilePath(filePath);

        if (filePatCustomGrammarLexicalPatternFilePath) {
          return true;
        }
      }) || null; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsImdldEZpbGVzIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJmaWxlcyIsImZsb3JlbmNlRmlsZXMiLCJyZWR1Y2VGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImZpbGVGbG9yZW5jZUZpbGUiLCJmbG9yZW5jZUZpbGUiLCJwdXNoIiwibWV0YUpTT05GaWxlIiwiZmluZCIsImZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiZmlsZVBhdEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImlzRmlsZVBhdEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUiLCJmaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgiLCJpc0ZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0IiwidXJsIiwiY2FsbGJhY2siLCJtZXRob2QiLCJlbmNvZGluZyIsIm9wdGlvbnMiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImJvZHkiLCJsb2FkQXN5bmMiLCJ0aGVuIiwianNaaXAiLCJmcm9tSlNaaXAiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxTQUFSLENBRGhCOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUQxQjs7SUFHUUksMEIsR0FBOElELGlCLENBQTlJQywwQjtJQUE0QkMsMEIsR0FBa0hGLGlCLENBQWxIRSwwQjtJQUE0QkMsa0MsR0FBc0ZILGlCLENBQXRGRyxrQztJQUFvQ0MsNkMsR0FBa0RKLGlCLENBQWxESSw2Qzs7SUFFOUZDLE87QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0EsT0FBTCxDQUFhQyxRQUFiLEVBQVA7QUFBaUM7OzttQ0FFL0I7QUFBRSxhQUFPLEtBQUtELE9BQUwsQ0FBYUUsWUFBYixFQUFQO0FBQXFDOzs7d0NBRWxDO0FBQUUsYUFBTyxLQUFLRixPQUFMLENBQWFHLGlCQUFiLEVBQVA7QUFBMEM7Ozt1Q0FFN0M7QUFDakIsVUFBTUMsUUFBUSxLQUFLSCxRQUFMLEVBQWQ7QUFBQSxVQUNNSSxnQkFBZ0JELE1BQU1FLFVBQU4sQ0FBaUIsVUFBU0QsYUFB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cyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSlNaaXAgPSByZXF1aXJlKCdqc3ppcCcpLFxuICAgICAgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxuICAgICAgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCwgaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcztcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGlyZWN0b3J5UGF0aHMoKTsgfVxuXG4gIGdldEZsb3JlbmNlRmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgZmxvcmVuY2VGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoZnVuY3Rpb24oZmxvcmVuY2VGaWxlcywgZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCA9IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVGbG9yZW5jZUZpbGUgPSBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGg7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZpbGVGbG9yZW5jZUZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmxvcmVuY2VGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGZsb3JlbmNlRmlsZXMucHVzaChmbG9yZW5jZUZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VGaWxlcztcbiAgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBmaWxlcy5maW5kKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggPSBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgICAgIGlmIChmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YUpTT05GaWxlO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hckJORkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlcy5maW5kKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0Q3VzdG9tR3JhbW1hckJORkZpbGVQYXRoID0gaXNGaWxlUGF0Q3VzdG9tR3JhbW1hckJORkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGU7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUgPSBmaWxlcy5maW5kKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGggPSBpc0ZpbGVQYXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgICAgIGlmIChmaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgIFwiZW50cmllc1wiOiBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lSlNPTiA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGVudHJpZXNKU09OID0ganNvbltcImVudHJpZXNcIl07XG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVSTCh1cmwsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbWV0aG9kID0gJ0dFVCcsXG4gICAgICAgICAgZW5jb2RpbmcgPSBudWxsLFxuICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBtZXRob2QgLFxuICAgICAgICAgICAgZW5jb2RpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIGVycm9yID0gZXJyb3IgfHwgKHN0YXR1c0NvZGUgIT09IDIwMCk7ICAvLy9cblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBudWxsO1xuXG4gICAgICAgIGNhbGxiYWNrKHByb2plY3QpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBib2R5IH0gPSByZXNwb25zZTtcblxuICAgICAgSlNaaXAubG9hZEFzeW5jKGJvZHkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGpzWmlwKSB7XG4gICAgICAgICAgUHJvamVjdC5mcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjaykge1xuICAgIEVudHJpZXMuZnJvbUpTWmlwKGpzWmlwLCBmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICBsZXQgcHJvamVjdCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZW50cmllcy5nZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKHByb2plY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRvcG1vc3REaXJlY3RvcnlOYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdDtcbiJdfQ==