import { Router } from "express";

import { specificationController } from "../modules/cars/controllers/Specifications/CreateSpecification";
import { listSpecificationController } from "../modules/cars/controllers/Specifications/ListSpecifications";

export const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  return specificationController.handle(req, res);
});

specificationsRoutes.get("/", (req, res) => {
  return listSpecificationController.handle(req, res);
});
