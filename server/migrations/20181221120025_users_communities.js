exports.up = function(knex, Promise) {
  return knex.schema.createTable('communities_users', (table) => {
    table.increments('id').unsigned().primary()
    table.integer('user_id').unsigned().references('users.id')
    table.integer('community_id').unsigned().references('communities.id')
    table.enu('role', ['owner', 'admin', 'member']).defaultTo('member')
    table.timestamp('createdAt', 6).defaultTo(knex.fn.now(6))
    table.timestamp('updatedAt', 6).defaultTo(knex.fn.now(6))
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('communities_users')
}
