"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return usernamePromptOperation;
    }
});
var _necessary = require("necessary");
var _validate = require("../../utilities/validate");
var _descriptions = require("../../descriptions");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function usernamePromptOperation(proceed, abort, context) {
    var username = context.username, errorMessage = _messages.INVALID_USERNAME_MESSAGE;
    if (username !== null) {
        var valid = (0, _validate.validateUsername)(username);
        if (valid) {
            proceed();
            return;
        } else {
            console.log(errorMessage);
        }
    }
    var description = _descriptions.USERNAME_DESCRIPTION, validationFunction = _validate.validateUsername, options = {
        description: description,
        errorMessage: errorMessage,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var username = answer, valid = username !== null;
        if (valid) {
            Object.assign(context, {
                username: username
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3VzZXJuYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVVc2VybmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IFVTRVJOQU1FX0RFU0NSSVBUSU9OIH0gZnJvbSBcIi4uLy4uL2Rlc2NyaXB0aW9uc1wiO1xuaW1wb3J0IHsgSU5WQUxJRF9VU0VSTkFNRV9NRVNTQUdFIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgcHJvbXB0IH0gPSBzaGVsbFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlcm5hbWVQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gY29udGV4dCxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gSU5WQUxJRF9VU0VSTkFNRV9NRVNTQUdFO1xuXG4gIGlmICh1c2VybmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gVVNFUk5BTUVfREVTQ1JJUFRJT04sXG4gICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IHZhbGlkYXRlVXNlcm5hbWUsICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIChhbnN3ZXIpID0+IHtcbiAgICBjb25zdCB1c2VybmFtZSA9IGFuc3dlciwgIC8vL1xuICAgICAgICAgIHZhbGlkID0gKHVzZXJuYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHVzZXJuYW1lXG4gICAgICB9KTtcblxuICAgICAgcHJvY2VlZCgpO1xuICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWJvcnQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsidXNlcm5hbWVQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJ1c2VybmFtZSIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfVVNFUk5BTUVfTUVTU0FHRSIsInZhbGlkIiwidmFsaWRhdGVVc2VybmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwdGlvbiIsIlVTRVJOQU1FX0RFU0NSSVBUSU9OIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7Ozt5QkFSTzt3QkFFRTs0QkFDSTt3QkFDSTtBQUV6QyxJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLFNBQVNELHdCQUF3QkcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDckUsSUFBTSxBQUFFQyxXQUFhRCxRQUFiQyxVQUNGQyxlQUFlQyxrQ0FBd0I7SUFFN0MsSUFBSUYsYUFBYSxNQUFNO1FBQ3JCLElBQU1HLFFBQVFDLElBQUFBLDBCQUFnQixFQUFDSjtRQUUvQixJQUFJRyxPQUFPO1lBQ1ROO1lBRUE7UUFDRixPQUFPO1lBQ0xRLFFBQVFDLEdBQUcsQ0FBQ0w7UUFDZDtJQUNGO0lBRUEsSUFBTU0sY0FBY0Msa0NBQW9CLEVBQ2xDQyxxQkFBcUJMLDBCQUFnQixFQUNyQ00sVUFBVTtRQUNSSCxhQUFBQTtRQUNBTixjQUFBQTtRQUNBUSxvQkFBQUE7SUFDRjtJQUVOZCxPQUFPZSxTQUFTLFNBQUNDO1FBQ2YsSUFBTVgsV0FBV1csUUFDWFIsUUFBU0gsYUFBYTtRQUU1QixJQUFJRyxPQUFPO1lBQ1RTLE9BQU9DLE1BQU0sQ0FBQ2QsU0FBUztnQkFDckJDLFVBQUFBO1lBQ0Y7WUFFQUg7WUFFQTtRQUNGO1FBRUFDO0lBQ0Y7QUFDRiJ9