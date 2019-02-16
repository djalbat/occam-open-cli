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

      if (entryFile) {
        var content = readFile(absolutePath);

        file = new File(path, content);
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJmaWxlIiwiZGlyZWN0b3J5IiwicmVwbGFjZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFic29sdXRlUGF0aCIsInRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJzeW5jIiwidHlwZSIsImpzb24iLCJ0eXBlSlNPTiIsInBhdGhKU09OIiwiY29udGVudEpTT04iLCJlbnRyeUZpbGUiLCJkb2N1bWVudCIsImZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJnZXRDb250ZW50IiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwiZGlyIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImpzWmlwRW50cnlGaWxlIiwibmFtZSIsImpzWmlwRmlsZSIsImFzeW5jIiwidGhlbiIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFFBQVIsQ0FBZjtBQUFBLElBQ01DLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHQSxJQUFNRSxnQkFBZ0JGLFFBQVEsa0JBQVIsQ0FBdEI7O0lBRVFHLGEsR0FBdUNGLFMsQ0FBdkNFLGE7SUFBZUMsbUIsR0FBd0JILFMsQ0FBeEJHLG1CO0lBQ2ZDLFEsR0FBcUNELG1CLENBQXJDQyxRO0lBQVVDLFMsR0FBMkJGLG1CLENBQTNCRSxTO0lBQVdDLFcsR0FBZ0JILG1CLENBQWhCRyxX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cUJpQixVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJbEIsT0FBTyxJQUFYOztBQUVNLFVBQUVtQixHQUFGLEdBQVVGLFVBQVYsQ0FBRUUsR0FBRjtBQUFBLFVBQ0FDLG1CQURBLEdBQ3NCRCxHQUR0QjtBQUFBLFVBRUFFLGNBRkEsR0FFaUIsQ0FBQ0QsbUJBRmxCLENBSG9DLENBS0k7O0FBRTlDLFVBQUksQ0FBQ0MsY0FBTCxFQUFxQjtBQUNuQkgsaUJBQVNsQixJQUFUOztBQUVBO0FBQ0Q7O0FBRUssc0JBQVlpQixVQUFaO0FBQUEsVUFDRUssSUFERixHQUNXQyxTQURYLENBQ0VELElBREY7O0FBR04sVUFBSXhCLE9BQU93QixJQUFYLENBaEIwQyxDQWdCekI7O0FBRWpCeEIsYUFBT0osa0NBQWtDSSxJQUFsQyxDQUFQOztBQUVBbUIsaUJBQVdPLEtBQVgsQ0FBaUIsUUFBakIsRUFBMkJDLElBQTNCLENBQWdDLFVBQVMxQixPQUFULEVBQWtCO0FBQ2hEQyxlQUFPLElBQUlILElBQUosQ0FBU0MsSUFBVCxFQUFlQyxPQUFmLENBQVA7O0FBRUFtQixpQkFBU2xCLElBQVQ7QUFDRCxPQUpEO0FBS0Q7Ozs7OztBQUdILElBQU1PLE9BQU8sTUFBYjs7QUFFQW1CLE9BQU9DLE1BQVAsQ0FBYzlCLElBQWQsRUFBb0I7QUFDbEJVO0FBRGtCLENBQXBCOztBQUlBcUIsT0FBT0MsT0FBUCxHQUFpQmhDLElBQWpCIiwiZmlsZSI6ImZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyk7XG5cbmNvbnN0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBpc0VudHJ5RmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBjb252ZXJ0VGFic1RvV2hpdGVzcGFjZSgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZSgvXFx0L2csICcgICcpOyAgLy8vXG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0aGlzLnBhdGgpLCAgLy8vXG4gICAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcblxuICAgIG1rZGlycC5zeW5jKHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgd3JpdGVGaWxlKGFic29sdXRlUGF0aCwgdGhpcy5jb250ZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICB0eXBlSlNPTiA9IGpzb25bXCJ0eXBlXCJdO1xuXG4gICAgaWYgKHR5cGVKU09OID09PSB0eXBlKSB7ICAvLy9cbiAgICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgICBjb250ZW50SlNPTiA9IGpzb25bXCJjb250ZW50XCJdLFxuICAgICAgICAgICAgcGF0aCA9IHBhdGhKU09OLCAgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudEpTT047ICAvLy9cblxuICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBwYXRoKSxcbiAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUGF0aCk7XG5cbiAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGRvY3VtZW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgY29udGVudCA9IGRvY3VtZW50LmdldENvbnRlbnQoKSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB7IGRpciB9ID0ganNaaXBFbnRyeSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0gZGlyLCAgLy8vXG4gICAgICAgICAganNaaXBFbnRyeUZpbGUgPSAhanNaaXBFbnRyeURpcmVjdG9yeTsgIC8vL1xuXG4gICAgaWYgKCFqc1ppcEVudHJ5RmlsZSkge1xuICAgICAgY2FsbGJhY2soZmlsZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqc1ppcEZpbGUgPSBqc1ppcEVudHJ5LCAgLy8vXG4gICAgICAgICAgeyBuYW1lIH0gPSBqc1ppcEZpbGU7XG5cbiAgICBsZXQgcGF0aCA9IG5hbWU7IC8vL1xuXG4gICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgIGpzWmlwRW50cnkuYXN5bmMoJ3N0cmluZycpLnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCB0eXBlID0gJ0ZpbGUnO1xuXG5PYmplY3QuYXNzaWduKEZpbGUsIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcbiJdfQ==