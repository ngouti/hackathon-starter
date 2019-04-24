import fs from 'fs'
import path from 'path'
const rawData = require('./data.json')

const numericKeys = [
  "current_temp",
  "target_temp",
  "outside_temp",
  "heater_val",
  "humidity",
  "pressure",
  "wind_speed",
  "wind_degrees",
  "precip_today",
  "auto_away",
  "local_epoch"
]

const chunkByDay = data =>
  data.reduce((acc, curr) => {
    const time = new Date(curr.time)
    const date = new Date(time.getFullYear(), time.getMonth(), time.getDate())
    const key = date.toISOString()
    const record = transformRecord(curr)
    if (!acc[key]) {
      acc[key] = [record]
    } else {
      acc[key] = [...acc[key], record]
    }
    return acc
  }, {})

const transformRecord = record => {
  Object.keys(record).forEach(key => {
    if (numericKeys.includes(key) && record[key]) {
      record[key] = Number(record[key])
    }
    if (key === 'heater_state') {
      record[key] = record[key] === 'TRUE'
    }
  })
  return record
}

module.exports = chunkByDay(rawData)
