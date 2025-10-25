"use strict";

import { exec } from "child_process";
import { Entries } from "occam-entities";
import { arrayUtilities, fileSystemUtilities, asynchronousUtilities } from "necessary";

import { retrieveOptions } from "../configuration";
import { DEFAULT_GITHUB_HOST_NAME } from "../defaults";

const { first } = arrayUtilities,
      { forEach } = asynchronousUtilities,
      { checkEntryExists } = fileSystemUtilities;

export default function cloneRepositoriesOperation(proceed, abort, context) {
  const { releases, dependencies } = context

  if (dependencies) {
    const success = true;

    Object.assign(context, {
      success
    });

    forEach(releases, cloneRepositoryOperation, () => {
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

  cloneRepositoryOperation(release, () => {
    const { success } = context;

    delete context.success;

    success ?
      proceed() :
        abort();
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

  const { name } = release,
        { quietly } = context,
        entryPath = name, ///
        entryExists = checkEntryExists(entryPath);

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

  done = next;  ///

  cloneRepository(release, quietly, done);
}

function cloneRepository(release, quietly, done) {
  let repository = repositoryFromRelease(release)

  const options = retrieveOptions(),
        { ssh } = options;

  if (ssh) {
    const { gitHubHostName } = ssh;

    repository = repository.replace(`https://${DEFAULT_GITHUB_HOST_NAME}/`, `git@${gitHubHostName}:`)
  }

  const command = `git clone ${repository}.git`;

  exec(command, (error) => {
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

  entries = Entries.fromJSON(json);

  const repository = entries.getRepository();

  return repository;
}
