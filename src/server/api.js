import express from 'express'
import fs from 'fs'
import { eachDay } from 'date-fns'
import data from './data'

const app = express()

const getKeyFromDate = date => new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate()
).toISOString()

app.get('/thermostat', async (req, res) => {
  if (!req.query.startDate || !req.query.endDate) {
    return res.send(`One or more required query parameter(s) could not be found. Please include both startDate and endDate.`).status(400)
  }

  const startDate = new Date(req.query.startDate)
  const endDate = new Date(req.query.endDate)

  const keys = eachDay(startDate, endDate).map(getKeyFromDate)
  const response = keys.reduce((acc, curr) => {
    return [...acc, ...data[curr]]
  }, [])

  if (!response) {
    return res.send(`No data found for provided date`).status(404)
  }

  res.json(response).status(200)
})

app.get('*', (req, res) => {
  res.send(`Invalid request.`).status(400)
})

export default app
