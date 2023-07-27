import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  // eslint-disable-next-line prettier/prettier
  constructor(private repository: CategoriesRepository) { }
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.repository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Categoria já existe");
    }

    this.repository.create({ name, description });
  }
}
