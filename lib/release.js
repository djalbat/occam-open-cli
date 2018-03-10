'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entries = require('./entries');

var Release = function () {
  function Release(entries, packageName) {
    _classCallCheck(this, Release);

    this.entries = entries;
    this.packageName = packageName;
  }

  _createClass(Release, [{
    key: 'getPackageName',
    value: function getPackageName() {
      return this.packageName;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var entriesJSON = this.entries.toJSON(),
          packageName = this.packageName,
          entries = entriesJSON,
          ///
      json = {
        entries: entries,
        packageName: packageName
      };

      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var entriesJSON = json["entries"],
          packageNameJSON = json["entries"],
          entries = Entries.fromJSON(entriesJSON),
          packageName = packageNameJSON,
          ///
      release = new Release(entries, packageName);

      return release;
    }
  }, {
    key: 'fromPackageName',
    value: function fromPackageName(packageName) {
      var release = null;

      try {
        var topmostDirectoryName = packageName,
            ///
        projectsDirectoryPath = '.',
            ///
        doNotLoadHiddenFilesAndDirectories = true,
            entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

        release = new Release(entries, packageName);
      } catch (error) {} ///

      return release;
    }
  }]);

  return Release;
}();

module.exports = Release;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWxlYXNlLmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJyZXF1aXJlIiwiUmVsZWFzZSIsImVudHJpZXMiLCJwYWNrYWdlTmFtZSIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsInBhY2thZ2VOYW1lSlNPTiIsImZyb21KU09OIiwicmVsZWFzZSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjs7SUFFTUMsTztBQUNKLG1CQUFZQyxPQUFaLEVBQXFCQyxXQUFyQixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0EsV0FBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxjQUFjLEtBQUtGLE9BQUwsQ0FBYUcsTUFBYixFQUFwQjtBQUFBLFVBQ01GLGNBQWMsS0FBS0EsV0FEekI7QUFBQSxVQUVNRCxVQUFVRSxXQUZoQjtBQUFBLFVBRThCO0FBQ3hCRSxhQUFPO0FBQ0xKLGlCQUFTQSxPQURKO0FBRUxDLHFCQUFhQTtBQUZSLE9BSGI7O0FBUUEsYUFBT0csSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNRixjQUFjRSxLQUFLLFNBQUwsQ0FBcEI7QUFBQSxVQUNNQyxrQkFBa0JELEtBQUssU0FBTCxDQUR4QjtBQUFBLFVBRU1KLFVBQVVILFFBQVFTLFFBQVIsQ0FBaUJKLFdBQWpCLENBRmhCO0FBQUEsVUFHTUQsY0FBY0ksZUFIcEI7QUFBQSxVQUdzQztBQUNoQ0UsZ0JBQVUsSUFBSVIsT0FBSixDQUFZQyxPQUFaLEVBQXFCQyxXQUFyQixDQUpoQjs7QUFNQSxhQUFPTSxPQUFQO0FBQ0Q7OztvQ0FFc0JOLFcsRUFBYTtBQUNsQyxVQUFJTSxVQUFVLElBQWQ7O0FBRUEsVUFBSTtBQUNGLFlBQU1DLHVCQUF1QlAsV0FBN0I7QUFBQSxZQUEwQztBQUNwQ1EsZ0NBQXdCLEdBRDlCO0FBQUEsWUFDb0M7QUFDOUJDLDZDQUFxQyxJQUYzQztBQUFBLFlBR01WLFVBQVVILFFBQVFjLHdCQUFSLENBQWlDSCxvQkFBakMsRUFBdURDLHFCQUF2RCxFQUE4RUMsa0NBQTlFLENBSGhCOztBQUtBSCxrQkFBVSxJQUFJUixPQUFKLENBQVlDLE9BQVosRUFBcUJDLFdBQXJCLENBQVY7QUFDRCxPQVBELENBT0UsT0FBT1csS0FBUCxFQUFjLENBQUUsQ0FWZ0IsQ0FVZDs7QUFFcEIsYUFBT0wsT0FBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQmYsT0FBakIiLCJmaWxlIjoicmVsZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IoZW50cmllcywgcGFja2FnZU5hbWUpIHtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMucGFja2FnZU5hbWUgPSBwYWNrYWdlTmFtZTtcbiAgfVxuXG4gIGdldFBhY2thZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnBhY2thZ2VOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIHBhY2thZ2VOYW1lID0gdGhpcy5wYWNrYWdlTmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZW50cmllczogZW50cmllcyxcbiAgICAgICAgICAgIHBhY2thZ2VOYW1lOiBwYWNrYWdlTmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXSxcbiAgICAgICAgICBwYWNrYWdlTmFtZUpTT04gPSBqc29uW1wiZW50cmllc1wiXSxcbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihlbnRyaWVzSlNPTiksXG4gICAgICAgICAgcGFja2FnZU5hbWUgPSBwYWNrYWdlTmFtZUpTT04sICAvLy9cbiAgICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UoZW50cmllcywgcGFja2FnZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhY2thZ2VOYW1lKHBhY2thZ2VOYW1lKSB7XG4gICAgbGV0IHJlbGVhc2UgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGFja2FnZU5hbWUsIC8vL1xuICAgICAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoID0gJy4nLCAgLy8vXG4gICAgICAgICAgICBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gdHJ1ZSxcbiAgICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKGVudHJpZXMsIHBhY2thZ2VOYW1lKTtcbiAgICB9IGNhdGNoIChlcnJvcikge30gIC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWxlYXNlO1xuIl19