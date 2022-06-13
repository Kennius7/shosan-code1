const express = require("express");
const path = require("path");
const homeRoute = require("./public/routes/home.routes");
const aboutRoute = require("./public/routes/about.routes");
const contactRoute = require("./public/routes/about.routes");
const apiRoute = require("./public/routes/about.routes");
const bodyParser = require("body-parser")
const appController = require("./public/controllers/appController");
const router = require("./public/routes/contact.routes");

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/contact", (req, res) => {
    res.render("newContactUs", {title: "KBMS | Contact Us"})
 })

app.post("/contact", urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render("dataPage", {title: "KBMS | Data", data: req.body})
 })


app.use(homeRoute);
app.use(aboutRoute);
app.use(contactRoute);
app.use(apiRoute);

appController(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`);
});

