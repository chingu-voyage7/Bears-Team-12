/**
 * This is how you create a new table, it allows us
 * to keep track of our migrations.
 * You can run the migrations with the command
 * knex migrate:latest
 */
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id').unsigned().primary()
      table.string('displayName').notNull()
      table.string('email', 64).notNull()
      table.string('facebookId').nullable()
      table.string('googleId').nullable()
      table.timestamp('createdAt', 6).defaultTo(knex.fn.now(6))
      table.timestamp('updatedAt', 6).defaultTo(knex.fn.now(6))
    })
}

/**
 * This function is used by knex to drop the database
 * in case we decide to do a rollback
 */
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
