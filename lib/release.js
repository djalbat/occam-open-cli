'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entries = require('./entries');

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
      return this.entries.getFiles();
    }
  }, {
    key: 'getDirectories',
    value: function getDirectories() {
      return this.entries.getDirectories();
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
      var topmostDirectoryName = name,
          ///
      projectsDirectoryPath = '.',
          allowOnlyRecognisedFiles = true,
          disallowHiddenFilesAndDirectories = true,
          entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories),
          versionNumber = null,
          ///
      release = new Release(name, entries, versionNumber);

      return release;
    }
  }]);

  return Release;
}();

module.exports = Release;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWxlYXNlLmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJyZXF1aXJlIiwiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwidmVyc2lvbk51bWJlciIsImdldEZpbGVzIiwiZ2V0RGlyZWN0b3JpZXMiLCJlbnRyaWVzSlNPTiIsInRvSlNPTiIsImpzb24iLCJuYW1lSlNPTiIsInZlcnNpb25OdW1iZXJKU09OIiwiZnJvbUpTT04iLCJyZWxlYXNlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMiLCJkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCOztJQUVNQyxPO0FBQ0osbUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxhQUEzQixFQUEwQztBQUFBOztBQUN4QyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0MsYUFBWjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtELE9BQUwsQ0FBYUUsUUFBYixFQUFQO0FBQWlDOzs7cUNBRTdCO0FBQUUsYUFBTyxLQUFLRixPQUFMLENBQWFHLGNBQWIsRUFBUDtBQUF1Qzs7OzZCQUVqRDtBQUNQLFVBQU1DLGNBQWMsS0FBS0osT0FBTCxDQUFhSyxNQUFiLEVBQXBCO0FBQUEsVUFDTU4sT0FBTyxLQUFLQSxJQURsQjtBQUFBLFVBRU1DLFVBQVVJLFdBRmhCO0FBQUEsVUFFOEI7QUFDeEJILHNCQUFnQixLQUFLQSxhQUgzQjtBQUFBLFVBSU1LLE9BQU87QUFDTFAsa0JBREs7QUFFTEMsd0JBRks7QUFHTEM7QUFISyxPQUpiOztBQVVBLGFBQU9LLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUMsV0FBV0QsS0FBSyxNQUFMLENBQWpCO0FBQUEsVUFDTUYsY0FBY0UsS0FBSyxTQUFMLENBRHBCO0FBQUEsVUFFTUUsb0JBQW9CRixLQUFLLGVBQUwsQ0FGMUI7QUFBQSxVQUdNUCxPQUFPUSxRQUhiO0FBQUEsVUFHd0I7QUFDbEJQLGdCQUFVSixRQUFRYSxRQUFSLENBQWlCTCxXQUFqQixDQUpoQjtBQUFBLFVBS01ILGdCQUFnQk8saUJBTHRCO0FBQUEsVUFLMEM7QUFDcENFLGdCQUFVLElBQUlaLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLENBTmhCOztBQVFBLGFBQU9TLE9BQVA7QUFDRDs7OzZCQUVlWCxJLEVBQU07QUFDcEIsVUFBTVksdUJBQXVCWixJQUE3QjtBQUFBLFVBQW1DO0FBQzdCYSw4QkFBd0IsR0FEOUI7QUFBQSxVQUVNQywyQkFBMkIsSUFGakM7QUFBQSxVQUdNQyxvQ0FBb0MsSUFIMUM7QUFBQSxVQUlNZCxVQUFVSixRQUFRbUIsd0JBQVIsQ0FBaUNKLG9CQUFqQyxFQUF1REMscUJBQXZELEVBQThFQyx3QkFBOUUsRUFBd0dDLGlDQUF4RyxDQUpoQjtBQUFBLFVBS01iLGdCQUFnQixJQUx0QjtBQUFBLFVBSzRCO0FBQ3RCUyxnQkFBVSxJQUFJWixPQUFKLENBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxhQUEzQixDQU5oQjs7QUFRQSxhQUFPUyxPQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCbkIsT0FBakIiLCJmaWxlIjoicmVsZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0VmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZXMoKTsgfVxuXG4gIGdldERpcmVjdG9yaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERpcmVjdG9yaWVzKCk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICB2ZXJzaW9uTnVtYmVyID0gdGhpcy52ZXJzaW9uTnVtYmVyLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW50cmllcyxcbiAgICAgICAgICAgIHZlcnNpb25OdW1iZXJcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWVKU09OID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXSxcbiAgICAgICAgICB2ZXJzaW9uTnVtYmVySlNPTiA9IGpzb25bXCJ2ZXJzaW9uTnVtYmVyXCJdLFxuICAgICAgICAgIG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGVudHJpZXNKU09OKSxcbiAgICAgICAgICB2ZXJzaW9uTnVtYmVyID0gdmVyc2lvbk51bWJlckpTT04sICAvLy9cbiAgICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcik7XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICBwcm9qZWN0c0RpcmVjdG9yeVBhdGggPSAnLicsXG4gICAgICAgICAgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzID0gdHJ1ZSxcbiAgICAgICAgICBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSB0cnVlLFxuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBhbGxvd09ubHlSZWNvZ25pc2VkRmlsZXMsIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVsZWFzZTtcbiJdfQ==