const express = require("express")
const TODO = require("./models/TODO")
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hi there!')
});

// Get all TODOS
router.get("/todos", async (req, res) => {
  const todos = await TODO.find()
  res.send(todos)
})

router.post("/todo", async (req, res) => {
  const newTODO = new TODO({
    text: req.body.text,
    checked: req.body.checked,
    deleted: req.body.deleted,
    priority: req.body.priority,
    time: req.body.time,
  })
  await newTODO.save()
  res.send(newTODO)
})

module.exports = router