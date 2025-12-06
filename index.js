const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


var username = "harish@gmail.com"
var password = 1230


app.post("/login", function (req, res) {


    if (req.body.username === username && Number(req.body.password) === password) {
        res.send(true)
    }
    else {
        res.send(false)
    }
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

