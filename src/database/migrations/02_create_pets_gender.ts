import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('pets_gender', table => {
    table.increments('id').primary();


    table.integer('pet_id')
      .notNullable()
      .references('id')
      .inTable('pets');

    table.integer('gender_id')
      .notNullable()
      .references('id')
      .inTable('genders');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('pets_gender');
}