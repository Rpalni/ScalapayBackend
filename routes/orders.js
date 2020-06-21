var express = require('express');
var ordersRouter = express.Router();
const requestpromise = require('request-promise');
var config = require('../config.json');

ordersRouter.post('/orders', async (req, res) => {
    try {
        const options = {
            method: 'POST',
            uri: 'https://staging.api.scalapay.com/v2/orders',
            body: req.body,
            json: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + config.token
            }
        }
        requestpromise(options).then(function (response) {
            res.status(200).json(response);
        })
    } catch (error) {
        res.json(error)
    }
});

module.exports = ordersRouter;
