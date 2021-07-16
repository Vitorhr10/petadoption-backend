import { Request, Response } from "express";
import knex from '../database/connection';
class CategoriesController {
  async index (request: Request, response: Response) {
    const categories = await knex('categories').select('*');
  
    const serializedCategories = categories.map(category => {
      return {
        id: category.id,
        title: category.title,
        image_url: `http://localhost:3333/uploads/${category.image}`,
      };
    })
  
    return response.json(serializedCategories);
  }
}

export default CategoriesController;
