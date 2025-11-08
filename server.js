const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.listen(3000, function () {
    console.log('listening on 3000')
})

// MongoClient.connect('mongodb-connection-string', (err, client) => {

// })

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/feedback', (req, res) => {
    console.log(req.body)
})