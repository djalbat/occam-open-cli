'use strict';

const fsExtra = require('fs-extra');

const async = require('./async'),
      pathUtil = require('./util/path'),
      pathMapsUtil = require('./util/pathMaps');

class helpers {
  static moveEntries(pathMaps, projectsDirectoryPath, callback) {
    const movedPaths = [];

    pathMapsUtil.asyncForEachWithSourcePathAndTargetPath(
      pathMaps, 
      function(sourcePath, targetPath, next) {
        moveEntry(sourcePath, targetPath, projectsDirectoryPath, function(movedPath) {
          movedPaths.push(movedPath);
          
          next();
        });
      },
      function() {
        callback(movedPaths);
      }
    );
  }

  static removeEntries(pathMaps, projectsDirectoryPath, callback) {
    const removedPaths = [];

    pathMapsUtil.asyncForEachWithSourcePath(
      pathMaps,
      function(sourcePath, next) {
        removeEntry(sourcePath, projectsDirectoryPath, function(removedPath) {
          removedPaths.push(removedPath);

          next();
        });
      },
      function() {
        callback(removedPaths);
      }
    );
  }
}

module.exports = helpers;

function moveEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (sourcePath === targetPath) {
    const movedPath = sourcePath;

    callback(movedPath);
  } else {
    let movedPath;
    
    const absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
          exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      movedPath = null;

      callback(movedPath);
    } else {
      const absoluteTargetPath = pathUtil.combinePaths(projectsDirectoryPath, targetPath);

      fsExtra.move(absoluteSourcePath, absoluteTargetPath, function(err) {
        let movedPath;

        if (err && (err.code === 'EEXIST')) { ///
          movedPath = targetPath;

          targetPath = null;  ///

          remove(sourcePath, targetPath, projectsDirectoryPath, function() {
            callback(movedPath);
          });
        } else {
          const success = (err === null);

          movedPath = success ?
                        targetPath :
                          sourcePath;

          callback(movedPath);
        }
      });
    }
  }
}

function removeEntry(sourcePath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = pathUtil.combinePaths(projectsDirectoryPath, sourcePath),
        exists = fsExtra.existsSync(absoluteSourcePath);

  if (!exists) {
    const removedPath = sourcePath;

    callback(removedPath);
  } else {
    fsExtra.remove(absoluteSourcePath, function(err) {
      const success = (err === null),
            removedPath = success ?
                            null :
                              sourcePath;

      callback(removedPath);
    });
  }
}
