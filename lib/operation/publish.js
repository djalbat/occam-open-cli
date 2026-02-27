"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return publishOperation;
    }
});
const _occammodel = require("occam-model");
const _post = /*#__PURE__*/ _interop_require_default(require("../post"));
const _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function publishOperation(proceed, abort, context) {
    const { tail, follow, dryRun, release, logLevel, releaseName, identityToken } = context, uri = `${_uris.PUBLISH_API_URI}/${releaseName}`, json = {
        tail,
        follow,
        dryRun,
        release,
        logLevel,
        identityToken
    };
    (0, _post.default)(uri, json, (json)=>{
        const { success, messages } = json;
        let { version = null } = json;
        if (version !== null) {
            const string = version; ///
            version = _occammodel.Version.fromString(string);
        }
        Object.assign(context, {
            success,
            version,
            messages
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcHVibGlzaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gXCJvY2NhbS1tb2RlbFwiO1xuXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi4vcG9zdFwiO1xuXG5pbXBvcnQgeyBQVUJMSVNIX0FQSV9VUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwdWJsaXNoT3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdGFpbCwgZm9sbG93LCBkcnlSdW4sIHJlbGVhc2UsIGxvZ0xldmVsLCByZWxlYXNlTmFtZSwgaWRlbnRpdHlUb2tlbiB9ID0gY29udGV4dCxcbiAgICAgICAgdXJpID0gYCR7UFVCTElTSF9BUElfVVJJfS8ke3JlbGVhc2VOYW1lfWAsXG4gICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgdGFpbCxcbiAgICAgICAgICBmb2xsb3csXG4gICAgICAgICAgZHJ5UnVuLFxuICAgICAgICAgIHJlbGVhc2UsXG4gICAgICAgICAgbG9nTGV2ZWwsXG4gICAgICAgICAgaWRlbnRpdHlUb2tlblxuICAgICAgICB9O1xuXG4gIHBvc3QodXJpLCBqc29uLCAoanNvbikgPT4ge1xuICAgIGNvbnN0IHsgc3VjY2VzcywgbWVzc2FnZXMgfSA9IGpzb25cblxuICAgIGxldCB7IHZlcnNpb24gPSBudWxsIH0gPSBqc29uO1xuXG4gICAgaWYgKHZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHZlcnNpb247ICAvLy9cblxuICAgICAgdmVyc2lvbiA9IFZlcnNpb24uZnJvbVN0cmluZyhzdHJpbmcpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3VjY2VzcyxcbiAgICAgIHZlcnNpb24sXG4gICAgICBtZXNzYWdlc1xuICAgIH0pO1xuXG4gICAgcHJvY2VlZCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJwdWJsaXNoT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsInRhaWwiLCJmb2xsb3ciLCJkcnlSdW4iLCJyZWxlYXNlIiwibG9nTGV2ZWwiLCJyZWxlYXNlTmFtZSIsImlkZW50aXR5VG9rZW4iLCJ1cmkiLCJQVUJMSVNIX0FQSV9VUkkiLCJqc29uIiwicG9zdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsInZlcnNpb24iLCJzdHJpbmciLCJWZXJzaW9uIiwiZnJvbVN0cmluZyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7Ozs0QkFOQTs2REFFUDtzQkFFZTs7Ozs7O0FBRWpCLFNBQVNBLGlCQUFpQkMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDOUQsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUUsR0FBR1AsU0FDMUVRLE1BQU0sR0FBR0MscUJBQWUsQ0FBQyxDQUFDLEVBQUVILGFBQWEsRUFDekNJLE9BQU87UUFDTFQ7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUU7SUFDRjtJQUVOSSxJQUFBQSxhQUFJLEVBQUNILEtBQUtFLE1BQU0sQ0FBQ0E7UUFDZixNQUFNLEVBQUVFLE9BQU8sRUFBRUMsUUFBUSxFQUFFLEdBQUdIO1FBRTlCLElBQUksRUFBRUksVUFBVSxJQUFJLEVBQUUsR0FBR0o7UUFFekIsSUFBSUksWUFBWSxNQUFNO1lBQ3BCLE1BQU1DLFNBQVNELFNBQVUsR0FBRztZQUU1QkEsVUFBVUUsbUJBQU8sQ0FBQ0MsVUFBVSxDQUFDRjtRQUMvQjtRQUVBRyxPQUFPQyxNQUFNLENBQUNuQixTQUFTO1lBQ3JCWTtZQUNBRTtZQUNBRDtRQUNGO1FBRUFmO0lBQ0Y7QUFDRiJ9