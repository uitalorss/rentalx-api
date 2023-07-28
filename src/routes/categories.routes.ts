import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/createCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const categoryService = new CreateCategoryService(categoriesRepository);
  categoryService.execute({ name, description });
  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  return res.status(200).json(categoriesRepository.list());
});

export { categoriesRoutes };
