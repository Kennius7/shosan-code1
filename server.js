const {createServer, STATUS_CODES} = require("http")
const {data22} = require("./sample2");
const path = require("path");
const fs = require("fs");
console.log(STATUS_CODES);

const server = createServer((req, res) => {
    switch (req.url) {
        case "/":
            const readHtmlPath = path.join(__dirname, "index.html")
            const readHtmlFile = fs.readFileSync(readHtmlPath, "utf-8")

            res.writeHead(200, { "content-type": "text/html" })
            res.write(readHtmlFile)
            res.end()
            break;

        case "/students":
            res.writeHead(200, { "content-type": "text/html" })
            res.write(JSON.stringify(data22))
            res.end()
            break;
    
        case "/about":
            res.writeHead(200, { "content-type": "text/html" })
            res.write("<h3>Empetree!!!</h3>")
            res.end()
            break;

        case "/homepage":
            res.writeHead(200, { "content-type": "text/html" })
            res.write()
            res.end()
            break;

        default:
            res.writeHead(404, { "content-type": "text/html" })
            res.write("<h1>Sorry, the page you're looking for, doesn't exist</h1>")
            res.end()
            break;
    }
});

server.listen(5000, () => {
    console.log("Server is running on http://localhost:5000/")
})






