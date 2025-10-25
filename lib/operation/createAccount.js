"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createAccountOperation;
    }
});
var _post = /*#__PURE__*/ _interop_require_default(require("../post"));
var _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createAccountOperation(proceed, abort, context) {
    var username = context.username, password = context.password, emailAddress = context.emailAddress, uri = _uris.CREATE_ACCOUNT_API_URI, json = {
        username: username,
        password: password,
        emailAddress: emailAddress
    };
    (0, _post.default)(uri, json, function(json) {
        var _json_message = json.message, message = _json_message === void 0 ? null : _json_message, _json_identityToken = json.identityToken, identityToken = _json_identityToken === void 0 ? null : _json_identityToken;
        Object.assign(context, {
            message: message,
            identityToken: identityToken
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY3JlYXRlQWNjb3VudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBvc3QgZnJvbSBcIi4uL3Bvc3RcIjtcblxuaW1wb3J0IHsgQ1JFQVRFX0FDQ09VTlRfQVBJX1VSSSB9IGZyb20gXCIuLi91cmlzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFjY291bnRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsQWRkcmVzcyB9ID0gY29udGV4dCxcbiAgICAgICAgdXJpID0gQ1JFQVRFX0FDQ09VTlRfQVBJX1VSSSxcbiAgICAgICAganNvbiA9IHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICBlbWFpbEFkZHJlc3NcbiAgICAgICAgfTtcblxuICBwb3N0KHVyaSwganNvbiwgKGpzb24pID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgPSBudWxsLCBpZGVudGl0eVRva2VuID0gbnVsbCB9ID0ganNvbjtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgbWVzc2FnZSxcbiAgICAgIGlkZW50aXR5VG9rZW5cbiAgICB9KTtcblxuICAgIHByb2NlZWQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQWNjb3VudE9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZW1haWxBZGRyZXNzIiwidXJpIiwiQ1JFQVRFX0FDQ09VTlRfQVBJX1VSSSIsImpzb24iLCJwb3N0IiwibWVzc2FnZSIsImlkZW50aXR5VG9rZW4iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7MkRBSlA7b0JBRXNCOzs7Ozs7QUFFeEIsU0FBU0EsdUJBQXVCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNwRSxJQUFRQyxXQUFxQ0QsUUFBckNDLFVBQVVDLFdBQTJCRixRQUEzQkUsVUFBVUMsZUFBaUJILFFBQWpCRyxjQUN0QkMsTUFBTUMsNEJBQXNCLEVBQzVCQyxPQUFPO1FBQ0xMLFVBQUFBO1FBQ0FDLFVBQUFBO1FBQ0FDLGNBQUFBO0lBQ0Y7SUFFTkksSUFBQUEsYUFBSSxFQUFDSCxLQUFLRSxNQUFNLFNBQUNBO1FBQ2Ysb0JBQWlEQSxLQUF6Q0UsU0FBQUEscUNBQVUsNENBQStCRixLQUF6QkcsZUFBQUEsaURBQWdCO1FBRXhDQyxPQUFPQyxNQUFNLENBQUNYLFNBQVM7WUFDckJRLFNBQUFBO1lBQ0FDLGVBQUFBO1FBQ0Y7UUFFQVg7SUFDRjtBQUNGIn0=