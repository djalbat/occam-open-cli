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
const _occamfilesystem = require("occam-file-system");
const _messages = require("../messages");
const { loadProject } = _occamfilesystem.fileSystemUtilities;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vbG9hZFByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZmlsZS1zeXN0ZW1cIjtcblxuaW1wb3J0IHsgRkFJTEVEX1BST0pFQ1RfTE9BRF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgbG9hZFByb2plY3QgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0T3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcmVsZWFzZU5hbWUgfSA9IGNvbnRleHQsXG4gICAgICAgIHByb2plY3RzRGlyZWN0b3J5UGF0aCA9IHByb2Nlc3MuY3dkKCksIC8vL1xuICAgICAgICBwcm9qZWN0ID0gbG9hZFByb2plY3QocmVsZWFzZU5hbWUgLHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgaWYgKHByb2plY3QgPT09IG51bGwpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gRkFJTEVEX1BST0pFQ1RfTE9BRF9NRVNTQUdFOyAgLy8vXG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgIGFib3J0KCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBwcm9qZWN0XG4gIH0pO1xuXG4gIHByb2NlZWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJsb2FkUHJvamVjdE9wZXJhdGlvbiIsImxvYWRQcm9qZWN0IiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZWxlYXNlTmFtZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsInByb2Nlc3MiLCJjd2QiLCJwcm9qZWN0IiwibWVzc2FnZSIsIkZBSUxFRF9QUk9KRUNUX0xPQURfTUVTU0FHRSIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7aUNBTlk7MEJBRVE7QUFFNUMsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR0Msb0NBQW1CO0FBRTVCLFNBQVNGLHFCQUFxQkcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDbEUsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR0QsU0FDbEJFLHdCQUF3QkMsUUFBUUMsR0FBRyxJQUNuQ0MsVUFBVVQsWUFBWUssYUFBYUM7SUFFekMsSUFBSUcsWUFBWSxNQUFNO1FBQ3BCLE1BQU1DLFVBQVVDLHFDQUEyQixFQUFHLEdBQUc7UUFFakRDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFFWlA7UUFFQTtJQUNGO0lBRUFXLE9BQU9DLE1BQU0sQ0FBQ1gsU0FBUztRQUNyQks7SUFDRjtJQUVBUDtBQUNGIn0=