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
      var content = null;

      var hidden = pathUtil.isHidden(filePath),
          pathRecognisedFilePath = pathUtil.isPathRecognisedFilePath(filePath);

      if (!hidden && pathRecognisedFilePath) {
        var absolutePath = pathUtil.combinePaths(projectsDirectoryPath, filePath);

        try {
          content = fs.readFileSync(absolutePath, { encoding: 'utf8' });
        } catch (error) {
          ///
        }
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
      jsZipEntryNameRecognisedFileName = pathUtil.isRecognisedFileName(jsZipEntryName),
          jsZipEntryFile = !jsZipEntryDirectory && jsZipEntryNameRecognisedFileName;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsIm1rZGlycCIsInBhdGhVdGlsIiwiRmlsZSIsInBhdGgiLCJjb250ZW50IiwidHlwZSIsImpzb24iLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhYnNvbHV0ZVBhdGgiLCJjb21iaW5lUGF0aHMiLCJhYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJzeW5jIiwid3JpdGVGaWxlU3luYyIsInBhdGhKU09OIiwiY29udGVudEpTT04iLCJmaWxlIiwiZmlsZVBhdGgiLCJoaWRkZW4iLCJpc0hpZGRlbiIsInBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJpc1BhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJyZWFkRmlsZVN5bmMiLCJlbmNvZGluZyIsImVycm9yIiwianNaaXBFbnRyeSIsImNhbGxiYWNrIiwianNaaXBFbnRyeU5hbWUiLCJuYW1lIiwianNaaXBFbnRyeURpcmVjdG9yeSIsImRpciIsImpzWmlwRW50cnlOYW1lUmVjb2duaXNlZEZpbGVOYW1lIiwiaXNSZWNvZ25pc2VkRmlsZU5hbWUiLCJqc1ppcEVudHJ5RmlsZSIsInJlbW92ZU1hc3RlckZyb21QYXRoIiwiYXN5bmMiLCJ0aGVuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxRQUFSLENBRGY7O0FBR0EsSUFBTUUsV0FBV0YsUUFBUSxhQUFSLENBQWpCOztJQUVNRyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxPQUFPSCxLQUFLRyxJQUFsQjtBQUFBLFVBQ01GLE9BQU8sS0FBS0EsSUFEbEI7QUFBQSxVQUVNQyxVQUFVLEtBQUtBLE9BRnJCO0FBQUEsVUFHTUUsT0FBTztBQUNMLGdCQUFRRCxJQURIO0FBRUwsZ0JBQVFGLElBRkg7QUFHTCxtQkFBV0M7QUFITixPQUhiOztBQVNBLGFBQU9FLElBQVA7QUFDRDs7O3lCQUVJQyxxQixFQUF1QjtBQUMxQixVQUFNQyxlQUFlUCxTQUFTUSxZQUFULENBQXNCRixxQkFBdEIsRUFBNkMsS0FBS0osSUFBbEQsQ0FBckI7QUFBQSxVQUNNTyx3QkFBd0JULFNBQVNVLHFCQUFULENBQStCSCxZQUEvQixDQUQ5Qjs7QUFHQVIsYUFBT1ksSUFBUCxDQUFZRixxQkFBWjs7QUFFQVosU0FBR2UsYUFBSCxDQUFpQkwsWUFBakIsRUFBK0IsS0FBS0osT0FBcEM7QUFDRDs7OzZCQUVlRSxJLEVBQU07QUFDcEIsVUFBTVEsV0FBV1IsS0FBSyxNQUFMLENBQWpCO0FBQUEsVUFDTVMsY0FBY1QsS0FBSyxTQUFMLENBRHBCO0FBQUEsVUFFTUgsT0FBT1csUUFGYjtBQUFBLFVBRXdCO0FBQ2xCVixnQkFBVVcsV0FIaEI7QUFBQSxVQUc4QjtBQUN4QkMsYUFBTyxJQUFJZCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQUpiOztBQU1BLGFBQU9ZLElBQVA7QUFDRDs7O2lDQUVtQkMsUSxFQUFVVixxQixFQUF1QjtBQUNuRCxVQUFJSCxVQUFVLElBQWQ7O0FBRUEsVUFBTWMsU0FBU2pCLFNBQVNrQixRQUFULENBQWtCRixRQUFsQixDQUFmO0FBQUEsVUFDTUcseUJBQXlCbkIsU0FBU29CLHdCQUFULENBQWtDSixRQUFsQyxDQUQvQjs7QUFHQSxVQUFJLENBQUNDLE1BQUQsSUFBV0Usc0JBQWYsRUFBdUM7QUFDckMsWUFBTVosZUFBZVAsU0FBU1EsWUFBVCxDQUFzQkYscUJBQXRCLEVBQTZDVSxRQUE3QyxDQUFyQjs7QUFFQSxZQUFJO0FBQ0ZiLG9CQUFVTixHQUFHd0IsWUFBSCxDQUFnQmQsWUFBaEIsRUFBOEIsRUFBQ2UsVUFBVSxNQUFYLEVBQTlCLENBQVY7QUFDRCxTQUZELENBR0EsT0FBT0MsS0FBUCxFQUFjO0FBQ1o7QUFDRDtBQUVGOztBQUVELFVBQU1yQixPQUFPYyxRQUFiO0FBQUEsVUFBd0I7QUFDbEJELGFBQU8sSUFBSWQsSUFBSixDQUFTQyxJQUFULEVBQWVDLE9BQWYsQ0FEYjs7QUFHQSxhQUFPWSxJQUFQO0FBQ0Q7OzttQ0FFcUJTLFUsRUFBWUMsUSxFQUFVO0FBQzFDLFVBQUlWLE9BQU8sSUFBWDs7QUFFQSxVQUFNVyxpQkFBaUJGLFdBQVdHLElBQWxDO0FBQUEsVUFDTUMsc0JBQXNCSixXQUFXSyxHQUR2QztBQUFBLFVBQzRDO0FBQ3RDQyx5Q0FBbUM5QixTQUFTK0Isb0JBQVQsQ0FBOEJMLGNBQTlCLENBRnpDO0FBQUEsVUFHTU0saUJBQWlCLENBQUNKLG1CQUFELElBQXdCRSxnQ0FIL0M7O0FBS0EsVUFBSSxDQUFDRSxjQUFMLEVBQXFCO0FBQ25CUCxpQkFBU1YsSUFBVDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUliLE9BQU93QixjQUFYLENBREssQ0FDc0I7O0FBRTNCeEIsZUFBT0YsU0FBU2lDLG9CQUFULENBQThCL0IsSUFBOUIsQ0FBUDs7QUFFQXNCLG1CQUFXVSxLQUFYLENBQWlCLFFBQWpCLEVBQTJCQyxJQUEzQixDQUFnQyxVQUFTaEMsT0FBVCxFQUFrQjtBQUNoRFksaUJBQU8sSUFBSWQsSUFBSixDQUFTQyxJQUFULEVBQWVDLE9BQWYsQ0FBUDs7QUFFQXNCLG1CQUFTVixJQUFUO0FBQ0QsU0FKRDtBQUtEO0FBQ0Y7Ozs7OztBQUdIZCxLQUFLRyxJQUFMLEdBQVksTUFBWjs7QUFFQWdDLE9BQU9DLE9BQVAsR0FBaUJwQyxJQUFqQiIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgICBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKTtcblxuY29uc3QgcGF0aFV0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGF0aCcpO1xuXG5jbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlID0gRmlsZS50eXBlLFxuICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGgsXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICBcInBhdGhcIjogcGF0aCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc2F2ZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwYXRoVXRpbC5jb21iaW5lUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0aGlzLnBhdGgpLFxuICAgICAgICAgIGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHBhdGhVdGlsLmRpcmVjdG9yeVBhdGhGcm9tUGF0aChhYnNvbHV0ZVBhdGgpO1xuXG4gICAgbWtkaXJwLnN5bmMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIGZzLndyaXRlRmlsZVN5bmMoYWJzb2x1dGVQYXRoLCB0aGlzLmNvbnRlbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgIGNvbnRlbnRKU09OID0ganNvbltcImNvbnRlbnRcIl0sXG4gICAgICAgICAgcGF0aCA9IHBhdGhKU09OLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRKU09OLCAgLy8vXG4gICAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgY29udGVudCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgaGlkZGVuID0gcGF0aFV0aWwuaXNIaWRkZW4oZmlsZVBhdGgpLFxuICAgICAgICAgIHBhdGhSZWNvZ25pc2VkRmlsZVBhdGggPSBwYXRoVXRpbC5pc1BhdGhSZWNvZ25pc2VkRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKCFoaWRkZW4gJiYgcGF0aFJlY29nbmlzZWRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gcGF0aFV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZmlsZVBhdGgpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlUGF0aCwge2VuY29kaW5nOiAndXRmOCd9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLy9cbiAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IHBhdGggPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICBcbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5TmFtZSA9IGpzWmlwRW50cnkubmFtZSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXIsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlOYW1lUmVjb2duaXNlZEZpbGVOYW1lID0gcGF0aFV0aWwuaXNSZWNvZ25pc2VkRmlsZU5hbWUoanNaaXBFbnRyeU5hbWUpLFxuICAgICAgICAgIGpzWmlwRW50cnlGaWxlID0gIWpzWmlwRW50cnlEaXJlY3RvcnkgJiYganNaaXBFbnRyeU5hbWVSZWNvZ25pc2VkRmlsZU5hbWU7XG5cbiAgICBpZiAoIWpzWmlwRW50cnlGaWxlKSB7XG4gICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBhdGggPSBqc1ppcEVudHJ5TmFtZTsgLy8vXG5cbiAgICAgIHBhdGggPSBwYXRoVXRpbC5yZW1vdmVNYXN0ZXJGcm9tUGF0aChwYXRoKTtcblxuICAgICAganNaaXBFbnRyeS5hc3luYygnc3RyaW5nJykudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcblxuICAgICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5GaWxlLnR5cGUgPSAnRmlsZSc7XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZTtcbiJdfQ==