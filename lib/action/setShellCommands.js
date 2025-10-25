"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return setShellCommandsAction;
    }
});
var _updateShellCommands = /*#__PURE__*/ _interop_require_default(require("../operation/updateShellCommands"));
var _setShellCommands = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/setShellCommands"));
var _operation = require("../utilities/operation");
var _configuration = require("../configuration");
var _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function setShellCommandsAction() {
    var operations = [
        _setShellCommands.default,
        _updateShellCommands.default
    ], shellCommands = (0, _configuration.retrieveShellCommands)(), context = {
        shellCommands: shellCommands
    };
    (0, _operation.executeOperations)(operations, function(completed) {
        if (!completed) {
            console.log(_messages.FAILED_SET_SHELL_COMMANDS_MESSAGE);
            return;
        }
        console.log(_messages.SUCCESSFUL_SET_SHELL_COMMANDS_MESSAGE);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vc2V0U2hlbGxDb21tYW5kcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHVwZGF0ZVNoZWxsQ29tbWFuZHNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi91cGRhdGVTaGVsbENvbW1hbmRzXCI7XG5pbXBvcnQgc2V0U2hlbGxDb21tYW5kc1Byb21wdE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3Byb21wdC9zZXRTaGVsbENvbW1hbmRzXCI7XG5cbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vcGVyYXRpb25cIjtcbmltcG9ydCB7IHJldHJpZXZlU2hlbGxDb21tYW5kcyB9IGZyb20gXCIuLi9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBGQUlMRURfU0VUX1NIRUxMX0NPTU1BTkRTX01FU1NBR0UsIFNVQ0NFU1NGVUxfU0VUX1NIRUxMX0NPTU1BTkRTX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U2hlbGxDb21tYW5kc0FjdGlvbigpIHtcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICBzZXRTaGVsbENvbW1hbmRzUHJvbXB0T3BlcmF0aW9uLFxuICAgICAgICAgIHVwZGF0ZVNoZWxsQ29tbWFuZHNPcGVyYXRpb25cbiAgICAgICAgXSxcbiAgICAgICAgc2hlbGxDb21tYW5kcyA9IHJldHJpZXZlU2hlbGxDb21tYW5kcygpLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHNoZWxsQ29tbWFuZHNcbiAgICAgICAgfTtcblxuICBleGVjdXRlT3BlcmF0aW9ucyhvcGVyYXRpb25zLCAoY29tcGxldGVkKSA9PiB7XG4gICAgaWYgKCFjb21wbGV0ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKEZBSUxFRF9TRVRfU0hFTExfQ09NTUFORFNfTUVTU0FHRSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhTVUNDRVNTRlVMX1NFVF9TSEVMTF9DT01NQU5EU19NRVNTQUdFKTtcbiAgfSwgY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsic2V0U2hlbGxDb21tYW5kc0FjdGlvbiIsIm9wZXJhdGlvbnMiLCJzZXRTaGVsbENvbW1hbmRzUHJvbXB0T3BlcmF0aW9uIiwidXBkYXRlU2hlbGxDb21tYW5kc09wZXJhdGlvbiIsInNoZWxsQ29tbWFuZHMiLCJyZXRyaWV2ZVNoZWxsQ29tbWFuZHMiLCJjb250ZXh0IiwiZXhlY3V0ZU9wZXJhdGlvbnMiLCJjb21wbGV0ZWQiLCJjb25zb2xlIiwibG9nIiwiRkFJTEVEX1NFVF9TSEVMTF9DT01NQU5EU19NRVNTQUdFIiwiU1VDQ0VTU0ZVTF9TRVRfU0hFTExfQ09NTUFORFNfTUVTU0FHRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUF3QkE7OzswRUFQaUI7dUVBQ0c7eUJBRVY7NkJBQ0k7d0JBQ21EOzs7Ozs7QUFFMUUsU0FBU0E7SUFDdEIsSUFBTUMsYUFBYTtRQUNYQyx5QkFBK0I7UUFDL0JDLDRCQUE0QjtLQUM3QixFQUNEQyxnQkFBZ0JDLElBQUFBLG9DQUFxQixLQUNyQ0MsVUFBVTtRQUNSRixlQUFBQTtJQUNGO0lBRU5HLElBQUFBLDRCQUFpQixFQUFDTixZQUFZLFNBQUNPO1FBQzdCLElBQUksQ0FBQ0EsV0FBVztZQUNkQyxRQUFRQyxHQUFHLENBQUNDLDJDQUFpQztZQUU3QztRQUNGO1FBRUFGLFFBQVFDLEdBQUcsQ0FBQ0UsK0NBQXFDO0lBQ25ELEdBQUdOO0FBQ0wifQ==