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
const _child_process = require("child_process");
const _occammodel = require("occam-model");
const _necessary = require("necessary");
const _configuration = require("../configuration");
const _defaults = require("../defaults");
const { first } = _necessary.arrayUtilities, { forEach } = _necessary.asynchronousUtilities, { checkEntryExists } = _necessary.fileSystemUtilities;
function cloneRepositoriesOperation(proceed, abort, context) {
    const { releases, dependencies } = context;
    if (dependencies) {
        const success = true;
        Object.assign(context, {
            success
        });
        forEach(releases, cloneRepositoryOperation, ()=>{
            const { success } = context;
            delete context.success;
            success ? proceed() : abort();
        }, context);
        return;
    }
    const success = true;
    Object.assign(context, {
        success
    });
    const firstRelease = first(releases), release = firstRelease, index = Infinity, done = null;
    cloneRepositoryOperation(release, ()=>{
        const { success } = context;
        delete context.success;
        success ? proceed() : abort();
    }, done, context, index);
}
function cloneRepositoryOperation(release, next, done, context, index) {
    if (index === 0) {
        const { headless } = context;
        if (headless) {
            next();
            return;
        }
    }
    const { name } = release, { quietly } = context, entryPath = name, entryExists = checkEntryExists(entryPath);
    if (entryExists) {
        if (!quietly) {
            console.log(`Cannot clone the '${name}' package because a file or directory with that name already exists.`);
        }
        const success = false;
        Object.assign(context, {
            success
        });
        next();
        return;
    }
    done = next; ///
    cloneRepository(release, quietly, done);
}
function cloneRepository(release, quietly, done) {
    let repository = repositoryFromRelease(release);
    const options = (0, _configuration.retrieveOptions)(), { ssh } = options;
    if (ssh) {
        const { gitHubHostName } = ssh;
        repository = repository.replace(`https://${_defaults.DEFAULT_GITHUB_HOST_NAME}/`, `git@${gitHubHostName}:`);
    }
    const command = `git clone ${repository}.git`;
    (0, _child_process.exec)(command, (error)=>{
        if (error) {
            console.log(error);
        }
        if (!quietly) {
            const { name } = release;
            console.log(name);
        }
        done();
    });
}
function repositoryFromRelease(release) {
    let { entries } = release;
    const json = entries; ///
    entries = _occammodel.Entries.fromJSON(json);
    const repository = entries.getRepository();
    return repository;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY2xvbmVSZXBvc2l0b3JpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGV4ZWMgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgRW50cmllcyB9IGZyb20gXCJvY2NhbS1tb2RlbFwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmV0cmlldmVPcHRpb25zIH0gZnJvbSBcIi4uL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IERFRkFVTFRfR0lUSFVCX0hPU1RfTkFNRSB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBjaGVja0VudHJ5RXhpc3RzIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZVJlcG9zaXRvcmllc09wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VzLCBkZXBlbmRlbmNpZXMgfSA9IGNvbnRleHRcblxuICBpZiAoZGVwZW5kZW5jaWVzKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHRydWU7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN1Y2Nlc3NcbiAgICB9KTtcblxuICAgIGZvckVhY2gocmVsZWFzZXMsIGNsb25lUmVwb3NpdG9yeU9wZXJhdGlvbiwgKCkgPT4ge1xuICAgICAgY29uc3QgeyBzdWNjZXNzIH0gPSBjb250ZXh0O1xuXG4gICAgICBkZWxldGUgY29udGV4dC5zdWNjZXNzO1xuXG4gICAgICBzdWNjZXNzID9cbiAgICAgICAgcHJvY2VlZCgpIDpcbiAgICAgICAgICBhYm9ydCgpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3VjY2VzcyA9IHRydWU7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgc3VjY2Vzc1xuICB9KTtcblxuICBjb25zdCBmaXJzdFJlbGVhc2UgPSBmaXJzdChyZWxlYXNlcyksXG4gICAgICAgIHJlbGVhc2UgPSBmaXJzdFJlbGVhc2UsIC8vL1xuICAgICAgICBpbmRleCA9IEluZmluaXR5LFxuICAgICAgICBkb25lID0gbnVsbDtcblxuICBjbG9uZVJlcG9zaXRvcnlPcGVyYXRpb24ocmVsZWFzZSwgKCkgPT4ge1xuICAgIGNvbnN0IHsgc3VjY2VzcyB9ID0gY29udGV4dDtcblxuICAgIGRlbGV0ZSBjb250ZXh0LnN1Y2Nlc3M7XG5cbiAgICBzdWNjZXNzID9cbiAgICAgIHByb2NlZWQoKSA6XG4gICAgICAgIGFib3J0KCk7XG4gIH0sIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVSZXBvc2l0b3J5T3BlcmF0aW9uKHJlbGVhc2UsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSB7XG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIGNvbnN0IHsgaGVhZGxlc3MgfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAoaGVhZGxlc3MpIHtcbiAgICAgIG5leHQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgbmFtZSB9ID0gcmVsZWFzZSxcbiAgICAgICAgeyBxdWlldGx5IH0gPSBjb250ZXh0LFxuICAgICAgICBlbnRyeVBhdGggPSBuYW1lLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgaWYgKCFxdWlldGx5KSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ2Fubm90IGNsb25lIHRoZSAnJHtuYW1lfScgcGFja2FnZSBiZWNhdXNlIGEgZmlsZSBvciBkaXJlY3Rvcnkgd2l0aCB0aGF0IG5hbWUgYWxyZWFkeSBleGlzdHMuYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBzdWNjZXNzXG4gICAgfSk7XG5cbiAgICBuZXh0KCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBkb25lID0gbmV4dDsgIC8vL1xuXG4gIGNsb25lUmVwb3NpdG9yeShyZWxlYXNlLCBxdWlldGx5LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gY2xvbmVSZXBvc2l0b3J5KHJlbGVhc2UsIHF1aWV0bHksIGRvbmUpIHtcbiAgbGV0IHJlcG9zaXRvcnkgPSByZXBvc2l0b3J5RnJvbVJlbGVhc2UocmVsZWFzZSlcblxuICBjb25zdCBvcHRpb25zID0gcmV0cmlldmVPcHRpb25zKCksXG4gICAgICAgIHsgc3NoIH0gPSBvcHRpb25zO1xuXG4gIGlmIChzc2gpIHtcbiAgICBjb25zdCB7IGdpdEh1Ykhvc3ROYW1lIH0gPSBzc2g7XG5cbiAgICByZXBvc2l0b3J5ID0gcmVwb3NpdG9yeS5yZXBsYWNlKGBodHRwczovLyR7REVGQVVMVF9HSVRIVUJfSE9TVF9OQU1FfS9gLCBgZ2l0QCR7Z2l0SHViSG9zdE5hbWV9OmApXG4gIH1cblxuICBjb25zdCBjb21tYW5kID0gYGdpdCBjbG9uZSAke3JlcG9zaXRvcnl9LmdpdGA7XG5cbiAgZXhlYyhjb21tYW5kLCAoZXJyb3IpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gcmVsZWFzZTtcblxuICAgICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgfVxuXG4gICAgZG9uZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwb3NpdG9yeUZyb21SZWxlYXNlKHJlbGVhc2UpIHtcbiAgbGV0IHsgZW50cmllcyB9ID0gcmVsZWFzZTtcblxuICBjb25zdCBqc29uID0gZW50cmllczsgLy8vXG5cbiAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgY29uc3QgcmVwb3NpdG9yeSA9IGVudHJpZXMuZ2V0UmVwb3NpdG9yeSgpO1xuXG4gIHJldHVybiByZXBvc2l0b3J5O1xufVxuIl0sIm5hbWVzIjpbImNsb25lUmVwb3NpdG9yaWVzT3BlcmF0aW9uIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJjaGVja0VudHJ5RXhpc3RzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZWxlYXNlcyIsImRlcGVuZGVuY2llcyIsInN1Y2Nlc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJjbG9uZVJlcG9zaXRvcnlPcGVyYXRpb24iLCJmaXJzdFJlbGVhc2UiLCJyZWxlYXNlIiwiaW5kZXgiLCJJbmZpbml0eSIsImRvbmUiLCJuZXh0IiwiaGVhZGxlc3MiLCJuYW1lIiwicXVpZXRseSIsImVudHJ5UGF0aCIsImVudHJ5RXhpc3RzIiwiY29uc29sZSIsImxvZyIsImNsb25lUmVwb3NpdG9yeSIsInJlcG9zaXRvcnkiLCJyZXBvc2l0b3J5RnJvbVJlbGVhc2UiLCJvcHRpb25zIiwicmV0cmlldmVPcHRpb25zIiwic3NoIiwiZ2l0SHViSG9zdE5hbWUiLCJyZXBsYWNlIiwiREVGQVVMVF9HSVRIVUJfSE9TVF9OQU1FIiwiY29tbWFuZCIsImV4ZWMiLCJlcnJvciIsImVudHJpZXMiLCJqc29uIiwiRW50cmllcyIsImZyb21KU09OIiwiZ2V0UmVwb3NpdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUF3QkE7OzsrQkFYSDs0QkFDRzsyQkFDbUQ7K0JBRTNDOzBCQUNTO0FBRXpDLE1BQU0sRUFBRUMsS0FB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