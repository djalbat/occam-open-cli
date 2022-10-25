"use strict";

import Dependency from "./dependency";

export default class Dependencies {
  constructor(array) {
    this.array = array;
  }

  toJSON() {
    const dependenciesJSON = this.array.map((dependency) => {
            const dependencyJSON = dependency.toJSON();
  
            return dependencyJSON;
          }),
          json = dependenciesJSON; ///

    return json;
  }

  static fromJSON(json) {
    const dependenciesJSON = json, ///
          array = dependenciesJSON.map((dependencyJSON) => {  ///
            const json = dependencyJSON,  ///
                  dependency = Dependency.fromJSON(json);

            return dependency;
          }),
          dependencies = new Dependencies(array);

    return dependencies;
  }

  static fromNothing() {
    const array = [],
          dependencies = new Dependencies(array);

    return dependencies;
  }
}
