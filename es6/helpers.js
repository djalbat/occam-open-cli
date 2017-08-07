'use strict';

const fsExtra = require('fs-extra'),
      necessary = require('necessary');

const pathMapsUtilities = require('./utilities/pathMaps');

const { move, remove } = fsExtra,
      { path, fileSystem } = necessary,
      { concatenatePaths } = path,
      { entryExists, isEntryDirectory, isDirectoryEmpty } = fileSystem;

class helpers {
  static moveEntries(pathMaps, projectsDirectoryPath, callback) {
    const targetPaths = [];

    pathMapsUtilities.asyncForEachWithSourcePathAndTargetPath(
      pathMaps, 
      function(sourcePath, targetPath, next) {
        moveEntry(sourcePath, targetPath, projectsDirectoryPath, function(targetPath) {
          targetPaths.push(targetPath);
          
          next();
        });
      },
      function() {
        callback(targetPaths);
      }
    );
  }

  static removeEntries(pathMaps, projectsDirectoryPath, callback) {
    const targetPaths = [];

    pathMapsUtilities.asyncForEachWithSourcePathAndTargetPath(
      pathMaps,
      function(sourcePath, targetPath, next) {
        removeEntry(sourcePath, targetPath, projectsDirectoryPath, function(targetPath) {
          targetPaths.push(targetPath);

          next();
        });
      },
      function() {
        callback(targetPaths);
      }
    );
  }
}

module.exports = helpers;

function moveEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (sourcePath === targetPath) {
    callback(targetPath);
  } else {
    const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
          exists = entryExists(absoluteSourcePath);

    if (!exists) {
      targetPath = null;

      callback(targetPath);
    } else {
      const entryDirectory = isEntryDirectory(absoluteSourcePath);

      entryDirectory ?
        moveDirectory(sourcePath, targetPath, projectsDirectoryPath, callback) :
          moveFile(sourcePath, targetPath, projectsDirectoryPath, callback);
    }
  }
}

function removeEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (sourcePath === targetPath) {
    callback(targetPath);
  } else {
    const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
          exists = entryExists(absoluteSourcePath);

    if (!exists) {
      targetPath = null;

      callback(targetPath);
    } else {
      const entryDirectory = isEntryDirectory(absoluteSourcePath);

      entryDirectory ?
        removeDirectory(sourcePath, projectsDirectoryPath, callback) :
          removeFile(sourcePath, projectsDirectoryPath, callback);
    }
  }
}

function moveFile(sourcePath, targetPath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
        absoluteTargetPath = concatenatePaths(projectsDirectoryPath, targetPath);

  move(absoluteSourcePath, absoluteTargetPath, function (err) {
    const success = (err === null);
    
    targetPath = success ?
                   targetPath :
                     sourcePath;

    callback(targetPath);
  });
}

function removeFile(sourcePath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath);

  remove(absoluteSourcePath, function(err) {
    const success = (err === null),
          targetPath = success ?
                         null :
                           sourcePath;

    callback(targetPath);
  });
}

function moveDirectory(sourcePath, targetPath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
        absoluteTargetPath = concatenatePaths(projectsDirectoryPath, targetPath),
        empty = isDirectoryEmpty(absoluteSourcePath);

  if (!empty) {
    const targetPath = sourcePath;

    callback(targetPath);
  } else {
    move(absoluteSourcePath, absoluteTargetPath, function (err) {
      const success = (err === null);

      if (success) {
        callback(targetPath);
      } else {
        const errCode = err.code; ///

        if (errCode !== 'EEXIST') {
          const targetPath = sourcePath;

          callback(targetPath);
        } else {
          remove(absoluteSourcePath, function(err) {
            const success = (err === null);

            if (!success) {
              targetPath = sourcePath;
            }

            callback(targetPath);
          });
        }
      }
    });
  }
}

function removeDirectory(sourcePath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
        empty = isDirectoryEmpty(absoluteSourcePath);

  if (!empty) {
    const targetPath = sourcePath;

    callback(targetPath);
  } else {
    remove(absoluteSourcePath, function(err) {
      const success = (err === null),
            targetPath = success ?
                            null :
                              sourcePath;

      callback(targetPath);
    });
  }
}
