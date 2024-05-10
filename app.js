import express from 'express'
// import routes from './routes/routes.js'
const app = express()

app.use(express.static('public')) // static public folder
// app.use('/api/v1/employees', routes)
app.get('/', (req, res) => {
    // public/index.html
    res.sendFile('index.html', { root: 'public' })
})
const PORT = 5000
app.listen(PORT, () => console.log(`Listening at localhost:${PORT}`))