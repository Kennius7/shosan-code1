const { createServer, STATUS_CODES } = require("http");
const path = require("path");
const fs = require("fs");
console.log(STATUS_CODES);

const server = createServer((req, res) => {
    switch (req.url) {
        case "/":
            const homePath = path.join(__dirname, "newHome.html");
            const readHome = fs.readFileSync(homePath, "utf-8");
            res.writeHead(200, { "content-type": "text/html" })
            res.write(readHome)
            res.end()
            break;

        case "/newAboutUs":
            const aboutPath = path.join(__dirname, "newAboutUs.html");
            const readAbout = fs.readFileSync(aboutPath, "utf-8");
            res.writeHead(200, { "content-type": "text/html" })
            res.write(readAbout)
            res.end()
            break;
    
        case "/newContactUs":
            const contactPath = path.join(__dirname, "newContactUs.html");
            const readContact = fs.readFileSync(contactPath, "utf-8");
            res.writeHead(200, { "content-type": "text/html" })
            res.write(readContact)
            res.end()
            break;
            
        default:
            res.writeHead(404, { "content-type": "text/html" })
            res.write("<h1>Sorry, the page you're looking for, doesn't exist</h1>")
            res.end()
            break;
    }
});

server.listen(5000,() => {
    console.log("Server is running on http://localhost:5000/");
})


