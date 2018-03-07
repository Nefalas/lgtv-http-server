'use strict';

const express = require('express');
const router = express.Router();

const Power = require('../../api/Power');

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

module.exports = router;