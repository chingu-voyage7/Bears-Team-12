const { bookshelf } = require('../db')

const Community = bookshelf.Model.extend({
  tableName: 'communities',
  hasTimestamps: false,
  users() {
    return this.belongsToMany('User')
  },
}, {
  byCommunityName(name) {
    return this.forge().query({ where: { name: name } }).fetch()
  }
})

module.exports = bookshelf.model('Community', Community)

/**
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const communitySchema = new Schema({
  name: String,
  description: String,
  body: String,
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category'}],
  admins: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject'}],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdOn: { type: Date, default: Date.now() },
  lastUpdated: { type: Date },
})

module.exports = mongoose.model('communities-community', communitySchema)
 */
