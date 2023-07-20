import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if (categoryAlreadyExists) {
    return res.status(400).json({ error: "Categoria já existe" });
  }

  categoriesRepository.create({ name, description });
  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  return res.status(200).json(categoriesRepository.list());
});

export { categoriesRoutes };
