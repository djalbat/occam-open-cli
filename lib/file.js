'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mkdirp = require('mkdirp'),
    necessary = require('necessary');

var nameUtilities = require('./utilities/name');

var pathUtilities = necessary.pathUtilities,
    fileSystemUtilities = necessary.fileSystemUtilities,
    readFile = fileSystemUtilities.readFile,
    writeFile = fileSystemUtilities.writeFile,
    isEntryFile = fileSystemUtilities.isEntryFile,
    removeMasterDirectoryNameFromPath = nameUtilities.removeMasterDirectoryNameFromPath,
    concatenatePaths = pathUtilities.concatenatePaths,
    topmostDirectoryPathFromPath = pathUtilities.topmostDirectoryPathFromPath;

var File = function () {
  function File(path, content) {
    _classCallCheck(this, File);

    this.path = path;
    this.content = content;
  }

  _createClass(File, [{
    key: 'getPath',
    value: function getPath() {
      return this.path;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'isFile',
    value: function isFile() {
      var file = true;

      return file;
    }
  }, {
    key: 'isDirectory',
    value: function isDirectory() {
      var directory = false;

      return directory;
    }
  }, {
    key: 'setPath',
    value: function setPath(path) {
      this.path = path;
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;
    }
  }, {
    key: 'save',
    value: function save(projectsDirectoryPath) {
      var absolutePath = concatenatePaths(projectsDirectoryPath, this.path),
          ///
      topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);

      mkdirp.sync(topmostAbsoluteDirectoryPath);

      writeFile(absolutePath, this.content);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var type = File.type,
          path = this.path,
          content = this.content,
          json = {
        "type": type,
        "path": path,
        "content": content
      };


      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var file = null;

      if (json !== null) {
        var _type = File.type,
            typeJSON = json["type"];


        if (typeJSON === _type) {
          ///
          var pathJSON = json["path"],
              contentJSON = json["content"],
              path = pathJSON; ///

          var content = contentJSON; ///

          content = convertContentTabsToWhitespace(content); ///

          file = new File(path, content);
        }
      }

      return file;
    }
  }, {
    key: 'fromPath',
    value: function fromPath(path, projectsDirectoryPath) {
      var file = null;

      try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path),
            entryFile = isEntryFile(absolutePath);

        if (entryFile) {
          var content = readFile(absolutePath);

          content = convertContentTabsToWhitespace(content); ///

          file = new File(path, content);
        }
      } catch (error) {
        ///
      }

      return file;
    }
  }, {
    key: 'fromDocument',
    value: function fromDocument(document) {
      var filePath = document.getFilePath(),
          path = filePath; ///

      var content = document.getContent();

      content = convertContentTabsToWhitespace(content); ///

      var file = new File(path, content);

      return file;
    }
  }, {
    key: 'fromJSZipEntry',
    value: function fromJSZipEntry(jsZipEntry, callback) {
      var file = null;

      var dir = jsZipEntry.dir,
          jsZipEntryDirectory = dir,
          jsZipEntryFile = !jsZipEntryDirectory; ///

      if (!jsZipEntryFile) {
        callback(file);

        return;
      }

      var jsZipFile = jsZipEntry,
          name = jsZipFile.name;

      var path = name; ///

      path = removeMasterDirectoryNameFromPath(path);

      jsZipEntry.async('string').then(function (content) {
        content = convertContentTabsToWhitespace(content); ///

        file = new File(path, content);

        callback(file);
      });
    }
  }, {
    key: 'fromPathAndContent',
    value: function fromPathAndContent(path, content) {
      content = convertContentTabsToWhitespace(content); ///

      var file = new File(path, content);

      return file;
    }
  }]);

  return File;
}();

var type = 'File';

Object.assign(File, {
  type: type
});

module.exports = File;

function convertContentTabsToWhitespace(content) {
  return content.replace(/\t/g, '  ');
} ///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVQYXRoIiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN5bmMiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsImVudHJ5RmlsZSIsImVycm9yIiwiZG9jdW1lbnQiLCJmaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZ2V0Q29udGVudCIsImpzWmlwRW50cnkiLCJjYWxsYmFjayIsImRpciIsImpzWmlwRW50cnlEaXJlY3RvcnkiLCJqc1ppcEVudHJ5RmlsZSIsIm5hbWUiLCJqc1ppcEZpbGUiLCJhc3luYyIsInRoZW4iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUcsYSxHQUF1Q0YsUyxDQUF2Q0UsYTtJQUFlQyxtQixHQUF3QkgsUyxDQUF4QkcsbUI7SUFDZkMsUSxHQUFxQ0QsbUIsQ0FBckNDLFE7SUFBVUMsUyxHQUEy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cUIsT0FBT0MsTUFBUCxDQUFjL0IsSUFBZCxFQUFvQjtBQUNsQlM7QUFEa0IsQ0FBcEI7O0FBSUF1QixPQUFPQyxPQUFQLEdBQWlCakMsSUFBakI7O0FBRUEsU0FBU2MsOEJBQVQsQ0FBd0NaLE9BQXhDLEVBQWlEO0FBQUUsU0FBT0EsUUFBUWdDLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsSUFBdkIsQ0FBUDtBQUFzQyxDLENBQUMiLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJyksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKTtcblxuY29uc3QgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHJlYWRGaWxlLCB3cml0ZUZpbGUsIGlzRW50cnlGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSBmYWxzZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHRoaXMucGF0aCksICAvLy9cbiAgICAgICAgICB0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChhYnNvbHV0ZVBhdGgpO1xuXG4gICAgbWtkaXJwLnN5bmModG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgICB3cml0ZUZpbGUoYWJzb2x1dGVQYXRoLCB0aGlzLmNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiB0eXBlLFxuICAgICAgICAgICAgXCJwYXRoXCI6IHBhdGgsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogY29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICAgIGlmICh0eXBlSlNPTiA9PT0gdHlwZSkgeyAgLy8vXG4gICAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICAgIGNvbnRlbnRKU09OID0ganNvbltcImNvbnRlbnRcIl0sXG4gICAgICAgICAgICAgIHBhdGggPSBwYXRoSlNPTjsgIC8vL1xuXG4gICAgICAgIGxldCBjb250ZW50ID0gY29udGVudEpTT047ICAvLy9cblxuICAgICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXG4gICAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gcmVhZEZpbGUoYWJzb2x1dGVQYXRoKTtcblxuICAgICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGRvY3VtZW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgcGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHsgZGlyIH0gPSBqc1ppcEVudHJ5LFxuICAgICAgICAgIGpzWmlwRW50cnlEaXJlY3RvcnkgPSBkaXIsICAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5RmlsZSA9ICFqc1ppcEVudHJ5RGlyZWN0b3J5OyAgLy8vXG5cbiAgICBpZiAoIWpzWmlwRW50cnlGaWxlKSB7XG4gICAgICBjYWxsYmFjayhmaWxlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGpzWmlwRmlsZSA9IGpzWmlwRW50cnksICAvLy9cbiAgICAgICAgICB7IG5hbWUgfSA9IGpzWmlwRmlsZTtcblxuICAgIGxldCBwYXRoID0gbmFtZTsgLy8vXG5cbiAgICBwYXRoID0gcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAganNaaXBFbnRyeS5hc3luYygnc3RyaW5nJykudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhBbmRDb250ZW50KHBhdGgsIGNvbnRlbnQpIHtcbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ0ZpbGUnO1xuXG5PYmplY3QuYXNzaWduKEZpbGUsIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcblxuZnVuY3Rpb24gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx0L2csICcgICcpOyB9IC8vL1xuIl19