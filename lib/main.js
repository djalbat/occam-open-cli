"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return main;
    }
});
var _help = /*#__PURE__*/ _interop_require_default(require("./action/help"));
var _open = /*#__PURE__*/ _interop_require_default(require("./action/open"));
var _clone = /*#__PURE__*/ _interop_require_default(require("./action/clone"));
var _signIn = /*#__PURE__*/ _interop_require_default(require("./action/signIn"));
var _signOut = /*#__PURE__*/ _interop_require_default(require("./action/signOut"));
var _version = /*#__PURE__*/ _interop_require_default(require("./action/version"));
var _publish = /*#__PURE__*/ _interop_require_default(require("./action/publish"));
var _withdraw = /*#__PURE__*/ _interop_require_default(require("./action/withdraw"));
var _initialise = /*#__PURE__*/ _interop_require_default(require("./action/initialise"));
var _setOptions = /*#__PURE__*/ _interop_require_default(require("./action/setOptions"));
var _createAccount = /*#__PURE__*/ _interop_require_default(require("./action/createAccount"));
var _resetPassword = /*#__PURE__*/ _interop_require_default(require("./action/resetPassword"));
var _setShellCommands = /*#__PURE__*/ _interop_require_default(require("./action/setShellCommands"));
var _constants = require("./constants");
var _messages = require("./messages");
var _defaults = require("./defaults");
var _commands = require("./commands");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function main(command, argument, options) {
    var _options_yes = options.yes, yes = _options_yes === void 0 ? _defaults.DEFAULT_YES : _options_yes, _options_tail = options.tail, tail = _options_tail === void 0 ? _defaults.DEFAULT_TAIL : _options_tail, _options_follow = options.follow, follow = _options_follow === void 0 ? _defaults.DEFAULT_FOLLOW : _options_follow, _options_dryRun = options.dryRun, dryRun = _options_dryRun === void 0 ? _defaults.DEFAULT_DRY_RUN : _options_dryRun, _options_quietly = options.quietly, quietly = _options_quietly === void 0 ? _defaults.DEFAULT_QUIETLY : _options_quietly, _options_headless = options.headless, headless = _options_headless === void 0 ? _defaults.DEFAULT_HEADLESS : _options_headless, _options_logLevel = options.logLevel, logLevel = _options_logLevel === void 0 ? _defaults.DEFAULT_LOG_LEVEL : _options_logLevel, _options_dependencies = options.dependencies, dependencies = _options_dependencies === void 0 ? _defaults.DEFAULT_DEPENDENCIES : _options_dependencies;
    switch(command){
        case _commands.HELP_COMMAND:
            {
                (0, _help.default)();
                break;
            }
        case _commands.VERSION_COMMAND:
            {
                (0, _version.default)();
                break;
            }
        case _commands.INITIALISE_COMMAND:
            {
                (0, _initialise.default)();
                break;
            }
        case _commands.OPEN_COMMAND:
            {
                if (argument === null) {
                    console.log(_messages.NO_ARGUMENT_GIVEN_MESSAGE);
                } else {
                    var releaseName = argument; ///
                    (0, _open.default)(releaseName, dependencies, headless, quietly, yes);
                }
                break;
            }
        case _commands.CLONE_COMMAND:
            {
                if (argument === null) {
                    console.log(_messages.NO_ARGUMENT_GIVEN_MESSAGE);
                } else {
                    var repositoryName = argument; ///
                    (0, _clone.default)(repositoryName, dependencies, headless, quietly);
                }
                break;
            }
        case _commands.PUBLISH_COMMAND:
            {
                if (argument === null) {
                    console.log(_messages.NO_ARGUMENT_GIVEN_MESSAGE);
                } else {
                    var releaseName1 = stripTrailingSlash(argument);
                    (0, _publish.default)(releaseName1, tail, follow, dryRun, logLevel);
                }
                break;
            }
        case _commands.SIGN_IN_COMMAND:
            {
                var emailAddressOrUsername = argument; ///
                (0, _signIn.default)(emailAddressOrUsername);
                break;
            }
        case _commands.SIGN_OUT_COMMAND:
            {
                (0, _signOut.default)();
                break;
            }
        case _commands.WITHDRAW_COMMAND:
            {
                var releaseName2 = argument; ///
                (0, _withdraw.default)(releaseName2);
                break;
            }
        case _commands.SET_OPTIONS_COMMAND:
            {
                (0, _setOptions.default)();
                break;
            }
        case _commands.CREATE_ACCOUNT_COMMAND:
            {
                var emailAddress = argument; ///
                (0, _createAccount.default)(emailAddress);
                break;
            }
        case _commands.RESET_PASSWORD_COMMAND:
            {
                var emailAddress1 = argument; ///
                (0, _resetPassword.default)(emailAddress1);
                break;
            }
        case _commands.SET_SHELL_COMMANDS_COMMAND:
            {
                (0, _setShellCommands.default)();
                break;
            }
        default:
            {
                console.log(_messages.COMMAND_NOT_RECOGNISED_MESSAGE);
                break;
            }
    }
}
function stripTrailingSlash(string) {
    string = string.replace(/\/$/, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaGVscEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vaGVscFwiO1xuaW1wb3J0IG9wZW5BY3Rpb24gZnJvbSBcIi4vYWN0aW9uL29wZW5cIjtcbmltcG9ydCBjbG9uZUFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vY2xvbmVcIjtcbmltcG9ydCBzaWduSW5BY3Rpb24gZnJvbSBcIi4vYWN0aW9uL3NpZ25JblwiO1xuaW1wb3J0IHNpZ25PdXRBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL3NpZ25PdXRcIjtcbmltcG9ydCB2ZXJzaW9uQWN0aW9uIGZyb20gXCIuL2FjdGlvbi92ZXJzaW9uXCI7XG5pbXBvcnQgcHVibGlzaEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vcHVibGlzaFwiO1xuaW1wb3J0IHdpdGhkcmF3QWN0aW9uIGZyb20gXCIuL2FjdGlvbi93aXRoZHJhd1wiO1xuaW1wb3J0IGluaXRpYWxpc2VBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL2luaXRpYWxpc2VcIjtcbmltcG9ydCBzZXRPcHRpb25zQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9zZXRPcHRpb25zXCI7XG5pbXBvcnQgY3JlYXRlQWNjb3VudEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vY3JlYXRlQWNjb3VudFwiO1xuaW1wb3J0IHJlc2V0UGFzc3dvcmRBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL3Jlc2V0UGFzc3dvcmRcIjtcbmltcG9ydCBzZXRTaGVsbENvbW1hbmRzQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9zZXRTaGVsbENvbW1hbmRzXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSwgQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IERFRkFVTFRfWUVTLCBERUZBVUxUX1RBSUwsIERFRkFVTFRfRk9MTE9XLCBERUZBVUxUX0RSWV9SVU4sIERFRkFVTFRfUVVJRVRMWSwgREVGQVVMVF9IRUFETEVTUywgREVGQVVMVF9MT0dfTEVWRUwsIERFRkFVTFRfREVQRU5ERU5DSUVTIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IEhFTFBfQ09NTUFORCxcbiAgICAgICAgIE9QRU5fQ09NTUFORCxcbiAgICAgICAgIENMT05FX0NPTU1BTkQsXG4gICAgICAgICBWRVJTSU9OX0NPTU1BTkQsXG4gICAgICAgICBQVUJMSVNIX0NPTU1BTkQsXG4gICAgICAgICBTSUdOX0lOX0NPTU1BTkQsXG4gICAgICAgICBTSUdOX09VVF9DT01NQU5ELFxuICAgICAgICAgV0lUSERSQVdfQ09NTUFORCxcbiAgICAgICAgIElOSVRJQUxJU0VfQ09NTUFORCxcbiAgICAgICAgIFNFVF9PUFRJT05TX0NPTU1BTkQsXG4gICAgICAgICBDUkVBVEVfQUNDT1VOVF9DT01NQU5ELFxuICAgICAgICAgUkVTRVRfUEFTU1dPUkRfQ09NTUFORCxcbiAgICAgICAgIFNFVF9TSEVMTF9DT01NQU5EU19DT01NQU5EIH0gZnJvbSBcIi4vY29tbWFuZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbihjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucykge1xuICBjb25zdCB7IHllcyA9IERFRkFVTFRfWUVTLFxuICAgICAgICAgIHRhaWwgPSBERUZBVUxUX1RBSUwsXG4gICAgICAgICAgZm9sbG93ID0gREVGQVVMVF9GT0xMT1csXG4gICAgICAgICAgZHJ5UnVuID0gREVGQVVMVF9EUllfUlVOLFxuICAgICAgICAgIHF1aWV0bHkgPSBERUZBVUxUX1FVSUVUTFksXG4gICAgICAgICAgaGVhZGxlc3MgPSBERUZBVUxUX0hFQURMRVNTLFxuICAgICAgICAgIGxvZ0xldmVsID0gREVGQVVMVF9MT0dfTEVWRUwsXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gREVGQVVMVF9ERVBFTkRFTkNJRVMgfSA9IG9wdGlvbnM7XG5cbiAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgY2FzZSBIRUxQX0NPTU1BTkQ6IHtcbiAgICAgIGhlbHBBY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBWRVJTSU9OX0NPTU1BTkQ6IHtcbiAgICAgIHZlcnNpb25BY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBJTklUSUFMSVNFX0NPTU1BTkQ6IHtcbiAgICAgIGluaXRpYWxpc2VBY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPUEVOX0NPTU1BTkQ6IHtcbiAgICAgIGlmIChhcmd1bWVudCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhOT19BUkdVTUVOVF9HSVZFTl9NRVNTQUdFKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gYXJndW1lbnQ7IC8vL1xuXG4gICAgICAgIG9wZW5BY3Rpb24ocmVsZWFzZU5hbWUsIGRlcGVuZGVuY2llcywgaGVhZGxlc3MsIHF1aWV0bHksIHllcyk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgQ0xPTkVfQ09NTUFORDoge1xuICAgICAgaWYgKGFyZ3VtZW50ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKE5PX0FSR1VNRU5UX0dJVkVOX01FU1NBR0UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVwb3NpdG9yeU5hbWUgPSBhcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGNsb25lQWN0aW9uKHJlcG9zaXRvcnlOYW1lLCBkZXBlbmRlbmNpZXMsIGhlYWRsZXNzLCBxdWlldGx5KTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBQVUJMSVNIX0NPTU1BTkQ6IHtcbiAgICAgIGlmIChhcmd1bWVudCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhOT19BUkdVTUVOVF9HSVZFTl9NRVNTQUdFKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gc3RyaXBUcmFpbGluZ1NsYXNoKGFyZ3VtZW50KTtcblxuICAgICAgICBwdWJsaXNoQWN0aW9uKHJlbGVhc2VOYW1lLCB0YWlsLCBmb2xsb3csIGRyeVJ1biwgbG9nTGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNJR05fSU5fQ09NTUFORDoge1xuICAgICAgY29uc3QgZW1haWxBZGRyZXNzT3JVc2VybmFtZSA9IGFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIHNpZ25JbkFjdGlvbihlbWFpbEFkZHJlc3NPclVzZXJuYW1lKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTSUdOX09VVF9DT01NQU5EOiB7XG4gICAgICBzaWduT3V0QWN0aW9uKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgV0lUSERSQVdfQ09NTUFORDoge1xuICAgICAgY29uc3QgcmVsZWFzZU5hbWUgPSBhcmd1bWVudDsgIC8vL1xuXG4gICAgICB3aXRoZHJhd0FjdGlvbihyZWxlYXNlTmFtZSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU0VUX09QVElPTlNfQ09NTUFORDoge1xuICAgICAgc2V0T3B0aW9uc0FjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIENSRUFURV9BQ0NPVU5UX0NPTU1BTkQ6IHtcbiAgICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGNyZWF0ZUFjY291bnRBY3Rpb24oZW1haWxBZGRyZXNzKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBSRVNFVF9QQVNTV09SRF9DT01NQU5EOiB7XG4gICAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSBhcmd1bWVudDsgLy8vXG5cbiAgICAgIHJlc2V0UGFzc3dvcmRBY3Rpb24oZW1haWxBZGRyZXNzKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTRVRfU0hFTExfQ09NTUFORFNfQ09NTUFORDoge1xuICAgICAgc2V0U2hlbGxDb21tYW5kc0FjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zb2xlLmxvZyhDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJtYWluIiwiY29tbWFuZCIsImFyZ3VtZW50Iiwib3B0aW9ucyIsInllcyIsIkRFRkFVTFRfWUVTIiwidGFpbCIsIkRFRkFVTFRfVEFJTCIsImZvbGxvdyIsIkRFRkFVTFRfRk9MTE9XIiwiZHJ5UnVuIiwiREVGQVVMVF9EUllfUlVOIiwicXVpZXRseSIsIkRFRkFVTFRfUVVJRVRMWSIsImhlYWRsZXNzIiwiREVGQVVMVF9IRUFETEVTUyIsImxvZ0xldmVsIiwiREVGQVVMVF9MT0dfTEVWRUwiLCJkZXBlbmRlbmNpZXMiLCJERUZBVUxUX0RFUEVOREVOQ0lFUyIsIkhFTFBfQ09NTUFORCIsImhlbHBBY3Rpb24iLCJWRVJTSU9OX0NPTU1BTkQiLCJ2ZXJzaW9uQWN0aW9uIiwiSU5JVElBTElTRV9DT01NQU5EIiwiaW5pdGlhbGlzZUFjdGlvbiIsIk9QRU5fQ09NTUFORCIsImNvbnNvbGUiLCJsb2ciLCJOT19BUkdVTUVOVF9HSVZFTl9NRVNTQUdFIiwicmVsZWFzZU5hbWUiLCJvcGVuQWN0aW9uIiwiQ0xPTkVfQ09NTUFORCIsInJlcG9zaXRvcnlOYW1lIiwiY2xvbmVBY3Rpb24iLCJQVUJMSVNIX0NPTU1BTkQiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJwdWJsaXNoQWN0aW9uIiwiU0lHTl9JTl9DT01NQU5EIiwiZW1haWxBZGRyZXNzT3JVc2VybmFtZSIsInNpZ25JbkFjdGlvbiIsIlNJR05fT1VUX0NPTU1BTkQiLCJzaWduT3V0QWN0aW9uIiwiV0lUSERSQVdfQ09NTUFORCIsIndpdGhkcmF3QWN0aW9uIiwiU0VUX09QVElPTlNfQ09NTUFORCIsInNldE9wdGlvbnNBY3Rpb24iLCJDUkVBVEVfQUNDT1VOVF9DT01NQU5EIiwiZW1haWxBZGRyZXNzIiwiY3JlYXRlQWNjb3VudEFjdGlvbiIsIlJFU0VUX1BBU1NXT1JEX0NPTU1BTkQiLCJyZXNldFBhc3N3b3JkQWN0aW9uIiwiU0VUX1NIRUxMX0NPTU1BTkRTX0NPTU1BTkQiLCJzZXRTaGVsbENvbW1hbmRzQWN0aW9uIiwiQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFIiwic3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUNBOzs7ZUFBd0JBOzs7MkRBL0JEOzJEQUNBOzREQUNDOzZEQUNDOzhEQUNDOzhEQUNBOzhEQUNBOytEQUNDO2lFQUNFO2lFQUNBO29FQUNHO29FQUNBO3VFQUNHO3lCQUVOO3dCQUM2Qzt3QkFDNkU7d0JBYTVHOzs7Ozs7QUFFNUIsU0FBU0EsS0FBS0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE9BQU87SUFDckQsbUJBT2dEQSxRQVB4Q0MsS0FBQUEsZ0NBQU1DLHFCQUFXLGlDQU91QkYsUUFOeENHLE1BQUFBLGtDQUFPQyxzQkFBWSxvQ0FNcUJKLFFBTHhDSyxRQUFBQSxzQ0FBU0Msd0JBQWMsc0NBS2lCTixRQUp4Q08sUUFBQUEsc0NBQVNDLHlCQUFlLHVDQUlnQlIsUUFIeENTLFNBQUFBLHdDQUFVQyx5QkFBZSx5Q0FHZVYsUUFGeENXLFVBQUFBLDBDQUFXQywwQkFBZ0IsMENBRWFaLFFBRHhDYSxVQUFBQSwwQ0FBV0MsMkJBQWlCLDhDQUNZZCxRQUF4Q2UsY0FBQUEsa0RBQWVDLDhCQUFvQjtJQUUzQyxPQUFRbEI7UUFDTixLQUFLbUIsc0JBQVk7WUFBRTtnQkFDakJDLElBQUFBLGFBQVU7Z0JBRVY7WUFDRjtRQUVBLEtBQUtDLHlCQUFlO1lBQUU7Z0JBQ3BCQyxJQUFBQSxnQkFBYTtnQkFFYjtZQUNGO1FBRUEsS0FBS0MsNEJBQWtCO1lBQUU7Z0JBQ3ZCQyxJQUFBQSxtQkFBZ0I7Z0JBRWhCO1lBQ0Y7UUFFQSxLQUFLQyxzQkFBWTtZQUFFO2dCQUNqQixJQUFJeEIsYUFBYSxNQUFNO29CQUNyQnlCLFFBQVFDLEdBQUcsQ0FBQ0MsbUNBQXlCO2dCQUN2QyxPQUFPO29CQUNMLElBQU1DLGNBQWM1QixVQUFVLEdBQUc7b0JBRWpDNkIsSUFBQUEsYUFBVSxFQUFDRCxhQUFhWixjQUFjSixVQUFVRixTQUFTUjtnQkFDM0Q7Z0JBRUE7WUFDRjtRQUVBLEtBQUs0Qix1QkFBYTtZQUFFO2dCQUNsQixJQUFJOUIsYUFBYSxNQUFNO29CQUNyQnlCLFFBQVFDLEdBQUcsQ0FBQ0MsbUNBQXlCO2dCQUN2QyxPQUFPO29CQUNMLElBQU1JLGlCQUFpQi9CLFVBQVcsR0FBRztvQkFFckNnQyxJQUFBQSxjQUFXLEVBQUNELGdCQUFnQmYsY0FBY0osVUFBVUY7Z0JBQ3REO2dCQUVBO1lBQ0Y7UUFFQSxLQUFLdUIseUJBQWU7WUFBRTtnQkFDcEIsSUFBSWpDLGFBQWEsTUFBTTtvQkFDckJ5QixRQUFRQyxHQUFHLENBQUNDLG1DQUF5QjtnQkFDdkMsT0FBTztvQkFDTCxJQUFNQyxlQUFjTSxtQkFBbUJsQztvQkFFdkNtQyxJQUFBQSxnQkFBYSxFQUFDUCxjQUFheEIsTUFBTUUsUUFBUUUsUUFBUU07Z0JBQ25EO2dCQUVBO1lBQ0Y7UUFFQSxLQUFLc0IseUJBQWU7WUFBRTtnQkFDcEIsSUFBTUMseUJBQXlCckMsVUFBVyxHQUFHO2dCQUU3Q3NDLElBQUFBLGVBQVksRUFBQ0Q7Z0JBRWI7WUFDRjtRQUVBLEtBQUtFLDBCQUFnQjtZQUFFO2dCQUNyQkMsSUFBQUEsZ0JBQWE7Z0JBRWI7WUFDRjtRQUVBLEtBQUtDLDBCQUFnQjtZQUFFO2dCQUNyQixJQUFNYixlQUFjNUIsVUFBVyxHQUFHO2dCQUVsQzBDLElBQUFBLGlCQUFjLEVBQUNkO2dCQUVmO1lBQ0Y7UUFFQSxLQUFLZSw2QkFBbUI7WUFBRTtnQkFDeEJDLElBQUFBLG1CQUFnQjtnQkFFaEI7WUFDRjtRQUVBLEtBQUtDLGdDQUFzQjtZQUFFO2dCQUMzQixJQUFNQyxlQUFlOUMsVUFBVyxHQUFHO2dCQUVuQytDLElBQUFBLHNCQUFtQixFQUFDRDtnQkFFcEI7WUFDRjtRQUVBLEtBQUtFLGdDQUFzQjtZQUFFO2dCQUMzQixJQUFNRixnQkFBZTlDLFVBQVUsR0FBRztnQkFFbENpRCxJQUFBQSxzQkFBbUIsRUFBQ0g7Z0JBRXBCO1lBQ0Y7UUFFQSxLQUFLSSxvQ0FBMEI7WUFBRTtnQkFDL0JDLElBQUFBLHlCQUFzQjtnQkFFdEI7WUFDRjtRQUVBO1lBQVM7Z0JBQ1AxQixRQUFRQyxHQUFHLENBQUMwQix3Q0FBOEI7Z0JBRTFDO1lBQ0Y7SUFDRjtBQUNGO0FBRUEsU0FBU2xCLG1CQUFtQm1CLE1BQU07SUFDaENBLFNBQVNBLE9BQU9DLE9BQU8sQ0FBQyxPQUFPQyx1QkFBWTtJQUUzQyxPQUFPRjtBQUNUIn0=