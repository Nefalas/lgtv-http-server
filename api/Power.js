const wol = require('node-wol');
const lgtv = require("lgtv");
const CONFIG = require('../config');

class Power {

  static turnOn() {
    return new Promise((resolve, reject) => {
      wol.wake(CONFIG.mac, {
        address: CONFIG.ip,
        port: 3000
      }, (err) => {
        if (err) return reject(err);
        resolve(wol.createMagicPacket(CONFIG.mac));
      })
    })
  }

  static turnOff() {
    return new Promise((resolve, reject) => {
      lgtv.connect(CONFIG.ip, (err) => {
        if (err) return reject(err);
        lgtv.turn_off((err, res) => {
          if (err) return reject(res);
          resolve(res);
        })
      })
    })
  }

}

module.exports = Power;