import { Request, Response } from "express";

import { ImportCategoriesService } from "../../../services/Categories/ImportCategoriesService";

class ImportCategoriesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private importCategoriesService: ImportCategoriesService) { }
  handle(req: Request, res: Response): Response {
    const { file } = req;
    this.importCategoriesService.execute(file);
    return res.send();
  }
}

export { ImportCategoriesController };
