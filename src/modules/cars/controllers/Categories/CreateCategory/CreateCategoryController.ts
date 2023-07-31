import { Request, Response } from "express";

import { CreateCategoryService } from "../../../services/Categories/CreateCategoryService";

class CreateCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createCategoryService: CreateCategoryService) { }

  handle(req: Request, res: Response) {
    const { name, description } = req.body;
    this.createCategoryService.execute({ name, description });
    return res.status(201).send();
  }
}

export { CreateCategoryController };
