'use strict';

const chai = require('chai'),
      assert = chai.assert;

const Projects = require('../../../es6/projects');

describe('es6/common/Projects', function() {
  describe('#fromProjectsDirectoryPath', function() {
    describe('given an empty projects directory path', function() {
      const projectsDirectoryPath = '';

      it('Returns an instance of the Projects class', function() {
        const projects = Projects.fromProjectsDirectoryPath(projectsDirectoryPath);

        assert.instanceOf(projects, Projects);
      });
    });

    describe('given a valid projects directory path', function() {
      const projectsDirectoryPath = '/home/james/Mathematics';

      it('Returns an instance of the Projects class containing a non-empty array', function() {
        const projects = Projects.fromProjectsDirectoryPath(projectsDirectoryPath);

        ///
      });
    });
  });
});
