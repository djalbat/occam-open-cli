"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return signInAction;
    }
});
const _signIn = /*#__PURE__*/ _interop_require_default(require("../operation/signIn"));
const _password = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/password"));
const _updateIdentityToken = /*#__PURE__*/ _interop_require_default(require("../operation/updateIdentityToken"));
const _emailAddressOrUsername = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/emailAddressOrUsername"));
const _operation = require("../utilities/operation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function signInAction(emailAddressOrUsername) {
    const password = null, operations = [
        _emailAddressOrUsername.default,
        _password.default,
        _signIn.default,
        _updateIdentityToken.default
    ], context = {
        emailAddressOrUsername,
        password
    };
    (0, _operation.executeOperations)(operations, (completed)=>{
        const { message } = context;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vc2lnbkluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2lnbkluT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vc2lnbkluXCI7XG5pbXBvcnQgcGFzc3dvcmRQcm9tcHRPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9wcm9tcHQvcGFzc3dvcmRcIjtcbmltcG9ydCB1cGRhdGVJZGVudGl0eVRva2VuT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vdXBkYXRlSWRlbnRpdHlUb2tlblwiO1xuaW1wb3J0IGVtYWlsQWRkcmVzc09yVXNlcm5hbWVQcm9tcHRPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9wcm9tcHQvZW1haWxBZGRyZXNzT3JVc2VybmFtZVwiO1xuXG5pbXBvcnQgeyBleGVjdXRlT3BlcmF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb3BlcmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ25JbkFjdGlvbihlbWFpbEFkZHJlc3NPclVzZXJuYW1lKSB7XG4gIGNvbnN0IHBhc3N3b3JkID0gbnVsbCxcbiAgICAgICAgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICBlbWFpbEFkZHJlc3NPclVzZXJuYW1lUHJvbXB0T3BlcmF0aW9uLFxuICAgICAgICAgIHBhc3N3b3JkUHJvbXB0T3BlcmF0aW9uLFxuICAgICAgICAgIHNpZ25Jbk9wZXJhdGlvbixcbiAgICAgICAgICB1cGRhdGVJZGVudGl0eVRva2VuT3BlcmF0aW9uXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgZW1haWxBZGRyZXNzT3JVc2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9O1xuXG4gIGV4ZWN1dGVPcGVyYXRpb25zKG9wZXJhdGlvbnMsIChjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfSwgY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsic2lnbkluQWN0aW9uIiwiZW1haWxBZGRyZXNzT3JVc2VybmFtZSIsInBhc3N3b3JkIiwib3BlcmF0aW9ucyIsImVtYWlsQWRkcmVzc09yVXNlcm5hbWVQcm9tcHRPcGVyYXRpb24iLCJwYXNzd29yZFByb21wdE9wZXJhdGlvbiIsInNpZ25Jbk9wZXJhdGlvbiIsInVwZGF0ZUlkZW50aXR5VG9rZW5PcGVyYXRpb24iLCJjb250ZXh0IiwiZXhlY3V0ZU9wZXJhdGlvbnMiLCJjb21wbGV0ZWQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUF3QkE7OzsrREFQSTtpRUFDUTs0RUFDSzsrRUFDUzsyQkFFaEI7Ozs7OztBQUVuQixTQUFTQSxhQUFhQyxzQkFBc0I7SUFDekQsTUFBTUMsV0FBVyxNQUNYQyxhQUFhO1FBQ1hDLCtCQUFxQztRQUNyQ0MsaUJBQXVCO1FBQ3ZCQyxlQUFlO1FBQ2ZDLDRCQUE0QjtLQUM3QixFQUNEQyxVQUFVO1FBQ1JQO1FBQ0FDO0lBQ0Y7SUFFTk8sSUFBQUEsNEJBQWlCLEVBQUNOLFlBQVksQ0FBQ087UUFDN0IsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0g7UUFFcEJJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZCxHQUFHSDtBQUNMIn0=