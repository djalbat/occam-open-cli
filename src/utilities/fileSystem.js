"use strict";

import { characters, pathUtilities, fileSystemUtilities } from "necessary";

import Entries from "../entries";
import Release from "../release";
import Directory from "../directory";

import { isNameHiddenName } from "../utilities/name";
import { ENTRIES_MAXIMUM_ARRAY_LENGTH } from "../constants";
import { isFilePathRecognisedFilePath } from "../utilities/filePath";
import { ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE } from "../messages";

const { PERIOD_CHARACTER } = characters,
      { concatenatePaths } = pathUtilities,
      { readDirectory, isEntryDirectory } = fileSystemUtilities;

export function releaseFromReleaseName(releaseName) {
  const topmostDirectoryName = releaseName, ///
        projectsDirectoryPath = PERIOD_CHARACTER,
        loadOnlyRecognisedFiles = true,
        doNotLoadHiddenFilesAndDirectories = true,
        name = releaseName, ///
        entries = entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
        versionNumber = null, ///
        release = new Release(name, entries, versionNumber);

  return release;
}

export default {
  releaseFromReleaseName
};

function directoryFromPath(path, projectsDirectoryPath) {
  let directory = null;

  try {
    const absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directory = new Directory(path);
    }
  } catch (error) {
    ///
  }

  return directory;
}

function entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
  const array = [],
        relativeDirectoryPath = topmostDirectoryName;  ///

  entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

  const entries = new Entries(array);

  return entries;
}

function entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
  const absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
        subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach((subEntryName) => {
    const subEntryNameHiddenName = isNameHiddenName(subEntryName),
          subEntryNameNotHiddenName = !subEntryNameHiddenName,
          loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories,
          loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;

    if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
      let entry;

      const path = concatenatePaths(relativeDirectoryPath, subEntryName),
            directory = directoryFromPath(path, projectsDirectoryPath);

      if (directory !== null) {
        const directoryPath = path; ///

        if (loadUnrecognisedFilesAndDirectories) {
          entry = directory;  ///

          array.push(entry);  ///

          const arrayLength = array.length;

          if (arrayLength > ENTRIES_MAXIMUM_ARRAY_LENGTH) {
            throw new Error(ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE)
          }
        }

        entriesFromRelativeDirectoryPath(array, directoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories); ///
      } else {
        const file = loadFile(path, projectsDirectoryPath);

        if (file !== null) {
          const filePath = file.getPath(),
                filePathRecognisedFilePath = isFilePathRecognisedFilePath(filePath),
                fileRecognisedFile = filePathRecognisedFilePath;  ///

          if (fileRecognisedFile || loadUnrecognisedFilesAndDirectories) {
            entry = file; ///

            array.push(entry);  ///

            const arrayLength = array.length;

            if (arrayLength > ENTRIES_MAXIMUM_ARRAY_LENGTH) {
              throw new Error(ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE)
            }
          }
        }
      }
    }
  });
}
