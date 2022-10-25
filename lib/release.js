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
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./mixin/bnf"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("./mixin/files"));
var _dependencies = /*#__PURE__*/ _interopRequireDefault(require("./dependencies"));
var _entries1 = /*#__PURE__*/ _interopRequireDefault(require("./mixin/entries"));
var _pattern = /*#__PURE__*/ _interopRequireDefault(require("./mixin/pattern"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgVmVyc2lvbiBmcm9tIFwiLi92ZXJzaW9uXCI7XG5pbXBvcnQgYm5mTWl4aW4gZnJvbSBcIi4vbWl4aW4vYm5mXCI7XG5pbXBvcnQgZmlsZXNNaXhpbiBmcm9tIFwiLi9taXhpbi9maWxlc1wiO1xuaW1wb3J0IERlcGVuZGVuY2llcyBmcm9tIFwiLi9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCBlbnRyaWVzTWl4aW4gZnJvbSBcIi4vbWl4aW4vZW50cmllc1wiO1xuaW1wb3J0IHBhdHRlcm5NaXhpbiBmcm9tIFwiLi9taXhpbi9wYXR0ZXJuXCI7XG5cbmNsYXNzIFJlbGVhc2Uge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICB0aGlzLnJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xuICAgIHRoaXMuZGVwZW5kZW5kaWVzID0gZGVwZW5kZW5jaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uO1xuICB9XG5cbiAgZ2V0UmVwb3NpdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBvc2l0b3J5O1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuZGllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICB2ZXJzaW9uSlNPTiA9IHRoaXMudmVyc2lvbi50b0pTT04oKSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gdGhpcy5kZXBlbmRlbmRpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbkpTT04sICAvLy9cbiAgICAgICAgICByZXBvc2l0b3J5ID0gdGhpcy5yZXBvc2l0b3J5LFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgICAgcmVwb3NpdG9yeSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHsgZW50cmllcywgdmVyc2lvbiwgZGVwZW5kZW5jaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lLCByZXBvc2l0b3J5IH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllcywgIC8vL1xuICAgICAgICAgIHZlcnNpb25KU09NID0gdmVyc2lvbiwgIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSBkZXBlbmRlbmNpZXM7IC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGpzb24gPSB2ZXJzaW9uSlNPTTsgLy8vXG5cbiAgICB2ZXJzaW9uID0gVmVyc2lvbi5mcm9tSlNPTihqc29uKTtcblxuICAgIGpzb24gPSBkZXBlbmRlbmNpZXNKU09OOyAvLy9cblxuICAgIGRlcGVuZGVuY2llcyA9IERlcGVuZGVuY2llcy5mcm9tSlNPTihqc29uKTtcblxuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVFbnRyaWVzQW5kVmVyc2lvbihuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uKSB7XG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IHJlcG9zaXRvcnksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gRGVwZW5kZW5jaWVzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMsIHZlcnNpb24sIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxufVxuXG5PYmplY2N0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgYm5mTWl4aW4pO1xuT2JqZWNjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGZpbGVzTWl4aW4pO1xuT2JqZWNjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGVudHJpZXNNaXhpbik7XG5PYmplY2N0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgcGF0dGVybk1peGluKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsZWFzZTtcbiJdLCJuYW1lcyI6WyJSZWxlYXNlIiwibmFtZSIsImVudHJpZXMiLCJ2ZXJzaW9uIiwicmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImRlcGVuZGVuZGllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0VmVyc2lvbiIsImdldFJlcG9zaXRvcnkiLCJnZXREZXBlbmRlbmNpZXMiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsInZlcnNpb25KU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInZlcnNpb25KU09NIiwiRW50cmllcyIsIlZlcnNpb24iLCJEZXBlbmRlbmNpZXMiLCJyZWxlYXNlIiwiZnJvbU5hbWVFbnRyaWVzQW5kVmVyc2lvbiIsImZyb21Ob3RoaW5nIiwiT2JqZWNjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGluIiwiZmlsZXNNaXhpbiIsImVudHJpZXNNaXhpbiIsInBhdHRlcm5NaXhpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0dBOzs7ZUFBQTs7OzREQWhHb0I7NERBQ0E7d0RBQ0M7MERBQ0U7aUVBQ0U7NkRBQ0E7NERBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxBQUFNQSx3QkFtRkgsQUFuRkg7YUFBTUEsUUFDUUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxZQUFZOzhCQUR4REw7UUFFRixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDRSxZQUFZLEdBQUdEOztpQkFObEJMOztZQVNKTyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ04sSUFBSTtZQUNsQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDTixPQUFPO1lBQ3JCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsT0FBTyxJQUFJLENBQUNOLE9BQU87WUFDckI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLE9BQU8sSUFBSSxDQUFDTixVQUFVO1lBQ3hCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNMLFlBQVk7WUFDMUI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxjQUFjLElBQUksQ0FBQ1gsT0FBTyxDQUFDVSxNQUFNLElBQ2pDRSxjQUFjLElBQUksQ0FBQ1gsT0FBTyxDQUFDUyxNQUFNLElBQ2pDRyxtQkFBbUIsSUFBSSxDQUFDVCxZQUFZLENBQUNNLE1BQU0sSUFDM0NYLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVVyxhQUNWVixVQUFVVyxhQUNWVixhQUFhLElBQUksQ0FBQ0EsVUFBVSxFQUM1QkMsZUFBZVUsa0JBQ2ZDLE9BQU87b0JBQ0xmLE1BQUFBO29CQUNBQyxTQUFBQTtvQkFDQUMsU0FBQUE7b0JBQ0FDLFlBQUFBO29CQUNBQyxjQUFBQTtnQkFDRjtnQkFFTixPQUFPVztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRTtnQkFDcEIsSUFBTWQsVUFBbUNjLEtBQW5DZCxTQUFTQyxVQUEwQmEsS0FBMUJiLFNBQVNFLGVBQWlCVyxLQUFqQlg7Z0JBRXhCLElBQVFKLE9BQXFCZSxLQUFyQmYsTUFBTUcsYUFBZVksS0FBZlosWUFDUlMsY0FBY1gsU0FDZGdCLGNBQWNmLFNBQ2RZLG1CQUFtQlYsY0FBYyxHQUFHO2dCQUUxQ1csT0FBT0gsYUFBYSxHQUFHO2dCQUV2QlgsVUFBVWlCLGdCQUFPLENBQUNGLFFBQVEsQ0FBQ0QsT0FBTyxHQUFHO2dCQUVyQ0EsT0FBT0UsYUFBYSxHQUFHO2dCQUV2QmYsVUFBVWlCLGdCQUFPLENBQUNILFFBQVEsQ0FBQ0Q7Z0JBRTNCQSxPQUFPRCxrQkFBa0IsR0FBRztnQkFFNUJWLGVBQWVnQixxQkFBWSxDQUFDSixRQUFRLENBQUNEO2dCQUVyQyxJQUFNTSxVQUFVLElBckVkdEIsUUFxRTBCQyxNQUFNQyxTQUFTQyxTQUFTQyxZQUFZQztnQkFFaEUsT0FBT2lCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJ0QixJQUFJLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO2dCQUN2RCxJQUFNQyxhQUFhQSxZQUNiQyxlQUFlZ0IscUJBQVksQ0FBQ0csV0FBVyxJQUN2Q0YsVUFBVSxJQTdFZHRCLFFBNkUwQkMsTUFBTUMsU0FBU0MsU0FBU0MsWUFBWUM7Z0JBRWhFLE9BQU9pQjtZQUNUOzs7V0FoRkl0Qjs7QUFtRk55QixRQUFRQyxNQUFNLENBQUMxQixRQUFRMkIsU0FBUyxFQUFFQyxZQUFRO0FBQzFDSCxRQUFRQyxNQUFNLENBQUMxQixRQUFRMkIsU0FBUyxFQUFFRSxjQUFVO0FBQzVDSixRQUFRQyxNQUFNLENBQUMxQixRQUFRMkIsU0FBUyxFQUFFRyxpQkFBWTtBQUM5Q0wsUUFBUUMsTUFBTSxDQUFDMUIsUUFBUTJCLFNBQVMsRUFBRUksZ0JBQVk7SUFFOUMsV0FBZS9CIn0=