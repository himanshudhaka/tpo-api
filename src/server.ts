// import prisma from './db'
import express from 'express'
import companiesRoute from './routes/companiesRoute'
const app = express()
// const router = express.Router()

app.use(express.json())

app.use('/companies',companiesRoute);

app.listen(3000, () => {
    console.log(`Example app listening on port`)
  })