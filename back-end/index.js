const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(cors())

app.use(bodyParser.json())


app.post('/signin/facebook', async (req, res) => {

    console.log("data -> ", req.body.user);

    const fbAuth = {
        version: 'v11.0',
        appId: '360631949091496',
        appSec: '6fbc5f8a298d1e27d1ca05dfd8a68633',
        accessToken: req.body.user.accessToken
    }

    try {
        const resp = await axios({
            method: 'get',
            url: `https://graph.facebook.com/v11.0/oauth/access_token?grant_type=fb_exchange_token&client_id=360631949091496&client_secret=6fbc5f8a298d1e27d1ca05dfd8a68633&fb_exchange_token=${req.body.user.accessToken}`
        })
        const result = resp.data
        console.log("result -> ", result);
    } catch (err) {  }
})

app.listen(4000, () => console.log('Server is running'))