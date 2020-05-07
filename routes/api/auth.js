const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')

const User = require('../../models/User')

const router = express.Router()

router.post('/', (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({ email }).then(user => {
    if(!user) return res.status(400).json({ msg: 'User does not exists' });

    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(!isMatch) return res.status(400).json({ msg: 'Incorrect password' });

        jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 }, // seconds -> 1 hour
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              })
            }
          )
      })
  })
})

router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})

module.exports = router;
