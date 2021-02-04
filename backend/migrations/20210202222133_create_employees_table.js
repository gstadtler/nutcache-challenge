exports.up = knex => knex.schema.createTable('employees', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.date('birthDate').notNullable();
    table.string('gender').notNullable();
    table.string('email').notNullable();
    table.bigInteger('cpf', 11).unique().notNullable();
    table.string('startDate').notNullable();
    table.string('team');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('employees');