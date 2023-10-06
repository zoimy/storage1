const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.route")
const app = express()
const PORT = config.get('serverPort')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)


const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://zoimy:zoimy@cluster0.piacz5y.mongodb.net/', {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()