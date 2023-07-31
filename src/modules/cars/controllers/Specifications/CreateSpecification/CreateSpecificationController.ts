import { Request, Response } from "express";

import { CreateSpecificationService } from "../../../services/Specifications/CreateSpecificationService";

class CreateSpecificationController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createSpecificationService: CreateSpecificationService) { }

  handle(req: Request, res: Response) {
    const { name, description } = req.body;
    this.createSpecificationService.execute({ name, description });
    return res.status(201).send();
  }
}

export { CreateSpecificationController };
