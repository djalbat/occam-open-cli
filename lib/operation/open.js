"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return openOperation;
    }
});
const _post = /*#__PURE__*/ _interop_require_default(require("../post"));
const _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function openOperation(proceed, abort, context) {
    const { releaseName } = context, uri = `${_uris.OPEN_API_URI}/${releaseName}`, json = {};
    (0, _post.default)(uri, json, (json)=>{
        const { success, releases = null } = json;
        Object.assign(context, {
            success,
            releases
        });
        if (!success) {
            abort();
            return;
        }
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vb3Blbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBvc3QgZnJvbSBcIi4uL3Bvc3RcIjtcblxuaW1wb3J0IHsgT1BFTl9BUElfVVJJIH0gZnJvbSBcIi4uL3VyaXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3Blbk9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VOYW1lIH0gPSBjb250ZXh0LFxuICAgICAgICB1cmkgPSBgJHtPUEVOX0FQSV9VUkl9LyR7cmVsZWFzZU5hbWV9YCxcbiAgICAgICAganNvbiA9IHt9O1xuXG4gIHBvc3QodXJpLCBqc29uLCAoanNvbikgPT4ge1xuICAgIGNvbnN0IHsgc3VjY2VzcywgcmVsZWFzZXMgPSBudWxsIH0gPSBqc29uO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBzdWNjZXNzLFxuICAgICAgcmVsZWFzZXNcbiAgICB9KTtcblxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgYWJvcnQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb2NlZWQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsib3Blbk9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZWxlYXNlTmFtZSIsInVyaSIsIk9QRU5fQVBJX1VSSSIsImpzb24iLCJwb3N0Iiwic3VjY2VzcyIsInJlbGVhc2VzIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzZEQUpQO3NCQUVZOzs7Ozs7QUFFZCxTQUFTQSxjQUFjQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUMzRCxNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHRCxTQUNsQkUsTUFBTSxHQUFHQyxrQkFBWSxDQUFDLENBQUMsRUFBRUYsYUFBYSxFQUN0Q0csT0FBTyxDQUFDO0lBRWRDLElBQUFBLGFBQUksRUFBQ0gsS0FBS0UsTUFBTSxDQUFDQTtRQUNmLE1BQU0sRUFBRUUsT0FBTyxFQUFFQyxXQUFXLElBQUksRUFBRSxHQUFHSDtRQUVyQ0ksT0FBT0MsTUFBTSxDQUFDVCxTQUFTO1lBQ3JCTTtZQUNBQztRQUNGO1FBRUEsSUFBSSxDQUFDRCxTQUFTO1lBQ1pQO1lBRUE7UUFDRjtRQUVBRDtJQUNGO0FBQ0YifQ==