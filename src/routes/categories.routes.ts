import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  categoriesRepository.create({ name, description });
  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  return res.status(200).json(categoriesRepository.list());
});

export { categoriesRoutes };
