const mongoose = require('mongoose')
const Schema = mongoose.Schema

const communitySchema = new Schema({
  name: String,
  owner: String,
  admins: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('communities-community', communitySchema)
