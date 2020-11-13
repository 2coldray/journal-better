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
        db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { notes: newNote._id } }
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

router.get("/api/allNotes/:id", (req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("notes")
    .then((user) => {
      console.log(user.notes);
      let todayNotes = [];
      for (i = 0; i < user.notes.length; i++) {
        if (user.notes[i].datetime === "Wednesday") {
          todayNotes.push(user.notes[i]);
          console.log(todayNotes);
        }
      }
      res.status(200).json({
        error: false,
        data: todayNotes,
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

router.put("/api/note/:id", (req, res) => {
  db.Note.findByIdAndUpdate(
    { _id: req.params.id },
    { user_plans: req.body.user_plans },
    { new: true }
  )
    .then((updatedNote) => {
      res.json({
        error: false,
        data: updatedNote,
        message: "Note Updated",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Fail to update note",
      });
    });
});

router.delete("/api/deleteNote/:id", (req, res) => {
  db.Note.findByIdAndDelete({ _id: req.params.id })
    .then((DeletedNote) => {
      res.json({ error: false, data: DeletedNote, message: "Note delete" });
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

router.post("/api/listitems",(req,res)=>{
  db.
})

module.exports = router;
