'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entries = require('./entries'),
    MetaJSONFile = require('./file/metaJSON');

var filePathUtilities = require('./utilities/filePath');

var isFilePathReadmeFilePath = filePathUtilities.isFilePathReadmeFilePath,
    isFilePathMetaJSONFilePath = filePathUtilities.isFilePathMetaJSONFilePath;

var Release = function () {
  function Release(name, entries, versionNumber) {
    _classCallCheck(this, Release);

    this.name = name;
    this.entries = entries;
    this.versionNumber = versionNumber;
  }

  _createClass(Release, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getEntries',
    value: function getEntries() {
      return this.entries;
    }
  }, {
    key: 'getVersionNumber',
    value: function getVersionNumber() {
      return this.versionNumber;
    }
  }, {
    key: 'getFiles',
    value: function getFiles() {
      var files = [];

      this.entries.forEachEntry(function (entry) {
        var entryFile = entry.isFile();

        if (entryFile) {
          var file = entry; ///

          files.push(file);
        }
      });

      return files;
    }
  }, {
    key: 'getReadmeFile',
    value: function getReadmeFile() {
      return this.getFile(isFilePathReadmeFilePath);
    }
  }, {
    key: 'getMetaJSONFile',
    value: function getMetaJSONFile() {
      return this.getFile(isFilePathMetaJSONFilePath, MetaJSONFile);
    }
  }, {
    key: 'getFile',
    value: function getFile(test, Class) {
      var foundFile = null;

      var files = this.getFiles();

      files.some(function (file) {
        var filePath = file.getPath(),
            fileFound = test(filePath);

        if (fileFound) {
          foundFile = Class ? Class.fromFile(file) : file;

          return true;
        }
      });

      var file = foundFile;

      return file;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var entriesJSON = this.entries.toJSON(),
          name = this.name,
          entries = entriesJSON,
          ///
      versionNumber = this.versionNumber,
          json = {
        name: name,
        entries: entries,
        versionNumber: versionNumber
      };

      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var nameJSON = json["name"],
          entriesJSON = json["entries"],
          versionNumberJSON = json["versionNumber"],
          name = nameJSON,
          ///
      entries = Entries.fromJSON(entriesJSON),
          versionNumber = versionNumberJSON,
          ///
      release = new Release(name, entries, versionNumber);

      return release;
    }
  }, {
    key: 'fromName',
    value: function fromName(name) {
      var release = null;

      try {
        var topmostDirectoryName = name,
            ///
        projectsDirectoryPath = '.',
            allowOnlyRecognisedFiles = true,
            disallowHiddenFilesAndDirectories = true,
            entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories),
            versionNumber = null; ///

        release = new Release(name, entries, versionNumber);
      } catch (error) {} ///

      return release;
    }
  }]);

  return Release;
}();

