"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return releaseToJSONOperation;
    }
});
const _occammodel = require("occam-model");
function releaseToJSONOperation(proceed, abort, context) {
    let release;
    const { project } = context;
    release = _occammodel.Release.fromProject(project);
    if (release === null) {
        abort();
        return;
    }
    const releaseJSON = release.toJSON();
    release = releaseJSON; ///
    Object.assign(context, {
        release
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcmVsZWFzZVRvSlNPTi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVsZWFzZSB9IGZyb20gXCJvY2NhbS1tb2RlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxlYXNlVG9KU09OT3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlO1xuXG4gIGNvbnN0IHsgcHJvamVjdCB9ID0gY29udGV4dDtcblxuICByZWxlYXNlID0gUmVsZWFzZS5mcm9tUHJvamVjdChwcm9qZWN0KTtcblxuICBpZiAocmVsZWFzZSA9PT0gbnVsbCkge1xuICAgIGFib3J0KCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWxlYXNlSlNPTiA9IHJlbGVhc2UudG9KU09OKCk7XG5cbiAgcmVsZWFzZSA9IHJlbGVhc2VKU09OOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgcmVsZWFzZVxuICB9KTtcblxuICBwcm9jZWVkKCk7XG59XG4iXSwibmFtZXMiOlsicmVsZWFzZVRvSlNPTk9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZWxlYXNlIiwicHJvamVjdCIsIlJlbGVhc2UiLCJmcm9tUHJvamVjdCIsInJlbGVhc2VKU09OIiwidG9KU09OIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzRCQUZBO0FBRVQsU0FBU0EsdUJBQXVCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNwRSxJQUFJQztJQUVKLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdGO0lBRXBCQyxVQUFVRSxtQkFBTyxDQUFDQyxXQUFXLENBQUNGO0lBRTlCLElBQUlELFlBQVksTUFBTTtRQUNwQkY7UUFFQTtJQUNGO0lBRUEsTUFBTU0sY0FBY0osUUFBUUssTUFBTTtJQUVsQ0wsVUFBVUksYUFBYyxHQUFHO0lBRTNCRSxPQUFPQyxNQUFNLENBQUNSLFNBQVM7UUFDckJDO0lBQ0Y7SUFFQUg7QUFDRiJ9