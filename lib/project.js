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
            filePatCustomGrammarBNFFilePath = isFilePatCustomGrammarBNFFilePath(filePath);

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
            filePatCustomGrammarLexicalPatternFilePath = isFilePatCustomGrammarLexicalPatternFilePath(filePath);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aCIsImlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsImdldEZpbGVzIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGlyZWN0b3J5UGF0aHMiLCJmaWxlcyIsImZsb3JlbmNlRmlsZXMiLCJyZWR1Y2VGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImZpbGVGbG9yZW5jZUZpbGUiLCJmbG9yZW5jZUZpbGUiLCJwdXNoIiwibWV0YUpTT05GaWxlIiwiZmluZEZpbGUiLCJmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgiLCJjdXN0b21HcmFtbWFyQk5GRmlsZSIsImZpbGVQYXRDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgiLCJpc0ZpbGVQYXRDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlIiwiZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwiaXNGaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgiLCJlbnRyaWVzSlNPTiIsInRvSlNPTiIsImpzb24iLCJuYW1lSlNPTiIsImZyb21KU09OIiwicHJvamVjdCIsInVybCIsImNhbGxiYWNrIiwibWV0aG9kIiwiZW5jb2RpbmciLCJvcHRpb25zIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJib2R5IiwibG9hZEFzeW5jIiwidGhlbiIsImpzWmlwIiwiZnJvbUpTWmlwIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImxvYWRPbmx5UmVjb2duaXNlZEZpbGVzIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLE9BQVIsQ0FBZDtBQUFBLElBQ01DLFVBQVVELFFBQVEsU0FBUixDQURoQjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRyxvQkFBb0JILFFBQVEsc0JBQVIsQ0FEMUI7O0lBR1FJLDBCLEdBQThJRCxpQixDQUE5SUMsMEI7SUFBNEJDLDBCLEdBQWtIRixpQixDQUFsSEUsMEI7SUFBNEJDLGtDLEdBQXNGSCxpQixDQUF0Rkcsa0M7SUFBb0NDLDZDLEdBQWtESixpQixDQUFsREksNkM7O0lBRTlGQyxPO0FBQ0osbUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtBLE9BQUwsQ0FBYUMsUUFBYixFQUFQO0FBQWlDOzs7bUNBRS9CO0FBQUUsYUFBTyxLQUFLRCxPQUFMLENBQWFFLFlBQWIsRUFBUDtBQUFxQzs7O3dDQUVsQztBQUFFLGFBQU8sS0FBS0YsT0FBTCxDQUFhRyxpQkFBYixFQUFQO0FBQTBDOzs7dUNBRTdDO0FBQ2pCLFVBQU1DLFFBQVEsS0FBS0gsUUFBTCxFQUFkO0FBQUEsVUFDTUksZ0JBQWdCRCxNQUFNRSxVQUFOLENBQWlCLFVBQVNE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WmlwID0gcmVxdWlyZSgnanN6aXAnKSxcbiAgICAgIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbmNvbnN0IEVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcbiAgICAgIGZpbGVQYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZmlsZVBhdGgnKTtcblxuY29uc3QgeyBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgsIGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgsIGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERpcmVjdG9yeVBhdGhzKCk7IH1cblxuICBnZXRGbG9yZW5jZUZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZsb3JlbmNlRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKGZ1bmN0aW9uKGZsb3JlbmNlRmlsZXMsIGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICBmaWxlRmxvcmVuY2VGaWxlID0gZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmaWxlRmxvcmVuY2VGaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZsb3JlbmNlRmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICAgICAgICBmbG9yZW5jZUZpbGVzLnB1c2goZmxvcmVuY2VGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZsb3JlbmNlRmlsZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlRmlsZXM7XG4gIH1cblxuICBnZXRNZXRhSlNPTkZpbGUoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gZmlsZXMuZmluZEZpbGUoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyQk5GRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GRmlsZSA9IGZpbGVzLmZpbmRGaWxlKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICBmaWxlUGF0Q3VzdG9tR3JhbW1hckJORkZpbGVQYXRoID0gaXNGaWxlUGF0Q3VzdG9tR3JhbW1hckJORkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGU7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5GaWxlKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGUgPSBmaWxlcy5maW5kRmlsZShmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gaXNGaWxlUGF0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZVBhdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkZpbGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVudHJpZXNcIjogZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21VUkwodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnLFxuICAgICAgICAgIGVuY29kaW5nID0gbnVsbCxcbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgbWV0aG9kICxcbiAgICAgICAgICAgIGVuY29kaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBlcnJvciA9IGVycm9yIHx8IChzdGF0dXNDb2RlICE9PSAyMDApOyAgLy8vXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbnVsbDtcblxuICAgICAgICBjYWxsYmFjayhwcm9qZWN0KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgYm9keSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIEpTWmlwLmxvYWRBc3luYyhib2R5KVxuICAgICAgICAudGhlbihmdW5jdGlvbihqc1ppcCkge1xuICAgICAgICAgIFByb2plY3QuZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBFbnRyaWVzLmZyb21KU1ppcChqc1ppcCwgZnVuY3Rpb24oZW50cmllcykge1xuICAgICAgbGV0IHByb2plY3QgPSBudWxsO1xuXG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGVudHJpZXMuZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Q7XG4iXX0=