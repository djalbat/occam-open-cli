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
      var absolutePath = pathUtil.combinePaths(projectsDirectoryPath, filePath);

      var content = void 0;

      try {
        content = fs.readFileSync(absolutePath, { encoding: 'utf8' });
      } catch (error) {
        content = null;
      }

      var path = filePath,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsIm1rZGlycCIsInBhdGhVdGlsIiwiRmlsZSIsInBhdGgiLCJjb250ZW50IiwidHlwZSIsImpzb24iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJjb21iaW5lUGF0aHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJzeW5jIiwid3JpdGVGaWxlU3luYyIsInBhdGhKU09OIiwiY29udGVudEpTT04iLCJmaWxlIiwiZmlsZVBhdGgiLCJyZWFkRmlsZVN5bmMiLCJlbmNvZGluZyIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeU5hbWUiLCJuYW1lIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRnJvbVBhdGgiLCJhc3luYyIsInRoZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsS0FBS0MsUUFBUSxJQUFSLENBQVg7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLFFBQVIsQ0FEZjs7QUFHQSxJQUFNRSxXQUFXRixRQUFRLGFBQVIsQ0FBakI7O0lBRU1HLEk7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLE9BQU9ILEtBQUtHLElBQWxCO0FBQUEsVUFDTUYsT0FBTyxLQUFLQSxJQURsQjtBQUFBLFVBRU1DLFVBQVUsS0FBS0EsT0FGckI7QUFBQSxVQUdNRSxPQUFPO0FBQ0wsZ0JBQVFELElBREg7QUFFTCxnQkFBUUYsSUFGSDtBQUdMLG1CQUFXQztBQUhOLE9BSGI7O0FBU0EsYUFBT0UsSUFBUDtBQUNEOzs7eUJBRUlDLHFCLEVBQXVCO0FBQzFCLFVBQU1DLGVBQWVQLFNBQVNRLFlBQVQsQ0FBc0JGLHFCQUF0QixFQUE2QyxLQUFLSixJQUFsRCxDQUFyQjtBQUFBLFVBQ01PLHdCQUF3QlQsU0FBU1UscUJBQVQsQ0FBK0JILFlBQS9CLENBRDlCOztBQUdBUixhQUFPWSxJQUFQLENBQVlGLHFCQUFaOztBQUVBWixTQUFHZSxhQUFILENBQWlCTCxZQUFqQixFQUErQixLQUFLSixPQUFwQztBQUNEOzs7NkJBRWVFLEksRUFBTTtBQUNwQixVQUFNUSxXQUFXUixLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNUyxjQUFjVCxLQUFLLFNBQUwsQ0FEcEI7QUFBQSxVQUVNSCxPQUFPVyxRQUZiO0FBQUEsVUFFd0I7QUFDbEJWLGdCQUFVVyxXQUhoQjtBQUFBLFVBRzhCO0FBQ3hCQyxhQUFPLElBQUlkLElBQUosQ0FBU0MsSUFBVCxFQUFlQyxPQUFmLENBSmI7O0FBTUEsYUFBT1ksSUFBUDtBQUNEOzs7aUNBRW1CQyxRLEVBQVVWLHFCLEVBQXVCO0FBQ25ELFVBQU1DLGVBQWVQLFNBQVNRLFlBQVQsQ0FBc0JGLHFCQUF0QixFQUE2Q1UsUUFBN0MsQ0FBckI7O0FBRUEsVUFBSWIsZ0JBQUo7O0FBRUEsVUFBSTtBQUNGQSxrQkFBVU4sR0FBR29CLFlBQUgsQ0FBZ0JWLFlBQWhCLEVBQThCLEVBQUNXLFVBQVUsTUFBWCxFQUE5QixDQUFWO0FBQ0QsT0FGRCxDQUdBLE9BQU9DLEtBQVAsRUFBYztBQUNaaEIsa0JBQVUsSUFBVjtBQUNEOztBQUVELFVBQU1ELE9BQU9jLFFBQWI7QUFBQSxVQUF3QjtBQUNsQkQsYUFBTyxJQUFJZCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQURiOztBQUdBLGFBQU9ZLElBQVA7QUFDRDs7O21DQUVxQkssVSxFQUFZQyxRLEVBQVU7QUFDMUMsVUFBSU4sT0FBTyxJQUFYOztBQUVBLFVBQU1PLGlCQUFpQkYsV0FBV0csSUFBbEM7QUFBQSxVQUNNQyxzQkFBc0JKLFdBQVdLLEdBRHZDO0FBQUEsVUFDNEM7QUFDdENDLHVCQUFpQixDQUFDRixtQkFGeEIsQ0FIMEMsQ0FLSTs7QUFFOUMsVUFBSSxDQUFDRSxjQUFMLEVBQXFCO0FBQ25CTCxpQkFBU04sSUFBVDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUliLE9BQU9vQixjQUFYLENBREssQ0FDc0I7O0FBRTNCcEIsZUFBT0YsU0FBUzJCLG9CQUFULENBQThCekIsSUFBOUIsQ0FBUDs7QUFFQWtCLG1CQUFXUSxLQUFYLENBQWlCLFFBQWpCLEVBQTJCQyxJQUEzQixDQUFnQyxVQUFTMUIsT0FBVCxFQUFrQjtBQUNoRFksaUJBQU8sSUFBSWQsSUFBSixDQUFTQyxJQUFULEVBQWVDLE9BQWYsQ0FBUDs7QUFFQWtCLG1CQUFTTixJQUFUO0FBQ0QsU0FKRDtBQUtEO0FBQ0Y7Ozs7OztBQUdIZCxLQUFLRyxJQUFMLEdBQVksTUFBWjs7QUFFQTBCLE9BQU9DLE9BQVAsR0FBaUI5QixJQUFqQiIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgICBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKTtcblxuY29uc3QgcGF0aFV0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aCcpO1xuXG5jbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gRmlsZS50eXBlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0aGlzLnBhdGgpLFxuICAgICAgICAgIGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsLmRpcmVjdG9yeVBhdGhGcm9tUGF0aChhYnNvbHV0ZVBhdGgpO1xuXG4gICAgbWtkaXJwLnN5bmMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIGZzLndyaXRlRmlsZVN5bmMoYWJzb2x1dGVQYXRoLCB0aGlzLmNvbnRlbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgIGNvbnRlbnRKU09OID0ganNvbltcImNvbnRlbnRcIl0sXG4gICAgICAgICAgcGF0aCA9IHBhdGhKU09OLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRKU09OLCAgLy8vXG4gICAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmaWxlUGF0aCk7XG5cbiAgICBsZXQgY29udGVudDtcblxuICAgIHRyeSB7XG4gICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlUGF0aCwge2VuY29kaW5nOiAndXRmOCd9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5TmFtZSA9IGpzWmlwRW50cnkubmFtZSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXIsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlGaWxlID0gIWpzWmlwRW50cnlEaXJlY3Rvcnk7ICAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeUZpbGUpIHtcbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF0aCA9IGpzWmlwRW50cnlOYW1lOyAvLy9cblxuICAgICAgcGF0aCA9IHBhdGhVdGlsLnJlbW92ZU1hc3RlckZyb21QYXRoKHBhdGgpO1xuXG4gICAgICBqc1ppcEVudHJ5LmFzeW5jKCdzdHJpbmcnKS50aGVuKGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbkZpbGUudHlwZSA9ICdGaWxlJztcblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlO1xuIl19