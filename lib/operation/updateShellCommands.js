"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateShellCommandsOperation;
    }
});
const _configuration = require("../configuration");
function updateShellCommandsOperation(proceed, abort, context) {
    const { shellCommands } = context;
    (0, _configuration.updateShellCommands)(shellCommands);
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vdXBkYXRlU2hlbGxDb21tYW5kcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXBkYXRlU2hlbGxDb21tYW5kcyB9IGZyb20gXCIuLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNoZWxsQ29tbWFuZHNPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBzaGVsbENvbW1hbmRzIH0gPSBjb250ZXh0O1xuXG4gIHVwZGF0ZVNoZWxsQ29tbWFuZHMoc2hlbGxDb21tYW5kcyk7XG5cbiAgcHJvY2VlZCgpO1xufVxuIl0sIm5hbWVzIjpbInVwZGF0ZVNoZWxsQ29tbWFuZHNPcGVyYXRpb24iLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0Iiwic2hlbGxDb21tYW5kcyIsInVwZGF0ZVNoZWxsQ29tbWFuZHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7K0JBRlk7QUFFckIsU0FBU0EsNkJBQTZCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUMxRSxNQUFNLEVBQUVDLGFBQWEsRUFBRSxHQUFHRDtJQUUxQkUsSUFBQUEsa0NBQW1CLEVBQUNEO0lBRXBCSDtBQUNGIn0=