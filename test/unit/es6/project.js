'use strict';

const chai = require('chai');

const Project = require('../../../es6/project');

const { assert } = chai;

describe('es6/common/Project', function() {
  describe('#fromURL', function() {
    describe('given a valid URL', function(done) {
      const url = 'https://github.com/jecs-imperial/Peano-Axioms/archive/master.zip';

      it('Returns an instance of the Project class', function() {
        Project.fromURL(url, function(project) {
          assert.instanceOf(project, Project);

          done();
        });
      });
    });
  });
});
