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
var _occamGrammars = require("occam-grammars");
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./entries"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./mixin/bnf"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("./mixin/files"));
var _dependencies = /*#__PURE__*/ _interopRequireDefault(require("./dependencies"));
var _entries1 = /*#__PURE__*/ _interopRequireDefault(require("./mixin/entries"));
var _pattern = /*#__PURE__*/ _interopRequireDefault(require("./mixin/pattern"));
var _files1 = require("./utilities/files");
var _metaJSON = require("./utilities/metaJSON");
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
var metaJSONLexer = _occamGrammars.MetaJSONLexer.fromNothing(), metaJSONParser = _occamGrammars.MetaJSONParser.fromNothing();
var Project = /*#__PURE__*/ function() {
    function Project(name, entries, repository, dependencies) {
        _classCallCheck(this, Project);
        this.name = name;
        this.entries = entries;
        this.repository = repository;
        this.dependendies = dependencies;
    }
    _createClass(Project, [
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
                var entriesJSON = this.entries.toJSON(), dependenciesJSON = this.dependendies.toJSON(), name = this.name, entries = entriesJSON, repository = this.repository, dependencies = dependenciesJSON, json = {
                    name: name,
                    entries: entries,
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
                var entries = json.entries, dependencies = json.dependencies;
                var name = json.name, repository = json.repository, entriesJSON = entries, dependenciesJSON = dependencies; ///
                json = entriesJSON; ///
                entries = _entries.default.fromJSON(json); ///
                json = dependenciesJSON; ///
                dependencies = _dependencies.default.fromJSON(json);
                var release = new Release(name, entries, repository, dependencies);
                return release;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var entries = _entries.default.fromNothing(), repository = null, dependencies = _dependencies.default.fromNothing(), project = new Project(name, entries, repository, dependencies);
                return project;
            }
        },
        {
            key: "fromNameAndEntries",
            value: function fromNameAndEntries(name, entries) {
                var repository = repositoryFromEntries(entries), dependencies = dependenciesFromEntries(entries), project = new Project(name, entries, repository, dependencies);
                return project;
            }
        }
    ]);
    return Project;
}();
Object.assign(Project.prototype, _bnf.default);
Object.assign(Project.prototype, _files.default);
Object.assign(Project.prototype, _entries1.default);
Object.assign(Project.prototype, _pattern.default);
var _default = Project;
function repositoryFromEntries(entries) {
    var repository = null;
    var metaJSONFileNode = metaJSONFileNodeFromEntries(entries);
    if (metaJSONFileNode !== null) {
        var node = metaJSONFileNode; ///
        repository = (0, _metaJSON.repositoryFromNode)(node);
    }
    return repository;
}
function dependenciesFromEntries(entries) {
    var dependencies = [];
    var metaJSONFileNode = metaJSONFileNodeFromEntries(entries);
    if (metaJSONFileNode !== null) {
        var node = metaJSONFileNode; ///
        dependencies = (0, _metaJSON.dependenciesFromNode)(node);
    }
    return dependencies;
}
function metaJSONFileNodeFromEntries(entries) {
    var metaJSONFileNode = null;
    var files = entries.getFiles(), metaJSONFile = (0, _files1.metaJSONFIleFromFiles)(files);
    if (metaJSONFile !== null) {
        var content = metaJSONFile.getContent(), tokens = metaJSONLexer.tokenise(content), node = metaJSONParser.parse(tokens);
        metaJSONFileNode = node; ///
    }
    return metaJSONFileNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNZXRhSlNPTkxleGVyLCBNZXRhSlNPTlBhcnNlciB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgYm5mTWl4aW4gZnJvbSBcIi4vbWl4aW4vYm5mXCI7XG5pbXBvcnQgZmlsZXNNaXhpbiBmcm9tIFwiLi9taXhpbi9maWxlc1wiO1xuaW1wb3J0IERlcGVuZGVuY2llcyBmcm9tIFwiLi9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCBlbnRyaWVzTWl4aW4gZnJvbSBcIi4vbWl4aW4vZW50cmllc1wiO1xuaW1wb3J0IHBhdHRlcm5NaXhpbiBmcm9tIFwiLi9taXhpbi9wYXR0ZXJuXCI7XG5cbmltcG9ydCB7IG1ldGFKU09ORklsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuaW1wb3J0IHsgcmVwb3NpdG9yeUZyb21Ob2RlLCBkZXBlbmRlbmNpZXNGcm9tTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9tZXRhSlNPTlwiO1xuXG5jb25zdCBtZXRhSlNPTkxleGVyID0gTWV0YUpTT05MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWV0YUpTT05QYXJzZXIgPSBNZXRhSlNPTlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcywgcmVwb3NpdG9yeSwgZGVwZW5kZW5jaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMucmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XG4gICAgdGhpcy5kZXBlbmRlbmRpZXMgPSBkZXBlbmRlbmNpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRSZXBvc2l0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcnk7XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5kaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSB0aGlzLmRlcGVuZGVuZGllcy50b0pTT04oKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHJlcG9zaXRvcnkgPSB0aGlzLnJlcG9zaXRvcnksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW50cmllcyxcbiAgICAgICAgICAgIHJlcG9zaXRvcnksXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCB7IGVudHJpZXMsIGRlcGVuZGVuY2llcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHsgbmFtZSwgcmVwb3NpdG9yeSB9ID0ganNvbixcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGVudHJpZXMsICAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gZGVwZW5kZW5jaWVzOyAvLy9cblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKTsgLy8vXG5cbiAgICBqc29uID0gZGVwZW5kZW5jaWVzSlNPTjsgLy8vXG5cbiAgICBkZXBlbmRlbmNpZXMgPSBEZXBlbmRlbmNpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgICBjb25zdCByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgcmVwb3NpdG9yeSwgZGVwZW5kZW5jaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJlcG9zaXRvcnkgPSBudWxsLCAgLy8vXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gRGVwZW5kZW5jaWVzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMsIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcykge1xuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSByZXBvc2l0b3J5RnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzRnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMsIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBibmZNaXhpbik7XG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBmaWxlc01peGluKTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIGVudHJpZXNNaXhpbik7XG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBwYXR0ZXJuTWl4aW4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuXG5mdW5jdGlvbiByZXBvc2l0b3J5RnJvbUVudHJpZXMoZW50cmllcykge1xuICBsZXQgcmVwb3NpdG9yeSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YUpTT05GaWxlTm9kZSA9IG1ldGFKU09ORmlsZU5vZGVGcm9tRW50cmllcyhlbnRyaWVzKVxuXG4gIGlmIChtZXRhSlNPTkZpbGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGFKU09ORmlsZU5vZGU7Ly8vXG5cbiAgICByZXBvc2l0b3J5ID0gcmVwb3NpdG9yeUZyb21Ob2RlKG5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHJlcG9zaXRvcnk7XG59XG5cbmZ1bmN0aW9uIGRlcGVuZGVuY2llc0Zyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgbGV0IGRlcGVuZGVuY2llcyA9IFtdO1xuXG4gIGNvbnN0IG1ldGFKU09ORmlsZU5vZGUgPSBtZXRhSlNPTkZpbGVOb2RlRnJvbUVudHJpZXMoZW50cmllcylcblxuICBpZiAobWV0YUpTT05GaWxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhSlNPTkZpbGVOb2RlOy8vL1xuXG4gICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzRnJvbU5vZGUobm9kZSk7XG4gIH1cblxuICByZXR1cm4gZGVwZW5kZW5jaWVzO1xufVxuXG5mdW5jdGlvbiBtZXRhSlNPTkZpbGVOb2RlRnJvbUVudHJpZXMoZW50cmllcykge1xuICBsZXQgbWV0YUpTT05GaWxlTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgZmlsZXMgPSBlbnRyaWVzLmdldEZpbGVzKCksXG4gICAgICAgIG1ldGFKU09ORmlsZSA9IG1ldGFKU09ORklsZUZyb21GaWxlcyhmaWxlcyk7XG5cbiAgaWYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBtZXRhSlNPTkZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0b2tlbnMgPSBtZXRhSlNPTkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gbWV0YUpTT05QYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIG1ldGFKU09ORmlsZU5vZGUgPSBub2RlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWV0YUpTT05GaWxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJtZXRhSlNPTkxleGVyIiwiTWV0YUpTT05MZXhlciIsImZyb21Ob3RoaW5nIiwibWV0YUpTT05QYXJzZXIiLCJNZXRhSlNPTlBhcnNlciIsIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsInJlcG9zaXRvcnkiLCJkZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmRpZXMiLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImdldFJlcG9zaXRvcnkiLCJnZXREZXBlbmRlbmNpZXMiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwiRGVwZW5kZW5jaWVzIiwicmVsZWFzZSIsIlJlbGVhc2UiLCJmcm9tTmFtZSIsInByb2plY3QiLCJmcm9tTmFtZUFuZEVudHJpZXMiLCJyZXBvc2l0b3J5RnJvbUVudHJpZXMiLCJkZXBlbmRlbmNpZXNGcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGluIiwiZmlsZXNNaXhpbiIsImVudHJpZXNNaXhpbiIsInBhdHRlcm5NaXhpbiIsIm1ldGFKU09ORmlsZU5vZGUiLCJtZXRhSlNPTkZpbGVOb2RlRnJvbUVudHJpZXMiLCJub2RlIiwicmVwb3NpdG9yeUZyb21Ob2RlIiwiZGVwZW5kZW5jaWVzRnJvbU5vZGUiLCJmaWxlcyIsImdldEZpbGVzIiwibWV0YUpTT05GaWxlIiwibWV0YUpTT05GSWxlRnJvbUZpbGVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFx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