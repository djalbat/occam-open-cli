"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return cloneAction;
    }
});
const _clone = /*#__PURE__*/ _interop_require_default(require("../operation/clone"));
const _cloneRepositories = /*#__PURE__*/ _interop_require_default(require("../operation/cloneRepositories"));
const _repositoryName = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/repositoryName"));
const _operation = require("../utilities/operation");
const _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function cloneAction(repositoryName, dependencies, headless, quietly) {
    const operations = [
        _repositoryName.default,
        _clone.default,
        _cloneRepositories.default
    ], context = {
        quietly,
        headless,
        dependencies,
        repositoryName
    };
    (0, _operation.executeOperations)(operations, (completed)=>{
        const success = completed, message = success ? _messages.SUCCESSFUL_CLONE_MESSAGE : _messages.FAILED_CLONE_MESSAGE;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vY2xvbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjbG9uZU9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2Nsb25lXCI7XG5pbXBvcnQgY2xvbmVSZXBvc2l0b3JpZXNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jbG9uZVJlcG9zaXRvcmllc1wiO1xuaW1wb3J0IHJlcG9zaXRvcnlOYW1lUHJvbXB0T3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vcHJvbXB0L3JlcG9zaXRvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vcGVyYXRpb25cIjtcbmltcG9ydCB7IFNVQ0NFU1NGVUxfQ0xPTkVfTUVTU0FHRSwgRkFJTEVEX0NMT05FX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVBY3Rpb24ocmVwb3NpdG9yeU5hbWUsIGRlcGVuZGVuY2llcywgaGVhZGxlc3MsIHF1aWV0bHkpIHtcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICByZXBvc2l0b3J5TmFtZVByb21wdE9wZXJhdGlvbixcbiAgICAgICAgICBjbG9uZU9wZXJhdGlvbixcbiAgICAgICAgICBjbG9uZVJlcG9zaXRvcmllc09wZXJhdGlvblxuICAgICAgICBdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHF1aWV0bHksXG4gICAgICAgICAgaGVhZGxlc3MsXG4gICAgICAgICAgZGVwZW5kZW5jaWVzLFxuICAgICAgICAgIHJlcG9zaXRvcnlOYW1lXG4gICAgICAgIH07XG5cbiAgZXhlY3V0ZU9wZXJhdGlvbnMob3BlcmF0aW9ucywgKGNvbXBsZXRlZCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBjb21wbGV0ZWQsICAvLy9cbiAgICAgICAgICBtZXNzYWdlID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgICAgU1VDQ0VTU0ZVTF9DTE9ORV9NRVNTQUdFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEZBSUxFRF9DTE9ORV9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH0sIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImNsb25lQWN0aW9uIiwicmVwb3NpdG9yeU5hbWUiLCJkZXBlbmRlbmNpZXMiLCJoZWFkbGVzcyIsInF1aWV0bHkiLCJvcGVyYXRpb25zIiwicmVwb3NpdG9yeU5hbWVQcm9tcHRPcGVyYXRpb24iLCJjbG9uZU9wZXJhdGlvbiIsImNsb25lUmVwb3NpdG9yaWVzT3BlcmF0aW9uIiwiY29udGV4dCIsImV4ZWN1dGVPcGVyYXRpb25zIiwiY29tcGxldGVkIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJTVUNDRVNTRlVMX0NMT05FX01FU1NBR0UiLCJGQUlMRURfQ0xPTkVfTUVTU0FHRSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7OERBUEc7MEVBQ1k7dUVBQ0c7MkJBRVI7MEJBQzZCOzs7Ozs7QUFFaEQsU0FBU0EsWUFBWUMsY0FBYyxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUNqRixNQUFNQyxhQUFhO1FBQ1hDLHVCQUE2QjtRQUM3QkMsY0FBYztRQUNkQywwQkFBMEI7S0FDM0IsRUFDREMsVUFBVTtRQUNSTDtRQUNBRDtRQUNBRDtRQUNBRDtJQUNGO0lBRU5TLElBQUFBLDRCQUFpQixFQUFDTCxZQUFZLENBQUNNO1FBQzdCLE1BQU1DLFVBQVVELFdBQ1ZFLFVBQVVELFVBQ0VFLGtDQUF3QixHQUN0QkMsOEJBQW9CO1FBRXhDQyxRQUFRQyxHQUFHLENBQUNKO0lBQ2QsR0FBR0o7QUFDTCJ9