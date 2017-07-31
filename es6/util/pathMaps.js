'use strict';

const asyncUtil = require('../util/async');

class pathMapsUtil {
  static asyncForEachWithSourcePathAndTargetPath(pathMaps, callback, done) {
    asyncUtil.forEach(
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
