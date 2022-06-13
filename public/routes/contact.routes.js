const express = require("express")
const router = express.Router()


router.get("/contact", (req, res) => {
    res.render("newContactUs", {title: "KBMS | Contact Us"})
 })

 router.post("/contact", (req, res) => {
    console.log(req.body);
    res.send(req.body);
 })

module.exports = router;
