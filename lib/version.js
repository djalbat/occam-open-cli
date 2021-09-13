"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var second = _necessary.arrayUtilities.second;
var Version = /*#__PURE__*/ function() {
    function Version(majorNumber, minorNumber, patchNumber) {
        _classCallCheck(this, Version);
        this.majorNumber = majorNumber;
        this.minorNumber = minorNumber;
        this.patchNumber = patchNumber;
    }
    _createClass(Version, [
        {
            key: "getMajorNumber",
            value: function getMajorNumber() {
                return this.majorNumber;
            }
        },
        {
            key: "getMinorNumber",
            value: function getMinorNumber() {
                return this.minorNumber;
            }
        },
        {
            key: "getPatchNumber",
            value: function getPatchNumber() {
                return this.patchNumber;
            }
        },
        {
            key: "bumpPatchNumber",
            value: function bumpPatchNumber() {
                this.patchNumber += 1; ///
            }
        },
        {
            key: "toString",
            value: function toString() {
                var string = "".concat(this.majorNumber, ".").concat(this.minorNumber, ".").concat(this.patchNumber);
                return string;
            }
        },
        {
            key: "asNumber",
            value: function asNumber() {
                var number = this.patchNumber * 1 + this.minorNumber * 1000000 + this.majorNumber * 1000000000000; ///
                return number;
            }
        }
    ], [
        {
            key: "fromString",
            value: function fromString(string) {
                var majorNumber = majorNumberFromString(string), minorNumber = minorNumberFromString(string), patchNumber = patchNumberFromString(string), version = new Version(majorNumber, minorNumber, patchNumber);
                return version;
            }
        },
        {
            key: "fromVersionNumber",
            value: function fromVersionNumber(versionNumber) {
                var number = versionNumber, majorNumber = majorNumberFromNumber(number), minorNumber = minorNumberFromNumber(number), patchNumber = patchNumberFromNumber(number), version = new Version(majorNumber, minorNumber, patchNumber);
                return version;
            }
        }
    ]);
    return Version;
}();
exports.default = Version;
function majorNumberFromNumber(number) {
    var majorNumber = number !== null ? Math.floor(number / 1000000000000) : 0; ///
    return majorNumber;
}
function minorNumberFromNumber(number) {
    var minorNumber = number !== null ? Math.floor(number / 1000000) : 0; ///
    return minorNumber;
}
function patchNumberFromNumber(number) {
    var patchNumber = number !== null ? Math.floor(number / 1) : 0; ///
    return patchNumber;
}
function majorNumberFromString(string) {
    var majorNumber = 0;
    if (string) {
        var matches = string.match(/^(\d+)\.\d+\.\d+$/), secondMatch = second(matches);
        majorNumber = secondMatch; ///
    }
    return majorNumber;
}
function minorNumberFromString(string) {
    var minorNumber = 0;
    if (string) {
        var matches = string.match(/^\d+\.(\d+)\.\d+$/), secondMatch = second(matches);
        minorNumber = secondMatch; ///
    }
    return minorNumber;
}
function patchNumberFromString(string) {
    var patchNumber = 0;
    if (string) {
        var matches = string.match(/^\d+\.\d+\.(\d+)$/), secondMatch = second(matches);
        patchNumber = secondMatch; ///
    }
    return patchNumber;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiVmVyc2lvbiIsImNvbnN0cnVjdG9yIiwibWFqb3JOdW1iZXIiLCJtaW5vck51bWJlciIsInBhdGNoTnVtYmVyIiwiZ2V0TWFqb3JOdW1iZXIiLCJnZXRNaW5vck51bWJlciIsImdldFBhdGNoTnVtYmVyIiwiYnVtcFBhdGNoTnVtYmVyIiwidG9TdHJpbmciLCJzdHJpbmciLCJhc051bWJlciIsIm51bWJlciIsImZyb21TdHJpbmciLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJwYXRjaE51bWJlckZyb21TdHJpbmciLCJ2ZXJzaW9uIiwiZnJvbVZlcnNpb25OdW1iZXIiLCJ2ZXJzaW9uTnVtYmVyIiwibWFqb3JOdW1iZXJGcm9tTnVtYmVyIiwibWlub3JOdW1iZXJGcm9tTnVtYmVyIiwicGF0Y2hOdW1iZXJGcm9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxHQUFLLENBQUcsTUFBTSxHQUZpQixVQUFXLGdCQUVsQyxNQUFNO0lBRU8sT0FBTyxpQkFBYixRQUFRO2FBQUYsT0FBTyxDQUNkLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVzs4QkFEOUIsT0FBTztRQUV4QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVzs7aUJBSmIsT0FBTzs7WUFPMUIsR0FBYyxHQUFkLGNBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDekIsQ0FBQzs7O1lBRUQsR0FBYyxHQUFkLGNBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDekIsQ0FBQzs7O1lBRUQsR0FBYyxHQUFkLGNBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDekIsQ0FBQzs7O1lBRUQsR0FBZSxHQUFmLGVBQWU7bUJBQWYsUUFBUSxDQUFSLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFDN0IsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQyxNQUFNLE1BQTBCLE1BQWdCLENBQXBDLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxHQUFzQixNQUFnQixDQUFwQyxJQUFJLENBQUMsV0FBVyxHQUFDLENBQUMsR0FBbUIsTUFBQSxDQUFqQixJQUFJLENBQUMsV0FBVztnQkFFMUUsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQUksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTdGLE1BQU0sQ0FBQyxNQUFNO1lBQ2YsQ0FBQzs7OztZQUVNLEdBQVUsR0FBVixVQUFVO21CQUFqQixRQUFRLENBQUQsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN6QixHQUFLLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sR0FDMUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sR0FDMUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sR0FDMUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXO2dCQUVqRSxNQUFNLENBQUMsT0FBTztZQUNoQixDQUFDOzs7WUFFTSxHQUFpQixHQUFqQixpQkFBaUI7bUJBQXhCLFFBQVEsQ0FBRCxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkMsR0FBSyxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQ3RCLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLEdBQzFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLEdBQzFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLEdBQzFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVztnQkFFakUsTUFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQzs7O1dBcERrQixPQUFPOztrQkFBUCxPQUFPO1NBdURuQixxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUMsV0FBVyxHQUFJLE1BQU0sS0FBSyxJQUFJLEdBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsYUFBSSxJQUN0QixDQUFDLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRS9CLE1BQU0sQ0FBQyxXQUFXO0FBQ3BCLENBQUM7U0FFUSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUMsV0FBVyxHQUFJLE1BQU0sS0FBSyxJQUFJLEdBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBRyxJQUNyQixDQUFDLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRS9CLE1BQU0sQ0FBQyxXQUFXO0FBQ3BCLENBQUM7U0FFUSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUMsV0FBVyxHQUFJLE1BQU0sS0FBSyxJQUFJLEdBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBRyxJQUNyQixDQUFDLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRS9CLE1BQU0sQ0FBQyxXQUFXO0FBQ3BCLENBQUM7U0FFUSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUM7SUFFbkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ1gsR0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyx1QkFDdEIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1FBRWxDLFdBQVcsR0FBRyxXQUFXLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsV0FBVztBQUNwQixDQUFDO1NBRVEscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEMsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBRW5CLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUNYLEdBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssdUJBQ3RCLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTztRQUVsQyxXQUFXLEdBQUcsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVc7QUFDcEIsQ0FBQztTQUVRLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQztJQUVuQixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDWCxHQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLHVCQUN0QixXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU87UUFFbEMsV0FBVyxHQUFHLFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXO0FBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXI7XG4gICAgdGhpcy5taW5vck51bWJlciA9IG1pbm9yTnVtYmVyO1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICBnZXRQYXRjaE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRjaE51bWJlcjtcbiAgfVxuXG4gIGJ1bXBQYXRjaE51bWJlcigpIHtcbiAgICB0aGlzLnBhdGNoTnVtYmVyICs9IDE7ICAvLy9cbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGAke3RoaXMubWFqb3JOdW1iZXJ9LiR7dGhpcy5taW5vck51bWJlcn0uJHt0aGlzLnBhdGNoTnVtYmVyfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgYXNOdW1iZXIoKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdGhpcy5wYXRjaE51bWJlciAqIDFlMCArIHRoaXMubWlub3JOdW1iZXIgKiAxZTYgKyB0aGlzLm1ham9yTnVtYmVyICogMWUxMjsgLy8vXG5cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnNpb25OdW1iZXIodmVyc2lvbk51bWJlcikge1xuICAgIGNvbnN0IG51bWJlciA9IHZlcnNpb25OdW1iZXIsIC8vL1xuICAgICAgICAgIG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgbWFqb3JOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMTIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtaW5vck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWU2KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgcGF0Y2hOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtYWpvck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL14oXFxkKylcXC5cXGQrXFwuXFxkKyQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1ham9yTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWlub3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eXFxkK1xcLihcXGQrKVxcLlxcZCskLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtaW5vck51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IHBhdGNoTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC5cXGQrXFwuKFxcZCspJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0Y2hOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuIl19