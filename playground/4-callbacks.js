setTimeout(() => {
    console.log('Two second are up')
}, 2000)

const names = ['Meisya', 'Puteri', 'Ghefira']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

// geocode(address, (error, data) => {
//     if (error) {
//         return console.log(error)
//     }
    
//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//         if (error) {
//             return console.log(error)
//     }
    
//         console.log(data.location)
//         console.log(forecastData)
//     })
// })