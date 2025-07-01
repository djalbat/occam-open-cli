"use strict";

const { arrayUtilities, shellUtilities, fileSystemUtilities, asynchronousUtilities } = require("necessary");

const { isFileRelease } = require("../utilities/release"),
      { validateAnswer } = require("../utilities/validate"),
      { isAnswerAffirmative } = require("../utilities/prompt"),
      { INVALID_ANSWER_MESSAGE } = require("../messages");

const { writeFile, removeEntry, checkEntryExists, isEntryDirectory } = fileSystemUtilities;

const { first } = arrayUtilities,
      { prompt } = shellUtilities,
      { forEach } = asynchronousUtilities;

function openDependenciesOperation(proceed, abort, context) {
  const { releases, dependencies } = context;

  if (dependencies) {
    const done = proceed; ///

    forEach(releases, openDependencyPromptOperation, done, context);

    return;
  }

  const firstRelease = first(releases),
        release = firstRelease, ///
        index = 0,
        next = proceed, ///
        done = null;  ///

  openDependencyPromptOperation(release, next, done, context, index);
}

module.exports = openDependenciesOperation;

function openDependencyPromptOperation(release, next, done, context, index) {
  const { name, quietly } = release,
        entryPath = name, ///
        entryExists = checkEntryExists(entryPath);

  if (!entryExists) {
    openDependency(release, quietly);

    next();

    return;
  }

  const entryDirectory = isEntryDirectory(entryPath);

  if (entryDirectory) {
    if (!quietly) {
      console.log(`Cannot open the '${name}' package because a directory of that name already exists.`);
    }

    next();

    return;
  }

  const fileName = name,
        fileRelease = isFileRelease(fileName);

  if (!fileRelease) {
    if (!quietly) {
      console.log(`The '${name}' file is not a package and cannot be overwritten.`);
    }

    next();

    return;
  }

  const { yes } = context;

  if (yes) {
    if (!quietly) {
      console.log(`Overwriting the existing '${name}' package.`);
    }

    removeEntry(entryPath);

    openDependency(release, quietly);

    return;
  }

  const description = `Overwrite the existing '${name}' package? (y)es (n)o: `,
        errorMessage = INVALID_ANSWER_MESSAGE,
        validationFunction = validateAnswer,  ///
        options = {
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

        openDependency(release, quietly);
      }

      next();
    }
  });
}

function openDependency(release, quietly) {
  const { name } = release,
        filePath = name,  ///
        releaseJSON = release,  ///
        releaseJSONString = JSON.stringify(releaseJSON),
        content = releaseJSONString; ///

  writeFile(filePath, content);

  if (!quietly) {
    console.log(name);
  }
}
