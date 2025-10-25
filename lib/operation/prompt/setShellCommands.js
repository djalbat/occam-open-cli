"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return setShellCommandsPromptOperation;
    }
});
var _necessary = require("necessary");
var _constants = require("../../constants");
var _validate = require("../../utilities/validate");
var _defaults = require("../../defaults");
var _descriptions = require("../../descriptions");
var prompt = _necessary.shellUtilities.prompt;
function setShellCommandsPromptOperation(proceed, abort, context) {
    var shellCommands = context.shellCommands, description = _descriptions.SHELL_COMMANDS_DESCRIPTION, initialAnswer = shellCommands, validationFunction = _validate.validateShellCommands, options = {
        description: description,
        initialAnswer: initialAnswer,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var shellCommands = answer; ///
        var valid = shellCommands !== null;
        if (valid) {
            if (shellCommands === _constants.EMPTY_STRING) {
                shellCommands = _defaults.DEFAULT_SHELL_COMMANDS;
            }
            Object.assign(context, {
                shellCommands: shellCommands
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L3NldFNoZWxsQ29tbWFuZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNoZWxsVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVNoZWxsQ29tbWFuZHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBERUZBVUxUX1NIRUxMX0NPTU1BTkRTIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBTSEVMTF9DT01NQU5EU19ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTaGVsbENvbW1hbmRzUHJvbXB0T3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc2hlbGxDb21tYW5kcyB9ID0gY29udGV4dCxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBTSEVMTF9DT01NQU5EU19ERVNDUklQVElPTixcbiAgICAgICAgaW5pdGlhbEFuc3dlciA9IHNoZWxsQ29tbWFuZHMsIC8vL1xuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSB2YWxpZGF0ZVNoZWxsQ29tbWFuZHMsICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBpbml0aWFsQW5zd2VyLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvblxuICAgICAgICB9O1xuXG4gIHByb21wdChvcHRpb25zLCAoYW5zd2VyKSA9PiB7XG4gICAgbGV0IHNoZWxsQ29tbWFuZHMgPSBhbnN3ZXI7IC8vL1xuXG4gICAgY29uc3QgdmFsaWQgPSAoc2hlbGxDb21tYW5kcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIGlmIChzaGVsbENvbW1hbmRzID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgc2hlbGxDb21tYW5kcyA9IERFRkFVTFRfU0hFTExfQ09NTUFORFM7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBzaGVsbENvbW1hbmRzXG4gICAgICB9KTtcblxuICAgICAgcHJvY2VlZCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWJvcnQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsic2V0U2hlbGxDb21tYW5kc1Byb21wdE9wZXJhdGlvbiIsInByb21wdCIsInNoZWxsVXRpbGl0aWVzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsInNoZWxsQ29tbWFuZHMiLCJkZXNjcmlwdGlvbiIsIlNIRUxMX0NPTU1BTkRTX0RFU0NSSVBUSU9OIiwiaW5pdGlhbEFuc3dlciIsInZhbGlkYXRpb25GdW5jdGlvbiIsInZhbGlkYXRlU2hlbGxDb21tYW5kcyIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJ2YWxpZCIsIkVNUFRZX1NUUklORyIsIkRFRkFVTFRfU0hFTExfQ09NTUFORFMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7eUJBVE87eUJBRUY7d0JBQ1M7d0JBQ0M7NEJBQ0k7QUFFM0MsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxTQUFTRCxnQ0FBZ0NHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQzdFLElBQU0sQUFBRUMsZ0JBQWtCRCxRQUFsQkMsZUFDRkMsY0FBY0Msd0NBQTBCLEVBQ3hDQyxnQkFBZ0JILGVBQ2hCSSxxQkFBcUJDLCtCQUFxQixFQUMxQ0MsVUFBVTtRQUNSTCxhQUFBQTtRQUNBRSxlQUFBQTtRQUNBQyxvQkFBQUE7SUFDRjtJQUVOVCxPQUFPVyxTQUFTLFNBQUNDO1FBQ2YsSUFBSVAsZ0JBQWdCTyxRQUFRLEdBQUc7UUFFL0IsSUFBTUMsUUFBU1Isa0JBQWtCO1FBRWpDLElBQUlRLE9BQU87WUFDVCxJQUFJUixrQkFBa0JTLHVCQUFZLEVBQUU7Z0JBQ2xDVCxnQkFBZ0JVLGdDQUFzQjtZQUN4QztZQUVBQyxPQUFPQyxNQUFNLENBQUNiLFNBQVM7Z0JBQ3JCQyxlQUFBQTtZQUNGO1lBRUFIO1lBRUE7UUFDRjtRQUVBQztJQUNGO0FBQ0YifQ==