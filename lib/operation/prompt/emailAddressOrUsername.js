"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return emailAddressOrUsernamePromptOperation;
    }
});
var _necessary = require("necessary");
var _validate = require("../../utilities/validate");
var _descriptions = require("../../descriptions");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function emailAddressOrUsernamePromptOperation(proceed, abort, context) {
    var emailAddressOrUsername = context.emailAddressOrUsername, errorMessage = _messages.INVALID_EMAIL_ADDRESS_OR_USERNAME_MESSAGE;
    if (emailAddressOrUsername !== null) {
        var valid = (0, _validate.validateEmailAddressOrUsername)(emailAddressOrUsername);
        if (valid) {
            proceed();
            return;
        } else {
            console.log(errorMessage);
        }
    }
    var description = _descriptions.EMAIL_ADDRESS_OR_USERNAME_DESCRIPTION, validationFunction = _validate.validateEmailAddressOrUsername, options = {
        description: description,
        errorMessage: errorMessage,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var emailAddressOrUsername = answer, valid = emailAddressOrUsername !== null;
        if (valid) {
            Object.assign(context, {
                emailAddressOrUsername: emailAddressOrUsername
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2VtYWlsQWRkcmVzc09yVXNlcm5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNoZWxsVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsQWRkcmVzc09yVXNlcm5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBFTUFJTF9BRERSRVNTX09SX1VTRVJOQU1FX0RFU0NSSVBUSU9OIH0gZnJvbSBcIi4uLy4uL2Rlc2NyaXB0aW9uc1wiO1xuaW1wb3J0IHsgSU5WQUxJRF9FTUFJTF9BRERSRVNTX09SX1VTRVJOQU1FX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbWFpbEFkZHJlc3NPclVzZXJuYW1lUHJvbXB0T3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgZW1haWxBZGRyZXNzT3JVc2VybmFtZSB9ID0gY29udGV4dCxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gSU5WQUxJRF9FTUFJTF9BRERSRVNTX09SX1VTRVJOQU1FX01FU1NBR0U7XG4gIFxuICBpZiAoZW1haWxBZGRyZXNzT3JVc2VybmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVFbWFpbEFkZHJlc3NPclVzZXJuYW1lKGVtYWlsQWRkcmVzc09yVXNlcm5hbWUpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBwcm9jZWVkKCk7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IEVNQUlMX0FERFJFU1NfT1JfVVNFUk5BTUVfREVTQ1JJUFRJT04sXG4gICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IHZhbGlkYXRlRW1haWxBZGRyZXNzT3JVc2VybmFtZSwgIC8vL1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICBwcm9tcHQob3B0aW9ucywgKGFuc3dlcikgPT4ge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzc09yVXNlcm5hbWUgPSBhbnN3ZXIsICAvLy9cbiAgICAgICAgICB2YWxpZCA9IChlbWFpbEFkZHJlc3NPclVzZXJuYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGVtYWlsQWRkcmVzc09yVXNlcm5hbWVcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jZWVkKCk7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhYm9ydCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJlbWFpbEFkZHJlc3NPclVzZXJuYW1lUHJvbXB0T3BlcmF0aW9uIiwicHJvbXB0Iiwic2hlbGxVdGlsaXRpZXMiLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwiZW1haWxBZGRyZXNzT3JVc2VybmFtZSIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfRU1BSUxfQUREUkVTU19PUl9VU0VSTkFNRV9NRVNTQUdFIiwidmFsaWQiLCJ2YWxpZGF0ZUVtYWlsQWRkcmVzc09yVXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGVzY3JpcHRpb24iLCJFTUFJTF9BRERSRVNTX09SX1VTRVJOQU1FX0RFU0NSSVBUSU9OIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7Ozt5QkFSTzt3QkFFZ0I7NEJBQ087d0JBQ0k7QUFFMUQsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxTQUFTRCxzQ0FBc0NHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ25GLElBQU0sQUFBRUMseUJBQTJCRCxRQUEzQkMsd0JBQ0ZDLGVBQWVDLG1EQUF5QztJQUU5RCxJQUFJRiwyQkFBMkIsTUFBTTtRQUNuQyxJQUFNRyxRQUFRQyxJQUFBQSx3Q0FBOEIsRUFBQ0o7UUFFN0MsSUFBSUcsT0FBTztZQUNUTjtZQUVBO1FBQ0YsT0FBTztZQUNMUSxRQUFRQyxHQUFHLENBQUNMO1FBQ2Q7SUFDRjtJQUVBLElBQU1NLGNBQWNDLG1EQUFxQyxFQUNuREMscUJBQXFCTCx3Q0FBOEIsRUFDbkRNLFVBQVU7UUFDUkgsYUFBQUE7UUFDQU4sY0FBQUE7UUFDQVEsb0JBQUFBO0lBQ0Y7SUFFTmQsT0FBT2UsU0FBUyxTQUFDQztRQUNmLElBQU1YLHlCQUF5QlcsUUFDekJSLFFBQVNILDJCQUEyQjtRQUUxQyxJQUFJRyxPQUFPO1lBQ1RTLE9BQU9DLE1BQU0sQ0FBQ2QsU0FBUztnQkFDckJDLHdCQUFBQTtZQUNGO1lBRUFIO1lBRUE7UUFDRjtRQUVBQztJQUNGO0FBQ0YifQ==