var express = require('express');
var configurationRouter = express.Router();
const request = require('request');
var config = require('../config.json');

configurationRouter.get('/configurations', async (req, res) => {
    try {
        request.get({
            uri: 'https://staging.api.scalapay.com/v2/configurations',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + config.token
            },
        }, (error, response, body) => {
            debugger

            const data = JSON.parse(body)
            res.json(data)
        })

    } catch (error) {
        res.json(error)
    }
})

module.exports = configurationRouter;