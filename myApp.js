let express = require('express');
let app = express();

// Define a root-level logger middleware
app.use(function middleware(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    console.log("I'm a middleware...");
    next();
});

// Define your routes
app.get('/json', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// app.get("/", (req, res) => {
//     res.json({"message": "Hello json"})
// });

// app.get("/json", (req, res) => {
//         let response;
//         if (process.env.VAR_NAME === "allCaps") {
//             response = "Hello World".toUpperCase();
//         } else {
//             response = "Hello World";
//         }
//         res.json({message: response})
//     }
// )


// app should not serve files from any other folders except from /public directory
// app.use("/public", express.static(__dirname + "/public"))


module.exports = app;
