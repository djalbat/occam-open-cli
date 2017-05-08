'use strict';

const async = require('../async');

class pathMapsUtil {
  static asyncForEachWithSourcePathAndTargetPath(pathMaps, callback, done) {
    async.forEach(
      pathMaps,
      function(pathMap, next) {
        const keys = Object.keys(pathMap),
              firstKey = first(keys),
              sourcePath = firstKey, ///
              targetPath = pathMap[sourcePath];
  
        callback(sourcePath, targetPath, next);
      },
      done
    );
  }

  static asyncForEachWithSourcePath(pathMaps, callback, done) {
    async.forEach(
      pathMaps,
      function(pathMap, next) {
        const keys = Object.keys(pathMap),
              firstKey = first(keys),
              sourcePath = firstKey; ///
  
        callback(sourcePath, next);
      },
      done
    );
  }
}

module.exports = pathMapsUtil;

function first(array) { return array[0]; }