module.exports = Release;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWxlYXNlLmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJyZXF1aXJlIiwiTWV0YUpTT05GaWxlIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoUmVhZG1lRmlsZVBhdGgiLCJpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsInZlcnNpb25OdW1iZXIiLCJmaWxlcyIsImZvckVhY2hFbnRyeSIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsInB1c2giLCJnZXRGaWxlIiwidGVzdCIsIkNsYXNzIiwiZm91bmRGaWxlIiwiZ2V0RmlsZXMiLCJzb21lIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZUZvdW5kIiwiZnJvbUZpbGUiLCJlbnRyaWVzSlNPTiIsInRvSlNPTiIsImpzb24iLCJuYW1lSlNPTiIsInZlcnNpb25OdW1iZXJKU09OIiwiZnJvbUpTT04iLCJyZWxlYXNlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMiLCJkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLGlCQUFSLENBRHJCOztBQUdBLElBQU1FLG9CQUFvQkYsUUFBUSxzQkFBUixDQUExQjs7SUFFUUcsd0IsR0FBeURELGlCLENBQXpEQyx3QjtJQUEwQkMsMEIsR0FBK0JGLGlCLENBQS9CRSwwQjs7SUFFNUJDLE87QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLEVBQTBDO0FBQUE7O0FBQ3hDLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQyxhQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLFFBQVEsRUFBZDs7QUFFQSxXQUFLRixPQUFMLENBQWFHLFlBQWIsQ0FBMEIsVUFBU0MsS0FBVCxFQUFnQjtBQUN4QyxZQUFNQyxZQUFZRCxNQUFNRSxNQUFOLEVBQWxCOztBQUVBLFlBQUlELFNBQUosRUFBZTtBQUNiLGNBQU1FLE9BQU9ILEtBQWIsQ0FEYSxDQUNPOztBQUVwQkYsZ0JBQU1NLElBQU4sQ0FBV0QsSUFBWDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxhQUFPTCxLQUFQO0FBQ0Q7OztvQ0FFZTtBQUFFLGFBQU8sS0FBS08sT0FBTCxDQUFhYix3QkFBYixDQUFQO0FBQWdEOzs7c0NBRWhEO0FBQUUsYUFBTyxLQUFLYSxPQUFMLENBQWFaLDBCQUFiLEVBQXlDSCxZQUF6QyxDQUFQO0FBQWdFOzs7NEJBRTVFZ0IsSSxFQUFNQyxLLEVBQU87QUFDbkIsVUFBSUMsWUFBWSxJQUFoQjs7QUFFQSxVQUFNVixRQUFRLEtBQUtXLFFBQUwsRUFBZDs7QUFFQVgsWUFBTVksSUFBTixDQUFXLFVBQVNQLElBQVQsRUFBZTtBQUN4QixZQUFNUSxXQUFXUixLQUFLUyxPQUFMLEVBQWpCO0FBQUEsWUFDSUMsWUFBWVAsS0FBS0ssUUFBTCxDQURoQjs7QUFHQSxZQUFJRSxTQUFKLEVBQWU7QUFDYkwsc0JBQVlELFFBQ0VBLE1BQU1PLFFBQU4sQ0FBZVgsSUFBZixDQURGLEdBRUlBLElBRmhCOztBQUlBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BWEQ7O0FBYUEsVUFBTUEsT0FBT0ssU0FBYjs7QUFFQSxhQUFPTCxJQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1ZLGNBQWMsS0FBS25CLE9BQUwsQ0FBYW9CLE1BQWIsRUFBcEI7QUFBQSxVQUNNckIsT0FBTyxLQUFLQSxJQURsQjtBQUFBLFVBRU1DLFVBQVVtQixXQUZoQjtBQUFBLFVBRThCO0FBQ3hCbEIsc0JBQWdCLEtBQUtBLGFBSDNCO0FBQUEsVUFJTW9CLE9BQU87QUFDTHRCLGtCQURLO0FBRUxDLHdCQUZLO0FBR0xDO0FBSEssT0FKYjs7QUFVQSxhQUFPb0IsSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNQyxXQUFXRCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNRixjQUFjRSxLQUFLLFNBQUwsQ0FEcEI7QUFBQSxVQUVNRSxvQkFBb0JGLEtBQUssZUFBTCxDQUYxQjtBQUFBLFVBR010QixPQUFPdUIsUUFIYjtBQUFBLFVBR3dCO0FBQ2xCdEIsZ0JBQVVSLFFBQVFnQyxRQUFSLENBQWlCTCxXQUFqQixDQUpoQjtBQUFBLFVBS01sQixnQkFBZ0JzQixpQkFMdEI7QUFBQSxVQUswQztBQUNwQ0UsZ0JBQVUsSUFBSTNCLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLENBTmhCOztBQVFBLGFBQU93QixPQUFQO0FBQ0Q7Ozs2QkFFZTFCLEksRUFBTTtBQUNwQixVQUFJMEIsVUFBVSxJQUFkOztBQUVBLFVBQUk7QUFDRixZQUFNQyx1QkFBdUIzQixJQUE3QjtBQUFBLFlBQW1DO0FBQzdCNEIsZ0NBQXdCLEdBRDlCO0FBQUEsWUFFTUMsMkJBQTJCLElBRmpDO0FBQUEsWUFHTUMsb0NBQW9DLElBSDFDO0FBQUEsWUFJTTdCLFVBQVVSLFFBQVFzQyx3QkFBUixDQUFpQ0osb0JBQWpDLEVBQXVEQyxxQkFBdkQsRUFBOEVDLHdCQUE5RSxFQUF3R0MsaUNBQXhHLENBSmhCO0FBQUEsWUFLTTVCLGdCQUFnQixJQUx0QixDQURFLENBTTBCOztBQUU1QndCLGtCQUFVLElBQUkzQixPQUFKLENBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxhQUEzQixDQUFWO0FBQ0QsT0FURCxDQVNFLE9BQU84QixLQUFQLEVBQWMsQ0FBRSxDQVpFLENBWUE7O0FBRXBCLGFBQU9OLE9BQVA7QUFDRDs7Ozs7O0FBR0hPLE9BQU9DLE9BQVAsR0FBaUJuQyxPQUFqQiIsImZpbGUiOiJyZWxlYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXG4gICAgICBNZXRhSlNPTkZpbGUgPSByZXF1aXJlKCcuL2ZpbGUvbWV0YUpTT04nKTtcblxuY29uc3QgZmlsZVBhdGhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9maWxlUGF0aCcpO1xuXG5jb25zdCB7IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aCwgaXNGaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0VmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBbXTtcblxuICAgIHRoaXMuZW50cmllcy5mb3JFYWNoRW50cnkoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMucHVzaChmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldFJlYWRtZUZpbGUoKSB7IHJldHVybiB0aGlzLmdldEZpbGUoaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoKTsgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHsgcmV0dXJuIHRoaXMuZ2V0RmlsZShpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCwgTWV0YUpTT05GaWxlKTsgfVxuXG4gIGdldEZpbGUodGVzdCwgQ2xhc3MpIHtcbiAgICBsZXQgZm91bmRGaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuc29tZShmdW5jdGlvbihmaWxlKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVGb3VuZCA9IHRlc3QoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZUZvdW5kKSB7XG4gICAgICAgIGZvdW5kRmlsZSA9IENsYXNzID9cbiAgICAgICAgICAgICAgICAgICAgICBDbGFzcy5mcm9tRmlsZShmaWxlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZSA9IGZvdW5kRmlsZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHRoaXMudmVyc2lvbk51bWJlcixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lSlNPTiA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGVudHJpZXNKU09OID0ganNvbltcImVudHJpZXNcIl0sXG4gICAgICAgICAgdmVyc2lvbk51bWJlckpTT04gPSBqc29uW1widmVyc2lvbk51bWJlclwiXSxcbiAgICAgICAgICBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihlbnRyaWVzSlNPTiksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXJKU09OLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGxldCByZWxlYXNlID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoID0gJy4nLFxuICAgICAgICAgICAgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzID0gdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9IHRydWUsXG4gICAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgICAgdmVyc2lvbk51bWJlciA9IG51bGw7IC8vL1xuXG4gICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9ICAvLy9cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVsZWFzZTtcbiJdfQ==