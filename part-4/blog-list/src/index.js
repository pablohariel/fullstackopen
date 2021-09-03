import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { MONGODB_URI, PORT } from './utils/config.js'
import { info, error } from './utils/logger.js'
import { blogsRouter } from './controllers/blog.js'

const app = express()
mongoose.connect(MONGODB_URI)
  .then(() => {
    info('connected to MongoDB')
  })
  .catch((error) => {
    error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

app.listen(PORT, () => {
  info(`Server running on port ${PORT}`)
})