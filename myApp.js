let express = require('express');
let app = express();


// Define a logger middleware function
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
};

// Mount the logger middleware at the root level
app.use(logger);

app.get('/json', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.get("/", (req, res) => {
    res.json({"message": "Hello json"})
});

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
