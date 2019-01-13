'use strict';

function isAnswerAffirmative(answer) {
  const answerAffirmative = /^y.*/i.test(answer); ///

  return answerAffirmative;
}

module.exports = {
  isAnswerAffirmative
};
