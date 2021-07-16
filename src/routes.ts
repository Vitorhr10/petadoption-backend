import express from 'express';
import { Knex } from 'knex';
import knex from './database/connection';

import PetsController from './controllers/PetsController';

const routes = express.Router();
const petsController = new PetsController();

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

routes.post('/pets', petsController.create);

export default routes;
