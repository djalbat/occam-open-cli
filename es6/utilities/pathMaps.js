'use strict';

const necessary = require('necessary');

const { async } = necessary;

class pathMapsUtilities {
  static asyncForEachWithSourcePathAndTargetPath(pathMaps, callback, done) {
    async.forEach(
      pathMaps,
      function(pathMap, index, next) {
        const sourcePath = pathMap['sourcePath'],
              targetPath = pathMap['targetPath'];
  
        callback(sourcePath, targetPath, next);
      },
      done
    );
  }
}

module.exports = pathMapsUtilities;
