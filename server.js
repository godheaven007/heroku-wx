const express = require('express')
const app = express()
const sha1 = require('sha1')


app.get('/', (req, res) => {
    console.log(req.query);
    res.send('test222');
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})

