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
const _necessary = require("necessary");
const _validate = require("../../utilities/validate");
const _descriptions = require("../../descriptions");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function usernamePromptOperation(proceed, abort, context) {
    const { username } = context, errorMessage = _messages.INVALID_USERNAME_MESSAGE;
    if (username !== null) {
        const valid = (0, _validate.validateUsername)(username);
        if (valid) {
            proceed();
            return;
        } else {
            console.log(errorMessage);
        }
    }
    const description = _descriptions.USERNAME_DESCRIPTION, validationFunction = _validate.validateUsername, options = {
        description,
        errorMessage,
        validationFunction
    };
    prompt(options, (answer)=>{
        const username = answer, valid = username !== null;
        if (valid) {
            Object.assign(context, {
                username
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3VzZXJuYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVVc2VybmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IFVTRVJOQU1FX0RFU0NSSVBUSU9OIH0gZnJvbSBcIi4uLy4uL2Rlc2NyaXB0aW9uc1wiO1xuaW1wb3J0IHsgSU5WQUxJRF9VU0VSTkFNRV9NRVNTQUdFIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgcHJvbXB0IH0gPSBzaGVsbFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlcm5hbWVQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gY29udGV4dCxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gSU5WQUxJRF9VU0VSTkFNRV9NRVNTQUdFO1xuXG4gIGlmICh1c2VybmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gVVNFUk5BTUVfREVTQ1JJUFRJT04sXG4gICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IHZhbGlkYXRlVXNlcm5hbWUsICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIChhbnN3ZXIpID0+IHtcbiAgICBjb25zdCB1c2VybmFtZSA9IGFuc3dlciwgIC8vL1xuICAgICAgICAgIHZhbGlkID0gKHVzZXJuYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHVzZXJuYW1lXG4gICAgICB9KTtcblxuICAgICAgcHJvY2VlZCgpO1xuICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWJvcnQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsidXNlcm5hbWVQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJ1c2VybmFtZSIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfVVNFUk5BTUVfTUVTU0FHRSIsInZhbGlkIiwidmFsaWRhdGVVc2VybmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwdGlvbiIsIlVTRVJOQU1FX0RFU0NSSVBUSU9OIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzsyQkFSTzswQkFFRTs4QkFDSTswQkFDSTtBQUV6QyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYztBQUVsQixTQUFTRix3QkFBd0JHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ3JFLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdELFNBQ2ZFLGVBQWVDLGtDQUF3QjtJQUU3QyxJQUFJRixhQUFhLE1BQU07UUFDckIsTUFBTUcsUUFBUUMsSUFBQUEsMEJBQWdCLEVBQUNKO1FBRS9CLElBQUlHLE9BQU87WUFDVE47WUFFQTtRQUNGLE9BQU87WUFDTFEsUUFBUUMsR0FBRyxDQUFDTDtRQUNkO0lBQ0Y7SUFFQSxNQUFNTSxjQUFjQyxrQ0FBb0IsRUFDbENDLHFCQUFxQkwsMEJBQWdCLEVBQ3JDTSxVQUFVO1FBQ1JIO1FBQ0FOO1FBQ0FRO0lBQ0Y7SUFFTmQsT0FBT2UsU0FBUyxDQUFDQztRQUNmLE1BQU1YLFdBQVdXLFFBQ1hSLFFBQVNILGFBQWE7UUFFNUIsSUFBSUcsT0FBTztZQUNUUyxPQUFPQyxNQUFNLENBQUNkLFNBQVM7Z0JBQ3JCQztZQUNGO1lBRUFIO1lBRUE7UUFDRjtRQUVBQztJQUNGO0FBQ0YifQ==