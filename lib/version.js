'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    second = arrayUtilities.second;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24uanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiVmVyc2lvbiIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJwYXRjaE51bWJlciIsInN0cmluZyIsIm51bWJlciIsIm1ham9yTnVtYmVyRnJvbVN0cmluZyIsIm1pbm9yTnVtYmVyRnJvbVN0cmluZyIsInBhdGNoTnVtYmVyRnJvbVN0cmluZyIsInZlcnNpb24iLCJ2ZXJzaW9uTnVtYmVyIiwibWFqb3JOdW1iZXJGcm9tTnVtYmVyIiwibWlub3JOdW1iZXJGcm9tTnVtYmVyIiwicGF0Y2hOdW1iZXJGcm9tTnVtYmVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIk1hdGgiLCJmbG9vciIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXpCOztBQUVNLElBQUVDLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxNQURGLEdBQ2FELGNBRGIsQ0FDRUMsTUFERjs7SUFHQUMsTztBQUNKLG1CQUFZQyxXQUFaLEVBQXlCQyxXQUF6QixFQUFzQ0MsV0FBdEMsRUFBbUQ7QUFBQTs7QUFDakQsU0FBS0YsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLRixXQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtDLFdBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0MsV0FBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFdBQUtBLFdBQUwsSUFBb0IsQ0FBcEIsQ0FEZ0IsQ0FDUTtBQUN6Qjs7OytCQUVVO0FBQ1QsVUFBTUMsTUFBTSxhQUFNLEtBQUtI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RCxTQUFPbEIsV0FBUDtBQUNEOztBQUVELFNBQVNNLHFCQUFULENBQStCSixNQUEvQixFQUF1QztBQUNyQyxNQUFJRCxXQUFXLEdBQUcsQ0FBbEI7O0FBRUEsTUFBSUMsTUFBSixFQUFZO0FBQ1YsUUFBTWMsT0FBTyxHQUFHZCxNQUFNLENBQUNlLEtBQVAsQ0FBYSxtQkFBYixDQUFoQjtBQUFBLFFBQ01DLFdBQVcsR0FBR3JCLE1BQU0sQ0FBQ21CLE9BQUQsQ0FEMUI7QUFHQWYsSUFBQUEsV0FBVyxHQUFHaUIsV0FBZCxDQUpVLENBSWtCO0FBQzdCOztBQUVELFNBQU9qQixXQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnNpb24ge1xuICBjb25zdHJ1Y3RvcihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgICB0aGlzLnBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXI7XG4gIH1cblxuICBnZXRNYWpvck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5tYWpvck51bWJlcjtcbiAgfVxuXG4gIGdldE1pbm9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1pbm9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGF0Y2hOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0Y2hOdW1iZXI7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5wYXRjaE51bWJlciArPSAxOyAgLy8vXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9LiR7dGhpcy5wYXRjaE51bWJlcn1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFzTnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMucGF0Y2hOdW1iZXIgKiAxZTAgKyB0aGlzLm1pbm9yTnVtYmVyICogMWU2ICsgdGhpcy5tYWpvck51bWJlciAqIDFlMTI7IC8vL1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uTnVtYmVyKHZlcnNpb25OdW1iZXIpIHtcbiAgICBjb25zdCBudW1iZXIgPSB2ZXJzaW9uTnVtYmVyLCAvLy9cbiAgICAgICAgICBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnNpb247XG5cbmZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgbWFqb3JOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMTIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtaW5vck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWU2KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgcGF0Y2hOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtYWpvck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL14oXFxkKylcXC5cXGQrXFwuXFxkKyQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1ham9yTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWlub3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eXFxkK1xcLihcXGQrKVxcLlxcZCskLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtaW5vck51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IHBhdGNoTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC5cXGQrXFwuKFxcZCspJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0Y2hOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuIl19