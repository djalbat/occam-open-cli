'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entries = require('./entries'),
    filePathUtilities = require('./utilities/filePath');

var isFilePathReadmeFilePath = filePathUtilities.isFilePathReadmeFilePath,
    isFilePathMetaJSONFilePath = filePathUtilities.isFilePathMetaJSONFilePath;

var Release = /*#__PURE__*/function () {
  function Release(name, entries, versionNumber) {
    _classCallCheck(this, Release);

    this.name = name;
    this.entries = entries;
    this.versionNumber = versionNumber;
  }

  _createClass(Release, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getEntries",
    value: function getEntries() {
      return this.entries;
    }
  }, {
    key: "getVersionNumber",
    value: function getVersionNumber() {
      return this.versionNumber;
    }
  }, {
    key: "getFiles",
    value: function getFiles() {
      return this.entries.getFiles();
    }
  }, {
    key: "getReadmeFile",
    value: function getReadmeFile() {
      var readmeFile = null;
      var files = this.getFiles();
      files.someFile(function (file) {
        var filePath = file.getPath(),
            filePathReadmeFilePath = isFilePathReadmeFilePath(filePath);

        if (filePathReadmeFilePath) {
          readmeFile = file; ///

          return true;
        }
      });
      return readmeFile;
    }
  }, {
    key: "getMetaJSONFile",
    value: function getMetaJSONFile() {
      var metaJSONFile = null;
      var files = this.getFiles();
      files.someFile(function (file) {
        var filePath = file.getPath(),
            filePathMetaJSONFilePath = isFilePathMetaJSONFilePath(filePath);

        if (filePathMetaJSONFilePath) {
          metaJSONFile = file; ///

          return true;
        }
      });
      return metaJSONFile;
    }
  }, {
    key: "toJSON",
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
    key: "fromJSON",
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
    key: "fromName",
    value: function fromName(name) {
      var topmostDirectoryName = name,
          ///
      projectsDirectoryPath = '.',
          loadOnlyRecognisedFiles = true,
          doNotLoadHiddenFilesAndDirectories = true,
          entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          versionNumber = null,
          ///
      release = new Release(name, entries, versionNumber);
      return release;
    }
  }]);

  return Release;
}();

module.exports = Release;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2UuanMiXSwibmFtZXMiOlsiRW50cmllcyIsInJlcXVpcmUiLCJmaWxlUGF0aFV0aWxpdGllcyIsImlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aCIsImlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwidmVyc2lvbk51bWJlciIsImdldEZpbGVzIiwicmVhZG1lRmlsZSIsImZpbGVzIiwic29tZUZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhSZWFkbWVGaWxlUGF0aCIsIm1ldGFKU09ORmlsZSIsImZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwidmVyc2lvbk51bWJlckpTT04iLCJmcm9tSlNPTiIsInJlbGVhc2UiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImxvYWRPbmx5UmVjb2duaXNlZEZpbGVzIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7QUFBQSxJQUNNQyxpQkFBaUIsR0FBR0QsT0FBTyxDQUFDLHNCQUFELENBRGpDOztJQUdRRSx3QixHQUF5REQsaUIsQ0FBekRDLHdCO0lBQTBCQywwQixHQUErQkYsaUIsQ0FBL0JFLDBCOztJQUU1QkMsTztBQUNKLG1CQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsRUFBMEM7QUFBQTs7QUFDeEMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtDLGFBQVo7QUFDRDs7OytCQUVVO0FBQUUsYUFBTyxLQUFLRCxPQUFMLENBQWFFLFFBQWIsRUFBUDtBQUFpQzs7O29DQUU5QjtBQUNkLFVBQUlDLFVBQVUsR0FBRyxJQUFqQjtBQUVBLFVBQU1DLEtBQUssR0FBRyxLQUFLRixRQUFMLEVBQWQ7QUFFQUUsTUFBQUEsS0FBSyxDQUFDQyxRQUFOLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCLFlBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFMLEVBQWpCO0FBQUEsWUFDTUMsc0JBQXNCLEdBQUdiLHdCQUF3QixDQUFDVyxRQUFELENBRHZEOztBQUdBLFlBQUlFLHNCQUFKLEVBQTRCO0FBQzFCTixVQUFBQSxVQUFVLEdBQUdHLElBQWIsQ0FEMEIsQ0FDTjs7QUFFcEIsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FURDtBQVdBLGFBQU9ILFVBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFJTyxZQUFZLEdBQUcsSUFBbkI7QUFFQSxVQUFNTixLQUFLLEdBQUcsS0FBS0YsUUFBTCxFQUFkO0FBRUFFLE1BQUFBLEtBQUssQ0FBQ0MsUUFBTixDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUN2QixZQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxFQUFqQjtBQUFBLFlBQ01HLHdCQUF3QixHQUFHZCwwQkFBMEIsQ0FBQ1UsUUFBRCxDQUQzRDs7QUFHQSxZQUFJSSx3QkFBSixFQUE4QjtBQUM1QkQsVUFBQUEsWUFBWSxHQUFHSixJQUFmLENBRDRCLENBQ047O0FBRXRCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BVEQ7QUFXQSxhQUFPSSxZQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1FLFdBQVcsR0FBRyxLQUFLWixPQUFMLENBQWFhLE1BQWIsRUFBcEI7QUFBQSxVQUNNZCxJQUFJLEdBQUcsS0FBS0EsSUFEbEI7QUFBQSxVQUVNQyxPQUFPLEdBQUdZLFdBRmhCO0FBQUEsVUFFOEI7QUFDeEJYLE1BQUFBLGFBQWEsR0FBRyxLQUFLQSxhQUgzQjtBQUFBLFVBSU1hLElBQUksR0FBRztBQUNMZixRQUFBQSxJQUFJLEVBQUpBLElBREs7QUFFTEMsUUFBQUEsT0FBTyxFQUFQQSxPQUZLO0FBR0xDLFFBQUFBLGFBQWEsRUFBYkE7QUFISyxPQUpiO0FBVUEsYUFBT2EsSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQyxNQUFELENBQXJCO0FBQUEsVUFDTUYsV0FBVyxHQUFHRSxJQUFJLENBQUMsU0FBRCxDQUR4QjtBQUFBLFVBRU1FLGlCQUFpQixHQUFHRixJQUFJLENBQUMsZUFBRCxDQUY5QjtBQUFBLFVBR01mLElBQUksR0FBR2dCLFFBSGI7QUFBQSxVQUd3QjtBQUNsQmYsTUFBQUEsT0FBTyxHQUFHUCxPQUFPLENBQUN3QixRQUFSLENBQWlCTCxXQUFqQixDQUpoQjtBQUFBLFVBS01YLGFBQWEsR0FBR2UsaUJBTHRCO0FBQUEsVUFLMEM7QUFDcENFLE1BQUFBLE9BQU8sR0FBRyxJQUFJcEIsT0FBSixDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsQ0FOaEI7QUFRQSxhQUFPaUIsT0FBUDtBQUNEOzs7NkJBRWVuQixJLEVBQU07QUFDcEIsVUFBTW9CLG9CQUFvQixHQUFHcEIsSUFBN0I7QUFBQSxVQUFtQztBQUM3QnFCLE1BQUFBLHFCQUFxQixHQUFHLEdBRDlCO0FBQUEsVUFFTUMsdUJBQXVCLEdBQUcsSUFGaEM7QUFBQSxVQUdNQyxrQ0FBa0MsR0FBRyxJQUgzQztBQUFBLFVBSU10QixPQUFPLEdBQUdQLE9BQU8sQ0FBQzhCLHdCQUFSLENBQWlDSixvQkFBakMsRUFBdURDLHFCQUF2RCxFQUE4RUMsdUJBQTlFLEVBQXVHQyxrQ0FBdkcsQ0FKaEI7QUFBQSxVQUtNckIsYUFBYSxHQUFHLElBTHRCO0FBQUEsVUFLNEI7QUFDdEJpQixNQUFBQSxPQUFPLEdBQUcsSUFBSXBCLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLENBTmhCO0FBUUEsYUFBT2lCLE9BQVA7QUFDRDs7Ozs7O0FBR0hNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNCLE9BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXG4gICAgICBmaWxlUGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2ZpbGVQYXRoJyk7XG5cbmNvbnN0IHsgaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIFJlbGVhc2Uge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMudmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXI7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRWZXJzaW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb25OdW1iZXI7XG4gIH1cblxuICBnZXRGaWxlcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlcygpOyB9XG5cbiAgZ2V0UmVhZG1lRmlsZSgpIHtcbiAgICBsZXQgcmVhZG1lRmlsZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKTtcblxuICAgIGZpbGVzLnNvbWVGaWxlKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgZmlsZVBhdGhSZWFkbWVGaWxlUGF0aCA9IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGlmIChmaWxlUGF0aFJlYWRtZUZpbGVQYXRoKSB7XG4gICAgICAgIHJlYWRtZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVhZG1lRmlsZTtcbiAgfVxuXG4gIGdldE1ldGFKU09ORmlsZSgpIHtcbiAgICBsZXQgbWV0YUpTT05GaWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuc29tZUZpbGUoKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICBmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGggPSBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGlmIChmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgpIHtcbiAgICAgICAgbWV0YUpTT05GaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFKU09ORmlsZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHZlcnNpb25OdW1iZXIgPSB0aGlzLnZlcnNpb25OdW1iZXIsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICAgICAgdmVyc2lvbk51bWJlclxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb25bXCJlbnRyaWVzXCJdLFxuICAgICAgICAgIHZlcnNpb25OdW1iZXJKU09OID0ganNvbltcInZlcnNpb25OdW1iZXJcIl0sXG4gICAgICAgICAgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oZW50cmllc0pTT04pLFxuICAgICAgICAgIHZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uTnVtYmVySlNPTiwgIC8vL1xuICAgICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgIHByb2plY3RzRGlyZWN0b3J5UGF0aCA9ICcuJyxcbiAgICAgICAgICBsb2FkT25seVJlY29nbmlzZWRGaWxlcyA9IHRydWUsXG4gICAgICAgICAgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9IHRydWUsXG4gICAgICAgICAgZW50cmllcyA9IEVudHJpZXMuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcbiAgICAgICAgICB2ZXJzaW9uTnVtYmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWxlYXNlO1xuIl19