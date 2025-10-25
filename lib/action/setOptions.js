"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return setOptionsAction;
    }
});
var _useSSH = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/useSSH"));
var _updateOptions = /*#__PURE__*/ _interop_require_default(require("../operation/updateOptions"));
var _gitHubHostName = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/gitHubHostName"));
var _operation = require("../utilities/operation");
var _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function setOptionsAction() {
    var operations = [
        _useSSH.default,
        _gitHubHostName.default,
        _updateOptions.default
    ], context = {};
    (0, _operation.executeOperations)(operations, function(completed) {
        var success = completed, message = success ? _messages.SUCCESSFUL_SET_OPTIONS_MESSAGE : _messages.FAILED_SET_OPTIONS_MESSAGE;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vc2V0T3B0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHVzZVNTSFByb21wdE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3Byb21wdC91c2VTU0hcIjtcbmltcG9ydCB1cGRhdGVPcHRpb25zT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vdXBkYXRlT3B0aW9uc1wiO1xuaW1wb3J0IGdpdEh1Ykhvc3ROYW1lUHJvbXB0T3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vcHJvbXB0L2dpdEh1Ykhvc3ROYW1lXCI7XG5cbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vcGVyYXRpb25cIjtcbmltcG9ydCB7IEZBSUxFRF9TRVRfT1BUSU9OU19NRVNTQUdFLCBTVUNDRVNTRlVMX1NFVF9PUFRJT05TX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0T3B0aW9uc0FjdGlvbigpIHtcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICB1c2VTU0hQcm9tcHRPcGVyYXRpb24sXG4gICAgICAgICAgZ2l0SHViSG9zdE5hbWVQcm9tcHRPcGVyYXRpb24sXG4gICAgICAgICAgdXBkYXRlT3B0aW9uc09wZXJhdGlvblxuICAgICAgICBdLFxuICAgICAgICBjb250ZXh0ID0ge307XG5cbiAgZXhlY3V0ZU9wZXJhdGlvbnMob3BlcmF0aW9ucywgKGNvbXBsZXRlZCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBjb21wbGV0ZWQsICAvLy9cbiAgICAgICAgICBtZXNzYWdlID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgICAgU1VDQ0VTU0ZVTF9TRVRfT1BUSU9OU19NRVNTQUdFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEZBSUxFRF9TRVRfT1BUSU9OU19NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH0sIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbInNldE9wdGlvbnNBY3Rpb24iLCJvcGVyYXRpb25zIiwidXNlU1NIUHJvbXB0T3BlcmF0aW9uIiwiZ2l0SHViSG9zdE5hbWVQcm9tcHRPcGVyYXRpb24iLCJ1cGRhdGVPcHRpb25zT3BlcmF0aW9uIiwiY29udGV4dCIsImV4ZWN1dGVPcGVyYXRpb25zIiwiY29tcGxldGVkIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJTVUNDRVNTRlVMX1NFVF9PUFRJT05TX01FU1NBR0UiLCJGQUlMRURfU0VUX09QVElPTlNfTUVTU0FHRSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7NkRBUFU7b0VBQ0M7cUVBQ087eUJBRVI7d0JBQ3lDOzs7Ozs7QUFFNUQsU0FBU0E7SUFDdEIsSUFBTUMsYUFBYTtRQUNYQyxlQUFxQjtRQUNyQkMsdUJBQTZCO1FBQzdCQyxzQkFBc0I7S0FDdkIsRUFDREMsVUFBVSxDQUFDO0lBRWpCQyxJQUFBQSw0QkFBaUIsRUFBQ0wsWUFBWSxTQUFDTTtRQUM3QixJQUFNQyxVQUFVRCxXQUNWRSxVQUFVRCxVQUNFRSx3Q0FBOEIsR0FDNUJDLG9DQUEwQjtRQUU5Q0MsUUFBUUMsR0FBRyxDQUFDSjtJQUNkLEdBQUdKO0FBQ0wifQ==