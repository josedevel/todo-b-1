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

module.exports = router