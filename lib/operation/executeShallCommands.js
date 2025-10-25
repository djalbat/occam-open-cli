"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return executeShellCommandsOperation;
    }
});
var _necessary = require("necessary");
var _shell = require("../utilities/shell");
var _constants = require("../constants");
var _configuration = require("../configuration");
var DASH_CHARACTER = _necessary.characters.DASH_CHARACTER;
function executeShellCommandsOperation(proceed, abort, context) {
    var success = context.success, releaseName = context.releaseName;
    if (success) {
        var shellCommands = (0, _configuration.retrieveShellCommands)();
        if (shellCommands !== _constants.EMPTY_STRING) {
            shellCommands = shellCommands.replace(/{packageName}/, releaseName); ///
            var message;
            var output = (0, _shell.execute)(shellCommands), messages = context.messages, _output_stderr = output.stderr, stderr = _output_stderr === void 0 ? null : _output_stderr;
            if (stderr !== null) {
                message = DASH_CHARACTER; //
                messages.push(message);
                message = stderr; ///
                messages.push(message);
            } else {
                var outputs = output.split(/\n/), outputsLength = outputs.length;
                if (outputsLength > 0) {
                    var message1;
                    var messages1 = context.messages;
                    message1 = DASH_CHARACTER; //
                    messages1.push(message1);
                    outputs.forEach(function(output) {
                        message1 = output; ///
                        messages1.push(message1);
                    });
                }
            }
        }
    }
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vZXhlY3V0ZVNoYWxsQ29tbWFuZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3NoZWxsXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZXRyaWV2ZVNoZWxsQ29tbWFuZHMgfSBmcm9tIFwiLi4vY29uZmlndXJhdGlvblwiO1xuXG5jb25zdCB7IERBU0hfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGVjdXRlU2hlbGxDb21tYW5kc09wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHN1Y2Nlc3MsIHJlbGVhc2VOYW1lIH0gPSBjb250ZXh0O1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgbGV0IHNoZWxsQ29tbWFuZHMgPSByZXRyaWV2ZVNoZWxsQ29tbWFuZHMoKTtcblxuICAgIGlmIChzaGVsbENvbW1hbmRzICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgIHNoZWxsQ29tbWFuZHMgPSBzaGVsbENvbW1hbmRzLnJlcGxhY2UoL3twYWNrYWdlTmFtZX0vLCByZWxlYXNlTmFtZSk7ICAvLy9cblxuICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgIGNvbnN0IG91dHB1dCA9IGV4ZWN1dGUoc2hlbGxDb21tYW5kcyksXG4gICAgICAgICAgICB7IG1lc3NhZ2VzIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgeyBzdGRlcnIgPSBudWxsIH0gPSBvdXRwdXQ7XG5cbiAgICAgIGlmIChzdGRlcnIgIT09IG51bGwpIHtcbiAgICAgICAgbWVzc2FnZSA9IERBU0hfQ0hBUkFDVEVSOyAvL1xuXG4gICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG5cbiAgICAgICAgbWVzc2FnZSA9IHN0ZGVycjsgLy8vXG5cbiAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG91dHB1dHMgPSBvdXRwdXQuc3BsaXQoL1xcbi8pLFxuICAgICAgICAgICAgICBvdXRwdXRzTGVuZ3RoID0gb3V0cHV0cy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG91dHB1dHNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBjb250ZXh0O1xuXG4gICAgICAgICAgbWVzc2FnZSA9IERBU0hfQ0hBUkFDVEVSOyAvL1xuXG4gICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcblxuICAgICAgICAgIG91dHB1dHMuZm9yRWFjaCgob3V0cHV0KSA9PiB7XG4gICAgICAgICAgICBtZXNzYWdlID0gb3V0cHV0OyAvLy9cblxuICAgICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb2NlZWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJleGVjdXRlU2hlbGxDb21tYW5kc09wZXJhdGlvbiIsIkRBU0hfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJzdWNjZXNzIiwicmVsZWFzZU5hbWUiLCJzaGVsbENvbW1hbmRzIiwicmV0cmlldmVTaGVsbENvbW1hbmRzIiwiRU1QVFlfU1RSSU5HIiwicmVwbGFjZSIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJleGVjdXRlIiwibWVzc2FnZXMiLCJzdGRlcnIiLCJwdXNoIiwib3V0cHV0cyIsInNwbGl0Iiwib3V0cHV0c0xlbmd0aCIsImxlbmd0aCIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7eUJBUkc7cUJBRUg7eUJBQ0s7NkJBQ1M7QUFFdEMsSUFBTSxBQUFFQyxpQkFBbUJDLHFCQUFVLENBQTdCRDtBQUVPLFNBQVNELDhCQUE4QkcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDM0UsSUFBUUMsVUFBeUJELFFBQXpCQyxTQUFTQyxjQUFnQkYsUUFBaEJFO0lBRWpCLElBQUlELFNBQVM7UUFDWCxJQUFJRSxnQkFBZ0JDLElBQUFBLG9DQUFxQjtRQUV6QyxJQUFJRCxrQkFBa0JFLHVCQUFZLEVBQUU7WUFDbENGLGdCQUFnQkEsY0FBY0csT0FBTyxDQUFDLGlCQUFpQkosY0FBZSxHQUFHO1lBRXpFLElBQUlLO1lBRUosSUFBTUMsU0FBU0MsSUFBQUEsY0FBTyxFQUFDTixnQkFDakIsQUFBRU8sV0FBYVYsUUFBYlUsMkJBQ2tCRixPQUFsQkcsUUFBQUEscUNBQVM7WUFFakIsSUFBSUEsV0FBVyxNQUFNO2dCQUNuQkosVUFBVVgsZ0JBQWdCLEVBQUU7Z0JBRTVCYyxTQUFTRSxJQUFJLENBQUNMO2dCQUVkQSxVQUFVSSxRQUFRLEdBQUc7Z0JBRXJCRCxTQUFTRSxJQUFJLENBQUNMO1lBQ2hCLE9BQU87Z0JBQ0wsSUFBTU0sVUFBVUwsT0FBT00sS0FBSyxDQUFDLE9BQ3ZCQyxnQkFBZ0JGLFFBQVFHLE1BQU07Z0JBRXBDLElBQUlELGdCQUFnQixHQUFHO29CQUNyQixJQUFJUjtvQkFFSixJQUFNLEFBQUVHLFlBQWFWLFFBQWJVO29CQUVSSCxXQUFVWCxnQkFBZ0IsRUFBRTtvQkFFNUJjLFVBQVNFLElBQUksQ0FBQ0w7b0JBRWRNLFFBQVFJLE9BQU8sQ0FBQyxTQUFDVDt3QkFDZkQsV0FBVUMsUUFBUSxHQUFHO3dCQUVyQkUsVUFBU0UsSUFBSSxDQUFDTDtvQkFDaEI7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7SUFFQVQ7QUFDRiJ9