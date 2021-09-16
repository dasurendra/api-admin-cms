import express from 'express'
const app = express()
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
const PORT = process.env.PORT || 8000

//database

//middleware
app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))

//router
app.use('/', (req, res) => {
    res.send('you have reach the ned of the  router list')
})

app.listen(PORT, (error) => {
    if (error) {
        return console.log(error)
    }

    console.log(`Server is running at http://localhost:${PORT}`)
})
