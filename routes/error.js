var express = require('express');
var router = express.Router();

/* GET error page. */
router.get('/', [
  (req, res, next) => {
    Promise.resolve().then(() => {
      throw new Error('CRASHED');
    }).catch(next)
  },
  (req, res, next) => {
    res.send('dadas');
  }
]);

module.exports = router;
