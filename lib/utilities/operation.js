"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return executeOperations;
    }
});
var _necessary = require("necessary");
var whilst = _necessary.asynchronousUtilities.whilst;
function executeOperations(operations, callback, context) {
    var completed = true;
    Object.assign(context, {
        operations: operations,
        completed: completed
    });
    whilst(executeOperation, function() {
        var completed = context.completed;
        delete context.operations;
        delete context.completed;
        callback(completed);
    }, context);
}
function executeOperation(next, done, context, index) {
    var operations = context.operations, operationsLength = operations.length, lastIndex = operationsLength - 1;
    if (index > lastIndex) {
        done();
        return;
    }
    var operation = operations[index];
    operation(proceed, abort, context);
    function proceed() {
        next();
    }
    function abort() {
        var completed = false;
        Object.assign(context, {
            completed: completed
        });
        done();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb3BlcmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgd2hpbHN0IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4ZWN1dGVPcGVyYXRpb25zKG9wZXJhdGlvbnMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbXBsZXRlZCA9IHRydWU7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgb3BlcmF0aW9ucyxcbiAgICBjb21wbGV0ZWRcbiAgfSk7XG5cbiAgd2hpbHN0KGV4ZWN1dGVPcGVyYXRpb24sICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gY29udGV4dDtcblxuICAgIGRlbGV0ZSBjb250ZXh0Lm9wZXJhdGlvbnM7XG5cbiAgICBkZWxldGUgY29udGV4dC5jb21wbGV0ZWQ7XG5cbiAgICBjYWxsYmFjayhjb21wbGV0ZWQpO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZU9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkge1xuICBjb25zdCB7IG9wZXJhdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIG9wZXJhdGlvbnNMZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gb3BlcmF0aW9uc0xlbmd0aCAtIDE7XG5cbiAgaWYgKGluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgZG9uZSgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgb3BlcmF0aW9uID0gb3BlcmF0aW9uc1tpbmRleF07XG5cbiAgb3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBwcm9jZWVkKCkge1xuICAgIG5leHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFib3J0KCkge1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBjb21wbGV0ZWRcbiAgICB9KTtcblxuICAgIGRvbmUoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImV4ZWN1dGVPcGVyYXRpb25zIiwid2hpbHN0IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwib3BlcmF0aW9ucyIsImNhbGxiYWNrIiwiY29udGV4dCIsImNvbXBsZXRlZCIsIk9iamVjdCIsImFzc2lnbiIsImV4ZWN1dGVPcGVyYXRpb24iLCJuZXh0IiwiZG9uZSIsImluZGV4Iiwib3BlcmF0aW9uc0xlbmd0aCIsImxlbmd0aCIsImxhc3RJbmRleCIsIm9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7Ozt5QkFKYztBQUV0QyxJQUFNLEFBQUVDLFNBQVdDLGdDQUFxQixDQUFoQ0Q7QUFFTyxTQUFTRCxrQkFBa0JHLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxPQUFPO0lBQ3JFLElBQU1DLFlBQVk7SUFFbEJDLE9BQU9DLE1BQU0sQ0FBQ0gsU0FBUztRQUNyQkYsWUFBQUE7UUFDQUcsV0FBQUE7SUFDRjtJQUVBTCxPQUFPUSxrQkFBa0I7UUFDdkIsSUFBTSxBQUFFSCxZQUFjRCxRQUFkQztRQUVSLE9BQU9ELFFBQVFGLFVBQVU7UUFFekIsT0FBT0UsUUFBUUMsU0FBUztRQUV4QkYsU0FBU0U7SUFDWCxHQUFHRDtBQUNMO0FBRUEsU0FBU0ksaUJBQWlCQyxJQUFJLEVBQUVDLElBQUksRUFBRU4sT0FBTyxFQUFFTyxLQUFLO0lBQ2xELElBQU0sQUFBRVQsYUFBZUUsUUFBZkYsWUFDRlUsbUJBQW1CVixXQUFXVyxNQUFNLEVBQ3BDQyxZQUFZRixtQkFBbUI7SUFFckMsSUFBSUQsUUFBUUcsV0FBVztRQUNyQko7UUFFQTtJQUNGO0lBRUEsSUFBTUssWUFBWWIsVUFBVSxDQUFDUyxNQUFNO0lBRW5DSSxVQUFVQyxTQUFTQyxPQUFPYjtJQUUxQixTQUFTWTtRQUNQUDtJQUNGO0lBRUEsU0FBU1E7UUFDUCxJQUFNWixZQUFZO1FBRWxCQyxPQUFPQyxNQUFNLENBQUNILFNBQVM7WUFDckJDLFdBQUFBO1FBQ0Y7UUFFQUs7SUFDRjtBQUNGIn0=