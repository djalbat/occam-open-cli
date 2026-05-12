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
const _stream = require("stream");
const _necessary = require("necessary");
const _configuration = require("./configuration");
const _response = require("./utilities/response");
const _status = require("./utilities/status");
const _messages = require("./messages");
const { getVersion } = _necessary.packageUtilities, { createPostRequest } = _necessary.requestUtilities, { OK_200_STATUS_CODE } = _necessary.statusCodes, { CONTENT_TYPE_HEADER } = _necessary.headers, { APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE } = _necessary.contentTypes;
function post(uri, json, callback) {
    const host = (0, _configuration.retrieveHost)(), query = {}, headers = {
        [CONTENT_TYPE_HEADER]: APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE
    }, version = getVersion(), versionString = version; ///
    Object.assign(json, {
        versionString
    });
    const postRequest = createPostRequest(host, uri, query, headers, (error, response)=>{
        if (error) {
            console.log(_messages.SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);
            return;
        }
        (0, _response.contentFromResponse)(response, (content)=>{
            let json = null;
            try {
                const jsonString = content; ///
                json = JSON.parse(jsonString);
            } catch (error) {
                if (error) {
                    console.log(_messages.SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);
                }
            }
            const { statusCode } = response;
            if (statusCode !== OK_200_STATUS_CODE) {
                const statusMessage = (0, _status.statusMessageFromStatusCode)(statusCode);
                console.log(`The server responded with '${statusMessage}'.`);
                const { messages = [] } = json;
                messages.forEach((message)=>{
                    console.log(message);
                });
                return;
            }
            callback(json);
        });
    });
    const jsonString = JSON.stringify(json), content = jsonString, readable = _stream.Readable.from(content);
    readable.pipe(postRequest);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gXCJzdHJlYW1cIjtcbmltcG9ydCB7IGhlYWRlcnMsIGNvbnRlbnRUeXBlcywgc3RhdHVzQ29kZXMsIHJlcXVlc3RVdGlsaXRpZXMsIHBhY2thZ2VVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJldHJpZXZlSG9zdCB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUmVzcG9uc2UgfSBmcm9tIFwiLi91dGlsaXRpZXMvcmVzcG9uc2VcIjtcbmltcG9ydCB7IHN0YXR1c01lc3NhZ2VGcm9tU3RhdHVzQ29kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9zdGF0dXNcIjtcbmltcG9ydCB7IFNFUlZFUl9GQUlMRURfVE9fUkVTUE9ORF9FUlJPUl9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBnZXRWZXJzaW9uIH0gPSBwYWNrYWdlVXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVQb3N0UmVxdWVzdCB9ID0gcmVxdWVzdFV0aWxpdGllcyxcbiAgICAgIHsgT0tfMjAwX1NUQVRVU19DT0RFIH0gPSBzdGF0dXNDb2RlcyxcbiAgICAgIHsgQ09OVEVOVF9UWVBFX0hFQURFUiB9ID0gaGVhZGVycyxcbiAgICAgIHsgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSB9ID0gY29udGVudFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3N0KHVyaSwganNvbiwgY2FsbGJhY2spIHtcbiAgY29uc3QgaG9zdCA9IHJldHJpZXZlSG9zdCgpLFxuICAgICAgICBxdWVyeSA9IHt9LFxuICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgIFtDT05URU5UX1RZUEVfSEVBREVSXTogQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRVxuICAgICAgICB9LFxuICAgICAgICB2ZXJzaW9uID0gZ2V0VmVyc2lvbigpLFxuICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbjsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oanNvbiwge1xuICAgIHZlcnNpb25TdHJpbmdcbiAgfSk7XG5cbiAgY29uc3QgcG9zdFJlcXVlc3QgPSBjcmVhdGVQb3N0UmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhTRVJWRVJfRkFJTEVEX1RPX1JFU1BPTkRfRVJST1JfTUVTU0FHRSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZW50RnJvbVJlc3BvbnNlKHJlc3BvbnNlLCAoY29udGVudCkgPT4ge1xuICAgICAgbGV0IGpzb24gPSBudWxsO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gY29udGVudDsgLy8vXG5cbiAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhTRVJWRVJfRkFJTEVEX1RPX1JFU1BPTkRfRVJST1JfTUVTU0FHRSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSByZXNwb25zZTtcblxuICAgICAgaWYgKHN0YXR1c0NvZGUgIT09IE9LXzIwMF9TVEFUVVNfQ09ERSkge1xuICAgICAgICBjb25zdCBzdGF0dXNNZXNzYWdlID0gc3RhdHVzTWVzc2FnZUZyb21TdGF0dXNDb2RlKHN0YXR1c0NvZGUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoICcke3N0YXR1c01lc3NhZ2V9Jy5gKTtcblxuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzID0gW10gfSA9IGpzb247XG5cbiAgICAgICAgbWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGpzb24pO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksIC8vL1xuICAgICAgICBjb250ZW50ID0ganNvblN0cmluZywgLy8vLy8vXG4gICAgICAgIHJlYWRhYmxlID0gUmVhZGFibGUuZnJvbShjb250ZW50KTtcblxuICByZWFkYWJsZS5waXBlKHBvc3RSZXF1ZXN0KTtcbn1cbiJdLCJuYW1lcyI6WyJwb3N0IiwiZ2V0VmVyc2lvbiIsInBhY2thZ2VVdGlsaXRpZXMiLCJjcmVhdGVQb3N0UmVxdWVzdCIsInJlcXVlc3RVdGlsaXRpZXMiLCJPS18yMDBfU1RBVFVTX0NPREUiLCJzdGF0dXNDb2RlcyIsIkNPTlRFTlRfVFlQRV9IRUFERVIiLCJoZWFkZXJzIiwiQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSIsImNvbnRlbnRUeXBlcyIsInVyaSIsImpzb24iLCJjYWxsYmFjayIsImhvc3QiLCJyZXRyaWV2ZUhvc3QiLCJxdWVyeSIsInZlcnNpb24iLCJ2ZXJzaW9uU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwicG9zdFJlcXVlc3QiLCJlcnJvciIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIlNFUlZFUl9GQUlMRURfVE9fUkVTUE9ORF9FUlJPUl9NRVNTQUdFIiwiY29udGVudEZyb21SZXNwb25zZSIsImNvbnRlbnQiLCJqc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwic3RhdHVzQ29kZSIsInN0YXR1c01lc3NhZ2UiLCJzdGF0dXNNZXNzYWdlRnJvbVN0YXR1c0NvZGUiLCJtZXNzYWdlcyIsImZvckVhY2giLCJtZXNzYWdlIiwic3RyaW5naWZ5IiwicmVhZGFibGUiLCJSZWFkYWJsZSIsImZyb20iLCJwaXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7Ozt3QkFkQzsyQkFDOEQ7K0JBRTFEOzBCQUNPO3dCQUNROzBCQUNXO0FBRXZELE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdDLDJCQUFnQixFQUNqQyxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHQywyQkFBZ0IsRUFDeEMsRUFBRUMsa0JBQWtCLEVBQUUsR0FBR0Msc0JBQVcsRUFDcEMsRUFBRUMsbUJBQW1CLEVBQUUsR0FBR0Msa0JBQU8sRUFDakMsRUFBRUMsMkNBQTJDLEVBQUUsR0FBR0MsdUJBQVk7QUFFckQsU0FBU1YsS0FBS1csR0FBRyxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7SUFDOUMsTUFBTUMsT0FBT0MsSUFBQUEsMkJBQVksS0FDbkJDLFFBQVEsQ0FBQyxHQUNUUixVQUFVO1FBQ1IsQ0FBQ0Qsb0JBQW9CLEVBQUVFO0lBQ3pCLEdBQ0FRLFVBQVVoQixjQUNWaUIsZ0JBQWdCRCxTQUFVLEdBQUc7SUFFbkNFLE9BQU9DLE1BQU0sQ0FBQ1IsTUFBTTtRQUNsQk07SUFDRjtJQUVBLE1BQU1HLGNBQWNsQixrQkFBa0JXLE1BQU1ILEtBQUtLLE9BQU9SLFNBQVMsQ0FBQ2MsT0FBT0M7UUFDdkUsSUFBSUQsT0FBTztZQUNURSxRQUFRQyxHQUFHLENBQUNDLGdEQUFzQztZQUVsRDtRQUNGO1FBRUFDLElBQUFBLDZCQUFtQixFQUFDSixVQUFVLENBQUNLO1lBQzdCLElBQUloQixPQUFPO1lBRVgsSUFBSTtnQkFDRixNQUFNaUIsYUFBYUQsU0FBUyxHQUFHO2dCQUUvQmhCLE9BQU9rQixLQUFLQyxLQUFLLENBQUNGO1lBQ3BCLEVBQUUsT0FBT1AsT0FBTztnQkFDZCxJQUFJQSxPQUFPO29CQUNURSxRQUFRQyxHQUFHLENBQUNDLGdEQUFzQztnQkFDcEQ7WUFDRjtZQUVBLE1BQU0sRUFBRU0sVUFBVSxFQUFFLEdBQUdUO1lBRXZCLElBQUlTLGVBQWUzQixvQkFBb0I7Z0JBQ3JDLE1BQU00QixnQkFBZ0JDLElBQUFBLG1DQUEyQixFQUFDRjtnQkFFbERSLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLDJCQUEyQixFQUFFUSxjQUFjLEVBQUUsQ0FBQztnQkFFM0QsTUFBTSxFQUFFRSxXQUFXLEVBQUUsRUFBRSxHQUFHdkI7Z0JBRTFCdUIsU0FBU0MsT0FBTyxDQUFDLENBQUNDO29CQUNoQmIsUUFBUUMsR0FBRyxDQUFDWTtnQkFDZDtnQkFFQTtZQUNGO1lBRUF4QixTQUFTRDtRQUNYO0lBQ0Y7SUFFQSxNQUFNaUIsYUFBYUMsS0FBS1EsU0FBUyxDQUFDMUIsT0FDNUJnQixVQUFVQyxZQUNWVSxXQUFXQyxnQkFBUSxDQUFDQyxJQUFJLENBQUNiO0lBRS9CVyxTQUFTRyxJQUFJLENBQUNyQjtBQUNoQiJ9