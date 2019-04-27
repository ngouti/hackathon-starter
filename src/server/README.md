# hackathon-basic-api

A simplistic API that serves data collected from a smart thermostat, built with [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/). By default, the application listens for requests on port `5000`.

## Dataset 

The application serves a dataset collected between February 2016 to March 2019 from a smart thermostat. Each record in the collection contains various pieces of data, such as temperature, pressure, humidity and more. See the endpoint response below for more information. 

## API

There is only a single endpoint exposed by this application.

### `GET /api/thermostat`

#### Params:
**`startDate`** - a date string in [simplified extended ISO format](https://en.wikipedia.org/wiki/ISO_8601)

**`endDate`** - a date string in [simplified extended ISO format](https://en.wikipedia.org/wiki/ISO_8601)

#### Response: 
```json
[
  ...,
  {
    "time": String,
    "current_temp": Number,
    "target_temp": Number,
    "outside_temp": Number,
    "heater_val": Number,
    "humidity": Number,
    "outside_humiity": String,
    "pressure": Number,
    "weather": String,
    "wind_speed": Number,
    "wind_degrees": Number,
    "precip_today": Number,
    "solar_radiation": String,
    "heater_state": Boolean,
    "auto_away": Number,
    "local_epoch": Number,
    "local_tz_short": String
  },
  ...
]
```
