"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return signInOperation;
    }
});
var _post = /*#__PURE__*/ _interop_require_default(require("../post"));
var _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function signInOperation(proceed, abort, context) {
    var emailAddressOrUsername = context.emailAddressOrUsername, password = context.password, uri = _uris.SIGN_IN_API_URI, json = {
        emailAddressOrUsername: emailAddressOrUsername,
        password: password
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vc2lnbkluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi4vcG9zdFwiO1xuXG5pbXBvcnQgeyBTSUdOX0lOX0FQSV9VUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWduSW5PcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBlbWFpbEFkZHJlc3NPclVzZXJuYW1lLCBwYXNzd29yZCB9ID0gY29udGV4dCxcbiAgICAgICAgdXJpID0gU0lHTl9JTl9BUElfVVJJLFxuICAgICAgICBqc29uID0ge1xuICAgICAgICAgIGVtYWlsQWRkcmVzc09yVXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfTtcblxuICBwb3N0KHVyaSwganNvbiwgKGpzb24pID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgPSBudWxsLCBpZGVudGl0eVRva2VuID0gbnVsbCB9ID0ganNvbjtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgbWVzc2FnZSxcbiAgICAgIGlkZW50aXR5VG9rZW5cbiAgICB9KTtcblxuICAgIHByb2NlZWQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsic2lnbkluT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImVtYWlsQWRkcmVzc09yVXNlcm5hbWUiLCJwYXNzd29yZCIsInVyaSIsIlNJR05fSU5fQVBJX1VSSSIsImpzb24iLCJwb3N0IiwibWVzc2FnZSIsImlkZW50aXR5VG9rZW4iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7MkRBSlA7b0JBRWU7Ozs7OztBQUVqQixTQUFTQSxnQkFBZ0JDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQzdELElBQVFDLHlCQUFxQ0QsUUFBckNDLHdCQUF3QkMsV0FBYUYsUUFBYkUsVUFDMUJDLE1BQU1DLHFCQUFlLEVBQ3JCQyxPQUFPO1FBQ0xKLHdCQUFBQTtRQUNBQyxVQUFBQTtJQUNGO0lBRU5JLElBQUFBLGFBQUksRUFBQ0gsS0FBS0UsTUFBTSxTQUFDQTtRQUNmLG9CQUFpREEsS0FBekNFLFNBQUFBLHFDQUFVLDRDQUErQkYsS0FBekJHLGVBQUFBLGlEQUFnQjtRQUV4Q0MsT0FBT0MsTUFBTSxDQUFDVixTQUFTO1lBQ3JCTyxTQUFBQTtZQUNBQyxlQUFBQTtRQUNGO1FBRUFWO0lBQ0Y7QUFDRiJ9