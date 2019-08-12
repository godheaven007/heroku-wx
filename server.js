const express = require('express')
const app = express()
const sha1 = require('sha1')


app.get('/', (req, res) => {
    console.log(req.query);
    let { signature, timestamp, nonce, echostr} = req.query;
    let token = 'mmp';
    let arr = [token, timestamp, nonce];
    let pwd = sha1(arr.sort().join(''));

    console.log(pwd);

    if(pwd == signature && echostr) {
        res.send(echostr);
    }
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
})

