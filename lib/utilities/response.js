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
    let content = _constants.EMPTY_STRING;
    response.on(_constants.DATA, (data)=>{
        content += data;
    });
    response.on(_constants.END, ()=>{
        callback(content);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVzcG9uc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVORCwgREFUQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudEZyb21SZXNwb25zZShyZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgbGV0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgcmVzcG9uc2Uub24oREFUQSwgKGRhdGEpID0+IHtcbiAgICBjb250ZW50ICs9IGRhdGE7XG4gIH0pO1xuXG4gIHJlc3BvbnNlLm9uKEVORCwgKCkgPT4ge1xuICAgIGNhbGxiYWNrKGNvbnRlbnQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjb250ZW50RnJvbVJlc3BvbnNlIiwicmVzcG9uc2UiLCJjYWxsYmFjayIsImNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJvbiIsIkRBVEEiLCJkYXRhIiwiRU5EIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJZ0JBOzs7ZUFBQUE7OzsyQkFGd0I7QUFFakMsU0FBU0Esb0JBQW9CQyxRQUFRLEVBQUVDLFFBQVE7SUFDcEQsSUFBSUMsVUFBVUMsdUJBQVk7SUFFMUJILFNBQVNJLEVBQUUsQ0FBQ0MsZUFBSSxFQUFFLENBQUNDO1FBQ2pCSixXQUFXSTtJQUNiO0lBRUFOLFNBQVNJLEVBQUUsQ0FBQ0csY0FBRyxFQUFFO1FBQ2ZOLFNBQVNDO0lBQ1g7QUFDRiJ9