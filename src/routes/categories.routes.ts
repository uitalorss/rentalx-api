import { Router } from "express";

import { categoryController } from "../modules/cars/controllers/CreateCategory";
import { listCategoriesController } from "../modules/cars/controllers/ListCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return categoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

export { categoriesRoutes };
