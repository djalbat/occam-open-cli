'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSZip = require('jszip'),
    request = require('request');

var Entries = require('./entries');

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
      var files = this.entries.reduceEntry(function (files, entry) {
        var entryDirectory = entry.isDirectory(),
            entryFile = !entryDirectory;

        if (entryFile) {
          var file = entry; ///

          files.push(file);
        }

        return files;
      }, []);

      return files;
    }
  }, {
    key: 'getDirectories',
    value: function getDirectories() {
      var directories = this.entries.reduceEntry(function (directories, entry) {
        var entryDirectory = entry.isDirectory();

        if (entryDirectory) {
          var directory = entry; ///

          directories.push(directory);
        }

        return directories;
      }, []);

      return directories;
    }
  }, {
    key: 'getFilePaths',
    value: function getFilePaths() {
      var files = this.getFiles(),
          filePaths = files.map(function (file) {
        var filePath = file.getPath();

        return filePath;
      });

      return filePaths;
    }
  }, {
    key: 'getDirectoryPaths',
    value: function getDirectoryPaths() {
      var directories = this.getDirectories(),
          directoryPaths = directories.map(function (directory) {
        var directoryPath = directory.getPath();

        return directoryPath;
      });

      return directoryPaths;
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
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories) {
      var entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZmlsZXMiLCJyZWR1Y2VFbnRyeSIsImVudHJ5IiwiZW50cnlEaXJlY3RvcnkiLCJpc0RpcmVjdG9yeSIsImVudHJ5RmlsZSIsImZpbGUiLCJwdXNoIiwiZGlyZWN0b3JpZXMiLCJkaXJlY3RvcnkiLCJnZXRGaWxlcyIsImZpbGVQYXRocyIsIm1hcCIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImdldERpcmVjdG9yaWVzIiwiZGlyZWN0b3J5UGF0aHMiLCJkaXJlY3RvcnlQYXRoIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwibmFtZUpTT04iLCJmcm9tSlNPTiIsInByb2plY3QiLCJ1cmwiLCJjYWxsYmFjayIsIm1ldGhvZCIsImVuY29kaW5nIiwib3B0aW9ucyIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiYm9keSIsImxvYWRBc3luYyIsInRoZW4iLCJqc1ppcCIsImZyb21KU1ppcCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMiLCJkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxPQUFSLENBQWQ7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLFNBQVIsQ0FEaEI7O0FBR0EsSUFBTUUsVUFBVUYsUUFBUSxXQUFSLENBQWhCOztJQUVNRyxPO0FBQ0osbUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtELElBQUwsR0FBWUEsSUFB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ID0gcmVxdWlyZSgnanN6aXAnKSxcbiAgICAgIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbmNvbnN0IEVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZW50cmllcy5yZWR1Y2VFbnRyeShmdW5jdGlvbihmaWxlcywgZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKSxcbiAgICAgICAgICAgIGVudHJ5RmlsZSA9ICFlbnRyeURpcmVjdG9yeTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnk7IC8vL1xuXG4gICAgICAgIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBnZXREaXJlY3RvcmllcygpIHtcbiAgICBjb25zdCBkaXJlY3RvcmllcyA9IHRoaXMuZW50cmllcy5yZWR1Y2VFbnRyeShmdW5jdGlvbihkaXJlY3RvcmllcywgZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5OyAgLy8vXG5cbiAgICAgICAgZGlyZWN0b3JpZXMucHVzaChkaXJlY3RvcnkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0b3JpZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yaWVzO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZpbGVQYXRocyA9IGZpbGVzLm1hcChmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZVBhdGg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3JpZXMgPSB0aGlzLmdldERpcmVjdG9yaWVzKCksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aHMgPSBkaXJlY3Rvcmllcy5tYXAoZnVuY3Rpb24oZGlyZWN0b3J5KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5LmdldFBhdGgoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVudHJpZXNcIjogZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21VUkwodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnLFxuICAgICAgICAgIGVuY29kaW5nID0gbnVsbCxcbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgbWV0aG9kICxcbiAgICAgICAgICAgIGVuY29kaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBlcnJvciA9IGVycm9yIHx8IChzdGF0dXNDb2RlICE9PSAyMDApOyAgLy8vXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbnVsbDtcblxuICAgICAgICBjYWxsYmFjayhwcm9qZWN0KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgYm9keSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIEpTWmlwLmxvYWRBc3luYyhib2R5KVxuICAgICAgICAudGhlbihmdW5jdGlvbihqc1ppcCkge1xuICAgICAgICAgIFByb2plY3QuZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBFbnRyaWVzLmZyb21KU1ppcChqc1ppcCwgZnVuY3Rpb24oZW50cmllcykge1xuICAgICAgbGV0IHByb2plY3QgPSBudWxsO1xuXG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGVudHJpZXMuZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZTsgIC8vL1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Q7XG4iXX0=