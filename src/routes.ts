import express from 'express';
import { Knex } from 'knex';
import knex from './database/connection';

const routes = express.Router();

routes.get('/categories', async (request, response) => {
  const categories = await knex('categories').select('*');

  const serializedCategories = categories.map(category => {
    return {
      id: category.id,
      title: category.title,
      image_url: `http://localhost:3333/uploads/${category.image}`,
    };
  })

  return response.json(serializedCategories);
});

routes.post('/pets', async (request, response) => {
  const {
    name,
    email,
    cellphone,
    gender,
    latitude,
    longitude,
    city,
    uf,
    additionalInfo,
    category
  } = request.body;

  const trx = await knex.transaction();

  const insertedIds = await trx('pets').insert({
    image: 'image-fake',
    name,
    email,
    cellphone,
    gender,
    latitude,
    longitude,
    city,
    uf,
    additionalInfo,
  });

  const pet_id = insertedIds[0];

  const petsCategory = category.map((category_id: number) => {
    return {
      category_id,
      pet_id
    }
  })

  await trx('pets_category').insert(petsCategory);

  return response.json({message:"true"});
})

export default routes;
