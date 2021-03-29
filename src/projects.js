"use strict";

import { asynchronousUtilities } from "necessary";

import Project from "./project";

const { forEach } = asynchronousUtilities;

export default class Projects {
  constructor(array) {
    this.array = array;
  }

  getLength() {
    return this.array.length;
  }

  addProject(project) {
    this.array.push(project);
  }

  mapProject(callback) {
    return this.array.map(callback);
  }

  reduceProject(callback, initialValue) {
    return this.array.reduce(callback, initialValue);
  }

  forEachProject(callback) {
    this.array.forEach(callback);
  }

  asynchronousForEachProject(callback, done) {
    forEach(this.array, callback, done);
  }

  toJSON() {
    const json = this.array.map((project) => {
      const projectJSON = project.toJSON();

      return projectJSON;
    });

    return json;
  }

  static fromJSON(json) {
    const array = json.map((json) => {  ///
            const project = Project.fromJSON(json);

            return project;
          }),
          projects = new Projects(array);

    return projects;
  }

  static fromNothing() {
    const array = [],
          projects = new Projects(array);

    return projects;
  }
}

