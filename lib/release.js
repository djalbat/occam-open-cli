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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWxlYXNlLmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJyZXF1aXJlIiwiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwidmVyc2lvbk51bWJlciIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwidmVyc2lvbk51bWJlckpTT04iLCJmcm9tSlNPTiIsInJlbGVhc2UiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFsbG93T25seVJlY29nbmlzZWRGaWxlcyIsImRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjs7SUFFTUMsTztBQUNKLG1CQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsRUFBMEM7QUFBQTs7QUFDeEMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtDLGFBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsY0FBYyxLQUFLRixPQUFMLENBQWFHLE1BQWIsRUFBcEI7QUFBQSxVQUNNSixPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTUMsVUFBVUUsV0FGaEI7QUFBQSxVQUU4QjtBQUN4QkQsc0JBQWdCLEtBQUtBLGFBSDNCO0FBQUEsVUFJTUcsT0FBTztBQUNMTCxjQUFNQSxJQUREO0FBRUxDLGlCQUFTQSxPQUZKO0FBR0xDLHVCQUFlQTtBQUhWLE9BSmI7O0FBVUEsYUFBT0csSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNQyxXQUFXRCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNRixjQUFjRSxLQUFLLFNBQUwsQ0FEcEI7QUFBQSxVQUVNRSxvQkFBb0JGLEtBQUssZUFBTCxDQUYxQjtBQUFBLFVBR01MLE9BQU9NLFFBSGI7QUFBQSxVQUd3QjtBQUNsQkwsZ0JBQVVKLFFBQVFXLFFBQVIsQ0FBaUJMLFdBQWpCLENBSmhCO0FBQUEsVUFLTUQsZ0JBQWdCSyxpQkFMdEI7QUFBQSxVQUswQztBQUNwQ0UsZ0JBQVUsSUFBSVYsT0FBSixDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsQ0FOaEI7O0FBUUEsYUFBT08sT0FBUDtBQUNEOzs7NkJBRWVULEksRUFBTTtBQUNwQixVQUFJUyxVQUFVLElBQWQ7O0FBRUEsVUFBSTtBQUNGLFlBQU1DLHVCQUF1QlYsSUFBN0I7QUFBQSxZQUFtQztBQUM3QlcsZ0NBQXdCLEdBRDlCO0FBQUEsWUFFTUMsMkJBQTJCLElBRmpDO0FBQUEsWUFHTUMsb0NBQW9DLElBSDFDO0FBQUEsWUFJTVosVUFBVUosUUFBUWlCLHdCQUFSLENBQWlDSixvQkFBakMsRUFBdURDLHFCQUF2RCxFQUE4RUMsd0JBQTlFLEVBQXdHQyxpQ0FBeEcsQ0FKaEI7QUFBQSxZQUtNWCxnQkFBZ0IsSUFMdEIsQ0FERSxDQU0wQjs7QUFFNUJPLGtCQUFVLElBQUlWLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLENBQVY7QUFDRCxPQVRELENBU0UsT0FBT2EsS0FBUCxFQUFjLENBQUUsQ0FaRSxDQVlBOztBQUVwQixhQUFPTixPQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCbEIsT0FBakIiLCJmaWxlIjoicmVsZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0VmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHRoaXMudmVyc2lvbk51bWJlcixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXM6IGVudHJpZXMsXG4gICAgICAgICAgICB2ZXJzaW9uTnVtYmVyOiB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lSlNPTiA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGVudHJpZXNKU09OID0ganNvbltcImVudHJpZXNcIl0sXG4gICAgICAgICAgdmVyc2lvbk51bWJlckpTT04gPSBqc29uW1widmVyc2lvbk51bWJlclwiXSxcbiAgICAgICAgICBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihlbnRyaWVzSlNPTiksXG4gICAgICAgICAgdmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXJKU09OLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGxldCByZWxlYXNlID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoID0gJy4nLFxuICAgICAgICAgICAgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzID0gdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9IHRydWUsXG4gICAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgYWxsb3dPbmx5UmVjb2duaXNlZEZpbGVzLCBkaXNhbGxvd0hpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgICAgdmVyc2lvbk51bWJlciA9IG51bGw7IC8vL1xuXG4gICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9ICAvLy9cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVsZWFzZTtcbiJdfQ==