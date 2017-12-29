'use strict';

var necessary = require('necessary');

var help = require('./action/help'),
    login = require('./action/login'),
    logout = require('./action/logout'),
    remove = require('./action/remove'),
    version = require('./action/version'),
    install = require('./action/install'),
    register = require('./action/register'),
    changePassword = require('./action/changePassword'),
    recoverPassword = require('./action/recoverPassword'),
    confirmEmailAddress = require('./action/confirmEmailAddress');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;


function main(options, command, args) {
  var commandMissing = command === null,
      optionsIncludesHelp = options.includes('h') || options.includes('help'),
      optionsIncludesVersion = options.includes('v') || options.includes('version');

  if (false) {} else if (optionsIncludesVersion) {
    command = 'version';
  } else if (commandMissing || optionsIncludesHelp) {
    command = 'help';
  }

  var firstArg = first(args) || null;

  var packageName = void 0,
      username = void 0,
      emailAddress = void 0;

  switch (command) {
    case 'help':
      help();
      break;

    case 'version':
      version();
      break;

    case 'install':
      packageName = firstArg; ///

      install(packageName);
      break;

    case 'remove':
      packageName = firstArg; ///

      remove(packageName);
      break;

    case 'register':
      username = firstArg; ///

      register(username);
      break;

    case 'confirm':
      ///
      emailAddress = firstArg; ///

      confirmEmailAddress(emailAddress);
      break;

    case 'login':
      username = firstArg; ///

      login(username);
      break;

    case 'logout':
      logout();
      break;

    case 'change-password':
      username = firstArg; ///

      changePassword(username);
      break;

    case 'recover-password':
      username = firstArg; ///

      recoverPassword(username);
      break;

    default:
      packageName = command; ///

      install(packageName);
      break;
  }
}

