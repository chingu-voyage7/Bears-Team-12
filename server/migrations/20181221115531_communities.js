exports.up = function(knex, Promise) {
  return knex.schema.createTable('communities', (table) => {
    table.increments('id').unsigned().primary()
    table.string('name').notNull()
    table.string('description').nullable()
    table.timestamp('createdAt', 6).defaultTo(knex.fn.now(6))
    table.timestamp('updatedAt', 6).defaultTo(knex.fn.now(6))
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('communities')
}
