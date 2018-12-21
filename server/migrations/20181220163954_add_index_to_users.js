/**
 * This is an example on how to add an index to an existing
 * column in one of our tables. An index is a data structure 
 * that improves the speed of data retrieval operations
 */
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.index(['displayName', 'email'])
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropIndex(['displayName', 'email'])
  })
}
