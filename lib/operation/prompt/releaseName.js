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
var _necessary = require("necessary");
var _validate = require("../../utilities/validate");
var _descriptions = require("../../descriptions");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function releaseNamePromptOperation(proceed, abort, context) {
    var releaseName = context.releaseName, errorMessage = _messages.INVALID_RELEASE_NAME_MESSAGE;
    if (releaseName !== null) {
        var valid = (0, _validate.validateReleaseName)(releaseName);
        if (valid) {
            proceed();
            return;
        }
        console.log(errorMessage);
    }
    var description = _descriptions.RELEASE_NAME_DESCRIPTION, validationFunction = _validate.validateReleaseName, options = {
        description: description,
        errorMessage: errorMessage,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var releaseName = answer, valid = releaseName !== null;
        if (valid) {
            Object.assign(context, {
                releaseName: releaseName
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3JlbGVhc2VOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVSZWxlYXNlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IFJFTEVBU0VfTkFNRV9ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcbmltcG9ydCB7IElOVkFMSURfUkVMRUFTRV9OQU1FX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxlYXNlTmFtZVByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VOYW1lIH0gPSBjb250ZXh0LFxuXHRcdFx0XHRlcnJvck1lc3NhZ2UgPSBJTlZBTElEX1JFTEVBU0VfTkFNRV9NRVNTQUdFO1xuXG4gIGlmIChyZWxlYXNlTmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVSZWxlYXNlTmFtZShyZWxlYXNlTmFtZSk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gIH1cblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IFJFTEVBU0VfTkFNRV9ERVNDUklQVElPTixcbiAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uID0gdmFsaWRhdGVSZWxlYXNlTmFtZSwgLy8vXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvblxuICAgICAgICB9O1xuXG4gIHByb21wdChvcHRpb25zLCAoYW5zd2VyKSA9PiB7XG4gICAgY29uc3QgcmVsZWFzZU5hbWUgPSBhbnN3ZXIsIC8vL1xuICAgICAgICAgIHZhbGlkID0gKHJlbGVhc2VOYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHJlbGVhc2VOYW1lXG4gICAgICB9KTtcblxuICAgICAgcHJvY2VlZCgpO1xuICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWJvcnQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicmVsZWFzZU5hbWVQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZWxlYXNlTmFtZSIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfUkVMRUFTRV9OQU1FX01FU1NBR0UiLCJ2YWxpZCIsInZhbGlkYXRlUmVsZWFzZU5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGVzY3JpcHRpb24iLCJSRUxFQVNFX05BTUVfREVTQ1JJUFRJT04iLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O3lCQVJPO3dCQUVLOzRCQUNLO3dCQUNJO0FBRTdDLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sU0FBU0QsMkJBQTJCRyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUN4RSxJQUFNLEFBQUVDLGNBQWdCRCxRQUFoQkMsYUFDTkMsZUFBZUMsc0NBQTRCO0lBRTdDLElBQUlGLGdCQUFnQixNQUFNO1FBQ3hCLElBQU1HLFFBQVFDLElBQUFBLDZCQUFtQixFQUFDSjtRQUVsQyxJQUFJRyxPQUFPO1lBQ1ROO1lBRUE7UUFDRjtRQUVBUSxRQUFRQyxHQUFHLENBQUNMO0lBQ2Q7SUFFQSxJQUFNTSxjQUFjQyxzQ0FBd0IsRUFDdENDLHFCQUFxQkwsNkJBQW1CLEVBQ3hDTSxVQUFVO1FBQ1JILGFBQUFBO1FBQ0FOLGNBQUFBO1FBQ0FRLG9CQUFBQTtJQUNGO0lBRU5kLE9BQU9lLFNBQVMsU0FBQ0M7UUFDZixJQUFNWCxjQUFjVyxRQUNkUixRQUFTSCxnQkFBZ0I7UUFFL0IsSUFBSUcsT0FBTztZQUNUUyxPQUFPQyxNQUFNLENBQUNkLFNBQVM7Z0JBQ3JCQyxhQUFBQTtZQUNGO1lBRUFIO1lBRUE7UUFDRjtRQUVBQztJQUNGO0FBQ0YifQ==