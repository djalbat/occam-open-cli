"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return openReleasesOperation;
    }
});
const _necessary = require("necessary");
const _release = require("../utilities/release");
const _validate = require("../utilities/validate");
const _prompt = require("../utilities/prompt");
const _messages = require("../messages");
const { first } = _necessary.arrayUtilities, { prompt } = _necessary.shellUtilities, { forEach } = _necessary.asynchronousUtilities, { writeFile, removeEntry, checkEntryExists, isEntryDirectory } = _necessary.fileSystemUtilities;
function openReleasesOperation(proceed, abort, context) {
    const { releases, dependencies } = context;
    if (dependencies) {
        const success = true;
        Object.assign(context, {
            success
        });
        forEach(releases, openReleasePromptOperation, ()=>{
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
    openReleasePromptOperation(release, ()=>{
        const { success } = context;
        delete context.success;
        success ? proceed() : abort();
    }, done, context, index);
}
function openReleasePromptOperation(release, next, done, context, index) {
    if (index === 0) {
        const { headless } = context;
        if (headless) {
            next();
            return;
        }
    }
    const { name } = release, { quietly } = context, entryPath = name, entryExists = checkEntryExists(entryPath);
    if (!entryExists) {
        openRelease(release, quietly);
        next();
        return;
    }
    const entryDirectory = isEntryDirectory(entryPath);
    if (entryDirectory) {
        if (!quietly) {
            console.log(`Cannot open the '${name}' package because a directory with that name already exists.`);
        }
        const success = false;
        Object.assign(context, {
            success
        });
        next();
        return;
    }
    const fileName = name, fileRelease = (0, _release.isFileRelease)(fileName);
    if (!fileRelease) {
        if (!quietly) {
            console.log(`The '${name}' file is not a package and therefore cannot be overwritten.`);
        }
        const success = false;
        Object.assign(context, {
            success
        });
        next();
        return;
    }
    const { yes } = context;
    if (yes) {
        if (!quietly) {
            console.log(`Overwriting the existing '${name}' package.`);
        }
        removeEntry(entryPath);
        openRelease(release, quietly);
        return;
    }
    const description = `Overwrite the existing '${name}' package? (y)es (n)o: `, errorMessage = _messages.INVALID_ANSWER_MESSAGE, validationFunction = _validate.validateAnswer, options = {
        description,
        errorMessage,
        validationFunction
    };
    prompt(options, (answer)=>{
        const valid = answer !== null;
        if (valid) {
            const affirmative = (0, _prompt.isAnswerAffirmative)(answer);
            if (affirmative) {
                removeEntry(entryPath);
                openRelease(release, quietly);
            }
            next();
            return;
        }
        const success = false;
        Object.assign(context, {
            success
        });
        next();
    });
}
function openRelease(release, quietly) {
    const { name } = release, filePath = name, releaseJSON = release, releaseJSONString = JSON.stringify(releaseJSON), content = releaseJSONString; ///
    writeFile(filePath, content);
    if (!quietly) {
        console.log(name);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vb3BlblJlbGVhc2Vlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMsIHNoZWxsVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGlzRmlsZVJlbGVhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VcIjtcbmltcG9ydCB7IHZhbGlkYXRlQW5zd2VyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0ZVwiO1xuaW1wb3J0IHsgaXNBbnN3ZXJBZmZpcm1hdGl2ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvbXB0XCI7XG5pbXBvcnQgeyBJTlZBTElEX0FOU1dFUl9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzLFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IHdyaXRlRmlsZSwgcmVtb3ZlRW50cnksIGNoZWNrRW50cnlFeGlzdHMsIGlzRW50cnlEaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5SZWxlYXNlc09wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VzLCBkZXBlbmRlbmNpZXMgfSA9IGNvbnRleHQ7XG5cbiAgaWYgKGRlcGVuZGVuY2llcykge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBzdWNjZXNzXG4gICAgfSk7XG5cbiAgICBmb3JFYWNoKHJlbGVhc2VzLCBvcGVuUmVsZWFzZVByb21wdE9wZXJhdGlvbiwgKCkgPT4ge1xuICAgICAgY29uc3QgeyBzdWNjZXNzIH0gPSBjb250ZXh0O1xuXG4gICAgICBkZWxldGUgY29udGV4dC5zdWNjZXNzO1xuXG4gICAgICBzdWNjZXNzID9cbiAgICAgICAgcHJvY2VlZCgpIDpcbiAgICAgICAgICBhYm9ydCgpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3VjY2VzcyA9IHRydWU7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgc3VjY2Vzc1xuICB9KTtcblxuICBjb25zdCBmaXJzdFJlbGVhc2UgPSBmaXJzdChyZWxlYXNlcyksXG4gICAgICAgIHJlbGVhc2UgPSBmaXJzdFJlbGVhc2UsIC8vL1xuICAgICAgICBpbmRleCA9IEluZmluaXR5LFxuICAgICAgICBkb25lID0gbnVsbDtcblxuICBvcGVuUmVsZWFzZVByb21wdE9wZXJhdGlvbihyZWxlYXNlLCAoKSA9PiB7XG4gICAgY29uc3QgeyBzdWNjZXNzIH0gPSBjb250ZXh0O1xuXG4gICAgZGVsZXRlIGNvbnRleHQuc3VjY2VzcztcblxuICAgIHN1Y2Nlc3MgP1xuICAgICAgcHJvY2VlZCgpIDpcbiAgICAgICAgYWJvcnQoKTtcbiAgfSwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBvcGVuUmVsZWFzZVByb21wdE9wZXJhdGlvbihyZWxlYXNlLCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkge1xuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICBjb25zdCB7IGhlYWRsZXNzIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKGhlYWRsZXNzKSB7XG4gICAgICBuZXh0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IG5hbWUgfSA9IHJlbGVhc2UsXG4gICAgICAgIHsgcXVpZXRseSB9ID0gY29udGV4dCxcbiAgICAgICAgZW50cnlQYXRoID0gbmFtZSwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuXG4gIGlmICghZW50cnlFeGlzdHMpIHtcbiAgICBvcGVuUmVsZWFzZShyZWxlYXNlLCBxdWlldGx5KTtcblxuICAgIG5leHQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShlbnRyeVBhdGgpO1xuXG4gIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgIGlmICghcXVpZXRseSkge1xuICAgICAgY29uc29sZS5sb2coYENhbm5vdCBvcGVuIHRoZSAnJHtuYW1lfScgcGFja2FnZSBiZWNhdXNlIGEgZGlyZWN0b3J5IHdpdGggdGhhdCBuYW1lIGFscmVhZHkgZXhpc3RzLmApO1xuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3VjY2Vzc1xuICAgIH0pO1xuXG4gICAgbmV4dCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZmlsZU5hbWUgPSBuYW1lLFxuICAgICAgICBmaWxlUmVsZWFzZSA9IGlzRmlsZVJlbGVhc2UoZmlsZU5hbWUpO1xuXG4gIGlmICghZmlsZVJlbGVhc2UpIHtcbiAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUaGUgJyR7bmFtZX0nIGZpbGUgaXMgbm90IGEgcGFja2FnZSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSBvdmVyd3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN1Y2Nlc3NcbiAgICB9KTtcblxuICAgIG5leHQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgeWVzIH0gPSBjb250ZXh0O1xuXG4gIGlmICh5ZXMpIHtcbiAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBPdmVyd3JpdGluZyB0aGUgZXhpc3RpbmcgJyR7bmFtZX0nIHBhY2thZ2UuYCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRW50cnkoZW50cnlQYXRoKTtcblxuICAgIG9wZW5SZWxlYXNlKHJlbGVhc2UsIHF1aWV0bHkpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgT3ZlcndyaXRlIHRoZSBleGlzdGluZyAnJHtuYW1lfScgcGFja2FnZT8gKHkpZXMgKG4pbzogYCxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gSU5WQUxJRF9BTlNXRVJfTUVTU0FHRSxcbiAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uID0gdmFsaWRhdGVBbnN3ZXIsICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIChhbnN3ZXIpID0+IHtcbiAgICBjb25zdCB2YWxpZCA9IChhbnN3ZXIgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBjb25zdCBhZmZpcm1hdGl2ZSA9IGlzQW5zd2VyQWZmaXJtYXRpdmUoYW5zd2VyKTtcblxuICAgICAgaWYgKGFmZmlybWF0aXZlKSB7XG4gICAgICAgIHJlbW92ZUVudHJ5KGVudHJ5UGF0aCk7XG5cbiAgICAgICAgb3BlblJlbGVhc2UocmVsZWFzZSwgcXVpZXRseSk7XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3VjY2Vzc1xuICAgIH0pO1xuXG4gICAgbmV4dCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlblJlbGVhc2UocmVsZWFzZSwgcXVpZXRseSkge1xuICBjb25zdCB7IG5hbWUgfSA9IHJlbGVhc2UsXG4gICAgICAgIGZpbGVQYXRoID0gbmFtZSwgIC8vL1xuICAgICAgICByZWxlYXNlSlNPTiA9IHJlbGVhc2UsICAvLy9cbiAgICAgICAgcmVsZWFzZUpTT05TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyZWxlYXNlSlNPTiksXG4gICAgICAgIGNvbnRlbnQgPSByZWxlYXNlSlNPTlN0cmluZzsgLy8vXG5cbiAgd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KTtcblxuICBpZiAoIXF1aWV0bHkpIHtcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm9wZW5SZWxlYXNlc09wZXJhdGlvbiIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJ3cml0ZUZpbGUiLCJyZW1vdmVFbnRyeSIsImNoZWNrRW50cnlFeGlzdHMiLCJpc0VudHJ5RGlyZWN0b3J5IiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZWxlYXNlcyIsImRlcGVuZGVuY2llcyIsInN1Y2Nlc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJvcGVuUmVsZWFzZVByb21wdE9wZXJhdGlvbiIsImZpcnN0UmVsZWFzZSIsInJlbGVhc2UiLCJpbmRleCIsIkluZmluaXR5IiwiZG9uZSIsIm5leHQiLCJoZWFkbGVzcyIsIm5hbWUiLCJxdWlldGx5IiwiZW50cnlQYXRoIiwiZW50cnlFeGlzdHMiLCJvcGVuUmVsZWFzZSIsImVudHJ5RGlyZWN0b3J5IiwiY29uc29sZSIsImxvZyIsImZpbGVOYW1lIiwiZmlsZVJlbGVhc2UiLCJpc0ZpbGVSZWxlYXNlIiwieWVzIiwiZGVzY3JpcHRpb24iLCJlcnJvck1lc3NhZ2UiLCJJTlZBTElEX0FOU1dFUl9NRVNTQUdFIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwidmFsaWRhdGVBbnN3ZXIiLCJvcHRpb25zIiwiYW5zd2VyIiwidmFsaWQiLCJhZmZpcm1hdGl2ZSIsImlzQW5zd2VyQWZmaXJtYXRpdmUiLCJmaWxlUGF0aCIsInJlbGVhc2VKU09OIiwicmVsZWFzZUpTT05TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUF3QkE7OzsyQkFabUU7eUJBRTdEOzBCQUNDO3dCQUNLOzBCQUNHO0FBRXZDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlCQUFjLEVBQzFCLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYyxFQUMzQixFQUFFQyxPQUFPLEVBQUUsR0FBR0MsZ0NBQXFCLEVBQ25DLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUUsR0FBR0MsOEJBQW1CO0FBRTNFLFNBQVNYLHNCQUFzQlksT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDbkUsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRSxHQUFHRjtJQUVuQyxJQUFJRSxjQUFjO1FBQ2hCLE1BQU1DLFVBQVU7UUFFaEJDLE9BQU9DLE1BQU0sQ0FBQ0wsU0FBUztZQUNyQkc7UUFDRjtRQUVBWixRQUFRVSxVQUFVSyw0QkFBNEI7WUFDNUMsTUFBTSxFQUFFSCxPQUFPLEVBQUUsR0FBR0g7WUFFcEIsT0FBT0EsUUFBUUcsT0FBTztZQUV0QkEsVUFDRUwsWUFDRUM7UUFDTixHQUFHQztRQUVIO0lBQ0Y7SUFFQSxNQUFNRyxVQUFVO0lBRWhCQyxPQUFPQyxNQUFNLENBQUNMLFNBQVM7UUFDckJHO0lBQ0Y7SUFFQSxNQUFNSSxlQUFlcEIsTUFBTWMsV0FDckJPLFVBQVVELGNBQ1ZFLFFBQVFDLFVBQ1JDLE9BQU87SUFFYkwsMkJBQTJCRSxTQUFTO1FBQ2xDLE1BQU0sRUFBRUwsT0FBTyxFQUFFLEdBQUdIO1FBRXBCLE9BQU9BLFFBQVFHLE9BQU87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