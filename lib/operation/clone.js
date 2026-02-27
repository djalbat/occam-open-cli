"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return cloneOperation;
    }
});
const _post = /*#__PURE__*/ _interop_require_default(require("../post"));
const _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function cloneOperation(proceed, abort, context) {
    const { repositoryName } = context, releaseName = repositoryName, uri = `${_uris.CLONE_API_URI}/${releaseName}`, json = {};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY2xvbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBwb3N0IGZyb20gXCIuLi9wb3N0XCI7XG5cbmltcG9ydCB7IENMT05FX0FQSV9VUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlcG9zaXRvcnlOYW1lIH0gPSBjb250ZXh0LFxuICAgICAgICByZWxlYXNlTmFtZSA9IHJlcG9zaXRvcnlOYW1lLCAvLy9cbiAgICAgICAgdXJpID0gYCR7Q0xPTkVfQVBJX1VSSX0vJHtyZWxlYXNlTmFtZX1gLFxuICAgICAgICBqc29uID0ge307XG5cbiAgcG9zdCh1cmksIGpzb24sIChqc29uKSA9PiB7XG4gICAgY29uc3QgeyBzdWNjZXNzLCByZWxlYXNlcyA9IG51bGwgfSA9IGpzb247XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN1Y2Nlc3MsXG4gICAgICByZWxlYXNlc1xuICAgIH0pO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBhYm9ydCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvY2VlZCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjbG9uZU9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZXBvc2l0b3J5TmFtZSIsInJlbGVhc2VOYW1lIiwidXJpIiwiQ0xPTkVfQVBJX1VSSSIsImpzb24iLCJwb3N0Iiwic3VjY2VzcyIsInJlbGVhc2VzIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzZEQUpQO3NCQUVhOzs7Ozs7QUFFZixTQUFTQSxlQUFlQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUM1RCxNQUFNLEVBQUVDLGNBQWMsRUFBRSxHQUFHRCxTQUNyQkUsY0FBY0QsZ0JBQ2RFLE1BQU0sR0FBR0MsbUJBQWEsQ0FBQyxDQUFDLEVBQUVGLGFBQWEsRUFDdkNHLE9BQU8sQ0FBQztJQUVkQyxJQUFBQSxhQUFJLEVBQUNILEtBQUtFLE1BQU0sQ0FBQ0E7UUFDZixNQUFNLEVBQUVFLE9BQU8sRUFBRUMsV0FBVyxJQUFJLEVBQUUsR0FBR0g7UUFFckNJLE9BQU9DLE1BQU0sQ0FBQ1YsU0FBUztZQUNyQk87WUFDQUM7UUFDRjtRQUVBLElBQUksQ0FBQ0QsU0FBUztZQUNaUjtZQUVBO1FBQ0Y7UUFFQUQ7SUFDRjtBQUNGIn0=