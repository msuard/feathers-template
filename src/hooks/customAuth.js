const { NotAuthenticated } = require('@feathersjs/errors');
const bcrypt = require('bcrypt');

module.exports.authenticateRequest = function(app){

  const key = app.get('customAuth').key;
  const hash = app.get('customAuth').secretHash;

  return async context => {

    const headers = context.params.headers;

    if(headers['x-key'] && headers['x-secret']){

      const validKey = headers['x-key'] === key;

      const validSecret = await bcrypt.compare(headers['x-secret'], hash);

      if (validKey && validSecret) {
        return context;
      } else {
        throw new NotAuthenticated('Invalid authentication headers');
      }
    } else {
      throw new NotAuthenticated('Invalid authentication headers');
    }

  };
};
