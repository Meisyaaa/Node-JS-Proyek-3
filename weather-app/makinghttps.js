const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=fd291c247e7142345af0cd9aa9757d0e&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    // Parse the response body from JSON string into JavaScript object
    const data = JSON.parse(response.body)

    // Will print the current temperature to the console
    console.log(data.current.temperature)
})