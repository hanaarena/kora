'use strict'

const router = require('koa-router')()
const mongorito = require('mongorito')
const run = require('../models/run')
const User = require('../models/User')

router.get('/', function* (next) {
  this.body = 'this a users response!'
})

// Create user & store in mongodb
router.post('/create', function* (next) {
  run(function* () {
    let user = new User({
      name: this.request.body.name
    })

    yield user.save()

    // Update user
    user.set('name',  'updated' + this.request.body.name)
    yield user.save()
  })

  this.body = {status: 'success'}

  yield next
})

// Get users
router.get('/users', function* (next) {
  let userList = []
  let result = []

  run(function* () {
    userList = yield User.all()

    userList.forEach((user, index) => {
      result.push({
        id: user.get('_id').toString()
      })
    })
  })

  function load (callback) {
    setTimeout(function() {
      callback(null, result);
    }, 100);
  }

  this.body = yield load

  yield next
})

module.exports = router