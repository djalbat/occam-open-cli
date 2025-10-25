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
    get assertConfigurationFileExists () {
        return assertConfigurationFileExists;
    },
    get checkConfigurationFileExists () {
        return checkConfigurationFileExists;
    },
    get createConfigurationFile () {
        return createConfigurationFile;
    },
    get migrateConfigurationFile () {
        return migrateConfigurationFile;
    },
    get removeIdentityToken () {
        return removeIdentityToken;
    },
    get retrieveHost () {
        return retrieveHost;
    },
    get retrieveIdentityToken () {
        return retrieveIdentityToken;
    },
    get retrieveOptions () {
        return retrieveOptions;
    },
    get retrieveShellCommands () {
        return retrieveShellCommands;
    },
    get updateIdentityToken () {
        return updateIdentityToken;
    },
    get updateOptions () {
        return updateOptions;
    },
    get updateShellCommands () {
        return updateShellCommands;
    }
});
var _necessary = require("necessary");
var _constants = require("./constants");
var _version_5_1 = require("./configuration/version_5_1");
var _version_2_0 = require("./configuration/version_2_0");
var _version_5_0 = require("./configuration/version_5_0");
var _messages = require("./messages");
var _versions = require("./versions");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var rc = _necessary.configurationUtilities.rc, migrate = _necessary.versionUtilities.migrate, setRCBaseExtension = rc.setRCBaseExtension, checkRCFileExists = rc.checkRCFileExists, updateRCFile = rc.updateRCFile, writeRCFile = rc.writeRCFile, readRCFile = rc.readRCFile;
var rcBaseExtension = _constants.OPEN; ///
setRCBaseExtension(rcBaseExtension);
function retrieveHost() {
    var configuration = readConfigurationFile(), host = configuration.host;
    return host;
}
function retrieveOptions() {
    var configuration = readConfigurationFile(), options = configuration.options;
    return options;
}
function retrieveShellCommands() {
    var configuration = readConfigurationFile(), shellCommands = configuration.shellCommands;
    return shellCommands;
}
function retrieveIdentityToken() {
    var configuration = readConfigurationFile(), identityToken = configuration.identityToken;
    return identityToken;
}
function updateOptions(options) {
    updateConfigurationFile({
        options: options
    });
}
function updateShellCommands(shellCommands) {
    updateConfigurationFile({
        shellCommands: shellCommands
    });
}
function updateIdentityToken(identityToken) {
    updateConfigurationFile({
        identityToken: identityToken
    });
}
function removeIdentityToken() {
    updateConfigurationFile(null, "identityToken");
}
function createConfigurationFile() {
    var configuration = (0, _version_5_1.createConfiguration)(), json = configuration; ///
    writeRCFile(json);
}
function migrateConfigurationFile() {
    assertConfigurationFileExists();
    var json = readRCFile();
    var _obj;
    var migrationMap = (_obj = {}, _define_property(_obj, _versions.VERSION_1_5, _version_2_0.migrateConfigurationToVersion_2_0), _define_property(_obj, _versions.VERSION_2_0, _version_5_0.migrateConfigurationToVersion_5_0), _define_property(_obj, _versions.VERSION_5_0, _version_5_1.migrateConfigurationToVersion_5_1), _obj), latestVersion = _versions.VERSION_5_1;
    json = migrate(json, migrationMap, latestVersion);
    writeRCFile(json);
}
function checkConfigurationFileExists() {
    var rcFileExists = checkRCFileExists(), configurationFileExists = rcFileExists; ///
    return configurationFileExists;
}
function assertConfigurationFileExists() {
    var configurationFileExists = checkConfigurationFileExists();
    if (!configurationFileExists) {
        console.log(_messages.CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE);
        process.exit(1);
    }
}
function readConfigurationFile() {
    assertConfigurationFileExists();
    var json = readRCFile(), configuration = json; ///
    return configuration;
}
function writeConfigurationFile(configuration) {
    assertConfigurationFileExists();
    var json = configuration; ///
    writeRCFile(json);
}
function updateConfigurationFile(addedConfiguration) {
    for(var _len = arguments.length, deleteConfigurationNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        deleteConfigurationNames[_key - 1] = arguments[_key];
    }
    assertConfigurationFileExists();
    var addedProperties = addedConfiguration, deletedPropertyNames = deleteConfigurationNames; ///
    updateRCFile.apply(void 0, [
        addedProperties
    ].concat(_to_consumable_array(deletedPropertyNames)));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWd1cmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJzaW9uVXRpbGl0aWVzLCBjb25maWd1cmF0aW9uVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBPUEVOIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbi92ZXJzaW9uXzVfMVwiO1xuaW1wb3J0IHsgbWlncmF0ZUNvbmZpZ3VyYXRpb25Ub1ZlcnNpb25fMl8wIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbi92ZXJzaW9uXzJfMFwiO1xuaW1wb3J0IHsgbWlncmF0ZUNvbmZpZ3VyYXRpb25Ub1ZlcnNpb25fNV8wIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbi92ZXJzaW9uXzVfMFwiO1xuaW1wb3J0IHsgbWlncmF0ZUNvbmZpZ3VyYXRpb25Ub1ZlcnNpb25fNV8xIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbi92ZXJzaW9uXzVfMVwiO1xuaW1wb3J0IHsgQ09ORklHVVJBVElPTl9GSUxFX0RPRVNfTk9UX0VYSVNUX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgVkVSU0lPTl8xXzUsIFZFUlNJT05fMl8wLCBWRVJTSU9OXzVfMCwgVkVSU0lPTl81XzEgfSBmcm9tIFwiLi92ZXJzaW9uc1wiO1xuXG5jb25zdCB7IHJjIH0gPSBjb25maWd1cmF0aW9uVXRpbGl0aWVzLFxuICAgICAgeyBtaWdyYXRlIH0gPSB2ZXJzaW9uVXRpbGl0aWVzLFxuICAgICAgeyBzZXRSQ0Jhc2VFeHRlbnNpb24sIGNoZWNrUkNGaWxlRXhpc3RzLCB1cGRhdGVSQ0ZpbGUsIHdyaXRlUkNGaWxlLCByZWFkUkNGaWxlIH0gPSByYztcblxuY29uc3QgcmNCYXNlRXh0ZW5zaW9uID0gT1BFTjsgLy8vXG5cbnNldFJDQmFzZUV4dGVuc2lvbihyY0Jhc2VFeHRlbnNpb24pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVIb3N0KCkge1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gcmVhZENvbmZpZ3VyYXRpb25GaWxlKCksXG4gICAgICAgIHsgaG9zdCB9ID0gY29uZmlndXJhdGlvbjtcblxuICByZXR1cm4gaG9zdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlT3B0aW9ucygpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IHJlYWRDb25maWd1cmF0aW9uRmlsZSgpLFxuICAgICAgICB7IG9wdGlvbnMgfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVNoZWxsQ29tbWFuZHMoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSByZWFkQ29uZmlndXJhdGlvbkZpbGUoKSxcbiAgICAgICAgeyBzaGVsbENvbW1hbmRzIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gIHJldHVybiBzaGVsbENvbW1hbmRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVJZGVudGl0eVRva2VuKCkge1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gcmVhZENvbmZpZ3VyYXRpb25GaWxlKCksXG4gICAgICAgIHsgaWRlbnRpdHlUb2tlbiB9ID0gY29uZmlndXJhdGlvbjtcblxuICByZXR1cm4gaWRlbnRpdHlUb2tlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0aW9ucykge1xuICB1cGRhdGVDb25maWd1cmF0aW9uRmlsZSh7XG4gICAgb3B0aW9uc1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNoZWxsQ29tbWFuZHMoc2hlbGxDb21tYW5kcykge1xuICB1cGRhdGVDb25maWd1cmF0aW9uRmlsZSh7XG4gICAgc2hlbGxDb21tYW5kc1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUlkZW50aXR5VG9rZW4oaWRlbnRpdHlUb2tlbikge1xuICB1cGRhdGVDb25maWd1cmF0aW9uRmlsZSh7XG4gICAgaWRlbnRpdHlUb2tlblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUlkZW50aXR5VG9rZW4oKSB7XG4gIHVwZGF0ZUNvbmZpZ3VyYXRpb25GaWxlKG51bGwsIFwiaWRlbnRpdHlUb2tlblwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmZpZ3VyYXRpb25GaWxlKCkge1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gY3JlYXRlQ29uZmlndXJhdGlvbigpLFxuICAgICAgICBqc29uID0gY29uZmlndXJhdGlvbjsgLy8vXG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlQ29uZmlndXJhdGlvbkZpbGUoKSB7XG4gIGFzc2VydENvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKCk7XG5cbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAgY29uc3QgbWlncmF0aW9uTWFwID0ge1xuICAgICAgICAgIFsgVkVSU0lPTl8xXzUgXTogbWlncmF0ZUNvbmZpZ3VyYXRpb25Ub1ZlcnNpb25fMl8wLFxuICAgICAgICAgIFsgVkVSU0lPTl8yXzAgXTogbWlncmF0ZUNvbmZpZ3VyYXRpb25Ub1ZlcnNpb25fNV8wLFxuICAgICAgICAgIFsgVkVSU0lPTl81XzAgXSA6bWlncmF0ZUNvbmZpZ3VyYXRpb25Ub1ZlcnNpb25fNV8xXG4gICAgICAgIH0sXG4gICAgICAgIGxhdGVzdFZlcnNpb24gPSBWRVJTSU9OXzVfMTtcblxuICBqc29uID0gbWlncmF0ZShqc29uLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pO1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb25maWd1cmF0aW9uRmlsZUV4aXN0cygpIHtcbiAgY29uc3QgcmNGaWxlRXhpc3RzID0gY2hlY2tSQ0ZpbGVFeGlzdHMoKSxcbiAgICAgICAgY29uZmlndXJhdGlvbkZpbGVFeGlzdHMgPSByY0ZpbGVFeGlzdHM7IC8vL1xuXG4gIHJldHVybiBjb25maWd1cmF0aW9uRmlsZUV4aXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydENvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKCkge1xuICBjb25zdCBjb25maWd1cmF0aW9uRmlsZUV4aXN0cyA9IGNoZWNrQ29uZmlndXJhdGlvbkZpbGVFeGlzdHMoKTtcblxuICBpZiAoIWNvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKSB7XG4gICAgY29uc29sZS5sb2coQ09ORklHVVJBVElPTl9GSUxFX0RPRVNfTk9UX0VYSVNUX01FU1NBR0UpO1xuXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRDb25maWd1cmF0aW9uRmlsZSgpIHtcbiAgYXNzZXJ0Q29uZmlndXJhdGlvbkZpbGVFeGlzdHMoKTtcblxuICBjb25zdCBqc29uID0gcmVhZFJDRmlsZSgpLFxuICAgICAgICBjb25maWd1cmF0aW9uID0ganNvbjsgLy8vXG5cbiAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG59XG5cbmZ1bmN0aW9uIHdyaXRlQ29uZmlndXJhdGlvbkZpbGUoY29uZmlndXJhdGlvbikge1xuICBhc3NlcnRDb25maWd1cmF0aW9uRmlsZUV4aXN0cygpO1xuXG4gIGNvbnN0IGpzb24gPSBjb25maWd1cmF0aW9uOyAvLy9cblxuICB3cml0ZVJDRmlsZShqc29uKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29uZmlndXJhdGlvbkZpbGUoYWRkZWRDb25maWd1cmF0aW9uLCAuLi5kZWxldGVDb25maWd1cmF0aW9uTmFtZXMpIHtcbiAgYXNzZXJ0Q29uZmlndXJhdGlvbkZpbGVFeGlzdHMoKTtcblxuICBjb25zdCBhZGRlZFByb3BlcnRpZXMgPSBhZGRlZENvbmZpZ3VyYXRpb24sIC8vL1xuICAgICAgICBkZWxldGVkUHJvcGVydHlOYW1lcyA9IGRlbGV0ZUNvbmZpZ3VyYXRpb25OYW1lczsgIC8vL1xuXG4gIHVwZGF0ZVJDRmlsZShhZGRlZFByb3BlcnRpZXMsIC4uLmRlbGV0ZWRQcm9wZXJ0eU5hbWVzKTtcbn1cbiJdLCJuYW1lcyI6WyJhc3NlcnRDb25maWd1cmF0aW9uRmlsZUV4aXN0cyIsImNoZWNrQ29uZmlndXJhdGlvbkZpbGVFeGlzdHMiLCJjcmVhdGVDb25maWd1cmF0aW9uRmlsZSIsIm1pZ3JhdGVDb25maWd1cmF0aW9uRmlsZSIsInJlbW92ZUlkZW50aXR5VG9rZW4iLCJyZXRyaWV2ZUhvc3QiLCJyZXRyaWV2ZUlkZW50aXR5VG9rZW4iLCJyZXRyaWV2ZU9wdGlvbnMiLCJyZXRyaWV2ZVNoZWxsQ29tbWFuZHMiLCJ1cGRhdGVJZGVudGl0eVRva2VuIiwidXBkYXRlT3B0aW9ucyIsInVwZGF0ZVNoZWxsQ29tbWFuZHMiLCJyYyIsImNvbmZpZ3VyYXRpb25VdGlsaXRpZXMiLCJtaWdyYXRlIiwidmVyc2lvblV0aWxpdGllcyIsInNldFJDQmFzZUV4dGVuc2lvbiIsImNoZWNrUkNGaWxlRXhpc3RzIiwidXBkYXRlUkNGaWxlIiwid3JpdGVSQ0ZpbGUiLCJyZWFkUkNGaWxlIiwicmNCYXNlRXh0ZW5zaW9uIiwiT1BFTiIsImNvbmZpZ3VyYXRpb24iLCJyZWFkQ29uZmlndXJhdGlvbkZpbGUiLCJob3N0Iiwib3B0aW9ucyIsInNoZWxsQ29tbWFuZHMiLCJpZGVudGl0eVRva2VuIiwidXBkYXRlQ29uZmlndXJhdGlvbkZpbGUiLCJjcmVhdGVDb25maWd1cmF0aW9uIiwianNvbiIsIm1pZ3JhdGlvbk1hcCIsIlZFUlNJT05fMV81IiwibWlncmF0ZUNvbmZpZ3VyYXRpb25Ub1ZlcnNpb25fMl8wIiwiVkVSU0lPTl8yXzAiLCJtaWdyYXRlQ29uZmlndXJhdGlvblRvVmVyc2lvbl81XzAiLCJWRVJTSU9OXzVfMCIsIm1pZ3JhdGVDb25maWd1cmF0aW9uVG9WZXJzaW9uXzVfMSIsImxhdGVzdFZlcnNpb24iLCJWRVJTSU9OXzVfMSIsInJjRmlsZUV4aXN0cyIsImNvbmZpZ3VyYXRpb25GaWxlRXhpc3RzIiwiY29uc29sZSIsImxvZyIsIkNPTkZJR1VSQVRJT05fRklMRV9ET0VTX05PVF9FWElTVF9NRVNTQUdFIiwicHJvY2VzcyIsImV4aXQiLCJ3cml0ZUNvbmZpZ3VyYXRpb25GaWxlIiwiYWRkZWRDb25maWd1cmF0aW9uIiwiZGVsZXRlQ29uZmlndXJhdGlvbk5hbWVzIiwiYWRkZWRQcm9wZXJ0aWVzIiwiZGVsZXRlZFByb3BlcnR5TmFtZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXFHZ0JBO2VBQUFBOztRQVBBQztlQUFBQTs7UUF4QkFDO2VBQUFBOztRQU9BQztlQUFBQTs7UUFYQUM7ZUFBQUE7O1FBOUNBQztlQUFBQTs7UUFxQkFDO2VBQUFBOztRQWRBQztlQUFBQTs7UUFPQUM7ZUFBQUE7O1FBMEJBQztlQUFBQTs7UUFaQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOzs7eUJBcER5Qzt5QkFFcEM7MkJBQ2U7MkJBQ2M7MkJBQ0E7d0JBRVE7d0JBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRSxJQUFNLEFBQUVDLEtBQU9DLGlDQUFzQixDQUE3QkQsSUFDRixBQUFFRSxVQUFZQywyQkFBZ0IsQ0FBNUJELFNBQ0FFLHFCQUFpRkosR0FBakZJLG9CQUFvQkMsb0JBQTZETCxHQUE3REssbUJBQW1CQyxlQUEwQ04sR0FBMUNNLGNBQWNDLGNBQTRCUCxHQUE1Qk8sYUFBYUMsYUFBZVIsR0FBZlE7QUFFMUUsSUFBTUMsa0JBQWtCQyxlQUFJLEVBQUUsR0FBRztBQUVqQ04sbUJBQW1CSztBQUVaLFNBQVNoQjtJQUNkLElBQU1rQixnQkFBZ0JDLHlCQUNoQixBQUFFQyxPQUFTRixjQUFURTtJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTbEI7SUFDZCxJQUFNZ0IsZ0JBQWdCQyx5QkFDaEIsQUFBRUUsVUFBWUgsY0FBWkc7SUFFUixPQUFPQTtBQUNUO0FBRU8sU0FBU2xCO0lBQ2QsSUFBTWUsZ0JBQWdCQyx5QkFDaEIsQUFBRUcsZ0JBQWtCSixjQUFsQkk7SUFFUixPQUFPQTtBQUNUO0FBRU8sU0FBU3JCO0lBQ2QsSUFBTWlCLGdCQUFnQkMseUJBQ2hCLEFBQUVJLGdCQUFrQkwsY0FBbEJLO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNsQixjQUFjZ0IsT0FBTztJQUNuQ0csd0JBQXdCO1FBQ3RCSCxTQUFBQTtJQUNGO0FBQ0Y7QUFFTyxTQUFTZixvQkFBb0JnQixhQUFhO0lBQy9DRSx3QkFBd0I7UUFDdEJGLGVBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNsQixvQkFBb0JtQixhQUFhO0lBQy9DQyx3QkFBd0I7UUFDdEJELGVBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVN4QjtJQUNkeUIsd0JBQXdCLE1BQU07QUFDaEM7QUFFTyxTQUFTM0I7SUFDZCxJQUFNcUIsZ0JBQWdCTyxJQUFBQSxnQ0FBbUIsS0FDbkNDLE9BQU9SLGVBQWUsR0FBRztJQUUvQkosWUFBWVk7QUFDZDtBQUVPLFNBQVM1QjtJQUNkSDtJQUVBLElBQUkrQixPQUFPWDtRQUVVO0lBQXJCLElBQU1ZLGdCQUFlLFdBQ2IsaUJBRGEsTUFDWEMscUJBQVcsRUFBSUMsOENBQWlDLEdBQ2xELGlCQUZhLE1BRVhDLHFCQUFXLEVBQUlDLDhDQUFpQyxHQUNsRCxpQkFIYSxNQUdYQyxxQkFBVyxFQUFJQyw4Q0FBaUMsR0FIckMsT0FLZkMsZ0JBQWdCQyxxQkFBVztJQUVqQ1QsT0FBT2pCLFFBQVFpQixNQUFNQyxjQUFjTztJQUVuQ3BCLFlBQVlZO0FBQ2Q7QUFFTyxTQUFTOUI7SUFDZCxJQUFNd0MsZUFBZXhCLHFCQUNmeUIsMEJBQTBCRCxjQUFjLEdBQUc7SUFFakQsT0FBT0M7QUFDVDtBQUVPLFNBQVMxQztJQUNkLElBQU0wQywwQkFBMEJ6QztJQUVoQyxJQUFJLENBQUN5Qyx5QkFBeUI7UUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0MsbURBQXlDO1FBRXJEQyxRQUFRQyxJQUFJLENBQUM7SUFDZjtBQUNGO0FBRUEsU0FBU3ZCO0lBQ1B4QjtJQUVBLElBQU0rQixPQUFPWCxjQUNQRyxnQkFBZ0JRLE1BQU0sR0FBRztJQUUvQixPQUFPUjtBQUNUO0FBRUEsU0FBU3lCLHVCQUF1QnpCLGFBQWE7SUFDM0N2QjtJQUVBLElBQU0rQixPQUFPUixlQUFlLEdBQUc7SUFFL0JKLFlBQVlZO0FBQ2Q7QUFFQSxTQUFTRix3QkFBd0JvQixrQkFBa0I7SUFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MsMkJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBR0EseUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUEyQjs7SUFDOUVsRDtJQUVBLElBQU1tRCxrQkFBa0JGLG9CQUNsQkcsdUJBQXVCRiwwQkFBMkIsR0FBRztJQUUzRGhDLG1CQUFBQSxLQUFBQSxHQUFBQTtRQUFhaUM7S0FBeUMsQ0FBdERqQyxPQUE4QixxQkFBR2tDO0FBQ25DIn0=