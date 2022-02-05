const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

//const app = express()

mongoose
	.connect("mongodb://main_admin:abc123@localhost:27017/dev", { useNewUrlParser: true })
	.then(() => {
	  const app = express()
      
	  app.use("/api", routes)

	  app.listen(3001, () => {
		console.log("Server has started!")
	  })
	})

/*app.get('/', (req, res) => {
  res.send('Hi there!')
});

app.listen(3001, () => {
  console.log("Server has started!")
})*/