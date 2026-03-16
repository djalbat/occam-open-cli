"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return loadProjectOperation;
    }
});
const _occamserver = require("occam-server");
const _messages = require("../messages");
const { loadProject } = _occamserver.fileSystemUtilities;
function loadProjectOperation(proceed, abort, context) {
    const { releaseName } = context, projectsDirectoryPath = process.cwd(), project = loadProject(releaseName, projectsDirectoryPath);
    if (project === null) {
        const message = _messages.FAILED_PROJECT_LOAD_MESSAGE; ///
        console.log(message);
        abort();
        return;
    }
    Object.assign(context, {
        project
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vbG9hZFByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tc2VydmVyXCI7XG5cbmltcG9ydCB7IEZBSUxFRF9QUk9KRUNUX0xPQURfTUVTU0FHRSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IGxvYWRQcm9qZWN0IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUHJvamVjdE9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VOYW1lIH0gPSBjb250ZXh0LFxuICAgICAgICBwcm9qZWN0c0RpcmVjdG9yeVBhdGggPSBwcm9jZXNzLmN3ZCgpLCAvLy9cbiAgICAgICAgcHJvamVjdCA9IGxvYWRQcm9qZWN0KHJlbGVhc2VOYW1lICxwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gIGlmIChwcm9qZWN0ID09PSBudWxsKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IEZBSUxFRF9QUk9KRUNUX0xPQURfTUVTU0FHRTsgIC8vL1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICBhYm9ydCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgcHJvamVjdFxuICB9KTtcblxuICBwcm9jZWVkKCk7XG59XG4iXSwibmFtZXMiOlsibG9hZFByb2plY3RPcGVyYXRpb24iLCJsb2FkUHJvamVjdCIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwicmVsZWFzZU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJwcm9jZXNzIiwiY3dkIiwicHJvamVjdCIsIm1lc3NhZ2UiLCJGQUlMRURfUFJPSkVDVF9MT0FEX01FU1NBR0UiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7OzZCQU5ZOzBCQUVRO0FBRTVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdDLGdDQUFtQjtBQUU1QixTQUFTRixxQkFBcUJHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ2xFLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdELFNBQ2xCRSx3QkFBd0JDLFFBQVFDLEdBQUcsSUFDbkNDLFVBQVVULFlBQVlLLGFBQWFDO0lBRXpDLElBQUlHLFlBQVksTUFBTTtRQUNwQixNQUFNQyxVQUFVQyxxQ0FBMkIsRUFBRyxHQUFHO1FBRWpEQyxRQUFRQyxHQUFHLENBQUNIO1FBRVpQO1FBRUE7SUFDRjtJQUVBVyxPQUFPQyxNQUFNLENBQUNYLFNBQVM7UUFDckJLO0lBQ0Y7SUFFQVA7QUFDRiJ9