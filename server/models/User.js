const bookshelf = require('../db');

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: false,
}, {
  byDisplayName(displayName) {
    return this.forge().query({ where: { display_name: displayName } }).fetch()
  }
})

const Users = bookshelf.Collection.extend({  
  model: User
})

module.exports = {
  User,
  Users,
}

/**
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
*/
