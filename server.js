const express = require('express')
const app = express()
const sha1 = require('sha1')


app.get('/', (req, res) => {
    res.send('test');
});


let port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`listening on port ${port}!`)
})

