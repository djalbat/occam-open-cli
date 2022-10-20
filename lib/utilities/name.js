"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isNameHiddenName: function() {
        return isNameHiddenName;
    },
    default: function() {
        return _default;
    }
});
var hiddenNameRegularExpression = /^\..+/;
function isNameHiddenName(name) {
    var nameHiddenName = hiddenNameRegularExpression.test(name);
    return nameHiddenName;
}
var _default = {
    isNameHiddenName: isNameHiddenName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgaGlkZGVuTmFtZVJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC4uKy87XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05hbWVIaWRkZW5OYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUhpZGRlbk5hbWUgPSBoaWRkZW5OYW1lUmVndWxhckV4cHJlc3Npb24udGVzdChuYW1lKTtcblxuICByZXR1cm4gbmFtZUhpZGRlbk5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNOYW1lSGlkZGVuTmFtZVxufTtcbiJdLCJuYW1lcyI6WyJpc05hbWVIaWRkZW5OYW1lIiwiaGlkZGVuTmFtZVJlZ3VsYXJFeHByZXNzaW9uIiwibmFtZSIsIm5hbWVIaWRkZW5OYW1lIiwidGVzdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxnQkFBZ0I7ZUFBaEJBOztJQU1oQixPQUVFO2VBRkY7OztBQVJBLElBQU1DLDhCQUE4QjtBQUU3QixTQUFTRCxpQkFBaUJFLElBQUksRUFBRTtJQUNyQyxJQUFNQyxpQkFBaUJGLDRCQUE0QkcsSUFBSSxDQUFDRjtJQUV4RCxPQUFPQztBQUNUO0lBRUEsV0FBZTtJQUNiSCxrQkFBQUE7QUFDRiJ9