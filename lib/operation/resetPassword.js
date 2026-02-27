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
const _post = /*#__PURE__*/ _interop_require_default(require("../post"));
const _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function resetPasswordOperation(proceed, abort, context) {
    const { emailAddress } = context, uri = _uris.RESET_PASSWORD_API_URI, json = {
        emailAddress
    };
    (0, _post.default)(uri, json, (json)=>{
        const { message = null } = json;
        Object.assign(context, {
            message
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcmVzZXRQYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBvc3QgZnJvbSBcIi4uL3Bvc3RcIjtcblxuaW1wb3J0IHsgUkVTRVRfUEFTU1dPUkRfQVBJX1VSSSB9IGZyb20gXCIuLi91cmlzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBlbWFpbEFkZHJlc3MgfSA9IGNvbnRleHQsXG4gICAgICAgIHVyaSA9IFJFU0VUX1BBU1NXT1JEX0FQSV9VUkksXG4gICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgZW1haWxBZGRyZXNzXG4gICAgICAgIH07XG5cbiAgcG9zdCh1cmksIGpzb24sIChqc29uKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlID0gbnVsbCB9ID0ganNvbjtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgbWVzc2FnZVxuICAgIH0pO1xuXG4gICAgcHJvY2VlZCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJyZXNldFBhc3N3b3JkT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImVtYWlsQWRkcmVzcyIsInVyaSIsIlJFU0VUX1BBU1NXT1JEX0FQSV9VUkkiLCJqc29uIiwicG9zdCIsIm1lc3NhZ2UiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7NkRBSlA7c0JBRXNCOzs7Ozs7QUFFeEIsU0FBU0EsdUJBQXVCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNwRSxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHRCxTQUNuQkUsTUFBTUMsNEJBQXNCLEVBQzVCQyxPQUFPO1FBQ0xIO0lBQ0Y7SUFFTkksSUFBQUEsYUFBSSxFQUFDSCxLQUFLRSxNQUFNLENBQUNBO1FBQ2YsTUFBTSxFQUFFRSxVQUFVLElBQUksRUFBRSxHQUFHRjtRQUUzQkcsT0FBT0MsTUFBTSxDQUFDUixTQUFTO1lBQ3JCTTtRQUNGO1FBRUFSO0lBQ0Y7QUFDRiJ9