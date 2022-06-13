const express = require("express")
const router = express.Router()
const biodata = require("../sample2");


router.get("/api/members", (req, res) => {
    res.json(biodata)
 })
 router.get("/api/members/:id", (req, res) => {
    const found = biodata.some(member => member.id === parseInt(req.params.id));
 
    if (found) {
            res.json(biodata.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400)
        res.json( { msg: `No member with the id of ${req.params.id}` } )
    }
 })


 module.exports = router;