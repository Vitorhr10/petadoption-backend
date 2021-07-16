import express from 'express';

import PetsController from './controllers/PetsController';
import CategoriesController from './controllers/CategoriesController';

const routes = express.Router();
const petsController = new PetsController();
const categoriesController = new CategoriesController();

routes.get('/categories', categoriesController.index);

routes.post('/pets', petsController.create);
routes.get('/pets/:id', petsController.show);

export default routes;
