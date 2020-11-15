const express = require("express");
const router = express.Router();
const db = require("../models");
const {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  subDays,
  subMonths,
} = require("date-fns");

// Dates structure
// ----------------------------------------------------------------------------------------
// TODO: Get Internet time and put into this context
const Today = format(new Date(), "PPP");
const StartofWeek = startOfWeek(new Date());
const EndofWeek = endOfWeek(new Date());
const FullWeek = eachDayOfInterval({ start: StartofWeek, end: EndofWeek });
const FormattedWeek = FullWeek.map((day) => format(day, "PPP"));
const CurrentMonth = format(new Date(), "MMMM");

// TODO: Calculate past week
const LastWeekEndDate = subDays(StartofWeek, 1);
const LastWeekStartDate = startOfWeek(LastWeekEndDate);
const LastWeek = eachDayOfInterval({
  start: LastWeekStartDate,
  end: LastWeekEndDate,
});
const FormattedLastWeek = LastWeek.map((day) => format(day, "PPP"));

// TODO: Calculate past month
const LastMonth = subMonths(new Date(), 1);
const FormattedLastMonth = format(LastMonth, "MMMM");
// -------------------------------------------------------------------------------------------

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
          .then((emptyUser) => {
            // console.log(user.notes);
            db.User.findById(req.params.id)
              .populate("notes")
              .then((user) => {
                console.log(user.notes);
                res.status(200).json({
                  error: false,
                  data: user.notes,
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

router.get("/api/WeekNotes/:id", (req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("notes")
    .then((user) => {
      const notes = user.notes.filter(
        (note) => note.datetime === req.body.datetime
      );
      console.log(notes);
      res.status(200).json({
        error: false,
        data: notes.splice(0, 2),
        message: "Here you go",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: err,
        message: "Something went wrong",
      });
    });
});

router.get("/api/TodayNotes/:id", (req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("notes")
    .then((user) => {
      const todayNotes = user.notes.filter((note) => note.datetime === Today);
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

router.route("/api/weekNotes/:id/:datetime").get((req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("notes")
    .then((user) => {
      const notes = user.notes.filter(
        (note) => note.datetime === req.params.datetime
      );
      console.log(notes);
      res.status(200).json({
        error: false,
        data: notes.splice(0, 2),
        message: "Here you go",
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
