import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('pets_categorie', table => {
    table.increments('id').primary();

    table.integer('pet_id')
      .notNullable()
      .references('id')
      .inTable('pets');

    table.integer('categorie_id')
      .notNullable()
      .references('id')
      .inTable('categories');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('pets_categorie');
}