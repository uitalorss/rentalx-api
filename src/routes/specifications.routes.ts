import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/createSpecificationService";

export const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const specificationService = new CreateSpecificationService(
    specificationsRepository,
  );
  specificationService.execute({ name, description });
  return res.status(201).send();
});

specificationsRoutes.get("/", (req, res) => {
  return res.status(200).json(specificationsRepository.list());
});
