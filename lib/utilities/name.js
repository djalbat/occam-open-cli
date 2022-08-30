"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNameHiddenName", {
    enumerable: true,
    get: function() {
        return isNameHiddenName;
    }
});
var hiddenNameRegularExpression = /^\..+/;
function isNameHiddenName(name) {
    var nameHiddenName = hiddenNameRegularExpression.test(name);
    return nameHiddenName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgaGlkZGVuTmFtZVJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC4uKy87XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05hbWVIaWRkZW5OYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUhpZGRlbk5hbWUgPSBoaWRkZW5OYW1lUmVndWxhckV4cHJlc3Npb24udGVzdChuYW1lKTtcblxuICByZXR1cm4gbmFtZUhpZGRlbk5hbWU7XG59XG4iXSwibmFtZXMiOlsiaXNOYW1lSGlkZGVuTmFtZSIsImhpZGRlbk5hbWVSZWd1bGFyRXhwcmVzc2lvbiIsIm5hbWUiLCJuYW1lSGlkZGVuTmFtZSIsInRlc3QiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFJR0Esa0JBQWdCOzs7ZUFBaEJBLGdCQUFnQjs7O0FBRmhDLElBQU1DLDJCQUEyQixVQUFVLEFBQUM7QUFFckMsU0FBU0QsZ0JBQWdCLENBQUNFLElBQUksRUFBRTtJQUNyQyxJQUFNQyxjQUFjLEdBQUdGLDJCQUEyQixDQUFDRyxJQUFJLENBQUNGLElBQUksQ0FBQyxBQUFDO0lBRTlELE9BQU9DLGNBQWMsQ0FBQztBQUN4QixDQUFDIn0=