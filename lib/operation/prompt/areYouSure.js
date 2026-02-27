"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return areYouSurePromptOperation;
    }
});
const _necessary = require("necessary");
const _prompt = require("../../utilities/prompt");
const _validate = require("../../utilities/validate");
const _descriptions = require("../../descriptions");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function areYouSurePromptOperation(proceed, abort, context) {
    const description = _descriptions.ARE_YOU_SURE_DESCRIPTION, errorMessage = _messages.INVALID_AFFIRMATION_MESSAGE, validationFunction = _validate.validateAffirmation, options = {
        description,
        errorMessage,
        validationFunction
    };
    prompt(options, (answer)=>{
        const valid = answer !== null;
        if (valid) {
            const affirmative = (0, _prompt.isAnswerAffirmative)(answer);
            if (affirmative) {
                proceed();
                return;
            }
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2FyZVlvdVN1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNoZWxsVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBpc0Fuc3dlckFmZmlybWF0aXZlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wcm9tcHRcIjtcbmltcG9ydCB7IHZhbGlkYXRlQWZmaXJtYXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBBUkVfWU9VX1NVUkVfREVTQ1JJUFRJT04gfSBmcm9tIFwiLi4vLi4vZGVzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBJTlZBTElEX0FGRklSTUFUSU9OX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcmVZb3VTdXJlUHJvbXB0T3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gQVJFX1lPVV9TVVJFX0RFU0NSSVBUSU9OLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBJTlZBTElEX0FGRklSTUFUSU9OX01FU1NBR0UsXG4gICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IHZhbGlkYXRlQWZmaXJtYXRpb24sICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIChhbnN3ZXIpID0+IHtcbiAgICBjb25zdCB2YWxpZCA9IChhbnN3ZXIgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBjb25zdCBhZmZpcm1hdGl2ZSA9IGlzQW5zd2VyQWZmaXJtYXRpdmUoYW5zd2VyKTtcblxuICAgICAgaWYgKGFmZmlybWF0aXZlKSB7XG4gICAgICAgIHByb2NlZWQoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWJvcnQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiYXJlWW91U3VyZVByb21wdE9wZXJhdGlvbiIsInByb21wdCIsInNoZWxsVXRpbGl0aWVzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImRlc2NyaXB0aW9uIiwiQVJFX1lPVV9TVVJFX0RFU0NSSVBUSU9OIiwiZXJyb3JNZXNzYWdlIiwiSU5WQUxJRF9BRkZJUk1BVElPTl9NRVNTQUdFIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwidmFsaWRhdGVBZmZpcm1hdGlvbiIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJ2YWxpZCIsImFmZmlybWF0aXZlIiwiaXNBbnN3ZXJBZmZpcm1hdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7OzsyQkFUTzt3QkFFSzswQkFDQTs4QkFDSzswQkFDRztBQUU1QyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYztBQUVsQixTQUFTRiwwQkFBMEJHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ3ZFLE1BQU1DLGNBQWNDLHNDQUF3QixFQUN0Q0MsZUFBZUMscUNBQTJCLEVBQzFDQyxxQkFBcUJDLDZCQUFtQixFQUN4Q0MsVUFBVTtRQUNSTjtRQUNBRTtRQUNBRTtJQUNGO0lBRU5ULE9BQU9XLFNBQVMsQ0FBQ0M7UUFDZixNQUFNQyxRQUFTRCxXQUFXO1FBRTFCLElBQUlDLE9BQU87WUFDVCxNQUFNQyxjQUFjQyxJQUFBQSwyQkFBbUIsRUFBQ0g7WUFFeEMsSUFBSUUsYUFBYTtnQkFDZlo7Z0JBRUE7WUFDRjtRQUNGO1FBRUFDO0lBQ0Y7QUFDRiJ9