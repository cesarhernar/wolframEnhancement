let WolframAPI = require('./WolframAPI');
serverCtrl = {
  editor: (req, res) => {
    res.sendFile(__dirname + '/editor.html');
  },
  resolver: (req, res) => {
    let data = JSON.parse(req.body.params);
    if (!data) {
      res.status(403 /* Unauthorized */).send('Invalid params');
      return;
    }  
    res.json({body: data.queryResult})
  },
  reqWolfram: WolframAPI,
  style: (req, res) => {
    res.sendFile(__dirname + '/css/styles.css');
  }
}

module.exports = serverCtrl;