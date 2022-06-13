const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    const homePath2 = path.join(__dirname, "newHome.html");
    const readHome2 = fs.readFileSync(homePath2, "utf-8");
    res.send(readHome2);
})




const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})