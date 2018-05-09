'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth;

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
  }], [{
    key: 'asNumber',
    value: function asNumber() {
      var number = this.patchNumber * 1e0 + this.minorNumber * 1e6 + this.majorNumber * 1e12; ///

      return number;
    }
  }, {
    key: 'fromString',
    value: function fromString(string) {
      var matches = string.match(/^(\d+)\.(\d+)\.(\d+)$/),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          majorNumber = secondMatch,
          ///
      minorNumber = thirdMatch,
          ///
      patchNumber = fourthMatch,
          ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiVmVyc2lvbiIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJwYXRjaE51bWJlciIsInN0cmluZyIsIm51bWJlciIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwidmVyc2lvbiIsInZlcnNpb25OdW1iZXIiLCJtYWpvck51bWJlckZyb21OdW1iZXIiLCJtaW5vck51bWJlckZyb21OdW1iZXIiLCJwYXRjaE51bWJlckZyb21OdW1iZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVNLElBQUVDLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxNQURGLEdBQzRCRCxjQUQ1QixDQUNFQyxNQURGO0FBQUEsSUFDVUMsS0FEVixHQUM0QkYsY0FENUIsQ0FDVUUsS0FEVjtBQUFBLElBQ2lCQyxNQURqQixHQUM0QkgsY0FENUIsQ0FDaUJHLE1BRGpCOztJQUdBQyxPO0FBQ0osbUJBQVlDLFdBQVosRUFBeUJDLFdBQXpCLEVBQXNDQyxXQUF0QyxFQUFtRDtBQUFBOztBQUNqRCxTQUFLRixXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtGLFdBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0MsV0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsV0FBS0EsV0FBTCxJQUFvQixDQUFwQixDQURnQixDQUNRO0FBQ3pCOzs7K0JBRVU7QUFDVCxVQUFNQyxTQUFZLEtBQUtILFdBQWpCLFNBQWdDLEtBQUtDLFdBQXJDLFNBQW9ELEtBQUtDLFdBQS9EOztBQUVBLGFBQU9DLE1BQVA7QUFDRDs7OytCQUVpQjtBQUNoQixVQUFNQyxTQUFTLEtBQUtGLFdBQUwsR0FBbUIsR0FBbkIsR0FBeUIsS0FBS0QsV0FBTCxHQUFtQixHQUE1QyxHQUFrRCxLQUFLRCxXQUFMLEdBQW1CLElBQXBGLENBRGdCLENBQzBFOztBQUUxRixhQUFPSSxNQUFQO0FBQ0Q7OzsrQkFFaUJELE0sRUFBUTtBQUN4QixVQUFNRSxVQUFVRixPQUFPRyxLQUFQLENBQWEsdUJBQWIsQ0FBaEI7QUFBQSxVQUNNQyxjQUFjWCxPQUFPUyxPQUFQLENBRHBCO0FBQUEsVUFFTUcsYUFBYVgsTUFBTVEsT0FBTixDQUZuQjtBQUFBLFVBR01JLGNBQWNYLE9BQU9PLE9BQVAsQ0FIcEI7QUFBQSxVQUlNTCxjQUFjTyxXQUpwQjtBQUFBLFVBSWtDO0FBQzVCTixvQkFBY08sVUFMcEI7QUFBQSxVQUtnQztBQUMxQk4sb0JBQWNPLFdBTnBCO0FBQUEsVUFNa0M7QUFDNUJDLGdCQUFVLElBQUlYLE9BQUosQ0FBWUMsV0FBWixFQUF5QkMsV0FBekIsRUFBc0NDLFdBQXRDLENBUGhCOztBQVNBLGFBQU9RLE9BQVA7QUFDRDs7O3NDQUV3QkMsYSxFQUFlO0FBQ3RDLFVBQU1QLFNBQVNPLGFBQWY7QUFBQSxVQUE4QjtBQUN4Qlgsb0JBQWNZLHNCQUFzQlIsTUFBdEIsQ0FEcEI7QUFBQSxVQUVNSCxjQUFjWSxzQkFBc0JULE1BQXRCLENBRnBCO0FBQUEsVUFHTUYsY0FBY1ksc0JBQXNCVixNQUF0QixDQUhwQjtBQUFBLFVBSU1NLFVBQVUsSUFBSVgsT0FBSixDQUFZQyxXQUFaLEVBQXlCQyxXQUF6QixFQUFzQ0MsV0FBdEMsQ0FKaEI7O0FBTUEsYUFBT1EsT0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQmpCLE9BQWpCOztBQUVBLFNBQVNhLHFCQUFULENBQStCUixNQUEvQixFQUF1QztBQUNyQyxNQUFNSixjQUFlSSxXQUFXLElBQVosR0FDRWEsS0FBS0MsS0FBTCxDQUFXZCxTQUFTLElBQXBCLENBREYsR0FFSSxDQUZ4QixDQURxQyxDQUdUOztBQUU1QixTQUFPSixXQUFQO0FBQ0Q7O0FBRUQsU0FBU2EscUJBQVQsQ0FBK0JULE1BQS9CLEVBQXVDO0FBQ3JDLE1BQU1ILGNBQWVHLFdBQVcsSUFBWixHQUNFYSxLQUFLQyxLQUFMLENBQVdkLFNBQVMsR0FBcEIsQ0FERixHQUVJLENBRnhCLENBRHFDLENBR1Q7O0FBRTVCLFNBQU9ILFdBQVA7QUFDRDs7QUFFRCxTQUFTYSxxQkFBVCxDQUErQlYsTUFBL0IsRUFBdUM7QUFDckMsTUFBTUYsY0FBZUUsV0FBVyxJQUFaLEdBQ0VhLEtBQUtDLEtBQUwsQ0FBV2QsU0FBUyxHQUFwQixDQURGLEdBRUksQ0FGeEIsQ0FEcUMsQ0FHVDs7QUFFNUIsU0FBT0YsV0FBUDtBQUNEIiwiZmlsZSI6InZlcnNpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNlY29uZCwgdGhpcmQsIGZvdXJ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnNpb24ge1xuICBjb25zdHJ1Y3RvcihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgICB0aGlzLnBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXI7XG4gIH1cblxuICBnZXRNYWpvck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5tYWpvck51bWJlcjtcbiAgfVxuXG4gIGdldE1pbm9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1pbm9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGF0Y2hOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0Y2hOdW1iZXI7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5wYXRjaE51bWJlciArPSAxOyAgLy8vXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9LiR7dGhpcy5wYXRjaE51bWJlcn1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBhc051bWJlcigpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLnBhdGNoTnVtYmVyICogMWUwICsgdGhpcy5taW5vck51bWJlciAqIDFlNiArIHRoaXMubWFqb3JOdW1iZXIgKiAxZTEyOyAvLy9cblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eKFxcZCspXFwuKFxcZCspXFwuKFxcZCspJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgICBtYWpvck51bWJlciA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSB0aGlyZE1hdGNoLCAvLy9cbiAgICAgICAgICBwYXRjaE51bWJlciA9IGZvdXJ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnNpb25OdW1iZXIodmVyc2lvbk51bWJlcikge1xuICAgIGNvbnN0IG51bWJlciA9IHZlcnNpb25OdW1iZXIsIC8vL1xuICAgICAgICAgIG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVyc2lvbjtcblxuZnVuY3Rpb24gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtYWpvck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWUxMikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1pbm9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyAxZTYpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGF0Y2hOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBwYXRjaE51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWUwKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gcGF0Y2hOdW1iZXI7XG59XG4iXX0=