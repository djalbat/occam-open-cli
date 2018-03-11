'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entries = require('./entries');

var Release = function () {
  function Release(entries, name) {
    _classCallCheck(this, Release);

    this.name = name;
    this.entries = entries;
  }

  _createClass(Release, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var entriesJSON = this.entries.toJSON(),
          name = this.name,
          entries = entriesJSON,
          ///
      json = {
        name: name,
        entries: entries
      };

      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var nameJSON = json["name"],
          entriesJSON = json["entries"],
          name = nameJSON,
          ///
      entries = Entries.fromJSON(entriesJSON),
          release = new Release(name, entries);

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
            ///
        doNotLoadHiddenFilesAndDirectories = true,
            entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

        release = new Release(name, entries);
      } catch (error) {} ///

      return release;
    }
  }]);

  return Release;
}();

module.exports = Release;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWxlYXNlLmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJyZXF1aXJlIiwiUmVsZWFzZSIsImVudHJpZXMiLCJuYW1lIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwibmFtZUpTT04iLCJmcm9tSlNPTiIsInJlbGVhc2UiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7O0lBRU1DLE87QUFDSixtQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsY0FBYyxLQUFLRixPQUFMLENBQWFHLE1BQWIsRUFBcEI7QUFBQSxVQUNNRixPQUFPLEtBQUtBLElBRGxCO0FBQUEsVUFFTUQsVUFBVUUsV0FGaEI7QUFBQSxVQUU4QjtBQUN4QkUsYUFBTztBQUNMSCxjQUFNQSxJQUREO0FBRUxELGlCQUFTQTtBQUZKLE9BSGI7O0FBUUEsYUFBT0ksSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNQyxXQUFXRCxLQUFLLE1BQUwsQ0FBakI7QUFBQSxVQUNNRixjQUFjRSxLQUFLLFNBQUwsQ0FEcEI7QUFBQSxVQUVNSCxPQUFPSSxRQUZiO0FBQUEsVUFFd0I7QUFDbEJMLGdCQUFVSCxRQUFRUyxRQUFSLENBQWlCSixXQUFqQixDQUhoQjtBQUFBLFVBSU1LLFVBQVUsSUFBSVIsT0FBSixDQUFZRSxJQUFaLEVBQWtCRCxPQUFsQixDQUpoQjs7QUFNQSxhQUFPTyxPQUFQO0FBQ0Q7Ozs2QkFFZU4sSSxFQUFNO0FBQ3BCLFVBQUlNLFVBQVUsSUFBZDs7QUFFQSxVQUFJO0FBQ0YsWUFBTUMsdUJBQXVCUCxJQUE3QjtBQUFBLFlBQW1DO0FBQzdCUSxnQ0FBd0IsR0FEOUI7QUFBQSxZQUNvQztBQUM5QkMsNkNBQXFDLElBRjNDO0FBQUEsWUFHTVYsVUFBVUgsUUFBUWMsd0JBQVIsQ0FBaUNILG9CQUFqQyxFQUF1REMscUJBQXZELEVBQThFQyxrQ0FBOUUsQ0FIaEI7O0FBS0FILGtCQUFVLElBQUlSLE9BQUosQ0FBWUUsSUFBWixFQUFrQkQsT0FBbEIsQ0FBVjtBQUNELE9BUEQsQ0FPRSxPQUFPWSxLQUFQLEVBQWMsQ0FBRSxDQVZFLENBVUE7O0FBRXBCLGFBQU9MLE9BQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJmLE9BQWpCIiwiZmlsZSI6InJlbGVhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKTtcblxuY2xhc3MgUmVsZWFzZSB7XG4gIGNvbnN0cnVjdG9yKGVudHJpZXMsIG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXM6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWVKU09OID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXSxcbiAgICAgICAgICBuYW1lID0gbmFtZUpTT04sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihlbnRyaWVzSlNPTiksXG4gICAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGxldCByZWxlYXNlID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgcHJvamVjdHNEaXJlY3RvcnlQYXRoID0gJy4nLCAgLy8vXG4gICAgICAgICAgICBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gdHJ1ZSxcbiAgICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fSAgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbGVhc2U7XG4iXX0=