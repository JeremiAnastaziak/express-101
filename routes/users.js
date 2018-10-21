var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017';
var dbName = 'express';

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

/* GET users listing. */
router.get('/', (req, res, next) => {
  MongoClient.connect(url, function (err, client) {
    if (err) throw err

    var db = client.db(dbName)

    db.collection('users').find().toArray(function (err, users) {
      if (err) throw err

      res.render('users', { users });
    })
  })
});

/* GET specific user. */
router.get('/:userId', (req, res, next) => {
  // if the user ID is 0, skip to the next route
  req.params.id === '0'
    ? next('route')
    : next();

}, (req, res, next) => {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    if (err) throw err

    var db = client.db(dbName)

    db.collection('users').find({ 'id': req.params.userId }).next(function (err, user) {
      if (err) throw err

      if (!user) {
        res.render('user_not_found');
      } else {
        res.render('user', { user });
      }
    })
  })
})

router.get(':userId', (req, res, next) => {
  res.send('special')
})

module.exports = router;
