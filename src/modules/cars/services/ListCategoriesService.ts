import { Category } from "../model/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

class ListCategoriesService {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: ICategoriesRepository) { }
  execute(): Category[] {
    const categories = this.repository.list();
    return categories;
  }
}

export { ListCategoriesService };