module.exports = main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tYWluLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJoZWxwIiwibG9naW4iLCJsb2dvdXQiLCJyZW1vdmUiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInJlZ2lzdGVyIiwiY2hhbmdlUGFzc3dvcmQiLCJyZWNvdmVyUGFzc3dvcmQiLCJjb25maXJtRW1haWxBZGRyZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIm1haW4iLCJvcHRpb25zIiwiY29tbWFuZCIsImFyZ3MiLCJjb21tYW5kTWlzc2luZyIsIm9wdGlvbnNJbmNsdWRlc0hlbHAiLCJpbmNsdWRlcyIsIm9wdGlvbnNJbmNsdWRlc1ZlcnNpb24iLCJmaXJzdEFyZyIsInBhY2thZ2VOYW1lIiwidXNlcm5hbWUiLCJlbWFpbEFkZHJlc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxlQUFSLENBQWI7QUFBQSxJQUNNRSxRQUFRRixRQUFRLGdCQUFSLENBRGQ7QUFBQSxJQUVNRyxTQUFTSCxRQUFRLGlCQUFSLENBRmY7QUFBQSxJQUdNSSxTQUFTSixRQUFRLGlCQUFSLENBSGY7QUFBQSxJQUlNSyxVQUFVTCxRQUFRLGtCQUFSLENBSmhCO0FBQUEsSUFLTU0sVUFBVU4sUUFBUSxrQkFBUixDQUxoQjtBQUFBLElBTU1PLFdBQVdQLFFBQVEsbUJBQVIsQ0FOakI7QUFBQSxJQU9NUSxpQkFBaUJSLFFBQVEseUJBQVIsQ0FQdkI7QUFBQSxJQVFNUyxrQkFBa0JULFFBQVEsMEJBQVIsQ0FSeEI7QUFBQSxJQVNNVSxzQkFBc0JWLFFBQVEsOEJBQVIsQ0FUNUI7O0FBV00sSUFBRVcsY0FBRixHQUFxQlosU0FBckIsQ0FBRVksY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGOzs7QUFHTixTQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBdUJDLE9BQXZCLEVBQWdDQyxJQUFoQyxFQUFzQztBQUNwQyxNQUFNQyxpQkFBa0JGLFlBQVksSUFBcEM7QUFBQSxNQUNNRyxzQkFBc0JKLFFBQVFLLFFBQVIsQ0FBaUIsR0FBakIsS0FBeUJMLFFBQVFLLFFBQVIsQ0FBaUIsTUFBakIsQ0FEckQ7QUFBQSxNQUVNQyx5QkFBeUJOLFFBQVFLLFFBQVIsQ0FBaUIsR0FBakIsS0FBeUJMLFFBQVFLLFFBQVIsQ0FBaUIsU0FBakIsQ0FGeEQ7O0FBSUEsTUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSUMsc0JBQUosRUFBNEI7QUFDakNMLGNBQVUsU0FBVjtBQUNELEdBRk0sTUFFQSxJQUFJRSxrQkFBa0JDLG1CQUF0QixFQUEyQztBQUNoREgsY0FBVSxNQUFWO0FBQ0Q7O0FBRUQsTUFBTU0sV0FBV1QsTUFBTUksSUFBTixLQUFlLElBQWhDOztBQUVBLE1BQUlNLG9CQUFKO0FBQUEsTUFDSUMsaUJBREo7QUFBQSxNQUVJQyxxQkFGSjs7QUFJQSxVQUFRVCxPQUFSO0FBQ0UsU0FBSyxNQUFMO0FBQ0VkO0FBQ0E7O0FBRUYsU0FBSyxTQUFMO0FBQ0VJO0FBQ0E7O0FBRUYsU0FBSyxTQUFMO0FBQ0VpQixvQkFBY0QsUUFBZCxDQURGLENBQzBCOztBQUV4QmYsY0FBUWdCLFdBQVI7QUFDQTs7QUFFRixTQUFLLFFBQUw7QUFDRUEsb0JBQWNELFFBQWQsQ0FERixDQUMwQjs7QUFFeEJqQixhQUFPa0IsV0FBUDtBQUNBOztBQUVGLFNBQUssVUFBTDtBQUNFQyxpQkFBV0YsUUFBWCxDQURGLENBQ3VCOztBQUVyQmQsZUFBU2dCLFFBQVQ7QUFDQTs7QUFFRixTQUFLLFNBQUw7QUFBZ0I7QUFDZEMscUJBQWVILFFBQWYsQ0FERixDQUMyQjs7QUFFekJYLDBCQUFvQmMsWUFBcEI7QUFDQTs7QUFFRixTQUFLLE9BQUw7QUFDRUQsaUJBQVdGLFFBQVgsQ0FERixDQUN1Qjs7QUFFckJuQixZQUFNcUIsUUFBTjtBQUNBOztBQUVGLFNBQUssUUFBTDtBQUNFcEI7QUFDQTs7QUFFRixTQUFLLGlCQUFMO0FBQ0VvQixpQkFBV0YsUUFBWCxDQURGLENBQ3VCOztBQUVyQmIscUJBQWVlLFFBQWY7QUFDQTs7QUFFRixTQUFLLGtCQUFMO0FBQ0VBLGlCQUFXRixRQUFYLENBREYsQ0FDdUI7O0FBRXJCWixzQkFBZ0JjLFFBQWhCO0FBQ0E7O0FBRUY7QUFDRUQsb0JBQWNQLE9BQWQsQ0FERixDQUMwQjs7QUFFeEJULGNBQVFnQixXQUFSO0FBQ0E7QUEzREo7QUE2REQ7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUJiLElBQWpCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBoZWxwID0gcmVxdWlyZSgnLi9hY3Rpb24vaGVscCcpLFxuICAgICAgbG9naW4gPSByZXF1aXJlKCcuL2FjdGlvbi9sb2dpbicpLFxuICAgICAgbG9nb3V0ID0gcmVxdWlyZSgnLi9hY3Rpb24vbG9nb3V0JyksXG4gICAgICByZW1vdmUgPSByZXF1aXJlKCcuL2FjdGlvbi9yZW1vdmUnKSxcbiAgICAgIHZlcnNpb24gPSByZXF1aXJlKCcuL2FjdGlvbi92ZXJzaW9uJyksXG4gICAgICBpbnN0YWxsID0gcmVxdWlyZSgnLi9hY3Rpb24vaW5zdGFsbCcpLFxuICAgICAgcmVnaXN0ZXIgPSByZXF1aXJlKCcuL2FjdGlvbi9yZWdpc3RlcicpLFxuICAgICAgY2hhbmdlUGFzc3dvcmQgPSByZXF1aXJlKCcuL2FjdGlvbi9jaGFuZ2VQYXNzd29yZCcpLFxuICAgICAgcmVjb3ZlclBhc3N3b3JkID0gcmVxdWlyZSgnLi9hY3Rpb24vcmVjb3ZlclBhc3N3b3JkJyksXG4gICAgICBjb25maXJtRW1haWxBZGRyZXNzID0gcmVxdWlyZSgnLi9hY3Rpb24vY29uZmlybUVtYWlsQWRkcmVzcycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gbWFpbihvcHRpb25zLCBjb21tYW5kLCBhcmdzKSB7XG4gIGNvbnN0IGNvbW1hbmRNaXNzaW5nID0gKGNvbW1hbmQgPT09IG51bGwpLFxuICAgICAgICBvcHRpb25zSW5jbHVkZXNIZWxwID0gb3B0aW9ucy5pbmNsdWRlcygnaCcpIHx8IG9wdGlvbnMuaW5jbHVkZXMoJ2hlbHAnKSxcbiAgICAgICAgb3B0aW9uc0luY2x1ZGVzVmVyc2lvbiA9IG9wdGlvbnMuaW5jbHVkZXMoJ3YnKSB8fCBvcHRpb25zLmluY2x1ZGVzKCd2ZXJzaW9uJyk7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmIChvcHRpb25zSW5jbHVkZXNWZXJzaW9uKSB7XG4gICAgY29tbWFuZCA9ICd2ZXJzaW9uJztcbiAgfSBlbHNlIGlmIChjb21tYW5kTWlzc2luZyB8fCBvcHRpb25zSW5jbHVkZXNIZWxwKSB7XG4gICAgY29tbWFuZCA9ICdoZWxwJztcbiAgfVxuXG4gIGNvbnN0IGZpcnN0QXJnID0gZmlyc3QoYXJncykgfHwgbnVsbDtcblxuICBsZXQgcGFja2FnZU5hbWUsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGVtYWlsQWRkcmVzcztcbiAgXG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgJ2hlbHAnOiBcbiAgICAgIGhlbHAoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndmVyc2lvbic6IFxuICAgICAgdmVyc2lvbigpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdpbnN0YWxsJzpcbiAgICAgIHBhY2thZ2VOYW1lID0gZmlyc3RBcmc7IC8vL1xuXG4gICAgICBpbnN0YWxsKHBhY2thZ2VOYW1lKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgIHBhY2thZ2VOYW1lID0gZmlyc3RBcmc7IC8vL1xuXG4gICAgICByZW1vdmUocGFja2FnZU5hbWUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICB1c2VybmFtZSA9IGZpcnN0QXJnOyAvLy9cblxuICAgICAgcmVnaXN0ZXIodXNlcm5hbWUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdjb25maXJtJzogLy8vXG4gICAgICBlbWFpbEFkZHJlc3MgPSBmaXJzdEFyZzsgLy8vXG5cbiAgICAgIGNvbmZpcm1FbWFpbEFkZHJlc3MoZW1haWxBZGRyZXNzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbG9naW4nOlxuICAgICAgdXNlcm5hbWUgPSBmaXJzdEFyZzsgLy8vXG5cbiAgICAgIGxvZ2luKHVzZXJuYW1lKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbG9nb3V0JzpcbiAgICAgIGxvZ291dCgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdjaGFuZ2UtcGFzc3dvcmQnOlxuICAgICAgdXNlcm5hbWUgPSBmaXJzdEFyZzsgLy8vXG5cbiAgICAgIGNoYW5nZVBhc3N3b3JkKHVzZXJuYW1lKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncmVjb3Zlci1wYXNzd29yZCc6XG4gICAgICB1c2VybmFtZSA9IGZpcnN0QXJnOyAvLy9cblxuICAgICAgcmVjb3ZlclBhc3N3b3JkKHVzZXJuYW1lKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHBhY2thZ2VOYW1lID0gY29tbWFuZDsgIC8vL1xuXG4gICAgICBpbnN0YWxsKHBhY2thZ2VOYW1lKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbjtcbiJdfQ==