"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "contentFromResponse", {
    enumerable: true,
    get: function() {
        return contentFromResponse;
    }
});
const _constants = require("../constants");
function contentFromResponse(response, callback) {
    const chunks = [];
    response.on(_constants.DATA, (chunk)=>{
        chunks.push(chunk);
    });
    response.on(_constants.END, ()=>{
        const content = Buffer.concat(chunks).toString(_constants.UTF8);
        callback(content);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVzcG9uc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVORCwgREFUQSwgVVRGOCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRlbnRGcm9tUmVzcG9uc2UocmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNodW5rcyA9IFtdO1xuXG4gIHJlc3BvbnNlLm9uKERBVEEsIChjaHVuaykgPT4ge1xuICAgIGNodW5rcy5wdXNoKGNodW5rKTtcbiAgfSk7XG5cbiAgcmVzcG9uc2Uub24oRU5ELCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IEJ1ZmZlclxuICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoY2h1bmtzKVxuICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZyhVVEY4KTtcblxuICAgIGNhbGxiYWNrKGNvbnRlbnQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjb250ZW50RnJvbVJlc3BvbnNlIiwicmVzcG9uc2UiLCJjYWxsYmFjayIsImNodW5rcyIsIm9uIiwiREFUQSIsImNodW5rIiwicHVzaCIsIkVORCIsImNvbnRlbnQiLCJCdWZmZXIiLCJjb25jYXQiLCJ0b1N0cmluZyIsIlVURjgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7OzJCQUZnQjtBQUV6QixTQUFTQSxvQkFBb0JDLFFBQVEsRUFBRUMsUUFBUTtJQUNwRCxNQUFNQyxTQUFTLEVBQUU7SUFFakJGLFNBQVNHLEVBQUUsQ0FBQ0MsZUFBSSxFQUFFLENBQUNDO1FBQ2pCSCxPQUFPSSxJQUFJLENBQUNEO0lBQ2Q7SUFFQUwsU0FBU0csRUFBRSxDQUFDSSxjQUFHLEVBQUU7UUFDZixNQUFNQyxVQUFVQyxPQUNHQyxNQUFNLENBQUNSLFFBQ1BTLFFBQVEsQ0FBQ0MsZUFBSTtRQUVoQ1gsU0FBU087SUFDWDtBQUNGIn0=