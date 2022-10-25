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
var _necessary = require("necessary");
var hiddenNameRegularExpression = /^\..+/;
var bottommostNameFromPath = _necessary.pathUtilities.bottommostNameFromPath;
function isNameHiddenName(name) {
    var nameHiddenName = hiddenNameRegularExpression.test(name);
    return nameHiddenName;
}
function fileNameFromFilePath(filePath) {
    var path = filePath, bottommostName = bottommostNameFromPath(path), fileName = bottommostName; //
    return fileName;
}
var _default = {
    isNameHiddenName: isNameHiddenName,
    fileNameFromFilePath: fileNameFromFilePath
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgaGlkZGVuTmFtZVJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC4uKy87XG5cbmNvbnN0IHsgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTmFtZUhpZGRlbk5hbWUobmFtZSkge1xuICBjb25zdCBuYW1lSGlkZGVuTmFtZSA9IGhpZGRlbk5hbWVSZWd1bGFyRXhwcmVzc2lvbi50ZXN0KG5hbWUpO1xuXG4gIHJldHVybiBuYW1lSGlkZGVuTmFtZTtcbn1cblxuZnVuY3Rpb24gZmlsZU5hbWVGcm9tRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgY29uc3QgcGF0aCA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgIGJvdHRvbW1vc3ROYW1lID0gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgZmlsZU5hbWUgPSBib3R0b21tb3N0TmFtZTsgIC8vXG5cbiAgcmV0dXJuIGZpbGVOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzTmFtZUhpZGRlbk5hbWUsXG4gIGZpbGVOYW1lRnJvbUZpbGVQYXRoXG59O1xuIl0sIm5hbWVzIjpbImlzTmFtZUhpZGRlbk5hbWUiLCJoaWRkZW5OYW1lUmVndWxhckV4cHJlc3Npb24iLCJib3R0b21tb3N0TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsIm5hbWUiLCJuYW1lSGlkZGVuTmFtZSIsInRlc3QiLCJmaWxlTmFtZUZyb21GaWxlUGF0aCIsImZpbGVQYXRoIiwicGF0aCIsImJvdHRvbW1vc3ROYW1lIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVFnQkEsZ0JBQWdCO2VBQWhCQTs7SUFjaEIsT0FHRTtlQUhGOzs7eUJBcEI4QjtBQUU5QixJQUFNQyw4QkFBOEI7QUFFcEMsSUFBTSxBQUFFQyx5QkFBMkJDLHdCQUFhLENBQXhDRDtBQUVELFNBQVNGLGlCQUFpQkksSUFBSSxFQUFFO0lBQ3JDLElBQU1DLGlCQUFpQkosNEJBQTRCSyxJQUFJLENBQUNGO0lBRXhELE9BQU9DO0FBQ1Q7QUFFQSxTQUFTRSxxQkFBcUJDLFFBQVEsRUFBRTtJQUN0QyxJQUFNQyxPQUFPRCxVQUNQRSxpQkFBaUJSLHVCQUF1Qk8sT0FDeENFLFdBQVdELGdCQUFpQixFQUFFO0lBRXBDLE9BQU9DO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JYLGtCQUFBQTtJQUNBTyxzQkFBQUE7QUFDRiJ9