'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs'),
    mkdirp = require('mkdirp');

var pathUtil = require('./util/path');

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
  }, {
    key: 'save',
    value: function save(projectsDirectoryPath) {
      var absolutePath = pathUtil.combinePaths(projectsDirectoryPath, this.path),
          absoluteDirectoryPath = pathUtil.directoryPathFromPath(absolutePath);

      mkdirp.sync(absoluteDirectoryPath);

      fs.writeFileSync(absolutePath, this.content);
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var pathJSON = json["path"],
          contentJSON = json["content"],
          path = pathJSON,
          ///
      content = contentJSON,
          ///
      file = new File(path, content);

      return file;
    }
  }, {
    key: 'fromFilePath',
    value: function fromFilePath(filePath, projectsDirectoryPath) {
      var file = null;

      var filePathHiddenPath = pathUtil.isHiddenPath(filePath);

      if (!filePathHiddenPath) {
        var content = null;

        var absolutePath = pathUtil.combinePaths(projectsDirectoryPath, filePath);

        try {
          content = fs.readFileSync(absolutePath, { encoding: 'utf8' });
        } catch (error) {
          ///
        }

        var path = filePath; ///

        file = new File(path, content);
      }

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

        path = pathUtil.removeMasterFromPath(path);

        jsZipEntry.async('string').then(function (content) {
          file = new File(path, content);

          callback(file);
        });
      }
    }
  }]);

  return File;
}();

File.type = 'File';

