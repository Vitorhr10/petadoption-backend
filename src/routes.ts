import express, { request } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/categories', async (request, response) => {
  const categories = await knex('categories').select('*');

  const serializedCategories = categories.map(categorie => {
    return {
      id: categorie.id,
      title: categorie.title,
      image_url: `http://localhost:3333/uploads/${categorie.image}`,
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
    categorie
  } = request.body;

  const ids = await knex('pets').insert({
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

  const petsCategorie = categorie.map((categorie_id: number) => {
    return {
      categorie_id,
      pet_id: ids[0],
    }
  })

  await knex('pets_categorie').insert(petsCategorie);

  return response.json({message:"true"});
})

export default routes;