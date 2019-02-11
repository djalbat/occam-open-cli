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
      var files = this.entries.reduce(function (files, entry) {
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
      var directories = this.entries.reduce(function (directories, entry) {
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
          callback(null);

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
      var project = null;

      Entries.fromJSZip(jsZip, function (entries) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZmlsZXMiLCJyZWR1Y2UiLCJlbnRyeSIsImVudHJ5RGlyZWN0b3J5IiwiaXNEaXJlY3RvcnkiLCJlbnRyeUZpbGUiLCJmaWxlIiwicHVzaCIsImRpcmVjdG9yaWVzIiwiZGlyZWN0b3J5IiwiZ2V0RmlsZXMiLCJmaWxlUGF0aHMiLCJtYXAiLCJmaWxlUGF0aCIsImdldFBhdGgiLCJnZXREaXJlY3RvcmllcyIsImRpcmVjdG9yeVBhdGhzIiwiZGlyZWN0b3J5UGF0aCIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwiZnJvbUpTT04iLCJwcm9qZWN0IiwidXJsIiwiY2FsbGJhY2siLCJtZXRob2QiLCJlbmNvZGluZyIsIm9wdGlvbnMiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImJvZHkiLCJsb2FkQXN5bmMiLCJ0aGVuIiwianNaaXAiLCJmcm9tSlNaaXAiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImdldFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzIiwiZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkO0FBQUEsSUFDTUMsVUFBVUQsUUFBUSxTQUFSLENBRGhCOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjs7SUFFTUcsTztBQUNKLG1CQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFD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QUlGLEtBQUosRUFBVztBQUNUSixtQkFBUyxJQUFUOztBQUVBO0FBQ0Q7O0FBVHdDLFlBV2pDTyxJQVhpQyxHQVd4QkYsUUFYd0IsQ0FXakNFLElBWGlDOzs7QUFhekN2QyxjQUFNd0MsU0FBTixDQUFnQkQsSUFBaEIsRUFDR0UsSUFESCxDQUNRLFVBQVNDLEtBQVQsRUFBZ0I7QUFDcEJ0QyxrQkFBUXVDLFNBQVIsQ0FBa0JELEtBQWxCLEVBQXlCVixRQUF6QjtBQUNELFNBSEg7QUFJRCxPQWpCRDtBQWtCRDs7OzhCQUVnQlUsSyxFQUFPVixRLEVBQVU7QUFDaEMsVUFBSUYsVUFBVSxJQUFkOztBQUVBM0IsY0FBUXdDLFNBQVIsQ0FBa0JELEtBQWxCLEVBQXlCLFVBQVNwQyxPQUFULEVBQWtCO0FBQ3pDLFlBQU1zQyx1QkFBdUJ0QyxRQUFRdUMsdUJBQVIsRUFBN0I7O0FBRUEsWUFBSUQseUJBQXlCLElBQTdCLEVBQW1DO0FBQ2pDLGNBQU12QyxPQUFPdUMsb0JBQWIsQ0FEaUMsQ0FDRzs7QUFFcENkLG9CQUFVLElBQUkxQixPQUFKLENBQVlDLElBQVosRUFBa0JDLE9BQWxCLENBQVY7QUFDRDs7QUFFRDBCLGlCQUFTRixPQUFUO0FBQ0QsT0FWRDtBQVdEOzs7NkNBRStCYyxvQixFQUFzQkUscUIsRUFBdUJDLHdCLEVBQTBCQyxpQyxFQUFtQztBQUN4SSxVQUFNMUMsVUFBVUgsUUFBUThDLHdCQUFSLENBQWlDTCxvQkFBakMsRUFBdURFLHFCQUF2RCxFQUE4RUMsd0JBQTlFLEVBQXdHQyxpQ0FBeEcsQ0FBaEI7QUFBQSxVQUNNbEIsVUFBVSxJQUFJMUIsT0FBSixDQUFZd0Msb0JBQVosRUFBa0N0QyxPQUFsQyxDQURoQjs7QUFHQSxhQUFPd0IsT0FBUDtBQUNEOzs7Ozs7QUFHSG9CLE9BQU9DLE9BQVAsR0FBaUIvQyxPQUFqQiIsImZpbGUiOiJwcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBKU1ppcCA9IHJlcXVpcmUoJ2pzemlwJyksXG4gICAgICByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuXG5jb25zdCBFbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyk7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmVudHJpZXMucmVkdWNlKGZ1bmN0aW9uKGZpbGVzLCBlbnRyeSkge1xuICAgICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBlbnRyeS5pc0RpcmVjdG9yeSgpLFxuICAgICAgICAgICAgZW50cnlGaWxlID0gIWVudHJ5RGlyZWN0b3J5O1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMucHVzaChmaWxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldERpcmVjdG9yaWVzKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gdGhpcy5lbnRyaWVzLnJlZHVjZShmdW5jdGlvbihkaXJlY3RvcmllcywgZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5OyAgLy8vXG5cbiAgICAgICAgZGlyZWN0b3JpZXMucHVzaChkaXJlY3RvcnkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0b3JpZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yaWVzO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZpbGVQYXRocyA9IGZpbGVzLm1hcChmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZVBhdGg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3JpZXMgPSB0aGlzLmdldERpcmVjdG9yaWVzKCksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aHMgPSBkaXJlY3Rvcmllcy5tYXAoZnVuY3Rpb24oZGlyZWN0b3J5KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5LmdldFBhdGgoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICAgICAgICBcImVudHJpZXNcIjogZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdO1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21VUkwodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnLFxuICAgICAgICAgIGVuY29kaW5nID0gbnVsbCxcbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgbWV0aG9kICxcbiAgICAgICAgICAgIGVuY29kaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBlcnJvciA9IGVycm9yIHx8IChzdGF0dXNDb2RlICE9PSAyMDApOyAgLy8vXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgYm9keSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIEpTWmlwLmxvYWRBc3luYyhib2R5KVxuICAgICAgICAudGhlbihmdW5jdGlvbihqc1ppcCkge1xuICAgICAgICAgIFByb2plY3QuZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcHJvamVjdCA9IG51bGw7XG5cbiAgICBFbnRyaWVzLmZyb21KU1ppcChqc1ppcCwgZnVuY3Rpb24oZW50cmllcykge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBlbnRyaWVzLmdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBuYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cbiAgICAgICAgXG4gICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2socHJvamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QodG9wbW9zdERpcmVjdG9yeU5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0O1xuIl19