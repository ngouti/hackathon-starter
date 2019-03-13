import express from '@arundo/express-starter'
import api from './api'

const app = express()
app.use('/api', api)

app.start()
