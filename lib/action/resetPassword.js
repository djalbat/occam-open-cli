"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return resetPasswordAction;
    }
});
var _resetPassword = /*#__PURE__*/ _interop_require_default(require("../operation/resetPassword"));
var _emailAddress = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/emailAddress"));
var _operation = require("../utilities/operation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function resetPasswordAction(emailAddress) {
    var operations = [
        _emailAddress.default,
        _resetPassword.default
    ], context = {
        emailAddress: emailAddress
    };
    (0, _operation.executeOperations)(operations, function(completed) {
        var message = context.message;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vcmVzZXRQYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlc2V0UGFzc3dvcmRPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9yZXNldFBhc3N3b3JkXCI7XG5pbXBvcnQgZW1haWxBZGRyZXNzUHJvbXB0T3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vcHJvbXB0L2VtYWlsQWRkcmVzc1wiO1xuXG5pbXBvcnQgeyBleGVjdXRlT3BlcmF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb3BlcmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmRBY3Rpb24oZW1haWxBZGRyZXNzKSB7XG4gIGNvbnN0IG9wZXJhdGlvbnMgPSBbXG4gICAgICAgICAgZW1haWxBZGRyZXNzUHJvbXB0T3BlcmF0aW9uLFxuICAgICAgICAgIHJlc2V0UGFzc3dvcmRPcGVyYXRpb25cbiAgICAgICAgXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBlbWFpbEFkZHJlc3NcbiAgICAgICAgfTtcblxuICBleGVjdXRlT3BlcmF0aW9ucyhvcGVyYXRpb25zLCAoY29tcGxldGVkKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH0sIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbInJlc2V0UGFzc3dvcmRBY3Rpb24iLCJlbWFpbEFkZHJlc3MiLCJvcGVyYXRpb25zIiwiZW1haWxBZGRyZXNzUHJvbXB0T3BlcmF0aW9uIiwicmVzZXRQYXNzd29yZE9wZXJhdGlvbiIsImNvbnRleHQiLCJleGVjdXRlT3BlcmF0aW9ucyIsImNvbXBsZXRlZCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7O29FQUxXO21FQUNLO3lCQUVOOzs7Ozs7QUFFbkIsU0FBU0Esb0JBQW9CQyxZQUFZO0lBQ3RELElBQU1DLGFBQWE7UUFDWEMscUJBQTJCO1FBQzNCQyxzQkFBc0I7S0FDdkIsRUFDREMsVUFBVTtRQUNSSixjQUFBQTtJQUNGO0lBRU5LLElBQUFBLDRCQUFpQixFQUFDSixZQUFZLFNBQUNLO1FBQzdCLElBQU0sQUFBRUMsVUFBWUgsUUFBWkc7UUFFUkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkLEdBQUdIO0FBQ0wifQ==