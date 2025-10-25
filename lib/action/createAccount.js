"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createAccountAction;
    }
});
var _createAccount = /*#__PURE__*/ _interop_require_default(require("../operation/createAccount"));
var _password = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/password"));
var _username = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/username"));
var _emailAddress = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/emailAddress"));
var _updateIdentityToken = /*#__PURE__*/ _interop_require_default(require("../operation/updateIdentityToken"));
var _operation = require("../utilities/operation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createAccountAction(emailAddress) {
    var username = null, password = null, operations = [
        _emailAddress.default,
        _username.default,
        _password.default,
        _createAccount.default,
        _updateIdentityToken.default
    ], context = {
        emailAddress: emailAddress,
        username: username,
        password: password
    };
    (0, _operation.executeOperations)(operations, function(completed) {
        var message = context.message;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vY3JlYXRlQWNjb3VudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNyZWF0ZUFjY291bnRPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jcmVhdGVBY2NvdW50XCI7XG5pbXBvcnQgcGFzc3dvcmRQcm9tcHRPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9wcm9tcHQvcGFzc3dvcmRcIjtcbmltcG9ydCB1c2VybmFtZVByb21wdE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3Byb21wdC91c2VybmFtZVwiO1xuaW1wb3J0IGVtYWlsQWRkcmVzc1Byb21wdE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3Byb21wdC9lbWFpbEFkZHJlc3NcIjtcbmltcG9ydCB1cGRhdGVJZGVudGl0eVRva2VuT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vdXBkYXRlSWRlbnRpdHlUb2tlblwiO1xuXG5pbXBvcnQgeyBleGVjdXRlT3BlcmF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb3BlcmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFjY291bnRBY3Rpb24oZW1haWxBZGRyZXNzKSB7XG4gIGNvbnN0IHVzZXJuYW1lID0gbnVsbCxcbiAgICAgICAgcGFzc3dvcmQgPSBudWxsLFxuICAgICAgICBvcGVyYXRpb25zID0gW1xuICAgICAgICAgIGVtYWlsQWRkcmVzc1Byb21wdE9wZXJhdGlvbixcbiAgICAgICAgICB1c2VybmFtZVByb21wdE9wZXJhdGlvbixcbiAgICAgICAgICBwYXNzd29yZFByb21wdE9wZXJhdGlvbixcbiAgICAgICAgICBjcmVhdGVBY2NvdW50T3BlcmF0aW9uLFxuICAgICAgICAgIHVwZGF0ZUlkZW50aXR5VG9rZW5PcGVyYXRpb25cbiAgICAgICAgXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBlbWFpbEFkZHJlc3MsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfTtcblxuICBleGVjdXRlT3BlcmF0aW9ucyhvcGVyYXRpb25zLCAoY29tcGxldGVkKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH0sIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUFjY291bnRBY3Rpb24iLCJlbWFpbEFkZHJlc3MiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwib3BlcmF0aW9ucyIsImVtYWlsQWRkcmVzc1Byb21wdE9wZXJhdGlvbiIsInVzZXJuYW1lUHJvbXB0T3BlcmF0aW9uIiwicGFzc3dvcmRQcm9tcHRPcGVyYXRpb24iLCJjcmVhdGVBY2NvdW50T3BlcmF0aW9uIiwidXBkYXRlSWRlbnRpdHlUb2tlbk9wZXJhdGlvbiIsImNvbnRleHQiLCJleGVjdXRlT3BlcmF0aW9ucyIsImNvbXBsZXRlZCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O29FQVJXOytEQUNDOytEQUNBO21FQUNJOzBFQUNDO3lCQUVQOzs7Ozs7QUFFbkIsU0FBU0Esb0JBQW9CQyxZQUFZO0lBQ3RELElBQU1DLFdBQVcsTUFDWEMsV0FBVyxNQUNYQyxhQUFhO1FBQ1hDLHFCQUEyQjtRQUMzQkMsaUJBQXVCO1FBQ3ZCQyxpQkFBdUI7UUFDdkJDLHNCQUFzQjtRQUN0QkMsNEJBQTRCO0tBQzdCLEVBQ0RDLFVBQVU7UUFDUlQsY0FBQUE7UUFDQUMsVUFBQUE7UUFDQUMsVUFBQUE7SUFDRjtJQUVOUSxJQUFBQSw0QkFBaUIsRUFBQ1AsWUFBWSxTQUFDUTtRQUM3QixJQUFNLEFBQUVDLFVBQVlILFFBQVpHO1FBRVJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZCxHQUFHSDtBQUNMIn0=