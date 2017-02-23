const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const {editor, resolver, reqWolfram, style} = require('./serverCtrl');

app.use(bodyParser.urlencoded({
  extended: true
}));

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.get('/editor', editor);
app.get('/css/style.css', style);
app.post('/api/resolver', cors(corsOptions), resolver);
app.get('/queryWolframalpha', reqWolfram);

// app.listen(3000)
if (process.env.NODE_ENV === 'production') {
  app.listen(process.env.PORT || 8910);
} else {
  var pem = require('pem');
  var https = require('https');
  pem.createCertificate({ days: 1, selfSigned: true }, function(err, keys) {
    if (err) throw err;

    https.createServer({
      key: keys.serviceKey,
      cert: keys.certificate
    }, app).listen(process.env.PORT || 8910);
  });
}