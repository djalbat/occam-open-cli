"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return withdrawAction;
    }
});
var _withdraw = /*#__PURE__*/ _interop_require_default(require("../operation/withdraw"));
var _areYouSure = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/areYouSure"));
var _getIdentityToken = /*#__PURE__*/ _interop_require_default(require("../operation/getIdentityToken"));
var _releaseName = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/releaseName"));
var _operation = require("../utilities/operation");
var _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function withdrawAction(releaseName) {
    var password = null, operations = [
        _getIdentityToken.default,
        _releaseName.default,
        _areYouSure.default,
        _withdraw.default
    ], context = {
        password: password,
        releaseName: releaseName
    };
    (0, _operation.executeOperations)(operations, function(completed) {
        var success = completed, message = success ? _messages.SUCCESSFUL_WITHDRAW_MESSAGE : _messages.FAILED_WITHDRAW_MESSAGE;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vd2l0aGRyYXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoZHJhd09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3dpdGhkcmF3XCI7XG5pbXBvcnQgYXJlWW91U3VyZVByb21wdE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3Byb21wdC9hcmVZb3VTdXJlXCI7XG5pbXBvcnQgZ2V0SWRlbnRpdHlUb2tlbk9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2dldElkZW50aXR5VG9rZW5cIjtcbmltcG9ydCByZWxlYXNlTmFtZVByb21wdE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3Byb21wdC9yZWxlYXNlTmFtZVwiO1xuXG5pbXBvcnQgeyBleGVjdXRlT3BlcmF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb3BlcmF0aW9uXCI7XG5pbXBvcnQgeyBGQUlMRURfV0lUSERSQVdfTUVTU0FHRSwgU1VDQ0VTU0ZVTF9XSVRIRFJBV19NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhkcmF3QWN0aW9uKHJlbGVhc2VOYW1lKSB7XG4gIGNvbnN0IHBhc3N3b3JkID0gbnVsbCxcbiAgICAgICAgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICBnZXRJZGVudGl0eVRva2VuT3BlcmF0aW9uLFxuICAgICAgICAgIHJlbGVhc2VOYW1lUHJvbXB0T3BlcmF0aW9uLFxuICAgICAgICAgIGFyZVlvdVN1cmVQcm9tcHRPcGVyYXRpb24sXG4gICAgICAgICAgd2l0aGRyYXdPcGVyYXRpb25cbiAgICAgICAgXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICByZWxlYXNlTmFtZVxuICAgICAgICB9O1xuXG4gIGV4ZWN1dGVPcGVyYXRpb25zKG9wZXJhdGlvbnMsIChjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCBzdWNjZXNzID0gY29tcGxldGVkLCAgLy8vXG4gICAgICAgICAgbWVzc2FnZSA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgIFNVQ0NFU1NGVUxfV0lUSERSQVdfTUVTU0FHRSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBGQUlMRURfV0lUSERSQVdfTUVTU0FHRTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9LCBjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJ3aXRoZHJhd0FjdGlvbiIsInJlbGVhc2VOYW1lIiwicGFzc3dvcmQiLCJvcGVyYXRpb25zIiwiZ2V0SWRlbnRpdHlUb2tlbk9wZXJhdGlvbiIsInJlbGVhc2VOYW1lUHJvbXB0T3BlcmF0aW9uIiwiYXJlWW91U3VyZVByb21wdE9wZXJhdGlvbiIsIndpdGhkcmF3T3BlcmF0aW9uIiwiY29udGV4dCIsImV4ZWN1dGVPcGVyYXRpb25zIiwiY29tcGxldGVkIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJTVUNDRVNTRlVMX1dJVEhEUkFXX01FU1NBR0UiLCJGQUlMRURfV0lUSERSQVdfTUVTU0FHRSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7K0RBUk07aUVBQ1E7dUVBQ0E7a0VBQ0M7eUJBRUw7d0JBQ21DOzs7Ozs7QUFFdEQsU0FBU0EsZUFBZUMsV0FBVztJQUNoRCxJQUFNQyxXQUFXLE1BQ1hDLGFBQWE7UUFDWEMseUJBQXlCO1FBQ3pCQyxvQkFBMEI7UUFDMUJDLG1CQUF5QjtRQUN6QkMsaUJBQWlCO0tBQ2xCLEVBQ0RDLFVBQVU7UUFDUk4sVUFBQUE7UUFDQUQsYUFBQUE7SUFDRjtJQUVOUSxJQUFBQSw0QkFBaUIsRUFBQ04sWUFBWSxTQUFDTztRQUM3QixJQUFNQyxVQUFVRCxXQUNWRSxVQUFVRCxVQUNFRSxxQ0FBMkIsR0FDekJDLGlDQUF1QjtRQUUzQ0MsUUFBUUMsR0FBRyxDQUFDSjtJQUNkLEdBQUdKO0FBQ0wifQ==