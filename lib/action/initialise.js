"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return initialiseAction;
    }
});
const _configuration = require("../configuration");
const _messages = require("../messages");
function initialiseAction() {
    let success;
    const configurationFileExists = (0, _configuration.checkConfigurationFileExists)();
    if (configurationFileExists) {
        success = false;
    } else {
        (0, _configuration.createConfigurationFile)();
        success = true;
    }
    const message = success ? _messages.SUCCESSFUL_INITIALISE_MESSAGE : _messages.FAILED_INITIALISE_MESSAGE;
    console.log(message);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vaW5pdGlhbGlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hlY2tDb25maWd1cmF0aW9uRmlsZUV4aXN0cywgY3JlYXRlQ29uZmlndXJhdGlvbkZpbGUgfSBmcm9tIFwiLi4vY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgRkFJTEVEX0lOSVRJQUxJU0VfTUVTU0FHRSwgU1VDQ0VTU0ZVTF9JTklUSUFMSVNFX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGlzZUFjdGlvbigpIHtcbiAgbGV0IHN1Y2Nlc3M7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbkZpbGVFeGlzdHMgPSBjaGVja0NvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKCk7XG5cbiAgaWYgKGNvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKSB7XG4gICAgc3VjY2VzcyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZUNvbmZpZ3VyYXRpb25GaWxlKCk7XG5cbiAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBzdWNjZXNzID9cbiAgICAgICAgICAgICAgICAgICAgU1VDQ0VTU0ZVTF9JTklUSUFMSVNFX01FU1NBR0UgOlxuICAgICAgICAgICAgICAgICAgICAgIEZBSUxFRF9JTklUSUFMSVNFX01FU1NBR0U7XG5cbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG4iXSwibmFtZXMiOlsiaW5pdGlhbGlzZUFjdGlvbiIsInN1Y2Nlc3MiLCJjb25maWd1cmF0aW9uRmlsZUV4aXN0cyIsImNoZWNrQ29uZmlndXJhdGlvbkZpbGVFeGlzdHMiLCJjcmVhdGVDb25maWd1cmF0aW9uRmlsZSIsIm1lc3NhZ2UiLCJTVUNDRVNTRlVMX0lOSVRJQUxJU0VfTUVTU0FHRSIsIkZBSUxFRF9JTklUSUFMSVNFX01FU1NBR0UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXdCQTs7OytCQUg4QzswQkFDRztBQUUxRCxTQUFTQTtJQUN0QixJQUFJQztJQUVKLE1BQU1DLDBCQUEwQkMsSUFBQUEsMkNBQTRCO0lBRTVELElBQUlELHlCQUF5QjtRQUMzQkQsVUFBVTtJQUNaLE9BQU87UUFDTEcsSUFBQUEsc0NBQXVCO1FBRXZCSCxVQUFVO0lBQ1o7SUFFQSxNQUFNSSxVQUFVSixVQUNFSyx1Q0FBNkIsR0FDM0JDLG1DQUF5QjtJQUU3Q0MsUUFBUUMsR0FBRyxDQUFDSjtBQUNkIn0=