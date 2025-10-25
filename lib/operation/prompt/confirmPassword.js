"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return confirmPasswordPromptOperation;
    }
});
var _necessary = require("necessary");
var _descriptions = require("../../descriptions");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function confirmPasswordPromptOperation(proceed, abort, context) {
    var password = context.password, hidden = true, description = _descriptions.CONFIRM_PASSWORD_DESCRIPTION, errorMessage = _messages.PASSWORDS_DO_NOT_MATCH_MESSAGE, options = {
        hidden: hidden,
        description: description,
        errorMessage: errorMessage,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var password = answer, valid = password !== null;
        if (valid) {
            proceed();
            return;
        }
        abort();
    });
    function validationFunction(value) {
        var valid = value === password; ///
        return valid;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2NvbmZpcm1QYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2hlbGxVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IENPTkZJUk1fUEFTU1dPUkRfREVTQ1JJUFRJT04gfSBmcm9tIFwiLi4vLi4vZGVzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBQQVNTV09SRFNfRE9fTk9UX01BVENIX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maXJtUGFzc3dvcmRQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwYXNzd29yZCB9ID0gY29udGV4dCxcbiAgICAgICAgaGlkZGVuID0gdHJ1ZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBDT05GSVJNX1BBU1NXT1JEX0RFU0NSSVBUSU9OLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBQQVNTV09SRFNfRE9fTk9UX01BVENIX01FU1NBR0UsXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgaGlkZGVuLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICBwcm9tcHQob3B0aW9ucywgKGFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gYW5zd2VyLCAgLy8vXG4gICAgICAgICAgdmFsaWQgPSAocGFzc3dvcmQgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBwcm9jZWVkKCk7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhYm9ydCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiB2YWxpZGF0aW9uRnVuY3Rpb24odmFsdWUpIHtcbiAgICBjb25zdCB2YWxpZCA9ICh2YWx1ZSA9PT0gcGFzc3dvcmQpOyAvLy9cblxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvbmZpcm1QYXNzd29yZFByb21wdE9wZXJhdGlvbiIsInByb21wdCIsInNoZWxsVXRpbGl0aWVzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsInBhc3N3b3JkIiwiaGlkZGVuIiwiZGVzY3JpcHRpb24iLCJDT05GSVJNX1BBU1NXT1JEX0RFU0NSSVBUSU9OIiwiZXJyb3JNZXNzYWdlIiwiUEFTU1dPUkRTX0RPX05PVF9NQVRDSF9NRVNTQUdFIiwib3B0aW9ucyIsInZhbGlkYXRpb25GdW5jdGlvbiIsImFuc3dlciIsInZhbGlkIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7eUJBUE87NEJBRWM7d0JBQ0U7QUFFL0MsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxTQUFTRCwrQkFBK0JHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQzVFLElBQU0sQUFBRUMsV0FBYUQsUUFBYkMsVUFDRkMsU0FBUyxNQUNUQyxjQUFjQywwQ0FBNEIsRUFDMUNDLGVBQWVDLHdDQUE4QixFQUM3Q0MsVUFBVTtRQUNSTCxRQUFBQTtRQUNBQyxhQUFBQTtRQUNBRSxjQUFBQTtRQUNBRyxvQkFBQUE7SUFDRjtJQUVOWixPQUFPVyxTQUFTLFNBQUNFO1FBQ2YsSUFBTVIsV0FBV1EsUUFDWEMsUUFBU1QsYUFBYTtRQUU1QixJQUFJUyxPQUFPO1lBQ1RaO1lBRUE7UUFDRjtRQUVBQztJQUNGO0lBRUEsU0FBU1MsbUJBQW1CRyxLQUFLO1FBQy9CLElBQU1ELFFBQVNDLFVBQVVWLFVBQVcsR0FBRztRQUV2QyxPQUFPUztJQUNUO0FBQ0YifQ==