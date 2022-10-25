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
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var majorNumber = this.majorNumber, minorNumber = this.minorNumber, json = {
                    majorNumber: majorNumber,
                    minorNumber: minorNumber
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var majorNumber = json.majorNumber, minorNumber = json.minorNumber, shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);
                return shortenedVersion;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaG9ydGVuZWRWZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydGVuZWRWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhc051bWJlcigpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLm1ham9yTnVtYmVyICogMWUxMiArIHRoaXMubWlub3JOdW1iZXIgKiAxZTY7IC8vL1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IHRoaXMubWFqb3JOdW1iZXIsXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSB0aGlzLm1pbm9yTnVtYmVyLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtYWpvck51bWJlcixcbiAgICAgICAgICAgIG1pbm9yTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG1ham9yTnVtYmVyLCBtaW5vck51bWJlciB9ID0ganNvbixcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gbmV3IFNob3J0ZW5lZFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKTtcblxuICAgIHJldHVybiBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBuZXcgU2hvcnRlbmVkVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHNob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnNpb25OdW1iZXIodmVyc2lvbk51bWJlcikge1xuICAgIGNvbnN0IG51bWJlciA9IHZlcnNpb25OdW1iZXIsIC8vL1xuICAgICAgICAgIG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gbmV3IFNob3J0ZW5lZFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKTtcblxuICAgIHJldHVybiBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgbWFqb3JOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIDFlMTIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtaW5vck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gMWU2KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IG1ham9yTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXihcXGQrKVxcLlxcZCskLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtYWpvck51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWFqb3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIG1pbm9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IG1pbm9yTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC4oXFxkKykkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtaW5vck51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG4iXSwibmFtZXMiOlsiU2hvcnRlbmVkVmVyc2lvbiIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwibWFqb3JOdW1iZXIiLCJtaW5vck51bWJlciIsImdldE1ham9yTnVtYmVyIiwiZ2V0TWlub3JOdW1iZXIiLCJ0b1N0cmluZyIsInN0cmluZyIsImFzTnVtYmVyIiwibnVtYmVyIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwic2hvcnRlbmVkVmVyc2lvbiIsImZyb21TdHJpbmciLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJmcm9tVmVyc2lvbk51bWJlciIsInZlcnNpb25OdW1iZXIiLCJtYWpvck51bWJlckZyb21OdW1iZXIiLCJtaW5vck51bWJlckZyb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCxpQ0E4RGxCLEFBOURZO2FBQU1BLGlCQUNQRyxXQUFXLEVBQUVDLFdBQVc7OEJBRGpCSjtRQUVqQixJQUFJLENBQUNHLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztpQkFIRko7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQU1DLFNBQVMsQUFBQyxHQUFzQixPQUFwQixJQUFJLENBQUNMLFdBQVcsRUFBQyxLQUFvQixPQUFqQixJQUFJLENBQUNDLFdBQVc7Z0JBRXRELE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxTQUFTLElBQUksQ0FBQ1AsV0FBVyxHQUFHLE9BQU8sSUFBSSxDQUFDQyxXQUFXLEdBQUcsS0FBSyxHQUFHO2dCQUVwRSxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTVIsY0FBYyxJQUFJLENBQUNBLFdBQVcsRUFDOUJDLGNBQWMsSUFBSSxDQUFDQSxXQUFXLEVBQzlCUSxPQUFPO29CQUNMVCxhQUFBQTtvQkFDQUMsYUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT1E7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUU7Z0JBQ3BCLElBQVFULGNBQTZCUyxLQUE3QlQsYUFBYUMsY0FBZ0JRLEtBQWhCUixhQUNmVSxtQkFBbUIsSUF2Q1JkLGlCQXVDNkJHLGFBQWFDO2dCQUUzRCxPQUFPVTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV1AsTUFBTSxFQUFFO2dCQUN4QixJQUFNTCxjQUFjYSxzQkFBc0JSLFNBQ3BDSixjQUFjYSxzQkFBc0JULFNBQ3BDTSxtQkFBbUIsSUEvQ1JkLGlCQStDNkJHLGFBQWFDO2dCQUUzRCxPQUFPVTtZQUNUOzs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUU7Z0JBQ3RDLElBQU1ULFNBQVNTLGVBQ1RoQixjQUFjaUIsc0JBQXNCVixTQUNwQ04sY0FBY2lCLHNCQUFzQlgsU0FDcENJLG1CQUFtQixJQXhEUmQsaUJBd0Q2QkcsYUFBYUM7Z0JBRTNELE9BQU9VO1lBQ1Q7OztXQTNEbUJkOztBQThEckIsU0FBU29CLHNCQUFzQlYsTUFBTSxFQUFFO0lBQ3JDLElBQU1QLGNBQWMsQUFBQ08sV0FBVyxJQUFJLEdBQ2RZLEtBQUtDLEtBQUssQ0FBQ2IsU0FBUyxRQUNsQixDQUFDLEVBQUcsR0FBRztJQUUvQixPQUFPUDtBQUNUO0FBRUEsU0FBU2tCLHNCQUFzQlgsTUFBTSxFQUFFO0lBQ3JDLElBQU1OLGNBQWMsQUFBQ00sV0FBVyxJQUFJLEdBQ2RZLEtBQUtDLEtBQUssQ0FBQ2IsU0FBUyxPQUNsQixDQUFDLEVBQUcsR0FBRztJQUUvQixPQUFPTjtBQUNUO0FBRUEsU0FBU1ksc0JBQXNCUixNQUFNLEVBQUU7SUFDckMsSUFBSUwsY0FBYztJQUVsQixJQUFJSyxRQUFRO1FBQ1YsSUFBTWdCLFVBQVVoQixPQUFPaUIsS0FBSyxDQUFDLGlCQUN2QkMsY0FBY3pCLE9BQU91QjtRQUUzQnJCLGNBQWN1QixhQUFjLEdBQUc7SUFDakMsQ0FBQztJQUVELE9BQU92QjtBQUNUO0FBRUEsU0FBU2Msc0JBQXNCVCxNQUFNLEVBQUU7SUFDckMsSUFBSUosY0FBYztJQUVsQixJQUFJSSxRQUFRO1FBQ1YsSUFBTWdCLFVBQVVoQixPQUFPaUIsS0FBSyxDQUFDLGlCQUN2QkMsY0FBY3pCLE9BQU91QjtRQUUzQnBCLGNBQWNzQixhQUFjLEdBQUc7SUFDakMsQ0FBQztJQUVELE9BQU90QjtBQUNUIn0=