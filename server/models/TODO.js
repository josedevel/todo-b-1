const mongoose = require("mongoose")

const schema = mongoose.Schema({
	text: String,
	checked: Boolean,
    deleted: Boolean,
    priority: String,
    time: Date,
    currentTime: Date
})

module.exports = mongoose.model("TODO", schema)