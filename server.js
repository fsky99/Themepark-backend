let express = require("express")
let path = require("path")
const cors = require('cors')

let cookieParser = require("cookie-parser")
let logger = require("morgan")
require("dotenv").config()
require("./config/database")
//routers
let themeParkRouter = require('./routes/themeParks')
let rideRouter = require('./routes/rides')

let app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// app.use(methodOverride('_method'))

//routers
app.use('/themeParks', themeParkRouter);
app.use('/rides',rideRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send("error")
})
app.listen(3000)

module.exports = app
