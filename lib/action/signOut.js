"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return signOutAction;
    }
});
var _messages = require("../messages");
var _configuration = require("../configuration");
function signOutAction() {
    var message = _messages.SIGN_OUT_MESSAGE;
    (0, _configuration.removeIdentityToken)();
    console.log(message);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vc2lnbk91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0lHTl9PVVRfTUVTU0FHRSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSWRlbnRpdHlUb2tlbiB9IGZyb20gXCIuLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBTSUdOX09VVF9NRVNTQUdFO1xuXG4gIHJlbW92ZUlkZW50aXR5VG9rZW4oKTtcblxuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbn1cbiJdLCJuYW1lcyI6WyJzaWduT3V0QWN0aW9uIiwibWVzc2FnZSIsIlNJR05fT1VUX01FU1NBR0UiLCJyZW1vdmVJZGVudGl0eVRva2VuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7Ozt3QkFIUzs2QkFDRztBQUVyQixTQUFTQTtJQUN0QixJQUFNQyxVQUFVQywwQkFBZ0I7SUFFaENDLElBQUFBLGtDQUFtQjtJQUVuQkMsUUFBUUMsR0FBRyxDQUFDSjtBQUNkIn0=