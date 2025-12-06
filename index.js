const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


var username = "harish"
var password = 1230


app.get("/login", function (req, res) {

    console.log(req.query.username)
    console.log(req.query.password)

    if (req.query.username === username && Number(req.query.password) === password) {
        res.send(true)
    }
    else {
        res.send(false)
    }
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

