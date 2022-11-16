"use strict";

const { shellUtilities, fileSystemUtilities, asynchronousUtilities } = require("necessary");

const { YES } = require("../constants"),
      { validateAnswer } = require("../utilities/validate"),
      { isAnswerAffirmative } = require("../utilities/prompt"),
      { INVALID_ANSWER_MESSAGE } = require("../messages");

const { writeFile, removeEntry, checkEntryExists, isEntryDirectory } = fileSystemUtilities;

const { prompt } = shellUtilities,
      { forEach } = asynchronousUtilities;

function unpackReleasesOperation(proceed, abort, context) {
  const { releases } = context;

  if (releases === null) {
    abort();

    return;
  }

  const done = proceed; ///

  forEach(releases, unpackReleasePromptOperation, done, context);
}

module.exports = unpackReleasesOperation;

function unpackReleasePromptOperation(release, next, done, context) {
  const { name } = release,
        entryPath = name, ///
        entryExists = checkEntryExists(entryPath);

  if (!entryExists) {
    unpackRelease(release);

    next();

    return;
  }

  const entryDirectory = isEntryDirectory(entryPath);

  if (entryDirectory) {
    const { quietly } = context;

    if (!quietly) {
      console.log(`Cannot write the '${name}' package to disk because a directory of that name already exists.`);
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

        unpackRelease(release);
      }

      next();
    }
  });
}

function unpackRelease(release) {
  const { name } = release,
        filePath = name,  ///
        releaseJSON = release,  ///
        releaseJSONString = JSON.stringify(releaseJSON),
        content = releaseJSONString; ///

  writeFile(filePath, content);
}
