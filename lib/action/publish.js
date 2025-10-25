"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return publishAction;
    }
});
var _publish = /*#__PURE__*/ _interop_require_default(require("../operation/publish"));
var _loadProject = /*#__PURE__*/ _interop_require_default(require("../operation/loadProject"));
var _releaseToJSON = /*#__PURE__*/ _interop_require_default(require("../operation/releaseToJSON"));
var _getIdentityToken = /*#__PURE__*/ _interop_require_default(require("../operation/getIdentityToken"));
var _releaseName = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/releaseName"));
var _executeShallCommands = /*#__PURE__*/ _interop_require_default(require("../operation/executeShallCommands"));
var _updateMetaJSONFileVersion = /*#__PURE__*/ _interop_require_default(require("../operation/updateMetaJSONFileVersion"));
var _constants = require("../constants");
var _operation = require("../utilities/operation");
var _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function publishAction(releaseName, tail, follow, dryRun, logLevel) {
    var operations = [
        _getIdentityToken.default,
        _releaseName.default,
        _loadProject.default,
        _releaseToJSON.default,
        _publish.default,
        _updateMetaJSONFileVersion.default,
        _executeShallCommands.default
    ], success = false, context = {
        tail: tail,
        follow: follow,
        dryRun: dryRun,
        success: success,
        logLevel: logLevel,
        releaseName: releaseName
    };
    (0, _operation.executeOperations)(operations, function(completed) {
        var success = context.success, _context_version = context.version, version = _context_version === void 0 ? null : _context_version, _context_messages = context.messages, messages = _context_messages === void 0 ? [] : _context_messages, messagesLength = messages.length;
        if (messagesLength > 0) {
            var message = _constants.DOUBLE_DASH; ///
            messages.push(message);
        }
        if (version !== null) {
            var message1 = "Version ".concat(version, ".");
            messages.push(message1);
        }
        if (success) {
            if (!dryRun) {
                var message2 = _messages.SUCCESSFUL_PUBLISH_MESSAGE;
                messages.push(message2);
            }
        } else {
            var message3 = _messages.FAILED_PUBLISH_MESSAGE;
            messages.push(message3);
        }
        messages.forEach(function(message) {
            console.log(message);
        });
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vcHVibGlzaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHB1Ymxpc2hPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9wdWJsaXNoXCI7XG5pbXBvcnQgbG9hZFByb2plY3RPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9sb2FkUHJvamVjdFwiO1xuaW1wb3J0IHJlbGVhc2VUb0pTT05PcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9yZWxlYXNlVG9KU09OXCI7XG5pbXBvcnQgZ2V0SWRlbnRpdHlUb2tlbk9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2dldElkZW50aXR5VG9rZW5cIjtcbmltcG9ydCByZWxlYXNlTmFtZVByb21wdE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3Byb21wdC9yZWxlYXNlTmFtZVwiO1xuaW1wb3J0IGV4ZWN1dGVTaGVsbENvbW1hbmRzT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vZXhlY3V0ZVNoYWxsQ29tbWFuZHNcIjtcbmltcG9ydCB1cGRhdGVNZXRhSlNPTkZpbGVWZXJzaW9uT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vdXBkYXRlTWV0YUpTT05GaWxlVmVyc2lvblwiO1xuXG5pbXBvcnQgeyBET1VCTEVfREFTSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vcGVyYXRpb25cIjtcbmltcG9ydCB7IEZBSUxFRF9QVUJMSVNIX01FU1NBR0UsIFNVQ0NFU1NGVUxfUFVCTElTSF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHB1Ymxpc2hBY3Rpb24ocmVsZWFzZU5hbWUsIHRhaWwsIGZvbGxvdywgZHJ5UnVuLCBsb2dMZXZlbCkge1xuICBjb25zdCBvcGVyYXRpb25zID0gW1xuICAgICAgICAgIGdldElkZW50aXR5VG9rZW5PcGVyYXRpb24sXG4gICAgICAgICAgcmVsZWFzZU5hbWVQcm9tcHRPcGVyYXRpb24sXG4gICAgICAgICAgbG9hZFByb2plY3RPcGVyYXRpb24sXG4gICAgICAgICAgcmVsZWFzZVRvSlNPTk9wZXJhdGlvbixcbiAgICAgICAgICBwdWJsaXNoT3BlcmF0aW9uLFxuICAgICAgICAgIHVwZGF0ZU1ldGFKU09ORmlsZVZlcnNpb25PcGVyYXRpb24sXG4gICAgICAgICAgZXhlY3V0ZVNoZWxsQ29tbWFuZHNPcGVyYXRpb25cbiAgICAgICAgXSxcbiAgICAgICAgc3VjY2VzcyA9IGZhbHNlLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHRhaWwsXG4gICAgICAgICAgZm9sbG93LFxuICAgICAgICAgIGRyeVJ1bixcbiAgICAgICAgICBzdWNjZXNzLFxuICAgICAgICAgIGxvZ0xldmVsLFxuICAgICAgICAgIHJlbGVhc2VOYW1lXG4gICAgICAgIH07XG5cbiAgZXhlY3V0ZU9wZXJhdGlvbnMob3BlcmF0aW9ucywgKGNvbXBsZXRlZCkgPT4ge1xuICAgIGNvbnN0IHsgc3VjY2VzcywgdmVyc2lvbiA9IG51bGwsIG1lc3NhZ2VzID0gW10gfSA9IGNvbnRleHQsXG4gICAgICAgICAgbWVzc2FnZXNMZW5ndGggPSBtZXNzYWdlcy5sZW5ndGg7XG5cbiAgICBpZiAobWVzc2FnZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gRE9VQkxFX0RBU0g7ICAvLy9cblxuICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBWZXJzaW9uICR7dmVyc2lvbn0uYDtcblxuICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgaWYgKCFkcnlSdW4pIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IFNVQ0NFU1NGVUxfUFVCTElTSF9NRVNTQUdFO1xuXG4gICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBGQUlMRURfUFVCTElTSF9NRVNTQUdFO1xuXG4gICAgICBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIG1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9LCBjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJwdWJsaXNoQWN0aW9uIiwicmVsZWFzZU5hbWUiLCJ0YWlsIiwiZm9sbG93IiwiZHJ5UnVuIiwibG9nTGV2ZWwiLCJvcGVyYXRpb25zIiwiZ2V0SWRlbnRpdHlUb2tlbk9wZXJhdGlvbiIsInJlbGVhc2VOYW1lUHJvbXB0T3BlcmF0aW9uIiwibG9hZFByb2plY3RPcGVyYXRpb24iLCJyZWxlYXNlVG9KU09OT3BlcmF0aW9uIiwicHVibGlzaE9wZXJhdGlvbiIsInVwZGF0ZU1ldGFKU09ORmlsZVZlcnNpb25PcGVyYXRpb24iLCJleGVjdXRlU2hlbGxDb21tYW5kc09wZXJhdGlvbiIsInN1Y2Nlc3MiLCJjb250ZXh0IiwiZXhlY3V0ZU9wZXJhdGlvbnMiLCJjb21wbGV0ZWQiLCJ2ZXJzaW9uIiwibWVzc2FnZXMiLCJtZXNzYWdlc0xlbmd0aCIsImxlbmd0aCIsIm1lc3NhZ2UiLCJET1VCTEVfREFTSCIsInB1c2giLCJTVUNDRVNTRlVMX1BVQkxJU0hfTUVTU0FHRSIsIkZBSUxFRF9QVUJMSVNIX01FU1NBR0UiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUF3QkE7Ozs4REFaSztrRUFDSTtvRUFDRTt1RUFDRztrRUFDQzsyRUFDRztnRkFDSzt5QkFFbkI7eUJBQ007d0JBQ2lDOzs7Ozs7QUFFcEQsU0FBU0EsY0FBY0MsV0FBVyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRO0lBQy9FLElBQU1DLGFBQWE7UUFDWEMseUJBQXlCO1FBQ3pCQyxvQkFBMEI7UUFDMUJDLG9CQUFvQjtRQUNwQkMsc0JBQXNCO1FBQ3RCQyxnQkFBZ0I7UUFDaEJDLGtDQUFrQztRQUNsQ0MsNkJBQTZCO0tBQzlCLEVBQ0RDLFVBQVUsT0FDVkMsVUFBVTtRQUNSYixNQUFBQTtRQUNBQyxRQUFBQTtRQUNBQyxRQUFBQTtRQUNBVSxTQUFBQTtRQUNBVCxVQUFBQTtRQUNBSixhQUFBQTtJQUNGO0lBRU5lLElBQUFBLDRCQUFpQixFQUFDVixZQUFZLFNBQUNXO1FBQzdCLElBQVFILFVBQTJDQyxRQUEzQ0QsNEJBQTJDQyxRQUFsQ0csU0FBQUEsd0NBQVUsNkNBQXdCSCxRQUFsQkksVUFBQUEsMENBQVcsRUFBRSxzQkFDeENDLGlCQUFpQkQsU0FBU0UsTUFBTTtRQUV0QyxJQUFJRCxpQkFBaUIsR0FBRztZQUN0QixJQUFNRSxVQUFVQyxzQkFBVyxFQUFHLEdBQUc7WUFFakNKLFNBQVNLLElBQUksQ0FBQ0Y7UUFDaEI7UUFFQSxJQUFJSixZQUFZLE1BQU07WUFDcEIsSUFBTUksV0FBVSxBQUFDLFdBQWtCLE9BQVJKLFNBQVE7WUFFbkNDLFNBQVNLLElBQUksQ0FBQ0Y7UUFDaEI7UUFFQSxJQUFJUixTQUFTO1lBQ1gsSUFBSSxDQUFDVixRQUFRO2dCQUNYLElBQU1rQixXQUFVRyxvQ0FBMEI7Z0JBRTFDTixTQUFTSyxJQUFJLENBQUNGO1lBQ2hCO1FBQ0YsT0FBTztZQUNMLElBQU1BLFdBQVVJLGdDQUFzQjtZQUV0Q1AsU0FBU0ssSUFBSSxDQUFDRjtRQUNoQjtRQUVBSCxTQUFTUSxPQUFPLENBQUMsU0FBQ0w7WUFDaEJNLFFBQVFDLEdBQUcsQ0FBQ1A7UUFDZDtJQUNGLEdBQUdQO0FBQ0wifQ==