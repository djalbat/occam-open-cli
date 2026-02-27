"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get createConfiguration () {
        return createConfiguration;
    },
    get migrateConfigurationToVersion_5_1 () {
        return migrateConfigurationToVersion_5_1;
    }
});
const _versions = require("../versions");
const _defaults = require("../defaults");
function createConfiguration() {
    const version = _versions.VERSION_5_1, host = _defaults.DEFAULT_HOST, options = {}, shellCommands = _defaults.DEFAULT_SHELL_COMMANDS, identityToken = null, configuration = {
        version,
        host,
        options,
        shellCommands,
        identityToken
    };
    return configuration;
}
function migrateConfigurationToVersion_5_1(configuration) {
    const version = _versions.VERSION_5_1, shellCommands = _defaults.DEFAULT_SHELL_COMMANDS;
    Object.assign(configuration, {
        version,
        shellCommands
    });
    return configuration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWd1cmF0aW9uL3ZlcnNpb25fNV8xLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJTSU9OXzVfMSB9IGZyb20gXCIuLi92ZXJzaW9uc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9IT1NULCBERUZBVUxUX1NIRUxMX0NPTU1BTkRTIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25maWd1cmF0aW9uKCkge1xuICBjb25zdCB2ZXJzaW9uID0gVkVSU0lPTl81XzEsXG4gICAgICAgIGhvc3QgPSBERUZBVUxUX0hPU1QsXG4gICAgICAgIG9wdGlvbnMgPSB7fSxcbiAgICAgICAgc2hlbGxDb21tYW5kcyA9IERFRkFVTFRfU0hFTExfQ09NTUFORFMsXG4gICAgICAgIGlkZW50aXR5VG9rZW4gPSBudWxsLFxuICAgICAgICBjb25maWd1cmF0aW9uID0ge1xuICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgaG9zdCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHNoZWxsQ29tbWFuZHMsXG4gICAgICAgICAgaWRlbnRpdHlUb2tlblxuICAgICAgICB9O1xuXG4gIHJldHVybiBjb25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZUNvbmZpZ3VyYXRpb25Ub1ZlcnNpb25fNV8xKGNvbmZpZ3VyYXRpb24pIHtcbiAgY29uc3QgdmVyc2lvbiA9IFZFUlNJT05fNV8xLFxuICAgICAgICBzaGVsbENvbW1hbmRzID0gREVGQVVMVF9TSEVMTF9DT01NQU5EUztcblxuICBPYmplY3QuYXNzaWduKGNvbmZpZ3VyYXRpb24sIHtcbiAgICB2ZXJzaW9uLFxuICAgIHNoZWxsQ29tbWFuZHNcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29uZmlndXJhdGlvbiIsIm1pZ3JhdGVDb25maWd1cmF0aW9uVG9WZXJzaW9uXzVfMSIsInZlcnNpb24iLCJWRVJTSU9OXzVfMSIsImhvc3QiLCJERUZBVUxUX0hPU1QiLCJvcHRpb25zIiwic2hlbGxDb21tYW5kcyIsIkRFRkFVTFRfU0hFTExfQ09NTUFORFMiLCJpZGVudGl0eVRva2VuIiwiY29uZmlndXJhdGlvbiIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBS2dCQTtlQUFBQTs7UUFpQkFDO2VBQUFBOzs7MEJBcEJZOzBCQUN5QjtBQUU5QyxTQUFTRDtJQUNkLE1BQU1FLFVBQVVDLHFCQUFXLEVBQ3JCQyxPQUFPQyxzQkFBWSxFQUNuQkMsVUFBVSxDQUFDLEdBQ1hDLGdCQUFnQkMsZ0NBQXNCLEVBQ3RDQyxnQkFBZ0IsTUFDaEJDLGdCQUFnQjtRQUNkUjtRQUNBRTtRQUNBRTtRQUNBQztRQUNBRTtJQUNGO0lBRU4sT0FBT0M7QUFDVDtBQUVPLFNBQVNULGtDQUFrQ1MsYUFBYTtJQUM3RCxNQUFNUixVQUFVQyxxQkFBVyxFQUNyQkksZ0JBQWdCQyxnQ0FBc0I7SUFFNUNHLE9BQU9DLE1BQU0sQ0FBQ0YsZUFBZTtRQUMzQlI7UUFDQUs7SUFDRjtJQUVBLE9BQU9HO0FBQ1QifQ==