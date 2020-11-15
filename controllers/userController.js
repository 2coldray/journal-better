const db = require('../models');
const router = require('express').Router()
router
.route("/api/newroute/:id")
.get((req,res)=>{
   db.User.findById(req.params.id)
   .then(user=>{
       user.populate('notes').exec((err,note)=>{
           res.json({note})
       })
   })
})

router.route("/api/checknotes/:id")
.get((req,res)=>{
    db.Note.findById(req.params.id)
    .then(note=> res.json({note}))
})

module.exports = router;