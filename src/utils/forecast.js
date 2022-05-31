const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const token = '?access_key=20791fbf9dc5d3acbaafae1295186548'
    const units = '&units=f'
    const query = '&query=' + latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current' + token + query + units
   
    request({ url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (error) {
            callback('Invalid coordinates', undefined)
        } else {
            callback(undefined, 
                'The current weather is ' + body.current.weather_descriptions[0] +
                    '. The temperature is ' + body.current.temperature +
                    ' and it feels like ' + body.current.feelslike + '.'
            )
            //         {
            //     temp: body.current.temperature,
            //     feelsLike: body.current.feelslike,
            //     desc: body.current.weather_descriptions[0]
            // })
        }
    })
}

module.exports = forecast