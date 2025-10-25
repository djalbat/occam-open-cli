"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return post;
    }
});
var _stream = require("stream");
var _necessary = require("necessary");
var _configuration = require("./configuration");
var _response = require("./utilities/response");
var _status = require("./utilities/status");
var _messages = require("./messages");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var getVersion = _necessary.packageUtilities.getVersion, createPostRequest = _necessary.requestUtilities.createPostRequest, OK_200_STATUS_CODE = _necessary.statusCodes.OK_200_STATUS_CODE, CONTENT_TYPE_HEADER = _necessary.headers.CONTENT_TYPE_HEADER, APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = _necessary.contentTypes.APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
function post(uri, json, callback) {
    var host = (0, _configuration.retrieveHost)(), query = {}, _$headers = _define_property({}, CONTENT_TYPE_HEADER, APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE), version = getVersion(), content = JSON.stringify(json), versionString = version; ///
    Object.assign(json, {
        versionString: versionString
    });
    var postRequest = createPostRequest(host, uri, query, _$headers, function(error, response) {
        if (error) {
            console.log(_messages.SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);
            return;
        }
        (0, _response.contentFromResponse)(response, function(content) {
            var _$json = null;
            try {
                var jsonString = content; ///
                _$json = JSON.parse(jsonString);
            } catch (error) {
                if (error) {
                    console.log(_messages.SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);
                }
            }
            var statusCode = response.statusCode;
            if (statusCode !== OK_200_STATUS_CODE) {
                var statusMessage = (0, _status.statusMessageFromStatusCode)(statusCode);
                console.log("The server responded with '".concat(statusMessage, "'."));
                var _json_messages = _$json.messages, messages = _json_messages === void 0 ? [] : _json_messages;
                messages.forEach(function(message) {
                    console.log(message);
                });
                return;
            }
            callback(_$json);
        });
    });
    var readable = _stream.Readable.from(content);
    readable.pipe(postRequest);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gXCJzdHJlYW1cIjtcbmltcG9ydCB7IGhlYWRlcnMsIGNvbnRlbnRUeXBlcywgc3RhdHVzQ29kZXMsIHJlcXVlc3RVdGlsaXRpZXMsIHBhY2thZ2VVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJldHJpZXZlSG9zdCB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUmVzcG9uc2UgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVzcG9uc2VcIjtcbmltcG9ydCB7IHN0YXR1c01lc3NhZ2VGcm9tU3RhdHVzQ29kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9zdGF0dXNcIjtcbmltcG9ydCB7IFNFUlZFUl9GQUlMRURfVE9fUkVTUE9ORF9FUlJPUl9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBnZXRWZXJzaW9uIH0gPSBwYWNrYWdlVXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVQb3N0UmVxdWVzdCB9ID0gcmVxdWVzdFV0aWxpdGllcyxcbiAgICAgIHsgT0tfMjAwX1NUQVRVU19DT0RFIH0gPSBzdGF0dXNDb2RlcyxcbiAgICAgIHsgQ09OVEVOVF9UWVBFX0hFQURFUiB9ID0gaGVhZGVycyxcbiAgICAgIHsgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSB9ID0gY29udGVudFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3N0KHVyaSwganNvbiwgY2FsbGJhY2spIHtcbiAgY29uc3QgaG9zdCA9IHJldHJpZXZlSG9zdCgpLFxuICAgICAgICBxdWVyeSA9IHt9LFxuICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgIFsgQ09OVEVOVF9UWVBFX0hFQURFUiBdOiBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFXG4gICAgICAgIH0sXG4gICAgICAgIHZlcnNpb24gPSBnZXRWZXJzaW9uKCksXG4gICAgICAgIGNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShqc29uKSwgLy8vXG4gICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihqc29uLCB7XG4gICAgdmVyc2lvblN0cmluZ1xuICB9KTtcblxuICBjb25zdCBwb3N0UmVxdWVzdCA9IGNyZWF0ZVBvc3RSZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIGhlYWRlcnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFNFUlZFUl9GQUlMRURfVE9fUkVTUE9ORF9FUlJPUl9NRVNTQUdFKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRlbnRGcm9tUmVzcG9uc2UocmVzcG9uc2UsIChjb250ZW50KSA9PiB7XG4gICAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBjb250ZW50OyAvLy9cblxuICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFNFUlZFUl9GQUlMRURfVE9fUkVTUE9ORF9FUlJPUl9NRVNTQUdFKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBpZiAoc3RhdHVzQ29kZSAhPT0gT0tfMjAwX1NUQVRVU19DT0RFKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1c01lc3NhZ2UgPSBzdGF0dXNNZXNzYWdlRnJvbVN0YXR1c0NvZGUoc3RhdHVzQ29kZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYFRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggJyR7c3RhdHVzTWVzc2FnZX0nLmApO1xuXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgPSBbXSB9ID0ganNvbjtcblxuICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soanNvbik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlYWRhYmxlID0gUmVhZGFibGUuZnJvbShjb250ZW50KTtcblxuICByZWFkYWJsZS5waXBlKHBvc3RSZXF1ZXN0KTtcbn1cbiJdLCJuYW1lcyI6WyJwb3N0IiwiZ2V0VmVyc2lvbiIsInBhY2thZ2VVdGlsaXRpZXMiLCJjcmVhdGVQb3N0UmVxdWVzdCIsInJlcXVlc3RVdGlsaXRpZXMiLCJPS18yMDBfU1RBVFVTX0NPREUiLCJzdGF0dXNDb2RlcyIsIkNPTlRFTlRfVFlQRV9IRUFERVIiLCJoZWFkZXJzIiwiQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSIsImNvbnRlbnRUeXBlcyIsInVyaSIsImpzb24iLCJjYWxsYmFjayIsImhvc3QiLCJyZXRyaWV2ZUhvc3QiLCJxdWVyeSIsInZlcnNpb24iLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInZlcnNpb25TdHJpbmciLCJPYmplY3QiLCJhc3NpZ24iLCJwb3N0UmVxdWVzdCIsImVycm9yIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiU0VSVkVSX0ZBSUxFRF9UT19SRVNQT05EX0VSUk9SX01FU1NBR0UiLCJjb250ZW50RnJvbVJlc3BvbnNlIiwianNvblN0cmluZyIsInBhcnNlIiwic3RhdHVzQ29kZSIsInN0YXR1c01lc3NhZ2UiLCJzdGF0dXNNZXNzYWdlRnJvbVN0YXR1c0NvZGUiLCJtZXNzYWdlcyIsImZvckVhY2giLCJtZXNzYWdlIiwicmVhZGFibGUiLCJSZWFkYWJsZSIsImZyb20iLCJwaXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7OztzQkFkQzt5QkFDOEQ7NkJBRTFEO3dCQUNPO3NCQUNRO3dCQUNXOzs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNLEFBQUVDLGFBQWVDLDJCQUFnQixDQUEvQkQsWUFDRixBQUFFRSxvQkFBc0JDLDJCQUFnQixDQUF0Q0QsbUJBQ0YsQUFBRUUscUJBQXVCQyxzQkFBVyxDQUFsQ0Qsb0JBQ0YsQUFBRUUsc0JBQXdCQyxrQkFBTyxDQUEvQkQscUJBQ0YsQUFBRUUsOENBQWdEQyx1QkFBWSxDQUE1REQ7QUFFTyxTQUFTVCxLQUFLVyxHQUFHLEVBQUVDLElBQUksRUFBRUMsUUFBUTtJQUM5QyxJQUFNQyxPQUFPQyxJQUFBQSwyQkFBWSxLQUNuQkMsUUFBUSxDQUFDLEdBQ1RSLFlBQ0UscUJBQUVELHFCQUF1QkUsOENBRTNCUSxVQUFVaEIsY0FDVmlCLFVBQVVDLEtBQUtDLFNBQVMsQ0FBQ1IsT0FDekJTLGdCQUFnQkosU0FBVSxHQUFHO0lBRW5DSyxPQUFPQyxNQUFNLENBQUNYLE1BQU07UUFDbEJTLGVBQUFBO0lBQ0Y7SUFFQSxJQUFNRyxjQUFjckIsa0JBQWtCVyxNQUFNSCxLQUFLSyxPQUFPUixXQUFTLFNBQUNpQixPQUFPQztRQUN2RSxJQUFJRCxPQUFPO1lBQ1RFLFFBQVFDLEdBQUcsQ0FBQ0MsZ0RBQXNDO1lBRWxEO1FBQ0Y7UUFFQUMsSUFBQUEsNkJBQW1CLEVBQUNKLFVBQVUsU0FBQ1I7WUFDN0IsSUFBSU4sU0FBTztZQUVYLElBQUk7Z0JBQ0YsSUFBTW1CLGFBQWFiLFNBQVMsR0FBRztnQkFFL0JOLFNBQU9PLEtBQUthLEtBQUssQ0FBQ0Q7WUFDcEIsRUFBRSxPQUFPTixPQUFPO2dCQUNkLElBQUlBLE9BQU87b0JBQ1RFLFFBQVFDLEdBQUcsQ0FBQ0MsZ0RBQXNDO2dCQUNwRDtZQUNGO1lBRUEsSUFBTSxBQUFFSSxhQUFlUCxTQUFmTztZQUVSLElBQUlBLGVBQWU1QixvQkFBb0I7Z0JBQ3JDLElBQU02QixnQkFBZ0JDLElBQUFBLG1DQUEyQixFQUFDRjtnQkFFbEROLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLDhCQUEyQyxPQUFkTSxlQUFjO2dCQUV4RCxxQkFBMEJ0QixPQUFsQndCLFVBQUFBLHVDQUFXLEVBQUU7Z0JBRXJCQSxTQUFTQyxPQUFPLENBQUMsU0FBQ0M7b0JBQ2hCWCxRQUFRQyxHQUFHLENBQUNVO2dCQUNkO2dCQUVBO1lBQ0Y7WUFFQXpCLFNBQVNEO1FBQ1g7SUFDRjtJQUVBLElBQU0yQixXQUFXQyxnQkFBUSxDQUFDQyxJQUFJLENBQUN2QjtJQUUvQnFCLFNBQVNHLElBQUksQ0FBQ2xCO0FBQ2hCIn0=