'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSZip = require('jszip'),
    request = require('request');

var Entries = require('./entries'),
    filePathUtilities = require('./utilities/filePath');

var isFilePathFlorenceFilePath = filePathUtilities.isFilePathFlorenceFilePath,
    isFilePathMetaJSONFilePath = filePathUtilities.isFilePathMetaJSONFilePath;

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
      var metaJSONFile = null;

      var files = this.getFiles();

      files.someFile(function (file) {
        var filePath = file.getPath(),
            filePathMetaJSONFilePath = isFilePathMetaJSONFilePath(filePath);

        if (filePathMetaJSONFilePath) {
          metaJSONFile = file; ///

          return true;
        }
      });

      return metaJSONFile;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0RmlsZXMiLCJnZXRGaWxlUGF0aHMiLCJnZXREaXJlY3RvcnlQYXRocyIsImZpbGVzIiwiZmxvcmVuY2VGaWxlcyIsInJlZHVjZUZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIiwiZmlsZUZsb3JlbmNlRmlsZSIsImZsb3JlbmNlRmlsZSIsInB1c2giLCJtZXRhSlNPTkZpbGUiLCJzb21lRmlsZSIsImZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0IiwidXJsIiwiY2FsbGJhY2siLCJtZXRob2QiLCJlbmNvZGluZyIsIm9wdGlvbnMiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImJvZHkiLCJsb2FkQXN5bmMiLCJ0aGVuIiwianNaaXAiLCJmcm9tSlNaaXAiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwibG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxTQUFSLENBRGhCOztBQUdBLElBQU1FLFVB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ZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEpTWmlwID0gcmVxdWlyZSgnanN6aXAnKSxcbiAgICAgIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbmNvbnN0IEVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcbiAgICAgIGZpbGVQYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZmlsZVBhdGgnKTtcblxuY29uc3QgeyBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldEZpbGVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVzKCk7IH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXREaXJlY3RvcnlQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXREaXJlY3RvcnlQYXRocygpOyB9XG5cbiAgZ2V0RmxvcmVuY2VGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBmbG9yZW5jZUZpbGVzID0gZmlsZXMucmVkdWNlRmlsZShmdW5jdGlvbihmbG9yZW5jZUZpbGVzLCBmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgZmlsZUZsb3JlbmNlRmlsZSA9IGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmlsZUZsb3JlbmNlRmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCBmbG9yZW5jZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgICAgZmxvcmVuY2VGaWxlcy5wdXNoKGZsb3JlbmNlRmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmbG9yZW5jZUZpbGVzO1xuICB9XG5cbiAgZ2V0TWV0YUpTT05GaWxlKCkge1xuICAgIGxldCBtZXRhSlNPTkZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5zb21lRmlsZShmdW5jdGlvbihmaWxlKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoID0gaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKSB7XG4gICAgICAgIG1ldGFKU09ORmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhSlNPTkZpbGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVudHJpZXNcIjogZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21VUkwodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnLFxuICAgICAgICAgIGVuY29kaW5nID0gbnVsbCxcbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgbWV0aG9kICxcbiAgICAgICAgICAgIGVuY29kaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBlcnJvciA9IGVycm9yIHx8IChzdGF0dXNDb2RlICE9PSAyMDApOyAgLy8vXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbnVsbDtcblxuICAgICAgICBjYWxsYmFjayhwcm9qZWN0KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgYm9keSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIEpTWmlwLmxvYWRBc3luYyhib2R5KVxuICAgICAgICAudGhlbihmdW5jdGlvbihqc1ppcCkge1xuICAgICAgICAgIFByb2plY3QuZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBFbnRyaWVzLmZyb21KU1ppcChqc1ppcCwgZnVuY3Rpb24oZW50cmllcykge1xuICAgICAgbGV0IHByb2plY3QgPSBudWxsO1xuXG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGVudHJpZXMuZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Q7XG4iXX0=