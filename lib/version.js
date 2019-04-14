'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var versions = require('./versions');

var arrayUtilities = necessary.arrayUtilities,
    second = arrayUtilities.second,
    CURRENT_VERSION = versions.CURRENT_VERSION;

var Version = function () {
  function Version(majorNumber, minorNumber, patchNumber) {
    _classCallCheck(this, Version);

    this.majorNumber = majorNumber;
    this.minorNumber = minorNumber;
    this.patchNumber = patchNumber;
  }

  _createClass(Version, [{
    key: 'getMajorNumber',
    value: function getMajorNumber() {
      return this.majorNumber;
    }
  }, {
    key: 'getMinorNumber',
    value: function getMinorNumber() {
      return this.minorNumber;
    }
  }, {
    key: 'getPatchNumber',
    value: function getPatchNumber() {
      return this.patchNumber;
    }
  }, {
    key: 'bumpPatchNumber',
    value: function bumpPatchNumber() {
      this.patchNumber += 1; ///
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = this.majorNumber + '.' + this.minorNumber + '.' + this.patchNumber;

      return string;
    }
  }, {
    key: 'asNumber',
    value: function asNumber() {
      var number = this.patchNumber * 1e0 + this.minorNumber * 1e6 + this.majorNumber * 1e12; ///

      return number;
    }
  }], [{
    key: 'getCurrentVersion',
    value: function getCurrentVersion() {
      var currentVersion = CURRENT_VERSION; ///

      return currentVersion;
    }
  }, {
    key: 'fromString',
    value: function fromString(string) {
      var majorNumber = majorNumberFromString(string),
          minorNumber = minorNumberFromString(string),
          patchNumber = patchNumberFromString(string),
          version = new Version(majorNumber, minorNumber, patchNumber);

      return version;
    }
  }, {
    key: 'fromVersionNumber',
    value: function fromVersionNumber(versionNumber) {
      var number = versionNumber,
          ///
      majorNumber = majorNumberFromNumber(number),
          minorNumber = minorNumberFromNumber(number),
          patchNumber = patchNumberFromNumber(number),
          version = new Version(majorNumber, minorNumber, patchNumber);

      return version;
    }
  }]);

  return Version;
}();

module.exports = Version;

function majorNumberFromNumber(number) {
  var majorNumber = number !== null ? Math.floor(number / 1e12) : 0; ///

  return majorNumber;
}

function minorNumberFromNumber(number) {
  var minorNumber = number !== null ? Math.floor(number / 1e6) : 0; ///

  return minorNumber;
}

function patchNumberFromNumber(number) {
  var patchNumber = number !== null ? Math.floor(number / 1e0) : 0; ///

  return patchNumber;
}

function majorNumberFromString(string) {
  var majorNumber = 0;

  if (string) {
    var matches = string.match(/^(\d+)\.\d+\.\d+$/),
        secondMatch = second(matches);

    majorNumber = secondMatch; ///
  }

  return majorNumber;
}

function minorNumberFromString(string) {
  var minorNumber = 0;

  if (string) {
    var matches = string.match(/^\d+\.(\d+)\.\d+$/),
        secondMatch = second(matches);

    minorNumber = secondMatch; ///
  }

  return minorNumber;
}

function patchNumberFromString(string) {
  var patchNumber = 0;

  if (string) {
    var matches = string.match(/^\d+\.\d+\.(\d+)$/),
        secondMatch = second(matches);

    patchNumber = secondMatch; ///
  }

  return patchNumber;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJ2ZXJzaW9ucyIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiQ1VSUkVOVF9WRVJTSU9OIiwiVmVyc2lvbiIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJwYXRjaE51bWJlciIsInN0cmluZyIsIm51bWJlciIsImN1cnJlbnRWZXJzaW9uIiwibWFqb3JOdW1iZXJGcm9tU3RyaW5nIiwibWlub3JOdW1iZXJGcm9tU3RyaW5nIiwicGF0Y2hOdW1iZXJGcm9tU3RyaW5nIiwidmVyc2lvbiIsInZlcnNpb25OdW1iZXIiLCJtYWpvck51bWJlckZyb21OdW1iZXIiLCJtaW5vck51bWJlckZyb21OdW1iZXIiLCJwYXRjaE51bWJlckZyb21OdW1iZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsImZsb29yIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsV0FBV0QsUUFBUSxZQUFSLENBQWpCOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxNQURGLEdBQ2FELGNBRGIsQ0FDRUMsTUFERjtBQUFBLElBRUVDLGVBRkYsR0FFc0JILFFBRnRCLENBRUVHLGVBRkY7O0lBSUFDLE87QUFDSixtQkFBWUMsV0FBWixFQUF5QkMsV0FBekIsRUFBc0NDLFdBQXRDLEVBQW1EO0FBQUE7O0FBQ2pELFNBQUtGLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0YsV0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7OztxQ0FFZ0I7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cUJBQVQsQ0FBK0JMLE1BQS9CLEVBQXVDO0FBQ3JDLE1BQUlELGNBQWMsQ0FBbEI7O0FBRUEsTUFBSUMsTUFBSixFQUFZO0FBQ1YsUUFBTWUsVUFBVWYsT0FBT2dCLEtBQVAsQ0FBYSxtQkFBYixDQUFoQjtBQUFBLFFBQ01DLGNBQWN2QixPQUFPcUIsT0FBUCxDQURwQjs7QUFHQWhCLGtCQUFja0IsV0FBZCxDQUpVLENBSWtCO0FBQzdCOztBQUVELFNBQU9sQixXQUFQO0FBQ0QiLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHZlcnNpb25zID0gcmVxdWlyZSgnLi92ZXJzaW9ucycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IENVUlJFTlRfVkVSU0lPTiB9ID0gdmVyc2lvbnM7XG5cbmNsYXNzIFZlcnNpb24ge1xuICBjb25zdHJ1Y3RvcihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgICB0aGlzLnBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXI7XG4gIH1cblxuICBnZXRNYWpvck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5tYWpvck51bWJlcjtcbiAgfVxuXG4gIGdldE1pbm9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1pbm9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGF0Y2hOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0Y2hOdW1iZXI7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5wYXRjaE51bWJlciArPSAxOyAgLy8vXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9LiR7dGhpcy5wYXRjaE51bWJlcn1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFzTnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMucGF0Y2hOdW1iZXIgKiAxZTAgKyB0aGlzLm1pbm9yTnVtYmVyICogMWU2ICsgdGhpcy5tYWpvck51bWJlciAqIDFlMTI7IC8vL1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRDdXJyZW50VmVyc2lvbigpIHtcbiAgICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IENVUlJFTlRfVkVSU0lPTjsgLy8vXG5cbiAgICByZXR1cm4gY3VycmVudFZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVyc2lvbk51bWJlcih2ZXJzaW9uTnVtYmVyKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdmVyc2lvbk51bWJlciwgLy8vXG4gICAgICAgICAgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJzaW9uO1xuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1ham9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyAxZTEyKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWFqb3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgbWlub3JOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlNikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1pbm9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IHBhdGNoTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyAxZTApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBwYXRjaE51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWFqb3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eKFxcZCspXFwuXFxkK1xcLlxcZCskLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtYWpvck51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWFqb3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIG1pbm9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IG1pbm9yTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC4oXFxkKylcXC5cXGQrJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgbWlub3JOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG1pbm9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwYXRjaE51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBwYXRjaE51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL15cXGQrXFwuXFxkK1xcLihcXGQrKSQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGNoTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRjaE51bWJlcjtcbn1cbiJdfQ==