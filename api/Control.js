const lgtv = require("lgtv");
const CONFIG = require('../config');

class Control {

  static pause() {
    return new Promise((resolve, reject) => {
      lgtv.connect(CONFIG.ip, (err) => {
        if (err) return reject(err);
        lgtv.input_pause((err, res) => {
          if (err) return reject(err);
          resolve(res);
        });
      });
    });
  }

  static play() {
    return new Promise((resolve, reject) => {
      lgtv.connect(CONFIG.ip, (err) => {
        if (err) return reject(err);
        lgtv.input_play((err, res) => {
          if (err) return reject(err);
          resolve(res);
        });
      });
    });
  }

}

module.exports = Control;