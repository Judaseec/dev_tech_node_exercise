import express from "express"
import env from "./config.js"
import userRouter from "./routes/users.js"
import cors from 'cors'

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(userRouter)

app.listen(env.SERVER_PORT, () => {
    console.log(`Server is listening at http://localhost:${env.SERVER_PORT}`)
})