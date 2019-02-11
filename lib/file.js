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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicmVwbGFjZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFic29sdXRlUGF0aCIsInRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzeW5jIiwidHlwZSIsImpzb24iLCJ0eXBlSlNPTiIsInBhdGhKU09OIiwiY29udGVudEpTT04iLCJlbnRyeUZpbGUiLCJlcnJvciIsImRvY3VtZW50IiwiZmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsImdldENvbnRlbnQiLCJqc1ppcEVudHJ5IiwiY2FsbGJhY2siLCJqc1ppcEVudHJ5TmFtZSIsIm5hbWUiLCJqc1ppcEVudHJ5RGlyZWN0b3J5IiwiZGlyIiwianNaaXBFbnRyeUZpbGUiLCJhc3luYyIsInRoZW4iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxRQUFSLENBQWY7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsZ0JBQWdCRixRQUFRLGtCQUFSLENBQXRCOztJQUVRRyxhLEdBQXVDRixTLENBQXZDRSxhO0lBQWVDLG1CLEdBQXdCSCxTLENBQXhCRyxtQjtJQUNmQyxRLEdBQXFDRCxtQixDQUFyQ0MsUTtJQUFVQyxTLEdBQTJCRixtQixDQUEzQkUsUztJQUFXQyxXLEdBQWdC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ZixhQUFPLElBQUlILElBQUosQ0FBU0MsSUFBVCxFQUFlQyxPQUFmLENBSGI7O0FBS0EsYUFBT0MsSUFBUDtBQUNEOzs7bUNBRXFCa0IsVSxFQUFZQyxRLEVBQVU7QUFDMUMsVUFBSW5CLE9BQU8sSUFBWDs7QUFFQSxVQUFNb0IsaUJBQWlCRixXQUFXRyxJQUFsQztBQUFBLFVBQ01DLHNCQUFzQkosV0FBV0ssR0FEdkM7QUFBQSxVQUM0QztBQUN0Q0MsdUJBQWlCLENBQUNGLG1CQUZ4QixDQUgwQyxDQUtJOztBQUU5QyxVQUFJLENBQUNFLGNBQUwsRUFBcUI7QUFDbkJMLGlCQUFTbkIsSUFBVDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUlGLE9BQU9zQixjQUFYLENBREssQ0FDc0I7O0FBRTNCdEIsZUFBT0osa0NBQWtDSSxJQUFsQyxDQUFQOztBQUVBb0IsbUJBQVdPLEtBQVgsQ0FBaUIsUUFBakIsRUFBMkJDLElBQTNCLENBQWdDLFVBQVMzQixPQUFULEVBQWtCO0FBQ2hEQyxpQkFBTyxJQUFJSCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQUFQOztBQUVBb0IsbUJBQVNuQixJQUFUO0FBQ0QsU0FKRDtBQUtEO0FBQ0Y7Ozs7OztBQUdILElBQU1PLE9BQU8sTUFBYjs7QUFFQW9CLE9BQU9DLE1BQVAsQ0FBYy9CLElBQWQsRUFBb0I7QUFDbEJVO0FBRGtCLENBQXBCOztBQUlBc0IsT0FBT0MsT0FBUCxHQUFpQmpDLElBQWpCIiwiZmlsZSI6ImZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyk7XG5cbmNvbnN0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBpc0VudHJ5RmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBjb252ZXJ0VGFic1RvV2hpdGVzcGFjZSgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZSgvXFx0L2csICcgICcpOyAgLy8vXG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0aGlzLnBhdGgpLCAgLy8vXG4gICAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcblxuICAgIG1rZGlycC5zeW5jKHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgd3JpdGVGaWxlKGFic29sdXRlUGF0aCwgdGhpcy5jb250ZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICB0eXBlSlNPTiA9IGpzb25bXCJ0eXBlXCJdO1xuXG4gICAgaWYgKHR5cGVKU09OID09PSB0eXBlKSB7ICAvLy9cbiAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgICAgcGF0aCA9IHBhdGhKU09OLCAgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudEpTT047ICAvLy9cblxuICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoKSxcbiAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUGF0aCk7XG5cbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fSAgLy8vXG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGRvY3VtZW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgY29udGVudCA9IGRvY3VtZW50LmdldENvbnRlbnQoKSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5TmFtZSA9IGpzWmlwRW50cnkubmFtZSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXIsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlGaWxlID0gIWpzWmlwRW50cnlEaXJlY3Rvcnk7ICAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeUZpbGUpIHtcbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF0aCA9IGpzWmlwRW50cnlOYW1lOyAvLy9cblxuICAgICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAganNaaXBFbnRyeS5hc3luYygnc3RyaW5nJykudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ0ZpbGUnO1xuXG5PYmplY3QuYXNzaWduKEZpbGUsIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcbiJdfQ==