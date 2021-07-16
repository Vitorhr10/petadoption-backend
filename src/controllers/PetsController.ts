import knex from '../database/connection';
import { Request, Response } from "express";

class PetsController {
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
  
    return response.json({
      id: pet_id,
      ...pet,
    });
  }
}

export default PetsController; 