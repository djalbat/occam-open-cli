"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return releaseNamePromptOperation;
    }
});
const _necessary = require("necessary");
const _validate = require("../../utilities/validate");
const _descriptions = require("../../descriptions");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function releaseNamePromptOperation(proceed, abort, context) {
    const { releaseName } = context, errorMessage = _messages.INVALID_RELEASE_NAME_MESSAGE;
    if (releaseName !== null) {
        const valid = (0, _validate.validateReleaseName)(releaseName);
        if (valid) {
            proceed();
            return;
        }
        console.log(errorMessage);
    }
    const description = _descriptions.RELEASE_NAME_DESCRIPTION, validationFunction = _validate.validateReleaseName, options = {
        description,
        errorMessage,
        validationFunction
    };
    prompt(options, (answer)=>{
        const releaseName = answer, valid = releaseName !== null;
        if (valid) {
            Object.assign(context, {
                releaseName
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3JlbGVhc2VOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVSZWxlYXNlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IFJFTEVBU0VfTkFNRV9ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcbmltcG9ydCB7IElOVkFMSURfUkVMRUFTRV9OQU1FX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxlYXNlTmFtZVByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VOYW1lIH0gPSBjb250ZXh0LFxuXHRcdFx0XHRlcnJvck1lc3NhZ2UgPSBJTlZBTElEX1JFTEVBU0VfTkFNRV9NRVNTQUdFO1xuXG4gIGlmIChyZWxlYXNlTmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVSZWxlYXNlTmFtZShyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gIH1cblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IFJFTEVBU0VfTkFNRV9ERVNDUklQVElPTixcbiAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uID0gdmFsaWRhdGVSZWxlYXNlTmFtZSwgLy8vXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvblxuICAgICAgICB9O1xuXG4gIHByb21wdChvcHRpb25zLCAoYW5zd2VyKSA9PiB7XG4gICAgY29uc3QgcmVsZWFzZU5hbWUgPSBhbnN3ZXIsIC8vL1xuICAgICAgICAgIHZhbGlkID0gKHJlbGVhc2VOYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHJlbGVhc2VOYW1lXG4gICAgICB9KTtcblxuICAgICAgcHJvY2VlZCgpO1xuICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWJvcnQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicmVsZWFzZU5hbWVQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZWxlYXNlTmFtZSIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfUkVMRUFTRV9OQU1FX01FU1NBR0UiLCJ2YWxpZCIsInZhbGlkYXRlUmVsZWFzZU5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGVzY3JpcHRpb24iLCJSRUxFQVNFX05BTUVfREVTQ1JJUFRJT04iLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzJCQVJPOzBCQUVLOzhCQUNLOzBCQUNJO0FBRTdDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO0FBRWxCLFNBQVNGLDJCQUEyQkcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDeEUsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR0QsU0FDdEJFLGVBQWVDLHNDQUE0QjtJQUU3QyxJQUFJRixnQkFBZ0IsTUFBTTtRQUN4QixNQUFNRyxRQUFRQyxJQUFBQSw2QkFBbUIsRUFBQ0o7UUFFbEMsSUFBSUcsT0FBTztZQUNUTjtZQUVBO1FBQ0Y7UUFFQVEsUUFBUUMsR0FBRyxDQUFDTDtJQUNkO0lBRUEsTUFBTU0sY0FBY0Msc0NBQXdCLEVBQ3RDQyxxQkFBcUJMLDZCQUFtQixFQUN4Q00sVUFBVTtRQUNSSDtRQUNBTjtRQUNBUTtJQUNGO0lBRU5kLE9BQU9lLFNBQVMsQ0FBQ0M7UUFDZixNQUFNWCxjQUFjVyxRQUNkUixRQUFTSCxnQkFBZ0I7UUFFL0IsSUFBSUcsT0FBTztZQUNUUyxPQUFPQyxNQUFNLENBQUNkLFNBQVM7Z0JBQ3JCQztZQUNGO1lBRUFIO1lBRUE7UUFDRjtRQUVBQztJQUNGO0FBQ0YifQ==