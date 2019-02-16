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
    key: 'convertTabsToWhitespace',
    value: function convertTabsToWhitespace() {
      this.content = this.content.replace(/\t/g, '  '); ///
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

      var type = File.type,
          typeJSON = json["type"];


      if (typeJSON === type) {
        ///
        var pathJSON = json["path"],
            contentJSON = json["content"],
            path = pathJSON,
            ///
        content = contentJSON; ///

        file = new File(path, content);
      }

      return file;
    }
  }, {
    key: 'fromPath',
    value: function fromPath(path, projectsDirectoryPath) {
      var file = null;

      var absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryFile = isEntryFile(absolutePath);

      try {
        if (entryFile) {
          var content = readFile(absolutePath);

          file = new File(path, content);
        }
      } catch (error) {} ///

      return file;
    }
  }, {
    key: 'fromDocument',
    value: function fromDocument(document) {
      var filePath = document.getFilePath(),
          content = document.getContent(),
          path = filePath,
          ///
      file = new File(path, content);

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
        file = new File(path, content);

        callback(file);
      });
    }
  }]);

  return File;
}();

var type = 'File';

Object.assign(File, {
  type: type
});

module.exports = File;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicmVwbGFjZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFic29sdXRlUGF0aCIsInRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzeW5jIiwidHlwZSIsImpzb24iLCJ0eXBlSlNPTiIsInBhdGhKU09OIiwiY29udGVudEpTT04iLCJlbnRyeUZpbGUiLCJlcnJvciIsImRvY3VtZW50IiwiZmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsImdldENvbnRlbnQiLCJqc1ppcEVudHJ5IiwiY2FsbGJhY2siLCJkaXIiLCJqc1ppcEVudHJ5RGlyZWN0b3J5IiwianNaaXBFbnRyeUZpbGUiLCJuYW1lIiwianNaaXBGaWxlIiwiYXN5bmMiLCJ0aGVuIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUcsYSxHQUF1Q0YsUyxDQUF2Q0UsYTtJQUFlQyxtQixHQUF3QkgsUyxDQUF4QkcsbUI7SUFDZkMsUSxHQUFxQ0QsbUIsQ0FBckNDLFE7SUFBVUMsUyxHQUEyQkYsbUIsQ0FBM0JFLFM7SUFBV0MsVyxHQUFnQkgsbUIs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TyxJQUFJSCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQUhiOztBQUtBLGFBQU9DLElBQVA7QUFDRDs7O21DQUVxQmtCLFUsRUFBWUMsUSxFQUFVO0FBQzFDLFVBQUluQixPQUFPLElBQVg7O0FBRU0sVUFBRW9CLEdBQUYsR0FBVUYsVUFBVixDQUFFRSxHQUFGO0FBQUEsVUFDQUMsbUJBREEsR0FDc0JELEdBRHRCO0FBQUEsVUFFQUUsY0FGQSxHQUVpQixDQUFDRCxtQkFGbEIsQ0FIb0MsQ0FLSTs7QUFFOUMsVUFBSSxDQUFDQyxjQUFMLEVBQXFCO0FBQ25CSCxpQkFBU25CLElBQVQ7O0FBRUE7QUFDRDs7QUFFSyxzQkFBWWtCLFVBQVo7QUFBQSxVQUNFSyxJQURGLEdBQ1dDLFNBRFgsQ0FDRUQsSUFERjs7QUFHTixVQUFJekIsT0FBT3lCLElBQVgsQ0FoQjBDLENBZ0J6Qjs7QUFFakJ6QixhQUFPSixrQ0FBa0NJLElBQWxDLENBQVA7O0FBRUFvQixpQkFBV08sS0FBWCxDQUFpQixRQUFqQixFQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBUzNCLE9BQVQsRUFBa0I7QUFDaERDLGVBQU8sSUFBSUgsSUFBSixDQUFTQyxJQUFULEVBQWVDLE9BQWYsQ0FBUDs7QUFFQW9CLGlCQUFTbkIsSUFBVDtBQUNELE9BSkQ7QUFLRDs7Ozs7O0FBR0gsSUFBTU8sT0FBTyxNQUFiOztBQUVBb0IsT0FBT0MsTUFBUCxDQUFjL0IsSUFBZCxFQUFvQjtBQUNsQlU7QUFEa0IsQ0FBcEI7O0FBSUFzQixPQUFPQyxPQUFQLEdBQWlCakMsSUFBakIiLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJyksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKTtcblxuY29uc3QgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHJlYWRGaWxlLCB3cml0ZUZpbGUsIGlzRW50cnlGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSBmYWxzZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGNvbnZlcnRUYWJzVG9XaGl0ZXNwYWNlKCkge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5yZXBsYWNlKC9cXHQvZywgJyAgJyk7ICAvLy9cbiAgfVxuXG4gIHNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHRoaXMucGF0aCksICAvLy9cbiAgICAgICAgICB0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChhYnNvbHV0ZVBhdGgpO1xuXG4gICAgbWtkaXJwLnN5bmModG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgICB3cml0ZUZpbGUoYWJzb2x1dGVQYXRoLCB0aGlzLmNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiB0eXBlLFxuICAgICAgICAgICAgXCJwYXRoXCI6IHBhdGgsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogY29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgeyB0eXBlIH0gPSBGaWxlLFxuICAgICAgICAgIHR5cGVKU09OID0ganNvbltcInR5cGVcIl07XG5cbiAgICBpZiAodHlwZUpTT04gPT09IHR5cGUpIHsgIC8vL1xuICAgICAgY29uc3QgcGF0aEpTT04gPSBqc29uW1wicGF0aFwiXSxcbiAgICAgICAgICAgIGNvbnRlbnRKU09OID0ganNvbltcImNvbnRlbnRcIl0sXG4gICAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50SlNPTjsgIC8vL1xuXG4gICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxuICAgICAgICAgIGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoYWJzb2x1dGVQYXRoKTtcblxuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9ICAvLy9cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Eb2N1bWVudChkb2N1bWVudCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZG9jdW1lbnQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHBhdGggPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcEVudHJ5KGpzWmlwRW50cnksIGNhbGxiYWNrKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHsgZGlyIH0gPSBqc1ppcEVudHJ5LFxuICAgICAgICAgIGpzWmlwRW50cnlEaXJlY3RvcnkgPSBkaXIsICAvLy9cbiAgICAgICAgICBqc1ppcEVudHJ5RmlsZSA9ICFqc1ppcEVudHJ5RGlyZWN0b3J5OyAgLy8vXG5cbiAgICBpZiAoIWpzWmlwRW50cnlGaWxlKSB7XG4gICAgICBjYWxsYmFjayhmaWxlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGpzWmlwRmlsZSA9IGpzWmlwRW50cnksICAvLy9cbiAgICAgICAgICB7IG5hbWUgfSA9IGpzWmlwRmlsZTtcblxuICAgIGxldCBwYXRoID0gbmFtZTsgLy8vXG5cbiAgICBwYXRoID0gcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAganNaaXBFbnRyeS5hc3luYygnc3RyaW5nJykudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IHR5cGUgPSAnRmlsZSc7XG5cbk9iamVjdC5hc3NpZ24oRmlsZSwge1xuICB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlO1xuIl19