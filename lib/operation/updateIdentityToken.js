"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateIdentityTokenOperation;
    }
});
var _configuration = require("../configuration");
function updateIdentityTokenOperation(proceed, abort, context) {
    var identityToken = context.identityToken;
    if (identityToken !== null) {
        (0, _configuration.updateIdentityToken)(identityToken);
    }
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vdXBkYXRlSWRlbnRpdHlUb2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXBkYXRlSWRlbnRpdHlUb2tlbiB9IGZyb20gXCIuLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUlkZW50aXR5VG9rZW5PcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBpZGVudGl0eVRva2VuIH0gPSBjb250ZXh0O1xuXG4gIGlmIChpZGVudGl0eVRva2VuICE9PSBudWxsKSB7XG4gICAgdXBkYXRlSWRlbnRpdHlUb2tlbihpZGVudGl0eVRva2VuKTtcbiAgfVxuXG4gIHByb2NlZWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJ1cGRhdGVJZGVudGl0eVRva2VuT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImlkZW50aXR5VG9rZW4iLCJ1cGRhdGVJZGVudGl0eVRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzZCQUZZO0FBRXJCLFNBQVNBLDZCQUE2QkMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDMUUsSUFBTSxBQUFFQyxnQkFBa0JELFFBQWxCQztJQUVSLElBQUlBLGtCQUFrQixNQUFNO1FBQzFCQyxJQUFBQSxrQ0FBbUIsRUFBQ0Q7SUFDdEI7SUFFQUg7QUFDRiJ9