"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import File from "../file";
import Entries from "../entries";
import Directory from "../directory";

import { isNameHiddenName } from "../utilities/name";
import { ENTRIES_MAXIMUM_ARRAY_LENGTH } from "../constants";
import { isFilePathRecognisedFilePath } from "../utilities/filePath";
import { convertContentTabsToWhitespace } from "../utilities/content";
import { ENTRIES_MAXIMUM_ARRAY_LENGTH_EXCEEDED_MESSAGE } from "../messages";

const { concatenatePaths } = pathUtilities,
      { readFile, readDirectory, isEntryFile, isEntryDirectory } = fileSystemUtilities;

export function entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
  const array = [],
        relativeDirectoryPath = topmostDirectoryName;  ///

  entriesFromRelativeDirectoryPath(array, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

  const entries = new Entries(array);

  return entries;
}

export default {
  entriesFromTopmostDirectoryName
};

function fileFromPath(path, projectsDirectoryPath) {
  let file = null;

  try {
    const absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryFile = isEntryFile(absolutePath);

    if (entryFile) {
      let content = readFile(absolutePath);

      content = convertContentTabsToWhitespace(content);  ///

      file = new File(path, content);
    }
  } catch (error) {
    ///
  }

  return file;
}

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
        const file = fileFromPath(path, projectsDirectoryPath);

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
