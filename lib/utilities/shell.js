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
var _child_process = /*#__PURE__*/ _interop_require_default(require("child_process"));
var _necessary = require("necessary");
var _string = require("./string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var UTF_8_ENCODING = _necessary.encodings.UTF_8_ENCODING;
function execute(shellCommands) {
    var output;
    try {
        var stdio = [], encoding = UTF_8_ENCODING, options = {
            stdio: stdio,
            encoding: encoding
        };
        output = _child_process.default.execSync(shellCommands, options);
        output = (0, _string.trimTrailingCarriageReturn)(output); ///
    } catch (error) {
        output = error; ///
    }
    return output;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjaGlsZFByb2Nlc3MgZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcblxuaW1wb3J0IHsgZW5jb2RpbmdzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgdHJpbVRyYWlsaW5nQ2FycmlhZ2VSZXR1cm4gfSBmcm9tIFwiLi9zdHJpbmdcIjtcblxuY29uc3QgeyBVVEZfOF9FTkNPRElORyB9ID0gZW5jb2RpbmdzO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZShzaGVsbENvbW1hbmRzKSB7XG4gIGxldCBvdXRwdXQ7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzdGRpbyA9IFtdLFxuICAgICAgICAgIGVuY29kaW5nID0gVVRGXzhfRU5DT0RJTkcsICAvLy9cbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgc3RkaW8sXG4gICAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICAgIH07XG5cbiAgICBvdXRwdXQgPSBjaGlsZFByb2Nlc3MuZXhlY1N5bmMoc2hlbGxDb21tYW5kcywgb3B0aW9ucyk7XG5cbiAgICBvdXRwdXQgPSB0cmltVHJhaWxpbmdDYXJyaWFnZVJldHVybihvdXRwdXQpOyAvLy9cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBvdXRwdXQgPSBlcnJvcjsgLy8vXG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuIl0sIm5hbWVzIjpbImV4ZWN1dGUiLCJVVEZfOF9FTkNPRElORyIsImVuY29kaW5ncyIsInNoZWxsQ29tbWFuZHMiLCJvdXRwdXQiLCJzdGRpbyIsImVuY29kaW5nIiwib3B0aW9ucyIsImNoaWxkUHJvY2VzcyIsImV4ZWNTeW5jIiwidHJpbVRyYWlsaW5nQ2FycmlhZ2VSZXR1cm4iLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU2dCQTs7O2VBQUFBOzs7b0VBUFM7eUJBRUM7c0JBQ2lCOzs7Ozs7QUFFM0MsSUFBTSxBQUFFQyxpQkFBbUJDLG9CQUFTLENBQTVCRDtBQUVELFNBQVNELFFBQVFHLGFBQWE7SUFDbkMsSUFBSUM7SUFFSixJQUFJO1FBQ0YsSUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLFdBQVdMLGdCQUNYTSxVQUFVO1lBQ1JGLE9BQUFBO1lBQ0FDLFVBQUFBO1FBQ0Y7UUFFTkYsU0FBU0ksc0JBQVksQ0FBQ0MsUUFBUSxDQUFDTixlQUFlSTtRQUU5Q0gsU0FBU00sSUFBQUEsa0NBQTBCLEVBQUNOLFNBQVMsR0FBRztJQUNsRCxFQUFFLE9BQU9PLE9BQU87UUFDZFAsU0FBU08sT0FBTyxHQUFHO0lBQ3JCO0lBRUEsT0FBT1A7QUFDVCJ9