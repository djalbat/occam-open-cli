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
    get validateAffirmation () {
        return validateAffirmation;
    },
    get validateAnswer () {
        return validateAnswer;
    },
    get validateEmailAddress () {
        return validateEmailAddress;
    },
    get validateEmailAddressOrUsername () {
        return validateEmailAddressOrUsername;
    },
    get validateGitHubHostName () {
        return validateGitHubHostName;
    },
    get validatePassword () {
        return validatePassword;
    },
    get validateReleaseName () {
        return validateReleaseName;
    },
    get validateRepositoryName () {
        return validateRepositoryName;
    },
    get validateShellCommands () {
        return validateShellCommands;
    },
    get validateUsername () {
        return validateUsername;
    }
});
function validateAnswer(answer) {
    return /^(:?yes|no|y|n)$/i.test(answer);
}
function validateUsername(username) {
    return /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(username);
}
function validatePassword(password) {
    return /^[a-zA-Z0-9!@#$%^&*_.,\-]{8,24}$/.test(password);
}
function validateAffirmation(affirmation) {
    return /^(:?yes|no|y|n)$/i.test(affirmation);
}
function validateReleaseName(releaseName) {
    return /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(releaseName);
}
function validateEmailAddress(emailAddress) {
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,16}$/.test(emailAddress);
}
function validateShellCommands(shellCommands) {
    return /^.*$/.test(shellCommands);
}
function validateRepositoryName(repositoryName) {
    return /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/.test(repositoryName);
}
function validateGitHubHostName(gitHubHostName) {
    return /^[a-zA-Z0-9.\-]*$/.test(gitHubHostName);
}
function validateEmailAddressOrUsername(emailAddressOrUsername) {
    var valid = false;
    if (!valid) {
        var emailAddress = emailAddressOrUsername; ///
        valid = validateEmailAddress(emailAddress);
    }
    if (!valid) {
        var username = emailAddressOrUsername; ///
        valid = validateUsername(username);
    }
    return valid;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmFsaWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUFuc3dlcihhbnN3ZXIpIHsgcmV0dXJuICAvXig6P3llc3xub3x5fG4pJC9pLnRlc3QoYW5zd2VyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSkgeyByZXR1cm4gL15bYS16MC05XXsyLDE2fSg/Oi1bYS16MC05XXsyLDE2fSl7MCw0fSQvLnRlc3QodXNlcm5hbWUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSB7IHJldHVybiAvXlthLXpBLVowLTkhQCMkJV4mKl8uLFxcLV17OCwyNH0kLy50ZXN0KHBhc3N3b3JkKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVBZmZpcm1hdGlvbihhZmZpcm1hdGlvbikgeyByZXR1cm4gL14oOj95ZXN8bm98eXxuKSQvaS50ZXN0KGFmZmlybWF0aW9uKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSZWxlYXNlTmFtZShyZWxlYXNlTmFtZSkgeyByZXR1cm4gL15bYS16MC05XXsyLDE2fSg/Oi1bYS16MC05XXsyLDE2fSl7MCw0fSQvLnRlc3QocmVsZWFzZU5hbWUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsQWRkcmVzcyhlbWFpbEFkZHJlc3MpIHsgcmV0dXJuIC9eW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDE2fSQvLnRlc3QoZW1haWxBZGRyZXNzKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTaGVsbENvbW1hbmRzKHNoZWxsQ29tbWFuZHMpIHsgcmV0dXJuICAvXi4qJC8udGVzdChzaGVsbENvbW1hbmRzKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSZXBvc2l0b3J5TmFtZShyZXBvc2l0b3J5TmFtZSkgeyByZXR1cm4gL15bYS16MC05XXsyLDE2fSg/Oi1bYS16MC05XXsyLDE2fSl7MCw0fSQvLnRlc3QocmVwb3NpdG9yeU5hbWUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUdpdEh1Ykhvc3ROYW1lKGdpdEh1Ykhvc3ROYW1lKSB7IHJldHVybiAvXlthLXpBLVowLTkuXFwtXSokLy50ZXN0KGdpdEh1Ykhvc3ROYW1lKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbEFkZHJlc3NPclVzZXJuYW1lKGVtYWlsQWRkcmVzc09yVXNlcm5hbWUpIHtcbiAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgaWYgKCF2YWxpZCkge1xuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGVtYWlsQWRkcmVzc09yVXNlcm5hbWU7ICAvLy9cblxuICAgIHZhbGlkID0gdmFsaWRhdGVFbWFpbEFkZHJlc3MoZW1haWxBZGRyZXNzKTtcbiAgfVxuXG4gIGlmICghdmFsaWQpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IGVtYWlsQWRkcmVzc09yVXNlcm5hbWU7ICAvLy9cblxuICAgIHZhbGlkID0gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWQ7XG59XG4iXSwibmFtZXMiOlsidmFsaWRhdGVBZmZpcm1hdGlvbiIsInZhbGlkYXRlQW5zd2VyIiwidmFsaWRhdGVFbWFpbEFkZHJlc3MiLCJ2YWxpZGF0ZUVtYWlsQWRkcmVzc09yVXNlcm5hbWUiLCJ2YWxpZGF0ZUdpdEh1Ykhvc3ROYW1lIiwidmFsaWRhdGVQYXNzd29yZCIsInZhbGlkYXRlUmVsZWFzZU5hbWUiLCJ2YWxpZGF0ZVJlcG9zaXRvcnlOYW1lIiwidmFsaWRhdGVTaGVsbENvbW1hbmRzIiwidmFsaWRhdGVVc2VybmFtZSIsImFuc3dlciIsInRlc3QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYWZmaXJtYXRpb24iLCJyZWxlYXNlTmFtZSIsImVtYWlsQWRkcmVzcyIsInNoZWxsQ29tbWFuZHMiLCJyZXBvc2l0b3J5TmFtZSIsImdpdEh1Ykhvc3ROYW1lIiwiZW1haWxBZGRyZXNzT3JVc2VybmFtZSIsInZhbGlkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFRZ0JBO2VBQUFBOztRQU5BQztlQUFBQTs7UUFVQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQUZBQztlQUFBQTs7UUFaQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBVkFDO2VBQUFBOzs7QUFGVCxTQUFTUixlQUFlUyxNQUFNO0lBQUksT0FBUSxvQkFBb0JDLElBQUksQ0FBQ0Q7QUFBUztBQUU1RSxTQUFTRCxpQkFBaUJHLFFBQVE7SUFBSSxPQUFPLDJDQUEyQ0QsSUFBSSxDQUFDQztBQUFXO0FBRXhHLFNBQVNQLGlCQUFpQlEsUUFBUTtJQUFJLE9BQU8sbUNBQW1DRixJQUFJLENBQUNFO0FBQVc7QUFFaEcsU0FBU2Isb0JBQW9CYyxXQUFXO0lBQUksT0FBTyxvQkFBb0JILElBQUksQ0FBQ0c7QUFBYztBQUUxRixTQUFTUixvQkFBb0JTLFdBQVc7SUFBSSxPQUFPLDJDQUEyQ0osSUFBSSxDQUFDSTtBQUFjO0FBRWpILFNBQVNiLHFCQUFxQmMsWUFBWTtJQUFJLE9BQU8sNENBQTRDTCxJQUFJLENBQUNLO0FBQWU7QUFFckgsU0FBU1Isc0JBQXNCUyxhQUFhO0lBQUksT0FBUSxPQUFPTixJQUFJLENBQUNNO0FBQWdCO0FBRXBGLFNBQVNWLHVCQUF1QlcsY0FBYztJQUFJLE9BQU8sMkNBQTJDUCxJQUFJLENBQUNPO0FBQWlCO0FBRTFILFNBQVNkLHVCQUF1QmUsY0FBYztJQUFJLE9BQU8sb0JBQW9CUixJQUFJLENBQUNRO0FBQWlCO0FBRW5HLFNBQVNoQiwrQkFBK0JpQixzQkFBc0I7SUFDbkUsSUFBSUMsUUFBUTtJQUVaLElBQUksQ0FBQ0EsT0FBTztRQUNWLElBQU1MLGVBQWVJLHdCQUF5QixHQUFHO1FBRWpEQyxRQUFRbkIscUJBQXFCYztJQUMvQjtJQUVBLElBQUksQ0FBQ0ssT0FBTztRQUNWLElBQU1ULFdBQVdRLHdCQUF5QixHQUFHO1FBRTdDQyxRQUFRWixpQkFBaUJHO0lBQzNCO0lBRUEsT0FBT1M7QUFDVCJ9