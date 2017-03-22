'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs'),
    mkdirp = require('mkdirp');

var util = require('./util');

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
      var absolutePath = util.combinePaths(projectsDirectoryPath, this.path),
          absoluteDirectoryPath = util.directoryPathFromPath(absolutePath);

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

      var hidden = util.isHidden(filePath),
          pathRecognisedFilePath = util.isPathRecognisedFilePath(filePath);

      if (!hidden && pathRecognisedFilePath) {
        var absolutePath = util.combinePaths(projectsDirectoryPath, filePath);

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
      jsZipEntryNameRecognisedFileName = util.isRecognisedFileName(jsZipEntryName),
          jsZipEntryFile = !jsZipEntryDirectory && jsZipEntryNameRecognisedFileName;

      if (!jsZipEntryFile) {
        callback(file);
      } else {
        var path = jsZipEntryName; ///

        path = util.removeMasterFromPath(path);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlLmpzIl0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsIm1rZGlycCIsInV0aWwiLCJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJ0eXBlIiwianNvbiIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFic29sdXRlUGF0aCIsImNvbWJpbmVQYXRocyIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGhGcm9tUGF0aCIsInN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwicGF0aEpTT04iLCJjb250ZW50SlNPTiIsImZpbGUiLCJmaWxlUGF0aCIsImhpZGRlbiIsImlzSGlkZGVuIiwicGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImlzUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwiZXJyb3IiLCJqc1ppcEVudHJ5IiwiY2FsbGJhY2siLCJqc1ppcEVudHJ5TmFtZSIsIm5hbWUiLCJqc1ppcEVudHJ5RGlyZWN0b3J5IiwiZGlyIiwianNaaXBFbnRyeU5hbWVSZWNvZ25pc2VkRmlsZU5hbWUiLCJpc1JlY29nbmlzZWRGaWxlTmFtZSIsImpzWmlwRW50cnlGaWxlIiwicmVtb3ZlTWFzdGVyRnJvbVBhdGgiLCJhc3luYyIsInRoZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsS0FBS0MsUUFBUSxJQUFSLENBQVg7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLFFBQVIsQ0FEZjs7QUFHQSxJQUFNRSxPQUFPRixRQUFRLFFBQVIsQ0FBYjs7SUFFTUcsSTtBQUNKLGdCQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQjtBQUFBOztBQUN6QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0QsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsT0FBT0gsS0FBS0csSUFBbEI7QUFBQSxVQUNNRixPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTUMsVUFBVSxLQUFLQSxPQUZyQjtBQUFBLFVBR01FLE9BQU87QUFDTCxnQkFBUUQsSUFESDtBQUVMLGdCQUFRRixJQUZIO0FBR0wsbUJBQVdDO0FBSE4sT0FIYjs7QUFTQSxhQUFPRSxJQUFQO0FBQ0Q7Ozt5QkFFSUMscUIsRUFBdUI7QUFDMUIsVUFBTUMsZUFBZVAsS0FBS1EsWUFBTCxDQUFrQkYscUJBQWxCLEVBQXlDLEtBQUtKLElBQTlDLENBQXJCO0FBQUEsVUFDTU8sd0JBQXdCVCxLQUFLVSxxQkFBTCxDQUEyQkgsWUFBM0IsQ0FEOUI7O0FBR0FSLGFBQU9ZLElBQVAsQ0FBWUYscUJBQVo7O0FBRUFaLFNBQUdlLGFBQUgsQ0FBaUJMLFlBQWpCLEVBQStCLEtBQUtKLE9BQXBDO0FBQ0Q7Ozs2QkFFZUUsSSxFQUFNO0FBQ3BCLFVBQU1RLFdBQVdSLEtBQUssTUFBTCxDQUFqQjtBQUFBLFVBQ01TLGNBQWNULEtBQUssU0FBTCxDQURwQjtBQUFBLFVBRU1ILE9BQU9XLFFBRmI7QUFBQSxVQUV3QjtBQUNsQlYsZ0JBQVVXLFdBSGhCO0FBQUEsVUFHOEI7QUFDeEJDLGFBQU8sSUFBSWQsSUFBSixDQUFTQyxJQUFULEVBQWVDLE9BQWYsQ0FKYjs7QUFNQSxhQUFPWSxJQUFQO0FBQ0Q7OztpQ0FFbUJDLFEsRUFBVVYscUIsRUFBdUI7QUFDbkQsVUFBSUgsVUFBVSxJQUFkOztBQUVBLFVBQU1jLFNBQVNqQixLQUFLa0IsUUFBTCxDQUFjRixRQUFkLENBQWY7QUFBQSxVQUNNRyx5QkFBeUJuQixLQUFLb0Isd0JBQUwsQ0FBOEJKLFFBQTlCLENBRC9COztBQUdBLFVBQUksQ0FBQ0MsTUFBRCxJQUFXRSxzQkFBZixFQUF1QztBQUNyQyxZQUFNWixlQUFlUCxLQUFLUSxZQUFMLENBQWtCRixxQkFBbEIsRUFBeUNVLFFBQXpDLENBQXJCOztBQUVBLFlBQUk7QUFDRmIsb0JBQVVOLEdBQUd3QixZQUFILENBQWdCZCxZQUFoQixFQUE4QixFQUFDZSxVQUFVLE1BQVgsRUFBOUIsQ0FBVjtBQUNELFNBRkQsQ0FHQSxPQUFPQyxLQUFQLEVBQWM7QUFDWjtBQUNEO0FBRUY7O0FBRUQsVUFBTXJCLE9BQU9jLFFBQWI7QUFBQSxVQUF3QjtBQUNsQkQsYUFBTyxJQUFJZCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQURiOztBQUdBLGFBQU9ZLElBQVA7QUFDRDs7O21DQUVxQlMsVSxFQUFZQyxRLEVBQVU7QUFDMUMsVUFBSVYsT0FBTyxJQUFYOztBQUVBLFVBQU1XLGlCQUFpQkYsV0FBV0csSUFBbEM7QUFBQSxVQUNNQyxzQkFBc0JKLFdBQVdLLEdBRHZDO0FBQUEsVUFDNEM7QUFDdENDLHlDQUFtQzlCLEtBQUsrQixvQkFBTCxDQUEwQkwsY0FBMUIsQ0FGekM7QUFBQSxVQUdNTSxpQkFBaUIsQ0FBQ0osbUJBQUQsSUFBd0JFLGdDQUgvQzs7QUFLQSxVQUFJLENBQUNFLGNBQUwsRUFBcUI7QUFDbkJQLGlCQUFTVixJQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSWIsT0FBT3dCLGNBQVgsQ0FESyxDQUNzQjs7QUFFM0J4QixlQUFPRixLQUFLaUMsb0JBQUwsQ0FBMEIvQixJQUExQixDQUFQOztBQUVBc0IsbUJBQVdVLEtBQVgsQ0FBaUIsUUFBakIsRUFBMkJDLElBQTNCLENBQWdDLFVBQVNoQyxPQUFULEVBQWtCO0FBQ2hEWSxpQkFBTyxJQUFJZCxJQUFKLENBQVNDLElBQVQsRUFBZUMsT0FBZixDQUFQOztBQUVBc0IsbUJBQVNWLElBQVQ7QUFDRCxTQUpEO0FBS0Q7QUFDRjs7Ozs7O0FBR0hkLEtBQUtHLElBQUwsR0FBWSxNQUFaOztBQUVBZ0MsT0FBT0MsT0FBUCxHQUFpQnBDLElBQWpCIiwiZmlsZSI6ImZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKSxcbiAgICAgIG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcihwYXRoLCBjb250ZW50KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGaWxlLnR5cGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogdHlwZSxcbiAgICAgICAgICAgIFwicGF0aFwiOiBwYXRoLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzYXZlKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGhpcy5wYXRoKSxcbiAgICAgICAgICBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB1dGlsLmRpcmVjdG9yeVBhdGhGcm9tUGF0aChhYnNvbHV0ZVBhdGgpO1xuXG4gICAgbWtkaXJwLnN5bmMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICAgIGZzLndyaXRlRmlsZVN5bmMoYWJzb2x1dGVQYXRoLCB0aGlzLmNvbnRlbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwYXRoSlNPTiA9IGpzb25bXCJwYXRoXCJdLFxuICAgICAgICAgIGNvbnRlbnRKU09OID0ganNvbltcImNvbnRlbnRcIl0sXG4gICAgICAgICAgcGF0aCA9IHBhdGhKU09OLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRKU09OLCAgLy8vXG4gICAgICAgICAgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBsZXQgY29udGVudCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgaGlkZGVuID0gdXRpbC5pc0hpZGRlbihmaWxlUGF0aCksXG4gICAgICAgICAgcGF0aFJlY29nbmlzZWRGaWxlUGF0aCA9IHV0aWwuaXNQYXRoUmVjb2duaXNlZEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICghaGlkZGVuICYmIHBhdGhSZWNvZ25pc2VkRmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHV0aWwuY29tYmluZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZmlsZVBhdGgpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlUGF0aCwge2VuY29kaW5nOiAndXRmOCd9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLy9cbiAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IHBhdGggPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50KTtcbiAgICBcbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXBFbnRyeShqc1ppcEVudHJ5LCBjYWxsYmFjaykge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBqc1ppcEVudHJ5TmFtZSA9IGpzWmlwRW50cnkubmFtZSxcbiAgICAgICAgICBqc1ppcEVudHJ5RGlyZWN0b3J5ID0ganNaaXBFbnRyeS5kaXIsIC8vL1xuICAgICAgICAgIGpzWmlwRW50cnlOYW1lUmVjb2duaXNlZEZpbGVOYW1lID0gdXRpbC5pc1JlY29nbmlzZWRGaWxlTmFtZShqc1ppcEVudHJ5TmFtZSksXG4gICAgICAgICAganNaaXBFbnRyeUZpbGUgPSAhanNaaXBFbnRyeURpcmVjdG9yeSAmJiBqc1ppcEVudHJ5TmFtZVJlY29nbmlzZWRGaWxlTmFtZTtcblxuICAgIGlmICghanNaaXBFbnRyeUZpbGUpIHtcbiAgICAgIGNhbGxiYWNrKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF0aCA9IGpzWmlwRW50cnlOYW1lOyAvLy9cblxuICAgICAgcGF0aCA9IHV0aWwucmVtb3ZlTWFzdGVyRnJvbVBhdGgocGF0aCk7XG5cbiAgICAgIGpzWmlwRW50cnkuYXN5bmMoJ3N0cmluZycpLnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCk7XG5cbiAgICAgICAgY2FsbGJhY2soZmlsZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuRmlsZS50eXBlID0gJ0ZpbGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGU7XG4iXX0=