import { Request, Response } from "express";

import { ListCategoriesService } from "../../services/ListCategoriesService";

class ListCategoriesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listCategoriesService: ListCategoriesService) { }
  handle(req: Request, res: Response) {
    const list = this.listCategoriesService.execute();
    return res.status(200).json(list);
  }
}

export { ListCategoriesController };
