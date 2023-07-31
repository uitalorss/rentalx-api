import { Request, Response } from "express";

import { ListSpecificationsService } from "../../../services/Specifications/ListSpecificationsService";

class ListSpecificationController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listSpecificationService: ListSpecificationsService) { }

  handle(req: Request, res: Response) {
    return res.status(200).json(this.listSpecificationService.execute());
  }
}

export { ListSpecificationController };
