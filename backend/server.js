import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import todoRoutes from './routes/todoRoutes.js'


dotenv.config()

connectDB()

const app=express()

app.get('/',(req,res)=>{
    res.send('api is running')
})

app.use('/api/todos',todoRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console. log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))