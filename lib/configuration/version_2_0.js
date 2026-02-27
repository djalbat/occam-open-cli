"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return migrateConfigurationToVersion_2_0;
    }
});
const _versions = require("../versions");
function migrateConfigurationToVersion_2_0(configuration) {
    const version = _versions.VERSION_2_0;
    Object.assign(configuration, {
        version
    });
    return configuration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWd1cmF0aW9uL3ZlcnNpb25fMl8wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJTSU9OXzJfMCB9IGZyb20gXCIuLi92ZXJzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWdyYXRlQ29uZmlndXJhdGlvblRvVmVyc2lvbl8yXzAoY29uZmlndXJhdGlvbikge1xuICBjb25zdCB2ZXJzaW9uID0gVkVSU0lPTl8yXzA7XG5cbiAgT2JqZWN0LmFzc2lnbihjb25maWd1cmF0aW9uLCB7XG4gICAgdmVyc2lvblxuICB9KTtcblxuICByZXR1cm4gY29uZmlndXJhdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJtaWdyYXRlQ29uZmlndXJhdGlvblRvVmVyc2lvbl8yXzAiLCJjb25maWd1cmF0aW9uIiwidmVyc2lvbiIsIlZFUlNJT05fMl8wIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzBCQUZJO0FBRWIsU0FBU0Esa0NBQWtDQyxhQUFhO0lBQ3JFLE1BQU1DLFVBQVVDLHFCQUFXO0lBRTNCQyxPQUFPQyxNQUFNLENBQUNKLGVBQWU7UUFDM0JDO0lBQ0Y7SUFFQSxPQUFPRDtBQUNUIn0=