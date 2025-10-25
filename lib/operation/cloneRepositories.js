"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return cloneRepositoriesOperation;
    }
});
var _child_process = require("child_process");
var _occamentities = require("occam-entities");
var _necessary = require("necessary");
var _configuration = require("../configuration");
var _defaults = require("../defaults");
var first = _necessary.arrayUtilities.first, forEach = _necessary.asynchronousUtilities.forEach, checkEntryExists = _necessary.fileSystemUtilities.checkEntryExists;
function cloneRepositoriesOperation(proceed, abort, context) {
    var releases = context.releases, dependencies = context.dependencies;
    if (dependencies) {
        var success = true;
        Object.assign(context, {
            success: success
        });
        forEach(releases, cloneRepositoryOperation, function() {
            var success = context.success;
            delete context.success;
            success ? proceed() : abort();
        }, context);
        return;
    }
    var success1 = true;
    Object.assign(context, {
        success: success1
    });
    var firstRelease = first(releases), release = firstRelease, index = Infinity, done = null;
    cloneRepositoryOperation(release, function() {
        var success = context.success;
        delete context.success;
        success ? proceed() : abort();
    }, done, context, index);
}
function cloneRepositoryOperation(release, next, done, context, index) {
    if (index === 0) {
        var headless = context.headless;
        if (headless) {
            next();
            return;
        }
    }
    var name = release.name, quietly = context.quietly, entryPath = name, entryExists = checkEntryExists(entryPath);
    if (entryExists) {
        if (!quietly) {
            console.log("Cannot clone the '".concat(name, "' package because a file or directory with that name already exists."));
        }
        var success = false;
        Object.assign(context, {
            success: success
        });
        next();
        return;
    }
    done = next; ///
    cloneRepository(release, quietly, done);
}
function cloneRepository(release, quietly, done) {
    var repository = repositoryFromRelease(release);
    var options = (0, _configuration.retrieveOptions)(), ssh = options.ssh;
    if (ssh) {
        var gitHubHostName = ssh.gitHubHostName;
        repository = repository.replace("https://".concat(_defaults.DEFAULT_GITHUB_HOST_NAME, "/"), "git@".concat(gitHubHostName, ":"));
    }
    var command = "git clone ".concat(repository, ".git");
    (0, _child_process.exec)(command, function(error) {
        if (error) {
            console.log(error);
        }
        if (!quietly) {
            var name = release.name;
            console.log(name);
        }
        done();
    });
}
function repositoryFromRelease(release) {
    var entries = release.entries;
    var json = entries; ///
    entries = _occamentities.Entries.fromJSON(json);
    var repository = entries.getRepository();
    return repository;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY2xvbmVSZXBvc2l0b3JpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGV4ZWMgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgRW50cmllcyB9IGZyb20gXCJvY2NhbS1lbnRpdGllc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmV0cmlldmVPcHRpb25zIH0gZnJvbSBcIi4uL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IERFRkFVTFRfR0lUSFVCX0hPU1RfTkFNRSB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBjaGVja0VudHJ5RXhpc3RzIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZVJlcG9zaXRvcmllc09wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VzLCBkZXBlbmRlbmNpZXMgfSA9IGNvbnRleHRcblxuICBpZiAoZGVwZW5kZW5jaWVzKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHRydWU7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN1Y2Nlc3NcbiAgICB9KTtcblxuICAgIGZvckVhY2gocmVsZWFzZXMsIGNsb25lUmVwb3NpdG9yeU9wZXJhdGlvbiwgKCkgPT4ge1xuICAgICAgY29uc3QgeyBzdWNjZXNzIH0gPSBjb250ZXh0O1xuXG4gICAgICBkZWxldGUgY29udGV4dC5zdWNjZXNzO1xuXG4gICAgICBzdWNjZXNzID9cbiAgICAgICAgcHJvY2VlZCgpIDpcbiAgICAgICAgICBhYm9ydCgpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3VjY2VzcyA9IHRydWU7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgc3VjY2Vzc1xuICB9KTtcblxuICBjb25zdCBmaXJzdFJlbGVhc2UgPSBmaXJzdChyZWxlYXNlcyksXG4gICAgICAgIHJlbGVhc2UgPSBmaXJzdFJlbGVhc2UsIC8vL1xuICAgICAgICBpbmRleCA9IEluZmluaXR5LFxuICAgICAgICBkb25lID0gbnVsbDtcblxuICBjbG9uZVJlcG9zaXRvcnlPcGVyYXRpb24ocmVsZWFzZSwgKCkgPT4ge1xuICAgIGNvbnN0IHsgc3VjY2VzcyB9ID0gY29udGV4dDtcblxuICAgIGRlbGV0ZSBjb250ZXh0LnN1Y2Nlc3M7XG5cbiAgICBzdWNjZXNzID9cbiAgICAgIHByb2NlZWQoKSA6XG4gICAgICAgIGFib3J0KCk7XG4gIH0sIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVSZXBvc2l0b3J5T3BlcmF0aW9uKHJlbGVhc2UsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSB7XG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIGNvbnN0IHsgaGVhZGxlc3MgfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAoaGVhZGxlc3MpIHtcbiAgICAgIG5leHQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgbmFtZSB9ID0gcmVsZWFzZSxcbiAgICAgICAgeyBxdWlldGx5IH0gPSBjb250ZXh0LFxuICAgICAgICBlbnRyeVBhdGggPSBuYW1lLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgaWYgKCFxdWlldGx5KSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ2Fubm90IGNsb25lIHRoZSAnJHtuYW1lfScgcGFja2FnZSBiZWNhdXNlIGEgZmlsZSBvciBkaXJlY3Rvcnkgd2l0aCB0aGF0IG5hbWUgYWxyZWFkeSBleGlzdHMuYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBzdWNjZXNzXG4gICAgfSk7XG5cbiAgICBuZXh0KCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBkb25lID0gbmV4dDsgIC8vL1xuXG4gIGNsb25lUmVwb3NpdG9yeShyZWxlYXNlLCBxdWlldGx5LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gY2xvbmVSZXBvc2l0b3J5KHJlbGVhc2UsIHF1aWV0bHksIGRvbmUpIHtcbiAgbGV0IHJlcG9zaXRvcnkgPSByZXBvc2l0b3J5RnJvbVJlbGVhc2UocmVsZWFzZSlcblxuICBjb25zdCBvcHRpb25zID0gcmV0cmlldmVPcHRpb25zKCksXG4gICAgICAgIHsgc3NoIH0gPSBvcHRpb25zO1xuXG4gIGlmIChzc2gpIHtcbiAgICBjb25zdCB7IGdpdEh1Ykhvc3ROYW1lIH0gPSBzc2g7XG5cbiAgICByZXBvc2l0b3J5ID0gcmVwb3NpdG9yeS5yZXBsYWNlKGBodHRwczovLyR7REVGQVVMVF9HSVRIVUJfSE9TVF9OQU1FfS9gLCBgZ2l0QCR7Z2l0SHViSG9zdE5hbWV9OmApXG4gIH1cblxuICBjb25zdCBjb21tYW5kID0gYGdpdCBjbG9uZSAke3JlcG9zaXRvcnl9LmdpdGA7XG5cbiAgZXhlYyhjb21tYW5kLCAoZXJyb3IpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gcmVsZWFzZTtcblxuICAgICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgfVxuXG4gICAgZG9uZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwb3NpdG9yeUZyb21SZWxlYXNlKHJlbGVhc2UpIHtcbiAgbGV0IHsgZW50cmllcyB9ID0gcmVsZWFzZTtcblxuICBjb25zdCBqc29uID0gZW50cmllczsgLy8vXG5cbiAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgY29uc3QgcmVwb3NpdG9yeSA9IGVudHJpZXMuZ2V0UmVwb3NpdG9yeSgpO1xuXG4gIHJldHVybiByZXBvc2l0b3J5O1xufVxuIl0sIm5hbWVzIjpbImNsb25lUmVwb3NpdG9yaWVzT3BlcmF0aW9uIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJjaGVja0VudHJ5RXhpc3RzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZWxlYXNlcyIsImRlcGVuZGVuY2llcyIsInN1Y2Nlc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJjbG9uZVJlcG9zaXRvcnlPcGVyYXRpb24iLCJmaXJzdFJlbGVhc2UiLCJyZWxlYXNlIiwiaW5kZXgiLCJJbmZpbml0eSIsImRvbmUiLCJuZXh0IiwiaGVhZGxlc3MiLCJuYW1lIiwicXVpZXRseSIsImVudHJ5UGF0aCIsImVudHJ5RXhpc3RzIiwiY29uc29sZSIsImxvZyIsImNsb25lUmVwb3NpdG9yeSIsInJlcG9zaXRvcnkiLCJyZXBvc2l0b3J5RnJvbVJlbGVhc2UiLCJvcHRpb25zIiwicmV0cmlldmVPcHRpb25zIiwic3NoIiwiZ2l0SHViSG9zdE5hbWUiLCJyZXBsYWNlIiwiREVGQVVMVF9HSVRIVUJfSE9TVF9OQU1FIiwiY29tbWFuZCIsImV4ZWMiLCJlcnJvciIsImVudHJpZXMiLCJqc29uIiwiRW50cmllcyIsImZyb21KU09OIiwiZ2V0UmVwb3NpdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUF3QkE7Ozs2QkFYSDs2QkFDRzt5QkFDbUQ7NkJBRTNDO3dCQUNTO0FBRXpDLElBQU0sQUFBRUMs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