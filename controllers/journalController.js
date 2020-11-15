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



// -------------------------------------------------------------------------------------------
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
// ---------------------------------------------------------------------------------




// ----------------------------------------------------------------------------------
// Read(GET) Routes

// Gets One Journal Entry for that day
router.route("/api/getEntries/:id/:datetime").get((req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("journal")
    .then((user) => {
      // console.log(user);
      const entries = user.journal.filter(
        (entry) => entry.datetime === req.params.datetime
      );
      // console.log(entries);
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
      res.status(200).json({
        error: false,
        data: user.journal,
        message: "Here you go",
      });
    })
    .catch((err) => console.log(err));
});

router.route("/api/Today/:id/getEntry").get((req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("journal")
    .then((user) => {
      // console.log(user);
      // console.log(Today);
      const entries = user.journal.filter(
        (entry) => entry.datetime === Today
      );
      // console.log(entries);
      res.status(200).json({
        error: false,
        data: entries,
        message: "Here you go",
      });
    })
    .catch((err) => console.log(err));
});

router.route("/api/ThisWeek/:id/getEntries").get((req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("journal")
    .then((user) => {
      const intersection = [
        ...new Set(
          user.journal.filter((element) =>
            FormattedWeek.includes(element.datetime)
          )
        ),
      ];
      // console.log(intersection);
      res.json({
        error: false,
        data: intersection,
        message: "Looks good",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/api/LastWeek/:id/getEntries").get((req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("journal")
    .then((user) => {
      const intersection = [
        ...new Set(
          user.journal.filter((element) =>
            FormattedLastWeek.includes(element.datetime)
          )
        ),
      ];
      // console.log(intersection);
      res.json({
        error: false,
        data: intersection,
        message: "Looks good",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/api/CurrentMonth/:id/getEntries").get((req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("journal")
    .then((user) => {
      // console.log(user);
      // console.log(CurrentMonth);
      const entries = user.journal.filter(
        (entry) => entry.datetime.split(" ").includes(CurrentMonth)
      );
      // console.log(entries);
      res.status(200).json({
        error: false,
        data: entries,
        message: "Here you go",
      });
    })
    .catch((err) => console.log(err));
});

router.route("/api/LastMonth/:id/getEntries").get((req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("journal")
    .then((user) => {
      // console.log(user);
      console.log(LastMonth);
      const entries = user.journal.filter(
        (entry) => entry.datetime.split(" ").includes(LastMonth)
      );
      // console.log(entries);
      res.status(200).json({
        error: false,
        data: entries,
        message: "Here you go",
      });
    })
    .catch((err) => console.log(err));
});

// ----------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------------



// -----------------------------------------------------------------------------------
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
// ------------------------------------------------------------------------------------
module.exports = router;
