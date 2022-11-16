"use strict";

const { shellUtilities, fileSystemUtilities, asynchronousUtilities } = require("necessary");

const { YES } = require("../constants"),
      { validateAnswer } = require("../utilities/validate"),
      { isAnswerAffirmative } = require("../utilities/prompt"),
      { INVALID_ANSWER_MESSAGE } = require("../messages");

const { writeFile, removeEntry, checkEntryExists, isEntryDirectory } = fileSystemUtilities;

const { prompt } = shellUtilities,
      { forEach } = asynchronousUtilities;

function openReleasesOperation(proceed, abort, context) {
  const { releases } = context,
        done = proceed; ///

  forEach(releases, openReleasePromptOperation, done, context);
}

module.exports = openReleasesOperation;

function openReleasePromptOperation(release, next, done, context) {
  const { name } = release,
        entryPath = name, ///
        entryExists = checkEntryExists(entryPath);

  if (!entryExists) {
    openRelease(release);

    next();

    return;
  }

  const entryDirectory = isEntryDirectory(entryPath);

  if (entryDirectory) {
    const { quietly } = context;

    if (!quietly) {
      console.log(`Cannot open the '${name}' package because a directory of that name already exists.`);
    }

    next();

    return;
  }

  const { yes } = context,
        answer = yes ?
                   YES :
                     null,
        description = `Overwrite the existing '${name}' package? (y)es (n)o: `,
        errorMessage = INVALID_ANSWER_MESSAGE,
        validationFunction = validateAnswer,  ///
        options = {
        answer,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const valid = (answer !== null);

    if (valid) {
      const affirmative = isAnswerAffirmative(answer);

      if (affirmative) {
        removeEntry(entryPath);

        openRelease(release);
      }

      next();
    }
  });
}

function openRelease(release) {
  const { name } = release,
        filePath = name,  ///
        releaseJSON = release,  ///
        releaseJSONString = JSON.stringify(releaseJSON),
        content = releaseJSONString; ///

  writeFile(filePath, content);
}
