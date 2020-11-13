const express = require("express");
const router = express.Router();
const db = require("../models");

//TODO: Post Route
router.post("/api/addCompare/:id", (req, res) => {
  const { name, time_stamp, user_plans } = req.body;
  if (!name.trim()) {
    res.status(400);
  } else {
    db.Compare.create({
      name: name,
      time_stamp: time_stamp,
      user_plans: user_plans,
    })
      .then((newCompare) => {
        db.Note.findByIdAndUpdate(
          { _id: req.params.id },
          { compare: newCompare }
        )
          .then((response) => {
            console.log(response);
            res.status(200).send("Note added");
          })
          .catch((err) => {
            console.log(err);
            res.status(401).json({
              error: true,
              data: null,
              message: "Unable to add Note",
            });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Couldn't make note",
        });
      });
  }
});

//TODO: Get Route
router.get("/api/compareNotes/:id", (req, res) => {
  db.Note.findOne({ _id: req.params.id })
    .populate("compare")
    .then((compareNotes) => {
        res.status(200).json({
          error: false,
          data: compareNotes.compare,
          message: "Retrieved Compare Notes",
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Could not retrieve Compared Note",
      });
    });
});

//TODO: Put Route

//TODO: Delete Route
router.delete("/api/deleteCompare/:id", (req, res) => {
  db.Compare.findByIdAndDelete({ _id: req.params.id })
    .then((comparedNote) => {
      res.json({ error: false, data: comparedNote, message: "Note delete" });
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
