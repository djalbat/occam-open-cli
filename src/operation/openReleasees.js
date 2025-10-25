"use strict";

import { arrayUtilities, shellUtilities, fileSystemUtilities, asynchronousUtilities } from "necessary";

import { isFileRelease } from "../utilities/release";
import { validateAnswer } from "../utilities/validate";
import { isAnswerAffirmative } from "../utilities/prompt";
import { INVALID_ANSWER_MESSAGE } from "../messages";

const { first } = arrayUtilities,
      { prompt } = shellUtilities,
      { forEach } = asynchronousUtilities,
      { writeFile, removeEntry, checkEntryExists, isEntryDirectory } = fileSystemUtilities;

export default function openReleasesOperation(proceed, abort, context) {
  const { releases, dependencies } = context;

  if (dependencies) {
    const success = true;

    Object.assign(context, {
      success
    });

    forEach(releases, openReleasePromptOperation, () => {
      const { success } = context;

      delete context.success;

      success ?
        proceed() :
          abort();
    }, context);

    return;
  }

  const success = true;

  Object.assign(context, {
    success
  });

  const firstRelease = first(releases),
        release = firstRelease, ///
        index = Infinity,
        done = null;

  openReleasePromptOperation(release, () => {
    const { success } = context;

    delete context.success;

    success ?
      proceed() :
        abort();
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

  const { name } = release,
        { quietly } = context,
        entryPath = name, ///
        entryExists = checkEntryExists(entryPath);

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

  const fileName = name,
        fileRelease = isFileRelease(fileName);

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
