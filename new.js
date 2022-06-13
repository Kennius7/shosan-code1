
const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express")

const app = express();
app.use(express.static(path.join(__dirname, "public")))

const server = http.createServer((req, res) => {
    if (req.url == "/") {
    res.write(fs.readFileSync(path.join(__dirname, "public", "new.html"), "utf8"));
    res.end()
    }
    else if (req.url == "/about") {
    res.write(fs.readFileSync(path.join(__dirname, "public", "newAbout.html"), "utf8"));
    res.end()
    }
    else {
        res.write("Page not found")
        res.end()
    }
})


const PORT = process.env.PORT || 5050;
server.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
})

