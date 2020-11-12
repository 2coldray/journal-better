const express = require("express");
const router = express.Router();
const db = require("../models");

// Create Route
// TODO: make a check that prevents User from putting a journal entry where a date from that journal entry already exists 
router.post("/api/addEntry/:id", (req, res) => {
  const { datetime, entry } = req.body;
  if (!entry.trim()) {
    res.status(400);
  } else {
    db.JournalEntry.create({
      entry: entry,
      datetime: datetime,
      user: req.params.id,
    })
      .then((newEntry) => {
        db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { journal: newEntry._id } }
        )
          .then((response) => {
            console.log(response);
            res.status(200).send("Journal Entry Added");
          })
          .catch((err) => {
            console.log(err);
            res.status(401).json({
              error: true,
              data: null,
              message: "Unable to add Journal Entry",
            });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Couldn't make journal entry",
        });
      });
  }
});

// Read Routes

// Gets One Journal Entry for that day
router.route("/api/getEntries/:id/:datetime").get((req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("journal")
    .then((user) => {
      console.log(user);
      const entries = user.journal.filter(
        (entry) => entry.datetime === req.params.datetime
      );
      console.log(entries);
      res.status(200).json({
        error: false,
        data: entries,
        message: "Here you go",
      });
    })
    .catch((err) => console.log(err));
});

// Gets All Journal Entries
router.route("/api/getEntries/:id").get((req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("journal")
    .then((user) => {
      console.log(user);
      res.status(200).json({
        error: false,
        data: user.journal,
        message: "Here you go",
      });
    })
    .catch((err) => console.log(err));
});

// Update Route
router.put("/api/JournalEntry/:id", (req, res) => {
  db.JournalEntry.findByIdAndUpdate(
    { _id: req.params.id },
    { entry: req.body.entry },
    { new: true }
  )
    .then((updatedEntry) => {
      res.status(200).json({
        error: false,
        data: updatedEntry,
        message: "Entry Updated",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Fail to update entry",
      });
    });
});

// Delete Route
router.delete("/api/deleteEntry/:id", (req, res) => {
  db.JournalEntry.findByIdAndDelete({ _id: req.params.id })
    .then((deletedEntry) => {
      res.json({ error: false, data: deletedEntry, message: "Entry delete" });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Messed up. Try again",
      });
    });
});

module.exports = router;

