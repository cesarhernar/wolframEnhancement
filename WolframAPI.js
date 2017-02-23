let request = require('request');

module.exports = function WolframAPI(req, res) {
  let url = `http://api.wolframalpha.com/v2/query?input=${req.query.query}&appid=27JKQX-GP3TGUYKEK&output=json`;
  res.status = 200;
  request.get(url).pipe(res);
  return;
}

