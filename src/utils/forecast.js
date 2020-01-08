const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/05d37f6f5c1258ebe22d5f1c3ebe2ba9/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.' + ' Temperature low will be: ' + body.daily.data[0].temperatureHigh + ' Temperature low will be: ' + body.daily.data[0].temperatureLow)
        }n
    })
}

module.exports = forecast