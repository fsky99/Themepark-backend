const ThemePark = require("../models/themePark")

module.exports = {
  findAllThemePark,
  FindThemePark,
  createThemePark,
  updateThemePark,
  deleteThemePark,
}

//find all theme parks
async function findAllThemePark(req, res) {
  const themeParks = await ThemePark.find({})
  res.send(themeParks)
}
//find specific theme park
async function FindThemePark(req, res) {
  const themePark = await ThemePark.findById(req.params.id).populate("ridesIds");
  res.send(themePark)
}

// create theme park
async function createThemePark(req, res) {
  try {
    await ThemePark.create(req.body)
    res.send("Theme Park Created")
  } catch (err) {
    console.log("This is the error!!!" + err)
    res.send({ errorMsg: err.message })
  }
}
// update theme park
async function updateThemePark(req, res) {
  try {
    await ThemePark.findByIdAndUpdate(req.params.id, req.body)
    res.send("Theme Park Updated")
  } catch (error) {
    console.log("This is the error!!!" + err)
    res.send({ errorMsg: err.message })
  }
}
// delete theme park
async function deleteThemePark(req, res) {
  try {
    await ThemePark.findByIdAndDelete(req.params.id)
    res.send("Theme Park Deleted")
  } catch (error) {
    console.log("This is the error!!!" + err)
    res.send({ errorMsg: err.message })
  }
}
