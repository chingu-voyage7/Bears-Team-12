const { bookshelf } = require('../db');

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: false,
  communities() {
    return this.belongsToMany('Community')
  }
}, {
  byDisplayName(displayName) {
    return this.forge().query({ where: { display_name: displayName } }).fetch()
  }
})

module.exports = bookshelf.model('User', User)
