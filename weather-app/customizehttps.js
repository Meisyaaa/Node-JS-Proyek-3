const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=fd291c247e7142345af0cd9aa9757d0e&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log("It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + " % chance of rain.")
})