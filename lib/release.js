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
            doNotLoadHiddenFilesAndDirectories = true,
            entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories),
            versionNumber = null; ///

        release = new Release(name, entries, versionNumber);
      } catch (error) {} ///

      return release;
    }
  }]);

  return Release;
}();

module.exports = Release;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWxlYXNlLmpzIl0sIm5hbWVzIjpbIkVudHJpZXMiLCJyZXF1aXJlIiwiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwidmVyc2lvbk51bWJlciIsImVudHJpZXNKU09OIiwidG9KU09OIiwianNvbiIsIm5hbWVKU09OIiwidmVyc2lvbk51bWJlckpTT04iLCJmcm9tSlNPTiIsInJlbGVhc2UiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJmcm9tVG9wbW9zdERpcmVjdG9yeU5hbWUiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7O0lBRU1DLE87QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLEVBQTBDO0FBQUE7O0FBQ3hDLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQyxhQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLGNBQWMsS0FBS0YsT0FBTCxDQUFhRyxNQUFiLEVBQXBCO0FBQUEsVUFDTUosT0FBTyxLQUFLQSxJQURsQjtBQUFBLFVBRU1DLFVBQVVFLFdBRmhCO0FBQUEsVUFFOEI7QUFDeEJELHNCQUFnQixLQUFLQSxhQUgzQjtBQUFBLFVBSU1HLE9BQU87QUFDTEwsY0FBTUEsSUFERDtBQUVMQyxpQkFBU0EsT0FGSjtBQUdMQyx1QkFBZUE7QUFIVixPQUpiOztBQVVBLGFBQU9HLElBQVA7QUFDRDs7OzZCQUVlQSxJLEVBQU07QUFDcEIsVUFBTUMsV0FBV0QsS0FBSyxNQUFMLENBQWpCO0FBQUEsVUFDTUYsY0FBY0UsS0FBSyxTQUFMLENBRHBCO0FBQUEsVUFFTUUsb0JBQW9CRixLQUFLLGVBQUwsQ0FGMUI7QUFBQSxVQUdNTCxPQUFPTSxRQUhiO0FBQUEsVUFHd0I7QUFDbEJMLGdCQUFVSixRQUFRVyxRQUFSLENBQWlCTCxXQUFqQixDQUpoQjtBQUFBLFVBS01ELGdCQUFnQkssaUJBTHRCO0FBQUEsVUFLMEM7QUFDcENFLGdCQUFVLElBQUlWLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLGFBQTNCLENBTmhCOztBQVFBLGFBQU9PLE9BQVA7QUFDRDs7OzZCQUVlVCxJLEVBQU07QUFDcEIsVUFBSVMsVUFBVSxJQUFkOztBQUVBLFVBQUk7QUFDRixZQUFNQyx1QkFBdUJWLElBQTdCO0FBQUEsWUFBbUM7QUFDN0JXLGdDQUF3QixHQUQ5QjtBQUFBLFlBRU1DLHFDQUFxQyxJQUYzQztBQUFBLFlBR01YLFVBQVVKLFFBQVFnQix3QkFBUixDQUFpQ0gsb0JBQWpDLEVBQXVEQyxxQkFBdkQsRUFBOEVDLGtDQUE5RSxDQUhoQjtBQUFBLFlBSU1WLGdCQUFnQixJQUp0QixDQURFLENBSzBCOztBQUU1Qk8sa0JBQVUsSUFBSVYsT0FBSixDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsYUFBM0IsQ0FBVjtBQUNELE9BUkQsQ0FRRSxPQUFPWSxLQUFQLEVBQWMsQ0FBRSxDQVhFLENBV0E7O0FBRXBCLGFBQU9MLE9BQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJqQixPQUFqQiIsImZpbGUiOiJyZWxlYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyk7XG5cbmNsYXNzIFJlbGVhc2Uge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uTnVtYmVyKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMudmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXI7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRWZXJzaW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb25OdW1iZXI7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICB2ZXJzaW9uTnVtYmVyID0gdGhpcy52ZXJzaW9uTnVtYmVyLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZW50cmllczogZW50cmllcyxcbiAgICAgICAgICAgIHZlcnNpb25OdW1iZXI6IHZlcnNpb25OdW1iZXJcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWVKU09OID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uW1wiZW50cmllc1wiXSxcbiAgICAgICAgICB2ZXJzaW9uTnVtYmVySlNPTiA9IGpzb25bXCJ2ZXJzaW9uTnVtYmVyXCJdLFxuICAgICAgICAgIG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGVudHJpZXNKU09OKSxcbiAgICAgICAgICB2ZXJzaW9uTnVtYmVyID0gdmVyc2lvbk51bWJlckpTT04sICAvLy9cbiAgICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbk51bWJlcik7XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgbGV0IHJlbGVhc2UgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgICBwcm9qZWN0c0RpcmVjdG9yeVBhdGggPSAnLicsXG4gICAgICAgICAgICBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gdHJ1ZSxcbiAgICAgICAgICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcbiAgICAgICAgICAgIHZlcnNpb25OdW1iZXIgPSBudWxsOyAvLy9cblxuICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb25OdW1iZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fSAgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbGVhc2U7XG4iXX0=