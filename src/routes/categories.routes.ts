import { Router } from "express";
import multer from "multer";

import { categoryController } from "../modules/cars/controllers/Categories/CreateCategory";
import { importCategoriesController } from "../modules/cars/controllers/Categories/ImportCategories";
import { listCategoriesController } from "../modules/cars/controllers/Categories/ListCategories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
  return categoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoriesController.handle(req, res);
});

export { categoriesRoutes };
