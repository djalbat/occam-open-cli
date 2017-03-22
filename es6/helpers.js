'use strict';

const fsExtra = require('fs-extra');

const util = require('./util'),
      async = require('./async');

class helpers {
  static moveEntries(pathMaps, projectsDirectoryPath, callback) {
    const movedPaths = [];

    async.forEach(
      pathMaps, 
      function(pathMap, next) {
        const keys = Object.keys(pathMap),
              firstKey = first(keys),
              sourcePath = firstKey, ///
              targetPath = pathMap[sourcePath];
        
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

    async.forEach(
      pathMaps,
      function(pathMap, next) {
        const keys = Object.keys(pathMap),
              firstKey = first(keys),
              sourcePath = firstKey, ///
              targetPath = pathMap[sourcePath];

        removeEntry(sourcePath, targetPath, projectsDirectoryPath, function(removedPath) {
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
    
    const absoluteSourcePath = util.combinePaths(projectsDirectoryPath, sourcePath),
          exists = fsExtra.existsSync(absoluteSourcePath);

    if (!exists) {
      movedPath = null;

      callback(movedPath);
    } else {
      const absoluteTargetPath = util.combinePaths(projectsDirectoryPath, targetPath);

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

function removeEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (targetPath !== null) {
    const removedPath = sourcePath;

    callback(removedPath);
  } else {
    const absoluteSourcePath = util.combinePaths(projectsDirectoryPath, sourcePath),
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
}

function first(array) { return array[0]; }
