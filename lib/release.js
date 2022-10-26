"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./entries"));
var _version = /*#__PURE__*/ _interopRequireDefault(require("./version"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./mixins/bnf"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("./mixins/files"));
var _dependencies = /*#__PURE__*/ _interopRequireDefault(require("./dependencies"));
var _entries1 = /*#__PURE__*/ _interopRequireDefault(require("./mixins/entries"));
var _pattern = /*#__PURE__*/ _interopRequireDefault(require("./mixins/pattern"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Release = /*#__PURE__*/ function() {
    function Release(name, entries, version, repository, dependencies) {
        _classCallCheck(this, Release);
        this.name = name;
        this.entries = entries;
        this.version = version;
        this.repository = repository;
        this.dependendies = dependencies;
    }
    _createClass(Release, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return this.entries;
            }
        },
        {
            key: "getVersion",
            value: function getVersion() {
                return this.version;
            }
        },
        {
            key: "getRepository",
            value: function getRepository() {
                return this.repository;
            }
        },
        {
            key: "getDependencies",
            value: function getDependencies() {
                return this.dependendies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var entriesJSON = this.entries.toJSON(), versionJSON = this.version.toJSON(), dependenciesJSON = this.dependendies.toJSON(), name = this.name, entries = entriesJSON, version = versionJSON, repository = this.repository, dependencies = dependenciesJSON, json = {
                    name: name,
                    entries: entries,
                    version: version,
                    repository: repository,
                    dependencies: dependencies
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var entries = json.entries, version = json.version, dependencies = json.dependencies;
                var name = json.name, repository = json.repository, entriesJSON = entries, versionJSOM = version, dependenciesJSON = dependencies; ///
                json = entriesJSON; ///
                entries = _entries.default.fromJSON(json); ///
                json = versionJSOM; ///
                version = _version.default.fromJSON(json);
                json = dependenciesJSON; ///
                dependencies = _dependencies.default.fromJSON(json);
                var release = new Release(name, entries, version, repository, dependencies);
                return release;
            }
        },
        {
            key: "fromNameEntriesAndVersion",
            value: function fromNameEntriesAndVersion(name, entries, version) {
                var repository = repository, dependencies = _dependencies.default.fromNothing(), release = new Release(name, entries, version, repository, dependencies);
                return release;
            }
        }
    ]);
    return Release;
}();
Objecct.assign(Release.prototype, _bnf.default);
Objecct.assign(Release.prototype, _files.default);
Objecct.assign(Release.prototype, _entries1.default);
Objecct.assign(Release.prototype, _pattern.default);
var _default = Release;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgVmVyc2lvbiBmcm9tIFwiLi92ZXJzaW9uXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBEZXBlbmRlbmNpZXMgZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuaW1wb3J0IHBhdHRlcm5NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3BhdHRlcm5cIjtcblxuY2xhc3MgUmVsZWFzZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMsIHZlcnNpb24sIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMucmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XG4gICAgdGhpcy5kZXBlbmRlbmRpZXMgPSBkZXBlbmRlbmNpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb247XG4gIH1cblxuICBnZXRSZXBvc2l0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcnk7XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5kaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIHZlcnNpb25KU09OID0gdGhpcy52ZXJzaW9uLnRvSlNPTigpLFxuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSB0aGlzLmRlcGVuZGVuZGllcy50b0pTT04oKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHJlcG9zaXRvcnkgPSB0aGlzLnJlcG9zaXRvcnksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW50cmllcyxcbiAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICByZXBvc2l0b3J5LFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzLCB2ZXJzaW9uLCBkZXBlbmRlbmNpZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB7IG5hbWUsIHJlcG9zaXRvcnkgfSA9IGpzb24sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBlbnRyaWVzLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbkpTT00gPSB2ZXJzaW9uLCAgLy8vXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTiA9IGRlcGVuZGVuY2llczsgLy8vXG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7IC8vL1xuXG4gICAganNvbiA9IHZlcnNpb25KU09NOyAvLy9cblxuICAgIHZlcnNpb24gPSBWZXJzaW9uLmZyb21KU09OKGpzb24pO1xuXG4gICAganNvbiA9IGRlcGVuZGVuY2llc0pTT047IC8vL1xuXG4gICAgZGVwZW5kZW5jaWVzID0gRGVwZW5kZW5jaWVzLmZyb21KU09OKGpzb24pO1xuXG4gICAgY29uc3QgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb24sIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUVudHJpZXNBbmRWZXJzaW9uKG5hbWUsIGVudHJpZXMsIHZlcnNpb24pIHtcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gcmVwb3NpdG9yeSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBEZXBlbmRlbmNpZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbiwgcmVwb3NpdG9yeSwgZGVwZW5kZW5jaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbk9iamVjY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBibmZNaXhpbnMpO1xuT2JqZWNjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGZpbGVzTWl4aW5zKTtcbk9iamVjY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBlbnRyaWVzTWl4aW5zKTtcbk9iamVjY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBwYXR0ZXJuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsZWFzZTtcbiJdLCJuYW1lcyI6WyJSZWxlYXNlIiwibmFtZSIsImVudHJpZXMiLCJ2ZXJzaW9uIiwicmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImRlcGVuZGVuZGllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0VmVyc2lvbiIsImdldFJlcG9zaXRvcnkiLCJnZXREZXBlbmRlbmNpZXMiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsInZlcnNpb25KU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInZlcnNpb25KU09NIiwiRW50cmllcyIsIlZlcnNpb24iLCJEZXBlbmRlbmNpZXMiLCJyZWxlYXNlIiwiZnJvbU5hbWVFbnRyaWVzQW5kVmVyc2lvbiIsImZyb21Ob3RoaW5nIiwiT2JqZWNjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGlucyIsImZpbGVzTWl4aW5zIiwiZW50cmllc01peGlucyIsInBhdHRlcm5NaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtHQTs7O2VBQUE7Ozs0REFoR29COzREQUNBO3dEQUNFOzBEQUNFO2lFQUNDOzZEQUNDOzREQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsd0JBbUZILEFBbkZIO2FBQU1BLFFBQ1FDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsWUFBWTs4QkFEeERMO1FBRUYsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0UsWUFBWSxHQUFHRDs7aUJBTmxCTDs7WUFTSk8sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNOLElBQUk7WUFDbEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ04sT0FBTztZQUNyQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDTixPQUFPO1lBQ3JCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxPQUFPLElBQUksQ0FBQ04sVUFBVTtZQUN4Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDTCxZQUFZO1lBQzFCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTUMsY0FBYyxJQUFJLENBQUNYLE9BQU8sQ0FBQ1UsTUFBTSxJQUNqQ0UsY0FBYyxJQUFJLENBQUNYLE9BQU8sQ0FBQ1MsTUFBTSxJQUNqQ0csbUJBQW1CLElBQUksQ0FBQ1QsWUFBWSxDQUFDTSxNQUFNLElBQzNDWCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsVUFBVVcsYUFDVlYsVUFBVVcsYUFDVlYsYUFBYSxJQUFJLENBQUNBLFVBQVUsRUFDNUJDLGVBQWVVLGtCQUNmQyxPQUFPO29CQUNMZixNQUFBQTtvQkFDQUMsU0FBQUE7b0JBQ0FDLFNBQUFBO29CQUNBQyxZQUFBQTtvQkFDQUMsY0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT1c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUU7Z0JBQ3BCLElBQU1kLFVBQW1DYyxLQUFuQ2QsU0FBU0MsVUFBMEJhLEtBQTFCYixTQUFTRSxlQUFpQlcsS0FBakJYO2dCQUV4QixJQUFRSixPQUFxQmUsS0FBckJmLE1BQU1HLGFBQWVZLEtBQWZaLFlBQ1JTLGNBQWNYLFNBQ2RnQixjQUFjZixTQUNkWSxtQkFBbUJWLGNBQWMsR0FBRztnQkFFMUNXLE9BQU9ILGFBQWEsR0FBRztnQkFFdkJYLFVBQVVpQixnQkFBTyxDQUFDRixRQUFRLENBQUNELE9BQU8sR0FBRztnQkFFckNBLE9BQU9FLGFBQWEsR0FBRztnQkFFdkJmLFVBQVVpQixnQkFBTyxDQUFDSCxRQUFRLENBQUNEO2dCQUUzQkEsT0FBT0Qsa0JBQWtCLEdBQUc7Z0JBRTVCVixlQUFlZ0IscUJBQVksQ0FBQ0osUUFBUSxDQUFDRDtnQkFFckMsSUFBTU0sVUFBVSxJQXJFZHRCLFFBcUUwQkMsTUFBTUMsU0FBU0MsU0FBU0MsWUFBWUM7Z0JBRWhFLE9BQU9pQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCdEIsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtnQkFDdkQsSUFBTUMsYUFBYUEsWUFDYkMsZUFBZWdCLHFCQUFZLENBQUNHLFdBQVcsSUFDdkNGLFVBQVUsSUE3RWR0QixRQTZFMEJDLE1BQU1DLFNBQVNDLFNBQVNDLFlBQVlDO2dCQUVoRSxPQUFPaUI7WUFDVDs7O1dBaEZJdEI7O0FBbUZOeUIsUUFBUUMsTUFBTSxDQUFDMUIsUUFBUTJCLFNBQVMsRUFBRUMsWUFBUztBQUMzQ0gsUUFBUUMsTUFBTSxDQUFDMUIsUUFBUTJCLFNBQVMsRUFBRUUsY0FBVztBQUM3Q0osUUFBUUMsTUFBTSxDQUFDMUIsUUFBUTJCLFNBQVMsRUFBRUcsaUJBQWE7QUFDL0NMLFFBQVFDLE1BQU0sQ0FBQzFCLFFBQVEyQixTQUFTLEVBQUVJLGdCQUFhO0lBRS9DLFdBQWUvQiJ9