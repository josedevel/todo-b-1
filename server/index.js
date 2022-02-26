const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const cors = require('cors')

mongoose
	//.connect("mongodb://main_admin:abc123@localhost:27017/dev", { useNewUrlParser: true })
	.connect("mongodb://localhost:27017/dev", { useNewUrlParser: true })
	.then(() => {
	  const app = express()

	  app.use(cors())
      app.use(express.json())
      app.use("/api", routes)

	  app.listen(3001, () => {
		console.log("Server has started!")
	  })
	})
