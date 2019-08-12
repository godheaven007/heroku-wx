const express = require('express')
const app = express()
const sha1 = require('sha1')


app.get('/', (req, res) => {
    console.log(888);
    console.log(req.params);
    res.send('test222');
});


let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})

