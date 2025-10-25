"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return emailAddressPromptOperation;
    }
});
var _necessary = require("necessary");
var _validate = require("../../utilities/validate");
var _descriptions = require("../../descriptions");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function emailAddressPromptOperation(proceed, abort, context) {
    var emailAddress = context.emailAddress, errorMessage = _messages.INVALID_EMAIL_ADDRESS_MESSAGE;
    if (emailAddress !== null) {
        var valid = (0, _validate.validateEmailAddress)(emailAddress);
        if (valid) {
            proceed();
            return;
        } else {
            console.log(errorMessage);
        }
    }
    var description = _descriptions.EMAIL_ADDRESS_DESCRIPTION, validationFunction = _validate.validateEmailAddress, options = {
        description: description,
        errorMessage: errorMessage,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var emailAddress = answer, valid = emailAddress !== null;
        if (valid) {
            Object.assign(context, {
                emailAddress: emailAddress
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2VtYWlsQWRkcmVzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2hlbGxVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHZhbGlkYXRlRW1haWxBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YWxpZGF0ZVwiO1xuaW1wb3J0IHsgRU1BSUxfQUREUkVTU19ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcbmltcG9ydCB7IElOVkFMSURfRU1BSUxfQUREUkVTU19NRVNTQUdFIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgcHJvbXB0IH0gPSBzaGVsbFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW1haWxBZGRyZXNzUHJvbXB0T3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgZW1haWxBZGRyZXNzIH0gPSBjb250ZXh0LFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBJTlZBTElEX0VNQUlMX0FERFJFU1NfTUVTU0FHRTtcbiAgXG4gIGlmIChlbWFpbEFkZHJlc3MgIT09IG51bGwpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlRW1haWxBZGRyZXNzKGVtYWlsQWRkcmVzcyk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gRU1BSUxfQUREUkVTU19ERVNDUklQVElPTixcbiAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uID0gdmFsaWRhdGVFbWFpbEFkZHJlc3MsICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIChhbnN3ZXIpID0+IHtcbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSBhbnN3ZXIsICAvLy9cbiAgICAgICAgICB2YWxpZCA9IChlbWFpbEFkZHJlc3MgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgZW1haWxBZGRyZXNzXG4gICAgICB9KTtcblxuICAgICAgcHJvY2VlZCgpO1xuICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWJvcnQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZW1haWxBZGRyZXNzUHJvbXB0T3BlcmF0aW9uIiwicHJvbXB0Iiwic2hlbGxVdGlsaXRpZXMiLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwiZW1haWxBZGRyZXNzIiwiZXJyb3JNZXNzYWdlIiwiSU5WQUxJRF9FTUFJTF9BRERSRVNTX01FU1NBR0UiLCJ2YWxpZCIsInZhbGlkYXRlRW1haWxBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImRlc2NyaXB0aW9uIiwiRU1BSUxfQUREUkVTU19ERVNDUklQVElPTiIsInZhbGlkYXRpb25GdW5jdGlvbiIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7eUJBUk87d0JBRU07NEJBQ0s7d0JBQ0k7QUFFOUMsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxTQUFTRCw0QkFBNEJHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ3pFLElBQU0sQUFBRUMsZUFBaUJELFFBQWpCQyxjQUNGQyxlQUFlQyx1Q0FBNkI7SUFFbEQsSUFBSUYsaUJBQWlCLE1BQU07UUFDekIsSUFBTUcsUUFBUUMsSUFBQUEsOEJBQW9CLEVBQUNKO1FBRW5DLElBQUlHLE9BQU87WUFDVE47WUFFQTtRQUNGLE9BQU87WUFDTFEsUUFBUUMsR0FBRyxDQUFDTDtRQUNkO0lBQ0Y7SUFFQSxJQUFNTSxjQUFjQyx1Q0FBeUIsRUFDdkNDLHFCQUFxQkwsOEJBQW9CLEVBQ3pDTSxVQUFVO1FBQ1JILGFBQUFBO1FBQ0FOLGNBQUFBO1FBQ0FRLG9CQUFBQTtJQUNGO0lBRU5kLE9BQU9lLFNBQVMsU0FBQ0M7UUFDZixJQUFNWCxlQUFlVyxRQUNmUixRQUFTSCxpQkFBaUI7UUFFaEMsSUFBSUcsT0FBTztZQUNUUyxPQUFPQyxNQUFNLENBQUNkLFNBQVM7Z0JBQ3JCQyxjQUFBQTtZQUNGO1lBRUFIO1lBRUE7UUFDRjtRQUVBQztJQUNGO0FBQ0YifQ==