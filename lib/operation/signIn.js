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
const _post = /*#__PURE__*/ _interop_require_default(require("../post"));
const _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function signInOperation(proceed, abort, context) {
    const { emailAddressOrUsername, password } = context, uri = _uris.SIGN_IN_API_URI, json = {
        emailAddressOrUsername,
        password
    };
    (0, _post.default)(uri, json, (json)=>{
        const { message = null, identityToken = null } = json;
        Object.assign(context, {
            message,
            identityToken
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vc2lnbkluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi4vcG9zdFwiO1xuXG5pbXBvcnQgeyBTSUdOX0lOX0FQSV9VUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWduSW5PcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBlbWFpbEFkZHJlc3NPclVzZXJuYW1lLCBwYXNzd29yZCB9ID0gY29udGV4dCxcbiAgICAgICAgdXJpID0gU0lHTl9JTl9BUElfVVJJLFxuICAgICAgICBqc29uID0ge1xuICAgICAgICAgIGVtYWlsQWRkcmVzc09yVXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfTtcblxuICBwb3N0KHVyaSwganNvbiwgKGpzb24pID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgPSBudWxsLCBpZGVudGl0eVRva2VuID0gbnVsbCB9ID0ganNvbjtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgbWVzc2FnZSxcbiAgICAgIGlkZW50aXR5VG9rZW5cbiAgICB9KTtcblxuICAgIHByb2NlZWQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsic2lnbkluT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImVtYWlsQWRkcmVzc09yVXNlcm5hbWUiLCJwYXNzd29yZCIsInVyaSIsIlNJR05fSU5fQVBJX1VSSSIsImpzb24iLCJwb3N0IiwibWVzc2FnZSIsImlkZW50aXR5VG9rZW4iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7NkRBSlA7c0JBRWU7Ozs7OztBQUVqQixTQUFTQSxnQkFBZ0JDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQzdELE1BQU0sRUFBRUMsc0JBQXNCLEVBQUVDLFFBQVEsRUFBRSxHQUFHRixTQUN2Q0csTUFBTUMscUJBQWUsRUFDckJDLE9BQU87UUFDTEo7UUFDQUM7SUFDRjtJQUVOSSxJQUFBQSxhQUFJLEVBQUNILEtBQUtFLE1BQU0sQ0FBQ0E7UUFDZixNQUFNLEVBQUVFLFVBQVUsSUFBSSxFQUFFQyxnQkFBZ0IsSUFBSSxFQUFFLEdBQUdIO1FBRWpESSxPQUFPQyxNQUFNLENBQUNWLFNBQVM7WUFDckJPO1lBQ0FDO1FBQ0Y7UUFFQVY7SUFDRjtBQUNGIn0=