const PORT = 5555;

const fs = require('fs');
const prompt = require('prompt');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

checkConfig()
.then((config) => {
  console.log("Using config:\n" + JSON.stringify(config, null, 2));
  run();
})
.catch((err) => {
  console.log("Could not create config: " + err);
});

function run() {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(express.static(__dirname));
  app.use('/api', require('./routes/api/index'));
  app.listen(PORT);
  console.log('Server running at http://localhost:' + PORT);
}

function checkConfig() {
  return new Promise((resolve, reject) => {
    try {
      let configFile = require('./config');
      return resolve(configFile);
    } catch (e) {
      prompt.start();
      prompt.get(['ip', 'mac'], (err, res) => {
        if (err) reject(err);
        let config = {
          ip: res.ip,
          mac: res.mac
        };
        fs.writeFile("config.json", JSON.stringify(config), (err) => {
          if (err) reject(err);
          console.log("Config file created");
          return resolve(config);
        });
      });
    }
  })
}