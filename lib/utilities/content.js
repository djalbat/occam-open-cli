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
    convertContentTabsToWhitespace: function() {
        return convertContentTabsToWhitespace;
    },
    default: function() {
        return _default;
    }
});
var _constants = require("../constants");
function convertContentTabsToWhitespace(content) {
    return content.replace(/\t/g, _constants.DOUBLE_SPACE);
} ///
var _default = {
    convertContentTabsToWhitespace: convertContentTabsToWhitespace
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpIHsgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFx0L2csIERPVUJMRV9TUEFDRSk7IH0gLy8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlXG59O1xuIl0sIm5hbWVzIjpbImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsImNvbnRlbnQiLCJyZXBsYWNlIiwiRE9VQkxFX1NQQUNFIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLDhCQUE4QjtlQUE5QkE7O0lBRWhCLE9BRUU7ZUFGRjs7O3lCQUo2QjtBQUV0QixTQUFTQSwrQkFBK0JDLE9BQU8sRUFBRTtJQUFFLE9BQU9BLFFBQVFDLE9BQU8sQ0FBQyxPQUFPQyx1QkFBWTtBQUFHLEVBQUUsR0FBRztJQUU1RyxXQUFlO0lBQ2JILGdDQUFBQTtBQUNGIn0=