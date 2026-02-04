const express = require("express");
const Queue = require("../models/SlotQueue");
const router = express.Router();

const priorityValue = {
    Emergency: 1,
    Senior: 2,
    Normal: 3
};

// Add user
router.post("/add", async (req, res) => {
    const count = await Queue.countDocuments();
    const slot = `${10 + count}:00 - ${10 + count}:10`;

    const user = new Queue({
        name: req.body.name,
        priority: req.body.priority,
        slotTime: slot,
        token: count + 1
    });

    await user.save();
    res.json(user);
});

// Get queue sorted by priority
router.get("/", async (req, res) => {
    const queue = await Queue.find()
        .sort({ priority: 1, token: 1 });
    res.json(queue);
});

// Serve next
router.delete("/serve", async (req, res) => {
    const next = await Queue.findOneAndDelete()
        .sort({ priority: 1, token: 1 });
    res.json(next);
});

module.exports = router;

