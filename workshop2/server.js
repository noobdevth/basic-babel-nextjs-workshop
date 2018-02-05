import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World ! workshop2 : .babelrc")
}
)

app.listen(3000)

console.log("http://localhost:3000")