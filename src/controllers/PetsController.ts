import { Request, Response } from "express";
import knex from '../database/connection';

class PetsController {
  async show (request: Request, response: Response) {
    const { id } = request.params;

    const pet = await knex('pets').where('id', id).first();

    if (!pet) {
      return response.status(404).json({ message: 'Pet not found.' });
    }

    const categories = await knex('categories')
      .join('pets_category', 'categories.id', '=', 'pets_category.category_id')
      .where('pets_category.pet_id', id)
      .select('categories.title');

    return response.json({ pet, categories });
  }

  async create (request: Request, response: Response) {
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

    const pet = {
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
    };
  
    const insertedIds = await trx('pets').insert(pet);
  
    const pet_id = insertedIds[0];
  
    const petsCategory = category.map((category_id: number) => {
      return {
        category_id,
        pet_id
      }
    })
  
    await trx('pets_category').insert(petsCategory);

    await trx.commit();
  
    return response.json({
      id: pet_id,
      ...pet,
    });
  }
}

export default PetsController; 