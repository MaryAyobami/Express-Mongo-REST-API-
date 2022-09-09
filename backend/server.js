const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/tasks/' , require('./routes/taskRoutes'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port, ()=>{
    console.log(`server listening at ${port}`)
})