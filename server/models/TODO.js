const mongoose = require("mongoose")

const schema = mongoose.Schema({
	text: String,
	checked: Boolean,
    deleted: Boolean,
    priority: String,
    time: Number
})

module.exports = mongoose.model("TODO", schema)