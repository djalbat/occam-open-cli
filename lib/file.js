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
    key: 'fromJSZipEntry',
    value: function fromJSZipEntry(jsZipEntry, callback) {
      var file = null;

      var jsZipEntryName = jsZipEntry.name,
          jsZipEntryDirectory = jsZipEntry.dir,
          ///
      jsZipEntryFile = !jsZipEntryDirectory; ///

      if (!jsZipEntryFile) {
        callback(file);
      } else {
        var path = jsZipEntryName; ///

        path = removeMasterDirectoryNameFromPath(path);

        jsZipEntry.async('string').then(function (content) {
          file = new File(path, content);

          callback(file);
        });
      }
    }
  }]);

  return File;
}();

var type = 'File';

Object.assign(File, {
  type: type
});

module.exports = File;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiYWJzb2x1dGVQYXRoIiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN5bmMiLCJ0eXBlIiwianNvbiIsInR5cGVKU09OIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImVudHJ5RmlsZSIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeU5hbWUiLCJuYW1lIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRW50cnlGaWxlIiwiYXN5bmMiLCJ0aGVuIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUcsYSxHQUF1Q0YsUyxDQUF2Q0UsYTtJQUFlQyxtQixHQUF3QkgsUyxDQUF4QkcsbUI7SUFDZkMsUSxHQUFxQ0QsbUIsQ0FBckNDLFE7SUFBVUMsUyxHQUEyQkYsbUIsQ0FBM0JFLFM7SUFBV0MsVyxHQUFnQkgsbUIsQ0FBaEJHLFc7SUFDckJDLGlDLEdBQXNDTixhLENBQXRDTSxpQztJQUNBQyxnQixHQUFtRE4s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QUFTQyxJQUFULEVBQWVDLE9BQWYsQ0FBUDs7QUFFQWUsbUJBQVNkLElBQVQ7QUFDRCxTQUpEO0FBS0Q7QUFDRjs7Ozs7O0FBR0gsSUFBTU0sT0FBTyxNQUFiOztBQUVBZ0IsT0FBT0MsTUFBUCxDQUFjMUIsSUFBZCxFQUFvQjtBQUNsQlM7QUFEa0IsQ0FBcEI7O0FBSUFrQixPQUFPQyxPQUFQLEdBQWlCNUIsSUFBakIiLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJyksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKTtcblxuY29uc3QgeyBwYXRoVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHJlYWRGaWxlLCB3cml0ZUZpbGUsIGlzRW50cnlGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyByZW1vdmVNYXN0ZXJEaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBpc0RpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnkgPSBmYWxzZTtcblxuICAgIHJldHVybiBkaXJlY3Rvcnk7XG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0aGlzLnBhdGgpLCAgLy8vXG4gICAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcblxuICAgIG1rZGlycC5zeW5jKHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgd3JpdGVGaWxlKGFic29sdXRlUGF0aCwgdGhpcy5jb250ZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICB0eXBlSlNPTiA9IGpzb25bXCJ0eXBlXCJdO1xuXG4gICAgaWYgKHR5cGVKU09OID09PSB0eXBlKSB7ICAvLy9cbiAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgICAgcGF0aCA9IHBhdGhKU09OLCAgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudEpTT047ICAvLy9cblxuICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoKSxcbiAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUGF0aCk7XG5cbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fSAgLy8vXG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5TmFtZSA9IGpzWmlwRW50cnkubmFtZSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXIsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlGaWxlID0gIWpzWmlwRW50cnlEaXJlY3Rvcnk7ICAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeUZpbGUpIHtcbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF0aCA9IGpzWmlwRW50cnlOYW1lOyAvLy9cblxuICAgICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAganNaaXBFbnRyeS5hc3luYygnc3RyaW5nJykudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ0ZpbGUnO1xuXG5PYmplY3QuYXNzaWduKEZpbGUsIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcbiJdfQ==