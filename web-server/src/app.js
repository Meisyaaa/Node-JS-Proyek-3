const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// app.get('', (req, res) => {
//     res.send('Hello express!')
// })

// app.get('/weather', (req, res) => {
//     res.send('Your weather')
// })

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup sstatic directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Meisya'
    })
})

app.get('*', (req, res) => {
    res.send('404', {
        title: '404',
        name: 'Meisya Puteri',
        errorMessage:'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})