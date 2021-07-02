import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('pets', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('cellphone').notNullable();
    table.string('gender').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
    table.string('image').notNullable();
    table.string('additionalInfo').notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('pets');
}