"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Version;
    }
});
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
                var number = this.patchNumber * 1e0 + this.minorNumber * 1e6 + this.majorNumber * 1e12; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcikge1xuICAgIHRoaXMubWFqb3JOdW1iZXIgPSBtYWpvck51bWJlcjtcbiAgICB0aGlzLm1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXI7XG4gICAgdGhpcy5wYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWFqb3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFqb3JOdW1iZXI7XG4gIH1cblxuICBnZXRNaW5vck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5taW5vck51bWJlcjtcbiAgfVxuXG4gIGdldFBhdGNoTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGNoTnVtYmVyO1xuICB9XG5cbiAgYnVtcFBhdGNoTnVtYmVyKCkge1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgKz0gMTsgIC8vL1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy5tYWpvck51bWJlcn0uJHt0aGlzLm1pbm9yTnVtYmVyfS4ke3RoaXMucGF0Y2hOdW1iZXJ9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhc051bWJlcigpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLnBhdGNoTnVtYmVyICogMWUwICsgdGhpcy5taW5vck51bWJlciAqIDFlNiArIHRoaXMubWFqb3JOdW1iZXIgKiAxZTEyOyAvLy9cblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVyc2lvbk51bWJlcih2ZXJzaW9uTnVtYmVyKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdmVyc2lvbk51bWJlciwgLy8vXG4gICAgICAgICAgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtYWpvck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWUxMikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1pbm9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyAxZTYpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGF0Y2hOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBwYXRjaE51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWUwKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gcGF0Y2hOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IG1ham9yTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXihcXGQrKVxcLlxcZCtcXC5cXGQrJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgbWFqb3JOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtaW5vck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL15cXGQrXFwuKFxcZCspXFwuXFxkKyQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1pbm9yTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGF0Y2hOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgcGF0Y2hOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eXFxkK1xcLlxcZCtcXC4oXFxkKykkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRjaE51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0Y2hOdW1iZXI7XG59XG4iXSwibmFtZXMiOlsiVmVyc2lvbiIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwibWFqb3JOdW1iZXIiLCJtaW5vck51bWJlciIsInBhdGNoTnVtYmVyIiwiZ2V0TWFqb3JOdW1iZXIiLCJnZXRNaW5vck51bWJlciIsImdldFBhdGNoTnVtYmVyIiwiYnVtcFBhdGNoTnVtYmVyIiwidG9TdHJpbmciLCJzdHJpbmciLCJhc051bWJlciIsIm51bWJlciIsImZyb21TdHJpbmciLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJwYXRjaE51bWJlckZyb21TdHJpbmciLCJ2ZXJzaW9uIiwiZnJvbVZlcnNpb25OdW1iZXIiLCJ2ZXJzaW9uTnVtYmVyIiwibWFqb3JOdW1iZXJGcm9tTnVtYmVyIiwibWlub3JOdW1iZXJGcm9tTnVtYmVyIiwicGF0Y2hOdW1iZXJGcm9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU1RQSxPQUFPOzs7eUJBSkcsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTSxBQUFFQyxNQUFNLEdBQUtDLFVBQWMsZUFBQSxDQUF6QkQsTUFBTSxBQUFtQixBQUFDO0FBRW5CLElBQUEsQUFBTUQsT0FBTyxpQkF1RHpCLEFBdkRZO2FBQU1BLE9BQU8sQ0FDZEcsV0FBVyxFQUFFQyxXQUFXLEVBQUVD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