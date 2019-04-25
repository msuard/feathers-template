const request = require('request-promise');
const logger = require('../utils/logger');

exports.sendPOSTRequest = async function(uri, body) {

  const reqOptions = {
    uri: uri,
    timeout: 20000,
    body: body,
    json: true,
    headers: { 'content-type': 'application/json' },
  };

  return request.put(reqOptions)
    .then( (res) =>{
      // console.log(res);
      return res;
    })
    .catch((err) => {
      logger.error(Error(err));
      return { "url": uri, "status": "error" };
    });

};
