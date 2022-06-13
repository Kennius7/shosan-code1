const express = require("express")
const path = require("path")
// const fs = require("fs")
const ejs = require("ejs")
// const homeRoutes111 = require("./public/routes/home.routes")

const app = express();

// app.use("/", homeRoutes111)

app.use(express.static(path.join(__dirname, "public")))
app.use("views", path.join(__dirname, "view"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")

// app.get("/newHome.html", (req, res) => {
//     const homePath1 = path.join(__dirname, "newHome.html");
//     const readHome1 = fs.readFileSync(homePath1, "utf-8");
//     res.send(readHome1);
// })
// app.get("/newAboutUs.html", (req, res) => {
//     const aboutPath1 = path.join(__dirname, "newAboutUs.html");
//     const readAbout1 = fs.readFileSync(aboutPath1, "utf-8");
//     res.send(readAbout1);
// })
// app.get("/newContactUs.html", (req, res) => {
//     const contactPath1 = path.join(__dirname, "newContactUs.html");
//     const readContact1 = fs.readFileSync(contactPath1, "utf-8");
//     res.send(readContact1);
// })


// app.post("/newContactUs", (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// })

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

