"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return useSSHPromptOperation;
    }
});
const _necessary = require("necessary");
const _validate = require("../../utilities/validate");
const _prompt = require("../../utilities/prompt");
const _descriptions = require("../../descriptions");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function useSSHPromptOperation(proceed, abort, context) {
    const description = _descriptions.USE_SSH_DESCRIPTION, errorMessage = _messages.INVALID_AFFIRMATION_MESSAGE, validationFunction = _validate.validateAffirmation, options = {
        description,
        errorMessage,
        validationFunction
    };
    prompt(options, (answer)=>{
        const valid = answer !== null;
        if (valid) {
            const affirmative = (0, _prompt.isAnswerAffirmative)(answer), useSSH = affirmative; ///
            Object.assign(context, {
                useSSH
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3VzZVNTSC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2hlbGxVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHZhbGlkYXRlQWZmaXJtYXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBpc0Fuc3dlckFmZmlybWF0aXZlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wcm9tcHRcIjtcbmltcG9ydCB7IFVTRV9TU0hfREVTQ1JJUFRJT04gfSBmcm9tIFwiLi4vLi4vZGVzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBJTlZBTElEX0FGRklSTUFUSU9OX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTU0hQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBVU0VfU1NIX0RFU0NSSVBUSU9OLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBJTlZBTElEX0FGRklSTUFUSU9OX01FU1NBR0UsXG4gICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IHZhbGlkYXRlQWZmaXJtYXRpb24sICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIChhbnN3ZXIpID0+IHtcbiAgICBjb25zdCB2YWxpZCA9IChhbnN3ZXIgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBjb25zdCBhZmZpcm1hdGl2ZSA9IGlzQW5zd2VyQWZmaXJtYXRpdmUoYW5zd2VyKSxcbiAgICAgICAgICAgIHVzZVNTSCA9IGFmZmlybWF0aXZlOyAvLy9cblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHVzZVNTSFxuICAgICAgfSk7XG5cbiAgICAgIHByb2NlZWQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFib3J0KCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInVzZVNTSFByb21wdE9wZXJhdGlvbiIsInByb21wdCIsInNoZWxsVXRpbGl0aWVzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImRlc2NyaXB0aW9uIiwiVVNFX1NTSF9ERVNDUklQVElPTiIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfQUZGSVJNQVRJT05fTUVTU0FHRSIsInZhbGlkYXRpb25GdW5jdGlvbiIsInZhbGlkYXRlQWZmaXJtYXRpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwidmFsaWQiLCJhZmZpcm1hdGl2ZSIsImlzQW5zd2VyQWZmaXJtYXRpdmUiLCJ1c2VTU0giLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7MkJBVE87MEJBRUs7d0JBQ0E7OEJBQ0E7MEJBQ1E7QUFFNUMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFbEIsU0FBU0Ysc0JBQXNCRyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNuRSxNQUFNQyxjQUFjQyxpQ0FBbUIsRUFDakNDLGVBQWVDLHFDQUEyQixFQUMxQ0MscUJBQXFCQyw2QkFBbUIsRUFDeENDLFVBQVU7UUFDUk47UUFDQUU7UUFDQUU7SUFDRjtJQUVOVCxPQUFPVyxTQUFTLENBQUNDO1FBQ2YsTUFBTUMsUUFBU0QsV0FBVztRQUUxQixJQUFJQyxPQUFPO1lBQ1QsTUFBTUMsY0FBY0MsSUFBQUEsMkJBQW1CLEVBQUNILFNBQ2xDSSxTQUFTRixhQUFhLEdBQUc7WUFFL0JHLE9BQU9DLE1BQU0sQ0FBQ2QsU0FBUztnQkFDckJZO1lBQ0Y7WUFFQWQ7WUFFQTtRQUNGO1FBRUFDO0lBQ0Y7QUFDRiJ9