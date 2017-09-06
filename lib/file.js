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
      var absolutePath = concatenatePaths(projectsDirectoryPath, this.path),
          ///
      topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);

      mkdirp.sync(topmostAbsoluteDirectoryPath);

      writeFile(absolutePath, this.content);
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
      var absolutePath = concatenatePaths(projectsDirectoryPath, filePath);

      var content = void 0;

      try {
        content = readFile(absolutePath);
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

File.type = 'File';

module.exports = File;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbIm1rZGlycCIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJuYW1lVXRpbGl0aWVzIiwicGF0aFV0aWxpdGllcyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsInJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJ0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIiwiRmlsZSIsInBhdGgiLCJjb250ZW50IiwidHlwZSIsImpzb24iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJ0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3luYyIsInBhdGhKU09OIiwiY29udGVudEpTT04iLCJmaWxlIiwiZmlsZVBhdGgiLCJlcnJvciIsImpzWmlwRW50cnkiLCJjYWxsYmFjayIsImpzWmlwRW50cnlOYW1lIiwibmFtZSIsImpzWmlwRW50cnlEaXJlY3RvcnkiLCJkaXIiLCJqc1ppcEVudHJ5RmlsZSIsImFzeW5jIiwidGhlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFFBQVIsQ0FBZjtBQUFBLElBQ01DLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHQSxJQUFNRSxnQkFBZ0JGLFFBQVEsa0JBQVIsQ0FBdEI7O0lBRVFHLGEsR0FBdUNGLFMsQ0FBdkNFLGE7SUFBZUMsbUIsR0FBd0JILFMsQ0FBeEJHLG1CO0lBQ2ZDLFEsR0FBd0JELG1CLENBQXhCQyxRO0lBQVVDLFMsR0FBY0YsbUIsQ0FBZEUsUztJQUNWQyxpQyxHQUFzQ0wsYSxDQUF0Q0ssaUM7SUFDQUMsZ0IsR0FBbURMLGEsQ0FBbkRLLGdCO0lBQWtCQyw0QixHQUFpQ04sYSxDQUFqQ00sNEI7O0lBRXBCQyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxPQUFPSCxLQUFLRyxJQUFsQjtBQUFBLFVBQ01GLE9BQU8sS0FBS0EsSUFEbEI7QUFBQSxVQUVNQyxVQUFVLEtBQUtBLE9BRnJCO0FBQUEsVUFHTUUsT0FBTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFGLElBRkg7QUFHTCxtQkFBV0M7QUFITixPQUhiOztBQVNBLGFBQU9FLElBQVA7QUFDRDs7O3lCQUVJQyxxQixFQUF1QjtBQUMxQixVQUFNQyxlQUFlUixpQkFBaUJPLHFCQUFqQixFQUF3QyxLQUFLSixJQUE3QyxDQUFyQjtBQUFBLFVBQTBFO0FBQ3BFTSxxQ0FBK0JSLDZCQUE2Qk8sWUFBN0IsQ0FEckM7O0FBR0FqQixhQUFPbUIsSUFBUCxDQUFZRCw0QkFBWjs7QUFFQVgsZ0JBQVVVLFlBQVYsRUFBd0IsS0FBS0osT0FBN0I7QUFDRDs7OzZCQUVlRSxJLEVBQU07QUFDcEIsVUFBTUssV0FBV0wsS0FBSyxNQUFMLENBQWpCO0FBQUEsVUFDTU0sY0FBY04sS0FBSyxTQUFMLENBRHBCO0FBQUEsVUFFTUgsT0FBT1EsUUFGYjtBQUFBLFVBRXdCO0FBQ2xCUCxnQkFBVVEsV0FIaEI7QUFBQSxVQUc4QjtBQUN4QkMsYUFBTyxJQUFJWCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQUpiOztBQU1BLGFBQU9TLElBQVA7QUFDRDs7O2lDQUVtQkMsUSxFQUFVUCxxQixFQUF1QjtBQUNuRCxVQUFNQyxlQUFlUixpQkFBaUJPLHFCQUFqQixFQUF3Q08sUUFBeEMsQ0FBckI7O0FBRUEsVUFBSVYsZ0JBQUo7O0FBRUEsVUFBSTtBQUNGQSxrQkFBVVAsU0FBU1csWUFBVCxDQUFWO0FBQ0QsT0FGRCxDQUdBLE9BQU9PLEtBQVAsRUFBYztBQUNaWCxrQkFBVSxJQUFWO0FBQ0Q7O0FBRUQsVUFBTUQsT0FBT1csUUFBYjtBQUFBLFVBQXdCO0FBQ2xCRCxhQUFPLElBQUlYLElBQUosQ0FBU0MsSUFBVCxFQUFlQyxPQUFmLENBRGI7O0FBR0EsYUFBT1MsSUFBUDtBQUNEOzs7bUNBRXFCRyxVLEVBQVlDLFEsRUFBVTtBQUMxQyxVQUFJSixPQUFPLElBQVg7O0FBRUEsVUFBTUssaUJBQWlCRixXQUFXRyxJQUFsQztBQUFBLFVBQ01DLHNCQUFzQkosV0FBV0ssR0FEdkM7QUFBQSxVQUM0QztBQUN0Q0MsdUJBQWlCLENBQUNGLG1CQUZ4QixDQUgwQyxDQUtJOztBQUU5QyxVQUFJLENBQUNFLGNBQUwsRUFBcUI7QUFDbkJMLGlCQUFTSixJQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSVYsT0FBT2UsY0FBWCxDQURLLENBQ3NCOztBQUUzQmYsZUFBT0osa0NBQWtDSSxJQUFsQyxDQUFQOztBQUVBYSxtQkFBV08sS0FBWCxDQUFpQixRQUFqQixFQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBU3BCLE9BQVQsRUFBa0I7QUFDaERTLGlCQUFPLElBQUlYLElBQUosQ0FBU0MsSUFBVCxFQUFlQyxPQUFmLENBQVA7O0FBRUFhLG1CQUFTSixJQUFUO0FBQ0QsU0FKRDtBQUtEO0FBQ0Y7Ozs7OztBQUdIWCxLQUFLRyxJQUFMLEdBQVksTUFBWjs7QUFFQW9CLE9BQU9DLE9BQVAsR0FBaUJ4QixJQUFqQiIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpO1xuXG5jb25zdCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzLCB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gRmlsZS50eXBlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGhpcy5wYXRoKSwgIC8vL1xuICAgICAgICAgIHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XG5cbiAgICBta2RpcnAuc3luYyh0b3Btb3N0QWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIHRoaXMuY29udGVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHBhdGhKU09OID0ganNvbltcInBhdGhcIl0sXG4gICAgICAgICAgY29udGVudEpTT04gPSBqc29uW1wiY29udGVudFwiXSxcbiAgICAgICAgICBwYXRoID0gcGF0aEpTT04sICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEpTT04sICAvLy9cbiAgICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBmaWxlUGF0aCk7XG5cbiAgICBsZXQgY29udGVudDtcblxuICAgIHRyeSB7XG4gICAgICBjb250ZW50ID0gcmVhZEZpbGUoYWJzb2x1dGVQYXRoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5TmFtZSA9IGpzWmlwRW50cnkubmFtZSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXIsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlGaWxlID0gIWpzWmlwRW50cnlEaXJlY3Rvcnk7ICAvLy9cblxuICAgIGlmICghanNaaXBFbnRyeUZpbGUpIHtcbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF0aCA9IGpzWmlwRW50cnlOYW1lOyAvLy9cblxuICAgICAgcGF0aCA9IHJlbW92ZU1hc3RlckRpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAganNaaXBFbnRyeS5hc3luYygnc3RyaW5nJykudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5GaWxlLnR5cGUgPSAnRmlsZSc7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcbiJdfQ==