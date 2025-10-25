"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return repositoryNamePromptOperation;
    }
});
var _necessary = require("necessary");
var _validate = require("../../utilities/validate");
var _descriptions = require("../../descriptions");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function repositoryNamePromptOperation(proceed, abort, context) {
    var repositoryName = context.repositoryName, errorMessage = _messages.INVALID_REPOSITORY_NAME_MESSAGE;
    if (repositoryName !== null) {
        var valid = (0, _validate.validateRepositoryName)(repositoryName);
        if (valid) {
            proceed();
            return;
        }
        console.log(errorMessage);
    }
    var description = _descriptions.REPOSITORY_NAME_DESCRIPTION, validationFunction = _validate.validateRepositoryName, options = {
        description: description,
        errorMessage: errorMessage,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var repositoryName = answer, valid = repositoryName !== null;
        if (valid) {
            Object.assign(context, {
                repositoryName: repositoryName
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3JlcG9zaXRvcnlOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVSZXBvc2l0b3J5TmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IFJFUE9TSVRPUllfTkFNRV9ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcbmltcG9ydCB7IElOVkFMSURfUkVQT1NJVE9SWV9OQU1FX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXBvc2l0b3J5TmFtZVByb21wdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlcG9zaXRvcnlOYW1lIH0gPSBjb250ZXh0LFxuXHRcdFx0XHRlcnJvck1lc3NhZ2UgPSBJTlZBTElEX1JFUE9TSVRPUllfTkFNRV9NRVNTQUdFO1xuXG4gIGlmIChyZXBvc2l0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVSZXBvc2l0b3J5TmFtZShyZXBvc2l0b3J5TmFtZSk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gIH1cblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IFJFUE9TSVRPUllfTkFNRV9ERVNDUklQVElPTixcbiAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uID0gdmFsaWRhdGVSZXBvc2l0b3J5TmFtZSwgLy8vXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvblxuICAgICAgICB9O1xuXG4gIHByb21wdChvcHRpb25zLCAoYW5zd2VyKSA9PiB7XG4gICAgY29uc3QgcmVwb3NpdG9yeU5hbWUgPSBhbnN3ZXIsIC8vL1xuICAgICAgICAgIHZhbGlkID0gKHJlcG9zaXRvcnlOYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHJlcG9zaXRvcnlOYW1lXG4gICAgICB9KTtcblxuICAgICAgcHJvY2VlZCgpO1xuICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWJvcnQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicmVwb3NpdG9yeU5hbWVQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZXBvc2l0b3J5TmFtZSIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfUkVQT1NJVE9SWV9OQU1FX01FU1NBR0UiLCJ2YWxpZCIsInZhbGlkYXRlUmVwb3NpdG9yeU5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGVzY3JpcHRpb24iLCJSRVBPU0lUT1JZX05BTUVfREVTQ1JJUFRJT04iLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O3lCQVJPO3dCQUVROzRCQUNLO3dCQUNJO0FBRWhELElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sU0FBU0QsOEJBQThCRyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUMzRSxJQUFNLEFBQUVDLGlCQUFtQkQsUUFBbkJDLGdCQUNOQyxlQUFlQyx5Q0FBK0I7SUFFaEQsSUFBSUYsbUJBQW1CLE1BQU07UUFDM0IsSUFBTUcsUUFBUUMsSUFBQUEsZ0NBQXNCLEVBQUNKO1FBRXJDLElBQUlHLE9BQU87WUFDVE47WUFFQTtRQUNGO1FBRUFRLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDZDtJQUVBLElBQU1NLGNBQWNDLHlDQUEyQixFQUN6Q0MscUJBQXFCTCxnQ0FBc0IsRUFDM0NNLFVBQVU7UUFDUkgsYUFBQUE7UUFDQU4sY0FBQUE7UUFDQVEsb0JBQUFBO0lBQ0Y7SUFFTmQsT0FBT2UsU0FBUyxTQUFDQztRQUNmLElBQU1YLGlCQUFpQlcsUUFDakJSLFFBQVNILG1CQUFtQjtRQUVsQyxJQUFJRyxPQUFPO1lBQ1RTLE9BQU9DLE1BQU0sQ0FBQ2QsU0FBUztnQkFDckJDLGdCQUFBQTtZQUNGO1lBRUFIO1lBRUE7UUFDRjtRQUVBQztJQUNGO0FBQ0YifQ==