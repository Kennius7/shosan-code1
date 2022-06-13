const express = require("express")
const biodata = require("../sample2");
const router = express.Router()



router.get("/", (req, res) => {
   res.render("newHome", {title: "KBMS | Home", query: req.query})
})
router.get("/home", (req, res) => {
   res.render("newHome", {title: "KBMS | Home", query: req.query})
})

router.use((req, res) => {
   res.status(404)
   res.render("404", {title: "Page Not Found"})
})


module.exports = router;

