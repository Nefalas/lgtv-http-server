const lgtv = require("lgtv");
const CONFIG = require('../config');

class Sound {

  static setVolume(volume) {
    return new Promise((resolve, reject) => {
      lgtv.connect(CONFIG.ip, (err) => {
        if (err) return reject(err);
        lgtv.set_volume(volume, (err, res) => {
          if (err) return reject(res);
          resolve(res);
        })
      })
    })
  }

}

module.exports = Sound;