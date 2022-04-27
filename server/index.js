const express = require('express')

const app = express()

const cors = require('cors');

app.use(cors())

const productRouter = require('./routes/productRoute.js')

app.use('/api/products', productRouter)

const PORT = 5000

app.listen(PORT, () => console.log(`Server started in port ${PORT}`))