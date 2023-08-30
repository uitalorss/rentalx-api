import { Request, Response } from "express";

import { CreateCategoryService } from "../../../services/Categories/CreateCategoryService";

class CreateCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createCategoryService: CreateCategoryService) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;
    try {
      await this.createCategoryService.execute({ name, description });
      return res.status(201).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
}

export { CreateCategoryController };
