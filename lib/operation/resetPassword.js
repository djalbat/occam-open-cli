"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return resetPasswordOperation;
    }
});
var _post = /*#__PURE__*/ _interop_require_default(require("../post"));
var _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function resetPasswordOperation(proceed, abort, context) {
    var emailAddress = context.emailAddress, uri = _uris.RESET_PASSWORD_API_URI, json = {
        emailAddress: emailAddress
    };
    (0, _post.default)(uri, json, function(json) {
        var _json_message = json.message, message = _json_message === void 0 ? null : _json_message;
        Object.assign(context, {
            message: message
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcmVzZXRQYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBvc3QgZnJvbSBcIi4uL3Bvc3RcIjtcblxuaW1wb3J0IHsgUkVTRVRfUEFTU1dPUkRfQVBJX1VSSSB9IGZyb20gXCIuLi91cmlzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBlbWFpbEFkZHJlc3MgfSA9IGNvbnRleHQsXG4gICAgICAgIHVyaSA9IFJFU0VUX1BBU1NXT1JEX0FQSV9VUkksXG4gICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgZW1haWxBZGRyZXNzXG4gICAgICAgIH07XG5cbiAgcG9zdCh1cmksIGpzb24sIChqc29uKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlID0gbnVsbCB9ID0ganNvbjtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgbWVzc2FnZVxuICAgIH0pO1xuXG4gICAgcHJvY2VlZCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJyZXNldFBhc3N3b3JkT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImVtYWlsQWRkcmVzcyIsInVyaSIsIlJFU0VUX1BBU1NXT1JEX0FQSV9VUkkiLCJqc29uIiwicG9zdCIsIm1lc3NhZ2UiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7MkRBSlA7b0JBRXNCOzs7Ozs7QUFFeEIsU0FBU0EsdUJBQXVCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNwRSxJQUFNLEFBQUVDLGVBQWlCRCxRQUFqQkMsY0FDRkMsTUFBTUMsNEJBQXNCLEVBQzVCQyxPQUFPO1FBQ0xILGNBQUFBO0lBQ0Y7SUFFTkksSUFBQUEsYUFBSSxFQUFDSCxLQUFLRSxNQUFNLFNBQUNBO1FBQ2Ysb0JBQTJCQSxLQUFuQkUsU0FBQUEscUNBQVU7UUFFbEJDLE9BQU9DLE1BQU0sQ0FBQ1IsU0FBUztZQUNyQk0sU0FBQUE7UUFDRjtRQUVBUjtJQUNGO0FBQ0YifQ==