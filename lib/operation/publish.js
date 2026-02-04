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
var _occammodel = require("occam-model");
var _post = /*#__PURE__*/ _interop_require_default(require("../post"));
var _uris = require("../uris");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
1;
function publishOperation(proceed, abort, context) {
    var tail = context.tail, follow = context.follow, dryRun = context.dryRun, release = context.release, logLevel = context.logLevel, releaseName = context.releaseName, identityToken = context.identityToken, uri = "".concat(_uris.PUBLISH_API_URI, "/").concat(releaseName), json = {
        tail: tail,
        follow: follow,
        dryRun: dryRun,
        release: release,
        logLevel: logLevel,
        identityToken: identityToken
    };
    (0, _post.default)(uri, json, function(json) {
        var success = json.success, messages = json.messages;
        var _json_version = json.version, version = _json_version === void 0 ? null : _json_version;
        if (version !== null) {
            var string = version; ///
            version = _occammodel.Version.fromString(string);
        }
        Object.assign(context, {
            success: success,
            version: version,
            messages: messages
        });
        proceed();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcHVibGlzaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gXCJvY2NhbS1tb2RlbFwiO1xuXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi4vcG9zdFwiOyAgMVxuXG5pbXBvcnQgeyBQVUJMSVNIX0FQSV9VUkkgfSBmcm9tIFwiLi4vdXJpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwdWJsaXNoT3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdGFpbCwgZm9sbG93LCBkcnlSdW4sIHJlbGVhc2UsIGxvZ0xldmVsLCByZWxlYXNlTmFtZSwgaWRlbnRpdHlUb2tlbiB9ID0gY29udGV4dCxcbiAgICAgICAgdXJpID0gYCR7UFVCTElTSF9BUElfVVJJfS8ke3JlbGVhc2VOYW1lfWAsXG4gICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgdGFpbCxcbiAgICAgICAgICBmb2xsb3csXG4gICAgICAgICAgZHJ5UnVuLFxuICAgICAgICAgIHJlbGVhc2UsXG4gICAgICAgICAgbG9nTGV2ZWwsXG4gICAgICAgICAgaWRlbnRpdHlUb2tlblxuICAgICAgICB9O1xuXG4gIHBvc3QodXJpLCBqc29uLCAoanNvbikgPT4ge1xuICAgIGNvbnN0IHsgc3VjY2VzcywgbWVzc2FnZXMgfSA9IGpzb25cblxuICAgIGxldCB7IHZlcnNpb24gPSBudWxsIH0gPSBqc29uO1xuXG4gICAgaWYgKHZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHZlcnNpb247ICAvLy9cblxuICAgICAgdmVyc2lvbiA9IFZlcnNpb24uZnJvbVN0cmluZyhzdHJpbmcpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3VjY2VzcyxcbiAgICAgIHZlcnNpb24sXG4gICAgICBtZXNzYWdlc1xuICAgIH0pO1xuXG4gICAgcHJvY2VlZCgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJwdWJsaXNoT3BlcmF0aW9uIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsInRhaWwiLCJmb2xsb3ciLCJkcnlSdW4iLCJyZWxlYXNlIiwibG9nTGV2ZWwiLCJyZWxlYXNlTmFtZSIsImlkZW50aXR5VG9rZW4iLCJ1cmkiLCJQVUJMSVNIX0FQSV9VUkkiLCJqc29uIiwicG9zdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsInZlcnNpb24iLCJzdHJpbmciLCJWZXJzaW9uIiwiZnJvbVN0cmluZyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OzswQkFOQTsyREFFUDtvQkFFZTs7Ozs7O0FBRkg7QUFJZCxTQUFTQSxpQkFBaUJDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQzlELElBQVFDLE9BQXdFRCxRQUF4RUMsTUFBTUMsU0FBa0VGLFFBQWxFRSxRQUFRQyxTQUEwREgsUUFBMURHLFFBQVFDLFVBQWtESixRQUFsREksU0FBU0MsV0FBeUNMLFFBQXpDSyxVQUFVQyxjQUErQk4sUUFBL0JNLGFBQWFDLGdCQUFrQlAsUUFBbEJPLGVBQ3hEQyxNQUFNLEFBQUMsR0FBcUJGLE9BQW5CRyxxQkFBZSxFQUFDLEtBQWUsT0FBWkgsY0FDNUJJLE9BQU87UUFDTFQsTUFBQUE7UUFDQUMsUUFBQUE7UUFDQUMsUUFBQUE7UUFDQUMsU0FBQUE7UUFDQUMsVUFBQUE7UUFDQUUsZUFBQUE7SUFDRjtJQUVOSSxJQUFBQSxhQUFJLEVBQUNILEtBQUtFLE1BQU0sU0FBQ0E7UUFDZixJQUFRRSxVQUFzQkYsS0FBdEJFLFNBQVNDLFdBQWFILEtBQWJHO1FBRWpCLG9CQUF5QkgsS0FBbkJJLFNBQUFBLHFDQUFVO1FBRWhCLElBQUlBLFlBQVksTUFBTTtZQUNwQixJQUFNQyxTQUFTRCxTQUFVLEdBQUc7WUFFNUJBLFVBQVVFLG1CQUFPLENBQUNDLFVBQVUsQ0FBQ0Y7UUFDL0I7UUFFQUcsT0FBT0MsTUFBTSxDQUFDbkIsU0FBUztZQUNyQlksU0FBQUE7WUFDQUUsU0FBQUE7WUFDQUQsVUFBQUE7UUFDRjtRQUVBZjtJQUNGO0FBQ0YifQ==