const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  facebookId: String,
  googleId: String,
  displayName: String,
  familyName: String,
  givenName: String,
  photo: String,
  bio: String,
  email: String,
  location: String,
  dateCreated: { type: Date, default: Date.now() },
  lastUpdated: { type: Date }
})

module.exports = mongoose.model('communities-user', userSchema)
