"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "execute", {
    enumerable: true,
    get: function() {
        return execute;
    }
});
const _child_process = /*#__PURE__*/ _interop_require_default(require("child_process"));
const _necessary = require("necessary");
const _string = require("./string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { UTF_8_ENCODING } = _necessary.encodings;
function execute(shellCommands) {
    let output;
    try {
        const stdio = [], encoding = UTF_8_ENCODING, options = {
            stdio,
            encoding
        };
        output = _child_process.default.execSync(shellCommands, options);
        output = (0, _string.trimTrailingCarriageReturn)(output); ///
    } catch (error) {
        output = error; ///
    }
    return output;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjaGlsZFByb2Nlc3MgZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcblxuaW1wb3J0IHsgZW5jb2RpbmdzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgdHJpbVRyYWlsaW5nQ2FycmlhZ2VSZXR1cm4gfSBmcm9tIFwiLi9zdHJpbmdcIjtcblxuY29uc3QgeyBVVEZfOF9FTkNPRElORyB9ID0gZW5jb2RpbmdzO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZShzaGVsbENvbW1hbmRzKSB7XG4gIGxldCBvdXRwdXQ7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzdGRpbyA9IFtdLFxuICAgICAgICAgIGVuY29kaW5nID0gVVRGXzhfRU5DT0RJTkcsICAvLy9cbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgc3RkaW8sXG4gICAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICAgIH07XG5cbiAgICBvdXRwdXQgPSBjaGlsZFByb2Nlc3MuZXhlY1N5bmMoc2hlbGxDb21tYW5kcywgb3B0aW9ucyk7XG5cbiAgICBvdXRwdXQgPSB0cmltVHJhaWxpbmdDYXJyaWFnZVJldHVybihvdXRwdXQpOyAvLy9cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBvdXRwdXQgPSBlcnJvcjsgLy8vXG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuIl0sIm5hbWVzIjpbImV4ZWN1dGUiLCJVVEZfOF9FTkNPRElORyIsImVuY29kaW5ncyIsInNoZWxsQ29tbWFuZHMiLCJvdXRwdXQiLCJzdGRpbyIsImVuY29kaW5nIiwib3B0aW9ucyIsImNoaWxkUHJvY2VzcyIsImV4ZWNTeW5jIiwidHJpbVRyYWlsaW5nQ2FycmlhZ2VSZXR1cm4iLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU2dCQTs7O2VBQUFBOzs7c0VBUFM7MkJBRUM7d0JBQ2lCOzs7Ozs7QUFFM0MsTUFBTSxFQUFFQyxjQUFjLEVBQUUsR0FBR0Msb0JBQVM7QUFFN0IsU0FBU0YsUUFBUUcsYUFBYTtJQUNuQyxJQUFJQztJQUVKLElBQUk7UUFDRixNQUFNQyxRQUFRLEVBQUUsRUFDVkMsV0FBV0wsZ0JBQ1hNLFVBQVU7WUFDUkY7WUFDQUM7UUFDRjtRQUVORixTQUFTSSxzQkFBWSxDQUFDQyxRQUFRLENBQUNOLGVBQWVJO1FBRTlDSCxTQUFTTSxJQUFBQSxrQ0FBMEIsRUFBQ04sU0FBUyxHQUFHO0lBQ2xELEVBQUUsT0FBT08sT0FBTztRQUNkUCxTQUFTTyxPQUFPLEdBQUc7SUFDckI7SUFFQSxPQUFPUDtBQUNUIn0=