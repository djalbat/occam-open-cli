"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return passwordPromptOperation;
    }
});
const _necessary = require("necessary");
const _validate = require("../../utilities/validate");
const _descriptions = require("../../descriptions");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function passwordPromptOperation(proceed, abort, context) {
    const hidden = true, description = _descriptions.PASSWORD_DESCRIPTION, errorMessage = _messages.INVALID_PASSWORD_MESSAGE, validationFunction = _validate.validatePassword, options = {
        hidden,
        description,
        errorMessage,
        validationFunction
    };
    prompt(options, (answer)=>{
        const password = answer, valid = password !== null;
        if (valid) {
            Object.assign(context, {
                password
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3Bhc3N3b3JkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVQYXNzd29yZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IFBBU1NXT1JEX0RFU0NSSVBUSU9OIH0gZnJvbSBcIi4uLy4uL2Rlc2NyaXB0aW9uc1wiO1xuaW1wb3J0IHsgSU5WQUxJRF9QQVNTV09SRF9NRVNTQUdFIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgcHJvbXB0IH0gPSBzaGVsbFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFzc3dvcmRQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgaGlkZGVuID0gdHJ1ZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBQQVNTV09SRF9ERVNDUklQVElPTixcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gSU5WQUxJRF9QQVNTV09SRF9NRVNTQUdFLFxuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSB2YWxpZGF0ZVBhc3N3b3JkLCAgLy8vXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgaGlkZGVuLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICBwcm9tcHQob3B0aW9ucywgKGFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gYW5zd2VyLCAgLy8vXG4gICAgICAgICAgdmFsaWQgPSAocGFzc3dvcmQgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jZWVkKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhYm9ydCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJwYXNzd29yZFByb21wdE9wZXJhdGlvbiIsInByb21wdCIsInNoZWxsVXRpbGl0aWVzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImhpZGRlbiIsImRlc2NyaXB0aW9uIiwiUEFTU1dPUkRfREVTQ1JJUFRJT04iLCJlcnJvck1lc3NhZ2UiLCJJTlZBTElEX1BBU1NXT1JEX01FU1NBR0UiLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJ2YWxpZGF0ZVBhc3N3b3JkIiwib3B0aW9ucyIsImFuc3dlciIsInBhc3N3b3JkIiwidmFsaWQiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7MkJBUk87MEJBRUU7OEJBQ0k7MEJBQ0k7QUFFekMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFbEIsU0FBU0Ysd0JBQXdCRyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNyRSxNQUFNQyxTQUFTLE1BQ1RDLGNBQWNDLGtDQUFvQixFQUNsQ0MsZUFBZUMsa0NBQXdCLEVBQ3ZDQyxxQkFBcUJDLDBCQUFnQixFQUNyQ0MsVUFBVTtRQUNSUDtRQUNBQztRQUNBRTtRQUNBRTtJQUNGO0lBRU5WLE9BQU9ZLFNBQVMsQ0FBQ0M7UUFDZixNQUFNQyxXQUFXRCxRQUNYRSxRQUFTRCxhQUFhO1FBRTVCLElBQUlDLE9BQU87WUFDVEMsT0FBT0MsTUFBTSxDQUFDYixTQUFTO2dCQUNyQlU7WUFDRjtZQUVBWjtZQUVBO1FBQ0Y7UUFFQUM7SUFDRjtBQUNGIn0=