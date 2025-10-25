"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return withdrawOperation;
    }
});
var _post = /*#__PURE__*/ _interop_require_default(require("../post"));
var _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function withdrawOperation(proceed, abort, context) {
    var releaseName = context.releaseName, identityToken = context.identityToken, uri = "".concat(_uris.WITHDRAW_API_URI, "/").concat(releaseName), json = {
        identityToken: identityToken
    };
    (0, _post.default)(uri, json, function(json) {
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vd2l0aGRyYXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBwb3N0IGZyb20gXCIuLi9wb3N0XCI7XG5cbmltcG9ydCB7IFdJVEhEUkFXX0FQSV9VUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoZHJhd09wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VOYW1lLCBpZGVudGl0eVRva2VuIH0gPSBjb250ZXh0LFxuICAgICAgICB1cmkgPSBgJHtXSVRIRFJBV19BUElfVVJJfS8ke3JlbGVhc2VOYW1lfWAsXG4gICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgaWRlbnRpdHlUb2tlblxuICAgICAgICB9O1xuXG4gIHBvc3QodXJpLCBqc29uLCAoanNvbikgPT4ge1xuICAgIHByb2NlZWQoKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsid2l0aGRyYXdPcGVyYXRpb24iLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwicmVsZWFzZU5hbWUiLCJpZGVudGl0eVRva2VuIiwidXJpIiwiV0lUSERSQVdfQVBJX1VSSSIsImpzb24iLCJwb3N0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpQO29CQUVnQjs7Ozs7O0FBRWxCLFNBQVNBLGtCQUFrQkMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDL0QsSUFBUUMsY0FBK0JELFFBQS9CQyxhQUFhQyxnQkFBa0JGLFFBQWxCRSxlQUNmQyxNQUFNLEFBQUMsR0FBc0JGLE9BQXBCRyxzQkFBZ0IsRUFBQyxLQUFlLE9BQVpILGNBQzdCSSxPQUFPO1FBQ0xILGVBQUFBO0lBQ0Y7SUFFTkksSUFBQUEsYUFBSSxFQUFDSCxLQUFLRSxNQUFNLFNBQUNBO1FBQ2ZQO0lBQ0Y7QUFDRiJ9