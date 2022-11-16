"use strict";

const { exec } = require("child_process"),
      { Entries } = require("occam-file-system"),
      { fileSystemUtilities, asynchronousUtilities } = require("necessary");

const { getOptions } = require("../configuration"),
      { DEFAULT_GITHUB_HOST_NAME } = require("../defaults");

const { checkEntryExists } = fileSystemUtilities;

const { forEach } = asynchronousUtilities;

function cloneReleasesOperation(proceed, abort, context) {
  const { releases } = context,
        done = proceed; ///

  forEach(releases, cloneReleasePromptOperation, done, context);
}

module.exports = cloneReleasesOperation;

function cloneReleasePromptOperation(release, next, done, context, index) {
  const { cloneDependencies } = context;

  if (!cloneDependencies) {
    if (index > 0) {
      next();

      return;
    }
  }

  const { name } = release,
        entryPath = name, ///
        entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    const { quietly } = context;

    if (!quietly) {
      console.log(`Cannot clone the '${name}' package because a directory of that name already exists.`);
    }

    next();

    return;
  }

  done = next;  ///

  cloneRelease(release, done);
}

function cloneRelease(release, done) {
  let repository = repositoryFromRelease(release)

  const options = getOptions(),
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