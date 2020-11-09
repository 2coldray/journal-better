const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/addNote/:id", (req, res) => {
  const { name, datetime, user_plans } = req.body;

  console.log(req.body);
  if (!name.trim()) {
    res.status(400);
  } else {
    db.Note.create({
      name: name,
      datetime: datetime,
      user_plans: user_plans,
    })
      .then((newNote) => {
        db.User.findOneAndUpdate({ _id: req.params.id }, {$push: { notes: newNote._id }})
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

router.get("/api/allNotes/:id", (req, res) => {
  db.User.findOne({ id: req.params.id })
    .then((user) => {
      console.log(user);
      res.status(200).json({
        error: false,
        data: user,
        message: "User notes connected to them",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Messed up. Try again",
      });
    });
});

module.exports = router;
