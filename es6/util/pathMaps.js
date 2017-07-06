'use strict';

const async = require('../async');

class pathMapsUtil {
  static asyncForEachWithSourcePathAndTargetPath(pathMaps, callback, done) {
    async.forEach(
      pathMaps,
      function(pathMap, next) {
        const sourcePath = pathMap['sourcePath'],
              targetPath = pathMap['targetPath'];
  
        callback(sourcePath, targetPath, next);
      },
      done
    );
  }
}

module.exports = pathMapsUtil;
