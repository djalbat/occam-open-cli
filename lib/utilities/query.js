"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    nodeQuery: function() {
        return nodeQuery;
    },
    nodesQuery: function() {
        return nodesQuery;
    }
});
var _occamDom = require("occam-dom");
function nodeQuery(expression) {
    var query = _occamDom.Query.fromExpression(expression);
    return function(node) {
        if (node !== null) {
            var nodes = query.execute(node);
            node = nodes.shift() || null; ///
        }
        return node;
    };
}
function nodesQuery(expression) {
    var query = _occamDom.Query.fromExpression(expression);
    return function(node) {
        var nodes = null;
        if (node !== null) {
            nodes = query.execute(node);
        }
        return nodes;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5KGV4cHJlc3Npb24pIHtcbiAgY29uc3QgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIG5vZGUgPSBub2Rlcy5zaGlmdCgpIHx8IG51bGw7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeShleHByZXNzaW9uKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH07XG59XG4iXSwibmFtZXMiOlsibm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeSIsImV4cHJlc3Npb24iLCJxdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJub2RlIiwibm9kZXMiLCJleGVjdXRlIiwic2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsU0FBUztlQUFUQTs7SUFjQUMsVUFBVTtlQUFWQTs7O3dCQWhCTTtBQUVmLFNBQVNELFVBQVVFLFVBQVUsRUFBRTtJQUNwQyxJQUFNQyxRQUFRQyxlQUFLLENBQUNDLGNBQWMsQ0FBQ0g7SUFFbkMsT0FBTyxTQUFTSSxJQUFJLEVBQUU7UUFDcEIsSUFBSUEsU0FBUyxJQUFJLEVBQUU7WUFDakIsSUFBTUMsUUFBUUosTUFBTUssT0FBTyxDQUFDRjtZQUU1QkEsT0FBT0MsTUFBTUUsS0FBSyxNQUFNLElBQUksRUFBRSxHQUFHO1FBQ25DLENBQUM7UUFFRCxPQUFPSDtJQUNUO0FBQ0Y7QUFFTyxTQUFTTCxXQUFXQyxVQUFVLEVBQUU7SUFDckMsSUFBTUMsUUFBUUMsZUFBSyxDQUFDQyxjQUFjLENBQUNIO0lBRW5DLE9BQU8sU0FBU0ksSUFBSSxFQUFFO1FBQ3BCLElBQUlDLFFBQVEsSUFBSTtRQUVoQixJQUFJRCxTQUFTLElBQUksRUFBRTtZQUNqQkMsUUFBUUosTUFBTUssT0FBTyxDQUFDRjtRQUN4QixDQUFDO1FBRUQsT0FBT0M7SUFDVDtBQUNGIn0=