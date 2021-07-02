import { Knex } from 'knex';

export async function seed(knex: Knex){
  await knex('categories').insert([
    { title: 'Cachorros', image: 'cachorros.svg'},
    { title: 'Gatos', image: 'gatos.svg'},
    { title: 'Outros', image: 'outros.svg'},
  ]);
}