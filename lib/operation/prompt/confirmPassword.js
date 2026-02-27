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
const _necessary = require("necessary");
const _descriptions = require("../../descriptions");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function confirmPasswordPromptOperation(proceed, abort, context) {
    const { password } = context, hidden = true, description = _descriptions.CONFIRM_PASSWORD_DESCRIPTION, errorMessage = _messages.PASSWORDS_DO_NOT_MATCH_MESSAGE, options = {
        hidden,
        description,
        errorMessage,
        validationFunction
    };
    prompt(options, (answer)=>{
        const password = answer, valid = password !== null;
        if (valid) {
            proceed();
            return;
        }
        abort();
    });
    function validationFunction(value) {
        const valid = value === password; ///
        return valid;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2NvbmZpcm1QYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2hlbGxVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IENPTkZJUk1fUEFTU1dPUkRfREVTQ1JJUFRJT04gfSBmcm9tIFwiLi4vLi4vZGVzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBQQVNTV09SRFNfRE9fTk9UX01BVENIX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maXJtUGFzc3dvcmRQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwYXNzd29yZCB9ID0gY29udGV4dCxcbiAgICAgICAgaGlkZGVuID0gdHJ1ZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBDT05GSVJNX1BBU1NXT1JEX0RFU0NSSVBUSU9OLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBQQVNTV09SRFNfRE9fTk9UX01BVENIX01FU1NBR0UsXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgaGlkZGVuLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICBwcm9tcHQob3B0aW9ucywgKGFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gYW5zd2VyLCAgLy8vXG4gICAgICAgICAgdmFsaWQgPSAocGFzc3dvcmQgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBwcm9jZWVkKCk7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhYm9ydCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiB2YWxpZGF0aW9uRnVuY3Rpb24odmFsdWUpIHtcbiAgICBjb25zdCB2YWxpZCA9ICh2YWx1ZSA9PT0gcGFzc3dvcmQpOyAvLy9cblxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvbmZpcm1QYXNzd29yZFByb21wdE9wZXJhdGlvbiIsInByb21wdCIsInNoZWxsVXRpbGl0aWVzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsInBhc3N3b3JkIiwiaGlkZGVuIiwiZGVzY3JpcHRpb24iLCJDT05GSVJNX1BBU1NXT1JEX0RFU0NSSVBUSU9OIiwiZXJyb3JNZXNzYWdlIiwiUEFTU1dPUkRTX0RPX05PVF9NQVRDSF9NRVNTQUdFIiwib3B0aW9ucyIsInZhbGlkYXRpb25GdW5jdGlvbiIsImFuc3dlciIsInZhbGlkIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7MkJBUE87OEJBRWM7MEJBQ0U7QUFFL0MsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFbEIsU0FBU0YsK0JBQStCRyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUM1RSxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRCxTQUNmRSxTQUFTLE1BQ1RDLGNBQWNDLDBDQUE0QixFQUMxQ0MsZUFBZUMsd0NBQThCLEVBQzdDQyxVQUFVO1FBQ1JMO1FBQ0FDO1FBQ0FFO1FBQ0FHO0lBQ0Y7SUFFTlosT0FBT1csU0FBUyxDQUFDRTtRQUNmLE1BQU1SLFdBQVdRLFFBQ1hDLFFBQVNULGFBQWE7UUFFNUIsSUFBSVMsT0FBTztZQUNUWjtZQUVBO1FBQ0Y7UUFFQUM7SUFDRjtJQUVBLFNBQVNTLG1CQUFtQkcsS0FBSztRQUMvQixNQUFNRCxRQUFTQyxVQUFVVixVQUFXLEdBQUc7UUFFdkMsT0FBT1M7SUFDVDtBQUNGIn0=