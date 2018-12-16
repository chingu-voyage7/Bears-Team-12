const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subjectSchema = new Schema({
  name: String,
  description: String,
  body: String,
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category'}],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  articles: [{ type: Schema.Types.ObjectId, ref: 'Article'}],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdOn: { type: Date, default: Date.now() },
  lastUpdated: { type: Date },
})

module.exports = mongoose.model('communities-subject', subjectSchema)
