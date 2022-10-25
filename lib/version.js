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
            key: "bumpMajorNumber",
            value: function bumpMajorNumber() {
                this.majorNumber += 1;
            }
        },
        {
            key: "bumpMinorNumber",
            value: function bumpMinorNumber() {
                this.minorNumber += 1;
            }
        },
        {
            key: "bumpPatchNumber",
            value: function bumpPatchNumber() {
                this.patchNumber += 1;
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
                var number = this.majorNumber * 1e12 + this.minorNumber * 1e6 + this.patchNumber * 1e0; ///
                return number;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var majorNumber = this.majorNumber, minorNumber = this.minorNumber, patchNumber = this.patchNumber, json = {
                    majorNumber: majorNumber,
                    minorNumber: minorNumber,
                    patchNumber: patchNumber
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var majorNumber = json.majorNumber, minorNumber = json.minorNumber, patchNumber = json.patchNumber, version = new Version(majorNumber, minorNumber, patchNumber);
                return version;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcikge1xuICAgIHRoaXMubWFqb3JOdW1iZXIgPSBtYWpvck51bWJlcjtcbiAgICB0aGlzLm1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXI7XG4gICAgdGhpcy5wYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWFqb3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFqb3JOdW1iZXI7XG4gIH1cblxuICBnZXRNaW5vck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5taW5vck51bWJlcjtcbiAgfVxuXG4gIGdldFBhdGNoTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGNoTnVtYmVyO1xuICB9XG5cbiAgYnVtcE1ham9yTnVtYmVyKCkge1xuICAgIHRoaXMubWFqb3JOdW1iZXIgKz0gMTtcbiAgfVxuXG4gIGJ1bXBNaW5vck51bWJlcigpIHtcbiAgICB0aGlzLm1pbm9yTnVtYmVyICs9IDE7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5wYXRjaE51bWJlciArPSAxO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy5tYWpvck51bWJlcn0uJHt0aGlzLm1pbm9yTnVtYmVyfS4ke3RoaXMucGF0Y2hOdW1iZXJ9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhc051bWJlcigpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLm1ham9yTnVtYmVyICogMWUxMiArIHRoaXMubWlub3JOdW1iZXIgKiAxZTYgKyB0aGlzLnBhdGNoTnVtYmVyICogMWUwOyAvLy9cblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSB0aGlzLm1ham9yTnVtYmVyLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gdGhpcy5taW5vck51bWJlcixcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHRoaXMucGF0Y2hOdW1iZXIsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ham9yTnVtYmVyLFxuICAgICAgICAgICAgbWlub3JOdW1iZXIsXG4gICAgICAgICAgICBwYXRjaE51bWJlclxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyIH0gPSBqc29uLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnNpb25OdW1iZXIodmVyc2lvbk51bWJlcikge1xuICAgIGNvbnN0IG51bWJlciA9IHZlcnNpb25OdW1iZXIsIC8vL1xuICAgICAgICAgIG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgbWFqb3JOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMTIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtaW5vck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWU2KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgcGF0Y2hOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtYWpvck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL14oXFxkKylcXC5cXGQrXFwuXFxkKyQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1ham9yTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWlub3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eXFxkK1xcLihcXGQrKVxcLlxcZCskLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtaW5vck51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IHBhdGNoTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC5cXGQrXFwuKFxcZCspJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0Y2hOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuIl0sIm5hbWVzIjpbIlZlcnNpb24iLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJwYXRjaE51bWJlciIsImdldE1ham9yTnVtYmVyIiwiZ2V0TWlub3JOdW1iZXIiLCJnZXRQYXRjaE51bWJlciIsImJ1bXBNYWpvck51bWJlciIsImJ1bXBNaW5vck51bWJlciIsImJ1bXBQYXRjaE51bWJlciIsInRvU3RyaW5nIiwic3RyaW5nIiwiYXNOdW1iZXIiLCJudW1iZXIiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ2ZXJzaW9uIiwiZnJvbVN0cmluZyIsIm1ham9yTnVtYmVyRnJvbVN0cmluZyIsIm1pbm9yTnVtYmVyRnJvbVN0cmluZyIsInBhdGNoTnVtYmVyRnJvbVN0cmluZyIsImZyb21WZXJzaW9uTnVtYmVyIiwidmVyc2lvbk51bWJlciIsIm1ham9yTnVtYmVyRnJvbU51bWJlciIsIm1pbm9yTnVtYmVyRnJvbU51bWJlciIsInBhdGNoTnVtYmVyRnJvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELHdCQW1GbEIsQUFuRlk7YUFBTUEsUUFDUEcsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFdBQVc7OEJBRDlCTDtRQUVqQixJQUFJLENBQUNHLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7aUJBSkZMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7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