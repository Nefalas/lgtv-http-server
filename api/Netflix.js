const lgtv = require("lgtv");
const CONFIG = require('../config');

class Netflix {

  static start() {
    return new Promise(((resolve, reject) => {
      lgtv.connect(CONFIG.ip, (err) => {
        if (err) return reject(err);
        lgtv.start_app('netflix', (err, res) => {
          if (err) return reject(err);
          resolve(res);
        })
      })
    }))
  }

}

module.exports = Netflix;