'use strict';

const fsExtra = require('fs-extra');

const async = require('./async'),
      pathUtil = require('./util/path'),
      pathMapsUtil = require('./util/pathMaps');

class helpers {
  static moveEntries(pathMaps, projectsDirectoryPath, callback) {
    const targetPaths = [];

    pathMapsUtil.asyncForEachWithSourcePathAndTargetPath(
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

    pathMapsUtil.asyncForEachWithSourcePathAndTargetPath(
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
    const absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
          exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      targetPath = null;
      
      callback(targetPath);
    } else {
      const absoluteTargetPath = pathUtil.combinePaths(projectsDirectoryPath, targetPath);

      fsExtra.move(absoluteSourcePath, absoluteTargetPath, function(err) {
        const success = (err === null);

        if (success) {
          callback(targetPath);
        } else {
          const errCode = err.code;

          if (errCode !== 'EEXIST') {
            const targetPath = sourcePath;

            callback(targetPath);
          } else {
            removeEntry(sourcePath, projectsDirectoryPath, function(targetPath) {
              const success = (targetPath === null);

              targetPath = success ?
                            targetPath :
                              sourcePath;

              callback(targetPath);
            });
          }
        }
      });
    }
  }
}

function removeEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (sourcePath === targetPath) {
    callback(targetPath);
  } else {
    const absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
          exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      targetPath = null;

      callback(targetPath);
    } else {
      const absoluteSourcePathDirectoryPath = pathUtil.isDirectoryPath(absoluteSourcePath),
            entryDirectory = absoluteSourcePathDirectoryPath;

      entryDirectory ?
        removeDirectory(sourcePath, projectsDirectoryPath, callback) :
          removeFile(sourcePath, projectsDirectoryPath, callback);
    }
  }
}

function removeDirectory(sourcePath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
        empty = pathUtil.isDirectoryEmpty(absoluteSourcePath);

  if (!empty) {
    const targetPath = sourcePath;

    callback(targetPath);
  } else {
    fsExtra.remove(absoluteSourcePath, function(err) {
      const success = (err === null),
            targetPath = success ?
                            null :
                              sourcePath;

      callback(targetPath);
    });
  }
}

function removeFile(sourcePath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath);

  fsExtra.remove(absoluteSourcePath, function(err) {
    const success = (err === null),
          targetPath = success ?
                          null :
                            sourcePath;

    callback(targetPath);
  });
}