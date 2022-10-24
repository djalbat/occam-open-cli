"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ShortenedVersion;
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
var ShortenedVersion = /*#__PURE__*/ function() {
    function ShortenedVersion(majorNumber, minorNumber) {
        _classCallCheck(this, ShortenedVersion);
        this.majorNumber = majorNumber;
        this.minorNumber = minorNumber;
    }
    _createClass(ShortenedVersion, [
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
            key: "toString",
            value: function toString() {
                var string = "".concat(this.majorNumber, ".").concat(this.minorNumber);
                return string;
            }
        },
        {
            key: "asNumber",
            value: function asNumber() {
                var number = this.majorNumber * 1e12 + this.minorNumber * 1e6; ///
                return number;
            }
        }
    ], [
        {
            key: "fromString",
            value: function fromString(string) {
                var majorNumber = majorNumberFromString(string), minorNumber = minorNumberFromString(string), shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);
                return shortenedVersion;
            }
        },
        {
            key: "fromVersionNumber",
            value: function fromVersionNumber(versionNumber) {
                var number = versionNumber, majorNumber = majorNumberFromNumber(number), minorNumber = minorNumberFromNumber(number), shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);
                return shortenedVersion;
            }
        }
    ]);
    return ShortenedVersion;
}();
function majorNumberFromNumber(number) {
    var majorNumber = number !== null ? Math.floor(number / 1e12) : 0; ///
    return majorNumber;
}
function minorNumberFromNumber(number) {
    var minorNumber = number !== null ? Math.floor(number / 1e6) : 0; ///
    return minorNumber;
}
function majorNumberFromString(string) {
    var majorNumber = 0;
    if (string) {
        var matches = string.match(/^(\d+)\.\d+$/), secondMatch = second(matches);
        majorNumber = secondMatch; ///
    }
    return majorNumber;
}
function minorNumberFromString(string) {
    var minorNumber = 0;
    if (string) {
        var matches = string.match(/^\d+\.(\d+)$/), secondMatch = second(matches);
        minorNumber = secondMatch; ///
    }
    return minorNumber;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaG9ydGVuZWRWZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydGVuZWRWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhc051bWJlcigpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLm1ham9yTnVtYmVyICogMWUxMiArIHRoaXMubWlub3JOdW1iZXIgKiAxZTY7IC8vL1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gbmV3IFNob3J0ZW5lZFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKTtcblxuICAgIHJldHVybiBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uTnVtYmVyKHZlcnNpb25OdW1iZXIpIHtcbiAgICBjb25zdCBudW1iZXIgPSB2ZXJzaW9uTnVtYmVyLCAvLy9cbiAgICAgICAgICBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IG5ldyBTaG9ydGVuZWRWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlcik7XG5cbiAgICByZXR1cm4gc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1ham9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyAxZTEyKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWFqb3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgbWlub3JOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlNikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1pbm9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtYWpvck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL14oXFxkKylcXC5cXGQrJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgbWFqb3JOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtaW5vck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL15cXGQrXFwuKFxcZCspJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgbWlub3JOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG1pbm9yTnVtYmVyO1xufVxuIl0sIm5hbWVzIjpbIlNob3J0ZW5lZFZlcnNpb24iLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJnZXRNYWpvck51bWJlciIsImdldE1pbm9yTnVtYmVyIiwidG9TdHJpbmciLCJzdHJpbmciLCJhc051bWJlciIsIm51bWJlciIsImZyb21TdHJpbmciLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJzaG9ydGVuZWRWZXJzaW9uIiwiZnJvbVZlcnNpb25OdW1iZXIiLCJ2ZXJzaW9uTnVtYmVyIiwibWFqb3JOdW1iZXJGcm9tTnVtYmVyIiwibWlub3JOdW1iZXJGcm9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLElBQUEsQUFBTUQsaUNBNENsQixBQTVDWTthQUFNQSxpQkFDUEcsV0FBVyxFQUFFQyxXQUFXOzhCQURqQko7UUFFakIsSUFBSSxDQUFDRyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7aUJBSEZKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxTQUFTLEFBQUMsR0FBc0IsT0FBcEIsSUFBSSxDQUFDTCxXQUFXLEVBQUMsS0FBb0IsT0FBakIsSUFBSSxDQUFDQyxXQUFXO2dCQUV0RCxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsU0FBUyxJQUFJLENBQUNQLFdBQVcsR0FBRyxPQUFPLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEtBQUssR0FBRztnQkFFcEUsT0FBT007WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxXQUFXSCxNQUFNLEVBQUU7Z0JBQ3hCLElBQU1MLGNBQWNTLHNCQUFzQkosU0FDcENKLGNBQWNTLHNCQUFzQkwsU0FDcENNLG1CQUFtQixJQTdCUmQsaUJBNkI2QkcsYUFBYUM7Z0JBRTNELE9BQU9VO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRTtnQkFDdEMsSUFBTU4sU0FBU00sZUFDVGIsY0FBY2Msc0JBQXNCUCxTQUNwQ04sY0FBY2Msc0JBQXNCUixTQUNwQ0ksbUJBQW1CLElBdENSZCxpQkFzQzZCRyxhQUFhQztnQkFFM0QsT0FBT1U7WUFDVDs7O1dBekNtQmQ7O0FBNENyQixTQUFTaUIsc0JBQXNCUCxNQUFNLEVBQUU7SUFDckMsSUFBTVAsY0FBYyxBQUFDTyxXQUFXLElBQUksR0FDZFMsS0FBS0MsS0FBSyxDQUFDVixTQUFTLFFBQ2xCLENBQUMsRUFBRyxHQUFHO0lBRS9CLE9BQU9QO0FBQ1Q7QUFFQSxTQUFTZSxzQkFBc0JSLE1BQU0sRUFBRTtJQUNyQyxJQUFNTixjQUFjLEFBQUNNLFdBQVcsSUFBSSxHQUNkUyxLQUFLQyxLQUFLLENBQUNWLFNBQVMsT0FDbEIsQ0FBQyxFQUFHLEdBQUc7SUFFL0IsT0FBT047QUFDVDtBQUVBLFNBQVNRLHNCQUFzQkosTUFBTSxFQUFFO0lBQ3JDLElBQUlMLGNBQWM7SUFFbEIsSUFBSUssUUFBUTtRQUNWLElBQU1hLFVBQVViLE9BQU9jLEtBQUssQ0FBQyxpQkFDdkJDLGNBQWN0QixPQUFPb0I7UUFFM0JsQixjQUFjb0IsYUFBYyxHQUFHO0lBQ2pDLENBQUM7SUFFRCxPQUFPcEI7QUFDVDtBQUVBLFNBQVNVLHNCQUFzQkwsTUFBTSxFQUFFO0lBQ3JDLElBQUlKLGNBQWM7SUFFbEIsSUFBSUksUUFBUTtRQUNWLElBQU1hLFVBQVViLE9BQU9jLEtBQUssQ0FBQyxpQkFDdkJDLGNBQWN0QixPQUFPb0I7UUFFM0JqQixjQUFjbUIsYUFBYyxHQUFHO0lBQ2pDLENBQUM7SUFFRCxPQUFPbkI7QUFDVCJ9