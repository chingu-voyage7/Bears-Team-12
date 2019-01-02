/**
 * This serves as an example on how to add a new column
 * to an existing table, in this case we add the column
 * email, to our existing users table
 */
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('location').nullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('location')
  })
}
