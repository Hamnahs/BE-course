let express = require('express');
let app = express();


const logger = (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
};

app.get("/", logger, (req, res) => {
    res.sendFile('/views/index.html');
});
app.get("/json", logger, (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase")
        res.json({
            message: "Hello json".toUpperCase()
        });
    else
        res.json({
            message: "Hello json"
        });
});





app.get("/json", (req, res) => {
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message = message.toUpperCase();
    }
    res.json({
        message: message
    });

});

module.exports = app;
