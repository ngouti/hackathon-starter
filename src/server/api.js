import express from 'express'

const app = express()

app.get('/foo', (req, res) => {
  res.json({ success: true, bar: 'baz', age: 30 })
})

app.get('*', (req, res) => res.sendStatus(404))

export default app
