const express = require('express')
const mongoose = require('mongoose')
const auth = require('../../middleware/auth')

const Item = require('../../models/Item')

const router = express.Router()

router.get('/', auth, (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

router.post('/', auth, (req, res) => {
  const newItem = new Item({ name: req.body.name })

  newItem.save()
    .then(item => res.json(item))
    .catch(err => { throw err })
})

router.delete('/:id', auth, (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(() => res.json({ success: true }))
    .catch((err) => {
      console.log(err)
      res.status(404).json({ success: false })
    })
})

// add update

module.exports = router;
