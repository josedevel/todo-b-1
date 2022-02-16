var ObjectId = require('mongoose').Types.ObjectId;
const express = require("express")
const TODO = require("./models/TODO")
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hi there!')
});

// Get all TODOS
router.get("/todos", async (req, res) => {
  const todos = await TODO.find({
    currentTime: {
      "$gte": new Date(req.query.date),
      "$lt": new Date(new Date(req.query.date).getFullYear(), new Date(req.query.date).getMonth(), new Date(req.query.date).getDate()+1)
    }
  })
  res.send(todos)
})

router.post("/todo", async (req, res) => {
  const newTODO = new TODO({
    text: req.body.text,
    checked: req.body.checked,
    deleted: req.body.deleted,
    priority: req.body.priority,
    time: req.body.time,
    currentTime: req.body.currentTime,
  })
  await newTODO.save()
  res.send(newTODO)
})

router.patch('/todo/:id', async (req, res) => {
  try {
    const todo = await TODO.findById(req.params.id)

    if (req.body.text) {
      todo.text = req.body.text
    }

    if (typeof req.body.checked !== 'undefined') {
      todo.checked = req.body.checked
    }

    if (typeof req.body.deleted !== 'undefined') {
      todo.deleted = req.body.deleted
    }

    if (req.body.priority) {
      todo.priority = req.body.priority
    }

    await todo.save()
	res.send(todo)
  } catch {
    res.status(404)
    res.send({ error: "TODO doesn't exist!" })
  }
})

module.exports = router