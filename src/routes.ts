import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/categories', async (request, response) => {
  const categories = await knex('categories').select('*');

  const serializedCategories = categories.map(categorie => {
    return {
      title: categorie.title,
      image_url: `http://localhost:3333/uploads/${categorie.image}`,
    };
  })

  return response.json(serializedCategories);
});

export default routes;