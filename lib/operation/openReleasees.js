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
var _necessary = require("necessary");
var _release = require("../utilities/release");
var _validate = require("../utilities/validate");
var _prompt = require("../utilities/prompt");
var _messages = require("../messages");
var first = _necessary.arrayUtilities.first, prompt = _necessary.shellUtilities.prompt, forEach = _necessary.asynchronousUtilities.forEach, writeFile = _necessary.fileSystemUtilities.writeFile, removeEntry = _necessary.fileSystemUtilities.removeEntry, checkEntryExists = _necessary.fileSystemUtilities.checkEntryExists, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory;
function openReleasesOperation(proceed, abort, context) {
    var releases = context.releases, dependencies = context.dependencies;
    if (dependencies) {
        var success = true;
        Object.assign(context, {
            success: success
        });
        forEach(releases, openReleasePromptOperation, function() {
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
    openReleasePromptOperation(release, function() {
        var success = context.success;
        delete context.success;
        success ? proceed() : abort();
    }, done, context, index);
}
function openReleasePromptOperation(release, next, done, context, index) {
    if (index === 0) {
        var headless = context.headless;
        if (headless) {
            next();
            return;
        }
    }
    var name = release.name, quietly = context.quietly, entryPath = name, entryExists = checkEntryExists(entryPath);
    if (!entryExists) {
        openRelease(release, quietly);
        next();
        return;
    }
    var entryDirectory = isEntryDirectory(entryPath);
    if (entryDirectory) {
        if (!quietly) {
            console.log("Cannot open the '".concat(name, "' package because a directory with that name already exists."));
        }
        var success = false;
        Object.assign(context, {
            success: success
        });
        next();
        return;
    }
    var fileName = name, fileRelease = (0, _release.isFileRelease)(fileName);
    if (!fileRelease) {
        if (!quietly) {
            console.log("The '".concat(name, "' file is not a package and therefore cannot be overwritten."));
        }
        var success1 = false;
        Object.assign(context, {
            success: success1
        });
        next();
        return;
    }
    var yes = context.yes;
    if (yes) {
        if (!quietly) {
            console.log("Overwriting the existing '".concat(name, "' package."));
        }
        removeEntry(entryPath);
        openRelease(release, quietly);
        return;
    }
    var description = "Overwrite the existing '".concat(name, "' package? (y)es (n)o: "), errorMessage = _messages.INVALID_ANSWER_MESSAGE, validationFunction = _validate.validateAnswer, options = {
        description: description,
        errorMessage: errorMessage,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var valid = answer !== null;
        if (valid) {
            var affirmative = (0, _prompt.isAnswerAffirmative)(answer);
            if (affirmative) {
                removeEntry(entryPath);
                openRelease(release, quietly);
            }
            next();
            return;
        }
        var success = false;
        Object.assign(context, {
            success: success
        });
        next();
    });
}
function openRelease(release, quietly) {
    var name = release.name, filePath = name, releaseJSON = release, releaseJSONString = JSON.stringify(releaseJSON), content = releaseJSONString; ///
    writeFile(filePath, content);
    if (!quietly) {
        console.log(name);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vb3BlblJlbGVhc2Vlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMsIHNoZWxsVXRpbGl0aWVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGlzRmlsZVJlbGVhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VcIjtcbmltcG9ydCB7IHZhbGlkYXRlQW5zd2VyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0ZVwiO1xuaW1wb3J0IHsgaXNBbnN3ZXJBZmZpcm1hdGl2ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvbXB0XCI7XG5pbXBvcnQgeyBJTlZBTElEX0FOU1dFUl9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzLFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IHdyaXRlRmlsZSwgcmVtb3ZlRW50cnksIGNoZWNrRW50cnlFeGlzdHMsIGlzRW50cnlEaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5SZWxlYXNlc09wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VzLCBkZXBlbmRlbmNpZXMgfSA9IGNvbnRleHQ7XG5cbiAgaWYgKGRlcGVuZGVuY2llcykge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBzdWNjZXNzXG4gICAgfSk7XG5cbiAgICBmb3JFYWNoKHJlbGVhc2VzLCBvcGVuUmVsZWFzZVByb21wdE9wZXJhdGlvbiwgKCkgPT4ge1xuICAgICAgY29uc3QgeyBzdWNjZXNzIH0gPSBjb250ZXh0O1xuXG4gICAgICBkZWxldGUgY29udGV4dC5zdWNjZXNzO1xuXG4gICAgICBzdWNjZXNzID9cbiAgICAgICAgcHJvY2VlZCgpIDpcbiAgICAgICAgICBhYm9ydCgpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3VjY2VzcyA9IHRydWU7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgc3VjY2Vzc1xuICB9KTtcblxuICBjb25zdCBmaXJzdFJlbGVhc2UgPSBmaXJzdChyZWxlYXNlcyksXG4gICAgICAgIHJlbGVhc2UgPSBmaXJzdFJlbGVhc2UsIC8vL1xuICAgICAgICBpbmRleCA9IEluZmluaXR5LFxuICAgICAgICBkb25lID0gbnVsbDtcblxuICBvcGVuUmVsZWFzZVByb21wdE9wZXJhdGlvbihyZWxlYXNlLCAoKSA9PiB7XG4gICAgY29uc3QgeyBzdWNjZXNzIH0gPSBjb250ZXh0O1xuXG4gICAgZGVsZXRlIGNvbnRleHQuc3VjY2VzcztcblxuICAgIHN1Y2Nlc3MgP1xuICAgICAgcHJvY2VlZCgpIDpcbiAgICAgICAgYWJvcnQoKTtcbiAgfSwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBvcGVuUmVsZWFzZVByb21wdE9wZXJhdGlvbihyZWxlYXNlLCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkge1xuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICBjb25zdCB7IGhlYWRsZXNzIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKGhlYWRsZXNzKSB7XG4gICAgICBuZXh0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IG5hbWUgfSA9IHJlbGVhc2UsXG4gICAgICAgIHsgcXVpZXRseSB9ID0gY29udGV4dCxcbiAgICAgICAgZW50cnlQYXRoID0gbmFtZSwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuXG4gIGlmICghZW50cnlFeGlzdHMpIHtcbiAgICBvcGVuUmVsZWFzZShyZWxlYXNlLCBxdWlldGx5KTtcblxuICAgIG5leHQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShlbnRyeVBhdGgpO1xuXG4gIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgIGlmICghcXVpZXRseSkge1xuICAgICAgY29uc29sZS5sb2coYENhbm5vdCBvcGVuIHRoZSAnJHtuYW1lfScgcGFja2FnZSBiZWNhdXNlIGEgZGlyZWN0b3J5IHdpdGggdGhhdCBuYW1lIGFscmVhZHkgZXhpc3RzLmApO1xuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3VjY2Vzc1xuICAgIH0pO1xuXG4gICAgbmV4dCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZmlsZU5hbWUgPSBuYW1lLFxuICAgICAgICBmaWxlUmVsZWFzZSA9IGlzRmlsZVJlbGVhc2UoZmlsZU5hbWUpO1xuXG4gIGlmICghZmlsZVJlbGVhc2UpIHtcbiAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUaGUgJyR7bmFtZX0nIGZpbGUgaXMgbm90IGEgcGFja2FnZSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSBvdmVyd3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN1Y2Nlc3NcbiAgICB9KTtcblxuICAgIG5leHQoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgeWVzIH0gPSBjb250ZXh0O1xuXG4gIGlmICh5ZXMpIHtcbiAgICBpZiAoIXF1aWV0bHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBPdmVyd3JpdGluZyB0aGUgZXhpc3RpbmcgJyR7bmFtZX0nIHBhY2thZ2UuYCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRW50cnkoZW50cnlQYXRoKTtcblxuICAgIG9wZW5SZWxlYXNlKHJlbGVhc2UsIHF1aWV0bHkpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgT3ZlcndyaXRlIHRoZSBleGlzdGluZyAnJHtuYW1lfScgcGFja2FnZT8gKHkpZXMgKG4pbzogYCxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gSU5WQUxJRF9BTlNXRVJfTUVTU0FHRSxcbiAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uID0gdmFsaWRhdGVBbnN3ZXIsICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIChhbnN3ZXIpID0+IHtcbiAgICBjb25zdCB2YWxpZCA9IChhbnN3ZXIgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBjb25zdCBhZmZpcm1hdGl2ZSA9IGlzQW5zd2VyQWZmaXJtYXRpdmUoYW5zd2VyKTtcblxuICAgICAgaWYgKGFmZmlybWF0aXZlKSB7XG4gICAgICAgIHJlbW92ZUVudHJ5KGVudHJ5UGF0aCk7XG5cbiAgICAgICAgb3BlblJlbGVhc2UocmVsZWFzZSwgcXVpZXRseSk7XG4gICAgICB9XG5cbiAgICAgIG5leHQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3VjY2Vzc1xuICAgIH0pO1xuXG4gICAgbmV4dCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlblJlbGVhc2UocmVsZWFzZSwgcXVpZXRseSkge1xuICBjb25zdCB7IG5hbWUgfSA9IHJlbGVhc2UsXG4gICAgICAgIGZpbGVQYXRoID0gbmFtZSwgIC8vL1xuICAgICAgICByZWxlYXNlSlNPTiA9IHJlbGVhc2UsICAvLy9cbiAgICAgICAgcmVsZWFzZUpTT05TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyZWxlYXNlSlNPTiksXG4gICAgICAgIGNvbnRlbnQgPSByZWxlYXNlSlNPTlN0cmluZzsgLy8vXG5cbiAgd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KTtcblxuICBpZiAoIXF1aWV0bHkpIHtcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm9wZW5SZWxlYXNlc09wZXJhdGlvbiIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJ3cml0ZUZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicmVtb3ZlRW50cnkiLCJjaGVja0VudHJ5RXhpc3RzIiwiaXNFbnRyeURpcmVjdG9yeSIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJyZWxlYXNlcyIsImRlcGVuZGVuY2llcyIsInN1Y2Nlc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJvcGVuUmVsZWFzZVByb21wdE9wZXJhdGlvbiIsImZpcnN0UmVsZWFzZSIsInJlbGVhc2UiLCJpbmRleCIsIkluZmluaXR5IiwiZG9uZSIsIm5leHQiLCJoZWFkbGVzcyIsIm5hbWUiLCJxdWlldGx5IiwiZW50cnlQYXRoIiwiZW50cnlFeGlzdHMiLCJvcGVuUmVsZWFzZSIsImVudHJ5RGlyZWN0b3J5IiwiY29uc29sZSIsImxvZyIsImZpbGVOYW1lIiwiZmlsZVJlbGVhc2UiLCJpc0ZpbGVSZWxlYXNlIiwieWVzIiwiZGVzY3JpcHRpb24iLCJlcnJvck1lc3NhZ2UiLCJJTlZBTElEX0FOU1dFUl9NRVNTQUdFIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwidmFsaWRhdGVBbnN3ZXIiLCJvcHRpb25zIiwiYW5zd2VyIiwidmFsaWQiLCJhZmZpcm1hdGl2ZSIsImlzQW5zd2VyQWZmaXJtYXRpdmUiLCJmaWxlUGF0aCIsInJlbGVhc2VKU09OIiwicmVsZWFzZUpTT05TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUF3QkE7Ozt5QkFabUU7dUJBRTdEO3dCQUNDO3NCQUNLO3dCQUNHO0FBRXZDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0YsQUFBRUUsU0FBV0MseUJBQWMsQ0FBekJELFFBQ0YsQUFBRUUsVUFBWUMsZ0NBQXFCLENBQWpDRCxTQUNBRSxZQUErREMsOEJBQW1CLENBQWxGRCxXQUFXRSxjQUFvREQsOEJBQW1CLENBQXZFQyxhQUFhQyxtQkFBdUNGLDhCQUFtQixDQUExREUsa0JBQWtCQyxtQkFBcUJILDhCQUFtQixDQUF4Q0c7QUFFbkMsU0FBU1gsc0JBQXNCWSxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNuRSxJQUFRQyxXQUEyQkQsUUFBM0JDLFVBQVVDLGVBQWlCRixRQUFqQkU7SUFFbEIsSUFBSUEsY0FBYztRQUNoQixJQUFNQyxVQUFVO1FBRWhCQyxPQUFPQyxNQUFNLENBQUNMLFNBQVM7WUFDckJHLFNBQUFBO1FBQ0Y7UUFFQVosUUFBUVUsVUFBVUssNEJBQTRCO1lBQzVDLElBQU0sQUFBRUgsVUFBWUgsUUFBWkc7WUFFUixPQUFPSCxRQUFRRyxPQUFPO1lBRXRCQSxVQUNFTCxZQUNFQztRQUNOLEdBQUdDO1FBRUg7SUFDRjtJQUVBLElBQU1HLFdBQVU7SUFFaEJDLE9BQU9DLE1BQU0sQ0FBQ0wsU0FBUztRQUNyQkcsU0FBQUE7SUFDRjtJQUVBLElBQU1JLGVBQWVwQixNQUFNYyxXQUNyQk8sVUFBVUQsY0FDVkUsUUFBUUMsVUFDUkMsT0FBTztJQUViTCwyQkFBMkJFLFNBQVM7UUFDbEMsSUFBTSxBQUFFTCxV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