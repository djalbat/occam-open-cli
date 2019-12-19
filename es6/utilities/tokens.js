'use strict';

function significantTokensFromTokens(tokens) {
  const significantTokens = tokens.reduce((significantTokens, token) => {
          const tokenSignificant = token.isSignificant();

          if (tokenSignificant) {
            const significantToken = token; ///

            significantTokens.push(significantToken);
          }

          return significantTokens;
        }, []);

  return significantTokens;
}

module.exports = {
  significantTokensFromTokens
};
