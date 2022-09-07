require('dotenv').config()

const express = require('express')
const WorkoutRoutes= require('./routes/workouts')
const Mongoose = require('mongoose')
const { default: mongoose } = require('mongoose')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, res.method)
    next()
} )

app.use('/api/workouts', WorkoutRoutes)

mongoose.connect(process.env.mongo_URI)
.then(() => {
    app.listen(process.env.PORT, () => {console.log('listning on port', process.env.PORT)})
})



