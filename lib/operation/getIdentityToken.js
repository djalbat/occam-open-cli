"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return getIdentityTokenOperation;
    }
});
var _configuration = require("../configuration");
function getIdentityTokenOperation(proceed, abort, context) {
    var identityToken = (0, _configuration.retrieveIdentityToken)();
    if (!identityToken) {
        abort();
        return;
    }
    Object.assign(context, {
        identityToken: identityToken
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vZ2V0SWRlbnRpdHlUb2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcmV0cmlldmVJZGVudGl0eVRva2VuIH0gZnJvbSBcIi4uL2NvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SWRlbnRpdHlUb2tlbk9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCBpZGVudGl0eVRva2VuID0gcmV0cmlldmVJZGVudGl0eVRva2VuKCk7XG5cbiAgaWYgKCFpZGVudGl0eVRva2VuKSB7XG4gICAgYWJvcnQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGlkZW50aXR5VG9rZW5cbiAgfSk7XG5cbiAgcHJvY2VlZCgpO1xufVxuIl0sIm5hbWVzIjpbImdldElkZW50aXR5VG9rZW5PcGVyYXRpb24iLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwiaWRlbnRpdHlUb2tlbiIsInJldHJpZXZlSWRlbnRpdHlUb2tlbiIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7Ozs2QkFGYztBQUV2QixTQUFTQSwwQkFBMEJDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ3ZFLElBQU1DLGdCQUFnQkMsSUFBQUEsb0NBQXFCO0lBRTNDLElBQUksQ0FBQ0QsZUFBZTtRQUNsQkY7UUFFQTtJQUNGO0lBRUFJLE9BQU9DLE1BQU0sQ0FBQ0osU0FBUztRQUNyQkMsZUFBQUE7SUFDRjtJQUVBSDtBQUNGIn0=