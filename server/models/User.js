const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  createdCommunities: [{ type: Schema.Types.ObjectId, ref: 'Community'}],
  memberships: [{ type: Schema.Types.ObjectId, ref: 'Community'}],
  dateCreated: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('communities-user', userSchema)
