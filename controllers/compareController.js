const express = require("express");
const router = express.Router();
const db = require("../models");

//TODO: Post Route



//TODO: Get Route
router.get("/api/compareNotes/:id", (req, res) => {
  db.Compare.findOne({ _id: req.params.id }).populate()
    .then((compareNotes) => {
      console.log(compareNotes),
        res.status(200).json({
          error: false,
          data: compareNotes,
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
