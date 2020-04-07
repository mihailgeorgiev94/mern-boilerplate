const express = require('express')
const mongoose = require('mongoose')

const Item = require('../../models/Item')

const router = express.Router()

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

router.post('/', (req, res) => {
  const newItem = new Item({ name: req.body.name })

  newItem.save()
    .then(item => res.json(item))
    .catch(err => { throw err })
})

router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(() => res.json({ success: true }))
    .catch((err) => {
      console.log(err)
      res.status(404).json({ success: false })
    })
})

module.exports = router;
