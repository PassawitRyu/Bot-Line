// Reply with two static messages

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Neeeeeeee
app.get('/status' , (req,res) => {
    reply()
})

app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    reply(reply_token)
    res.sendStatus(200)
})
app.listen(port)
function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {jxMQYqfSif45rA49JnmCDyxg47Weot7j2gEVhtLUvnH0DxgNY0X3+A0hTpEYgUBPAilVbjSRFyuTSctCvBYxR8H3Ur9o2nB+evqIXe+kS+a61rNTXbnAbnEASZh85E9nCGea4q/OgxYFfzPWWgJwNgdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
        {
            type: 'text',
            text: reply_token
        }
        ]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}

