'use strict';

class async {
  static forEach(array, callback, done) {
    const arrayLength = array.length;
    
    let index = -1;
  
    const next = function next() {
      index++;
  
      if (index === arrayLength) {
        done();
      } else {
        const element = array[index];
  
        callback(element, next);
      }
    };
  
    next();
  }
}

module.exports = async;
