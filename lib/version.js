"use strict";

var _necessary = require("necessary");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var second = _necessary.arrayUtilities.second;

var Version = /*#__PURE__*/function () {
  function Version(majorNumber, minorNumber, patchNumber) {
    _classCallCheck(this, Version);

    this.majorNumber = majorNumber;
    this.minorNumber = minorNumber;
    this.patchNumber = patchNumber;
  }

  _createClass(Version, [{
    key: "getMajorNumber",
    value: function getMajorNumber() {
      return this.majorNumber;
    }
  }, {
    key: "getMinorNumber",
    value: function getMinorNumber() {
      return this.minorNumber;
    }
  }, {
    key: "getPatchNumber",
    value: function getPatchNumber() {
      return this.patchNumber;
    }
  }, {
    key: "bumpPatchNumber",
    value: function bumpPatchNumber() {
      this.patchNumber += 1; ///
    }
  }, {
    key: "toString",
    value: function toString() {
      var string = "".concat(this.majorNumber, ".").concat(this.minorNumber, ".").concat(this.patchNumber);
      return string;
    }
  }, {
    key: "asNumber",
    value: function asNumber() {
      var number = this.patchNumber * 1e0 + this.minorNumber * 1e6 + this.majorNumber * 1e12; ///

      return number;
    }
  }], [{
    key: "fromString",
    value: function fromString(string) {
      var majorNumber = majorNumberFromString(string),
          minorNumber = minorNumberFromString(string),
          patchNumber = patchNumberFromString(string),
          version = new Version(majorNumber, minorNumber, patchNumber);
      return version;
    }
  }, {
    key: "fromVersionNumber",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24uanMiXSwibmFtZXMiOlsic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJWZXJzaW9uIiwibWFqb3JOdW1iZXIiLCJtaW5vck51bWJlciIsInBhdGNoTnVtYmVyIiwic3RyaW5nIiwibnVtYmVyIiwibWFqb3JOdW1iZXJGcm9tU3RyaW5nIiwibWlub3JOdW1iZXJGcm9tU3RyaW5nIiwicGF0Y2hOdW1iZXJGcm9tU3RyaW5nIiwidmVyc2lvbiIsInZlcnNpb25OdW1iZXIiLCJtYWpvck51bWJlckZyb21OdW1iZXIiLCJtaW5vck51bWJlckZyb21OdW1iZXIiLCJwYXRjaE51bWJlckZyb21OdW1iZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsImZsb29yIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7OztJQUVRQSxNLEdBQVdDLHlCLENBQVhELE07O0lBRUZFLE87QUFDSixtQkFBWUMsV0FBWixFQUF5QkMsV0FBekIsRUFBc0NDLFdBQXRDLEVBQW1EO0FBQUE7O0FBQ2pELFNBQUtGLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0YsV0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtDLFdBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixXQUFLQSxXQUFMLElBQW9CLENBQXBCLENBRGdCLENBQ1E7QUFDekI7OzsrQkFFVTtBQUNULFVBQU1DLE1BQU0sYUFBTSxLQUFLSCxXQUFYLGNBQTBCLEtBQUtDLFdBQS9CLGNBQThDLEtBQUtDLFdBQW5ELENBQVo7QUFFQSxhQUFPQyxNQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLE1BQU0sR0FBRyxLQUFLRixXQUFMLEdBQW1C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QU1jLE9BQU8sR0FBR2QsTUFBTSxDQUFDZSxLQUFQLENBQWEsbUJBQWIsQ0FBaEI7QUFBQSxRQUNNQyxXQUFXLEdBQUd0QixNQUFNLENBQUNvQixPQUFELENBRDFCO0FBR0FmLElBQUFBLFdBQVcsR0FBR2lCLFdBQWQsQ0FKVSxDQUlrQjtBQUM3Qjs7QUFFRCxTQUFPakIsV0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnNpb24ge1xuICBjb25zdHJ1Y3RvcihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgICB0aGlzLnBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXI7XG4gIH1cblxuICBnZXRNYWpvck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5tYWpvck51bWJlcjtcbiAgfVxuXG4gIGdldE1pbm9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1pbm9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGF0Y2hOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0Y2hOdW1iZXI7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5wYXRjaE51bWJlciArPSAxOyAgLy8vXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9LiR7dGhpcy5wYXRjaE51bWJlcn1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFzTnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMucGF0Y2hOdW1iZXIgKiAxZTAgKyB0aGlzLm1pbm9yTnVtYmVyICogMWU2ICsgdGhpcy5tYWpvck51bWJlciAqIDFlMTI7IC8vL1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uTnVtYmVyKHZlcnNpb25OdW1iZXIpIHtcbiAgICBjb25zdCBudW1iZXIgPSB2ZXJzaW9uTnVtYmVyLCAvLy9cbiAgICAgICAgICBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnNpb247XG5cbmZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgbWFqb3JOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMTIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtaW5vck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWU2KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgcGF0Y2hOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtYWpvck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL14oXFxkKylcXC5cXGQrXFwuXFxkKyQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1ham9yTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWlub3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eXFxkK1xcLihcXGQrKVxcLlxcZCskLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtaW5vck51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IHBhdGNoTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC5cXGQrXFwuKFxcZCspJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0Y2hOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuIl19