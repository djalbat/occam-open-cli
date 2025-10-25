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
var _post = /*#__PURE__*/ _interop_require_default(require("../post"));
var _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function openOperation(proceed, abort, context) {
    var releaseName = context.releaseName, uri = "".concat(_uris.OPEN_API_URI, "/").concat(releaseName), json = {};
    (0, _post.default)(uri, json, function(json) {
        var success = json.success, _json_releases = json.releases, releases = _json_releases === void 0 ? null : _json_releases;
        Object.assign(context, {
            success: success,
            releases: releases
        });
        if (!success) {
            abort();
            return;
        }
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vb3Blbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBvc3QgZnJvbSBcIi4uL3Bvc3RcIjtcblxuaW1wb3J0IHsgT1BFTl9BUElfVVJJIH0gZnJvbSBcIi4uL3VyaXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3Blbk9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VOYW1lIH0gPSBjb250ZXh0LFxuICAgICAgICB1cmkgPSBgJHtPUEVOX0FQSV9VUkl9LyR7cmVsZWFzZU5hbWV9YCxcbiAgICAgICAganNvbiA9IHt9O1xuXG4gIHBvc3QodXJpLCBqc29uLCAoanNvbikgPT4ge1xuICAgIGNvbnN0IHsgc3VjY2VzcywgcmVsZWFzZXMgPSBudWxsIH0gPSBqc29uO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBzdWNjZXNzLFxuICAgICAgcmVsZWFzZXNcbiAgICB9KTtcblxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgYWJvcnQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb2NlZWQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsib3Blbk9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZWxlYXNlTmFtZSIsInVyaSIsIk9QRU5fQVBJX1VSSSIsImpzb24iLCJwb3N0Iiwic3VjY2VzcyIsInJlbGVhc2VzIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpQO29CQUVZOzs7Ozs7QUFFZCxTQUFTQSxjQUFjQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUMzRCxJQUFNLEFBQUVDLGNBQWdCRCxRQUFoQkMsYUFDRkMsTUFBTSxBQUFDLEdBQWtCRCxPQUFoQkUsa0JBQVksRUFBQyxLQUFlLE9BQVpGLGNBQ3pCRyxPQUFPLENBQUM7SUFFZEMsSUFBQUEsYUFBSSxFQUFDSCxLQUFLRSxNQUFNLFNBQUNBO1FBQ2YsSUFBUUUsVUFBNkJGLEtBQTdCRSwwQkFBNkJGLEtBQXBCRyxVQUFBQSx1Q0FBVztRQUU1QkMsT0FBT0MsTUFBTSxDQUFDVCxTQUFTO1lBQ3JCTSxTQUFBQTtZQUNBQyxVQUFBQTtRQUNGO1FBRUEsSUFBSSxDQUFDRCxTQUFTO1lBQ1pQO1lBRUE7UUFDRjtRQUVBRDtJQUNGO0FBQ0YifQ==