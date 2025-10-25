"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "trimTrailingCarriageReturn", {
    enumerable: true,
    get: function() {
        return trimTrailingCarriageReturn;
    }
});
var _constants = require("../constants");
function trimTrailingCarriageReturn(string) {
    string = string.replace(/\n$/, _constants.EMPTY_STRING); ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmltVHJhaWxpbmdDYXJyaWFnZVJldHVybihzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcbiQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInRyaW1UcmFpbGluZ0NhcnJpYWdlUmV0dXJuIiwic3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7eUJBRmE7QUFFdEIsU0FBU0EsMkJBQTJCQyxNQUFNO0lBQy9DQSxTQUFTQSxPQUFPQyxPQUFPLENBQUMsT0FBT0MsdUJBQVksR0FBRyxHQUFHO0lBRWpELE9BQU9GO0FBQ1QifQ==