module.exports = File;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsIm1rZGlycCIsInBhdGhVdGlsIiwiRmlsZSIsInBhdGgiLCJjb250ZW50IiwidHlwZSIsImpzb24iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJjb21iaW5lUGF0aHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJzeW5jIiwid3JpdGVGaWxlU3luYyIsInBhdGhKU09OIiwiY29udGVudEpTT04iLCJmaWxlIiwiZmlsZVBhdGgiLCJmaWxlUGF0aEhpZGRlblBhdGgiLCJpc0hpZGRlblBhdGgiLCJyZWFkRmlsZVN5bmMiLCJlbmNvZGluZyIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeU5hbWUiLCJuYW1lIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRnJvbVBhdGgiLCJhc3luYyIsInRoZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsS0FBS0MsUUFBUSxJQUFSLENBQVg7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLFFBQVIsQ0FEZjs7QUFHQSxJQUFNRSxXQUFXRixRQUFRLGFBQVIsQ0FBakI7O0lBRU1HLEk7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLE9BQU9ILEtBQUtHLElBQWxCO0FBQUEsVUFDTUYsT0FBTyxLQUFLQSxJQURsQjtBQUFBLFVBRU1DLFVBQVUsS0FBS0EsT0FGckI7QUFBQSxVQUdNRSxPQUFPO0FBQ0wsZ0JBQVFELElBREg7QUFFTCxnQkFBUUYsSUFGSDtBQUdMLG1CQUFXQztBQUhOLE9BSGI7O0FBU0EsYUFBT0UsSUFBUDtBQUNEOzs7eUJBRUlDLHFCLEVBQXVCO0FBQzFCLFVBQU1DLGVBQWVQLFNBQVNRLFlBQVQsQ0FBc0JGLHFCQUF0QixFQUE2QyxLQUFLSixJQUFsRCxDQUFyQjtBQUFBLFVBQ01PLHdCQUF3QlQsU0FBU1UscUJBQVQsQ0FBK0JILFlBQS9CLENBRDlCOztBQUdBUixhQUFPWSxJQUFQLENBQVlGLHFCQUFaOztBQUVBWixTQUFHZSxhQUFILENBQWlCTCxZQUFqQixFQUErQixLQUFLSixPQUFwQztBQUNEOzs7NkJBRWVFLEksRUFBTTtBQUNwQixVQUFNUSxXQUFXUixLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNUyxjQUFjVCxLQUFLLFNBQUwsQ0FEcEI7QUFBQSxVQUVNSCxPQUFPVyxRQUZiO0FBQUEsVUFFd0I7QUFDbEJWLGdCQUFVVyxXQUhoQjtBQUFBLFVBRzhCO0FBQ3hCQyxhQUFPLElBQUlkLElBQUosQ0FBU0MsSUFBVCxFQUFlQyxPQUFmLENBSmI7O0FBTUEsYUFBT1ksSUFBUDtBQUNEOzs7aUNBRW1CQyxRLEVBQVVWLHFCLEVBQXVCO0FBQ25ELFVBQUlTLE9BQU8sSUFBWDs7QUFFQSxVQUFNRSxxQkFBcUJqQixTQUFTa0IsWUFBVCxDQUFzQkYsUUFBdEIsQ0FBM0I7O0FBRUEsVUFBSSxDQUFDQyxrQkFBTCxFQUF5QjtBQUN2QixZQUFJZCxVQUFVLElBQWQ7O0FBRUEsWUFBTUksZUFBZVAsU0FBU1EsWUFBVCxDQUFzQkYscUJBQXRCLEVBQTZDVSxRQUE3QyxDQUFyQjs7QUFFQSxZQUFJO0FBQ0ZiLG9CQUFVTixHQUFHc0IsWUFBSCxDQUFnQlosWUFBaEIsRUFBOEIsRUFBQ2EsVUFBVSxNQUFYLEVBQTlCLENBQVY7QUFDRCxTQUZELENBR0EsT0FBT0MsS0FBUCxFQUFjO0FBQ1o7QUFDRDs7QUFFRCxZQUFNbkIsT0FBT2MsUUFBYixDQVp1QixDQVlDOztBQUV4QkQsZUFBTyxJQUFJZCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQUFQO0FBQ0Q7O0FBRUQsYUFBT1ksSUFBUDtBQUNEOzs7bUNBRXFCTyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJUixPQUFPLElBQVg7O0FBRUEsVUFBTVMsaUJBQWlCRixXQUFXRyxJQUFsQztBQUFBLFVBQ01DLHNCQUFzQkosV0FBV0ssR0FEdkM7QUFBQSxVQUM0QztBQUN0Q0MsdUJBQWlCLENBQUNGLG1CQUZ4QixDQUgwQyxDQUtJOztBQUU5QyxVQUFJLENBQUNFLGNBQUwsRUFBcUI7QUFDbkJMLGlCQUFTUixJQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSWIsT0FBT3NCLGNBQVgsQ0FESyxDQUNzQjs7QUFFM0J0QixlQUFPRixTQUFTNkIsb0JBQVQsQ0FBOEIzQixJQUE5QixDQUFQOztBQUVBb0IsbUJBQVdRLEtBQVgsQ0FBaUIsUUFBakIsRUFBMkJDLElBQTNCLENBQWdDLFVBQVM1QixPQUFULEVBQWtCO0FBQ2hEWSxpQkFBTyxJQUFJZCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQUFQOztBQUVBb0IsbUJBQVNSLElBQVQ7QUFDRCxTQUpEO0FBS0Q7QUFDRjs7Ozs7O0FBR0hkLEtBQUtHLElBQUwsR0FBWSxNQUFaOztBQUVBNEIsT0FBT0MsT0FBUCxHQUFpQmhDLElBQWpCIiwiZmlsZSI6ImZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKSxcbiAgICAgIG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpO1xuXG5jb25zdCBwYXRoVXRpbCA9IHJlcXVpcmUoJy4vdXRpbC9wYXRoJyk7XG5cbmNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGaWxlLnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHBhdGhVdGlsLmNvbWJpbmVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHRoaXMucGF0aCksXG4gICAgICAgICAgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gcGF0aFV0aWwuZGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBta2RpcnAuc3luYyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gICAgZnMud3JpdGVGaWxlU3luYyhhYnNvbHV0ZVBhdGgsIHRoaXMuY29udGVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgY29udGVudEpTT04gPSBqc29uW1wiY29udGVudFwiXSxcbiAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEpTT04sICAvLy9cbiAgICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmaWxlUGF0aEhpZGRlblBhdGggPSBwYXRoVXRpbC5pc0hpZGRlblBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKCFmaWxlUGF0aEhpZGRlblBhdGgpIHtcbiAgICAgIGxldCBjb250ZW50ID0gbnVsbDtcbiAgICAgIFxuICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZmlsZVBhdGgpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlUGF0aCwge2VuY29kaW5nOiAndXRmOCd9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLy9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgcGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5TmFtZSA9IGpzWmlwRW50cnkubmFtZSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXIsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlGaWxlID0gIWpzWmlwRW50cnlEaXJlY3Rvcnk7ICAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeUZpbGUpIHtcbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF0aCA9IGpzWmlwRW50cnlOYW1lOyAvLy9cblxuICAgICAgcGF0aCA9IHBhdGhVdGlsLnJlbW92ZU1hc3RlckZyb21QYXRoKHBhdGgpO1xuXG4gICAgICBqc1ppcEVudHJ5LmFzeW5jKCdzdHJpbmcnKS50aGVuKGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbkZpbGUudHlwZSA9ICdGaWxlJztcblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlO1xuIl19