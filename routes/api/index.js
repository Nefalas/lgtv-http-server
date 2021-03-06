'use strict';

const express = require('express');
const router = express.Router();

const Power = require('../../api/Power');
const Control = require('../../api/Control');
const Sound = require('../../api/Sound');
const Netflix = require('../../api/Netflix');

router.get('/on', (req, res) => {
  Power.turnOn()
  .then(() => {
    res.send('TV on')
  })
  .catch((err) => {
    res.send('Could not turn on TV: ' + err);
  })
});

router.get('/off', (req, res) => {
  Power.turnOff()
  .then(() => {
    res.send('TV off')
  })
  .catch((err) => {
    res.send('Could not turn off TV: ' + err);
  })
});

router.get('/volume', (req, res) => {
  let volume = parseInt(req.query.volume.toString());
  Sound.setVolume(volume)
  .then(() => {
    res.send('Volume set to ' + volume);
  })
  .catch((err) => {
    res.send('Could not set volume: ' + err);
  })
});

router.get('/play', (req, res) => {
  Control.play()
  .then(() => {
    res.send('Playing on TV');
  })
  .catch((err) => {
    res.send('Could not play on TV: ' + err);
  })
});

router.get('/pause', (req, res) => {
  Control.pause()
  .then(() => {
    res.send('Pausing on TV');
  })
  .catch((err) => {
    res.send('Could not pause on TV: ' + err);
  })
});

router.get('/startNetflix', (req, res) => {
  Netflix.start()
  .then(() => {
    res.send('Netflix started');
  })
  .catch((err) => {
    res.send('Could not start Netflix: ' + err);
  })
});

module.exports = router;