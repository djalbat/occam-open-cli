"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return openAction;
    }
});
const _open = /*#__PURE__*/ _interop_require_default(require("../operation/open"));
const _openReleasees = /*#__PURE__*/ _interop_require_default(require("../operation/openReleasees"));
const _releaseName = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/releaseName"));
const _operation = require("../utilities/operation");
const _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function openAction(releaseName, dependencies, headless, quietly, yes) {
    const operations = [
        _releaseName.default,
        _open.default,
        _openReleasees.default
    ], context = {
        yes,
        quietly,
        headless,
        releaseName,
        dependencies
    };
    (0, _operation.executeOperations)(operations, (completed)=>{
        const success = completed, message = success ? _messages.SUCCESSFUL_OPEN_MESSAGE : _messages.FAILED_OPEN_MESSAGE;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vb3Blbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9wZW5PcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9vcGVuXCI7XG5pbXBvcnQgb3BlblJlbGVhc2VzT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vb3BlblJlbGVhc2Vlc1wiO1xuaW1wb3J0IHJlbGVhc2VOYW1lUHJvbXB0T3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vcHJvbXB0L3JlbGVhc2VOYW1lXCI7XG5cbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vcGVyYXRpb25cIjtcbmltcG9ydCB7IFNVQ0NFU1NGVUxfT1BFTl9NRVNTQUdFLCBGQUlMRURfT1BFTl9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5BY3Rpb24ocmVsZWFzZU5hbWUsIGRlcGVuZGVuY2llcywgaGVhZGxlc3MsIHF1aWV0bHksIHllcykge1xuICBjb25zdCBvcGVyYXRpb25zID0gW1xuICAgICAgICAgIHJlbGVhc2VOYW1lUHJvbXB0T3BlcmF0aW9uLFxuICAgICAgICAgIG9wZW5PcGVyYXRpb24sXG4gICAgICAgICAgb3BlblJlbGVhc2VzT3BlcmF0aW9uXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgeWVzLFxuICAgICAgICAgIHF1aWV0bHksXG4gICAgICAgICAgaGVhZGxlc3MsXG4gICAgICAgICAgcmVsZWFzZU5hbWUsXG4gICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgIH07XG5cbiAgZXhlY3V0ZU9wZXJhdGlvbnMob3BlcmF0aW9ucywgKGNvbXBsZXRlZCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBjb21wbGV0ZWQsICAvLy9cbiAgICAgICAgICBtZXNzYWdlID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgICAgU1VDQ0VTU0ZVTF9PUEVOX01FU1NBR0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgRkFJTEVEX09QRU5fTUVTU0FHRTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9LCBjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJvcGVuQWN0aW9uIiwicmVsZWFzZU5hbWUiLCJkZXBlbmRlbmNpZXMiLCJoZWFkbGVzcyIsInF1aWV0bHkiLCJ5ZXMiLCJvcGVyYXRpb25zIiwicmVsZWFzZU5hbWVQcm9tcHRPcGVyYXRpb24iLCJvcGVuT3BlcmF0aW9uIiwib3BlblJlbGVhc2VzT3BlcmF0aW9uIiwiY29udGV4dCIsImV4ZWN1dGVPcGVyYXRpb25zIiwiY29tcGxldGVkIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJTVUNDRVNTRlVMX09QRU5fTUVTU0FHRSIsIkZBSUxFRF9PUEVOX01FU1NBR0UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7OzZEQVBFO3NFQUNRO29FQUNLOzJCQUVMOzBCQUMyQjs7Ozs7O0FBRTlDLFNBQVNBLFdBQVdDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsR0FBRztJQUNsRixNQUFNQyxhQUFhO1FBQ1hDLG9CQUEwQjtRQUMxQkMsYUFBYTtRQUNiQyxzQkFBcUI7S0FDdEIsRUFDREMsVUFBVTtRQUNSTDtRQUNBRDtRQUNBRDtRQUNBRjtRQUNBQztJQUNGO0lBRU5TLElBQUFBLDRCQUFpQixFQUFDTCxZQUFZLENBQUNNO1FBQzdCLE1BQU1DLFVBQVVELFdBQ1ZFLFVBQVVELFVBQ0VFLGlDQUF1QixHQUNyQkMsNkJBQW1CO1FBRXZDQyxRQUFRQyxHQUFHLENBQUNKO0lBQ2QsR0FBR0o7QUFDTCJ9