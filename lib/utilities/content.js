"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    trimDoubleQuotes: function() {
        return trimDoubleQuotes;
    },
    convertContentTabsToWhitespace: function() {
        return convertContentTabsToWhitespace;
    },
    default: function() {
        return _default;
    }
});
var _constants = require("../constants");
function trimDoubleQuotes(content) {
    return content.replace(/(^"|"$)/g, _constants.EMPTY_STRING);
} ///
function convertContentTabsToWhitespace(content) {
    return content.replace(/\t/g, _constants.DOUBLE_SPACE);
} ///
var _default = {
    trimDoubleQuotes: trimDoubleQuotes,
    convertContentTabsToWhitespace: convertContentTabsToWhitespace
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmltRG91YmxlUXVvdGVzKGNvbnRlbnQpIHsgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvKF5cInxcIiQpL2csIEVNUFRZX1NUUklORyk7IH0gLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCkgeyByZXR1cm4gY29udGVudC5yZXBsYWNlKC9cXHQvZywgRE9VQkxFX1NQQUNFKTsgfSAvLy9cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0cmltRG91YmxlUXVvdGVzLFxuICBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2Vcbn07XG4iXSwibmFtZXMiOlsidHJpbURvdWJsZVF1b3RlcyIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsImNvbnRlbnQiLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIiwiRE9VQkxFX1NQQUNFIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLGdCQUFnQjtlQUFoQkE7O0lBRUFDLDhCQUE4QjtlQUE5QkE7O0lBRWhCLE9BR0U7ZUFIRjs7O3lCQU4yQztBQUVwQyxTQUFTRCxpQkFBaUJFLE9BQU8sRUFBRTtJQUFFLE9BQU9BLFFBQVFDLE9BQU8sQ0FBQyxZQUFZQyx1QkFBWTtBQUFHLEVBQUUsR0FBRztBQUU1RixTQUFTSCwrQkFBK0JDLE9BQU8sRUFBRTtJQUFFLE9BQU9BLFFBQVFDLE9BQU8sQ0FBQyxPQUFPRSx1QkFBWTtBQUFHLEVBQUUsR0FBRztJQUU1RyxXQUFlO0lBQ2JMLGtCQUFBQTtJQUNBQyxnQ0FBQUE7QUFDRiJ9