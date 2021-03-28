"use strict";
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
import { pathUtilities, fileSystemUtilities, asynchronousUtilities } from "necessary";
import Project from "./project";
import { isNameHiddenName } from "./utilities/name";
var forEach = asynchronousUtilities.forEach, concatenatePaths = pathUtilities.concatenatePaths, isEntryDirectory = fileSystemUtilities.isEntryDirectory, readDirectory = fileSystemUtilities.readDirectory;
var Projects = function() {
    function Projects(array) {
        _classCallCheck(this, Projects);
        this.array = array;
    }
    _createClass(Projects, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "addProject",
            value: function addProject(project) {
                this.array.push(project);
            }
        },
        {
            key: "mapProject",
            value: function mapProject(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "reduceProject",
            value: function reduceProject(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachProject",
            value: function forEachProject(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "asynchronousForEachProject",
            value: function asynchronousForEachProject(callback, done) {
                forEach(this.array, callback, done);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = this.array.map(function(project) {
                    var projectJSON = project.toJSON();
                    return projectJSON;
                });
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var array = json.map(function(json1) {
                    var project = Project.fromJSON(json1);
                    return project;
                }), projects = new Projects(array);
                return projects;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], projects = new Projects(array);
                return projects;
            }
        },
        {
            key: "fromProjectsDirectoryPath",
            value: function fromProjectsDirectoryPath(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
                var projects;
                try {
                    var array = [];
                    projects = new Projects(array);
                    var topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);
                    topmostDirectoryNames.forEach(function(topmostDirectoryName) {
                        var project = Project.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
                        projects.addProject(project);
                    });
                } catch (error) {
                    projects = null;
                }
                return projects;
            }
        }
    ]);
    return Projects;
}();
export { Projects as default };
function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
    var topmostDirectoryNames;
    var subEntryNames = readDirectory(projectsDirectoryPath);
    topmostDirectoryNames = subEntryNames.reduce(function(topmostDirectoryNames1, subEntryName) {
        var absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName), subEntryNameHiddenName = isNameHiddenName(subEntryName), subEntryNameNotHiddenName = !subEntryNameHiddenName, loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;
        if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
            var subEntryDirectory = isEntryDirectory(absoluteSubEntryPath);
            if (subEntryDirectory) {
                var topmostDirectoryName = subEntryName; ///
                topmostDirectoryNames1.push(topmostDirectoryName);
            }
        }
        return topmostDirectoryNames1;
    }, []);
    return topmostDirectoryNames;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmltcG9ydCB7IGlzTmFtZUhpZGRlbk5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeURpcmVjdG9yeSwgcmVhZERpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBtYXBQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZVByb2plY3QoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hQcm9qZWN0KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hQcm9qZWN0KGNhbGxiYWNrLCBkb25lKSB7XG4gICAgZm9yRWFjaCh0aGlzLmFycmF5LCBjYWxsYmFjaywgZG9uZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXJyYXkubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SlNPTiA9IHByb2plY3QudG9KU09OKCk7XG5cbiAgICAgIHJldHVybiBwcm9qZWN0SlNPTjtcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IGpzb24ubWFwKChqc29uKSA9PiB7ICAvLy9cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LmZyb21KU09OKGpzb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgbGV0IHByb2plY3RzO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gdG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMuZm9yRWFjaCgodG9wbW9zdERpcmVjdG9yeU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKTtcblxuICAgICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHByb2plY3RzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lcztcblxuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lcyA9IHN1YkVudHJ5TmFtZXMucmVkdWNlKCh0b3Btb3N0RGlyZWN0b3J5TmFtZXMsIHN1YkVudHJ5TmFtZSkgPT4ge1xuICAgIGNvbnN0IGFic29sdXRlU3ViRW50cnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXG4gICAgICAgICAgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXG4gICAgICAgICAgbG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcztcblxuICAgIGlmIChzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIHx8IGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgICBjb25zdCBzdWJFbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVTdWJFbnRyeVBhdGgpO1xuXG4gICAgICBpZiAoc3ViRW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzdWJFbnRyeU5hbWU7ICAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMucHVzaCh0b3Btb3N0RGlyZWN0b3J5TmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVILGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsU0FBUSxTQUFXO09BRTlFLE9BQU8sT0FBTSxTQUFXO1NBRXRCLGdCQUFnQixTQUFRLGdCQUFrQjtJQUUzQyxPQUFPLEdBQUsscUJBQXFCLENBQWpDLE9BQU8sRUFDUCxnQkFBZ0IsR0FBSyxhQUFhLENBQWxDLGdCQUFnQixFQUNoQixnQkFBZ0IsR0FBb0IsbUJBQW1CLENBQXZELGdCQUFnQixFQUFFLGFBQWEsR0FBSyxtQkFBbUIsQ0FBckMsYUFBYTtJQUVsQixRQUFRO2FBQVIsUUFBUSxDQUNmLEtBQUs7OEJBREUsUUFBUTthQUVwQixL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