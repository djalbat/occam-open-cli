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
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./mixins/bnf"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("./mixins/files"));
var _dependencies = /*#__PURE__*/ _interopRequireDefault(require("./dependencies"));
var _entries1 = /*#__PURE__*/ _interopRequireDefault(require("./mixins/entries"));
var _pattern = /*#__PURE__*/ _interopRequireDefault(require("./mixins/pattern"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNZXRhSlNPTkxleGVyLCBNZXRhSlNPTlBhcnNlciB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBEZXBlbmRlbmNpZXMgZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuaW1wb3J0IHBhdHRlcm5NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3BhdHRlcm5cIjtcblxuaW1wb3J0IHsgbWV0YUpTT05GSWxlRnJvbUZpbGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVzXCI7XG5pbXBvcnQgeyByZXBvc2l0b3J5RnJvbU5vZGUsIGRlcGVuZGVuY2llc0Zyb21Ob2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL21ldGFKU09OXCI7XG5cbmNvbnN0IG1ldGFKU09OTGV4ZXIgPSBNZXRhSlNPTkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtZXRhSlNPTlBhcnNlciA9IE1ldGFKU09OUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gcmVwb3NpdG9yeTtcbiAgICB0aGlzLmRlcGVuZGVuZGllcyA9IGRlcGVuZGVuY2llcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldFJlcG9zaXRvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwb3NpdG9yeTtcbiAgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHtcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmRpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTiA9IHRoaXMuZGVwZW5kZW5kaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgcmVwb3NpdG9yeSA9IHRoaXMucmVwb3NpdG9yeSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICAgICAgcmVwb3NpdG9yeSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHsgZW50cmllcywgZGVwZW5kZW5jaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lLCByZXBvc2l0b3J5IH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllcywgIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSBkZXBlbmRlbmNpZXM7IC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGpzb24gPSBkZXBlbmRlbmNpZXNKU09OOyAvLy9cblxuICAgIGRlcGVuZGVuY2llcyA9IERlcGVuZGVuY2llcy5mcm9tSlNPTihqc29uKTtcblxuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcmVwb3NpdG9yeSA9IG51bGwsICAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBEZXBlbmRlbmNpZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcywgcmVwb3NpdG9yeSwgZGVwZW5kZW5jaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSB7XG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IHJlcG9zaXRvcnlGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcywgcmVwb3NpdG9yeSwgZGVwZW5kZW5jaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIGJuZk1peGlucyk7XG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBmaWxlc01peGlucyk7XG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBlbnRyaWVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIHBhdHRlcm5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuXG5mdW5jdGlvbiByZXBvc2l0b3J5RnJvbUVudHJpZXMoZW50cmllcykge1xuICBsZXQgcmVwb3NpdG9yeSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YUpTT05GaWxlTm9kZSA9IG1ldGFKU09ORmlsZU5vZGVGcm9tRW50cmllcyhlbnRyaWVzKVxuXG4gIGlmIChtZXRhSlNPTkZpbGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGFKU09ORmlsZU5vZGU7Ly8vXG5cbiAgICByZXBvc2l0b3J5ID0gcmVwb3NpdG9yeUZyb21Ob2RlKG5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHJlcG9zaXRvcnk7XG59XG5cbmZ1bmN0aW9uIGRlcGVuZGVuY2llc0Zyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgbGV0IGRlcGVuZGVuY2llcyA9IFtdO1xuXG4gIGNvbnN0IG1ldGFKU09ORmlsZU5vZGUgPSBtZXRhSlNPTkZpbGVOb2RlRnJvbUVudHJpZXMoZW50cmllcylcblxuICBpZiAobWV0YUpTT05GaWxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhSlNPTkZpbGVOb2RlOy8vL1xuXG4gICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzRnJvbU5vZGUobm9kZSk7XG4gIH1cblxuICByZXR1cm4gZGVwZW5kZW5jaWVzO1xufVxuXG5mdW5jdGlvbiBtZXRhSlNPTkZpbGVOb2RlRnJvbUVudHJpZXMoZW50cmllcykge1xuICBsZXQgbWV0YUpTT05GaWxlTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgZmlsZXMgPSBlbnRyaWVzLmdldEZpbGVzKCksXG4gICAgICAgIG1ldGFKU09ORmlsZSA9IG1ldGFKU09ORklsZUZyb21GaWxlcyhmaWxlcyk7XG5cbiAgaWYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBtZXRhSlNPTkZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0b2tlbnMgPSBtZXRhSlNPTkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gbWV0YUpTT05QYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIG1ldGFKU09ORmlsZU5vZGUgPSBub2RlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWV0YUpTT05GaWxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJtZXRhSlNPTkxleGVyIiwiTWV0YUpTT05MZXhlciIsImZyb21Ob3RoaW5nIiwibWV0YUpTT05QYXJzZXIiLCJNZXRhSlNPTlBhcnNlciIsIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsInJlcG9zaXRvcnkiLCJkZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmRpZXMiLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImdldFJlcG9zaXRvcnkiLCJnZXREZXBlbmRlbmNpZXMiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwiRGVwZW5kZW5jaWVzIiwicmVsZWFzZSIsIlJlbGVhc2UiLCJmcm9tTmFtZSIsInByb2plY3QiLCJmcm9tTmFtZUFuZEVudHJpZXMiLCJyZXBvc2l0b3J5RnJvbUVudHJpZXMiLCJkZXBlbmRlbmNpZXNGcm9tRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGlucyIsImZpbGVzTWl4aW5zIiwiZW50cmllc01peGlucyIsInBhdHRlcm5NaXhpbnMiLCJtZXRhSlNPTkZpbGVOb2RlIiwibWV0YUpTT05GaWxlTm9kZUZyb21FbnRyaWVzIiwibm9kZSIsInJlcG9zaXRvcnlGcm9tTm9kZSIsImRlcGVuZGVuY2llc0Zyb21Ob2RlIiwiZmlsZXMiLCJnZXRGaWxlcyIsIm1ldGFKU09ORmlsZSIsIm1ldGFKU09ORklsZUZyb21GaWxlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJwYXJzZSJdLCJtYXBwaW5n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