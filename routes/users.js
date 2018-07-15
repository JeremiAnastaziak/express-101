var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send(req);
});

/* GET specific user. */
router.get('/:userId', (req, res, next) => {
  // if the user ID is 0, skip to the next route
  req.params.id === '0' ? next('route') : next();
}, (req, res, next) => {
  // send a regular response
  res.send('regular')
})

router.get(':userId', (req, res, next) => {
  res.send('special')
})

module.exports = router;
