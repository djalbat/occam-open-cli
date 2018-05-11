'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    second = arrayUtilities.second;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsIlZlcnNpb24iLCJtYWpvck51bWJlciIsIm1pbm9yTnVtYmVyIiwicGF0Y2hOdW1iZXIiLCJzdHJpbmciLCJudW1iZXIiLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJwYXRjaE51bWJlckZyb21TdHJpbmciLCJ2ZXJzaW9uIiwidmVyc2lvbk51bWJlciIsIm1ham9yTnVtYmVyRnJvbU51bWJlciIsIm1pbm9yTnVtYmVyRnJvbU51bWJlciIsInBhdGNoTnVtYmVyRnJvbU51bWJlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJNYXRoIiwiZmxvb3IiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsTUFERixHQUNhRCxjQURiLENBQ0VDLE1BREY7O0lBR0FDLE87QUFDSixtQkFBWUMsV0FBWixFQUF5QkMsV0FBekIsRUFBc0NDLFdBQXRDLEVBQW1EO0FBQUE7O0FBQ2pELFNBQUtGLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0YsV0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtDLFdBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixXQUFLQSxXQUFMLElBQW9CLENBQXBCLENBRGdCLENBQ1E7QUFDekI7OzsrQkFFVTtBQUNULFVBQU1DLFNBQVksS0FBS0gsV0FBakIsU0FB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RCxTQUFPakIsV0FBUDtBQUNEIiwiZmlsZSI6InZlcnNpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnNpb24ge1xuICBjb25zdHJ1Y3RvcihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgICB0aGlzLnBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXI7XG4gIH1cblxuICBnZXRNYWpvck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5tYWpvck51bWJlcjtcbiAgfVxuXG4gIGdldE1pbm9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1pbm9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGF0Y2hOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0Y2hOdW1iZXI7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5wYXRjaE51bWJlciArPSAxOyAgLy8vXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9LiR7dGhpcy5wYXRjaE51bWJlcn1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFzTnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMucGF0Y2hOdW1iZXIgKiAxZTAgKyB0aGlzLm1pbm9yTnVtYmVyICogMWU2ICsgdGhpcy5tYWpvck51bWJlciAqIDFlMTI7IC8vL1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uTnVtYmVyKHZlcnNpb25OdW1iZXIpIHtcbiAgICBjb25zdCBudW1iZXIgPSB2ZXJzaW9uTnVtYmVyLCAvLy9cbiAgICAgICAgICBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnNpb247XG5cbmZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgbWFqb3JOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMTIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtaW5vck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWU2KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgcGF0Y2hOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtYWpvck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL14oXFxkKylcXC5cXGQrXFwuXFxkKyQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1ham9yTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWlub3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eXFxkK1xcLihcXGQrKVxcLlxcZCskLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtaW5vck51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IHBhdGNoTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC5cXGQrXFwuKFxcZCspJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0Y2hOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuIl19