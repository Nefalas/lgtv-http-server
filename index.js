const PORT = 5555;

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let configFile;
try {
  configFile = require('./config')
} catch (e) {
  fs.writeFile("config.json", '{"ip" : "0.0.0.0", "mac" : "00:00:00:00:00:00"}', function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("Config file created");
  });
}

app.use('/', require('./routes/home'));
app.use('/api', require('./routes/api'));

app.listen(PORT);
console.log('Server running at http://localhost:' + PORT);
