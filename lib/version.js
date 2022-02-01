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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcikge1xuICAgIHRoaXMubWFqb3JOdW1iZXIgPSBtYWpvck51bWJlcjtcbiAgICB0aGlzLm1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXI7XG4gICAgdGhpcy5wYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWFqb3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFqb3JOdW1iZXI7XG4gIH1cblxuICBnZXRNaW5vck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5taW5vck51bWJlcjtcbiAgfVxuXG4gIGdldFBhdGNoTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGNoTnVtYmVyO1xuICB9XG5cbiAgYnVtcFBhdGNoTnVtYmVyKCkge1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgKz0gMTsgIC8vL1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy5tYWpvck51bWJlcn0uJHt0aGlzLm1pbm9yTnVtYmVyfS4ke3RoaXMucGF0Y2hOdW1iZXJ9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhc051bWJlcigpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLnBhdGNoTnVtYmVyICogMWUwICsgdGhpcy5taW5vck51bWJlciAqIDFlNiArIHRoaXMubWFqb3JOdW1iZXIgKiAxZTEyOyAvLy9cblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVyc2lvbk51bWJlcih2ZXJzaW9uTnVtYmVyKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdmVyc2lvbk51bWJlciwgLy8vXG4gICAgICAgICAgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtYWpvck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWUxMikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1pbm9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyAxZTYpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGF0Y2hOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBwYXRjaE51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWUwKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gcGF0Y2hOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IG1ham9yTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXihcXGQrKVxcLlxcZCtcXC5cXGQrJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgbWFqb3JOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtaW5vck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL15cXGQrXFwuKFxcZCspXFwuXFxkKyQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1pbm9yTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGF0Y2hOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgcGF0Y2hOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eXFxkK1xcLlxcZCtcXC4oXFxkKykkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRjaE51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0Y2hOdW1iZXI7XG59XG4iXSwibmFtZXMiOlsic2Vjb25kIiwiVmVyc2lvbiIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJwYXRjaE51bWJlciIsImdldE1ham9yTnVtYmVyIiwiZ2V0TWlub3JOdW1iZXIiLCJnZXRQYXRjaE51bWJlciIsImJ1bXBQYXRjaE51bWJlciIsInRvU3RyaW5nIiwic3RyaW5nIiwiYXNOdW1iZXIiLCJudW1iZXIiLCJmcm9tU3RyaW5nIiwibWFqb3JOdW1iZXJGcm9tU3RyaW5nIiwibWlub3JOdW1iZXJGcm9tU3RyaW5nIiwicGF0Y2hOdW1iZXJGcm9tU3RyaW5nIiwidmVyc2lvbiIsImZyb21WZXJzaW9uTnVtYmVyIiwidmVyc2lvbk51bWJlciIsIm1ham9yTnVtYmVyRnJvbU51bWJlciIsIm1pbm9yTnVtYmVyRnJvbU51bWJlciIsInBhdGNoTnVtYmVyRnJvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsR0FBSyxDQUFHQSxNQUFNLEdBRmlCLFVBQVcsZ0JBRWxDQSxNQUFNO0lBRU9DLE9BQU8saUJBQWIsUUFBUTthQUFGQSxPQUFPLENBQ2RDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxXQUFXOztRQUMvQyxJQUFJLENBQUNGLFdBQVcsR0FBR0EsV0FBVztRQUM5QixJQUFJLENBQUND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