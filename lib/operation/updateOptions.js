"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateOptionsOperation;
    }
});
var _configuration = require("../configuration");
function updateOptionsOperation(proceed, abort, context) {
    var useSSH = context.useSSH, options = {};
    if (useSSH) {
        var gitHubHostName = context.gitHubHostName, ssh = {
            gitHubHostName: gitHubHostName
        };
        Object.assign(options, {
            ssh: ssh
        });
    }
    (0, _configuration.updateOptions)(options);
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vdXBkYXRlT3B0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXBkYXRlT3B0aW9ucyB9IGZyb20gXCIuLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnNPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB1c2VTU0ggfSA9IGNvbnRleHQsXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcblxuICBpZiAodXNlU1NIKSB7XG4gICAgY29uc3QgeyBnaXRIdWJIb3N0TmFtZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBzc2ggPSB7XG4gICAgICAgICAgICBnaXRIdWJIb3N0TmFtZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgIHNzaFxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcblxuICBwcm9jZWVkKCk7XG59XG4iXSwibmFtZXMiOlsidXBkYXRlT3B0aW9uc09wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJ1c2VTU0giLCJvcHRpb25zIiwiZ2l0SHViSG9zdE5hbWUiLCJzc2giLCJPYmplY3QiLCJhc3NpZ24iLCJ1cGRhdGVPcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzZCQUZNO0FBRWYsU0FBU0EsdUJBQXVCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNwRSxJQUFNLEFBQUVDLFNBQVdELFFBQVhDLFFBQ0ZDLFVBQVUsQ0FBQztJQUVqQixJQUFJRCxRQUFRO1FBQ1YsSUFBTSxBQUFFRSxpQkFBbUJILFFBQW5CRyxnQkFDRkMsTUFBTTtZQUNKRCxnQkFBQUE7UUFDRjtRQUVORSxPQUFPQyxNQUFNLENBQUNKLFNBQVM7WUFDckJFLEtBQUFBO1FBQ0Y7SUFDRjtJQUVBRyxJQUFBQSw0QkFBYSxFQUFDTDtJQUVkSjtBQUNGIn0=