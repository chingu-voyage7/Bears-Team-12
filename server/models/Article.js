const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  name: String,
  description: String,
  body: String,
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category'}],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdOn: { type: Date, default: Date.now() },
  lastUpdated: { type: Date },
  master: Boolean,
})

module.exports = mongoose.model('communities-article', articleSchema)
