const express = require("express")
const router = express.Router()


router.get("/about", (req, res) => {
    res.render("newAboutUs", {title: "KBMS | About Us"})
 })


module.exports = router;