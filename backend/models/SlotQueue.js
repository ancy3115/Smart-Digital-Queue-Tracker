const mongoose = require("mongoose");

const slotQueueSchema = new mongoose.Schema({
    name: String,
    priority: String, // Normal | Senior | Emergency
    slotTime: String,
    token: Number
});

module.exports = mongoose.model("SlotQueue", slotQueueSchema);
