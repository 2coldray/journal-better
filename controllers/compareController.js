const express = require("express");
const router = express.Router();
const db = require("../models");

//TODO: Post Route
router.post("/api/addCompare/:id", (req, res) => {
  const { name, datetime, user_plans } = req.body;
  console.log(req.body);
  if (!name.trim()) {
    res.status(400);
  } else {
    db.Compare.create({
      name: name,
      datetime: datetime,
      user_plans: user_plans,
    })
      .then((newCompare) => {
        db.User.findByIdAndUpdate(
          { _id: req.params.id },
          { $push: { compare: newCompare._id } }
        )
          .then((response) => {
            db.User.findById(req.params.id)
              .populate("compare")
              .then((user) => {
                console.log(user.compare);
                const AccurateCompare = user.compare.filter(
                  (note) => note.datetime === datetime
                );
                res.status(200).json({
                  error: false,
                  data: AccurateCompare,
                  message: "Note added",
                });
              });
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
router.get("/api/compareNotes/:id/:datetime", (req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("compare")
    .then((user) => {
      const currentNotes = user.compare.filter((note) => note.datetime === req.params.datetime);
      res.status(200).json({
        error: false,
        data: currentNotes,
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
  console.log(req.params.id)
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
