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
const _post = /*#__PURE__*/ _interop_require_default(require("../post"));
const _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createAccountOperation(proceed, abort, context) {
    const { username, password, emailAddress } = context, uri = _uris.CREATE_ACCOUNT_API_URI, json = {
        username,
        password,
        emailAddress
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY3JlYXRlQWNjb3VudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBvc3QgZnJvbSBcIi4uL3Bvc3RcIjtcblxuaW1wb3J0IHsgQ1JFQVRFX0FDQ09VTlRfQVBJX1VSSSB9IGZyb20gXCIuLi91cmlzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFjY291bnRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsQWRkcmVzcyB9ID0gY29udGV4dCxcbiAgICAgICAgdXJpID0gQ1JFQVRFX0FDQ09VTlRfQVBJX1VSSSxcbiAgICAgICAganNvbiA9IHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICBlbWFpbEFkZHJlc3NcbiAgICAgICAgfTtcblxuICBwb3N0KHVyaSwganNvbiwgKGpzb24pID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgPSBudWxsLCBpZGVudGl0eVRva2VuID0gbnVsbCB9ID0ganNvbjtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgbWVzc2FnZSxcbiAgICAgIGlkZW50aXR5VG9rZW5cbiAgICB9KTtcblxuICAgIHByb2NlZWQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQWNjb3VudE9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZW1haWxBZGRyZXNzIiwidXJpIiwiQ1JFQVRFX0FDQ09VTlRfQVBJX1VSSSIsImpzb24iLCJwb3N0IiwibWVzc2FnZSIsImlkZW50aXR5VG9rZW4iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7NkRBSlA7c0JBRXNCOzs7Ozs7QUFFeEIsU0FBU0EsdUJBQXVCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNwRSxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR0gsU0FDdkNJLE1BQU1DLDRCQUFzQixFQUM1QkMsT0FBTztRQUNMTDtRQUNBQztRQUNBQztJQUNGO0lBRU5JLElBQUFBLGFBQUksRUFBQ0gsS0FBS0UsTUFBTSxDQUFDQTtRQUNmLE1BQU0sRUFBRUUsVUFBVSxJQUFJLEVBQUVDLGdCQUFnQixJQUFJLEVBQUUsR0FBR0g7UUFFakRJLE9BQU9DLE1BQU0sQ0FBQ1gsU0FBUztZQUNyQlE7WUFDQUM7UUFDRjtRQUVBWDtJQUNGO0FBQ0YifQ==