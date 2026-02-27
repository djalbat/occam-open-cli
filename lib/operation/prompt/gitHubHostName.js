"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return gitHubHostNamePromptOperation;
    }
});
const _necessary = require("necessary");
const _constants = require("../../constants");
const _validate = require("../../utilities/validate");
const _defaults = require("../../defaults");
const _descriptions = require("../../descriptions");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function gitHubHostNamePromptOperation(proceed, abort, context) {
    const { useSSH } = context;
    if (!useSSH) {
        proceed();
        return;
    }
    const description = _descriptions.GITHUB_HOST_NAME_DESCRIPTION, errorMessage = _messages.INVALID_GITHUB_HOST_NAME_MESSAGE, validationFunction = _validate.validateGitHubHostName, options = {
        description,
        errorMessage,
        validationFunction
    };
    prompt(options, (answer)=>{
        let gitHubHostName = answer; ///
        const valid = gitHubHostName !== null;
        if (valid) {
            if (gitHubHostName === _constants.EMPTY_STRING) {
                gitHubHostName = _defaults.DEFAULT_GITHUB_HOST_NAME;
            }
            Object.assign(context, {
                gitHubHostName
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2dpdEh1Ykhvc3ROYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVHaXRIdWJIb3N0TmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IERFRkFVTFRfR0lUSFVCX0hPU1RfTkFNRSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgR0lUSFVCX0hPU1RfTkFNRV9ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcbmltcG9ydCB7IElOVkFMSURfR0lUSFVCX0hPU1RfTkFNRV9NRVNTQUdFIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgcHJvbXB0IH0gPSBzaGVsbFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2l0SHViSG9zdE5hbWVQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB1c2VTU0ggfSA9IGNvbnRleHQ7XG5cbiAgaWYgKCF1c2VTU0gpIHtcbiAgICBwcm9jZWVkKCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IEdJVEhVQl9IT1NUX05BTUVfREVTQ1JJUFRJT04sXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IElOVkFMSURfR0lUSFVCX0hPU1RfTkFNRV9NRVNTQUdFLFxuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSB2YWxpZGF0ZUdpdEh1Ykhvc3ROYW1lLCAgLy8vXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvblxuICAgICAgICB9O1xuXG4gIHByb21wdChvcHRpb25zLCAoYW5zd2VyKSA9PiB7XG4gICAgbGV0IGdpdEh1Ykhvc3ROYW1lID0gYW5zd2VyOyAgLy8vXG5cbiAgICBjb25zdCB2YWxpZCA9IChnaXRIdWJIb3N0TmFtZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIGlmIChnaXRIdWJIb3N0TmFtZSA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgIGdpdEh1Ykhvc3ROYW1lID0gREVGQVVMVF9HSVRIVUJfSE9TVF9OQU1FO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgZ2l0SHViSG9zdE5hbWVcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jZWVkKCk7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhYm9ydCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJnaXRIdWJIb3N0TmFtZVByb21wdE9wZXJhdGlvbiIsInByb21wdCIsInNoZWxsVXRpbGl0aWVzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsInVzZVNTSCIsImRlc2NyaXB0aW9uIiwiR0lUSFVCX0hPU1RfTkFNRV9ERVNDUklQVElPTiIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfR0lUSFVCX0hPU1RfTkFNRV9NRVNTQUdFIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwidmFsaWRhdGVHaXRIdWJIb3N0TmFtZSIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJnaXRIdWJIb3N0TmFtZSIsInZhbGlkIiwiRU1QVFlfU1RSSU5HIiwiREVGQVVMVF9HSVRIVUJfSE9TVF9OQU1FIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OzJCQVZPOzJCQUVGOzBCQUNVOzBCQUNFOzhCQUNJOzBCQUNJO0FBRWpELE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO0FBRWxCLFNBQVNGLDhCQUE4QkcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDM0UsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0Q7SUFFbkIsSUFBSSxDQUFDQyxRQUFRO1FBQ1hIO1FBRUE7SUFDRjtJQUVBLE1BQU1JLGNBQWNDLDBDQUE0QixFQUMxQ0MsZUFBZUMsMENBQWdDLEVBQy9DQyxxQkFBcUJDLGdDQUFzQixFQUMzQ0MsVUFBVTtRQUNSTjtRQUNBRTtRQUNBRTtJQUNGO0lBRU5WLE9BQU9ZLFNBQVMsQ0FBQ0M7UUFDZixJQUFJQyxpQkFBaUJELFFBQVMsR0FBRztRQUVqQyxNQUFNRSxRQUFTRCxtQkFBbUI7UUFFbEMsSUFBSUMsT0FBTztZQUNULElBQUlELG1CQUFtQkUsdUJBQVksRUFBRTtnQkFDbkNGLGlCQUFpQkcsa0NBQXdCO1lBQzNDO1lBRUFDLE9BQU9DLE1BQU0sQ0FBQ2YsU0FBUztnQkFDckJVO1lBQ0Y7WUFFQVo7WUFFQTtRQUNGO1FBRUFDO0lBQ0Y7QUFDRiJ9